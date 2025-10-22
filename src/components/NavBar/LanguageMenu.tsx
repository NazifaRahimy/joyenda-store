"use client";
import { MdOutlineLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function LanguageMenu() {
    const [open, setOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("en");
    const [hoveredLang, setHoveredLang] = useState<string | null>(null);

    const languages = [
        { code: "en", label: "English - EN" },
        { code: "fa", label: "Persian - FA" },
        { code: "ps", label: "Pashto - PS" },
    ];

    const handleSelect = (code: string) => {
        setSelectedLang(code);
        localStorage.setItem("siteLanguage", code);
        setOpen(false);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("siteLanguage");
        if (savedLang) {
            setSelectedLang(savedLang);
        }
    }, []);

    return (
    <div className="relative flex justify-start" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
        <div className="flex items-start md:items-end gap-1">
            <button className="cursor-pointer outline-none font-normal py-1 flex border border-violet-200 dark:border-violet-900 dark:text-white  items-center justify-center gap-1 rounded px-1  hover:text-violet-700 transition-colors duration-300">
                <MdOutlineLanguage size={20} />
                <span className="uppercase">{selectedLang}</span>
            </button>
            <FaCaretDown className="rotate-180 md:rotate-0" size={20} />
        </div>
       {open && (
        <>
        <div className="w-8 h-8 absolute border bottom-10 md:bottom-auto md:top-10 left-11 rotate-45 bg-white dark:bg-[#191919] dark:border-violet-900  shadow-2xl"></div>
            <div className="absolute w-44 z-20 bottom-12 md:top-12 md:bottom-auto rounded bg-white dark:bg-[#191919] dark:border-violet-900 border roundednn shadow-lg">
                <div className="flex p-1 flex-col text-gray-700 text-lg">
                    {languages.map((lang) => {
                        const isActive = selectedLang === lang.code;
                        const isHovered = hoveredLang === lang.code;
                        return (
                            <button key={lang.code} onMouseEnter={() => setHoveredLang(lang.code)} onMouseLeave={() => setHoveredLang(null)}onClick={() => handleSelect(lang.code)}
                            className="flex items-center gap-2 cursor-pointer outline-none font-normal px-2 py-1 text-left rounded hover:text-violet-700 transition-colors duration-300 dark:text-white">
                                <div className="w-4 h-4 border flex items-center justify-center dark:border-white border-black rounded-full">
                                    {(isActive || isHovered) && (<span className="w-2.5 h-2.5 block rounded-full bg-violet-600"></span>)}
                                </div>
                                {lang.label}
                            </button>
                        );
                    })}
                </div>
          </div>
        </>
      )}
    </div>
  );
}
