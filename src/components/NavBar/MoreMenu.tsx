"use client";
import { CiLogin, CiLogout } from "react-icons/ci";
import { LuGrip } from "react-icons/lu";
import { MdAppRegistration } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import LoginMenu from "./LoginMenu";
import Login from "../Login";
import Register from "../Register";

export default function MoreMenu() {
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const checkAuth = () => {
        const token = localStorage.getItem("auth-token");
        setIsLoggedIn(!!token);
    };

    useEffect(() => {
        checkAuth();
        window.addEventListener("authChange", checkAuth);
        return () => window.removeEventListener("authChange", checkAuth);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("auth-token");
        setIsLoggedIn(false);
        window.dispatchEvent(new Event("authChange"));
        setOpen(false);
    };

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
    <div ref={dropdownRef} className="relative">
        <button onClick={() => setOpen(!open)} className="p-2 rounded-full hover:text-violet-700 dark:text-white transition-colors duration-300"> <LuGrip size={23} /></button>
        <div className={`absolute bottom-12 px-2 md:top-12 w-auto md:bottom-auto rounded right-0 z-20 bg-white dark:bg-[#191919] border border-violet-200 dark:border-violet-900 shadow-lg transform transition-all duration-200 origin-bottom-right ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"  }`}>
            <ul className="flex flex-col md:items-center justify-start md:justify-end md:flex-row text-gray-700 dark:text-white py-2 w-[200px] md:w-auto gap-1">
                <LoginMenu setOpen={setOpen} />
                {isLoggedIn ? ( <button type="button" onClick={handleLogout} className="py-2 px-1 md:px-4 rounded-md dark:text-white dark:hover:text-violet-700 flex items-start md:items-center md:justify-center gap-2 md:gap-1 md:flex-col hover:text-violet-700 transition-all duration-300"><CiLogout size={27} />Logout</button>) 
                   : 
                    (<>
                        <button type="button" onClick={() => {setRegister(false);  setLogin(true);  }} className="py-2 px-1 md:px-4 rounded-md hover:scale-110 dark:text-white dark:hover:text-violet-700 flex items-center md:justify-center gap-2 md:gap-1 md:flex-col hover:text-violet-700 transition-all duration-300"><CiLogin size={27} />   Login</button>
                        <button type="button" onClick={() => { setLogin(false); setRegister(true);  }} className="py-2 px-1 md:px-4 rounded-md hover:scale-110 dark:text-white dark:hover:text-violet-700 flex items-center md:justify-center gap-2 md:gap-1 md:flex-col hover:text-violet-700 transition-all duration-300"> <MdAppRegistration size={27} />  Register</button>
                    </>
                    )
                }
            </ul>
        </div>
        {login && (<Login setLogin={setLogin} register={register} setRegister={setRegister} login={login} />)}
        {register && (<Register register={register}  login={login} setLogin={setLogin} setRegister={setRegister}/>)}
    </div>
  );
}
