"uese client"
import { useRouter } from "next/navigation"; 
import { IoArrowBack } from "react-icons/io5";
const ContactHeader = () => {
     const router = useRouter()
    return (  
             <div className=" fixed w-full top-0 left-0">
                <div className="relative w-full top-0 left-0 bg-violet-500 dark:bg-[#181818] dark:text-violet-500 flex items-center justify-center h-auto py-6">
                      <button onClick={()=> router.back()} className=" absolute top-7 left-6 "><IoArrowBack size={25}/></button>
                <p className="text-2xl font-bold tracking-wide">Contact Us</p>
                </div>
            </div>
    );
}
 
export default ContactHeader;