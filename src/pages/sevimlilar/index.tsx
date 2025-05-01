import { RootState } from "@/store/typr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import yurakQora from "../../assets/svg/yurakQora.svg";
import yurakQizil from "../../assets/svg/yurakQizil.svg";
import savatIcon from "../../assets/svg/savatIcon.svg";

import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../../components/Card";
import { addToCart } from "@/store/Slice/cart.slice";
import { like } from "@/store/Slice/like.slice";
import CartItem from "@/components/CartItem";

function Sevimlilar() {
  const likeItems = useSelector((state: RootState) => state.likeProduct.items);
  const dispatch = useDispatch();

  const addCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const likeProduct = (product: ProductType) => {
    dispatch(like(product));
  };

  return (
    <div className="flex gap-5 flex-wrap py-8  container mx-auto">
      {likeItems.length > 0 ? (
        <>
          {likeItems.map((item) => {
            const isliked = likeItems.some((i) => i.id === item.id);
            return (
              <CartItem item={item} key={item.id}/>
            );
          })}
        </>
      ) : (
        <div className="inline-block w-full">
          <div className=" ml-[39%] mt-5 text-4xl font-bold">Sevimlilar bo'sh !</div>
          <Link href={"/"}>
            <button className="border-1 border-[#2C698D] cursor-pointer px-20 py-3 text-2xl font-bold rounded-lg mx-[37%] mt-7">
              Asosiyga otish
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Sevimlilar;
