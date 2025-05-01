import { RootState } from "@/components/layout/store/typr";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
type OrderType = {
  items: [
    {
      id: number;
      customerId: number;
      totalPrice: number;
      status: string;
      createdAt: string;
      items: [
        {
          id: number;
          orderId: number;
          productId: number;
          quantity: number;
          price: number;
          product: {
            id: number;
            name: string;
            description: string;
            price: number;
            stock: number;
            categoryId: number;
            createdAt: string;
            imageUrl: string;
          };
        }
      ];
    }
  ];
};

function OnlineBuyurtma() {
  const [orders, setOrders] = useState<OrderType>();
  const accessToken = useSelector(
    (state: RootState) => state.login.accessToken
  );

  useEffect(() => {
    axios
      .get(
        "https://nt.softly.uz/api/front/orders?limit=10&page=1&order=ASC&status=pending&customerId=1",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  if (!orders) {
    <>Loading...</>;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-7">
        {orders?.items.map((i) => {
          return (
            <div className="border-1 border-[lightgrey] p-5 rounded-lg">
              <div className="flex justify-between">
                <p className="font-bold">Buyurtma Id :{i.id}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-white text-sm ${
                    i.status === "pending" ? "bg-yellow-500" : "bg-green-600"
                  }`}
                >
                  {i.status}
                </span>
              </div>

              <div>
                {i.items.map((item) => {
                  return (
                    <div className="flex items-center justify-between my-3 border-[1px] border-[lightgrey] m-2 p-2 rounded-lg">
                      <div className="flex gap-2 items-center ">
                        <Image
                          src={item.product.imageUrl}
                          width={50}
                          height={50}
                          alt="xscd"
                        />
                        <div>
                          <p className="font-bold">{item.product.name}</p>
                          <p className="font-bold">
                            {item.product.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p>
                          <span className="font-bold">
                            {item.product.stock}
                          </span>{" "}
                          dona
                        </p>
                        <p>
                          <span className="font-bold">
                            {item.product.price.toLocaleString("ru")}
                          </span>{" "}
                          min so'm
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OnlineBuyurtma;
