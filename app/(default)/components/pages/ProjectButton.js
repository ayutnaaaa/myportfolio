"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const ProjectButton= () => {
  return (
    <motion.div
      className="mx-auto xl:mx-0"
    >
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-cover bg-center bg-no-repeat group"
      > 
      <div className="animate-spin-slow w-full rounded-[50%] bg-green-300 h-full max-w-[142px] max-h-[148px]"></div>
      {/* <Image
        src="/img/moon.jpg"
        width={142}
        height={148}
        alt=""
        className="animate-spin-slow w-full h-full max-w-[142px] max-h-[148px]"
      /> */}
      <HiArrowRight className="absolute text-white text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </motion.div>
  );
}

export default ProjectButton
