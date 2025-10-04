"use client"
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function PrivacyHeader() {
    const router = useRouter();
  return (
  <div className="w-full bg-white fixed top-0 left-0 z-50 flex flex-col items-center justify-center md:hidden ">
        <div className="relative flex w-full justify-start h-20 px-3 bg-violet-500 dark:bg-[#121212] dark:text-cyan-500 ">
            <button onClick={() => router.back()} className="text-[18px] absolute top-8 left-5" > <IoArrowBack size={25} /> </button>
            <div className="flex items-center justify-center w-full">
                <p className="text-[22px] font-semibold tracking-wide">Privacy Policy</p>
            </div>
        </div>
    </div>
  );
}
