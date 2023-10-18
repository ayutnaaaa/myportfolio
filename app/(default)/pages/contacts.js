"use client";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import facebook from "@/public/icon/facebook.png";
import instagramm from "@/public/icon/instagramm.jpg";
import Image from "next/image";
export default () => {
  return (
    <div className="text-white flex flex-col" id="contacts">
      <motion.img
        initial={{ x: -100, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "tween" }}
        src="/img/zur1.jpg"
      />
      <div className="flex m-4 justify-evenly items-center ">
        <Image
          src={facebook}
          alt="img"
          width={30}
          height={30}
          className="rounded-2xl"
        />{" "}
        <p className="mx-3">facebo ok</p>
        <Image
          src={instagramm}
          alt="img"
          width={30}
          height={30}
          className="rounded-2xl"
        />
        <p className="mx-3">instagram</p>
      </div>
    </div>
  );
};
