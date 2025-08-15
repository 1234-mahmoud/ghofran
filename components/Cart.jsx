"use client";

import { useContext } from "react";
import { ContextProvider } from "context/AppProvider";
import classes from "../style/cart.module.css";
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";
import BestSellerProducts from "./BestSellerProducts";
import Link from "next/link";

const Cart = () => {
  const { cart, currency, getCartTotal, addToCart, deleteProduct,
    reduceQuantity
  } =
    useContext(ContextProvider);

  // Tailwind utility groupings for reuse
  const titleClass =
    "font-bold text-[32px] leading-[40px] uppercase text-center my-12";
  const containerClass =
    "box my-24 w-full max-w-[1614px] mx-auto flex flex-wrap gap-[120px] max-xl:flex-col max-xl:px-3 max-sm:gap-0 max-sm:px-2";
  const productBoxClass = "flex flex-col gap-14";
  const productClass = `flex gap-6 ${classes.spliter} max-sm:justify-center max-md:flex-col max-lg:items-center`;
  const productInfoClass =
    "w-[645px] h-[162px] flex gap-6 px-6 max-lg:flex-col max-lg:w-full max-lg:px-2 max-lg:h-full";
  const quantityBtnClass =
    "btn_quantity flex justify-between items-center gap-2 rounded-2xl border border-gray-400 w-[140px] h-[36px] bg-white overflow-hidden max-sm:w-[150px]";
  const checkoutBoxClass = `border border-gray-300 rounded-2xl w-full max-w-[631px] h-[432px] p-16 flex flex-col gap-9 max-sm:p-5 max-sm:my-12 max-xl:mx-auto max-sm:h-full`;

  return (
    <div className="mt-[100px]">
      <div className="title">
        <h4 className={titleClass}>Your Cart</h4>
      </div>
      {/* ----------------------------------restyle it !! --------- */}
      <div className="flex gap-[20px]">
        <div className={containerClass}>
          {cart.map((p) => (
            <div className={productBoxClass} key={p.id}>
              <div className={productClass}>
                <Image
                  src="/pic.jpg"
                  width={196}
                  height={162}
                  alt="product"
                  className="w-full h-full lg:w-[196px] lg:h-[162px] rounded-md"
                />

                <div className={productInfoClass}>
                  <div className="flex flex-col gap-2 justify-center">
                    <p>{p.name}</p>
                    <p className="font-bold leading-[40px] tracking-[1px] text-[20px]">
                      {p.name}
                      <span className="font-normal leading-[40px] tracking-[1px] text-[16px] ml-1">
                        {p.weight}
                      </span>
                    </p>

                    <div className="price flex justify-between items-center gap-6 max-md:justify-around max-md:flex-wrap">
                      <span className="font-bold leading-[24px] tracking-[1px] text-[14px]">
                        {currency.format(p.priceAfter)}
                      </span>
                      <span
                        className={`${classes.price_before_discount} line-through font-normal leading-[24px] text-[14px] ${classes.discount}`}
                      >
                        {currency.format(p.priceBefore)}
                      </span>
                      <span
                        className={`${classes.money_saved} font-normal leading-[24px] text-[14px] px-2 rounded-sm text-white ${classes.btn1} max-sm:w-[300px] text-center`}
                      >
                        Save {currency.format(p.priceBefore - p.priceAfter)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 max-xl:justify-center">
                    <div className={quantityBtnClass}>
                      <button className="w-[56px] h-[48px] text-[20px] cursor-pointer"
                      onClick={()=>reduceQuantity(p)}
                      >
                        -
                      </button>
                      <span className="font-bold border border-gray-400 h-[48px] w-[72px] flex justify-center items-center">
                        {p.quantity}
                      </span>
                      <button className="w-[56px] h-[48px] text-[20px] cursor-pointer" 
                      onClick={()=>addToCart(p)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className={`${classes.remove_btn} cursor-pointer px-[10px] py-[2px] rounded-md`}
                    onClick={()=>deleteProduct(p)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary / Checkout Section */}
        <div className={checkoutBoxClass}>
          <p
            className={`font-bold text-[20px] leading-[40px] tracking-[1px] ${classes.item} px-6`}
          >
            {cart.length} Items
          </p>

          <div className="subtotal w-full max-w-[492px] h-[40px] flex justify-between px-6">
            <p
              className={`${classes.subtotal} font-bold text-[20px] leading-[40px] tracking-[1px]`}
            >
              Total Price
            </p>
            <p
              className={`${classes.subtotal} font-normal text-[18px] leading-[32px] tracking-[1px]`}
            >
              
             {currency.format(getCartTotal())}
            </p>
          </div>

          <div className="flex gap-2 items-center font-normal text-[14px] leading-[24px] text-gray-400">
            <FiAlertCircle />
            <p>
              Final price including shipping and discounts appears at checkout.
            </p>
          </div>

          <Link href="/payment" className="cursor-pointer">
            <button
              className={`${classes.checkbtn} w-full max-w-[503px] h-[48px] text-white rounded-md`}
            >
              Check Out
            </button>
          </Link>
        </div>
      </div>

    <div className="my-[100px]">
        <BestSellerProducts
        title="Explore Recently Viewed Products"
        style="text-center"
        badge="Best Seller"
      />
    </div>
    </div>
  );
};

export default Cart;
