"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signIn, signOut } from "next-auth/react";

function Appbar() {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }

  const session = useSession();
  const status = session ? session.status : "unknown";
  return (
    <div>
      <div className="fixed z-30 h-20 backdrop-blur-sm bg-black/40  rounded-b-3xl items-center lg:px-16 px-6 w-full text-white flex justify-between">
        <div className="text-3xl font-bold">SuperDry</div>

        <div className="md:hidden">
          <FaBars className=" text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <div className="hidden md:flex lg:space-x-12 space-x-8 text-xl font-bold items-center">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Contact Us</div>
          <div className="cursor-pointer">Services</div>
          {status !== "authenticated" ? (
            <div
              onClick={() => {
                signIn("google");
              }}
              className="cursor-pointer px-7 py-2 border border-white hover:bg-white hover:text-black"
            >
              Register
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={session?.data?.user?.image || ""}
                  width={40}
                  height={40}
                  alt="user-image"
                  className="cursor-pointer rounded-full border border-white hover:bg-white hover:text-black"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {menu && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-3xl">
          <div className="text-white h-screen w-screen  justify-center items-center p-4">
            <div
              className="flex justify-end text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              <RxCross2 />
            </div>
            <div className="flex flex-col justify-center items-center h-full space-y-10">
              <div className="cursor-pointer text-2xl font-semibold  transition duration-300">
                Home
              </div>
              <div className="cursor-pointer text-2xl font-semibold  transition duration-300">
                Contact Us
              </div>
              <div className="cursor-pointer text-2xl font-semibold transition duration-300">
                Services
              </div>
              {status !== "authenticated" ? (
                <div
                  onClick={() => {
                    signIn("google");
                  }}
                  className="cursor-pointer text-2xl font-semibold transition duration-300"
                >
                  Register
                </div>
              ) : (
                <div
                  onClick={() => {
                    signOut();
                  }}
                  className="cursor-pointer text-2xl font-semibold transition duration-300"
                >
                  Logout
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appbar;
