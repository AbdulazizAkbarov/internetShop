"use client";
import axios from "axios";
import { Cable } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { GetServerSidePropsContext } from "next";
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

function Product({product}:{product:ProductTypes} ) {
  console.log(product);
  
  const params = useParams();

  const id = params?.id;


  if (!id) {
    return <div>Bunday Id Mavjud Emas</div>;
  }

  if (!product) {
    return <div>Mahsulot Yo'q</div>;
  }

  return <div className="container mx-auto">

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
           
            <p className="text-xl font-semibold text-[grey]"> <span className="text-[black] text-2xl">Narxi : </span> {product.price ? product.price.toLocaleString("ru") + " s o'm" : "Narxi mavjud emas"}</p>

        </div>
    </div>


    <div className="bg-[lightgrey] w-full h-[1px] mt-4"></div>

    <div>
        <h2 className="text-4xl font-bold mt-8 ml-5">O'xshash Mahsulotlar :</h2>

        <Card/>
    </div>





  </div>;
}


export const getServerSideProps =async({req}:GetServerSidePropsContext)=>{
  const res1 = await fetch(`https://nt.softly.uz/api/front/products/${req.url?.slice(9)}`)

  const product = await res1.json()

  return {props:{product:product}}
}
export default Product;
