import React from "react";
import bg from "@/public/assets/bg-image.webp";
import Image from "next/image";

function HeaderHome() {
  return (
    <div className="h-screen w-full ">
      <div className="relative">
        <Image
          className=" w-full h-screen object-cover "
          src={bg}
          alt="SuperDry bg-image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center md:px-16 px-4 bg-black/60">
          <h1 className="lg:text-8xl md:text-5xl text-3xl font-extrabold text-white">
            Do your Laundry Smartly
          </h1>
          <h1 className="lg:text-3xl md:text-xl font-normal text-center text-white py-6">
            Embark on a journey of convenience and luxury with our premium
            laundry services. Say goodbye to the mundane and hello to effortless
            freshness.
          </h1>
          <button className="bg-yellow-200 hover:bg-yellow-500 hover:font-bold font-normal text-xl mt-4 text-black md:px-7 md:py-4 px-5 py-3 rounded-lg">
            Request a service
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
