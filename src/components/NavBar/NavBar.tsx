import Link from "next/link";;
import MoreMenu from "./MoreMenu";
import LanguageMenu from "./LanguageMenu";
import ThemeMenu from "./ThemeMenu";

const NavBar = () => {

  return (
    <nav className="w-full py-3 md:py-1 fixed bottom-0 left-0 md:relative md:top-0 md:left-0 bg-white dark:bg-[#181818] flex justify-between items-center shadow md:px-6 z-50">
        <div className="relative w-[110px] h-[60px]  hidden md:flex items-center justify-center overflow-hidden">
            <img src="JoyendaLogo.png" alt="logo" className="logo-joyenda" />
        </div>
        <div className="flex md:gap-10">
            <Link href="/"  className={`text-lg ml-4 md:ml-0 dark:text-white hover:scale-110 hover:border-b-2 hover:border-violet-700 transition-all duration-300 flex flex-col items-center justify-center `} > Home</Link>
            <Link href="/Favorites" className="hidden md:inline text-lg py-1 hover:scale-110 hover:border-b-2 hover:border-violet-700 transition-all duration-300 dark:hover:text-violet-700" > Favorites</Link>
            <Link href="/About"  className="hidden md:inline text-lg py-1 hover:scale-110 hover:border-b-2 hover:border-violet-700 transition-all duration-300 dark:hover:text-violet-700">  About</Link>
            <Link href="/Privacy" className="hidden md:inline text-lg py-1 hover:scale-110 hover:border-b-2 hover:border-violet-700 transition-all duration-300 dark:hover:text-violet-700" > Privacy</Link>
        </div>
        <div className="flex w-2/3 md:w-auto justify-between gap-1 md:gap-6">
            <LanguageMenu />
            <ThemeMenu />
            <MoreMenu />
        </div>
    </nav>
  );
};

export default NavBar;
