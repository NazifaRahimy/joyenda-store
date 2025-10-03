"use client";
import { MdOutlineLanguage } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

export default function LanguageMenu () {
    const [open, setOpen] = useState(false);
    // const dropdownRef = useRef(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
    <div className="relative hidden  md:flex justify-center ">
    
        <button onClick={() => setOpen(!open)}
        className="cursor-pointer outline-none font-normal py-1 flex border border-violet-200 dark:border-violet-900 dark:text-white dark:hover:bg-violet-950 items-center justify-center gap-2 rounded px-3 hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300">
            <span><MdOutlineLanguage size={20}/></span> English
        </button>

        {open && (
            <div ref={dropdownRef} className="absolute z-20 top-12 w-40 bg-white dark:bg-[#191919] dark:border-violet-900 border border-violet-200 rounded-lg shadow-lg">
                <div className="flex p-1 flex-col text-gray-700 text-lg">
                <button className="block cursor-pointer outline-none  font-normal px-4 py-1 text-left rounded hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300 dark:text-white dark:hover:bg-violet-950"
                onClick={() => setOpen(false)}> English</button>
                <button className="block cursor-pointer outline-none px-4 py-1 text-left  font-normal rounded hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300  dark:text-white dark:hover:bg-violet-950"
                onClick={() => setOpen(false)} >   فارسی </button>
                <button className="cursor-pointer outline-none block px-4 py-1  font-normal text-left rounded hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300  dark:text-white dark:hover:bg-violet-950"
                onClick={() => setOpen(false)}>   پښتو </button>
          </div>
        </div>
      )}
    </div>
  );
}
