"use client"
import {RiYoutubeLine, RiInstagramLine, RiFacebookBoxLine, RiBehanceLine, RiPinterestLine} from "react-icons/ri"
import Link from "next/link";
const Socials = () => {
    return (
        <div className="flex items-center gap-x-5 text-lg">
            {/* <Link href={""} className="hover:text-purple-800 transition-all duration-300"><RiYoutubeLine/></Link> */}
          
            {/* <Link href={"https://www.facebook.com/profile.php?id=100066876673046"} className="hover:text-purple-800 transition-all duration-300"><RiInstagramLine/></Link> */}
            <Link 
                href='https://www.facebook.com/profile.php?id=100066876673046' 
                className="hover:text-purple-800 transition-all duration-300">
                Facebook    {/* <RiFacebookBoxLine/> */}
            </Link>
            {/* <Link href={""} className="hover:text-purple-800 transition-all duration-300"><RiBehanceLine/></Link> */}
            {/* <Link href={""} className="hover:text-purple-800 transition-all duration-300"><RiPinterestLine/></Link> */}
        </div>
    )
}
export default Socials;