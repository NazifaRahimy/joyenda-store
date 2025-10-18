"use client"
import Link from "next/link";
import { IoEye  } from "react-icons/io5";
import { PiEyeClosedBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import Image from "next/image";
 

    const LoginMobile = () => {
        const [showPassword, setShowPassword] = useState(false);
        const [formDate, setformDate] = useState({email: "",  password: ""})
        const [formErrors, setFormErrors] = useState<Record<string, string>>({ email: "", password: ""});
        const router = useRouter();
        const [agree, setAgree]= useState(false)

        let names , values
        const  data =(e: React.ChangeEvent<HTMLInputElement>) => {
            names = e.target.name;
	        values = e.target.value;
            setformDate({...formDate, [names]: values})
        }

        const isValidEmail = (email: string) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        const handleGoogleLogin = async () => {
            if (!agree) {
                alert("You must agree to the Privacy Policy first!");
                return;
            }
            try {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;

                localStorage.setItem("auth-token", await user.getIdToken());
                 localStorage.setItem("auth-name", user.displayName || "");
                localStorage.setItem("auth-email", user.email || "");
                alert("Login with google successful");
                router.push("/");
            } catch (error) {
                console.error("Error during Google login:", error);
                alert("Login with google failed");
            }
        };
    
        const handleLogin = async (e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();

            const errors: Record<string, string> = {};
            if(!formDate.email){
                errors.email= "Email must be a valid email address."
            }
        
            if(!formDate.password){
                errors.password =  "Password must be at least 6 characters long."
            }
            setFormErrors(errors)
            if (Object.keys(errors).length > 0) return;

            try {
                const response = await fetch("http://localhost:4000/lagin",{
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: formDate.email,
                        password: formDate.password
                    })
                })
                const data = await response.json();
                if(response.ok){
                    const token = "test-token-123"; 
                    alert("Login successful");
                    localStorage.setItem("auth-token", token);
                    localStorage.setItem("auth-name", data.first_name );
                    localStorage.setItem("auth-email", data.email);
                    setformDate({email:"", password:""});
                    router.replace("/")
                } else {
                    alert(data.message || "Login failed");
                }

            }catch(error){
                alert("Network error. Please check your connection.");
            }

        }
        
        

 
    return ( 
        <div className="w-full h-screen dark:bg-[#101010] dark:text-white bg-gray-100 fixed top-0 left-0 px-8 py-5 z-30">
            <div className="w-full h-auto mt-5 gap-5  flex flex-col items-center justify-center mb-5">
                <div className="w-[120px] h-[120px] rounded-full  border-4 border-white dark:border-[#101010] ring-4 ring-violet-600 bg-violet-600 text-white text-3xl flex items-center justify-center"> جوینده</div>
                <p className="  mt-2 text-xl text-violet-600 tracking-wide">AFghanistan Online Market </p>
            </div>
            <form onSubmit={handleLogin}  className="flex flex-col ">
                <input type="text" value={formDate.email} name="email" onChange={data} placeholder="someone@exampe.com"  className="w-full mb-4 px-6 bg-white py-3 border border-gray-400 shadow rounded-full focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323]  "/>
                 {(formErrors.email || formDate.email)&& !isValidEmail(formDate.email)  && ( <p className="text-red-500 text-xs mt-1 ml-4">   {formErrors.email || "Email must be a valid email address."}  </p>  )}
                <div className="w-full relative">
                    <input  type={showPassword ? "text" : "password"} value={formDate.password} name="password" onChange={data} placeholder="*******"  className="w-full px-6 py-3  shadow rounded-full bg-white border border-gray-400 focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] "/>
                    <span className="absolute right-6 top-4 cursor-pointer"   onClick={() => setShowPassword(prev => !prev)} >   {showPassword ? <IoEye /> : <PiEyeClosedBold/>}</span>
                    {(formErrors.password || formDate.password) && formDate.password.length <8 && (<p className="text-red-500 text-xs mt-1 ml-4">{formErrors.password || "Password must be at least 6 characters long."}</p>)}
                </div>
                <button type="button"  className=" my-6  text-blue-400   hover:border-b hover:border-red-500 text-[18px] outline-none tracking-wide text-left">	Forget Password ?	</button> 
                <button   type="submit"  disabled={!agree} className={`bg-violet-600 transition duration-300 hover:bg-violet-500 text-white px-4 py-3 rounded-full text-xl font-semibold w-full flex  items-center justify-center  	 ${!agree ? "opacity-40 cursor-not-allowed" : ""}	 `}><span> Login</span></button>
                <div className=" flex items-center px-4 my-5">
			        <span className="px-4 text-[16px] tracking-wide">Don not have an account ?		</span> 
                    <Link href="/RegisterMobile"  className=" text-violet-600  text-[16px] tracking-wide"> Registration	</Link>
		 	    </div>
                <button  type="button" onClick={handleGoogleLogin}   className={` px-8 py-2 rounded-full border-2 border-black dark:border-gray-400 dark:text-white dark:bg-[#101010] w-full flex items-center justify-between text-xl   tracking-wide ${    !agree ? "opacity-40 cursor-not-allowed" : ""}`} >Sign with Google <Image src="/google.png" alt="google" width={40} height={40} /></button>
                <div className="flex items-center gap-2 my-5">
                    <input className={`w-5 h-5 border-2 border-black rounded ${agree ? "bg-violet-500": ""}`} type="checkbox" checked={agree}   id="agree" onChange={(e)=> setAgree(e.target.checked)} />
                    <label htmlFor="agree" className="text-md tracking-wide"> I agree to the Privacy Policy <Link href="/Privacy" className="text-violet-500 underline-none tracking-wide underline">Privacy Policy</Link></label>
                </div>
            </form>
        </div>
     );
}
 
export default LoginMobile;