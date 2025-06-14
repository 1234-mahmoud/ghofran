'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

import classes from '../style/slide.module.css';

import { Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true} // infinite forward loop
        speed={1500} // smooth transition speed
        modules={[Pagination, Autoplay]}
        className={`${classes.swiperWrapper} mySwiper 
            w-full max-w-[90%] mt-[50px] mb-[100px] mx-auto h-[540px] relative
            rounded-md bg-gray-300 
            max-lg:h-[340px]
        `}
      >
        <SwiperSlide>
          <Image src="/pic.jpg" alt="slide-img" width={500} height={500} className={classes.img_} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/pic.jpg" alt="slide-img" width={500} height={500} className={classes.img_} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/pic.jpg" alt="slide-img" width={500} height={500} className={classes.img_} />
        </SwiperSlide>
      </Swiper>

    
    </>
  );
}
