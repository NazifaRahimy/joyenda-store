import { IoMdCheckmark, IoIosAdd } from "react-icons/io";
import Link from "next/link";
import AboutHeader from "@/components/HeaderMobile/AboutHeader";
import Fotter from "@/components/Fotter";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const About = () => {
    return ( 
      <>
        <main className="fixed top-0 left-0 max-w-7xl h-screen overflow-auto  mx-auto bg-white dark:bg-[#181818] dark:text-white w-full  p-4   z-[1000] md:relative md:top-5 md:left-0 md:h-auto md:z-auto">
        <AboutHeader/>
        <div className=" w-full container mx-auto px-8 py-13 mt-28">
            <h1 className="text-4xl font-semibold text-center tracking-tight">About Joyenda Store</h1>
            <p  className="text-center mt-3 text-gray-400 text-xl tracking-tight">Joyenda : Online of Afghanistan  Marketplace for Buying and Selling</p>
            <div className="w-full mt-14  p-8 shadow-md dark:bg-[#232323]">
                <div>
                    <p className=" my-4 tracking-tight">The Joyenda is an online marketplace in Afghanistan that enables direct, commission-free transactions for all people across the country. On this platform users can easily search for the products and services they need or offer their own items for sale — directly and without intermediaries throughout Afghanistan.</p>
                    <p className="mb-4 tracking-tight">The Joyenda platform is owned by Ganj Nawa Online Services Company and is officially registered with the Ministry of Industry and Commerce and the Ministry of Telecommunications and Information Technology of Afghanistan.</p>
                </div>
                <div className="mt-18">
                    <h1 className="text-2xl mb-7 font-semibold tracking-tight ">What Do We Do?</h1>
                    <p className="mb-4  text-lg" >Joyenda allows you to publish your advertisements any time via mobile or computer. Your ads are quickly displayed across the country. People can easily search and find the products or services they need on Azpag and contact sellers directly.</p>
                </div>
                <div className="mt-16 w-full">
                    <h1 className="text-2xl mb-7 font-semibold tracking-tight ">Our Services</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-center justify-center dark:bg-[#181818] shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold"><IoMdCheckmark/></span>
                            <p className="pl-2">Post ads and introducing sellers products and services</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold"><IoMdCheckmark/></span>
                            <p className="pl-2">Easy management via mobile and computer</p>
                        </div>
                       <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold"><IoMdCheckmark/></span>
                            <p className="pl-2">Instant ad visibility across Afghanistan</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold"><IoMdCheckmark/></span>
                            <p className="pl-2">Diverse categories for goods and services</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold"><IoMdCheckmark/></span>
                            <p className="pl-2">Easy search for desired products and services</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold"><IoMdCheckmark/></span>
                            <p className="pl-2">Direct communication between buyers and sellers</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold"><IoMdCheckmark/></span>
                            <p className="pl-2">User guide to help everyone navigate Azpag</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-16 dark:bg-[#181818] rounded-md p-7">
                    <h1 className="text-2xl mb-7 font-semibold tracking-tight"> Why Joyenda Store</h1>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex items-center   tracking-tight leading-none ">
                            <span className="bg-blue-700 text-white px-2 py-1 rounded-full font-semibold">1</span>
                            <p className="pl-3">Easy and Free: Posting ads is simple and requires no payment.</p>
                        </div>
                        <div className="flex items-center   tracking-tight leading-none ">
                            <span className="bg-blue-700 text-white px-2 py-1 rounded-full font-semibold">2</span>
                            <p className="pl-3">Tailored for Afghanistan: Joyenda is designed with a deep understanding of the local needs and realities.</p>
                        </div>
                        <div className="flex items-center   tracking-tight leading-none ">
                            <span className="bg-blue-700 text-white px-2 py-1 rounded-full font-semibold">3</span>
                            <p className="pl-3">Fast and Effective: Your ad is published quickly and instantly visible.</p>
                        </div>
                         <div className="flex items-center   tracking-tight leading-none ">
                            <span className="bg-blue-700 text-white px-2 py-1 rounded-full font-semibold">4</span>
                            <p className="pl-3">Genuine and Reliable: Connect directly with real customers and sellers without any intermediarie .</p>
                        </div>
                         <div className="flex items-center   tracking-tight leading-none ">
                            <span className="bg-blue-700 text-white px-2 py-1 rounded-full font-semibold">5</span>
                            <p className="pl-3">Wide and Nationwide Reach: Azpag is accessible in all provinces across Afghanistan.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-16">
                    <h1 className="text-2xl mb-7 font-semibold tracking-tight"> Our Vision</h1>
                        <p className="py-2 pl-4 italic border-l-4 border-violet-500 dark:border-violet-950">To build a safe and easy-to-use online marketplace in Afghanistan --- where anyone can effortlessly showcase their products and services or find what they need.</p>
                </div>
                <div className="mt-16 w-full">
                    <h1 className="text-2xl mb-7 font-semibold tracking-tight">Our Values</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold">1</span>
                            <p className="pl-4">Honesty and integrity</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold">2</span>
                            <p className="pl-4">Trust and security in transactions</p>
                        </div>
                       <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold">3</span>
                            <p className="pl-4">Customer satisfaction</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold">4</span>
                            <p className="pl-4">Technology and innovation</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold">5</span>
                            <p className="pl-4">Quality and continuous improvement</p>
                        </div>
                        <div className="flex items-center justify-center dark:bg-[#181818]  shadow font-semibold tracking-tight leading-none  border border-violet-200 rounded-xl hover:shadow-lg p-6">
                            <span className="text-blue-600 font-bold">6</span>
                            <p className="pl-4">Saving time and reducing cost</p>
                        </div>
                      
                    </div>
                </div>
            </div>
            <h2 className="text-center mt-10 text-xl ">Join our marketplace today...</h2>
            <Link href="/createAd" className=" w-[200px] mt-8 mx-auto outline-none cursor-pointer flex  text-lg  items-center justify-center gap-1 transition-colors duration-300 py-2 rounded px-4 bg-violet-600  text-white hover:bg-violet-500 ">
                <span className="text-2xl md:text-xl"><IoIosAdd/></span><span className="md:hidden">add product</span><span className="hidden md:inline">Create an Ad</span>
            </Link>
        </div>
       
    </main>
    <Fotter />
    <ScrollToTopButton />
    </>
     );
}
 
export default About;