import Image from "next/image";

const GoogleButton = () => {
    return ( 
        <>
        <div className=" flex items-center justify-center my-5">
			        <div className="flex-grow border-t border-gray-300 mt-1"></div>
                    <span className="px-4 text-sm text-gray-500">	Also you are able to login with	</span> 
		 	        <div className="flex-grow border-t border-gray-300 mt-1"></div>
		        </div>
		        <button   className="bg-red-600 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-1 " ><span className="mr-2 mt-1 text-green">
                    <Image  src="/google.png" alt="google" width={20} height={20} className="w-[20px] h-[20px]"/>
                    {/* <img className="w-[20px] h-[20px]" src="google.png" alt="google" /> */}
                    </span> Google</button></>
     );
}
 
export default GoogleButton;