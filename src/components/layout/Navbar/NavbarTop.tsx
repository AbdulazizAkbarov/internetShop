import React from "react";

function NavbarTop() {
  return (
    <div className="bg-[#2C698D] flex py-1 items-center justify-between px-8"  >
 <div className="container flex items-center justify-between mx-auto">
 <div className="flex items-center gap-3">
        <img
          src={"https://texnomart.uz/_nuxt/img/header-location.c6b9bf0.svg"}
          alt=""
        />

        <p className="text-[white]">Bizning do'kon haqida</p>

        <p className="bg-[#8C8C8C] px-2 py-1 inline-block text-[white] rounded">
          Yuridik shaxslar uchun
        </p>
        <p className="text-[white]">To'lov Usullari</p>
      </div>


      <div>
        <p className="text-[white] flex items-center gap-2">Aloqa markazi  <span className="font-bold text-xl text-[white]">+998 93 823 11 77 </span></p>
      </div>
 </div>
    </div>
  );
}

export default NavbarTop;
