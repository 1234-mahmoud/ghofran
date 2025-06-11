"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import classes from "../style/customers.module.css";
const Customers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto my-[250px] px-4 relative">
      <div className="relative">
        <div
          className={`
          flex justify-between items-center pb-[20px]
          `}
        >
          {/* Custom navigation buttons */}
          <div
            className={`${classes.navContainer} 
          w-full justify-between items-center gap-[150px] mb-[100px]
          `}
          >
            <button ref={prevRef} className={classes.navBtn}>
              <AiOutlineLeft />
            </button>
            <div className="title ">
              <h1
                className={`font-[700] text-[56px] leading-[64px] text-center`}
              >
                Our Videos
              </h1>
            </div>
            <button ref={nextRef} className={classes.navBtn}>
              <AiOutlineRight />
            </button>
          </div>
        </div>

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
        className={`${classes.swiperWrapper} mySwiper 
            w-full max-w-[90%] mt-[50px] mb-[100px] mx-auto h-[540px] relative
            rounded-md
        `}
      >
        <SwiperSlide>
          <Image src="/pic.jpg" alt="slide-img" width={500} height={500} className={classes.img_} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/pic2.jpg" alt="slide-img" width={500} height={500} className={classes.img_} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/pic3.jpg" alt="slide-img" width={500} height={500} className={classes.img_} />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Customers;
