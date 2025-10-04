import { IoLogoApple,  IoLogoGooglePlaystore, IoLogoInstagram  } from "react-icons/io5";
import Link from "next/link";
import { FiFacebook , FiTwitter} from "react-icons/fi";
export default function Fotter (){
    return(
        <div className="flex flex-col items-center mt-20 mb-5">
            <div className="flex gap-2 w-full items-center justify-end px-10">
                <span>New Download</span>
                <a href="#" target="_blank" className="flex gap-3 items-center py-2 px-3 rounded-md justify-center   outline-none border-none text-white transition-all duration-300 bg-black hover:bg-[#2C2C2E]"><span><IoLogoApple/></span>App sote</a>
                <a  href="#" target="_blank"  className="flex gap-3 items-center py-2 px-3 rounded-md justify-center      outline-none border-none text-white bg-green-600 transition-all duration-300 hover:bg-green-500"><span>< IoLogoGooglePlaystore/></     span>Google Play</a>
            </div>
            <div className="flex w-full justify-between  px-10 mt-16">
                <div className="flex items-center ">
                    <p className="text-lg">Joyenda | All rights reserved..</p>
                    <Link href="/Privacy" className="ml-10 text-xl text-violet-600"> Privacy Policy</Link>
                </div>
                <div className="flex gap-6 px-5">
                    <span><FiFacebook  size={24}/></span>
                    <span><IoLogoInstagram  size={24}/></span>
                    <span><FiTwitter  size={24}/></span>
                </div>
            </div>
        </div>

    )
}