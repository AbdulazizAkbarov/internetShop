import { RootState } from "@/components/layout/store/typr";
import React from "react";
import { useSelector } from "react-redux";

function Boshharf() {
  const name = useSelector((state: RootState) => state.login.user?.name);

  return (
    <p className="px-5 py-3 font-bold  bg-[#f3f1f1]  text-2xl border-1 border-[grey] rounded-full">
      {name?.charAt(0)}
    </p>
  );
}

export default Boshharf;
