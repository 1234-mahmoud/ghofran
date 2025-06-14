'use client'
import { usePathname } from "next/navigation";
import classes from "../style/products.module.css";
import Link from 'next/link';
export default function ProductsCat() {
      const path = usePathname();
      

  return (
       <div 
      
       className={`mt-[50px]
      max-lg:hidden
       
       `}>
            <h4 className="font-[700] leading-[40px] text-[2rem] uppercase text-center 
            max-sm:text-[1.3rem]
            max-sm:hidden
            ">
              all products
            </h4>
            <div
              className={`mt-[50px] h-[112px] flex justify-around gap-[430px] items-center 
            max-sm:h-full max-sm:gap-[10px] max-sm:flex-col 
                ${classes.nav_border}`}
            >
              <nav className={`products_catogries flex gap-[48px]
        max-sm:flex-col max-sm:gap-[10px] max-sm:justify-center max-sm:items-center
                `}>
                <Link
                  className={`font-[700] text-[1.25rem] pb-3 
                    
                    ${
                    path.startsWith("/") ? classes.active : undefined
                  }`}
                  href="/all_products"
                >
                  All Products
                </Link>
                <Link
                  className={`font-[700] text-[1.25rem] pb-3 
                    
                    ${
                    path.startsWith("/hair_products") ? classes.active : undefined
                  }`}
                  href="./hair_products"
                >
                  Hair Products
                </Link>
                <Link
                  className={`font-[700] text-[1.25rem] pb-3 
                    
                    ${
                    path.startsWith("/face_products") ? classes.active : undefined
                  }`}
                  href="/face_products"
                >
                  Face Products
                </Link>
                <Link
                  className={`font-[700] text-[1.25rem] pb-3 
                    
                    ${
                    path.startsWith("/body_products") ? classes.active : undefined
                  }`}
                  href="/body_products"
                >
                  Body Products
                </Link>
                <Link
                  className={`font-[700] text-[1.25rem] pb-3 
                    
                    ${
                    path.startsWith("/natural_oils_products")
                      ? classes.active
                      : undefined
                  }`}
                  href="/natural_oils_products"
                >
                  Natural Oils
                </Link>
              </nav>
              <select
                name="category_filter"
                id=""
                defaultValue="Sort By"
                className={`font-[700] text-[1.25rem]`}
              >
                <option value="Sort By">Sort By</option>
                <option value="cat1">cat1</option>
                <option value="cat2">cat2</option>
                <option value="cat3">cat3</option>
                <option value="cat4">cat4</option>
              </select>
            </div>
          </div>
  )
}
