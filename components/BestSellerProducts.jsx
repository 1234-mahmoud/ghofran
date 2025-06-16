"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AiOutlineLeft, AiOutlineRight, AiFillStar } from "react-icons/ai";
import Image from "next/image";
import classes from "../style/best-seller.module.css";
import Link from "next/link";
const BestSellerProducts = ({title,style}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container mx-auto px-4 relative">
      <div className="relative">
        <div className={`
          flex justify-between items-center pb-[20px]
          
          `}>

        <div className={`title w-full ${style}`}>
          <h1 className={`font-[700] text-[40px] leading-[64px]
            
            max-md:text-[24px]  max-md:leading-[40px] 
            max-lg:text-[32px] 
            `}>{title}</h1>
        </div>
        {/* Custom navigation buttons */}
        <div className={`${classes.navContainer}
   max-sm:top-[40px]
        `}>
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
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 24
            }
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
              <div className="product flex flex-col gap-8 w-full max-w-[392px] h-[424px] relative">
                <Image
                  src="/pic.jpg"
                  width={300}
                  height={300}
                  alt="image"
                  className="w-full h-[304px] rounded-sm"
                />
                <div className={`bage absolute bg-lime-800 text-white top-[16px] left-[16px]  w-[88px] h-[32px]
                rounded-md pt-[4px] pb-[4px] pr-[8px] pl-[8px]
                font-[400] text-[14px] flex justify-center items-center
                  `}>Best Seller</div>
                <div className="cat flex flex-col gap-2">
                  <span
                    className={`${classes.cat_type} flex justify-between items-center font-normal leading-6`}
                  >
                    <span>
                      Oils / <span>Essential Oils</span>
                    </span>
                    <span className="rate flex justify-center items-center gap-2">
                      <AiFillStar />
                      <span>4.5</span>
                    </span>
                  </span>

                  <p className="product_name font-bold leading-10 tracking-[1px] text-xl">
                    Jojoba OIi 240ml
                  </p>
                  <div className="price flex justify-between items-center">
                    <span className="price_after_discount font-bold leading-6 tracking-[1px] text-sm">
                      240.00 EGP
                    </span>
                    <span
                      className={`${classes.price_before_discount} line-through font-normal leading-6 text-sm`}
                    >
                      640.00 EGP
                    </span>
                    <span
                      className={`${classes.money_saved} font-normal leading-6 text-sm`}
                    >
                      Save 400 EGP
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        <button className={`
          bg-black text-white w-[206px] h-[48px] rounded-md mt-[48px] absolute translate-x-[-50%] left-[50%]
          font-[700] text-[16px] leading-[16px] tracking-[1px]
          `}>
            <Link href='/all_products'>View All Products</Link>
          </button>
    </div>
  );
};

export default BestSellerProducts;
