import React from "react";
import menuIcon from "../../../assets/svg/menuicon.svg";
import searchIcon from "../../../assets/svg/searchIcon.svg";
import userIcon from "../../../assets/svg/userIcon.svg";
import yurakIcon from "../../../assets/svg/yurakIcon.svg";
import savatIcon from "../../../assets/svg/savatIcon.svg";

import Image from "next/image";
import { MenuIcon, SearchIcon } from "lucide-react";

function NavbarCenter() {
  return (
    <div className="px-12 flex gap-5 items-center justify-between">
      <img
        src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
        alt=""
      />

   <div className="flex gap-2">
   <button className="bg-[#2C698D] px-5 py-2 flex  gap-1 items-center rounded font-bold text-xl text-white">
        <MenuIcon/>
        Katalog
      </button>

      <div className="border-3 border-[#2C698D]  w-[800px] h-[50px] flex items-center ">
        <input
          className="bg-[white] px-0.5 mt-1 w-[790px] ml-0.5  h-[40px] outline-none text-xl" 
          type="text"
          placeholder="Qidirish"
        />
        <button className="bg-[#2C698D] p-1 text-white">
        <SearchIcon className="w-[28] h-[37]"/>
        </button>
      </div>

   </div>

      <div className="flex gap-12">

        <div className="flex flex-col items-center">
          <Image src={userIcon} alt="sd" width={30} height={30}/>
          <p className="font-bold">Kirish</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={yurakIcon} alt="sd" width={30} height={30}/>
          <p  className="font-bold">Sevimlilar</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={savatIcon} alt="sd" width={30} height={30}/>
          <p  className="font-bold">Savatcha</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarCenter;
