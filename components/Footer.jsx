import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";
import classes from "../style/footer.module.css";
const Footer = () => {
  return (
    <div
      className={`
    w-full h-[486px] flex flex-col justify-between mt-[150px] relative bottom-0
   
    max-xl:h-full 
    `}
    >
      <div
        className={`w-full h-[322px]
    px-[140px]
max-xl:px-[20px]
flex gap-[89px] 
max-xl:flex-wrap max-xl:h-full max-xl:mb-[20px]
max-xl:justify-center 
max-xl:mt-[-50px]
        `}
      >
        <div
          className={`contact 
            w-[194px]
            flex flex-col items-center gap-[24px]
            `}
        >
          <Image src="/logo.svg" alt="logo" width={142} height={154} />
          <span
            className={`font-[700] text-gray-900 text-[14px] leading-[24px] tracking-[1px]`}
          >
            Follow Us On
          </span>
          <div className="social flex gap-[10px]">
            <BsFacebook className="w-[24px] h-[24px]" />
            <FaInstagram className="w-[28px] h-[27px] " />
          </div>
          <span className="flex justify-center items-center gap-[8px] font-[700]">
            <IoIosCall className="w-[36px] h-[30px]" />
            0111273633
          </span>
        </div>
        {/* -------- */}
        <div
          className={`quick_links 
            w-[194px]
             flex flex-col gap-[20px]
        max-sm:pl-[10px]

            `}
        >
          <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>
            Quick Links
          </p>
          <div
            className={`links
             flex flex-col gap-[20px]
    
            `}
          >
            <Link className={`font-[400] text-[14px] leading-[24px]`} href="/">
              Home
            </Link>
            <Link className={`font-[400] text-[14px] leading-[24px]`} href="/">
              Return and Exchange Policy
            </Link>
            <Link className={`font-[400] text-[14px] leading-[24px]`} href="/">
              Privacy Policy
            </Link>
            <Link className={`font-[400] text-[14px] leading-[24px]`} href="/">
              Contact Us
            </Link>
          </div>
        </div>
        {/* -------- */}

        <div
          className={`cat_links 
            w-[123px]
             flex flex-col gap-[20px]
        max-sm:pl-[10px]
            
            `}
        >
          <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>
            Categories
          </p>
          <div
            className={`links 
             flex flex-col gap-[20px]
            
            `}
          >
            <Link
              className={`font-[400] text-[14px] leading-[24px]`}
              href="/hair_products"
            >
              Hair
            </Link>
            <Link
              className={`font-[400] text-[14px] leading-[24px]`}
              href="/face_products"
            >
              Face
            </Link>
            <Link
              className={`font-[400] text-[14px] leading-[24px]`}
              href="/natural_oils_products"
            >
              Oils
            </Link>
            <Link
              className={`font-[400] text-[14px] leading-[24px]`}
              href="/body_products"
            >
              Body
            </Link>
            <Link
              className={`font-[400] text-[14px] leading-[24px]`}
              href="/all_products"
            >
              products
            </Link>
          </div>
        </div>
        {/* -------- */}

        <div
          className={`payment 
            w-[302px]
             flex flex-col gap-[24px]
        max-sm:pl-[10px]
            
            `}
        >
          <p className={`font-[700] text-[14px] leading-[24px] tracking-[1px]`}>
            Get your favorite products today and enjoy easy, flexible
            installment plans.
          </p>
          <div
            className={`pay_methods 
             flex flex-wrap gap-[24px] 
            `}
          >
            <Image src="/visa.svg" alt="visa" width={54} height={36} />
            <Image
              src="/mastercard.svg"
              alt="mastercard"
              width={54}
              height={36}
            />
            <Image src="/pay.svg" alt="pay" width={54} height={36} />
            <span className="flex justify-center items-center gap-[8px] text-red-600 text-[12px]">
              <Image
                src="/vodafone.svg"
                alt="vodafone"
                width={34}
                height={36}
              />
              Vodafone
              <br />
              Cash
            </span>
            <Image
              src="/instapay.png"
              alt="instapay"
              width={150}
              height={100}
            />
          </div>
        </div>
        {/* -------- */}

        <div
          className={`subscribtion 
            w-full max-w-[467px]
             flex flex-col gap-[24px]
        max-sm:pl-[10px]
            
            `}
        >
          <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>Subscribe</p>
          <p className={`font-[400] text-[14px] leading-[24px]`}>
            Stay updated — enter your email to discover our latest collections
            and exclusive launches.
          </p>
          <input type="email" name="mail" id="mail" placeholder="Email" className={`
            bg-gray-100 h-[48px] indent-7
            `}/>
          <button className={`font-[700] text-[16px] leading-[16px] tracking-[1px] text-white bg-black
            h-[48px] w-[139px] rounded-md
            `}>Subscribe</button>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div
        className={`bottom_footer
     bg-black  w-full h-[48px] max-h-full text-white flex items-center pl-[20px]
        max-sm:mt-[30px]
    `}
      >
        <p className={"font-[400] text-[14px] leading-[24px]"}>
          &copy;Copyright {new Date().getFullYear()} Ghofran | Design By
          DevUnity
        </p>
      </div>
    </div>
  );
};

export default Footer;
