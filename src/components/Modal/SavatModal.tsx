import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../layout/store/typr";
import Image from "next/image";
import {  minuscount, pluscount, removeCart } from "../layout/store/Slice/cart.slice";
import Link from "next/link";

type Props = {
  savatModal: boolean;
  setSavatModal:React.Dispatch<React.SetStateAction<boolean>>
};

const SavatModal: React.FC<Props> = ({ setSavatModal, savatModal }) => {



  if (!savatModal) return null;
    const cartItem =useSelector((state:RootState)=>state.cart.items)
    const dispatch =useDispatch()

    const remove =(id:number)=>{
      dispatch(removeCart(id))
    }
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={()=>{
        setSavatModal(false)
      }}>

      </div>

      <div className="relative bg-white w-[1480px] h-[500px] text-black p-5  shadow-lg z-50 rounded-xl">
        <p></p>
        <button
          className="absolute top-2 right-2 bg-gray-200 text-black text-xl px-3 py-1 rounded-full"
          onClick={() => {
            setSavatModal(false);
          }}
        >
          x
        </button>


        {cartItem.length > 0 ? (
            <>
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex border-1 border-[lightgrey] w-[50%] mx-auto rounded-full    my-2 px-5  justify-between items-center py-2"
                >
                  <div className="flex gap-3 items-center">
                    <Image
                      src={item.imageUrl}
                      width={70}
                      height={70}
                      alt="img"
                    />
                    <p className="text-2xl">{item.name}</p>
                  </div>

                  <div className="flex gap-5 items-center">
                    <button
                      onClick={() => {
                        dispatch(minuscount(item.id));
                      }}
                      className=" border-1 border-[grey] rounded-full px-4 py-1 text-2xl cursor-pointer"
                    >
                      -
                    </button>
                    <p>{item.count}</p>
                    <button
                      onClick={() => {
                        dispatch(pluscount(item.id));
                      }}
                      className=" border-1 border-[grey] rounded-full px-3 py-0.5 text-2xl cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex gap-2 items-center">
                    <p className="text-xl font-bold font-mono">
                      {(item.count * item.price).toLocaleString("ru")} So`m
                    </p>
                    <button
                      onClick={() => remove(item.id)}
                      className=" text-red-500 border-1 px-2 py-1 rounded-xl  cursor-pointer"
                    >
                      Delet
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center flex flex-col items-center">
              <h2 className="text-2xl font-bold">Savat Bo'sh !</h2>

            </div>
          )}

      </div>
    </div>
  );
};

export default SavatModal;
