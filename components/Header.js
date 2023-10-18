"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const navIcons = [
  { src: "/img/zur2.jpg", alt: "search" },
  { src: "/img/zur3.jpg", alt: "heart" },
  { src: "/img/zur4.jpg", alt: "user" },
];

const links = [
  { href: "/", text: "Home" },
  { href: "#works", text: "Works" },
  { href: "#about", text: "About" },
  { href: "#contacts", text: "Contacts" },
];
export default () => {
  // const path = usePathname();
  return (
    <header className="w-screen fixed z-10 flex h-14 bg-baseBlack lg:h-20 text-baseYellow justify-between">
      <Link href="/" className="flex items-center ">
        <p className="text-baseOrange ml-6 text-lg sm:text-2xl sm:mx-4 md:text-3xl lg:text-4xl xl:text-6xl xl:pl-4 font-bold">
          Ayut<span className="text-baseYellow">aa</span>
        </p>
      </Link>
      <div className="flex items-center mr-6 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl ">
        {links.map((link) => (
          <li
            className="px-2 md:px-4 lg:px-5 xl:px-6 list-none hover:text-baseOrange hover:font-semibold"
            key={link.href}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                // className={`${link.href === path ? "text-yellow-300 font-bold": ""}`}
                href={link.href}
              >
                {link.text}
              </Link>
            </motion.div>
          </li>
        ))}
      </div>

      {/* <div className="flex">
        {navIcons.map((icon) => (
          <Image
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            width={27}
            height={27}
            className="mx-4"
          />
        ))}
      </div> */}
    </header>
  );
};
