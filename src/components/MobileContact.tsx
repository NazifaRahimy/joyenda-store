"use client"
import { MdOutlineLanguage } from "react-icons/md";
import ContactHeader from "./HeaderMobile/ContactHeader";
import { useState } from "react";
interface ContactErrors {
  First_name?: string;
  Last_name?: string;
  Email?: string;
  Company_name?: string;
  Phone_number?: string;
  Subject?: string;
  Message?: string;
}
const MobileContact = () => {
    const [user, setUser]= useState({First_name :"", Last_name:"", Email:"", Company_name:"", Phone_number:"", Subject:"", Message:""})
    const [contactErrors, setContactErrors] =useState<ContactErrors>({})
    
    let names, values
    const  data =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        names = e.target.name;
	    values = e.target.value;
        console.log(names, values)
	    setUser({...user, [names]: values})
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
     
        const errors: ContactErrors = {};
        if(!user.First_name){
            errors.First_name = "this field is required"
        }
         if (!user.Last_name){
            errors.Last_name ="this field is required"
         }
         if(!user.Email){
            errors.Email= "this field is required"
         }
        if(!user.Company_name){
            errors.Company_name= "this field is required"
        }
        if(!user.Phone_number){
            errors.Phone_number =  "this field is required"
        }
        if(!user.Subject){
            errors.Subject =  "this field is required"
        }
        if(!user.Message){
            errors.Message = "this field is required"
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
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending message.");
        }
    };

    return ( 
        <div className="fixed w-full top-0 left-0 h-screen overflow-y-auto dark:bg-[#232323] z-20 md:hidden bg-gray-200">
            <ContactHeader />
            <div className="w-full h-auto py-7 px-8 mt-20">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold tracking-wide">First name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="First Name" name="First_name" onChange={data}  value={user.First_name} className="p-3 border border-black outline-none rounded-md dark:bg-[#181818] dark:border-gray-300 dark:border-2"/>
                        {contactErrors.First_name && ( <p className="text-red-700 text-sm  ml-4">  {contactErrors.First_name}   </p>  )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold tracking-wide">Last Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="First Name" onChange={data} name="Last_name" value={user.Last_name}  className="p-3 border border-black outline-none rounded-md dark:bg-[#181818] dark:border-gray-300 dark:border-2"/>
                        {contactErrors.Last_name && ( <p className="text-red-700 text-sm  ml-4">  {contactErrors.Last_name}   </p>  )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold tracking-wide">Email <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Your email address" value={user.Email} name="Email"  onChange={data}className="p-3 border border-black outline-none rounded-md dark:bg-[#181818] dark:border-gray-300 dark:border-2"/>
                        {contactErrors.Last_name && ( <p className="text-red-700 text-sm  ml-4">  {contactErrors.Last_name}   </p>  )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold tracking-wide">Company Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Company Name" value={user.Company_name} name="Company_name"  onChange={data} className="p-3 border border-black outline-none rounded-md dark:bg-[#181818] dark:border-gray-300 dark:border-2"/>
                        {contactErrors.Company_name && ( <p className="text-red-700 text-sm  ml-4">  {contactErrors.Company_name}   </p>  )}
                    </div>
                    <div className="relative flex flex-col gap-2">
                        <label className="text-lg font-semibold tracking-wide ">Phone Nambar <span className="text-red-500">*</span></label>
                       <div className="relative w-full">
                            <input type="text" value={user.Phone_number}  placeholder="07********" name="Phone_number" onChange={data}  className="w-full py-3 px-9 border border-black outline-none rounded-md dark:bg-[#181818] dark:border-gray-300 dark:border-2"/>
                            <span className="absolute top-3 left-2 ">< MdOutlineLanguage  size={23}/></span>
                       </div>
                         {contactErrors.Phone_number && ( <p className="text-red-700 text-sm  ml-4">  {contactErrors.Phone_number}   </p>  )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold tracking-wide">Subject <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Subject" name="Subject" onChange={data} value={user.Subject}  className="p-3 border border-black outline-none rounded-md dark:bg-[#181818] dark:border-gray-300 dark:border-2"/>
                        {contactErrors.Subject && ( <p className="text-red-700 text-sm ml-4">  {contactErrors.Subject}   </p>  )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold tracking-wide">Message <span className="text-red-500">*</span></label>
                        <textarea rows={5} placeholder="Write your message here..."  name="Message" onChange={data} value={user.Message} className="p-3 border border-black outline-none rounded-md dark:bg-[#181818] dark:border-gray-300 dark:border-2" ></textarea>
                          {contactErrors.Message && ( <p className="text-red-700 text-sm  ml-4">  {contactErrors.Message}   </p>  )}
                    </div>
                    <button type="submit" className="w-full py-3 rounded-full text-white bg-violet-500 text-lg font-semibold tracking-wide outline-none border-none">Send Message</button>
                </form>
            </div>
        </div>
     );
}
 
export default MobileContact ;