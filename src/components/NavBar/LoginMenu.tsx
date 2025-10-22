import Link from "next/link";
import { CiCircleAlert } from "react-icons/ci";
import { MdFavorite, MdPrivacyTip, MdPostAdd } from "react-icons/md";
import { IoCall } from "react-icons/io5";

type stateProp = {
  setOpen: (value: boolean) => void;
};

export default function LoginMenu({ setOpen }: stateProp) {
    return (
    <>
    <Link  href="/Favorites"  className="flex md:hidden items-center gap-3 px-2 md:px-4 py-2 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200" onClick={() => setOpen(false)}>
        <MdFavorite size={22} />
        <span>Favorites</span>
    </Link>
    <Link href="/About" className="flex md:hidden items-center gap-3 px-2 md:px-4 py-2 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200" onClick={() => setOpen(false)} >
        <CiCircleAlert size={22} />
        <span>About</span>
    </Link>
    <Link href="/Privacy" className="flex md:hidden items-center gap-3 px-2 md:px-4 py-2 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200" onClick={() => setOpen(false)} >
        <MdPrivacyTip size={22} />
        <span>Privacy</span>
    </Link>
    <Link href="/Contact" className="flex md:flex-col items-center gap-3 px-2 md:px-4 py-2 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 hover:scale-110" onClick={() => setOpen(false)}  >
        <IoCall size={22} />
        <span>Contact</span>
    </Link>
    <Link href="/CreateAd"   onClick={() => setOpen(false)} className="flex md:flex-col items-center gap-3 px-2 md:px-3 py-2 hover:text-violet-700 dark:hover:text-violet-700 transition-all duration-200 hover:scale-110" >
        <MdPostAdd size={24} />
        <span>AddProduct</span>
    </Link>
    </>
  );
}
