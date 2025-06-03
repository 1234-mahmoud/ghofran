'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import classes from '../style/slide.module.css';

// import required modules
import { Pagination } from 'swiper/modules';



export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,    
        }}
        modules={[Pagination]}
        className={`${classes.swiperWrapper} mySwiper 
            w-full max-w-[90%] mt-[50px] mb-[100px] ml-auto mr-auto h-[540px]  relative
            rounded-md
            
            `}
      >
        <SwiperSlide>
            <Image src="/pic.jpg" alt="slide-img" width={500} height={500} className={`${classes.img_}`}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/pic.jpg" alt="slide-img" width={500} height={500} className={`${classes.img_}`}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/pic.jpg" alt="slide-img" width={500} height={500} className={`${classes.img_}`}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
