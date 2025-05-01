<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>;

import React, { useEffect, useState } from "react";

import axios from "axios";
import CartItem from "./CartItem";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  categoryId: number;
  description: string;
  createdAt: string;
  imageUrl: string;
  isLiked?: boolean;
  count?: number;
};

function Card() {
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get("https://nt.softly.uz/api/front/products?page=1&limit=10")
      .then((res) => {
        setProduct(res.data.items);
      });
  }, []);

  return (
    <div className=" grid grid-cols-5  gap-5 mx-auto my-6   container ">
      {product.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Card;
