import { RootState } from '@/components/layout/store/typr'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import yurakQora from "../../assets/svg/yurakQora.svg";
import yurakQizil from "../../assets/svg/yurakQizil.svg";
import savatIcon from "../../assets/svg/savatIcon.svg";

import { useDispatch, useSelector } from 'react-redux'
import { ProductType } from '../Card';
import { addToCart } from '@/components/layout/store/Slice/cart.slice';
import { like } from '@/components/layout/store/Slice/like.slice';

function Sevimlilar() {

  const likeItems =useSelector((state:RootState)=>state.likeProduct.items)
  const dispatch = useDispatch();

  const addCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const likeProduct = (product: ProductType) => {
    dispatch(like(product));
  };

  return (
    <div className='flex gap-5 flex-wrap py-8 px-12'>
     {likeItems.length>0?(
      <>
       {likeItems.map((item)=>{
        const isliked =likeItems.some(i=>i.id===item.id)
        return(
          <div
            key={item.id}
            className="w-[220px] mt-6 relative hover:scale-[1.05] transition-transform shadow-2xl p-3 rounded-xl flex flex-col justify-between "
          >
            <Link href={`/product/${item.id}`}>
              <Image
                className="w-[200px] h-[190px] bg-[#F7F7F7] mb-4 object-contain"
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={190}
              />
            </Link>

            <button onClick={() => {
              likeProduct(item)
            }}>
              <Image
                className="w-[20px] absolute top-0 right-1 cursor-pointer"
                src={isliked?yurakQizil:yurakQora}
                alt="heart"
              />
            </button>

            <h2 className="font-semibold">{item.name}</h2>

            <h2 className="bg-[#ECECEC] px-2 inline-block rounded text-md my-4 text-overflow: ellipsis">
              {item.description}
            </h2>

            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between">
                <h2>{item.price.toLocaleString("ru")} so'm</h2>
              </div>

              <button
                className="border-2 border-[#2C698D] p-1 rounded cursor-pointer "
                onClick={() => addCart(item)}
              >
                <Image
                  src={savatIcon}
                  alt="add-to-cart"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        )
      })}
      </>
     ):(
      <div>
        <div>Sevimlilar bo'sh</div>
        <button className='border-1 border-[#2C698D]'>Asosiyga otish</button>
      </div>
      
     )}

    </div>
  )
}

export default Sevimlilar