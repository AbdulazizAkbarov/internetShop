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
import { useDispatch } from "react-redux";
import {
  addsevimli,
  addToCart,
} from "@/components/layout/store/Slice/cart.slice";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  categoryId: number;
  description: string;
  createdAt: string;
  imageUrl: string;
};

function Card() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  useEffect(() => {
    axios
      .get("https://nt.softly.uz/api/front/products?page=1&limit=10")
      .then((res) => {
        setProduct(res.data.items);
        console.log(res.data);
      });
  }, []);

  const dispatch = useDispatch();

  const addCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  const addSevimlilar = (product: ProductType) => {
    dispatch(addsevimli(product));
  };
  const toggleLike = (id: number) => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((productId) => productId !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-evenly my-6 px-12">
      {product.map((item) => {
        const isLiked = likedProducts.includes(item.id);

        return (
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

            <button
              onClick={() => {
                toggleLike(item.id);
                addSevimlilar(item);
              }}
            >
              <Image
                className="w-[20px] absolute top-0 right-1 cursor-pointer"
                src={isLiked ? yurakQizil : yurakQora}
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
        );
      })}
    </div>
  );
}

export default Card;
