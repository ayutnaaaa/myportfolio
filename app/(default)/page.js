"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import HeroCarousel from "@/components/pages/HeroCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Works from "./components/pages/works";

import Contacts from "./components/pages/contacts.js";

import SlidingImage from "@/components/pages/SlidingImage";
import Landing from "@/components/pages/Landing";
import PreLoader from "@/components/pages/PreLoader";
import HorizontalScroll from "@/components/pages/HorizontalScroll";
import ProjectButton from "@/app/(default)/components/pages/ProjectButton";
import Info from "@/components/pages/Info";
import Freelancer from "@/components/pages/Freelancer";
import Frontend from "@/components/pages/Frontend";

import Home from "./home/page"
import About from "./about/page"
import Work from "./work/page"
import Contact from "./contact/page"
import Transition from "./components/pages/transition";

export default () => {
  const router = useRouter();
  console.log(router.route)
  const [items, setItems] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  // https://www.youtube.com/watch?v=uikATllLdRc lesson nexts firebase
  //https://www.youtube.com/watch?v=wDXlICv01gw page transitions
  useEffect(() => {
    const q = query(collection(db, "test"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = [];
      querySnapshot.forEach((doc) => {
        itemArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemArr);
    });
  }, []);

  return (
    <div className="h-full">
      <AnimatePresence mode="wait">
        {/* {isLoading && <PreLoader />} */}
      </AnimatePresence>
      <motion.div
        key={router.route} className="h-full"
      >
       
        <Home/>
        {/* <About/>
        <Contact/>
        <Work/> */}
         {/* <Transition/> */}

        {/* <Landing /> */}
        {/* <Info /> */}
        {/* <HeroCarousel /> */}
        {/* <SlidingImage /> */}
        {/* <HorizontalScroll /> */}
        {/* <Frontend/> */}
        {/* <Freelancer/> */}
        {/* <Works /> */}
        {/* <Contacts /> */}
      </motion.div>
    </div>
  );
};
// https://www.youtube.com/watch?v=Powk6f1qe3k&t=296s  lesson framer

/* <motion.div
        // key={router.route}
        initial="initialState"
        animate="animaState"
        exit="exitState"
        transition={{duration: 0.75}}
        variants={{initialState: {
          opacity: 0
        },
        animateState: {
          opacity: 1
        },
        exitState: {
          opacity: 0
        }
      }}
        > */
