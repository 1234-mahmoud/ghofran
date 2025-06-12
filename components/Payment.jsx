import classes from "../style/payment.module.css";
import Image from "next/image";
import Link from "next/link";
const Payment = () => {
  return (
    <div
      className={`my-[50px] w-full max-w-[1484px] mx-auto flex gap-[36px] max-sm:flex-col`}
    >
      <div className="contact w-full max-w-[648px]">
        <form action="" className={`flex flex-col gap-[64px]`}>
          <div
            className={`contact_ 
            flex flex-col gap-[8px]
            `}
          >
            <p
              className={`
              font-[700] text-[20px] leading-[40px] tracking-[1px]
              `}
            >
              Contact
            </p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className={`w-full max-w-[600px] h-[56px] text-[14px] rounded-sm indent-[40px] ${classes.input_}`}
            />
            <label
              htmlFor=""
              className={`flex items-center gap-[8px]
               font-[400] text-[14px] leading-[24px] 
              `}
            >
              <input
                type="checkbox"
                name=""
                id=""
                className={`w-[24px] h-[24px]`}
              />
              Join our Exclusive List
            </label>
            <input
              type="text"
              placeholder="+02 phone number"
              className={`w-full max-w-[600px] h-[56px] text-[14px] rounded-sm indent-[40px] ${classes.input_}`}
            />
          </div>
          {/* ----------------------------- */}
          <div
            className={`delivery_
            flex flex-col gap-[8px]
            `}
          >
            <p
              className={`
              font-[700] text-[20px] leading-[40px] tracking-[1px]
              `}
            >
              Delivery
            </p>
            <div
              className={`
                flex flex-col gap-[16px]
                `}
            >
              <div
                className={`name 
              flex gap-[16px]
              `}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="first name"
                  className={`w-full max-w-[292px] h-[56px] text-[14px] rounded-sm indent-[40px] ${classes.input_}`}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="last name"
                  className={`w-full max-w-[292px] h-[56px] text-[14px] rounded-sm indent-[40px] ${classes.input_}`}
                />
              </div>
              <input
                type="text"
                placeholder="address"
                className={`w-full max-w-[600px] h-[56px] text-[14px] rounded-sm indent-[40px] ${classes.input_}`}
              />
              <div className={`city flex gap-[16px]`}>
                <select
                  name=""
                  id=""
                  className={`w-full max-w-[292px] h-[56px] text-[14px] rounded-sm indent-[40px] ${classes.input_}`}
                >
                  <option value="">Damietta</option>
                  <option value="">New Damietta</option>
                </select>
                {/* ----------- */}
                <select
                  name=""
                  id=""
                  className={`w-full max-w-[292px] h-[56px] text-[14px] rounded-sm indent-[40px] ${classes.input_}`}
                >
                  <option value="">Region</option>
                  <option value="">Damietta</option>
                  <option value="">New Damietta</option>
                </select>
              </div>
              <label
                htmlFor=""
                className={`flex items-center gap-[8px]
               font-[400] text-[14px] leading-[24px] 
              `}
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={`w-[24px] h-[24px]`}
                />
                Save This Information For Next Time
              </label>
              <p className={`font-[400] text-[14px] leading-[24px] `}>
                Use A Saved Address
              </p>
            </div>
          </div>
          {/* -------------------------------- */}
          <div className="shipping_method">
            <p
              className={`
              font-[700] text-[20px] leading-[40px] tracking-[1px]
              `}
            >
              Shipping method
            </p>
            <input
              type="text"
              placeholder="Enter your shipping address to view available shipping methods."
              className={`w-full max-w-[600px] h-[56px] text-[14px] rounded-sm text-center ${classes.input_2}`}
            />
          </div>
          {/* -------------------------------- */}

          <div
            className={`payment 
            flex flex-col gap-[8px]
            
            `}
          >
            <div>
              <p
                className={`
              font-[700] text-[20px] leading-[40px] tracking-[1px]
              `}
              >
                Payment
              </p>
              <p className={`font-[400] text-[14px] leading-[24px]`}>
                All transactions are secure and encrypted.
              </p>
            </div>
            {/* -------- */}
            <div
              className={`credit_cash
              border-[1px] border-gray-300 rounded-md 
              `}
            >
              <div
                className={`credit
                `}
              >
                <div
                  className={`
                flex items-center gap-[86px] px-[24px] py-[8px] ${classes.input_2}
                `}
                >
                  <label
                    htmlFor="visa"
                    className={`flex items-center gap-[8px]`}
                  >
                    <input
                      type="radio"
                      name="pay"
                      id="visa"
                      className={`w-[24px] h-[24px] accent-black
                        font-[400] text-[14px] leading-[24px]
                        `}
                    />
                    Pay via (Debit/Credit cards/Wallets/Installments)
                  </label>

                  <div
                    className={`credits
                  flex items-center gap-[8px] 
                  `}
                  >
                    <Image
                      src="/mastercard.svg"
                      alt="electronic payment"
                      width={38}
                      height={24}
                    />
                    <Image
                      src="/visa.svg"
                      alt="electronic payment"
                      width={38}
                      height={24}
                    />
                    <Image
                      src="/pay.svg"
                      alt="electronic payment"
                      width={38}
                      height={24}
                    />
                    <Image
                      src="/vodafone.svg"
                      alt="electronic payment"
                      width={28}
                      height={24}
                    />
                    <Image
                      src="/instapay.png"
                      alt="electronic payment"
                      width={38}
                      height={24}
                    />
                  </div>
                </div>

                {/* -------------- */}
                <div
                  className={`credit_shape
                  flex flex-col gap-[16px] justify-center items-center px-[24px] py-[16px]
                  border-t-[1px] border-b-[1px] border-gray-500 ${classes.input_2}
                  `}
                >
                  <div
                    className={`bg-white w-[100px] h-[72px] border-[1px] border-gray-400 rounded-tl-2xl rounded-br-2xl
                    ${classes.credit} relative
                    `}
                  ></div>
                  <p
                    className={`text-center 
                    font-[400] text-[14px] leading-[24px]
                    w-full max-w-[393px] h-[72px] max-sm:h-full
                    `}
                  >
                    After clicking “Pay now”, you will be redirected to Pay via
                    (Debit/Credit cards/Wallets/Installments) to complete your
                    purchase securely.
                  </p>
                </div>
              </div>
              {/* --------- */}
              <label
                htmlFor="cash"
                className={`flex items-center gap-[8px] px-[24px] py-[16px]
                      font-[400] text-[14px] leading-[24px]
                      `}
              >
                <input
                  type="radio"
                  name="pay"
                  id="cash"
                  className={`w-[24px] h-[24px] accent-black`}
                />
                Cash on Delivery (COD)
              </label>
            </div>
          </div>
          <button
            className={`
            w-full max-w-[600px] h-[48px] font-[700] leading-[16px] tracking-[1px] text-white bg-gray-900 
            rounded-md mx-auto cursor-pointer
            `}
          >
            Pay Now
          </button>
        </form>
        <div className={`my-[40px]
          flex items-center gap-[24px] px-[24px] py-[16px]
                      font-[400] text-[14px] leading-[24px]

          `}>
          <a href="#" className={`border-b-[1px]`}>Refund and shipping policy</a>
          <a href="#" className={`border-b-[1px]`}>Privacy policy</a>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------- */}
      <div className="order bg-gray-400 w-full max-w-[800px]">ffff</div>
    </div>
  );
};

export default Payment;
