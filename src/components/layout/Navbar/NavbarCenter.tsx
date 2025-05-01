"use client";
import React, { useState } from "react";
import yurakIcon from "../../../assets/svg/yurakIcon.svg";
import savatIcon from "../../../assets/svg/savatIcon.svg";
import Image from "next/image";
import { MenuIcon, SearchIcon } from "lucide-react";
import SavatModal from "@/components/Modal/SavatModal";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store/typr";
import { DialogDemo } from "@/components/Modal/LoginModal";
import dynamic from "next/dynamic";
const Login =dynamic(()=>import("../Navbar/Login"),{
  ssr:false
})

function NavbarCenter() {
  const [savatModal, setSavatModal] = useState(false);
  const [loginDrawer, setLoginDrawer] = useState<boolean>(false);
  const count = useSelector((state: RootState) => state.cart.items.length);
  const countLike = useSelector(
    (state: RootState) => state.likeProduct.items.length
  );
  const user = useSelector((state: RootState) => {
    return state.login;
  });
console.log(user);

  
  return (
    <div className=" flex gap-5 items-center max-w-[1540px] justify-between container mx-auto">
      <SavatModal setSavatModal={setSavatModal} savatModal={savatModal} />
      <DialogDemo user={loginDrawer} setUser={setLoginDrawer} />

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

        <div className="border-3 border-[#2C698D]  max-w-[800px] h-[50px] flex items-center ">
          <input
            className="bg-[white] px-0.5 mt-1 w-[600px] max-w-[750px] ml-0.5  h-[40px] outline-none text-xl"
            type="text"
            placeholder="Qidirish"
          />
          <button className="bg-[#2C698D] p-1 text-white ">
            <SearchIcon className="w-[28] h-[37]" />
          </button>
        </div>
      </div>

      <div className="flex gap-12">
    
    <Login/>

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
