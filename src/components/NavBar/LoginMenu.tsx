"use client";
import { useState, useRef, useEffect } from "react";
import { FiUser } from "react-icons/fi";
export default function LoginMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // بستن باکس وقتی بیرون کلیک شود
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative hidden  md:flex justify-end" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className=" px-2 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300 dark:text-white dark:hover:bg-violet-950"
      >
        < FiUser size={20}/>
      </button>

      {open && (
     
        <div className="absolute z-20 top-12 w-40 bg-white dark:bg-[#191919] dark:text-white dark:border-violet-900 border border-violet-200 rounded-lg shadow-lg">
            <div className="flex p-1 flex-col text-gray-700 text-lg">
                <button className="flex cursor-pointer items-center font-normal gap-1 px-2 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors dark:text-white dark:hover:bg-violet-950"
                 onClick={() => { setOpen(false);  }} >Login</button>
                  <button className="flex cursor-pointer font-normal items-center gap-1 px-2 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors dark:text-white dark:hover:bg-violet-950"
                 onClick={() => { setOpen(false);  }} >Register</button>
            </div>
        </div>
      )}
    </div>
  );
}
