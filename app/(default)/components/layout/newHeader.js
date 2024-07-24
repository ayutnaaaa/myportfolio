"use client"
import Image from "next/image";
import Link from "next/link";
import Socials from "../pages/Socials";
import {Dropdown, DropdownItem, DropdownTrigger, DropdownMenu , Button} from "@nextui-org/react"
import React , {useState, useEffect} from "react"
import t from "@/lib/locale"
import ThemeSwitcher from "../pages/ThemeSwitcher";

const newHeader = () => {
    const [language, setLanguage] = useState("en")
  
// console.log(language)

    useEffect(() => {
        const lang = localStorage.getItem('my-language')
        if(lang) {
          setLanguage([lang])
        } else {
          localStorage.setItem('my-language', 'en')
        }
        // observe
      }, [])

      const handleChangeLanguage = (event) => {
        console.log(event.currentKey)
        setLanguage([event.currentKey])
        localStorage.setItem('my-language', event.currentKey)
        location.reload()
      }

      const toggleMenu = () => {
        setIsOpen(!isOpen)
      }
    return (
        <header className="absolute text-white z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className=" w-full mx-auto">
                <div className="flex flex-col px-10 md:flex-row justify-between items-center gap-y-6 py-4">
                    <Link href={"/"}>
                        <p className="text-3xl text-purple-300 font-bold">Ayut<span className="text-blue-300">naa</span></p>
                        {/* <Image
                            src={""}
                            width={220}
                            height={48}
                            alt=""
                            priority={true}
                        /> */}
                    </Link>
                    {/* <ThemeSwitcher/> */}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                            variant="light" 
                            color="secondary"
                            className="text-white uppercase hover:text-purple-400"
                            // className={`uppercase ${pathname.includes('/') ||  pathname.includes('/') || activeSectionId === 'expo' ? 'text-black' : ''}`} 
                            // endContent={<ChevronDownIcon width={15} height={15} />}
                            >
                            {/* {language} */}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Language"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={language}
                            color="secondary"
                            
                            onSelectionChange={handleChangeLanguage}
                        >
                            <DropdownItem key="mn">{t('lang.mongolian')}</DropdownItem>
                            <DropdownItem key="en">{t('lang.english')}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {/* <Socials/> */}
                </div>
            </div>
        </header>
    )
}
export default newHeader;