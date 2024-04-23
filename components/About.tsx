import Image from "next/image";
import React from "react";
import bg from "@/public/assets/about.webp";

function About() {
  return (
    <div className=" md:px-16 px-4 h-full  py-32 backdrop-blur-md bg-[#281c14]">
      <div className=" text-white md:text-5xl text-4xl font-bold flex justify-center pb-12">
        About SuperDry
      </div>
      <div className="md:flex ">
        <div className="md:w-1/2 px-4 flex h-full items-center justify-center py-3">
          <Image
            src={bg}
            alt="superdry about image"
            className="rounded-2xl  h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] ld:h-[350px] lg:w-[500px] object-cover"
          />
        </div>
        <div className="md:w-1/2 py-3">
          <div className="text-white md:px-4 flex h-full items-center md:text-md text-sm text-center">
            Welcome to SuperDry! We're dedicated to making laundry day
            effortless for you. Life can get hectic, and we understand that
            laundry often takes a backseat. That's where we come in. With our
            commitment to convenience, reliability, and top-notch quality,
            SuperDry is your go-to solution for all your laundry needs. Our
            advanced facilities and skilled team ensure that your clothes
            receive the utmost care and attention, whether it's your everyday
            garments or delicate specialty items. Our goal is simple: to
            simplify your life and give you more time for what truly matters.
            Whether you're a busy professional, a parent juggling multiple
            tasks, or simply seeking more leisure time, SuperDry is here to
            help. Experience the difference with SuperDry - bid farewell to
            laundry stress and welcome hassle-free solutions. Say hello to
            convenience and peace of mind. Welcome to SuperDry.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
