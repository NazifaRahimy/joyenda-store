"use client"
import {  useState } from "react";
import { MdOutlineLanguage , MdAdd} from "react-icons/md";
import { TbBrandFacebook } from "react-icons/tb";
import ScrollToTopButton from "./ScrollToTopButton";
interface ContactErrors {
  First_name?: string;
  Last_name?: string;
  Email?: string;
  Company_name?: string;
  Phone_number?: string;
  Subject?: string;
  Message?: string;
}
import { FaInstagram,  FaTelegram , FaWhatsapp } from "react-icons/fa";
const DesktopContact =( {children,}: {children: React.ReactNode})=> {
     const [user, setUser]= useState({First_name :"", Last_name:"", Email:"", Company_name:"", Phone_number:"", Subject:"", Message:""})
     const [contactErrors, setContactErrors] =useState<ContactErrors>({First_name :"", Last_name:"", Email:"", Phone_number:"", Message:""})
       const [touched, setTouched] = useState({
		First_name: false,
		Last_name: false,
		Email: false,
		Phone_number: false,
		Message: false,
		
	})
    let names, values
    const  data =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        names = e.target.name;
	    values = e.target.value;
        console.log(names, values)
	    setUser({...user, [names]: values})
    }
     const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
	    setTouched((prve) => ({
		    ...prve,
		    [e.target.name]: true,
	    }))
    }

     
    const isValidEmail = (Email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
   };

    const isValidAfghanistanPhone = (Phone_number: string) => {
        return /^07\d{8}$/.test(Phone_number);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        const errors: ContactErrors = {};
        if(!user.First_name){
            errors.First_name ="First name must be at least 2 characters long."
        }
        if(!user.Last_name){
            errors.Last_name= "Last name must be at least 2 characters long."
        }
        if(!user.Email){
            errors.Email= "Email must be a valid email address."
        }
        
        if(!user.Phone_number){
            errors.Phone_number =  "Phone number must be valid Afghanistan phone number."
        }
        if(!user.Message){
            errors.Message = "Message must be at least 10 characters long."
        }
        setContactErrors(errors)
       if (Object.keys(errors).length > 0) return;
             try {
            const res = await fetch("http://localhost:4000/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // body: JSON.stringify(user),
                body: JSON.stringify({
                id: Math.floor(Math.random() *1000),
                ...user
            })
            });
            if (res.ok) {
                alert("Message sent successfully!");
                setUser({
                    First_name: "",
                    Last_name: "",
                    Email: "",
                    Company_name: "",
                    Phone_number: "",
                    Subject: "",
                    Message: ""
                });
                setContactErrors({});
                setTouched({
                    First_name: false,
                    Last_name: false,
                    Email: false,
                    Phone_number: false,
                    Message: false,
                });
                
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending message.");
        }
    }
    return ( 
    <div className=" block">
        <div className="w-full flex justify-start flex-col md:flex-row md:gap-4 dark:bg-[#181818] ">
            <div className="w-[100%] md:w-1/2 h-auto flex  justify-center md:p-2  items-center  size-full  ">
                <img src="/Contan_us.png " alt="logo-contact"  className="h-[500px] w-full rounded-md" />
            </div>
            <div className="w-full md:w-1/2  p-2 " >
                <h1 className="text-3xl font-bold tracking-wide  "  > Contact Us</h1>
                <form onSubmit={handleSubmit} className="w-full h-auto flex flex-col gap-4 mt-10 ">
                    <div className="w-full flex flex-col md:flex-row gap-2">
                        {/* First Name */}
                        <div className="relative w-full flex flex-col gap-1">
                            <div className="relative">
                                <input type="text" id="first_name" name="First_name" value={user.First_name} onChange={data} onBlur={handleBlur}
                                className={`peer w-full px-3 py-2 border-2 rounded-md outline-none shadow transition-all duration-200 dark:bg-[#181818] ${user.First_name ? "border-violet-600" : "border-gray-500"} focus:border-violet-600 `}/>
                                <label htmlFor="first_name"
                                className={`absolute left-3 text-gray-400 bg-white dark:bg-[#181818] px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-violet-600 ${user.First_name ? "-top-2.5 text-sm text-violet-600" : "top-2"} `} >
                                    First Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                            {(contactErrors.First_name || touched.First_name) && user.First_name.length < 2 && (<p className="text-red-700 text-[13px] ml-4"> {contactErrors.First_name || "First name must be at least 2 characters long"} </p>)}
                        </div>
                        {/* Last Name */}
                        <div className="relative w-full flex flex-col gap-1">
                            <div className="relative">
                                <input type="text" id="last_name" name="Last_name" value={user.Last_name} onChange={data} onBlur={handleBlur}
                                className={`peer w-full px-3 py-2 border-2 rounded-md outline-none shadow transition-all duration-200 dark:bg-[#181818] ${user.Last_name ? "border-violet-600" : "border-gray-500"}  focus:border-violet-600 `}/>
                                <label htmlFor="last_name"
                                className={`absolute left-3 text-gray-400 bg-white dark:bg-[#181818] px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-violet-600   ${user.Last_name ? "-top-2.5 text-sm text-violet-600" : "top-2"}  `}>
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                            {(contactErrors.Last_name || touched.Last_name) && user.Last_name.length < 2 && (<p className="text-red-700 text-[13px] ml-4">{contactErrors.Last_name || "Last name must be at least 2 characters long"} </p>)}
                        </div>
                    </div>
                    {/* Email */}
                    <div className="relative w-full flex flex-col gap-1">
                        <div className="relative">
                            <input type="text" id="email" name="Email" value={user.Email} onChange={data} onBlur={handleBlur}
                            className={`peer w-full px-3 py-2 border-2 rounded-md outline-none shadow transition-all duration-200 dark:bg-[#181818] ${user.Email ? "border-violet-600" : "border-gray-500"} focus:border-violet-600 `}/>
                            <label htmlFor="email" className={`absolute left-3 text-gray-400 bg-white dark:bg-[#181818] px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600  peer-focus:-top-2 peer-focus:text-sm peer-focus:text-violet-600 ${user.Email ? "-top-2.5 text-sm text-violet-600" : "top-2"} `}>
                                Email <span className="text-red-500">*</span>
                            </label>
                        </div>
                        {(contactErrors.Email || touched.Email) && !isValidEmail(user.Email) && (<p className="text-red-700 text-sm ml-4">  {contactErrors.Email || "Email must be a valid email address"} </p>)}
                    </div>
                    {/* Company Name */}
                    <div className="relative w-full flex flex-col gap-1">
                        <div className="relative">
                            <input type="text" id="company_name" name="Company_name" value={user.Company_name} onChange={data}
                            className={`peer w-full px-3 py-2 border-2 rounded-md outline-none shadow transition-all duration-200 dark:bg-[#181818] ${user.Company_name ? "border-violet-600" : "border-gray-500"}  focus:border-violet-600 `} />
                           <label htmlFor="company_name" className={`absolute left-3 text-gray-400 bg-white dark:bg-[#181818] px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-violet-600 ${user.Company_name ? "-top-2.5 text-sm text-violet-600" : "top-2"} `}> Company Name </label>
                        </div>
                    </div>
                    {/* Phone Number */}
                    <div className="relative w-full flex flex-col gap-1">
                        <div className="relative">
                            <span className="absolute top-3 left-2 text-gray-500"> <MdOutlineLanguage size={20} /></span>
                            <input type="text" id="phone" name="Phone_number" value={user.Phone_number} onChange={data} onBlur={handleBlur}
                            className={`peer w-full pl-8 py-2 border-2 rounded-md outline-none shadow transition-all duration-200 dark:bg-[#181818] ${user.Phone_number ? "border-violet-600" : "border-gray-500"} focus:border-violet-600 `}/>
                            <label htmlFor="phone" className={`absolute left-8 text-gray-400 bg-white dark:bg-[#181818] px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-violet-600 ${user.Phone_number ? "-top-2.5 text-sm text-violet-600" : "top-2"} `}>
                                Phone Number <span className="text-red-500">*</span>
                           </label>
                        </div>
                        {(contactErrors.Phone_number || touched.Phone_number) && !isValidAfghanistanPhone(user.Phone_number) && (<p className="text-red-700 text-sm  ml-4"> {contactErrors.Phone_number || "Phone number must be valid Afghanistan phone number."}</p>)}
                    </div>
                    {/* Subject */}
                    <div className="relative w-full flex flex-col gap-1">
                        <div className="relative">
                            <input type="text" id="subject" name="Subject" value={user.Subject} onChange={data}
                            className={`peer w-full px-3 py-2 border-2 rounded-md outline-none shadow transition-all duration-200 dark:bg-[#181818]${user.Subject ? "border-violet-600" : "border-gray-500"} focus:border-violet-600`}/>
                            <label htmlFor="subject" className={`absolute left-3 text-gray-400 bg-white dark:bg-[#181818] px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-violet-600 ${user.Subject ? "-top-2.5 text-sm text-violet-600" : "top-2"} `}>
                                Subject <span className="text-red-500">*</span>
                            </label>
                        </div>
                    </div>
                    {/* Message */}
                    <div className="relative w-full flex flex-col gap-1">
                        <div className="relative">
                            <textarea id="message" name="Message" rows={5} value={user.Message}  onChange={data} onBlur={handleBlur}
                            className={`peer w-full p-3 border-2 rounded-md outline-none shadow transition-all duration-200 dark:bg-[#181818] ${user.Message ? "border-violet-600" : "border-gray-500"} focus:border-violet-600 `}/>
                            <label htmlFor="message" className={`absolute left-3 text-gray-400 bg-white dark:bg-[#181818] px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-violet-600 ${user.Message ? "-top-2.5 text-sm text-violet-600" : "top-2"} `}>
                                Message <span className="text-red-500">*</span>
                            </label>
                        </div>
                       {(contactErrors.Message || touched.Message) && user.Message.length < 10 && ( <p className="text-red-700 text-sm ml-4"> {contactErrors.Message || "Message must be at least 10 characters long."}</p>)}
                    </div>
                    <button type="submit" className="w-[200px] flex gap-2 items-center justify-center my-4   py-2 rounded-md text-white bg-violet-500 text-lg font-semibold tracking-wide outline-none border-none"><span><MdAdd/> </span>  Send Message</button>
                    <hr />
                    <div className="w-full flex gap-2 items-center justify-center" >
                        <div className="w-10 h-10 mt-5 transition-all duration-300 hover:bg-cyan-500 cursor-pointer rounded-full bg-violet-500 flex items-center justify-center text-white  " ><TbBrandFacebook size={20} /></div>
                        <div className="w-10 h-10 mt-5 transition-all duration-300 hover:bg-cyan-500 cursor-pointer rounded-full bg-violet-500 flex items-center justify-center text-white  " ><FaInstagram size={20} /></div>
                        <div className="w-10 h-10 mt-5 transition-all duration-300 hover:bg-cyan-500 cursor-pointer rounded-full bg-violet-500 flex items-center justify-center text-white  " ><FaTelegram size={20} /></div>
                        <div className="w-10 h-10 mt-5 transition-all duration-300 hover:bg-cyan-500 cursor-pointer rounded-full bg-violet-500 flex items-center justify-center text-white  " ><FaWhatsapp size={20} /></div>
                    </div>
                </form>
            </div>
        </div> 
        {children} 
        <ScrollToTopButton /> 
    </div>
    );
}
 
export default DesktopContact