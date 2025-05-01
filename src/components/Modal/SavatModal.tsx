import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/typr";
import Image from "next/image";
import {
  minuscount,
  pluscount,
  removeCart,
} from "../../store/Slice/cart.slice";
import Link from "next/link";
import Trash from "@/assets/svg/trash";

type Props = {
  savatModal: boolean;
  setSavatModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const SavatModal: React.FC<Props> = ({ setSavatModal, savatModal }) => {
  if (!savatModal) return null;
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItem.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const remove = (id: number) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => {
          setSavatModal(false);
        }}
      ></div>

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
          <div className="flex justify-between ">
            <div className=" w-[60%] overflow-x-auto h-[400px] mt-5">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex  w-[100%]  rounded-full my-3 px-5  justify-between items-center py-2 "
                >
                  <div className="flex gap-3 items-center">
                    <Image
                      src={item.imageUrl}
                      width={50}
                      height={45}
                      alt="img"
                      className="object-cover"
                    />
                    <p className="text-xl">{item.name}</p>
                  </div>

                  <div className="flex gap-5 justify-between w-[45%]">
                    <div className="flex gap-5 items-center bg-[#f5f5f5] rounded-lg">
                      <button
                        onClick={() => {
                          dispatch(minuscount(item.id));
                        }}
                        className="  rounded-full px-4 py-1 text-2xl cursor-pointer"
                      >
                        -
                      </button>
                      <p>{item.count}</p>
                      <button
                        onClick={() => {
                          dispatch(pluscount(item.id));
                        }}
                        className=" rounded-full px-3 py-0.5 text-2xl cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex gap-2 items-center">
                      <p className="text-xl font-bold">
                        {(item.count * item.price).toLocaleString("ru")} So`m
                      </p>
                      <button
                        onClick={() => remove(item.id)}
                        className=" px-2 py-1 rounded-lg  cursor-pointer"
                      >
                        <Trash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="w-40% border-1 border-[lightgrey] py-4 px-20 rounded-xl mt-10">


                <p className="text-2xl font-bold text-end">
                  Jami: {totalPrice.toLocaleString("ru")} so'm
                </p>

                <p>{}</p>
              </div>

             <Link href={"/buyurtma"}>
             <button className="bg-[#33698D] text-cl font-bold text-center py-3 px-36 text-white rounded-lg mt-4 cursor-pointer" onClick={()=>{
              setSavatModal(false)
             }}>
                Rasmiylashtirish
              </button> 
             </Link>
            </div>
          </div>
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
