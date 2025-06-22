import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
const BlogsCompDynamic = () => {
  return (
    <div
      className={`w-full max-w-[1644px] mx-auto bg-amber-200  
    grid [grid-template-columns:1092px_496px]  gap-[56px]
    `}
    >
      {/* -----------------------------box1---------------------------- */}
      <div className={`box1 w-full border-2`}>
        {/* ------------------block1--------------- */}
        <div className={`block1 flex flex-col gap-[24px]`}>
          <div className={`img overflow-hidden relative h-[544px]
            max-xl:h-full
            `}>
            <Image fill src="/pic4.jpg" alt="img of block1" />
          </div>
          <div
            className={`
          w-full max-w-[966px] mx-auto h-[183px] 
            flex flex-col gap-[10px] justify-center items-center
            max-lg:h-full
            `}
          >
            <h4
              className={`
                font-[700] text-[32px] leading-[40px]
                `}
            >
              The Secret to Healthy, Glowing Hair
            </h4>
            <p
              className={`
                font-[700] text-[20px] leading-[40px] tracking-[1px] text-gray-800 text-center
                `}
            >
              Discover the power of natural oils and daily care routines that
              nourish your hair, boost shine, and help you achieve a stronger,
              healthier look—starting from the roots.
            </p>
          </div>
        </div>

        {/* ------------------block2--------------- */}

        <div
          className={`w-full max-w-[1659px] mx-auto  flex gap-[32px] flex-wrap max-lg:h-full justify-center `}
        >
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className={`w-full max-w-[521px] h-[707px] max-xl:h-full
              max-xl:w-[320px] 
              `}
            >
              <div
                className={`img h-[507px] w-full max-w-[521px] relative overflow-hidden 
                    max-xl:h-[300px] max-xl:w-[320px]
                  
                  `}
              >
                <Image src="/pic4.jpg" fill alt="blog image" />
              </div>
              <div
                className={`h-[176px] w-full max-w-[454px] mx-auto flex flex-col justify-center items-center gap-[24px] px-4
                  max-xl:h-full
                  `}
              >
                <p
                  className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}
                >
                  New Arrivals, Start Your Journey
                </p>
                <p
                  className={`font-[400] text-[18px] leading-[32px] tracking-[1px] text-gray-800 text-center`}
                >
                  Short Description: Discover expert tips and natural oils that
                  transform your hair from dull to radiant.
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* ------------------block3--------------- */}
        {/* ---------pagination---------- */}
       <div className="w-full max-w-[588px] mx-auto mt-[50px] mb-[30px] px-4">
  <div className="flex items-center justify-center border-t border-gray-200 py-3">
    <nav
      className="isolate inline-flex flex-wrap justify-center gap-1 rounded-md shadow-xs"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <a
        href="#"
        className="inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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

      {/* Page Numbers */}
      <a
        href="#"
        aria-current="page"
        className="z-10 inline-flex items-center px-4 py-2 bg-black text-white font-semibold focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        1
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        2
      </a>
      <a
        href="#"
        className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        3
      </a>
      <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset">
        ...
      </span>
      <a
        href="#"
        className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        8
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        9
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        10
      </a>

      {/* Next Button */}
      <a
        href="#"
        className="inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
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

        {/* -------------------------------end-------------------------- */}
      </div>
      {/* -------------------------------box2-------------------------- */}
      <div className={`box2 w-full  border-2 flex flex-col gap-[48px]`}>
        {/* ------------------block1--------------- */}

        <div
          className={`w-full max-w-[485px] h-[528px] flex flex-col gap-[24px] justify-center items-center bg-gray-200
            max-xl:h-full max-xl:w-[320px] 
              `}
        >
          <div
            className={`img h-[312px] w-full max-w-[496px] relative overflow-hidden max-xl:h-[300px]
              max-xl:w-[320px]
                  `}
          >
            <Image src="/pic4.jpg" fill alt="blog image" />
          </div>
          <div
            className={`h-[176px] w-full max-w-[454px] mx-auto flex flex-col justify-center items-center gap-[24px] px-4
                  max-xl:h-full
                  `}
          >
            <p
              className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}
            >
              New Arrivals, Start Your Journey
            </p>
            <p
              className={`font-[400] text-[18px] leading-[32px] tracking-[1px] text-gray-800 text-center`}
            >
              Short Description: Discover expert tips and natural oils that
              transform your hair from dull to radiant.
            </p>
            <a
              href="/"
              className={`font-[700] text-[14px] leading-[24px] tracking-[1px] text-center`}
            >
              Read more to unlock your best hair yet
            </a>
          </div>
        </div>
        {/* ------------------block2--------------- */}
        <div
          className={`w-full max-w-[485px] h-[528px] flex flex-col gap-[24px] justify-center items-center bg-gray-200
            max-xl:h-full max-xl:w-[320px] 
              `}
        >
          <div
            className={`img h-[312px] w-full max-w-[496px] relative overflow-hidden 
                max-xl:h-[300px] max-xl:w-[320px]
                  `}
          >
            <Image src="/pic4.jpg" fill alt="blog image" />
          </div>
          <div
            className={`h-[176px] w-full max-w-[454px] mx-auto flex flex-col justify-center items-center gap-[24px] px-4
                  max-xl:h-full
                  `}
          >
            <p
              className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}
            >
              New Arrivals, Start Your Journey
            </p>

            <button
              className={`w-[182px] h-[40px] bg-black rounded-md text-white
                    font-[700] text-[16px] leading-[16px] tracking-[1px]
                    `}
            >
              <Link href="/shop">Go To Shop →</Link>
            </button>
          </div>
        </div>
        {/* ------------------block3--------------- */}
        <div
          className={`img h-[312px] w-full max-w-[496px] relative overflow-hidden 
            max-xl:h-[300px] max-xl:w-[320px] 
                  `}
        >
          <Image src="/pic4.jpg" fill alt="blog image" />
          <button
            className={`w-[182px] h-[40px] bg-white rounded-md 
                    font-[700] text-[16px] leading-[16px] tracking-[1px]
                    absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    `}
          >
            <Link href="/shop">Skin Blogs</Link>
          </button>
        </div>
        {/* ------------------block4--------------- */}
        <div
          className={`img h-[312px] w-full max-w-[496px] relative overflow-hidden max-xl:h-[300px]
              max-xl:w-[320px]
                  `}
        >
          <Image src="/pic4.jpg" fill alt="blog image" />
          <button
            className={`w-[182px] h-[40px] bg-black rounded-md text-white
                    font-[700] text-[16px] leading-[16px] tracking-[1px]
                    absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    `}
          >
            <Link href="/shop">Face Blogs</Link>
          </button>
        </div>
        {/* ------------------block5--------------- */}
        <div
          className={`img h-[312px] w-full max-w-[496px] relative overflow-hidden max-xl:h-[300px]
              max-xl:w-[320px]
                  `}
        >
          <Image src="/pic4.jpg" fill alt="blog image" />
          <button
            className={`w-[182px] h-[40px] bg-white rounded-md 
                    font-[700] text-[16px] leading-[16px] tracking-[1px]
                    absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    `}
          >
            <Link href="/shop">Hair Blogs</Link>
          </button>
        </div>
        {/* ------------------block6--------------- */}
        <div
          className={`img h-[296px] w-full max-w-[496px] relative overflow-hidden max-xl:h-[300px]
              max-xl:w-[320px]
                  `}
        >
          <Image src="/pic4.jpg" fill alt="blog image" />
          <button
            className={`w-[340px] h-[48px] bg-blue-500 rounded-md text-white
                    font-[700] text-[16px] leading-[16px] tracking-[1px]
                    absolute bottom-[20px] left-[50%] translate-x-[-50%]
                    flex justify-center items-center gap-[10px]
                    `}
          >
              <FaFacebook />
            <Link href="/shop">
              Find Us On Facebook
            </Link>
          </button>
        </div>
        {/* ------------------block7--------------- */}
