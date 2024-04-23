"use client"
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import c1 from "@/public/assets/c1.jpg";
import c2 from "@/public/assets/c2.jpeg";
import c3 from "@/public/assets/c3.jpg";
import c4 from "@/public/assets/c4.jpg";
import c5 from "@/public/assets/c5.jpg";
import c6 from "@/public/assets/c6.avif";
import c7 from "@/public/assets/c7.webp";
import c8 from "@/public/assets/c8.jpg";
import c9 from "@/public/assets/c9.jpeg";
import Image from "next/image";

 

function Gallery() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      );
  return (
    <div className="py-10">
      <div className="flex justify-center text-3xl md:text-5xl font-bold text-[#281c14] py-6">
        Our Gallery
      </div>
      <div className="text-center text-gray-400 text-sm md:text-md">
        The freedom of choosing your preferred laundary service provider from
        our list of experts
      </div>
      <div className="md:px-32 px-6 sm:px-14 py-20  items-center">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c1} alt="superdry image" className="rounded-xl w-full h-full bject-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c2} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c3} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c4} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c5} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c6} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c7} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c8} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image src={c9} alt="superdry image" className="rounded-xl w-full h-full object-cover" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
