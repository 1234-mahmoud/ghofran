"use client";

import { useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/pic.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic.jpg",
    "/pic2.jpg",
  ];

  return (
    <div className={`relative my-[150px] w-full max-w-[1640px] mx-auto h-[732px]  
    flex gap-[46px]
    max-sm:px-[10px]
    max-md:flex-col max-lg:h-[550px]
    `}>

      <div className={`${classes.navContainer} max-sm:top-[40px]`}>
            <button ref={prevRef} className={classes.navBtn}>
              <AiOutlineLeft />
            </button>
            <button ref={nextRef} className={classes.navBtn}>
              <AiOutlineRight />
            </button>
          </div>
      {/*------------------------------Active Slide Display------------------------- */}
      <div className={`w-full max-w-[469px] h-full relative overflow-hidden
        max-md:hidden
        `}>
        <Image
          src={images[activeIndex]}
          alt="active-slide"
          fill
          className="object-cover"
        />
      </div>
      {/*------------------------------swiber_box------------------------- */}

      <div
        className={`swiber_box w-full max-w-[1126px]
        flex flex-col gap-[80px] relative rounded overflow-hidden

        `}
      >
        {/* Title Section*/}
  
          <div className={`title flex flex-col gap-[16px]
            max-sm:gap-0
            `}>
          <h2 className={`font-[700] text-[48px] leading-[56px]  
          max-md:text-[24px]
          max-lg:text-[35px]
            max-lg:mt-[50px] 
          
          `}>
            What Our Customers Say?
          </h2>
          <p className={`font-[700] text-[32px] leading-[48px] tracking-[1px]
            w-full max-w-[707px] mt-[17px]
            max-sm:mt-0

          max-md:text-[20px]
          max-lg:text-[24px]

            `}>
            Real reviews from happy shoppers who love Ghufran’s quality and
            service.
          </p>
        </div>

          {/* Swiper Component */}
          <Swiper
            modules={[Navigation]}
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
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            speed={500}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className={`mySwiper w-full h-[462px] relative rounded-md
            
              `}
          >
            {images.map((src, idx) => (
              <SwiperSlide
                key={idx}
                className="relative overflow-hidden rounded-md "
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`slide-img-${idx}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        
      </div>
    </div>
  );
};

export default Customers;
