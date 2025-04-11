import React, { useEffect, useState } from "react";
import savatIcon from "../assets/svg/savatIcon.svg";
import yurakIcon from "../assets/svg/yurakIcon.svg";

import Image from "next/image";
import axios from "axios";

type ProductType = {
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

  useEffect(() => {
    axios
      .get("https://nt.softly.uz/api/front/products?page=1&limit=10")
      .then((res) => {
        setProduct(res.data.items);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-evenly my-6">
      {product.map((item) => (
        <div
          key={item.id}
          className="w-[220px] mt-6 relative hover:scale-[1.05] transition-transform shadow-2xl p-3 rounded-xl flex flex-col justify-between "
        >
          <Image
            className="w-[200px] h-[190px] bg-[#F7F7F7] mb-4 object-contain"
            src={item.imageUrl}
            alt={item.name}
            width={200}
            height={190}
          />

          <Image
            className="w-[20px] absolute top-0 right-1 cursor-pointer"
            src={yurakIcon}
            alt="heart"
          />

          <h2 className="font-semibold">{item.name}</h2>

          <h2 className="bg-[#ECECEC] px-2 inline-block rounded text-md my-4 text-overflow: ellipsis">
            {item.description}
          </h2>

          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between">
              <h2>{item.price.toLocaleString("ru")} so'm</h2>
            </div>

            <div className="border-2 border-[#2C698D] p-1 rounded cursor-pointer ">
              <Image src={savatIcon} alt="add-to-cart" width={20} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
