"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useEffect } from "react";
// import gsap from "gsap";

export default () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;

  //   useEffect(() => {
  //     gsap.set(secondText.current, {
  //       left: secondText.current.getBoundingClientRect().width,
  //     });
  //     requestAnimationFrame(animate);
  //   }, []);

  //   const animate = () => {
  //     if (xPercent > 0) {
  //       xPercent = -100;
  //     }
  //     gsap.set(firstText.current, { xPercent: xPercent });
  //     gsap.set(secondText.current, { xPercent: xPercent });
  //     requestAnimationFrame(animate);
  //     xPercent += 0.1;
  //   };

  return (
    <div className="flex relative justify-center w-100vw h-20vh lg:h-[550px]">
      <img
        src="/img/zur1.jpg"
        // fill={true}
        alt="background"
        // width={}
        // height={50}
        className="w-full h-full"
      />
      <p className="text-3xl absolute bottom-3 m-5 text-white">
        Freelance Developer
      </p>
      {/* <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>

        <p ref={secondText}>Freelance Developer -</p>
      </div>
      </div> */}
    </div>
  );
};
