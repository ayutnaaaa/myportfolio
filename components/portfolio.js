"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";

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
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="m-2 grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 "
      id="#works/portfolia"
    >
      {variable.map((prod) => (
        <div className="flex flex-col m-2 p-3 justify-between items-center text-baseOrange w-[300px] h-[300px] border-4 border-baseReddishBrown rounded-2xl ">
          <p>PORTFOLIA</p>
          <p>Name: {prod}</p>
          <img src="/img/zur1.jpg" />
          <Link href="/works/${id}">
            <button className="border 1 cursor-pointer border-baseRed px-6 py-1 bg-baseRed rounded-lg hover:bg-baseReddishBrown hover:text-baseYellow">
              Зочлох
            </button>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};
