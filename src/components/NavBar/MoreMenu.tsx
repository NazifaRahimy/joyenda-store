"use client";

import {  MdOutlineExpandLess,  MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function MoreMenu () {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden md:block">
      {/* دکمه اصلی */}
      <button
        onClick={() => setOpen(!open)}
         className="text-lg py-1 rounded flex items-center justify-center gap-1 px-2 hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300 dark:hover:bg-violet-950 dark:hover:text-white ">
        More <span>{open ? < MdOutlineExpandLess size={23} />: < MdOutlineExpandMore size={23}/> }</span>
      </button>

      {/* باکس لینک‌ها */}
      {open && (
        <div className="absolute mt-2 dark:border-violet-900 z-20 dark:bg-[#191919] right-0 w-40 bg-white border border-violet-200 rounded shadow-lg">
          <ul className="flex flex-col text-gray-700 ">
          
              <Link
                href="/About"
                className="block px-4 py-1.5 hover:bg-violet-200 hover:text-violet-700 dark:hover:bg-violet-950 dark:text-white transition-colors text-lg duration-300"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
       
        
              <Link
                href="/Privacy"
                className="block text-lg px-4 py-1.5 dark:hover:bg-violet-950 dark:text-white hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                Privacy
              </Link>
          
       
              <Link
                href="/Contact"
                className="block text-lg px-4 py-1.5 dark:text-white dark:hover:bg-violet-950  hover:bg-violet-200 rounded hover:text-violet-700 transition-colors duration-300"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
      
          </ul>
        </div>
      )}
    </div>
  );
}
