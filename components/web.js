"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { DataContext } from "@/context/data";
import { useContext } from "react";

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
      className="flex flex-wrap justify-center"
      id="#works/web"
    >
      {ctx.works.map((prod, i) => (
        <div
          key={i}
          className="relative z-20 text-green-200 flex flex-col m-2 p-3 justify-between  items-center  w-[300px] h-[400px] border-4 border-green-200 rounded-2xl "
        >
          <div>
            <div className="flex items-center px-5 justify-between">
              <p className="text-base   mx-3">Төрөл: </p>
              <p className="text-lg ">{prod.work.type}</p>
            </div>
            <div className="flex items-center px-5 justify-between">
              <p className="text-base   mx-3">Work name: </p>
              <p className="text-lg ">{prod.work.name}</p>
            </div>
            <div className="flex items-center px-5 justify-between">
              <p className="text-base   mx-3">Work detail: </p>
              <p className="text-lg ">{prod.work.detail}</p>
            </div>
            <div className="flex items-center  px-5 justify-between">
              <p className="text-base  mx-3">Date:</p>
              <p className="text-lg ">{prod.work.date}</p>
            </div>
          </div>
          <img
            src={prod.photo}
            className="w-full h-full absolute top-0 left-0 -z-50 opacity-80"
          />
          <Link href={prod.work.link} target="blank">
            <button className=" text-xl cursor-pointer text-baseOne px-10 py-3 bg-baseThree rounded-lg hover:bg-baseFive">
              Visit site
            </button>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
