"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import zur from "@public/img/c2.avif";

export default () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className=" flex justify-center"
    >
      {/* <Link
        href={"/"}
        className="relative w-[185px] h-[185px] flex justify-center items-center group"
      > */}
      <Image
        src={zur}
        width={142}
        height={148}
        alt=""
        className="animate-spin-slow  max-w-[142px] max-h-[148px]"
      />
      {/* <HiArrowRight className="absolute text-white text-4xl group:hover:translate-x-2 transition-all duration-300" /> */}
      {/* </Link> */}
    </motion.div>
  );
};
