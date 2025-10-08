"use client"
import {  useEffect, useState } from "react";
import { IoClose,IoEye  } from "react-icons/io5";
import { PiEyeClosedBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import GoogleButton from "./GoogleButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface AuthenticationProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
    initialForm: string
}

export default function Authentication ({ setShowModal,  showModal , initialForm ="login"}: AuthenticationProps) {
    const [login, setLogin] = useState(initialForm);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();
    const [formData, setformData] = useState({ first_name: "", last_name:"", email: "",  password: "",confirm_password:""})
    const [formErrors, setFormErrors] = useState<Record<string, string>>({ email: "", password: "", first_name: "", last_name:""});
    const [agree, setAgree]= useState(false);


    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const hasUpperCase = (str: string) => /[A-Z]/.test(str);
    const hasLowerCase = (str: string) => /[a-z]/.test(str);
    const hasSpecialChar = (str: string) => /[@#$!%*&^]/.test(str);

    let names, values
    const  data =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        names = e.target.name;
	    values = e.target.value;
        console.log(names, values)
	    setformData({...formData, [names]: values})
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         const errors: Record<string, string> = {};
    
        if(!formData.email){
            errors.email= "Email must be a valid email address."
        }
        
        if(!formData.password){
            errors.password =  "Password must be at least 8 characters long."
        }
        setFormErrors(errors)
        if (Object.keys(errors).length > 0) return;

        try {
            const respons = await fetch("http://localhost:4000/lagin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });
            const data = await respons.json();
            if (respons.ok) {
                const token = "test-token-123"; // توکن تستی
                alert("Login successful");
                localStorage.setItem("auth-token", token);
                localStorage.setItem("auth-name", data.first_name );
                localStorage.setItem("auth-email", data.email);
                  setformData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: ""
                });
                setShowModal(false)
                router.replace("/");
            }
            else {
                alert(data.message || "Login failed");
            }
        } catch (error) {
            console.error(error);
            alert("Network error. Please check your connection.");
        }
    };
    

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors: Record<string, string> = {};

        if(!formData.first_name){
            errors.first_name ="First name must be at least 2 characters long."
        }

        if(!formData.last_name){
            errors.last_name= "Last name must be at least 2 characters long."
        }

        if(!formData.email){
            errors.email= "Email must be a valid email address."
        }
        
        if(!formData.password){
            errors.password =  "Password must be at least 8 characters long."
        }
        setFormErrors(errors)
        if (Object.keys(errors).length > 0) return;
  
        try {
            const respons = await fetch("http://localhost:4000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email:  formData.email,
                    password: formData.password,
                    confirm_password: formData.confirm_password
                })
            });
            const data = await respons.json();
            if (respons.ok) {
                const token = "test-token-123"; // توکن تستی
                alert("Register successful");
                localStorage.setItem("auth-token", token);
                localStorage.setItem("auth-name", data.first_name);
                localStorage.setItem("auth-email", data.email);
                setformData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: ""
                });
                router.replace("/");
                setShowModal(false)
            } else {
                alert(data.message || "Register failed");
            }
        } catch (error) {
            console.error(error);
            alert("Network error. Please check your connection.");
        }
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);
 
 
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex pt-0 items-center justify-center z-[50]">
		    <div className="bg-white  dark:bg-[#101010] dark:border dark:border-[#282828]   px-6 py-5 rounded-xl w-[450px] shadow-lg relative">
                <button onClick={()=> setShowModal(false)} className="absolute top-3 right-4 text-gray-400 hover:text-black"><IoClose size={20}/></button>
                {login === "login" ? <h1 className="text-lg font-semibold">Wecome to back !</h1> : <h1 className="text-lg font-semibold">Welcome To Joyenda</h1> }
                {login === "login" ?   <p className="text-gray-400 mt-1 text-sm">Fill the required fields to login.</p>: <p className="text-gray-400 text-sm mt-1">Make sure to fill all required fields to register your account. </p>}
                <div  className="flex justify-between bg-gray-100 dark:bg-[#282828]  rounded p-1 rouded my-6">
		            <button onClick={()=> setLogin("login")}   className={`w-[195px] px-6 py-1 rounded ${login === "login" ? "bg-white dark:bg-[#1a1a1a] dark:text-white " : "bg-gray-100 dark:bg-[#282828] dark:text-gray-400" }`}>Login</button>
		            <button onClick={()=> setLogin("register")}  className={`w-[195px] px-6 py-1 rounded ${login === "register" ? "bg-white  dark:bg-[#1a1a1a]  dark:text-white" : "bg-gray-100 dark:bg-[#282828] dark:text-gray-400" }`}>Register</button>
				</div>
                <form onSubmit={login === "login" ? handleLogin : handleRegister} className="flex flex-col gap-3">
                    <div className="w-full flex gap-2">
                       { login === "register" ?
                            (<div >
                                <input type="text" value={formData.first_name} name="first_name" onChange={data} placeholder="First name" className="w-full px-3 py-1 border-none  shadow rounded-md focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] " /> 
                                {(formErrors.first_name || formData.first_name)&& formData.first_name.length < 2 && ( <p className="text-red-500 text-xs mt-1 ml-4">   {formErrors.first_name || "First name must be at least 2 characters long"}  </p>  )}
                            </div>): <></>}
                        { login === "register" ? 
                            (<div>
                                <input type="text" placeholder="Last name" value={formData.last_name} name="last_name" onChange={data} className="w-full px-3 py-1 border-none  shadow rounded-md focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] " /> 
                                {(formErrors.last_name || formData.last_name)&& formData.last_name.length < 2 && ( <p className="text-red-500 text-xs mt-1 ml-4">   {formErrors.last_name || "Last name must be at least 2 characters long"}  </p>  )}
                            </div>): <></>
                        }
                    </div>
                    <div>
                        <input type="text" value={formData.email} name="email" onChange={data} placeholder="someone@exampe.com"  className="w-full px-3 py-1 border-none  shadow rounded-md focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] "/>
                        {(formErrors.email || formData.email)&& !isValidEmail(formData.email)  && ( <p className="text-red-500 text-xs mt-1 ml-4">   {formErrors.email || "Email must be a valid email address."}  </p>  )}
                    </div>
                    <div className="w-full relative">
                        <input  type={showPassword ? "text" : "password"} value={formData.password} name="password" onChange={data} placeholder="*******"  className="w-full px-3 py-1 border-none  shadow rounded-md focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] "/>
                        <span className="absolute right-3 top-3 cursor-pointer"   onClick={() => setShowPassword(prev => !prev)} >   {showPassword ? <IoEye /> : <PiEyeClosedBold/>}</span>
                        {(formErrors.password || formData.password) && formData.password.length <8 && (<p className="text-red-500 text-xs mt-1 ml-4">{formErrors.password || "Password must be at least 8 characters long."}</p>)}
                        {formData.password.length >= 8 && !hasUpperCase(formData.password)  && (<p className="text-red-500 text-xs mb-1">Password must contain at least one uppercase letter</p>)}
				        {formData.password.length >= 8 && hasUpperCase(formData.password) && !hasLowerCase(formData.password) && (<p className="text-red-500 text-xs mb-1">Password must contain at least one lowercase letter..</p>)}
					    {formData.password.length >= 8 && hasLowerCase(formData.password) && hasUpperCase(formData.password) && !hasSpecialChar(formData.password) && (<p className="text-red-500 text-xs mb-1">Password must contain at least one special (!@#$%^&*) character.</p>)} 
                    </div>
                    {login === 'register' ?
                        (
                        <div className="w-full relative">
                            <input  type={showConfirmPassword ? "text" : "password"} value={formData.confirm_password} name="confirm_password" onChange={data} placeholder="*******"  className="w-full px-3 py-1 border-none  shadow rounded-md focus:ring-1 focus:ring-violet-500 outline-none dark:bg-[#232323] "/>
                            <span className="absolute right-3 top-3 cursor-pointer"   onClick={() => setShowConfirmPassword(prev => !prev)} >   {showConfirmPassword ? <IoEye /> : <PiEyeClosedBold/>}</span>
                            {formData.confirm_password.length > 0 &&	formData.confirm_password !== formData.password && (<p className="text-red-500 mb-1 text-xs">Passwords do not match. </p>)}
                        </div>
                        ): <></>}
                    <div className="flex items-center gap-2 my-5">
                        <input className="w-5 h-5 border-2 border-black rounded" type="checkbox"  id="agree" checked={agree}  onChange={(e)=> setAgree(e.target.checked)} />
                        <label htmlFor="agree" className="text-md tracking-wide"> I agree to the Privacy Policy <Link href="/Privacy" className="text-violet-500 tracking-wide underline">Privacy Policy</Link></label>
                    </div>
                    {login === "login" ? ( <button type="submit"  disabled={!agree} className={`bg-violet-600 transition duration-300 hover:bg-violet-500 text-white px-4 py-2 rounded w-full flex  items-center justify-center gap-2  ${!agree ? "opacity-40 cursor-not-allowed" : ""}	 	`}><span  ><FaPlus/></span><span> Login</span></button>): (  <button  disabled={!agree} type="submit"  className={`bg-violet-600 transition duration-300 hover:bg-violet-500 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2 	 ${!agree ? "opacity-40 cursor-not-allowed" : ""}	`}> <span><FaPlus /></span><span  >Register </span></button>)}
                </form>
                <GoogleButton />
            </div>
        </div>
    )

}