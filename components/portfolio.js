"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { DataContext } from "@/context/data";
import { useContext } from "react";
const variable = ["private", "public", "organization"];
const web = ["game", "dondon", "key"];
const mobile = ["lon", "find", "new"];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export default () => {
  const ctx = useContext(DataContext);
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="m-2 grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 "
      id="#works/portfolia"
    >
      {ctx.portfolio.map((prod, i) => (
        <div
          key={i}
          className="flex flex-col m-2 p-3 justify-between items-center  w-[300px] h-[400px] border-4 border-baseOne rounded-2xl "
        >
          <div className="flex items-center px-5 justify-between">
            <p className="text-base text-baseSix mx-3">Төрөл: </p>
            <p className="text-lg text-baseOne">{prod.work.type}</p>
          </div>
          <div className="flex items-center px-5 justify-between">
            <p className="text-base text-baseSix mx-3">Work name: </p>
            <p className="text-lg text-baseOne">{prod.work.name}</p>
          </div>
          <div className="flex items-center px-5 justify-between">
            <p className="text-base text-baseSix mx-3">Work detail: </p>
            <p className="text-lg text-baseOne">{prod.work.detail}</p>
          </div>
          <div className="flex items-center  px-5 justify-between">
            <p className="text-base text-baseSix mx-3">Date:</p>
            <p className="text-lg text-baseOne">{prod.work.date}</p>
          </div>
          <img src={prod.photo} className="w-[100px] h-[100px]" />
          <Link href={prod.work.link} target="blank">
            <button className="border text-xl cursor-pointer text-yellow-50 px-16 py-6 bg-baseThree rounded-lg hover:bg-baseFive">
              Visit site
            </button>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
