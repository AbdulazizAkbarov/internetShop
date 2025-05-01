import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import userIcon from "../../../assets/svg/userIcon.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/typr";
import { DialogDemo } from "@/components/Modal/LoginModal";

function Login() {
  const user = useSelector((state: RootState) => {
    return state.login;
  });
  const [loginDrawer, setLoginDrawer] = useState<boolean>(false);

  return (
    <div>
      {user.user ? (
        <Link href={`/profile`}>
          <button
            className="flex flex-col items-center"
          >
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
            <p className="font-bold">{user.user.name}</p>
          </button>
        </Link>
      ) : (
        <button
          className="flex flex-col items-center"
          onClick={() => {
            setLoginDrawer(true);
          }}
        >
          <Image src={userIcon} alt="sd" width={30} height={30} />

          <p className="font-bold">Kirish</p>
        </button>
      )}
      {loginDrawer ? (
        <DialogDemo user={loginDrawer} setUser={setLoginDrawer} />
      ) : null}
    </div>
  );
}

export default Login;
