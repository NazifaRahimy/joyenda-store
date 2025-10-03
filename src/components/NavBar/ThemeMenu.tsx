"use client";  
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode, MdSettings } from "react-icons/md";

export default function ThemeMenu () {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }    
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!mounted) return null;

    const renderIcon = () => {
        if (theme === "light") return <MdOutlineLightMode size={22} />;
        if (theme === "dark") return <MdOutlineDarkMode size={22} />;
        return <MdSettings size={22} />; // system
    };

    return (
        <div className="relative hidden md:flex justify-center" ref={dropdownRef}>
            <button onClick={() => setOpen(!open)}
            className="cursor-pointer outline-none py-1 flex items-center justify-center  rounded px-3 hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300 dark:text-white dark:hover:bg-violet-950">
                {renderIcon()}     
            </button>
            {open && (
                <div className="absolute z-20 top-12 w-40 bg-white dark:bg-[#191919] dark:border-violet-900 border border-violet-200 rounded-lg shadow-lg">
                  <div className="flex p-1 flex-col text-gray-700 text-lg">
                    <button className="flex items-center gap-2 px-4 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors dark:text-white dark:hover:bg-violet-950"
                     onClick={() => { setTheme("light"); setOpen(false);}} >
                        <MdOutlineLightMode /> روز
                    </button>
                    <button
                    className="flex items-center gap-2 px-4 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors dark:text-white dark:hover:bg-violet-950"
                    onClick={() => { setTheme("dark"); setOpen(false);}} >
                        <MdOutlineDarkMode size={20} /> شب
                    </button>
                    <button  className="flex items-center gap-2 px-4 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors dark:text-white dark:hover:bg-violet-950"
                    onClick={() => { setTheme("system"); setOpen(false); }} >
                        <MdSettings size={20} /> سیستم
                    </button>
                </div>
            </div>
        )}
    </div>
  );
}
