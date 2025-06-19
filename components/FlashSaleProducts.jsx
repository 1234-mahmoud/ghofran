"use client";
import { useContext } from "react";
import Products from "components/Products";
import { ContextProvider } from "context/AppProvider";
const FlashSaleProducts = () => {
     const { now } = useContext(ContextProvider);
    return <div>
         <div
          className={`
          flex flex-col justify-center items-center gap-[24px] my-[50px]
          `}
        >
            <h3
              className={`font-[700] text-[40px] leading-[64px]
            max-md:text-[24px]  max-md:leading-[40px] 
            max-lg:text-[22px]
            max-xl:text-[28px] 
            `}
            >
              Flash Sale! 🔥
            </h3>
          <div className={`title w-full flex gap-[24px] justify-center items-center
          max-sm:flex-col max-sm:text-[1rem] 
          
            `}>
            <h4 className={`font-[700] text-[32px] leading-[40px] text-lime-950 uppercase flex gap-[8px]
             max-sm:text-[1rem]
            max-lg:text-[22px]
            max-xl:text-[28px] 
                
                `}>
              Ends in
              <span className={`flex text-red-600`}>
                {["h", "m", "s"].map((label, index) => (
                  <>
                    {index > 0 && ":"}
                    <div className="">
                      <span
                        className={`flex lowercase
             max-sm:text-[rem]
                            
                            `}
                      >
                        <span>
                          {
                            [
                              now.getHours(),
                              now.getMinutes(),
                              now.getSeconds(),
                            ][index]
                          }
                        </span>
                        {label}
                      </span>
                    </div>
                  </>
                ))}
              </span>{" "}
              ـــــ don't miss out
            </h4>
          </div>
         
        </div>
        <Products/>

    </div>;
}


export default FlashSaleProducts;