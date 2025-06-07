import classes from "../style/ghofran.module.css";
const Ghofran = () => {
  return (
    <div className="my-[200px] flex flex-col gap-[56px] justify-center items-center">
      <div className={` flex flex-col justify-center items-center gap-[24px] w-full max-w-[1135px]`}>
        <h3 className={`font-[700] text-[40px] leading-[64px]`}>Ghofran — Made Just for You</h3>
        <p className={`${classes.gofran_text} font-[700] text-[20px] leading-[40px] tracking-[1px] text-center px-14 py-4`}>
          At Ghofran, we blend elegance, tradition, and modern style to bring
          you carefully selected pieces that reflect beauty, comfort, and
          individuality. Every product is chosen with love to fit your lifestyle
          and elevate your everyday look.
        </p>
        <button className={`font-[700] text-[16px] leading-[16px] tracking-[1px] text-white w-[360px] h-[48px] bg-black
            rounded-md
            `}>Shop Now and Embrace Your Style</button>
      </div>
      {/* ---------------- */}
      <div className={`${classes.blocks} flex gap-[16px] w-full max-w-[1744px] mx-auto max-sm:flex-col`}>
        <div className={`${classes.box1} bg-gray-400 w-full max-w[864px] h-[864px]`}></div>
        <div className={`${classes.box2}  w-full max-w[864px] h-[864px] flex flex-wrap gap-[16px]`}>
            <div className={`${classes.child_box} w-full max-w-[424px] h-[424px] bg-gray-400`}></div>
            <div className={`${classes.child_box} w-full max-w-[424px] h-[424px] bg-gray-400`}></div>
            <div className={`${classes.child_box} w-full max-w-[424px] h-[424px] bg-gray-400`}></div>
            <div className={`${classes.child_box} w-full max-w-[424px] h-[424px] bg-gray-400`}></div>
        </div>
      </div>
    </div>
  );
};

export default Ghofran;
