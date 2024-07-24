"use client";
import css from "./style.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./anim";
import { useRef } from "react";
export default () => {
  const phrase = "Portfolio Web-App Mobile-App Development";
  const description = useRef(null);
  const isView = useInView(description);
  return (
    <div
      ref={description}
      className="text-baseOne flex flex-col items-center  mt-[10px] md:mr-10 lg:mr-12 xl:mr-40 px-10  py-3 text-xl sm:text-2xl lg:text-3xl "
      // className={`${css.description} text-baseOne mt-[10px] mr-3 px-10 py-3 text-xl sm:text-2xl lg:text-3xl md:items-center`}
    >
      <div className={css.body}>
        <motion.p
          className="text-blue-300 tracking-[10px] mb-3 "
          initial={{ x: -100, y: 0, scale: 0 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "tween" }}
        >
          PORTFOLIO
        </motion.p>
        <motion.p
          className="text-red-200 tracking-[10px] mb-3 "
          initial={{ x: -100, y: 0, scale: 0 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "tween" }}
        >
          WEB APP
        </motion.p>
        <motion.p
          className="text-green-200 tracking-[10px] mb-3 "
          initial={{ x: -100, y: 0, scale: 0 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "tween" }}
        >
          MOBILE APP
        </motion.p>{" "}
        <motion.p
          className="text-purple-300 tracking-[10px] mb-3 "
          initial={{ x: -100, y: 0, scale: 0 }}
          animate={{ x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "tween" }}
        >
          DEVELOPMENT
        </motion.p>
        {/* <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span className={css.mask}>
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  animate={isView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>{" "}
              </span>
            );
          })}
        </p> */}
      </div>
    </div>
  );
};
