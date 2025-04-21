<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>;

import React, { useEffect, useState } from "react";
import savatIcon from "../assets/svg/savatIcon.svg";
import yurakQora from "../assets/svg/yurakQora.svg";
import yurakQizil from "../assets/svg/yurakQizil.svg";

import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/components/layout/store/Slice/cart.slice";
import { like } from "@/components/layout/store/Slice/like.slice";
import { RootState } from "@/components/layout/store/typr";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  categoryId: number;
  description: string;
  createdAt: string;
  imageUrl: string;
  isLiked?: boolean;
};

function Card() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const likeItems = useSelector((state: RootState) => state.likeProduct.items);

useEffect(()=>{

  axios.get("https://nt.softly.uz/api/front/products?page=1&limit=10").then((res)=>{
    setProduct(res.data.items )
  })

},[])
  const dispatch = useDispatch();

  const addCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const likeProduct = (product: ProductType) => {
    dispatch(like(product));
  };

  return (
    <div className=" grid grid-cols-5 mx-auto ml-12 my-6 px-12 ">
      {product.map((item) => {
        const isliked = likeItems.some((i) => i.id === item.id);

        return (
          <div
            key={item.id}
            className="w-[320px] mt-6 relative h-[450px] hover:scale-[1.05] transition-transform shadow-2xl p-3 rounded-xl flex flex-col justify-between "
          >
            <Link href={`/product/${item.id}`}>
              <Image
                className="w-[310px] h-[190px] mb-4 object-contain"
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={190}
              />
            </Link>

            <button
              onClick={() => {
                likeProduct(item);
              }}
            >
              <Image
                className="w-[20px] absolute top-0 right-1 cursor-pointer"
                src={isliked ? yurakQizil : yurakQora}
                alt="heart"
              />
            </button>

            <h2 className="font-semibold text-2xl">{item.name}</h2>

            <p>
            {item.description}

            </p>

            <h2 className="bg-[#ECECEC] px-2 inline-block w-[160px]  rounded-lg text-md my-4">
              3000 so'm/oy
            </h2>

            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{item.price.toLocaleString("ru")} so'm</h2>
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
        );
      })}
    </div>
  );
}

export default Card;
