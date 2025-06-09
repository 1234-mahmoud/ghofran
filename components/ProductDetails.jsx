"use client";
import React, { useState } from "react";
import classes from "../style/product-details.module.css";
import { FaRegHeart } from "react-icons/fa";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight, AiFillTruck } from "react-icons/ai";
import { PiShippingContainer } from "react-icons/pi";
import {
  IoStar,
  IoCartOutline,
  IoShareOutline,
  IoGiftOutline,
} from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
const ProductDetails = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // 0 = first button by default
  const buttons = ["30", "50", "100", "200"];
  return (
    <div className={`flex flex-col justify-center items-center gap-[56px]`}>
      <div className="titile">
        <h4>home / product</h4>
      </div>
      <div
        className={`w-full max-w-[1625px] h-[1064px] flex flex-wrap gap-[88px] justify-center `}
      >
        <div
          className={`box1 
              w-full max-w-[856px]  h-[1064px]  flex flex-col gap-[48px]
                    `}
        >
          <div
            className={`prod_box bg-gray-300
                             w-full max-w-[856px] h-[856px]
                            `}
          >
            {" "}
            <Image
              src="/pic.jpg"
              width={300}
              height={300}
              alt="image"
              className="w-full h-full"
            />
          </div>
          {/* ------------------------------------------------ */}
          <div className="prod_imgs h-[160px]">
            <div className="container relative">
              <div className="relative">
                <div>
                  {/* Custom navigation buttons */}
                  <div
                    className={`${classes.navContainer} 
          w-full justify-between items-center  
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
                      slidesPerView: 6,
                      spaceBetween: 16,
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
                  className="w-full max-w-[752px]"
                >
                  {[...Array(8)].map((_, idx) => (
                    <SwiperSlide>
                      <div
                        className={`${classes.vid} flex flex-col gap-8 w-full max-w-[112px] h-[160px] relative
                max-sm:h-full
                `}
                      >
                        <Image
                          src="/pic.jpg"
                          width={112}
                          height={160}
                          alt="image"
                          className="w-full h-full"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div
          className={`box2 
                    w-full max-w-[681px] h-[1044px]  mt-[20px]
                    `}
        >
          <div className="block_data flex flex-col gap-[24px]">
            <div className="block_data_1 flex flex-col  gap-[16px]">
              <p
                className={`
                font-[700] text-[20px] leading-[40px] tracking-[1px] ${classes.txt}
                `}
              >
                Oils / Essential Oils
              </p>
              <div className="specifications flex gap-[80px] justify-between">
                <div className="block1 flex gap-[24px] items-center">
                  <h4
                    className={`
                font-[700] text-[32px] leading-[40px] ${classes.txt1}
                `}
                  >
                    Jojoba OIi 240ml
                  </h4>
                  <button
                    className={`w-[88px] h-[32px] bg-black rounded-md text-white font-[400] text-[14px] leading-[24px]`}
                  >
                    New
                  </button>
                </div>
                <div className={`block2 flex gap-[24px] items-center`}>
                  <button
                    className={`block2 flex gap-[24px] justify-center items-center w-[40px] h-[40px] rounded-full ${classes.bg}`}
                  >
                    <FaRegHeart />
                  </button>
                  <button className="flex justify-center items-center gap-[8px] border-[1px] w-[127px] h-[40px] rounded-md border-gray-400">
                    <IoShareOutline />
                    share
                  </button>
                </div>
              </div>
              <div className="rate flex gap-[8px]">
                <div className="flex gap-[3px]">
                  <button>
                    <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
                  </button>
                  <button>
                    <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
                  </button>
                  <button>
                    <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
                  </button>
                  <button>
                    <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
                  </button>
                  <button>
                    <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
                  </button>
                </div>
                <div className="flex gap-[8px] justify-center items-center">
                  <span
                    className={`font-[400] text-[18px] leading-[32px] tracking-[1px]`}
                  >
                    4.5
                  </span>
                  (
                  <span className={`font-[400] text-[14px] leading-[24px]`}>
                    35 Reviews
                  </span>
                  )
                </div>
              </div>
              {/* ------------------------------------------------------- */}

              <div className={`flex gap-[56px] items-center`}>
                <div className={`price flex gap-[16px]`}>
                  <span
                    className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}
                  >
                    240.00EGP
                  </span>
                  <span
                    className={`font-[700] text-[20px] leading-[40px] tracking-[1px] line-through ${classes.txt2}`}
                  >
                    640.00EGP
                  </span>
                </div>
                <span
                  className={`font-[400] text-[18px] leading-[32px] tracking-[1px] ${classes.txt3}`}
                >
                  Save 400 EGP
                </span>
              </div>
              {/* ------------------------------------------------------- */}

              <p
                className={`font-[400] text-[14px] leading-[24px] w-full max-w-[515px] h-[48px] px-[4px] ${classes.txt1}`}
              >
                A lightweight blend that reduces frizz, strengthens strands, and
                adds natural shine. Perfect for daily use and promoting healthy
                hair growth.
              </p>
              <div className={`flex gap-[24px] px-[4px] items-center`}>
                <p
                  className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}
                >
                  Availability:
                </p>
                <p
                  className={`font-[700] text-[20px] leading-[40px] tracking-[1px] ${classes.txt2}`}
                >
                  in stock
                </p>
              </div>
              {/* ------------------------------------------------------- */}

              <div className="size flex flex-col gap-[16px]">
                <p
                  className={`font-[700] text-[20px] leading-[40px] tracking-[1px] px-[4px] ${classes.txt4}`}
                >
                  Size
                </p>
                <div
                  className={`${classes.btns} 
                  flex gap-[24px]
                  `}
                >
                  {buttons.map((label, index) => (
                    <button
                      key={label}
                      onClick={() => setActiveIndex(index)}
                      className={`w-[120px] h-[48px] rounded-2xl font-[700] text-[20px] leading-[40px] tracking-[1px]             ${
                        activeIndex === index
                          ? classes.btn1
                          : "border-[1px] border-gray-400"
                      }`}
                    >
                      {label} Ml
                    </button>
                  ))}
                </div>

                <div
                  className={`${classes.payment} mt-[50px] flex flex-col gap-[16px]`}
                >
                  <p
                    className={`
  font-[700] text-[20px] leading-[40px] tracking-[1px]
    `}
                  >
                    payment options:
                  </p>
                  <div
                    className={`pay border-[1px] rounded-md border-gray-400 w-full max-w-[669px] h-[56px] px-[56px] py-[8px] flex gap-[38px]`}
                  >
                    <label
                      className={`flex gap-[24px] justify-centerst items-center
      font-[700] text-[20px] leading-[40px] tracking-[1px] ${classes.radio}
      `}
                      htmlFor="pay1"
                    >
                      <input
                        type="radio"
                        name="pay"
                        id="pay1"
                        className="w-[15px] h-[15px]"
                      />
                      Pay in installments with no hidden fees
                    </label>
                  </div>
                  <div
                    className={`pay border-[1px] rounded-md border-gray-400 w-full max-w-[669px] h-[56px] px-[56px] py-[8px] flex items-center gap-[224px]`}
                  >
                    <label
                      className={`flex gap-[24px] justify-centerst items-center
      font-[700] text-[20px] leading-[40px] tracking-[1px] ${classes.radio}
      `}
                      htmlFor="pay2"
                    >
                      <input
                        type="radio"
                        name="pay"
                        id="pay2"
                        className="w-[15px] h-[15px]"
                      />
                      Pay All
                    </label>
                    <p
                      className={`font-[700] text-[20px] leading-[40px] tracking-[1px] ${classes.radio}`}
                    >
                      240.00 EGP
                    </p>
                  </div>
                </div>
                {/* ------------------------------------------------------- */}

                <div
                  className={`${classes.quantity} flex gap-[16px] py-[4px] my-[55px]`}
                >
                  <div
                    className={`btn_quantity flex justify-between items-center gap-[8px] 
                    rounded-2xl border-[1px] border-gray-400 w-[184px] h-[48px]
                    overflow-hidden bg-white
                    `}
                  >
                    <button
                      className={`
                      w-[56px] h-[48px]  text-[20px] cursor-pointer
                      `}
                    >
                      -
                    </button>
                    <span
                      className={`font-[700] border-[1px] border-gray-400 h-[48px] w-[72px] flex justify-center items-center`}
                    >
                      1
                    </span>
                    <button
                      className={`
                      w-[56px] h-[48px] text-[20px] cursor-pointer
                      `}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className={`
                    h-[48px] w-[189px] flex justify-center items-center gap-[8px] text-white bg-black rounded-md cursor-pointer
                    font-[700] text-[16px] leading-[16px] tracking-[1px] 
                    `}
                  >
                    <IoCartOutline className={`text-[20px]`} />
                    Add To Cart
                  </button>
                  <button
                    className={`
                    h-[48px] w-[265px] text-white ${classes.btn_bg} rounded-md cursor-pointer
                    font-[700] text-[16px] leading-[16px] tracking-[1px] 
                    `}
                  >
                    Buy Now
                  </button>
                </div>
                {/* ------------------------------------------------------- */}
                <div
                  className={`shipping 
                  w-full max-w-[532px] h-[72px] flex flex-wrap gap-[36px] px-[8px] 
                  `}
                >
                  <p
                    className={`flex gap-[8px] items-center font-[400] text-[14px] leading-[24px]`}
                  >
                    <PiShippingContainer className="text-[18px]" />
                    Free Shipping For Orders Over 1500EGP
                  </p>
                  <p
                    className={`flex gap-[8px] items-center font-[400] text-[14px] leading-[24px]`}
                  >
                    <IoGiftOutline className="text-[18px]" />
                    Buy 2 Products Get 1 Free
                  </p>
                  <p
                    className={`flex gap-[8px] items-center font-[400] text-[14px] leading-[24px]`}
                  >
                    <MdOutlineSettings className="text-[18px]" />
                    Save 200EGP For Orders Over 1000EGP
                  </p>
                </div>
                {/* ------------------------------------------------------- */}
              </div>
            </div>
            <div className={`${classes.delivary} px-[8px] pt-[40px]`}>
              <p
                className={`flex gap-[8px] items-center font-[400] text-[14px] leading-[24px]`}
              >
                <AiFillTruck className="text-[18px]" />
                Delivers in: 3-7 Working Days{" "}
                <a href="#" className={`${classes.ship_link}`}>
                  Shipping & Return
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
