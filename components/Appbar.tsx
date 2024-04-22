"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Appbar() {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }
  return (
    <div>
      <div className="fixed z-30 h-20 backdrop-blur-sm   rounded-b-3xl items-center lg:px-16 px-6 w-full text-white flex justify-between">
        <div className="text-3xl font-bold">SuperDry</div>
        <div className="md:hidden">
          <FaBars className=" text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <div className="hidden md:flex lg:space-x-12 space-x-8 text-xl font-bold items-center">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Contact Us</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer px-7 py-2 border border-white hover:bg-white hover:text-black">
            Register
          </div>
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
              <div className="cursor-pointer text-2xl font-semibold transition duration-300">
                Register
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appbar;
