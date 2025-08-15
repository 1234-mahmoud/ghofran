// app/not-found.js
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={`  flex justify-center items-center flex-col gap-20`}>
      <h2 className="text-gray-700 text-4xl text-center pt-[100px] font-extrabold">
        Page not found 😓
      </h2>
     
      <button
        className={`cursor-pointer bg-green-500 text-white text-2xl font-bold
          w-full max-w-[250px] h-[50px] rounded-lg 
            
            `}
      >
       <Link href='/'>
        Go To Home Page</Link>
      </button>
    </div>
  );
}
