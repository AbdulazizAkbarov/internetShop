import {
  minuscount,
  pluscount,
}  from "@/components/layout/store/Slice/cart.slice";
import { RootState } from "@/components/layout/store/typr";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Buyurtma() {
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const [yetqazish,setYetqazish]=useState(true)

  const dispatch = useDispatch();
  const totalPrice = cartItem.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  return (
    <div className="px-12">
      <h2 className="text-3xl font-bold mt-8">Xaridni Rasmiylashtirish</h2>
      <div className="bg-[lightgrey] w-full h-[1px] my-12"></div>

      <div className="flex justify-between ">
        <div>
          <div className="mb-5 flex items-center gap-2">
            <h2 className="bg-black px-4 py-2 rounded-full text-xl font-bold text-white inline-block">
              1
            </h2>
            <h2 className="text-2xl font-bold text-black">
              Sizning Ma'lumotingiz
            </h2>
          </div>
          <input
            type="phone"
            placeholder="+998"
            className="border-1 border-[lightgrey] outline-none p-4 w-[1000px] rounded-lg placeholder:text-[black] font-bold text-xl mb-5"
          />
          <div className="flex gap-2 items-center mt-4">
            <input
              type="text"
              placeholder="Ism"
              className="border-1 border-[lightgrey] outline-none p-4 w-[490px] rounded-lg "
            />
            <input
              type="text"
              placeholder="Familya"
              className="border-1 border-[lightgrey] outline-none p-4 w-[500px] rounded-lg"
            />
          </div>

          <div className="mb-5 flex items-center gap-2 my-12">
            <h2 className="bg-black px-4 py-2 rounded-full text-xl font-bold text-white inline-block">
              2
            </h2>
            <h2 className="text-2xl font-bold text-black">
              Qabul qilish usuli
            </h2>
          </div>

          <div>
            <button className="p-4 text-center px-44 border-1 border-[lightgrey] rounded-lg cursor-pointer mr-5" onClick={()=>{
              setYetqazish(true)
            }}>Yetkazib Berish</button>
            
            <button className="p-4 text-center px-44 border-1 border-[lightgrey] rounded-lg cursor-pointer" onClick={()=>{
              setYetqazish(false)
            }}>Dokondan Olib ketish</button>
          </div>

          <div>{yetqazish ? "Salom" :"alik"}</div>
        </div>

        <div className="border-1 border-[lightgrey] p-4 w-[500px] rounded-xl">
          <h2 className="font-bold text-2xl">Buyurtmadagi mahsulotlar</h2>
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex  w-[100%] flex-col  rounded-full my-2 px-5  justify-between items-start py-2"
            >
              <div className="flex gap-5 items-center  justify-start">
                <Image src={item.imageUrl} width={70} height={70} alt="img" />
                <div>
                  <p className="text-xl">{item.name}</p>

                  <div className="flex gap-9 items-center justify-between w-[100%]">
                    <p className="text-xl font-bold">
                      {(item.count * item.price).toLocaleString("ru")} So`m
                    </p>

                    <p>{item.count} ta</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <p className="text-2xl font-bold text-end">
            Jami: {totalPrice.toLocaleString("ru")} so'm
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buyurtma;
