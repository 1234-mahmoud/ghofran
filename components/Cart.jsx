import classes from "../style/cart.module.css";
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";
import BestSellerProducts from "./BestSellerProducts";
import Link from "next/link";
const Cart = () => {
  return (
    <div
      className={`
    mt-[100px]
    `}
    >
      <div className="title">
        <h4
          className={`
            font-[700] text-[32px] leading-[40px] uppercase text-center my-[50px]
            `}
        >
          Your Cart
        </h4>
      </div>
      {/* ------------------------------------- */}
      <div
        className={`box my-[100px]
    w-full max-w-[1614px] h-[432px] max-xl:h-full mx-auto flex gap-[120px]
     max-sm:gap-[0px] max-sm:px-2  max-xl:flex-col max-xl:px-3
    `}
      >
        <div className={`box1 flex flex-col gap-[56px]
          
          `}>
          <div
            className={`product
            flex gap-[24px]
                ${classes.spliter}
                max-sm:justify-center 
                max-md:flex-col 
                max-lg:items-center
            `}
          >
            <Image
              src="/pic.jpg"
              width={196}
              height={162}
              alt="product"
              className={`w-full h-full lg:w-[196px] lg:h-[162px] rounded-md`}
            />
            <div
              className={`prod_info
                w-[645px] h-[162px] max-lg:h-full flex gap-[24px] px-[24px]
                max-lg:flex-col max-lg:w-full max-lg:px-[10px] 
                

                `}
            >
              <div
                className={`
                flex flex-col gap-[8px] justify-center 
                `}
              >
                <p>Oils / Essential Oils</p>
                <p
                  className={`product_name font-[700] leading-[40px] tracking-[1px] text-[20px]`}
                >
                  Jojoba OIi 240ml
                </p>
                <div
                  className={`price flex justify-between items-center gap-[24px]  
                    max-md:justify-around max-md:flex-wrap
                    
                    `}
                >
                  <span
                    className={`price_after_discount font-[700] leading-[24px] tracking-[1px] text-[14px]`}
                  >
                    240.00 EGP
                  </span>
                  <span
                    className={`${classes.price_before_discount} line-through font-[400] leading-[24px] text-[14px] ${classes.discount}`}
                  >
                    640.00 EGP
                  </span>
                  <span
                    className={`${classes.money_saved}  font-[400] leading-[24px] text-[14px] px-[8px] rounded-sm text-white ${classes.btn1}
                    max-sm:w-[300px] text-center
                    `}
                  >
                    Save 400 EGP
                  </span>
                </div>
              </div>
              <div className={`flex items-center gap-[10px]
                
                max-xl:justify-center
                
                `}>
                <div
                  className={`btn_quantity flex justify-between items-center gap-[8px] 
                    rounded-2xl border-[1px] border-gray-400 w-[140px] h-[36px]
                    overflow-hidden bg-white
                    max-sm:w-[150px]
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
                ${classes.remove_btn}
                cursor-pointer px-[10px] py-[2px] rounded-md
                `}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------------- */}
           <div
            className={`product
            flex gap-[24px]
                ${classes.spliter}
                max-sm:justify-center 
                max-md:flex-col 
                max-lg:items-center
            `}
          >
            <Image
              src="/pic.jpg"
              width={196}
              height={162}
              alt="product"
              className={`w-full h-full lg:w-[196px] lg:h-[162px] rounded-md`}
            />
            <div
              className={`prod_info
                w-[645px] h-[162px] max-lg:h-full flex gap-[24px] px-[24px]
                max-lg:flex-col max-lg:w-full max-lg:px-[10px] 
                

                `}
            >
              <div
                className={`
                flex flex-col gap-[8px] justify-center 
                `}
              >
                <p>Oils / Essential Oils</p>
                <p
                  className={`product_name font-[700] leading-[40px] tracking-[1px] text-[20px]`}
                >
                  Jojoba OIi 240ml
                </p>
                <div
                  className={`price flex justify-between items-center gap-[24px]  
                    max-md:justify-around max-md:flex-wrap
                    
                    `}
                >
                  <span
                    className={`price_after_discount font-[700] leading-[24px] tracking-[1px] text-[14px]`}
                  >
                    240.00 EGP
                  </span>
                  <span
                    className={`${classes.price_before_discount} line-through font-[400] leading-[24px] text-[14px] ${classes.discount}`}
                  >
                    640.00 EGP
                  </span>
                  <span
                    className={`${classes.money_saved}  font-[400] leading-[24px] text-[14px] px-[8px] rounded-sm text-white ${classes.btn1}
                    max-sm:w-[300px] text-center
                    `}
                  >
                    Save 400 EGP
                  </span>
                </div>
              </div>
              <div className={`flex items-center gap-[10px]
                
                max-xl:justify-center
                
                `}>
                <div
                  className={`btn_quantity flex justify-between items-center gap-[8px] 
                    rounded-2xl border-[1px] border-gray-400 w-[140px] h-[36px]
                    overflow-hidden bg-white
                    max-sm:w-[150px]
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
                ${classes.remove_btn}
                cursor-pointer px-[10px] py-[2px] rounded-md
                `}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------- */}
        <div
          className={`box2
            border-gray-300 border-[1px] rounded-2xl w-full max-w-[631px] h-[432px] max-sm:h-full p-[64px] flex flex-col gap-[36px]
            max-sm:p-[20px] max-sm:my-[50px]
            max-xl:mx-auto
                        `}
        >
          <p
            className={`
                    font-[700] text-[20px] leading-[40px] tracking-[1px] ${classes.item}
                    px-[24px]
                    `}
          >
            3 Items
          </p>
          <div
            className={`subtotal w-full max-w-[492px] h-[40px]
                    flex justify-between  px-[24px]
                    `}
          >
            <p
              className={`${classes.subtotal}
                      font-[700] text-[20px] leading-[40px] tracking-[1px]
                    `}
            >
              Subtotal
            </p>
            <p
              className={`${classes.subtotal}
                      font-[400] text-[18px] leading-[32px] tracking-[1px]
                    `}
            >
              720.00EGP
            </p>
          </div>

          <div
            className={`
                        flex gap-[8px] items-center font-[400] text-[14px] leading-[24px] text-gray-400
                        `}
          >
            <FiAlertCircle />
            <p>
              Final price including shipping and discounts appears at checkout.
            </p>
          </div>
          <Link href="/payment" className="cursor-pointer">
            <button
              className={` ${classes.checkbtn}
            w-full max-w-[503px] h-[48px] text-white rounded-md
            `}
            >
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <BestSellerProducts title='Explore Recently Viewed Products' style={`text-center`}/>
     
    </div>
  );
};

export default Cart;
