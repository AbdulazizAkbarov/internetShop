"use client";
import axios from "axios";
import { Cable } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Card from "../Card";
export type ProductTypes = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  createdAt: string;
  imageUrl: string;
};

function Product() {
  const params = useParams();

  const id = params?.id;

  const [product, setProduct] = useState<ProductTypes>();

  useEffect(() => {
    axios.get(`https://nt.softly.uz/api/front/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!id) {
    return <div>Bunday Id Mavjud Emas</div>;
  }

  if (!product) {
    return <div>Mahsulot Yo'q</div>;
  }

  return <div className="px-12 mx-auto">

    <p className="text-4xl font-bold mt-8 ml-5">{product.name}</p>
    <div className="bg-[lightgrey] w-full h-[1px] mt-4"></div>


    <div className=" flex gap-7 my-16">

        <Image src={product.imageUrl} alt="sdf" width={350} height={400}/>


        <div className="mt-12">
            <p className="text-3xl font-bold mb-3">Mahsulot Haqida Qisqacha :</p>
    <div className="bg-[lightgrey] w-full h-[1px] my-3"></div>
            
            <p className="text-xl font-semibold text-[grey]"> <span className="text-[black] text-2xl">Nomi : </span>{product.name}</p>
    <div className="bg-[lightgrey] w-full h-[1px] my-3"></div>
          
            <p className="text-xl font-semibold text-[grey]"> <span className="text-[black] text-2xl">Mahsulot Haqida : </span>{product.description}</p>
    <div className="bg-[lightgrey] w-full h-[1px] my-3"></div>

            <p className="text-xl font-semibold text-[grey]"> <span className="text-[black] text-2xl">Nechta Qolgani : </span>{product.stock}</p>
    <div className="bg-[lightgrey] w-full h-[1px] my-3"></div>
           
            <p className="text-xl font-semibold text-[grey]"> <span className="text-[black] text-2xl">Narxi : </span>{(product.price).toLocaleString("ru")} s o'm</p>

        </div>
    </div>


    <div className="bg-[lightgrey] w-full h-[1px] mt-4"></div>

    <div>
        <h2 className="text-4xl font-bold mt-8 ml-5">O'xshash Mahsulotlar :</h2>

        <Card/>
    </div>





  </div>;
}

export default Product;
