"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight, AiFillStar } from "react-icons/ai";
import Image from "next/image";
import classes from "../style/our-videos.module.css";
import Link from "next/link";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
const OurVideos = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto my-[250px] px-4 relative max-sm:mb-[-100px]">
      <div className="relative">
        <div
          className={`
          flex justify-between items-center pb-[20px]
          `}
        >
          {/* Custom navigation buttons */}
          <div
            className={`${classes.navContainer} 
          w-full justify-between items-center  px-[40px] mb-[100px]
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
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {[...Array(8)].map((_, idx) => (
            <SwiperSlide key={idx} className="flex justify-center gap-[24px]">
              <div className={`${classes.vid} flex flex-col gap-8 w-full max-w-[400px] h-[700px] relative
                max-sm:h-full
                `}>
                <Image
                  src="/pic.jpg"
                  width={400}
                  height={400}
                  alt="image"
                  className="w-full h-full"
                />
                <Link href='/videos'>
                
<MdOutlineSlowMotionVideo className={`
    absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-[5rem]
    `}/>
                </Link>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurVideos;
