'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from '../style/slide.module.css';

import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="relative">
      <Swiper
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500}
        modules={[Pagination, Autoplay, Navigation]}
        className={`${classes.swiperWrapper} mySwiper 
            w-full max-w-[90%] mt-[50px] mx-auto h-[969px] relative
            rounded-md bg-gray-300 
            max-lg:h-[340px]
        `}
      >
        <SwiperSlide>
          <Image src="/slide_1.jpg" alt="slide-img" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slide_2.jpg" alt="slide-img" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/pic3.jpg" alt="slide-img" fill />
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black !important;
          background: white;
          width: 40px !important;
          height: 40px !important;
          border-radius: 0.375rem !important;
          border: 1px solid black !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }
        .swiper-pagination {
          position: absolute !important;
          bottom: 20px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: auto !important;
          min-width: 300px !important;
          z-index: 10 !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #808000 !important;
          opacity: 1 !important;
          border-radius: 50% !important;
          margin: 0 12px !important;
          transition: all 0.3s ease !important;
          flex-shrink: 0 !important;
        }
        .swiper-pagination-bullet-active {
          background: #000 !important;
          width: 100px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </div>
  );
}
