"use client";
import classes from "../style/reviews.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoStar } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";

const Reviews = ({ params }) => {
  // const { product_id } = params;
  const [show, setShow] = useState(false);
  const [transform,settransform] = useState(false)
  const toggle = () => {
    setShow(!show);
    settransform(!transform)
  };



  const now = new Date();
  return (
    <div>
      {/* <nav>
        <Link
          href={`/all_products/${product_id}/rate_review`}
          className={`font-[700] text-[2rem] pb-3 uppercase leading-[40px]
                                        ${
                                          path.startsWith(
                                            `/all_products/${product_id}/rate_review`
                                          )
                                            ? classes.active
                                            : undefined
                                        }`}
        >
          <h4>rating and reviews</h4>
        </Link>
        <Link
          href={`/all_products/${product_id}/description`}
          className={`font-[700] text-[2rem] pb-3 uppercase leading-[40px]
                                        ${
                                          path.startsWith(
                                            `/all_products/${product_id}/description`
                                          )
                                            ? classes.active
                                            : undefined
                                        }`}
        >
          <h4>description</h4>
        </Link>
        <Link
          href={`/all_products/${product_id}/info`}
          className={`font-[700] text-[2rem] pb-3 uppercase leading-[40px]
                                        ${
                                          path.startsWith(
                                            `/all_products/${product_id}/info`
                                          )
                                            ? classes.active
                                            : undefined
                                        }`}
        >
          <h4>additional information </h4>
        </Link>
      </nav> */}
      {/* -------------------------content--------------------------------- */}
      <div
        className={`flex items-center gap-[64px] w-full  max-w-[1309px] h-[248px] mx-auto my-[100px] 
          max-sm:mx-1 max-sm:mt-[200px] max-sm:justify-center 
          max-2xl:h-full max-md:flex-col max-xl:px-2
         
          `}
      >
        <div className={`${classes.rev} flex flex-col gap-[36px]
                max-sm:gap-[20px] 
                max-xl:mx-auto
                `}>
          <p
            className={` 
          font-[700] text-[20px] leading-[40px] tracking-[1px] text-gray-900
          `}
          >
            customer review
          </p>
          <div className={`rev_nums flex items-center gap-[36px] 
            max-sm:flex-col
            `}>
            <div className={`rev_nums flex flex-col items-center gap-[8px]`}>
              <h2
                className={` 
          font-[700] text-[48px] leading-[56px] text-gray-900
          `}
              >
                4.5
              </h2>
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
              <span
                className={` 
          font-[400] text-[14px] leading-[24px] text-gray-500
          `}
              >
                {" "}
                (35 Reviews)
              </span>
            </div>
            <div>
              <ol className="flex flex-col gap-[8px]">
                <li className={`flex gap-[10px] justify-ceneter items-center`}>
                  5{" "}
                  <div
                    className={`w-[323px]  h-[10px] rounded-md bg-gray-300 ${classes.rate} ${classes.rate1}
                    max-sm:w-[250px]
                    `}
                  ></div>
                  <span>(20 Review)</span>
                </li>
                <li className={`flex gap-[10px] justify-ceneter items-center`}>
                  4{" "}
                  <div
                    className={`w-[323px] h-[10px] rounded-md bg-gray-300 ${classes.rate} ${classes.rate2}
                    max-sm:w-[250px]
                    `}
                  ></div>
                  <span> (7 Review)</span>
                </li>
                <li className={`flex gap-[10px] justify-ceneter items-center`}>
                  3{" "}
                  <div
                    className={`w-[323px] h-[10px] rounded-md bg-gray-300 ${classes.rate} ${classes.rate3}
                    max-sm:w-[250px]
                    `}
                  ></div>
                  <span>(4 Review)</span>
                </li>
                <li className={`flex gap-[10px] justify-ceneter items-center`}>
                  2{" "}
                  <div
                    className={`w-[323px] h-[10px] rounded-md bg-gray-300 ${classes.rate} ${classes.rate4}
                    max-sm:w-[250px]
                    `}
                  ></div>
                  <span>(1 Review)</span>
                </li>
                <li className={`flex gap-[10px] justify-ceneter items-center`}>
                  1{" "}
                  <div
                    className={`w-[323px] h-[10px] rounded-md bg-gray-300 ${classes.rate} ${classes.rate5}
                    max-sm:w-[250px]
                    `}
                  ></div>
                  <span>(3 Review)</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------- */}
        <button
          className={`w-full max-w-[522px] h-[48px] text-white rounded-md ${classes.rev_btn}
      font-[700] text-[16px] leading-[16px] tracking-[1px] cursor-pointer 
      max-md:w-[300px]
      max-xl:w-[400px]
      max-xl:mx-auto

      `}
        >
          write review
        </button>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div
        className={`customer_review 
        w-full max-w-[1643px] h-full px-[112px] flex flex-col gap-[40px] max-sm:px-[5px]
      
        `}
      >
        <div
          className={`${classes.select_comp} 
       border-[1px] border-gray-300 rounded-sm w-full max-w-[343px] 
       flex flex-col justify-center items-center gap-[8px]
       max-sm:mx-auto
      `}
        >
          <label
            htmlFor=""
            className={`
        font-[700] text-[20px] leading-[40px] tracking-[1px] text-center
         h-[64px]
          flex justify-center items-center gap-[30px]
          `}
          >
            Sort By
            <IoIosArrowDropright
              onClick={toggle}
              className={`
                ${transform?classes.rotate:classes.not_rotate}
  text-[2rem] font-extrabold
  `}
            />
          </label>
          <div
            className={`${classes.options} ${
              show ? classes.show : classes.hide
            } 
     
          font-[700] text-[20px] leading-[40px] tracking-[1px] text-center
     `}
          >
            <div className={`${classes.parent}`}>
              <div className={`${classes.option}`}>Excellent Review</div>
              <div className={`${classes.option}`}>Good Review</div>
              <div className={`${classes.option}`}>Bad Review</div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div
          className={`${classes.review_} flex flex-col gap-[24px] px-[36px] py-[8px]`}
        >
          <div className="">
            <div className={`flex justify-between items-center`}>
              <div className={`flex items-center gap-[16px]`}>
                <div
                  className={`w-[48px] h-[48px] rounded-full bg-black`}
                ></div>
                <p>Mahmoud Mokhtar</p>
              </div>
              <div className=" text-gray-500">
                <p>{`${now.getDate()} ${now.toLocaleString("default", {
                  month: "long",
                })} ${now.getFullYear()}`}</p>
              </div>
            </div>
            <div className="flex gap-[3px] pl-[40px]">
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
            </div>
          </div>
          <div className="box2">
            <p
              className={`
              font-[400] text-[14px] leading-[24px] 
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>

        {/* ---------------------- */}
        <div
          className={`${classes.review_} flex flex-col gap-[24px] px-[36px] py-[8px]`}
        >
          <div className="">
            <div className={`flex justify-between items-center`}>
              <div className={`flex items-center gap-[16px]`}>
                <div
                  className={`w-[48px] h-[48px] rounded-full bg-black`}
                ></div>
                <p>Mahmoud Mokhtar</p>
              </div>
              <div className=" text-gray-500">
                <p>{`${now.getDate()} ${now.toLocaleString("default", {
                  month: "long",
                })} ${now.getFullYear()}`}</p>
              </div>
            </div>
            <div className="flex gap-[3px] pl-[40px]">
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
            </div>
          </div>
          <div className="box2">
            <p
              className={`
              font-[400] text-[14px] leading-[24px] 
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
        {/* ---------------------- */}
        <div
          className={`${classes.review_} flex flex-col gap-[24px] px-[36px] py-[8px]`}
        >
          <div className="">
            <div className={`flex justify-between items-center`}>
              <div className={`flex items-center gap-[16px]`}>
                <div
                  className={`w-[48px] h-[48px] rounded-full bg-black`}
                ></div>
                <p>Mahmoud Mokhtar</p>
              </div>
              <div className=" text-gray-500">
                <p>{`${now.getDate()} ${now.toLocaleString("default", {
                  month: "long",
                })} ${now.getFullYear()}`}</p>
              </div>
            </div>
            <div className="flex gap-[3px] pl-[40px]">
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
            </div>
          </div>
          <div className="box2">
            <p
              className={`
              font-[400] text-[14px] leading-[24px] 
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
        {/* ---------------------- */}
        <div
          className={`${classes.review_} flex flex-col gap-[24px] px-[36px] py-[8px]`}
        >
          <div className="">
            <div className={`flex justify-between items-center`}>
              <div className={`flex items-center gap-[16px]`}>
                <div
                  className={`w-[48px] h-[48px] rounded-full bg-black`}
                ></div>
                <p>Mahmoud Mokhtar</p>
              </div>
              <div className=" text-gray-500">
                <p>{`${now.getDate()} ${now.toLocaleString("default", {
                  month: "long",
                })} ${now.getFullYear()}`}</p>
              </div>
            </div>
            <div className="flex gap-[3px] pl-[40px]">
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
              <IoStar className="text-gray-400 w-[24px] h-[24px] cursor-pointer" />
            </div>
          </div>
          <div className="box2">
            <p
              className={`
              font-[400] text-[14px] leading-[24px] 
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
        {/* ---------------------- */}
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
    </div>
  );
};

export default Reviews;
