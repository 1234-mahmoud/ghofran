"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import classes from "../style/customers.module.css";

const Customers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto my-[250px] px-4 relative ">
      <div className="relative">
        <div
          className={`
          flex justify-between items-center pb-[20px]
          `}
        >
             <div className={`flex flex-col justify-center items-center gap-[16px] mx-auto`}>
              <h1
                className={`font-[700] text-[56px] leading-[64px]`}
              >
                What Our Customers Say?
              </h1>
              <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px] text-gray-700`}>Real reviews from happy shoppers who love Ghufran’s quality and service.</p>
            </div>
          {/* Custom navigation buttons */}
          <div
            className={`${classes.navContainer} 
          w-full justify-between items-center gap-[150px] mb-[100px]
          `}
          >
            <button ref={prevRef} className={classes.navBtn}>
              <AiOutlineLeft />
            </button>
            <button ref={nextRef} className={classes.navBtn}>
              <AiOutlineRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
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
            rounded-md bg-gray-300
          `}
        >
          <SwiperSlide>
            <Image
              src="/pic.jpg"
              alt="slide-img"
              width={700}
              height={500}
              className={classes.img_}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/pic2.jpg"
              alt="slide-img"
              width={700}
              height={500}
              className={classes.img_}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/pic3.jpg"
              alt="slide-img"
              width={700}
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
