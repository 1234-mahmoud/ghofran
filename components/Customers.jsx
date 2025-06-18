"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import classes from "../style/customers.module.css";

const Customers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={` relative
    max-lg:mt-[150px]
    
    `}>
      {/* Title Section */}
      <div className="title">
        <h2 className={`font-[700] text-[48px] leading-[56px] text-center
          max-lg:text-[35px]
          `}>
          What Our Customers Say?
        </h2>
        <p className="font-[700] text-[20px] leading-[40px] tracking-[1px] text-center">
          Real reviews from happy shoppers who love Ghufran’s quality and service.
        </p>
      </div>

      {/* Swiper Section */}
      <div
        className={`container mx-auto px-[88px] relative flex flex-col gap-[36px]
          max-lg:px-[10px]
          `}
      >
        {/* Custom Navigation Buttons */}
        <div className="relative flex justify-between items-center">
          <div
            className={`${classes.navContainer} w-full justify-between items-center gap-[150px] flex`}
          >
            <button ref={prevRef} className={classes.navBtn}>
              <AiOutlineLeft />
            </button>
            <button ref={nextRef} className={classes.navBtn}>
              <AiOutlineRight />
            </button>
          </div>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof window !== "undefined") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1500}
          className={`${classes.swiperWrapper} mySwiper w-full max-w-[90%] mb-[100px] mx-auto h-[540px] relative rounded-md bg-gray-300
          max-lg:h-[340px]
          `}
        >
          <SwiperSlide>
            <Image
              src="/pic.jpg"
              alt="slide-img"
              width={500}
              height={500}
              className={classes.img_}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/pic2.jpg"
              alt="slide-img"
              width={500}
              height={500}
              className={classes.img_}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/pic3.jpg"
              alt="slide-img"
              width={500}
              height={500}
              className={classes.img_}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;
