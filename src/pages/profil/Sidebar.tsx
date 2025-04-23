"use client";

import { useState } from "react";
import { Calendar, Inbox, Search, Menu } from "lucide-react";
import Facebook from "@/assets/svg/facebook";

const items = [
  { title: "Mening to'lovlarim", href: "#", icon: Facebook },
  { title: "To'lovlar tarixi", href: "#", icon: Inbox },
  { title: "Online Buyurtmalar", href: "#", icon: Calendar },
  { title: "Chiqish", href: "#", icon: Search },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile nav toggle */}
      <div className="md:hidden p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ilova</h1>
        <button onClick={() => setOpen(!open)} className="text-gray-700">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:shadow-none`}>
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Ilova menyusi</h2>
          <nav className="space-y-2">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
