import classes from "../style/Year.module.css";
import Image from "next/image";
const Year = () => {
  return (
    <div className={`w-full max-w-[1226px] h-[932px] mx-auto 
    
      max-sm:hidden
    
    `}>
      <div className="title">
        <h1>What Makes This Year Different</h1>
      </div>
      {/* -------b1-------- */}
      <div className={`boxes relative  h-[752px] 
        max-sm:h-full
        `}>
        <div className={`${classes.custom_box}`}>
          <p>New Arrivals</p>
          <p>Latest trends just landed.</p>
        </div>
        <div className={`${classes.custom_box}`}>
          <p>Flexible Payment Options</p>
          <p>Pay your way, your style.</p>
        </div>
        <div className={`${classes.custom_box}`}>
          <p>Product Installments</p>
          <p>Split the cost, stress-free.</p>
        </div>
        <div className={`${classes.custom_box}`}>
          <p>Nationwide Shipping</p>
          <p>We deliver anywhere in Egypt.</p>
        </div>
        {/* ------------------------------------ */}
        <div className={`${classes.box}`}>
          <div className={`${classes.inter_box}`}>
            <div className={`${classes.inter_circle}`}>
              <Image className={`w-full h-full object-cover absolute rounded-full`} src='/pic2.jpg' alt="pic" width={200} height={200}/>
            </div>
          </div>
          <div className={`${classes.circle}`}>
              <Image className={`w-full h-full object-cover absolute rounded-full`} src='/pic3.jpg' alt="pic" width={200} height={200}/>

          </div>
          <div className={`${classes.circle}`}>
              <Image className={`w-full h-full object-cover absolute rounded-full`} src='/pic2.jpg' alt="pic" width={200} height={200}/>

          </div>

          <span className={`${classes.cir_}`}>20</span>
          <span className={`${classes.cir_}`}>25</span>
        </div>
      </div>
    </div>
  );
};

export default Year;
