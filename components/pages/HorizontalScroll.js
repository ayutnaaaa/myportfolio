"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/utils/firebase";

// const cards = [
//   { url: "img/web.jpg", id: 1, title: "1" },
//   { url: "img/port.jpg", id: 2, title: "1" },
//   { url: "img/frontend.jpg", id: 3, title: "1" },
//   { url: "img/full.jpg", id: 4, title: "1" },
//   { url: "img/web.jpg", id: 1, title: "1" },
//   { url: "img/port.jpg", id: 2, title: "1" },
//   { url: "img/frontend.jpg", id: 3, title: "1" },
//   { url: "img/full.jpg", id: 4, title: "1" },
// ];

export default () => {
  const [cards, setCards] = useState([]);
  const horListReff = ref(storage, "horizontalImages/");
  useEffect(() => {
    listAll(horListReff).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // console.log(url);
          setCards((prev) => [...prev, url]);
        });
      });
    });
  }, []);

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
                <img src={card} className="w-[30vw] h-[30vh] object-cover" />
                {/* <p className="absolute top-10 left-20 text-white">{card.id}</p> */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
