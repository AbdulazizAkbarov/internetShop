import { RootState } from "@/components/layout/store/typr";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import dynamic from "next/dynamic";
import OnlineBuyurtma from "@/components/profile/OnlineBuyurtma";
import Sidebar from "@/components/profile/Sidebar";
const Foydalanuvchi =dynamic(()=>import("../../components/profile/Foydalanuvchi"),{
  ssr:false
})
type OrderProduct = {
  items: [
    {
      id: number;
      customerId: number;
      totalPrice: number;
      status: number;
      createdAt: Date;
      items: [
        {
          id: number;
          orderId: number;
          productId: number;
          quantity: number;
          price: number;
        }
      ];
    }
  ];
};

function Profile() {
  const user = useSelector((state: RootState) => state.login);
  const [orderProduct, setOrderProduct] = useState<OrderProduct[]>([]);
  const [change, setChange] = useState("foydalanuvchi");

  useEffect(() => {
    axios
      .get(
        "https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC&status=pending&customerId=1",
        { headers: { Authorization: `Bearer ${user?.accessToken}` } }
      )
      .then((res) => {
        setOrderProduct(res.data);
        console.log("malumott", res.data);
      });
  }, []);

  return (
    <div className="flex mt-3 container mx-auto ">
      <Sidebar setChange={setChange} />

      <div>
        {change === "buyurtma" ? (
          <>
            <OnlineBuyurtma />
          </>
        ) : (
          <>
            <Foydalanuvchi />
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
