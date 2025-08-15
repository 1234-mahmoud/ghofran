import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col gap-20 min-h-screen">
      <h2 className="text-gray-700 text-4xl text-center pt-[100px] font-extrabold">
        Page not found 😓
      </h2>
     
      <Link 
        href="/"
        className="cursor-pointer bg-green-500 text-white text-2xl font-bold w-full max-w-[250px] h-[50px] rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        Go To Home Page
      </Link>
    </div>
  );
}
