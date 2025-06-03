import classes from "../style/top-categories.module.css";
import Image from "next/image";
import Link from "next/link";
const TopCategories = () => {
  const data = [
    {page:'natural_oils_products',
      img: "/pic.jpg",
      title: "natural oils",
    },
    {page:'hair_products',
      img: "/pic.jpg",
      title: "hair",
    },
    {page:'face_products',
      img: "/pic.jpg",
      title: "face",
    },
    {page:'body_products',
      img: "/pic.jpg",
      title: "body",
    },
    {page:'all_products',
      img: "/pic.jpg",
      title: "products",
    },
  ];

  return (
    <div
      className={`
        h-[500px] flex flex-col gap-[36px] mb-[100px] max-sm:h-full
        `}
    >
      <h1
        className={`
                font-[700] text-[56px] leading-[4rem] text-center
                `}
      >
        Top Categories
      </h1>
      <div
        className={`
    ${classes.topcat}
    h-[384px] flex justify-around items-center  max-sm:h-full max-sm:flex-wrap
    `}
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`
         w-full
        `}
          >
            <Link
              href={`/${item.page}`}
              className={`flex flex-col justify-center items-center
            
                `}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={141}
                height={174}
                className={`
    ${classes.cat_img}
    rounded-md
    `}
              />
              <h4
                className={`
    font-[700] text-[2rem] leading-[40px]
    `}
              >
                {item.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
