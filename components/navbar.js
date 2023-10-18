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
  { href: "/about", text: "About" },
  { href: "/products", text: "Products" },
  { href: "/contacts", text: "Contacts" },
];
export default () => {
  // const path = usePathname();
  return (
    <header className=" w-full flex h-[30px] justify-between text-white">
      <Link href="/" className="flex items-center gap-1">
        {/* <Image src="/img/zur1.jpg" width={27} height={27} alt="logo" /> */}
        <p className="text-red-400">
          Ayut<span className="text-white">aa</span>
        </p>
      </Link>
      <div className="flex items-center ">
        {links.map((link) => (
          <li className="pr-[2.5rem] list-none" key={link.href}>
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
