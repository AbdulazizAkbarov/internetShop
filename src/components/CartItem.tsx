import { addToCart } from "@/components/layout/store/Slice/cart.slice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "./Card";
import { RootState } from "@/components/layout/store/typr";
import { like } from "@/components/layout/store/Slice/like.slice";
import savatIcon from "../assets/svg/savatIcon.svg";
import yurakQora from "../assets/svg/yurakQora.svg";
import yurakQizil from "../assets/svg/yurakQizil.svg";
import { toast } from "sonner";
function CartItem({ item }: { item: ProductType }) {
  const likeItems = useSelector((state: RootState) => state.likeProduct.items);

  const dispatch = useDispatch();
  const isLiked = likeItems.some((liked) => liked.id === item.id);

  const addCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const likeProduct = (product: ProductType) => {
    dispatch(like(product));
  };
  return (
    <div
      key={item.id}
      className="max-w-[320px] mt-6 relative h-[450px] transition-transform shadow-2xs hover:shadow-2xl border p-3 rounded-xl flex flex-col justify-between "
    >
      <Link href={`/product/${item.id}`}>
        <Image
          className="w-[310px] h-[190px] mb-4 object-cover rounded-xl"
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
        className="w-[35px]"
      >
        <Image
          className="w-[30] absolute top-2 right-3 cursor-pointer bg-[#fff] p-1 rounded-full"
          src={isLiked ? yurakQizil : yurakQora}
          alt="heart"
        />
      </button>

      <h2 className="font-semibold text-2xl">{item.name}</h2>

      <p>{item.description}</p>

      <h2 className="bg-[#ECECEC] px-2 inline-block w-[160px]  rounded-lg text-md my-4">
        3000 so'm/oy
      </h2>

      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {item.price.toLocaleString("ru")} so'm
          </h2>
        </div>

        <button
          className="border-2 border-[#2C698D] p-1 rounded cursor-pointer "
          onClick={() => {
            addCart(item);
            toast.success("Savatga Qo'shildi !");
          }}
        >
          <Image src={savatIcon} alt="add-to-cart" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
