import Image from "next/image";
const BlogComp = () => {
  return (
    <div className="w-full max-w-[1720px] mx-auto flex flex-col gap-[56px]">
      <h1
        className={`font-[700] text-[56px] leading-[64px] px-[300px] py-[46px]
          max-md:p-[10px]
          `}
      >
        Blogs
      </h1>
      <div className={`flex flex-col gap-[36px]`}>
        <div>
          {/* ---------------image block-------------- */}

          <div
            className={`img  h-[933px] flex flex-col gap-[24px]
              max-lg:h-full
            `}
          >
            <div className={`relative overflow-hidden h-[869px]
              max-lg:h-[350px]
              `}>
              <Image fill src="/pic3.jpg" alt="blog image" />
            </div>
            <span>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
            {/* -----------desc------------------ */}
            <div
              className={`w-full max-w-[870px] h-[176px] mx-auto flex flex-col gap-[24px] justify-center items-center
                max-sm:mx-0
                max-lg:h-full
                `}
            >
              <h2 className={`font-[700] text-[48px] leading-[56px]
                max-sm:text-[28px] max-sm:text-center
                `}>
                The Secret to Healthy, Glowing Hair
              </h2>
              <p
                className={`
                w-full max-w-[695px] h-[80px] px-[15px] font-[700] text-[20px] leading-[40px] tracking-[1px] text-center text-gray-800
                `}
              >
                Discover how to transform your hair naturally with simple steps
                and powerful ingredients.
              </p>
            </div>
          </div>
        </div>
        {/* -----------desc details------------------ */}
        <div>
          <p className={`font-[400] text-[18px] leading-[32px] tracking-[1px]`}>
            Healthy, glowing hair isn’t just about genetics—it’s about how you
            care for it daily. Whether you struggle with dryness, frizz, or weak
            strands, a simple and consistent routine using the right ingredients
            can make a huge difference. Let’s explore how natural solutions and
            conscious habits can bring life back to your hair.
          </p>
        </div>
        {/* ----------- advices------------------ */}
        <div className="w-full max-w-[1586px]">
          <ol className={`flex flex-col gap-[16px] list-decimal`}>
            <li
              className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}
            >
              Start with Natural Oils
              <p
                className={`font-[400] text-[18px] leading-[32px] tracking-[1px] mx-[-24px] my-[16px]`}
              >
                Oils like argan, coconut, castor, and jojoba are rich in
                nutrients that penetrate the hair shaft, strengthen it from
                within, and add a natural shine. Apply them as a pre-shower mask
                or use a few drops on damp hair after washing.
              </p>
            </li>

            <li
              className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}
            >
              Start with Natural Oils
              <p
                className={`font-[400] text-[18px] leading-[32px] tracking-[1px] mx-[-24px] my-[16px]`}
              >
                Oils like argan, coconut, castor, and jojoba are rich in
                nutrients that penetrate the hair shaft, strengthen it from
                within, and add a natural shine. Apply them as a pre-shower mask
                or use a few drops on damp hair after washing.
              </p>
            </li>
          </ol>
        </div>

        {/* ----------- related blogs------------------ */}

        <div className={`flex flex-col gap-[48px]`}>
          <h3 className={`font-[700] text-[40px] leading-[64px] text-center`}>
            Explore Related blogs
          </h3>
            {/* ------------------- */}

          <div className={`w-full max-w-[1659px] h-[707px] mx-auto flex gap-[48px] flex-wrap 
            max-lg:h-full`}>
            <div className={`w-full max-w-[521px] h-[707px] 
              max-md:h-full
              `}>
              <div className={`img h-[507px] w-full max-w-[521px] relative overflow-hidden
                max-md:h-[300px]
                `}>
                <Image src="/pic4.jpg" fill alt="blog image" />
              </div>
              {/* -----txt----- */}
              <div className={`h-[176px] w-full max-w-[454px] mx-auto flex flex-col justify-center items-center gap-[24px]`}>
                <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>new arrivals, start your journey</p>
                <p className={` font-[400] text-[18px] leading-[32px] tracking-[1px] text-gray-800`}>
                  Short Description: Discover expert tips and natural oils that
                  transform your hair from dull to radiant.
                </p>
              </div>
            </div>
            {/* ------------------- */}
            <div className={`w-full max-w-[521px] h-[707px] 
              max-md:h-full
              `}>
              <div className={`img h-[507px] w-full max-w-[521px] relative overflow-hidden
                max-md:h-[300px]
                `}>
                <Image src="/pic4.jpg" fill alt="blog image" />
              </div>
              {/* -----txt----- */}
              <div className={`h-[176px] w-full max-w-[454px] mx-auto flex flex-col justify-center items-center gap-[24px]`}>
                <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>new arrivals, start your journey</p>
                <p className={` font-[400] text-[18px] leading-[32px] tracking-[1px] text-gray-800`}>
                  Short Description: Discover expert tips and natural oils that
                  transform your hair from dull to radiant.
                </p>
              </div>
            </div>
            {/* ------------------- */}
            <div className={`w-full max-w-[521px] h-[707px] 
              max-md:h-full
              `}>
              <div className={`img h-[507px] w-full max-w-[521px] relative overflow-hidden
                max-md:h-[300px]
                `}>
                <Image src="/pic4.jpg" fill alt="blog image" />
              </div>
              {/* -----txt----- */}
              <div className={`h-[176px] w-full max-w-[454px] mx-auto flex flex-col justify-center items-center gap-[24px]`}>
                <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>new arrivals, start your journey</p>
                <p className={` font-[400] text-[18px] leading-[32px] tracking-[1px] text-gray-800`}>
                  Short Description: Discover expert tips and natural oils that
                  transform your hair from dull to radiant.
                </p>
              </div>
            </div>
            {/* ------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
