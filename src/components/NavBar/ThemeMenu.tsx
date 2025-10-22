"use client"
import { useState, useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { MdNightlight } from "react-icons/md";

const ThemeMenu = () => {
  const [theme, setTheme] = useState("day"); 

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "night" || savedTheme === "day") {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "night") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

  return (
    <div className="px-1 md:px-2 h-9 box-border bg-gray-100 dark:bg-[#282828] rounded-full gap-2 flex items-center">
        <button onClick={() => setTheme("night")} className={`p-1 rounded-full text-xl transition-all duration-200 ${ theme === "night" ? "bg-white text-slate-700 " : " text-slate-700" }`} ><MdNightlight /></button>
        <button onClick={() => setTheme("day")} className={`text-xl font-bold p-1 rounded-full transition-all duration-200 ${ theme === "day" ? "bg-white text-yellow-500 shadow-md" : " text-yellow-500" }`} ><IoMdSunny /></button>
    </div>
  );
};

export default ThemeMenu;
1