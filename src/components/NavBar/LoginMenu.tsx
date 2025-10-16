"use client";
import { useState, useRef, useEffect } from "react";
import { FiUser , FiLogOut} from "react-icons/fi";
import Authentication from "../Authentication";
import LoginMobile from "../LoginMobile";


interface User {
  name: string;
  email: string;
}

export default function LoginMenu() {
    const [open, setOpen] = useState(false);
    const [initialForm, setInitialForm] = useState("login"); 
    const [showModal, setShowModal]= useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [users , setUsers]= useState<User | null>(null)
    
    useEffect(()=> {
        const token = localStorage.getItem("auth-token");
        const name = localStorage.getItem("auth-name");
        const email = localStorage.getItem("auth-email")
        if(token && name && email){
            setUsers({ name , email})
        }else{
            setUsers(null)
        }
    }, [])
    useEffect(() => {
  const loadUser = () => {
    const token = localStorage.getItem("auth-token");
    const name = localStorage.getItem("auth-name");
    const email = localStorage.getItem("auth-email");
    if (token && name && email) {
      setUsers({ name, email });
    } else {
      setUsers(null);
    }
  };

  // بار اول بخوان
  loadUser();

  // هر وقت event بیاد، دوباره بخوان
  window.addEventListener("storageChange", loadUser);
  return () => window.removeEventListener("storageChange", loadUser);
}, []);


    const handleLogout = () => {
        localStorage.removeItem("auth-token");
            localStorage.removeItem("auth-name");
    localStorage.removeItem("auth-email");

        setUsers(null);
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
        <>
            <div className="relative hidden  md:flex justify-end" ref={dropdownRef}>
                <button onClick={() => setOpen(!open)} className=" px-2 py-1 flex gap-2 items-center justify-center rounded hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300 dark:text-white dark:hover:bg-violet-950">
                    < FiUser size={20} /> {users ? users.name : ""}
                </button>
                {open && (
                    <div className={`absolute z-20 top-12  ${users ? 'w-52' : "w-40"}  bg-white dark:bg-[#191919] dark:text-white dark:border-violet-900 border border-violet-200 rounded-lg shadow-lg`}>
                        <div className={`flex p-1 flex-col text-gray-700 text-lg `}>
                           {users ? (
                            <>
                            <div className=" flex group items-center gap-2 py-1 rounded hover:bg-violet-200 hover:text-violet-700 duration-300 cursor-pointer transition-all px-3">
                                <span className="bg-gray-300 group-hover:bg-white rounded-full"><FiUser size={25}/></span>
                                <div className="flex flex-col gap-0 ">
                                    <span className="text-sm font-semibold">{users.name}</span>
                                    <span className="text-xs text-gray-400 group-hover:text-violet-700">{users.email}</span>
                                </div>
                            </div>
                            <button type="button" onClick={handleLogout} className="flex border-none outline-none items-center gap-2 py-1 rounded hover:bg-violet-200 hover:text-violet-700 duration-300 transition-all px-3 text-red-600">
                                <FiLogOut/>
                                <span> Logout</span>
                            </button>
                            </>
                           ): 
                           (<>
                            <button className="flex cursor-pointer items-center font-normal gap-1 px-2 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors dark:text-white dark:hover:bg-violet-950"
                            onClick={() => { setShowModal(true); setInitialForm("login")}} >Login</button>
                            <button className="flex cursor-pointer font-normal items-center gap-1 px-2 py-1 rounded hover:bg-violet-200 hover:text-violet-700 transition-colors dark:text-white dark:hover:bg-violet-950"
                            onClick={() => {setShowModal (true); setInitialForm("register")} }>Register</button>
                           </>)}
                        </div>
                    </div>
                )}
            </div>
            {showModal && (
                <>
                    <div className="block md:hidden">
                        <LoginMobile />
                    </div>
                    <div className="hidden md:block">
                        <Authentication showModal={showModal} setShowModal={setShowModal} initialForm={initialForm} />
                    </div>
                </>
            )}
        </>
    );
}
