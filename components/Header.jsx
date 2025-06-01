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
import ProductsCat from "./ProductsCat";
export default function Header() {
  const { show,
    setShow,
 toggleShow,
 now} = useContext(ContextProvider);

 const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShow(false); // Hide sidebar
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
        className={`${classes.top_header} 
        h-[48px] pl-[140px] pr-[140px] flex gap-[424px] items-center text-white
        max-sm:flex-col max-sm:h-auto max-sm:gap-[10px] max-sm:p-[10px]
        
        `}
      >
        <div
          className={`social relative flex gap-[24px] items-center max-sm:w-full p-1`}
        >
          <BsFacebook />
          <AiFillInstagram />
          <span className="flex justify-center items-center gap-[8px]">
            <IoIosCall />
            0111273633
          </span>
          <button
            onClick={toggleShow}
            className={`cursor-pointer w-[40px] h-[40px] hidden text-[2.5rem] max-sm:block absolute top-[50%] right-0 translate-y-[-50%]`}
          >
            <FiAlignJustify />
          </button>
        </div>

        <div className={`
       
          `}>
          <p>Experience timeless beauty with Ghofran.</p>
        </div>

        <div className="lang">
          <select
            name="language"
            id=""
            defaultValue="Arabic"
            className="bg-black"
          >
            <option value="ar">Arabic</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Utilities header */}
      <div
        className={`utilities_header 
        h-[128px] flex justify-between items-center pt-[8px] pb-[8px] pl-[240px] pr-[240px]
         max-sm:h-auto max-sm:gap-1 max-sm:p-[10px]
        
        `}
      >
        <div className={`logo w-[101px] h-[88px] bg-amber-100
          max-sm:w-[50px] max-sm:h-[50px] max-sm:rounded-full
          
          `}>logo</div>

        <div
          className={`utilities w-full max-w-[656px]  flex items-center gap-[48px] 
            max-sm:gap-[10px]
            `}
        >
          <input
            type="search"
            className={`${classes.input_search} w-full max-w-[467px] h-[48px] indent-[20px] rounded-sm focus:outline-none`}
            placeholder="Search..."
          />
          <div className="utilities flex justify-between items-center gap-[16px]">
            <Link href="/user">
              <AiOutlineUser />
            </Link>
            <Link href="/favourite">
              <AiOutlineHeart />
            </Link>
            <Link href="/cart">
              <BiCartAlt />
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav header */}
      <header
        ref={sidebarRef}
        className={`${classes.header} 
        h-[40px] pt-[40px] pb-[40px] pl-[240px] pr-[240px] flex text-white justify-between items-center
    translate-x-0 max-sm:transition-transform max-sm:duration-[1000ms] max-sm:ease-in-out
        max-sm:p-[10px]
        max-sm:w-[200px] max-sm:fixed max-sm:flex-col max-sm:gap-[1px] 
        max-sm:top-0 max-sm:right-0 max-sm:h-lvh z-10
        ${show ? "max-sm:translate-x-0" : "max-sm:translate-x-[100%]"}
      
        `}
      >
        {show && <ProductsCat/>}
        <nav
          className={`
          `}
        >

          <Link
            href="/best_seler"
            className={`font-[700] text-[1.25rem]
              max-sm:text-[1.1rem]
              `}
          >
            BEST SELLERS
          </Link>
        </nav>
        <nav
          className={`
  flex justify-around items-center gap-[24px] w-full max-w-[840px] 
   max-sm:flex-col max-sm:justify-start max-sm:gap-[30px ] max-sm:mt-[30px] max-sm:h-lvh 
`}
        >
          <Link
            className={`font-[700] text-[1.25rem]
            max-sm:text-[1.1rem]
            `}
            href="/"
          >
            Home
          </Link>
          <select
            className="bg-black text-white font-[700] text-[1.25rem]
          max-sm:text-[1.1rem]
          "
            defaultValue="Categories"
          >
            <option value="">Categories</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
          <Link
            className={`font-[700] text-[1.25rem]
            max-sm:text-[1.1rem]
            `}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={`font-[700] text-[1.25rem]
            max-sm:text-[1.1rem]
            `}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={`font-[700] text-[1.25rem]
            max-sm:text-[1.1rem]
            `}
            href="/contact"
          >
            Contact US
          </Link>
        </nav>
      </header>

      {/* Bottom header with live time */}
      <div
        className={`${classes.bottom_header} 
        h-[76px] pt-[8px] pb-[8px] flex justify-center items-center gap-[20px] text-white
        max-sm:flex-col max-sm:h-auto
        
        `}
      >
        <p className={`text-[14px] font-[700] tracking-[1px] 
           max-sm:text-[75%]
          `}>
          Free Shipping on Order Above 1000EGP | GET OFFER
        </p>
        <div className={`${classes.data_time} 
        flex items-center gap-[24px]
        `}>
          <div className="flex justify-center items-center font-[700] text-[1.25rem]">
            <span className={`flex flex-col justify-ceneter items-center
              max-sm:text-[70%]
              `}>
              <span>{now.getDate()}</span>
              Days
            </span>
          </div>
          :
          <div className="flex justify-center items-center font-[700] text-[1.25rem]">
            <span className={`flex flex-col justify-ceneter items-center
              max-sm:text-[70%]
              `}>
              <span>{now.getHours()}</span> Hours
            </span>
          </div>
          :
          <div className="flex justify-center items-center font-[700] text-[1.25rem]">
            <span className={`flex flex-col justify-ceneter items-center
              max-sm:text-[70%]
              `}>
              <span>{now.getMinutes()}</span> Minutes
            </span>
          </div>
          :
          <div className="flex justify-center items-center font-[700] text-[1.25rem]">
            <span className={`flex flex-col justify-ceneter items-center
              max-sm:text-[70%]
              `}>
              <span>{now.getSeconds()} </span>Seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
