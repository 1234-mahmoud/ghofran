import classes from "../style/top-categories.module.css";
import Image from "next/image";
import Link from "next/link";
const TopCategories = () => {
  const data = [
    { page: "natural_oils_products", img: "/natural_oils.svg", title: "natural oils",
width:128,
height:133,
     },
    { page: "hair_products", img: "/natural_oils2.svg", title: "hair",
      width:103,
height:168,
     },
    { page: "face_products", img: "/natural_oils3.svg", title: "face",
      width:99,
height:136,
     },
    { page: "body_products", img: "/natural_oils4.svg", title: "body",
      width:148,
height:144,
     },
    { page: "all_products", img:  "/natural_oils5.svg", title: "products",
      width:130,
height:130,
     },
  ];

  return (
    <div
      className={`
        ${classes.topcat}
        min-h-[563px] flex flex-col gap-[36px] my-[100px] py-[48px] 
        max-h-full
        `}
    >
      <h1
        className={`
                font-[700] text-[56px] leading-[4rem] text-center
                max-xl:text-[35px]
                `}
      >
        Top Categories
      </h1>
      <div
        className={`
   
    w-full max-w-[1696px] min-h-[384px] max-h-full 
    flex gap-[112px] flex-wrap justify-center items-center p-[24px] mx-auto 
    max-xl:gap-[20px]
    max-2xl:gap-[40px] 

    `}
      >
        {data.map((item, idx) => (
          <div key={idx} className={`
          
          `}>
            <Link
              href={`/${item.page}`}
              className={`flex flex-col justify-center items-center`}
            >
              <div
                className={`img_ w-[240px] h-[303px] relative flex flex-col gap-[40px] justify-center items-center
                    max-sm:w-full
                    
                    `}
              >
               <div className={`img
                w-[240px] h-[240px] bg-white rounded-full shadow-[10px_10px_20px_0px_#92968F33] flex justify-center items-center
                max-xl:w-[200px] max-xl:h-[200px]
                `}>
                 <Image
                  src={item.img}
                  alt={item.title}
                  width={item.width}
                  height={item.height}

                />
               </div>
              <h4 className={`font-[700] text-[2rem] leading-[40px] uppercase
                max-xl:text-[1.5rem]
                `}>
                {item.title}
              </h4>
              </div>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
