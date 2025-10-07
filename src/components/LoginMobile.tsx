"use client"
import Link from "next/link";
import { IoEye  } from "react-icons/io5";
import { PiEyeClosedBold } from "react-icons/pi";
import { useState } from "react";


    const LoginMobile = () => {
        const [showPassword, setShowPassword] = useState(false);
        const [formDate, setformData] = useState({email: "",  password: ""})
 
        let names , values
        const  data =(e: React.ChangeEvent<HTMLInputElement>) => {
            names = e.target.name;
	        values = e.target.value;
            setformData({...formDate, [names]: values})
        }
        
        

 
    return ( 
        <div className="w-full h-screen bg-gray-100 fixed top-0 left-0 px-8 py-5 ">
            <div className="w-full h-auto mt-5 gap-5  flex flex-col items-center justify-center mb-5">
                <div className="w-[120px] h-[120px] rounded-full  border-4 border-white dark:border-[#101010] ring-4 ring-violet-600 bg-violet-600 text-white text-3xl flex items-center justify-center"> جوینده</div>
                <p className="  mt-2 text-xl text-violet-600 tracking-wide">AFghanistan Online Market </p>
            </div>
            <form  className="flex flex-col ">
                <input type="text" value={formDate.email} name="email" onChange={data} placeholder="someone@exampe.com"  className="w-full mb-4 px-6 bg-white py-3 border border-gray-400 shadow rounded-full focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] "/>
                <div className="w-full relative">
                    <input  type={showPassword ? "text" : "password"} value={formDate.password} name="password" onChange={data} placeholder="*******"  className="w-full px-6 py-3  shadow rounded-full bg-white border border-gray-400 focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] "/>
                    <span className="absolute right-6 top-4 cursor-pointer"   onClick={() => setShowPassword(prev => !prev)} >   {showPassword ? <IoEye /> : <PiEyeClosedBold/>}</span>
                </div>
                <button type="button" className=" my-6  text-blue-400  border-b border-b-transparent hover:border-b hover:border-red-500 text-[18px] outline-none tracking-wide text-left">	Forget Password ?	</button> 
                <button  type="submit" className={`bg-violet-600 transition duration-300 hover:bg-violet-500 text-white px-4 py-3 rounded-full text-xl font-semibold w-full flex  items-center justify-center  	`}><span> Login</span></button>
                <div className=" flex items-center px-4 my-5">
			        <span className="px-4 text-[16px] tracking-wide">Don'n have an account ?		</span> 
                    <span  className=" text-violet-600  text-[16px] tracking-wide"> Registration	</span>
		 	    </div>
                <button  className=" px-8 py-2 rounded-full border-2 border-black w-full flex items-center justify-between text-xl   tracking-wide" >Sign with Google <img className="w-10" src="google.png" alt="google" /></button>
                <div className="flex items-center gap-2 my-5">
                    <input className="w-5 h-5 border-2 border-black rounded" type="checkbox"  id="agree"  />
                    <label htmlFor="agree" className="text-md tracking-wide"> I agree to the Privacy Policy <Link href="/Privacy" className="text-violet-500 underline-none tracking-wide underline">Privacy Policy</Link></label>
                </div>
            </form>
        </div>
     );
}
 
export default LoginMobile;