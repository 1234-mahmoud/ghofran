"use client";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";

import HairBlog from "components/HairBlog";
import classes from "../../style/products.module.css";
import products from "../../data/hair_products.json";
import Image from "next/image";
import pic from "../../assets/pic.jpg";
import { ContextProvider } from "../../context/AppProvider";
export default function HairProducts() {
  const { currency, cart, addToCart } = useContext(ContextProvider);
  return (
    <>
  
      {/* ------------------------------------------------------------- */}
<h1 className="text-center m-10 text-4xl font-semibold">All Hair Products</h1>
      <div
        className={`${classes.products}  flex gap-[56px] flex-wrap justify-center items-center 
        max-lg:px-[10px]
        `}
      >
        {products.map((p) => (
          <div
            className={`${classes.products} mt-[100px]  flex gap-[56px] flex-wrap justify-center items-center 
        max-lg:px-[10px]
        `}
            key={p.id}
          >
            <div
              className={`product flex flex-col gap-8 w-full max-w-[392px] h-[424px] relative`}
            >
              <div
                className={`bage absolute  text-white top-[16px] left-[16px]  h-[32px]
                rounded-md pt-[4px] pb-[4px] pr-[8px] pl-[8px]
                font-[400] text-[14px] flex justify-center items-center
                  bg-black w-[88px]
                  `}
              >
                Best Seller
              </div>

              <Image
                src={pic}
                alt="image"
                className={`w-full h-[304px] rounded-sm`}
              />
              <div className="cat flex flex-col gap-[8px]">
                <span
                  className={`${classes.cat_type} flex justify-between items-center font-[400] leading-[24px]`}
                >
                  <span>
                    Oils / <span>Essential Oils</span>
                  </span>
                  <span
                    className={`rate flex justify-center items-center gap-2`}
                  >
                    <AiFillStar />
                    <span>4.5</span>
                  </span>
                </span>

                <p
                  className={`product_name font-[700] leading-[40px] tracking-[1px] text-[20px]`}
                >
                  {p.name}{" "}
                  <span
                    className={`product_name font-[400] leading-[40px] tracking-[1px] text-[16px]`}
                  >
                    {p.weight}
                  </span>
                </p>
                <div className={`price flex justify-between items-center`}>
                  <span
                    className={`price_after_discount font-[700] leading-[24px] tracking-[1px] text-[14px]`}
                  >
                    {currency.format(p.priceAfter)}
                  </span>
                  <span
                    className={`text-lime-800 line-through font-[400] leading-[24px] text-[14px]`}
                  >
                    {currency.format(p.priceBefore)}
                  </span>
                  <span
                    className={`text-red-600  font-[400] leading-[24px] text-[14px]`}
                  >
                    Save {currency.format(p.priceBefore - p.priceAfter)}
                  </span>
                </div>
                {!cart.some((item) => item.id === p.id) && (
                  <button
                    className={`w-full h-[40px] bg-black text-white rounded-md`}
                    onClick={() => addToCart(p)}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* -------------------------Pagination--------------------------------- */}
      <div className="w-fit mx-auto mt-[50px] mb-[30px]">
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-black px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
       <div>
      <HairBlog/>
    </div>
    </>
  );
}
