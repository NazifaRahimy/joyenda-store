"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdAdd ,  MdOutlineHome  } from "react-icons/md";
import MoreMenu from "./MoreMenu";
import { usePathname } from "next/navigation";
import LanguageMenu from "./LanguageMenu";
import ThemeMenu from "./ThemeMenu";
import LoginMenu from "./LoginMenu";
const NavBar = () => {
     const pathname = usePathname()
    return ( 
           <nav className="w-full fixed bg-white dark:bg-[#181818]  flex justify-between shadow py-3 px-6 items-center  bottom-0 left-0 md:relative md:border-none md:top-0 md:left-0 ll border-t  border-violet-600 ">
         <div className=" hidden  px-3  md:flex justify-center items-center pb-1 ring-2 ring-violet-600 bg-violet-600 border-2 text-white border-white rounded ">  جوینده</div>
        <div className="flex gap-8">
            <Link href="/" className={`text-lg py-1 rounded  px-2 md:hover:bg-violet-200 md:hover:text-violet-700 transition-colors duration-300 flex flex-col items-center justify-center md:dark:hover:bg-violet-950 md:dark:hover:text-white ${ pathname === "/" ? "text-violet-500 md:text-black" : ""}`}>   <span className="md:hidden"><MdOutlineHome size={24}/></span> Home</Link>
            <Link href="/Favorites" className=" hidden md:inline text-lg py-1 rounded  px-2 hover:bg-violet-200 hover:text-violet-700 transition-colors duration-300 dark:hover:bg-violet-950 dark:hover:text-white">Favorites</Link>
            <MoreMenu />
        </div>
        <div className="flex gap-6">
            <LanguageMenu />
            <Link href="/CreateAd" className=" outline-none cursor-pointer flex flex-col md:flex-row text-lg  items-center justify-center gap-1 transition-colors duration-300 py-1.5 rounded px-4 font-normal md:bg-violet-600  md:text-white md:hover:bg-violet-500 ">
                <span className="text-2xl md:text-xl"><MdAdd /></span><span className="md:hidden">add product</span><span className="hidden md:inline">Create an Ad</span>
            </Link>
            <ThemeMenu />
            <LoginMenu />
        </div>
        <Link href="/MyProfile" className={` outline-none cursor-pointer text-lg  items-center justify-center gap-1 transition-colors duration-300  md:hidden md:bg-violet-600  md:text-white flex flex-col md:flex-row md:hover:bg-violet-500 py-1.5 rounded px-4 font-normal ${ pathname === "/MyProfile" ? "text-violet-500 md:text-black" : ""}`}>
            <span ><CgProfile size={24}/></span><span className="md:hidden">my profile</span>
        </Link>
    </nav>
     );
}
 
export default NavBar;