import MobileContact from "@/components/MobileContact";
import DesktopContact from "@/components/DesktopContact";
const Contact = () => {
    return ( 
        <main className="p-8">
            <DesktopContact/>
          <MobileContact />
        </main> 
     );
}
 
export default Contact;