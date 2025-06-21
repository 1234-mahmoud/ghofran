import Image from "next/image";

const BlogComp = () => {
  return (
    <div className={`w-full overflow-x-hidden`}>
      <div className={`w-full max-w-[1720px] mx-auto flex flex-col gap-[56px] px-4`}>
        <h1 className={`font-[700] text-[56px] leading-[64px] py-[46px] px-4 lg:px-[300px] max-md:p-[10px]`}>
          Blogs
        </h1>

        {/* Main Blog Image Block */}
        <div className={`flex flex-col gap-[36px]`}>
          <div className={`img flex flex-col gap-[24px] h-[933px] max-lg:h-full`}>
            <div className={`relative overflow-hidden h-[869px] max-lg:h-[350px]`}>
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

            {/* Blog Text Section */}
            <div className={`w-full max-w-[870px] h-[176px] mx-auto flex flex-col gap-[24px] justify-center items-center max-sm:mx-0 max-lg:h-full px-4`}>
              <h2 className={`font-[700] text-[48px] leading-[56px] max-sm:text-[28px] max-sm:text-center`}>
                The Secret to Healthy, Glowing Hair
              </h2>
              <p className={`w-full max-w-[695px] h-auto px-4 font-[700] text-[20px] leading-[40px] tracking-[1px] text-center text-gray-800`}>
                Discover how to transform your hair naturally with simple steps and powerful ingredients.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Description */}
        <div className={`px-4`}>
          <p className={`font-[400] text-[18px] leading-[32px] tracking-[1px]`}>
            Healthy, glowing hair isn’t just about genetics—it’s about how you care for it daily. Whether you struggle with dryness, frizz, or weak strands, a simple and consistent routine using the right ingredients can make a huge difference. Let’s explore how natural solutions and conscious habits can bring life back to your hair.
          </p>
        </div>

        {/* Advice List */}
        <div className={`w-full max-w-[1586px] px-4`}>
          <ol className={`flex flex-col gap-[16px] list-decimal`}>
            <li className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>
              Start with Natural Oils
              <p className={`font-[400] text-[18px] leading-[32px] tracking-[1px] my-[16px] px-4`}>
                Oils like argan, coconut, castor, and jojoba are rich in nutrients that penetrate the hair shaft, strengthen it from within, and add a natural shine. Apply them as a pre-shower mask or use a few drops on damp hair after washing.
              </p>
            </li>

            <li className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>
              Stay Consistent with Your Routine
              <p className={`font-[400] text-[18px] leading-[32px] tracking-[1px] my-[16px] px-4`}>
                Regular care with the right ingredients is key. Don't overdo washing and always moisturize and protect your hair from heat and environmental stress.
              </p>
            </li>
          </ol>
        </div>

        {/* Related Blogs Section */}
        <div className={`flex flex-col gap-[48px] px-4`}>
          <h3 className={`font-[700] text-[40px] leading-[64px] text-center`}>
            Explore Related Blogs
          </h3>

          <div className={`w-full max-w-[1659px] mx-auto  flex gap-[32px] flex-wrap max-lg:h-full justify-center `}>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className={`w-full max-w-[521px] h-[707px] max-xl:h-full
              max-xl:w-[320px] 
              `}>
                <div className={`img h-[507px] w-full max-w-[521px] relative overflow-hidden max-xl:h-[300px]
              max-xl:w-[320px]
                  
                  `}>
                  <Image src="/pic4.jpg" fill alt="blog image" />
                </div>
                <div className={`h-[176px] w-full max-w-[454px] mx-auto flex flex-col justify-center items-center gap-[24px] px-4
                  max-xl:h-full
                  `}>
                  <p className={`font-[700] text-[20px] leading-[40px] tracking-[1px]`}>
                    New Arrivals, Start Your Journey
                  </p>
                  <p className={`font-[400] text-[18px] leading-[32px] tracking-[1px] text-gray-800 text-center`}>
                    Short Description: Discover expert tips and natural oils that transform your hair from dull to radiant.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
