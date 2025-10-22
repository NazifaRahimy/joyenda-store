"use client"
import {  useEffect, useState } from "react";
import { IoClose,IoEye  } from "react-icons/io5";
import { PiEyeClosedBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import GoogleButton from "./GoogleButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Login from "./Login";
    interface AuthenticationProps {
        setRegister: React.Dispatch<React.SetStateAction<boolean>>;
        setLogin: React.Dispatch<React.SetStateAction<boolean>>;
        register: boolean;
        login:boolean
    }

    export default function Register ({setRegister, register , login, setLogin}: AuthenticationProps) {
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
                    window.dispatchEvent(new Event("authChange"));
                    setformData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        password: "",
                        confirm_password: ""
                    });
                    router.replace("/");
                   setRegister(false)
                }     else {
                alert(data.message || "Register failed");
                }
            } catch (error) {
                console.error(error);
               alert("Network error. Please check your connection.");
            }
        };

        useEffect(() => {
            if (register) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
            return () => {
               document.body.style.overflow = "auto";
            };
        }, [register]);
 
 
    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-60 flex pt-0 items-center justify-center z-[50]">
		    <div className="bg-white  dark:bg-[#101010] dark:border dark:border-[#282828]   px-8 py-3 rounded-xl w-[450px] shadow-lg relative">
                <button onClick={()=>  setRegister(false)} className="absolute top-0  right-0 text-white p-2 rounded-tr-md rounded-bl-md bg-black  duration-200 transition-all hover:text-violet-600 dark:bg-white dark:text-black dark:hover:text-violet-700"><IoClose size={20}/></button>
                <h1 className="text-lg font-semibold">Welcome To Joyenda</h1>
               <p className="text-gray-400 text-sm mt-1 mb-2">Make sure to fill all required fields to register your account. </p> 
               <form onSubmit={handleRegister} className="flex flex-col gap-4 ">
                    {/* First Name */}
                    <div className="relative w-full">
                        <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={data}
                        className={`peer w-full pt-3 px-3 border-b-2 border-b-gray-400  bg-white dark:bg-[#101010] outline-none transition-all duration-300 ${ formData.first_name.length > 0 ? "border-b-violet-600 dark:border-b-2 dark:border-b-violet-600 pb-1" : "pb-2"}`}/>
                        <label htmlFor="first_name"  className={`absolute left-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base ${formData.first_name ? "-top-1 text-violet-600 dark:text-violet-600 text-sm" : "top-1"} `}> First name</label>
                        {(formErrors.first_name || formData.first_name) && formData.first_name.length < 2 && (<p className="text-red-500 text-xs mt-1 ml-2">{formErrors.first_name || "First name must be at least 2 characters long."}</p>)}
                    </div>
                    {/* Last Name */}
                    <div className="relative w-full">
                        <input type="text"  id="last_name"  name="last_name" value={formData.last_name} onChange={data}
                        className={`peer w-full pt-3 px-3 border-b-2 border-b-gray-400  bg-white dark:bg-[#101010] outline-none transition-all duration-300 ${ formData.last_name.length > 0 ? "border-b-violet-600 dark:border-b-violet-600 pb-1" : "pb-2" }`}/>
                        <label htmlFor="last_name" className={`absolute left-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base ${formData.last_name ? "-top-1 text-violet-600 dark:text-violet-600 text-sm" : "top-1"} `}> Last name </label>
                        {(formErrors.last_name || formData.last_name) && formData.last_name.length < 2 && (<p className="text-red-500 text-xs mt-1 ml-2">{formErrors.last_name || "Last name must be at least 2 characters long."}</p>)}
                    </div>
                    {/* Email */}
                    <div className="relative w-full">
                        <input type="email"  id="email" name="email" value={formData.email} onChange={data}  
                        className={`peer w-full pt-3 px-3 border-b-2 border-gray-400 dark:text-white  bg-white dark:bg-[#101010] outline-none transition-all duration-300 ${  formData.email.length > 0 ? "border-b-violet-600 dark:border-b-violet-600 pb-1" : "pb-2" }`}/>
                        <label htmlFor="email" className={`absolute left-3  text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base ${formData.email ? "-top-1 text-violet-600 dark:text-violet-600 text-sm" : "top-1"} `} >  Email</label>
                        {(formErrors.email || formData.email) && !isValidEmail(formData.email) && (<p className="text-red-500 text-xs mt-1 ml-2">{formErrors.email || "Email must be a valid email address."}</p>)}
                    </div>
                    {/* Password */}
                    <div className="relative w-full">
                        <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={data}
                        className={`peer w-full pt-3 px-3 border-b-2 border-b-gray-400  bg-white dark:bg-[#101010] outline-none transition-all duration-300 ${ formData.password.length > 0 ? "border-b-violet-600 dark:border-b-violet-600 pb-1" : "pb-2" }`} />
                        <label  htmlFor="password" className={`absolute left-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base ${formData.password ? "-top-1 text-violet-600 dark:text-violet-600 text-sm" : "top-1"} `} > Password</label>
                        <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)} > {showPassword ? <IoEye /> : <PiEyeClosedBold />}</span>
                        {(formErrors.password || formData.password) && formData.password.length < 8 && ( <p className="text-red-500 text-xs mt-1 ml-2">{formErrors.password || "Password must be at least 8 characters long."}</p>)}
                        {formData.password.length >= 8 && !hasUpperCase(formData.password) && ( <p className="text-red-500 text-xs mt-1 ml-2">  Password must contain at least one uppercase letter.</p> )}
                        {formData.password.length >= 8 && hasUpperCase(formData.password) && !hasLowerCase(formData.password) && ( <p className="text-red-500 text-xs mt-1 ml-2"> Password must contain at least one lowercase letter. </p> )}
                        {formData.password.length >= 8 && hasUpperCase(formData.password) && hasLowerCase(formData.password) && !hasSpecialChar(formData.password) && ( <p className="text-red-500 text-xs mt-1 ml-2"> Password must contain at least one special character (!@#$%^&*).  </p> )}
                    </div>
                    {/* Confirm Password */}
                    <div className="relative w-full">
                        <input type={showConfirmPassword ? "text" : "password"} id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={data}
                        className={`peer w-full pt-3 px-3 border-b-2 border-b-gray-400 dark:text-white  bg-white dark:bg-[#101010] outline-none transition-all duration-300 ${ formData.confirm_password.length > 0 ? "border-b-violet-600 dark:border-b-violet-600 pb-1"  : "pb-2" }`}/>
                        <label htmlFor="confirm_password" className={`absolute left-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base ${formData.confirm_password ? "-top-1 text-violet-600 dark:text-violet-600 text-sm" : "top-1"}`}> Confirm password</label>
                        <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)} >  {showConfirmPassword ? <IoEye /> : <PiEyeClosedBold />} </span>
                        {formData.confirm_password.length > 0 && formData.confirm_password !== formData.password && ( <p className="text-red-500 text-xs mt-1 ml-2">Passwords do not match.</p>)}
                    </div>
                    {/* Privacy */}
                    <div className="flex items-center gap-2 ">
                        <input className="w-5 h-5 border-2 border-gray-400 rounded" type="checkbox"  id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                        <label htmlFor="agree" className="text-sm tracking-wide dark:text-white"> I agree to the <Link href="/Privacy" className="text-violet-500 underline"> Privacy Policy  </Link></label>
                    </div>
                    {/* Buttons */}
                    <div className="flex items-center gap-4 justify-between">
                        <button disabled={!agree} type="submit" className={`bg-violet-600 transition duration-300 hover:bg-violet-500 text-white px-4 py-1.5 rounded-md text-[16px] font-normal w-full flex items-center justify-center ${!agree ? "opacity-40 cursor-not-allowed" : "" }`} >
                            <FaPlus className="mr-2" /> Register
                        </button>
                        <GoogleButton agree={agree} setRegister={setRegister} />
                    </div>
                </form>
                <div className=" flex items-center mt-1.5">
                        <span className=" text-[16px] tracking-wide">Already have an acount?		</span> 
                        <button onClick={()=>{setRegister(false);setLogin(true)}} type="button"  className=" text-violet-600  text-[16px] tracking-wide ml-2"> Lgoin	</button>
                </div>
            </div>
        </div>
        {login && (<Login  setLogin={setLogin} setRegister={setRegister} register={register} login={login}/>)}
    </>
    )

}