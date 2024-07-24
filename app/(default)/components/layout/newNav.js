"use client"
import { HiHome , HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from "react-icons/hi2";
export const navData = [
    {name: "Нүүр", path: "/", icon: <HiHome/>},
    // {name: "about", path: "/about" , icon: <HiUser/>},
    {name: "Үйлчилгээ", path: "/services" , icon: <HiRectangleGroup/>},
    {name: "Төсөл", path: "/work" , icon: <HiViewColumns/>},
    {name: "Холбоо барих", path: "/contact" , icon: <HiEnvelope/>},
    
]

import Link from "next/link"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


const newNav = () => {
    const router = useRouter();
    const pathname = usePathname();
   
    // console.log(pathname)
    return (
        <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
        bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
          
            <div className="text-white flex w-full xl:flex-col items-center 
            justify-between xl:justify-center gap-y-10 px-4 md:px-40 h-[80px]
            xl:px-0 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full
            ">
                {navData.map((link, index) => {
                    return (
                        <Link 
                            key={index} 
                            className={`${link.path === pathname && "text-purple-800"} 
                            relative flex items-center hover:text-purple-800 transition-all group duration-300`} 
                            href={link.path}>

                            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                                <div className="bg-white relative flex text-purple-800 items-center p-[6px] rounded-[3px]">
                                    <div className="text-12px leading-none font-semibold capitalize">{link.name}</div>
                                    <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute -right-2"></div>
                                </div>
                               
                            </div>
                            <div>{link.icon}</div>
                        </Link>
                    )
                })}
                
            </div>
        </nav>
    )
}

export default newNav;