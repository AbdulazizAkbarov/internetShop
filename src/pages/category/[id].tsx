"use client"

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import savatIcon from "../../assets/svg/savatIcon.svg";
import yurakIcon from "../../assets/svg/yurakIcon.svg";
import Link from "next/link";
export type CategoriesPage = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    createdAt: string;
    imageUrl: string;
  };
  
function Category() {
    const params = useParams();
    const id = params?.id;
    const [category, setCategory] = useState<CategoriesPage[]>([]);
  
    useEffect(() => {
      axios
        .get(`https://nt.softly.uz/api/front/products?categoryId=${id}&page=1&limit=10`)
        .then((res) => {
          setCategory(res.data.items);
        });
    }, [id]);
  
    if (!id) {
      return <div>Bunday Id Mavjud Emas</div>;
    }
  
    if (category.length === 0) {
      return <div>Malumot Yo'q</div>;
    }
  
    return (
      <div className="flex flex-wrap gap-4 px-12 py-6">
        {category.map((item) => (
          <div
            key={item.id}
            className="w-[220px] mt-6 relative hover:scale-[1.05] transition-transform shadow-2xl p-3 rounded-xl flex flex-col justify-between"
          >
            <Link href={`/product/${item.id}`}>
              <Image
                className="w-[200px] h-[190px]  mb-4 object-contain"
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
              <h2 className="bg-[#ECECEC] inline-block rounded text-md my-4 ">
                {item.description}
              </h2>
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between">
                <h2>{item.price.toLocaleString("ru")} so'm</h2>
              </div>
              <div className="border-2 border-[#2C698D] p-1 rounded cursor-pointer">
                <Image src={savatIcon} alt="add-to-cart" width={20} height={20} />
              </div>
            </div>
            <p className="text-sm text-gray-500">Qolgan: {item.stock} dona</p>
          </div>
        ))}
      </div>
    );
  }
  export default Category