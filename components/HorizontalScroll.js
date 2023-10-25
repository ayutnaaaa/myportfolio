"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards = [
  { url: "img/zur1.jpg", id: 1, title: "1" },
  { url: "img/zur2.jpg", id: 2, title: "1" },
  { url: "img/zur3.jpg", id: 3, title: "1" },
  { url: "img/zur4.jpg", id: 4, title: "1" },
  { url: "img/zur1.jpg", id: 1, title: "1" },
  { url: "img/zur2.jpg", id: 2, title: "1" },
  { url: "img/zur3.jpg", id: 3, title: "1" },
  { url: "img/zur4.jpg", id: 4, title: "1" },
];

export default () => {
  const targetRef = (useRef < HTMLDivElement) | (null > null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [1, 0], ["1%", "-65%"]);
  return (
    <div className="relative">
      <div className=" top-0 sticky items-center overflow-hidden my-6">
        <motion.div style={{ x }} className="flex gap-4 w-[300vw] ">
          {cards.map((card, i) => {
            return (
              <div key={i} className="relative m-3">
                <img
                  src={card.url}
                  className="w-[30vw] h-[30vh] object-cover"
                />
                <p className="absolute top-10 left-20 text-white">{card.id}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
