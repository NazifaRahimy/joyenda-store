import MobileContact from "@/components/MobileContact";
import DesktopContact from "@/components/DesktopContact";
import Fotter from "@/components/Fotter";
const Contact = () => {
    return ( 
        <main className="p-8">
            <DesktopContact>
               <Fotter />
            </DesktopContact>
          <MobileContact />
        </main> 
     );
}
 
export default Contact;