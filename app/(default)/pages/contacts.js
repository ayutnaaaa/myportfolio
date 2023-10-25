"use client";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import facebook from "@/public/icon/facebook.png";
import instagramm from "@/public/icon/instagramm.jpg";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { DataContext } from "@/context/data";
export default () => {
  const ctx = useContext(DataContext);
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    desc: "",
  });
  // console.log(data);

  const send = () => {
    ctx.userData(data);
  };
  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <motion.div
      initial={{ x: -100, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, type: "tween" }}
      className="text-white flex flex-col w-screen p-5 justify-center items-center "
      id="contacts"
    >
      <div className="flex flex-col w-[350px] text-baseBlack">
        <input
          label="Name"
          placeholder="Name"
          placeholder-color="white"
          name="name"
          onChange={handle}
          className="m-2 rounded-xl px-5 py-2 bg-baseOne"
        />
        <input
          label="Company name"
          placeholder="Company name"
          name="company"
          onChange={handle}
          className="m-2 rounded-xl px-5 py-2 bg-baseOne"
        />
        <input
          label="Email"
          placeholder="Email"
          name="email"
          onChange={handle}
          className="m-2 rounded-xl px-5 py-2 bg-baseOne"
        />
        <input
          label="Phone"
          placeholder="phone"
          name="phone"
          onChange={handle}
          className="m-2 rounded-xl px-5 py-2 bg-baseOne"
        />
        <input
          label="Desc"
          placeholder="Description"
          name="desc"
          onChange={handle}
          className="m-2 rounded-xl px-5 py-2 bg-baseOne"
        />
        <button
          className="bg-baseFive mt-5 w-36 h-14 rounded-2xl m-auto text-2xl hover:bg-baseThree"
          onClick={send}
        >
          Send
        </button>
      </div>

      <div className="flex m-10">
        <Link
          href="/"
          className="flex items-center justify-center w-30vw h-10vh"
        >
          <Image
            src={facebook}
            alt="img"
            width={30}
            height={30}
            className="rounded-2xl hover:scale-150 transition-all ease-out m-6"
          />
        </Link>
        <Link href="/" className="">
          <Image
            src={instagramm}
            alt="img"
            width={30}
            height={30}
            className="rounded-2xl hover:scale-150 transition-all ease-out m-6"
          />
        </Link>
      </div>
    </motion.div>
  );
};
