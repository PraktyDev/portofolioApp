'use client'
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-72 h-72 tablet:w-80 tablet:h-80 laptop:w-96 laptop:h-96 mb-10 laptop:mb-0 overflow-hidden"
      >
        <SwiperSlide className="rounded-md bg-blue-500 p-2"><Image src={"/assets/images/portfolio.png"} width={500} height={500} alt="project image" className="w-full h-full rounded-md object-cover" /></SwiperSlide>
        <SwiperSlide className="rounded-md bg-yellow-500 p-2"><Image src={"/assets/images/eventbg.png"} width={500} height={500} alt="project image" className="w-full h-full rounded-md object-cover" /></SwiperSlide>
        <SwiperSlide className="rounded-md bg-orange-400 p-2"><p className="text-center text-md text-black flex items-center justify-center">Coming Soon...</p></SwiperSlide>
      </Swiper>
    </>
  );
}