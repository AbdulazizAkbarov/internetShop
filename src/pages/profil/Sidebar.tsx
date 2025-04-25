"use client";

import { useState } from "react";
import {  Menu, CreditCard, PieChart, ListOrdered, DoorOpen } from "lucide-react";
const items = [
  { title: "Mening to'lovlarim", href: "#", icon:CreditCard},
  { title: "To'lovlar tarixi", href: "#", icon:PieChart },
  { title: "Online Buyurtmalar", href: "#", icon: ListOrdered },
  { title: "Chiqish", href: "#", icon: DoorOpen },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ilova</h1>
        <button onClick={() => setOpen(!open)} className="text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform transition-transform duration-300
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:shadow-none`}
      >
     
        <div className=" pt-12">

          <nav className="space-y-2">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition"
              >
                <item.icon className="w-13 h-13 bg-[#f3f1f1] p-4 rounded-full border-1 border-[grey]\" />
                <span className="font-bold">{item.title}</span>
              </a>
              
            ))}
          </nav>

            
        

          
        </div>
      </div>

      
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
