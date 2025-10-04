import PrivacyHeader from "@/components/HeaderMobile/PrivacyHeader";
const Privacy = () => {
    return (
       <main className="p-8 fixed top-0 left-0 h-screen overflow-auto w-full z-50 dark:bg-[#181818] dark:text-white bg-white md:h-auto md:z-auto  md:relative md:top-5 mx-auto max-w-7xl ">
        <Privacy />
        <div className="w-full max-w-4xl mx-auto px-6 mt-20 ">
            <h1 className="text-4xl tracking-wide font-bold">Privacy Policy</h1>
            <p className="mt-5 text-xl">این یک نسخه نمایشی از صفحه قوانین سایت است</p>
            <div>
                <div className="mt-10 border-b border-gray-200">
                    <h1 className="text-xl font-bold my-4">مقاله 1 </h1>
                    <p className="mb-10">اینجا متن نمونه برای مقاله 1 قرار می‌گیرد. می‌توانید بعداً متن واقعی قوانین را جایگزین کنید</p>
                </div>
                <div className="mt-10 border-b border-gray-200">
                    <h1 className="text-xl font-bold my-4">مقاله 2 </h1>
                    <p className="mb-10">اینجا متن نمونه برای مقاله 1 قرار می‌گیرد. می‌توانید بعداً متن واقعی قوانین را جایگزین کنید</p>
                </div>
                <div className="mt-10 border-b border-gray-200">
                    <h1 className="text-xl font-bold my-4">مقاله 3 </h1>
                    <p className="mb-10">اینجا متن نمونه برای مقاله 1 قرار می‌گیرد. می‌توانید بعداً متن واقعی قوانین را جایگزین کنید</p>
                </div>
                <div className="mt-10 border-b border-gray-200">
                    <h1 className="text-xl font-bold my-4">مقاله 4 </h1>
                    <p className="mb-10">اینجا متن نمونه برای مقاله 1 قرار می‌گیرد. می‌توانید بعداً متن واقعی قوانین را جایگزین کنید</p>
                </div>
                <div className="mt-10 border-b border-gray-200">
                    <h1 className="text-xl font-bold my-4">مقاله 5</h1>
                    <p className="mb-10">اینجا متن نمونه برای مقاله 1 قرار می‌گیرد. می‌توانید بعداً متن واقعی قوانین را جایگزین کنید</p>
                </div>
            </div>
            <div className="mt-7">
                <h1 className="my-4 text-2xl font-bold">تماس با ما</h1>
                <p className="mb-4">برای اطلاعات بیشتر، می‌توانید با ما تماس بگیرید:</p>
                <ul className="list-decimal space-y-2 mt-4">
                    <li><strong>Email:</strong> <a href="mailto:demo@example.com" className="text-blue-500">demo@example.com</a></li>
                    <li><strong>Website:</strong> <a href="/" target="_blank" className="text-blue-500">www.demo.com/contact</a> </li>
                </ul>
            </div>
        </div>
      
    </main>
      );
}
 
export default Privacy;