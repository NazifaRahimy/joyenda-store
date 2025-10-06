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
        <div className=" hidden md:block">
        <div className="w-full flex gap-4 dark:bg-[#181818] ">
            <div className="w-1/2 h-auto flex  justify-center p-2  items-center  size-full  ">
                <img src="/Contan_us.png " alt="logo-contact"  className="h-[500px] w-full rounded-md" />
            </div>
            <div className="w-1/2  p-2 " >
                <h1 className="text-3xl font-bold tracking-wide  "  >
                    Contact Us
                </h1>
                <form onSubmit={handleSubmit} className="w-full h-auto flex flex-col gap-2 mt-5 ">
                    <div className="w-full flex gap-2">
                        <div className="w-full flex flex-col gap-2 ">
                            <label className={` tracking-wide text-base ${(contactErrors.First_name || touched.First_name) && user.First_name.length < 2? "text-red-700" : ""} `} > First Name <span className="text-red-500"> *  </span></label>
                            <input type="text" value={user.First_name} onBlur={handleBlur} name="First_name" onChange={data} placeholder="Your first name" className="w-full px-3 py-2 border-none  shadow rounded-md focus:ring-2 focus:ring-violet-500 outline-none dark:bg-[#232323] " />
                            {(contactErrors.First_name || touched.First_name)&& user.First_name.length < 2 && ( <p className="text-red-700 text-sm mt-1 ml-4">   {contactErrors.First_name || "First name must be at least 2 characters long"}  </p>  )}
                        
                        </div> 
                        <div className="w-full flex flex-col gap-2 ">
                            <label className={`text-base   tracking-wide ${(contactErrors.Last_name || touched.Last_name  ) && user.Last_name.length < 2? "text-red-700" : ""}`} > Last Name <span className="text-red-500"> *  </span></label>
                            <input type="text" placeholder="your Last name" onBlur={handleBlur} value={user.Last_name} name="Last_name" onChange={data} className="w-full px-3 py-2  border-none  shadow rounded-md focus:ring-2 focus:ring-violet-500 outline-none dark:bg-[#232323]" />
                            {(contactErrors.Last_name || touched.Last_name  ) &&  user.Last_name.length < 2 && ( <p className="text-red-700 text-sm mt-1 ml-4">  {contactErrors.Last_name || "Last name must be at least 2 characters long"}   </p>  )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 ">
                        <label className={`text-base   tracking-wide ${(contactErrors.Email || touched.Email)&&!isValidEmail(user.Email)? "text-red-700" : ""}`} > Email  <span className="text-red-500"> *  </span></label>
                        <input type="text" onBlur={handleBlur} placeholder="your last Email " value={user.Email} name="Email" onChange={data} className="w-full px-3 py-2 border-none  shadow rounded-md focus:ring-2 focus:ring-violet-500 outline-none dark:bg-[#232323]" />
                        {(contactErrors.Email || touched.Email) && !isValidEmail(user.Email) && ( <p className="text-red-700 text-sm mt-1 ml-4">  {contactErrors.Email || "Email must be a valid email address"}   </p>  )}
                       
                    </div>
                    <div className="w-full flex flex-col gap-2 ">
                        <label className="text-base   tracking-wide" > Company Name<span className="text-red-500"> *  </span></label>
                        <input type="text" name="Company_name" onChange={data} value={user.Company_name}  placeholder="Company Name " className="w-full px-3 py-2 3 border-none  shadow rounded-md focus:ring-2 focus:ring-violet-500 outline-none dark:bg-[#232323]" />
                    </div>
                    <div className="w-full flex flex-col gap-2 ">
                        <label className={`text-base   tracking-wide ${(contactErrors.Phone_number ||touched.Phone_number ) &&  !isValidAfghanistanPhone(user.Phone_number)  ? "text-red-700" : ""}`} > Phone  Namber <span className="text-red-500"> *  </span></label>
                        <div className="relative w-full ">
                            <input type="text" onBlur={handleBlur} name="Phone_number" onChange={data} value={user.Phone_number} placeholder="07********" className="w-full px-8 py-2    border-none  shadow rounded-md focus:ring-2 focus:ring-violet-500 outline-none dark:bg-[#232323]" />
                            <span className="absolute top-3 left-2 ">< MdOutlineLanguage  size={20}/></span>
                            {(contactErrors.Phone_number ||touched.Phone_number ) && !isValidAfghanistanPhone(user.Phone_number) && ( <p className="text-red-700 text-sm mt-1 ml-4">  {contactErrors.Phone_number || "Phone number must be valid Afghanistan phone number."}   </p>  )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 ">
                        <label className={`text-base   tracking-wide `} > Subject <span className="text-red-500"> *  </span></label>
                        <input type="text" name="Subject" onBlur={handleBlur} onChange={data} value={user.Subject}  placeholder="Subject" className="w-full px-3 py-2 3 border-none  shadow rounded-md focus:ring-2 focus:ring-violet-500 outline-none dark:bg-[#232323]" />
                    
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className={`text-lg font-semibold tracking-wide ${(contactErrors.Message ||touched.Message) && user.Message.length < 10? "text-red-700" : ""}`}>Message <span className="text-red-500">*</span></label>
                        <textarea rows={5} name="Message" onBlur={handleBlur} onChange={data} value={user.Message} placeholder="Write your message here..."   className="p-3 resize-none   shadow focus:ring-2 focus:ring-violet-500 outline-none rounded-md dark:bg-[#232323]" ></textarea>
                        {(contactErrors.Message ||touched.Message) && user.Message.length <10 && ( <p className="text-red-700 text-sm mt-1 ml-4">  {contactErrors.Message || "  Message must be at least 10 characters long. "}   </p>  )}
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