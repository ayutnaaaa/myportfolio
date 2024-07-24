"use client";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/utils/firebase";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "/img/1.jpg",
  },
  {
    color: "#d6d7dc",
    src: "/img/2.png",
  },
  {
    color: "#e3e3e3",
    src: "/img/3.png",
  },
  {
    color: "#21242b",
    src: "/img/4.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "/img/5.jpg",
  },
  {
    color: "#e5e0e1",
    src: "/img/6.jpg",
  },
  {
    color: "#d7d4cf",
    src: "/img/7.jpg",
  },
  {
    color: "#e1dad6",
    src: "/img/8.jpg",
  },
];

export default () => {
  // const [slider1, setSlider1] = useState([]);
  // const [slider2, setSlider2] = useState([]);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const slidingListReff = ref(storage, "slidingImages/");
  // useEffect(() => {
  //   listAll(slidingListReff).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         // console.log(url);
  //         setSlider1((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  const sliding2ListReff = ref(storage, "sliding2Images/");
  // useEffect(() => {
  //   listAll(sliding2ListReff).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         // console.log(url);
  //         setSlider2((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div ref={container} className={`${styles.slidingImages} `}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={`${styles.project} bg-purple-200`}
              // style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={project.src}
                  // className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={`${styles.project} bg-blue-200`}
              // style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={project.src}
                  // className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
};
