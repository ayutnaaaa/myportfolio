"use client";
import css from "./style.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./anim";
import { useRef } from "react";
export default () => {
  const phrase =
    "jkadjf akjadk jakj akfjd ajdsdkjf ajdk jakdja dfsad adfa  af add";
  const description = useRef(null);
  const isView = useInView(description);
  return (
    <div
      ref={description}
      className={`${css.description} text-baseOne mt-[10px] mr-3 px-10 py-3 text-xl sm:text-2xl lg:text-3xl md:items-center`}
    >
      <div className={css.body}>
        <p>
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
        </p>
        {/* <p>dfd dfad</p> */}
        {/* <motion.p variants={opacity} animate={isView ? "open" : "closed"}>
          dkafk ahdhaf ajdhdfjah ahdjfhajdj adjfhj
        </motion.p> */}
        {/* <div data-scroll data-scroll-onSuspendCapture={0.1}>
          <div className={css.button}>
            <p>ABout me</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