<div className={`flex flex-col gap-[24px]`}>
    <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px] text-lime-900
        text-center 
        `}>Latest News</p>
    {/* ---------------- */}

    <div className="flex gap-[16px]">
        <div className={`img w-[150px] h-[112px] relative overflow-hidden`}>
          <Image src="/pic4.jpg" fill alt="blog image" />
        </div>
        <div className="flex flex-col justify-center gap-[8px] w-full max-w-[492px] h-[112px]">
            <p className={`font-[700] text-[14px] leading-[24px] tracking-[1px]`}>New Arrivals, Start Your Journey</p>
            <p className={`font-[400] text-[14px] leading-[24px] tracking-[1px]`}>Short Description: Discover expert tips and natural 
                oils that transform your hair from dull to radiant.</p>
        </div>
    </div>
    {/* ---------------- */}
    
      <div className="flex gap-[16px] ">
        <div className={`img w-[150px] h-[112px] relative overflow-hidden`}>
          <Image src="/pic4.jpg" fill alt="blog image" />
        </div>
        <div className="flex flex-col justify-center gap-[8px] w-full max-w-[492px] h-[112px]">
            <p className={`font-[700] text-[14px] leading-[24px] tracking-[1px]`}>New Arrivals, Start Your Journey</p>
            <p className={`font-[400] text-[14px] leading-[24px] tracking-[1px]`}>Short Description: Discover expert tips and natural 
                oils that transform your hair from dull to radiant.</p>
        </div>
    </div>
</div>
        {/* ------------------end--------------- */}

      </div>
    </div>
  );
};

export default BlogsCompDynamic;
