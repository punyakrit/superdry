import React from "react";
import pack from "@/public/assets/package.png";
import lock from "@/public/assets/location.svg";
import qua from "@/public/assets/quality.svg";

import Image from "next/image";

function Services() {
  return (
    <div className="my-24 py-10 md:flex md:px-16 space-y-10 md:space-y-0">
      <div className="md:w-1/3 flex justify-center items-center flex-col  px-16 ">
        <div>
          <Image
            src={pack}
            alt="Superdry package"
            className="w-24 p-5 bg-gray-400/20 rounded-full"
          />
        </div>
        <div className="text-xl font-bold my-4 text-center">
          Free pickup and Delivery
        </div>
        <div className="text-sm text-center">
          Your Laundry gets picked up and delivered back to your doorstep
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center items-center flex-col px-16 ">
        <div>
          <Image
            src={lock}
            alt="Superdry package"
            className="w-24 p-5 bg-gray-400/20 rounded-full"
          />
        </div>
        <div className="text-xl font-bold my-4 text-center">Affordable</div>
        <div className="text-sm text-center">
          No additional cost you pay compared to other business competitors.
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center items-center flex-col px-16 ">
        <div>
          <Image
            src={qua}
            alt="Superdry package"
            className="w-24 p-5 bg-gray-400/20 rounded-full"
          />
        </div>
        <div className="text-xl font-bold my-4 text-center">
          Quality Assurance
        </div>
        <div className="text-sm text-center">
          We ensure the best quality service in time.
        </div>
      </div>
    </div>
  );
}

export default Services;
