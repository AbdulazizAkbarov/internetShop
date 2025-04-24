"use client";
import React, { useEffect, useState } from "react";
import userIcon from "../../../assets/svg/userIcon.svg";
import yurakIcon from "../../../assets/svg/yurakIcon.svg";
import savatIcon from "../../../assets/svg/savatIcon.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { MenuIcon, SearchIcon } from "lucide-react";
import SavatModal from "@/components/Modal/SavatModal";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/typr";
import { DialogDemo } from "@/components/Modal/LoginModal";

function NavbarCenter() {
  const [savatModal, setSavatModal] = useState(false);
  const [user, setUser] = useState<boolean>(false);
  const [name, setName] = useState("")
  const count = useSelector((state: RootState) => state.cart.items.length);
  const countLike = useSelector(
    (state: RootState) => state.likeProduct.items.length
  );
  const userId = useSelector((state: RootState) => {
    return state.login.user?.id;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user")!;
      if (user) {
        try {
          const parsedUser = JSON.parse(user);
          setName(parsedUser.user.name);
        } catch (error) {
          console.error("Foydalanuvchini o'qishda xatolik:", error);
        }
      }
    }
  }, []);
  

  return (
    <div className="px-12 flex gap-5 items-center justify-between">
      <SavatModal setSavatModal={setSavatModal} savatModal={savatModal} />
      <DialogDemo user={user} setUser={setUser} />

      <Link href={"/"}>
        <img
          src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
          alt=""
        />
      </Link>
      <div className="flex gap-2">
        <button className="bg-[#2C698D] px-5 py-2 flex  gap-1 items-center rounded font-bold text-xl text-white">
          <MenuIcon />
          Katalog
        </button>

        <div className="border-3 border-[#2C698D]  w-[800px] h-[50px] flex items-center ">
          <input
            className="bg-[white] px-0.5 mt-1 w-[790px] ml-0.5  h-[40px] outline-none text-xl"
            type="text"
            placeholder="Qidirish"
          />
          <button className="bg-[#2C698D] p-1 text-white ">
            <SearchIcon className="w-[28] h-[37]" />
          </button>
        </div>
      </div>

      <div className="flex gap-12">
        {name ? (
          <Link href={`/profile`}>
            <button className="flex flex-col items-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image src={userIcon} alt="sd" width={30} height={30} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Shaxsiy Kabinet</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Mening to'lovlarim</DropdownMenuItem>
                  <DropdownMenuItem>Muddatli to'lov</DropdownMenuItem>
                  <DropdownMenuItem>Tp'lov tarixi</DropdownMenuItem>
                  <DropdownMenuItem>Online buyurtma</DropdownMenuItem>
                  <DropdownMenuItem className="text-[red]">
                    Chiqish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <p className="font-bold">{name}</p>
            </button>
          </Link>
        ) : (
          <button
            className="flex flex-col items-center"
            onClick={() => {
              setUser(true);
            }}
          >
            <Image src={userIcon} alt="sd" width={30} height={30} />

            <p className="font-bold">Kirish</p>
          </button>
        )}

        <Link href={"/sevimlilar"}>
          <button className="flex flex-col relative items-center">
            <Image src={yurakIcon} alt="sd" width={30} height={30} />
            {countLike > 0 && (
              <span className="bg-[#2C698D] absolute -top-2 right-1  text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {countLike}
              </span>
            )}
            <p className="font-bold">Sevimlilar</p>
          </button>
        </Link>

        <button
          className="flex flex-col items-center relative cursor-pointer"
          onClick={() => {
            setSavatModal(true);
          }}
        >
          <Image src={savatIcon} alt="sd" width={30} height={30} />
          {count > 0 && (
            <span className="bg-[#2C698D] absolute -top-2 right-1  text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
          <p className="font-bold">Savatcha</p>
        </button>
      </div>
    </div>
  );
}

export default NavbarCenter;
