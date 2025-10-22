"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useRouter } from "next/navigation";

import Image from "next/image";
interface GoogleButtonProps {
  agree: boolean;
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

    const GoogleButton = ({agree, setRegister}: GoogleButtonProps) => {
        const router = useRouter();

        const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            localStorage.setItem("auth-token", await user.getIdToken());
            localStorage.setItem("auth-name", user.displayName || "");
            localStorage.setItem("auth-email", user.email || "");
            window.dispatchEvent(new Event("authChange"));
            alert(`خوش آمدی ${user.displayName}!`);
            setRegister(false)
            router.push("/");
        } catch (error) {
            console.error("Error during Google login:", error);
              alert("ورود با گوگل ناموفق بود!");
            }
        };

    return ( 
    
     <button onClick={handleGoogleLogin} disabled={!agree}  className={`bg-red-600 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-1 ${  !agree ? "opacity-40 cursor-not-allowed" : ""}`} ><span className="mr-2 mt-1 text-green"> <Image  src="/google.png" alt="google" width={20} height={20} className="w-[20px] h-[20px]"/></span> Google</button>
     
    );
}
 
export default GoogleButton;