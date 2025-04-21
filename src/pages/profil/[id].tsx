import { RootState } from "@/components/layout/store/typr";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import user from "../../assets/svg/userIcon.svg";
import { AppSidebar } from "./Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Qongiroq from "@/assets/svg/qongiroq";
import { Switch } from "@/components/ui/switch";
import Card from "@/assets/svg/card";
import Location from "@/assets/svg/location";

function Profil() {
  const id = useSelector((state: RootState) => state.login.user?.id);
  const name = useSelector((state: RootState) => state.login.user?.name);
  const phone = useSelector((state: RootState) => state.login.user?.phone);
  const role = useSelector((state: RootState) => state.login.user?.role);
  const [location, setLocation] = useState(true);


  return (
    <div className="px-12">
      <div className=" flex ">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
        <div>
          <div className="flex gap-6 mt-12">
            <div className="border w-[700px] rounded-lg">
              <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex gap-5 items-center">
                  <p className="px-5 py-3 font-bold  bg-[#f3f1f1]  text-2xl border-1 border-[grey] rounded-full">
                    {name?.charAt(0)}
                  </p>
                  <p className="text-xl font-bold">Shaxsiy Ma'lumotlar</p>
                </div>
                <button className="border-1 border-[grey] px-4 py-1.5 rounded cursor-pointer">
                  O'zgartirish
                </button>
              </div>

              <div className="w-full h-[1px] bg-[lightgrey] my-6"></div>

              <p className="text-xl font-bold pl-5">{name}</p>
              <p className="text-[grey] text-lg pl-4 pt-3 pb-25">
                Telefon : <span className="text-black">{phone} </span>
              </p>
            </div>

            <div className="border w-[700px] rounded-lg">
              <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex gap-5 items-center">
                  <p className="px-4 py-4 font-bold  bg-[#f3f1f1]  border-1 border-[grey] rounded-full">
                    <Qongiroq />
                  </p>
                  <p className="text-xl font-bold">Xabarlar yoki yangiliklar</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[lightgrey] my-6"></div>

              <p className="text-xl font-bold pl-5">
                Aksiyalar va chegirmalar haqida ma'lumot olish
              </p>

              <div className="p-4 flex items-center gap-12">
                <div className="flex gap-2 items-center">
                  <Switch />
                  <p>SMS orqali</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Switch />
                  <p>Telegram orqali</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-12">
            <div className="border w-[700px] rounded-lg">
              <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex gap-5 items-center">
                  <p className="px-3 py-3 font-bold  bg-[#f3f1f1]  text-2xl border-1 border-[grey] rounded-full">
                    <Card />
                  </p>
                  <p className="text-xl font-bold">Mening kartam</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[lightgrey] my-6"></div>

              <p className="text-xl font-bold pl-5 text-[grey]">Mavjud emas</p>
            </div>

            <div className="border w-[700px] rounded-lg">
              <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex gap-5 items-center">
                  <p className="px-3 py-3 font-bold  bg-[#f3f1f1]  border-1 border-[grey] rounded-full">
                    <Location />
                  </p>
                  <p className="text-xl font-bold">Yetkazib berish manzili</p>
                </div>
                <button
                  className="border-1 border-[grey] px-4 py-1.5 rounded cursor-pointer"
                  onClick={() => {
                    setLocation(false);
                  }}
                >
                  {location ? "Qo'shish" : "Yopish"}
                </button>
              </div>

              <div className="w-full h-[1px] bg-[lightgrey] my-6"></div>

              {location ? (
                <p className="text-xl font-bold pl-5 pb-15">
                  Manzil Kirgizilmagan
                </p>
              ) : (
                <div>
                  <select
                    name=""
                    id=""
                    className="w-[96%] mx-auto ml-3  py-4 rounded p-2 text-lg border-1 border-[lightgrey] "
                  >
                    <option className="rounded p-2" value="">
                      Viloyatni Tanlang{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Farg'ona Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Namangan Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Andijon Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Toshkent Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Samarqand Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Buxoro Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Surhondaryo Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Qashqadaryo Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Jizzax Viloyati{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Toshkent Shahri{" "}
                    </option>
                    <option className="rounded p-2" value="">
                      Qoraqalpog'isron Respublikasi{" "}
                    </option>
                  </select>

                  <input
                    type="text"
                    placeholder="Shahar/Tuman"
                    className="border-1 border-[lightgrey] mx-3 mt-3 w-[669px] outline-none p-4  rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Manzil To'liq holatda"
                    className="border-1 border-[lightgrey] mx-3 mt-3 w-[669px] outline-none p-4  rounded-lg"
                  />

                  <div className="flex items-center ">
                    <input
                      type="text"
                      placeholder="Uy manzili"
                      className="border-1 border-[lightgrey] mx-3 mt-3 w-[334px] outline-none p-4  rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Xonadon"
                      className="border-1 border-[lightgrey] mx-3 mt-3 w-[334px] outline-none p-4  rounded-lg"
                    />
                  </div>

                  <div className="flex gap-2 items-center mt-3">
                    <input
                      className="ml-4 my-2 w-[20px] h-[20px]"
                      type="checkbox"
                    />
                    <p className="font-bold">Doimiy yashash manzili</p>
                  </div>

                  <div className="my-5 ml-4 flex gap-4">
                    <button className="px-12 py-2.5 rounded cursor-pointer border border-[lightgrey] bg-white text-black transition-colors duration-400 ease-in-out hover:bg-[#33698D] hover:text-white">
                      Saqlash
                    </button>

                    <button className="px-12 py-2.5 rounded cursor-pointer border border-[lightgrey] bg-white text-black transition-colors duration-400 ease-in-out hover:bg-[#33698D] hover:text-white">
                      Bekor qilish
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
