import classes from "../style/ghofran.module.css";
import Image from "next/image";
const Ghofran = () => {
  const imgs=['/pic4.jpg','/pic5.jpg','/pic4.jpg','/pic5.jpg'];
  return (
    <div className={`my-24 md:my-[200px] flex flex-col gap-14 md:gap-[56px] justify-center items-center px-4
    max-lg:my-[150px]
    `}>
      {/* Text Content */}
      <div className="flex flex-col justify-center items-center gap-6 md:gap-[24px] w-full max-w-[1135px] text-center">
        <h3 className="font-bold text-3xl md:text-[40px] leading-tight md:leading-[64px]">
          Ghofran — Made Just for You
        </h3>
        <p className={`${classes.gofran_text} font-bold text-base md:text-[20px] leading-relaxed md:leading-[40px] tracking-wide px-4 md:px-14 py-4`}>
          At Ghofran, we blend elegance, tradition, and modern style to bring
          you carefully selected pieces that reflect beauty, comfort, and
          individuality. Every product is chosen with love to fit your lifestyle
          and elevate your everyday look.
        </p>
        <button className="font-bold text-sm md:text-[16px] leading-none tracking-wide text-white w-full max-w-[360px] h-12 bg-black rounded-md">
          Shop Now and Embrace Your Style
        </button>
      </div>

      {/* Image Blocks */}
      <div className={`${classes.blocks} flex flex-col xl:flex-row gap-4 w-full max-w-[1744px] px-4`}>
        {/* Left Large Box */}
        <div className={`${classes.box1} bg-gray-400 w-full xl:max-w-[864px] h-[300px] sm:h-[500px] relative overflow-hidden xl:h-[864px]`}>
<Image src='/pic.jpg' alt='pic' 
              fill
            
              />

        </div>

        {/* Right Grid Boxes */}
        <div className={`${classes.box2} w-full xl:max-w-[864px] flex flex-wrap gap-4`}>
          {imgs.map((i, index) => (
            <div
              key={index}
              className={`${classes.child_box} bg-gray-400 w-full sm:w-[48%] relative overflow-hidden h-[200px] sm:h-[300px] xl:h-[424px]`}
            >
              <Image src={i} alt='pic' 
              fill
            
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ghofran;
