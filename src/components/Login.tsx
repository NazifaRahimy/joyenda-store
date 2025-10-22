"use client"
import Link from "next/link";
import { IoEye,  IoClose } from "react-icons/io5";
import { PiEyeClosedBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import Register from "./Register";
import Image from "next/image";
    interface AuthenticationProps {
        setLogin: React.Dispatch<React.SetStateAction<boolean>>;
        setRegister: React.Dispatch<React.SetStateAction<boolean>>;
        register: boolean;
        login: boolean;
    }

    const Login = ({setLogin,register, setRegister,   login}: AuthenticationProps) => {
        const [showPassword, setShowPassword] = useState(false);
        const [formDate, setFormDate] = useState({ email: "", password: "" });
        const [formErrors, setFormErrors] = useState<Record<string, string>>({ email: "", password: "" });
        const [agree, setAgree] = useState(false);
        const router = useRouter();

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormDate({ ...formDate, [name]: value });
        };

        const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const hasUpperCase = (str: string) => /[A-Z]/.test(str);
        const hasLowerCase = (str: string) => /[a-z]/.test(str);
        const hasSpecialChar = (str: string) => /[@#$!%*&^]/.test(str);

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
                alert("Login with Google successful");
                router.push("/");
            } catch (error) {
                console.error("Error during Google login:", error);
                alert("Login with Google failed");
            }
        };

        const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const errors: Record<string, string> = {};
            if (!formDate.email || !isValidEmail(formDate.email)) {
                errors.email = "Email must be a valid email address.";
            }
            if (!formDate.password || formDate.password.length < 6) {
                errors.password = "Password must be at least 6 characters long.";
            }
            setFormErrors(errors);            
            if (Object.keys(errors).length > 0) return;

            try {
                const response = await fetch("http://localhost:4000/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: formDate.email, password: formDate.password }),
                });
                const data = await response.json();
                if (response.ok) {
                    const token = "test-token-123";
                    alert("Login successful");
                    localStorage.setItem("auth-token", token);
                    localStorage.setItem("auth-name", data.first_name);
                    localStorage.setItem("auth-email", data.email);
                    setFormDate({ email: "", password: "" });
                    router.replace("/");
                } else {
                    alert(data.message || "Login failed");
                }
            } catch (error) {
                alert("Network error. Please check your connection.");
            }
        };

    return (
        <>
        <div className="fixed inset-0 bg-black bg-opacity-60 flex pt-0 items-center justify-center z-[50]">
            <div className="bg-white  dark:bg-[#101010] dark:border dark:border-[#282828]   px-6 py-5 rounded-xl w-[450px] shadow-lg relative">
                <button onClick={()=> setLogin(false)} className="absolute top-0  right-0 text-white p-2 rounded-tr-md rounded-bl-md bg-black  duration-200 transition-all hover:text-violet-600 dark:bg-white dark:text-black dark:hover:text-violet-700"><IoClose size={20}/></button>
                <h1 className="text-lg font-semibold">Wecome to back !</h1>
                <p className="text-gray-400 mt-1 text-sm">Fill the required fields to login.</p>
                {/* Form */}                
                <form onSubmit={handleLogin} className="flex flex-col w- mt-5">
                    {/* Email */}
                    <div className="relative w-full mb-5">
                        <input  type="text"  id="email" name="email" value={formDate.email} onChange={handleChange} className={`peer w-full px-3 pt-5  border-b-2 border-gray-400 bg-white dark:bg-[#101010] outline-none transition-all duration-300 ${ formDate.email.length > 0 ? "border-b-violet-600 dark:border-b-violet-600 pb-1" : "pb-0" }`}/>
                        <label htmlFor="email"  className={`absolute left-3 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base ${formDate.email.length > 0 ? "top-1 text-violet-600 text-sm" : "top-4 text-gray-500 text-base"} `} >   Email </label>
                        {(formErrors.email || formDate.email) && !isValidEmail(formDate.email) && ( <p className="text-red-500 text-xs mt-1 ml-3">{formErrors.email || "Email must be a valid email address."}</p> )}
                    </div>
                    {/* Password */}
                    <div className="relative w-full mb-5">
                        <input  type={showPassword ? "text" : "password"} id="password"  name="password" value={formDate.password} onChange={handleChange} className={`peer w-full px-3 pt-5 border-b-2 border-gray-400 bg-white dark:bg-[#101010] outline-none transition-all duration-300 ${ formDate.email.length > 0 ? "border-b-violet-600 dark:border-b-violet-600 pb-1 " : "pb-2" }`}  />
                        <label htmlFor="password"  className={`absolute left-3 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base   ${formDate.password.length > 0 ? "top-1 text-violet-600 text-sm" : "top-4 text-gray-500 text-base"} `}> Password </label>
                        <span className="absolute right-4 top-4 cursor-pointer text-xl" onClick={() => setShowPassword(prev => !prev)}  > {showPassword ? <IoEye /> : <PiEyeClosedBold />} </span>
                        { (formErrors.password || formDate.password) && formDate.password.length < 8 && (  <p className="text-red-500 text-xs mt-1 ml-3">{formErrors.password || "Password must be at least 8 characters long."}</p> )}
                        {formDate.password.length  >= 8 && !hasUpperCase(formDate.password)  && (<p className="text-red-500 text-xs mt-1 ml-3">Password must contain at least one uppercase letter</p>)}
			            {formDate.password.length >= 8 && hasUpperCase(formDate.password) && !hasLowerCase(formDate.password) && (<p className="text-red-500 text-xs ml-3 mt-1">Password must contain at least one lowercase letter..</p>)}
			            {formDate.password.length >= 8 && hasLowerCase(formDate.password) && hasUpperCase(formDate.password) && !hasSpecialChar(formDate.password) && (<p className="text-red-500 text-xs mt-1 ml-3">Password must contain at least one special (!@#$%^&*) character.</p>)} 
                    </div>
                    {/* Forget Password */}
                    <button type="button" className=" text-blue-400 mb-2 hover:border-b text-[16px] outline-none tracking-wide text-left" >  Forget Password? </button>
                    {/* Login Button */}
                    <button type="submit" disabled={!agree} className={`bg-violet-600 transition duration-300 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-xl font-semibold w-full flex items-center justify-center ${!agree ? "opacity-40 cursor-not-allowed" : ""} `}>  Login</button>
                    {/* Registration Link */}
                    <div className="flex items-center px-4 my-4">
                        <span className="px-2 text-[16px] tracking-wide">Don’t have an account?</span>
                        <button type="button" onClick={()=>{ setLogin(false);setRegister(true)}} className="text-violet-600 text-[16px] tracking-wide"> Registration</button>
                    </div>
                    {/* Google Login */}
                    <button type="button" onClick={handleGoogleLogin} className={`px-8  rounded-lg border-2 border-black dark:border-gray-400 dark:text-white dark:bg-[#101010] w-full flex items-center justify-between text-xl tracking-wide  ${!agree ? "opacity-40 cursor-not-allowed" : ""}`} >
                        Sign in with Google
                        <Image src="/google.png" alt="google" width={40} height={40} />
                    </button>
                    {/* Privacy Policy */}
                    <div className="flex items-center gap-2 my-5">
                        <input className={`w-5 h-5 border-2 border-black rounded ${agree ? "bg-violet-500" : ""}`} type="checkbox" checked={agree} id="agree" onChange={(e) => setAgree(e.target.checked)}/>
                        <label htmlFor="agree" className="text-md tracking-wide">I agree to the <Link href="/Privacy" className="text-violet-500 underline tracking-wide"> Privacy Policy </Link> </label>
                    </div>
                </form>
            </div>
        </div>
        {register && (<Register login={login} setLogin={setLogin} setRegister={setRegister} register={register} />)}
        </>
    );
};

export default Login;
