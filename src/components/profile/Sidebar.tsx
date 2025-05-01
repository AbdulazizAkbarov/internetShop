import {
  CreditCard,
  DoorOpen,
  ListOrdered,
  Menu,
  PieChart,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar({ setChange }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
        <div className="pt-12 px-4 space-y-4">
          <p className="flex items-center space-x-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition">
            <CreditCard className="w-13 h-13 bg-[#f3f1f1] p-4 rounded-full border border-grey" />
            <span className="font-bold">Mening tolovlarim</span>
          </p>
          <p className="flex items-center space-x-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition">
            <PieChart className="w-13 h-13 bg-[#f3f1f1] p-4 rounded-full border border-grey" />
            <span className="font-bold">To'lovlar tarixi</span>
          </p>
          <p
            onClick={() => setChange("foydalanuvchi")}
            className="flex items-center space-x-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition"
          >
            <User className="w-13 h-13 bg-[#f3f1f1] p-4 rounded-full border border-grey" />
            <span className="font-bold">Foydalanuvchi</span>
          </p>
          <p
            onClick={() => {
              setChange("buyurtma");
            }}
            className="flex items-center space-x-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition"
          >
            <ListOrdered className="w-13 h-13 bg-[#f3f1f1] p-4 rounded-full border border-grey" />
            <span className="font-bold">Online Buyurtmalar</span>
          </p>
          <p className="flex items-center space-x-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition">
            <DoorOpen className="w-13 h-13 bg-[#f3f1f1] p-4 rounded-full border border-grey" />
            <span className="font-bold">Chiqish</span>
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}
