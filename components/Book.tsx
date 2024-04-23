import React from "react";

function Book() {
  return (
    <div className="bg-[#1b1019] h-80 md:mx-20 sm:mx-4 text-white flex flex-col items-center justify-center">
      <div className="md:text-5xl sm:text-3xl text-2xl font-bold text-center">
        REQUEST FOR A SERVICE
      </div>
      <div className="py-4 md:px-4 md:text-md text-sm text-center">
        The freedom of choosing your preferred laundary service provider from
        our list of experts
      </div>
      <button className="bg-yellow-200 hover:bg-yellow-500 hover:font-bold font-normal text-xl mt-4 text-black md:px-7 md:py-4 px-5 py-3 rounded-lg">
        GET AN ESTIMATE
      </button>
    </div>
  );
}

export default Book;
