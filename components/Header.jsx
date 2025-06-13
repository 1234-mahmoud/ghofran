"use client";
import { useEffect, useRef, useContext } from "react";
import { BiCartAlt } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser, AiFillInstagram } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import classes from "../style/Header.module.css";
import Link from "next/link";
import { ContextProvider } from "context/AppProvider";

import Image from "next/image";
export default function Header() {
  const { show, setShow, toggleShow, now } = useContext(ContextProvider);
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div>
      {/* Top header */}
      <div
        className={`${classes.top_header} h-[48px] pl-[140px] pr-[140px] flex gap-[424px] items-center text-white
        max-sm:flex-col max-sm:h-auto max-sm:gap-[10px] max-sm:p-[10px]
        max-lg:flex-col max-lg:h-auto max-lg:gap-[10px] max-lg:p-[10px]
        max-xl:h-auto max-xl:gap-[200px] max-xl:p-[15px]
        max-2xl:gap-[300px]
        `}
      >
        <div className={`social relative flex gap-[24px] items-center p-1
          max-sm:w-full 
          max-xl:w-full 
          `}>
          <BsFacebook />
          <AiFillInstagram />
          <span className="flex justify-center items-center gap-[8px]">
            <IoIosCall />
            0111273633
          </span>
          <button
            onClick={toggleShow}
            className={`cursor-pointer w-[40px] h-[40px] hidden text-[2.5rem] 
              absolute top-[50%] right-0 translate-y-[-50%]
              max-lg:block max-sm:block`}
          >
            <FiAlignJustify />
          </button>
        </div>

        <div className="max-lg:text-center max-sm:text-center whitespace-nowrap"><p>Experience timeless beauty with Ghofran.</p></div>

        <div className="lang">
          <select name="language" defaultValue="Arabic" className="bg-black">
            <option value="ar">Arabic</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Utilities header */}
      <div
        className={`utilities_header h-[128px] flex justify-between items-center pt-[8px] pb-[8px] pl-[240px] pr-[240px]
        max-lg:h-auto max-lg:gap-1 max-lg:p-[10px]
        max-sm:h-auto max-sm:gap-1 max-sm:p-[10px]
        max-xl:h-auto max-xl:p-[10px]
        `}
      >
        <div className={`logo w-[150px] h-[90px] max-lg:w-[50px] max-lg:h-[50px] max-lg:rounded-full max-sm:w-[50px] max-sm:h-[50px] max-sm:rounded-full`}>
          <Image src='/logo.svg' alt="logo" width={101} height={88}/>
        </div>

        <div className={`utilities w-full max-w-[656px] flex items-center gap-[48px] 
          max-sm:gap-[10px] max-sm:justify-center
          max-lg:gap-[10px] max-lg:justify-center
          `}>
          <input
            type="search"
            className={`${classes.input_search} w-full max-w-[467px] h-[48px] indent-[20px] rounded-sm focus:outline-none 
            max-sm:max-w-[300px]
            
            `}
            placeholder="Search..."
          />
          <div className="utilities flex justify-between items-center gap-[16px] max-lg:gap-[8px] max-sm:gap-[8px]">
            <Link href="/user"><AiOutlineUser /></Link>
            <Link href="/favourite"><AiOutlineHeart /></Link>
            <Link href="/cart"><BiCartAlt /></Link>
          </div>
        </div>
      </div>

      {/* Main nav header */}
      <header
        ref={sidebarRef}
        className={`${classes.header} h-[40px] pt-[40px] pb-[40px] pl-[240px] pr-[240px] flex text-white justify-between items-center
        translate-x-0 
        max-sm:transition-transform max-sm:duration-[1000ms] max-sm:ease-in-out max-sm:p-[10px] max-sm:w-[200px] max-sm:fixed max-sm:flex-col max-sm:gap-[1px] max-sm:top-0 max-sm:right-0 max-sm:h-lvh z-10 ${show ? "max-sm:translate-x-0" : "max-sm:translate-x-[100%]"}
        max-lg:transition-transform max-lg:duration-[1000ms] max-lg:ease-in-out max-lg:p-[10px] max-lg:w-[200px] max-lg:fixed max-lg:flex-col max-lg:gap-[1px] max-lg:top-0 max-lg:right-0 max-lg:h-lvh z-10 ${show ? "max-lg:translate-x-0" : "max-lg:translate-x-[100%]"}
        max-xl:pl-[40px] max-xl:pr-[40px]
        `}
      >
        <nav><Link href="/best_seler" className={`font-[700] text-[1.25rem] 
          max-sm:text-[1rem]
          max-xl:text-[1.1rem] 
          whitespace-nowrap
          `}>BEST SELLERS</Link></nav>

        <nav className={`flex justify-around items-center gap-[24px] w-full max-w-[840px] 
          max-sm:flex-col max-sm:justify-start max-sm:gap-[30px] max-sm:mt-[30px] max-sm:h-lvh
          max-lg:flex-col max-lg:justify-start max-lg:gap-[30px] max-lg:mt-[30px] max-lg:h-lvh 
          `}>
          <Link className={`font-[700] text-[1.25rem] 
            max-sm:text-[1rem]
            max-xl:text-[1.1rem] 
            `} href="/">Home</Link>
          <select className="bg-black text-white font-[700] text-[1.25rem] max-xl:text-[1.1rem] max-sm:text-[1rem]" defaultValue="Categories">
            <option value="">Categories</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
          <Link className={`font-[700] text-[1.25rem] 
            max-sm:text-[1rem]
            max-xl:text-[1.1rem] 
            `} href="/shop">Shop</Link>
          <Link className={`font-[700] text-[1.25rem] 
            max-sm:text-[1rem]
            max-xl:text-[1.1rem] 
            `} href="/blog">Blog</Link>
          <Link className={`font-[700] text-[1.25rem] 
            max-sm:text-[1rem]
            max-xl:text-[1.1rem] 
            `} href="/contact">Contact US</Link>

          <div className={`mt-[110px] hidden max-lg:block max-lg:p-[10px] max-lg:w-[200px] max-lg:absolute max-lg:top-[200px] max-lg:right-0 max-lg:h-auto max-lg:z-20 max-sm:block max-sm:p-[10px] max-sm:w-[200px] max-sm:absolute max-sm:top-[200px] max-sm:right-0 max-sm:h-auto max-sm:z-20`}>
            <div className={`h-[112px] flex justify-around gap-[430px] items-center max-lg:h-full max-lg:gap-[10px] max-lg:flex-col max-sm:h-full max-sm:gap-[10px] max-sm:flex-col ${classes.nav_border}`}>
              <nav className={`products_catogries flex gap-[48px] max-lg:flex-col max-lg:gap-[10px] max-lg:justify-center max-lg:items-center max-sm:flex-col max-sm:gap-[10px] max-sm:justify-center max-sm:items-center`}>
                <Link className={`font-[700] text-[1.25rem] pb-3 max-lg:text-[1.1rem] max-sm:text-[1rem]`} href="/">All Products</Link>
                <Link className={`font-[700] text-[1.25rem] pb-3 max-lg:text-[1.1rem] max-sm:text-[1rem]`} href="./hair_products">Hair Products</Link>
                <Link className={`font-[700] text-[1.25rem] pb-3 max-lg:text-[1.1rem] max-sm:text-[1rem]`} href="/face_products">Face Products</Link>
                <Link className={`font-[700] text-[1.25rem] pb-3 max-lg:text-[1.1rem] max-sm:text-[1rem]`} href="/body_products">Body Products</Link>
                <Link className={`font-[700] text-[1.25rem] pb-3 max-lg:text-[1.1rem] max-sm:text-[1rem]`} href="/natural_oils_products">Natural Oils</Link>
              </nav>
              <select name="category_filter" defaultValue="Sort By" className={`font-[700] text-[1.25rem] max-lg:text-[1.1rem] max-sm:text-[1rem]`}>
                <option value="Sort By">Sort By</option>
                <option value="cat1">cat1</option>
                <option value="cat2">cat2</option>
                <option value="cat3">cat3</option>
                <option value="cat4">cat4</option>
              </select>
            </div>
          </div>
        </nav>
      </header>

      {/* Bottom header with live time */}
      <div className={`${classes.bottom_header} h-[76px] pt-[8px] pb-[8px] flex justify-center items-center gap-[20px] text-white 
      max-sm:flex-col max-sm:h-auto
      max-lg:h-auto 
      `}>
        <p className={`text-[14px] font-[700] tracking-[1px] max-lg:text-[12px] max-sm:text-[11px]`}>
          Free Shipping on Order Above 1000EGP | GET OFFER
        </p>
        <div className={`${classes.data_time} flex items-center gap-[24px] max-lg:gap-[12px] max-sm:gap-[8px]`}>
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <>
              {index > 0 && ':'}
              <div className="flex justify-center items-center font-[700] text-[1.25rem] max-lg:text-[1rem] max-sm:text-[0.9rem]">
                <span className={`flex flex-col justify-center items-center`}>
                  <span>{[now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()][index]}</span>
                  {label}
                </span>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}