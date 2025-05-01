import { RootState } from "@/components/layout/store/typr";
import React from "react";
import { useSelector } from "react-redux";

function Name() {
  const name = useSelector((state: RootState) => state.login.user?.name);

  return <p className="text-xl font-bold pl-5">{name}</p>;
}

export default Name;
