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
import HeroCarousel from "@/components/HeroCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Works from "./pages/works";

import Contacts from "./pages/contacts.js";

import SlidingImage from "@/components/SlidingImage";
import Landing from "@/components/Landing";
import PreLoader from "@/components/PreLoader";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProjectButton from "@/components/ProjectButton";
import Info from "@/components/Info";

export default () => {
  const router = useRouter();
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
    <div className="pt-16 flex flex-col">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exist={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        {/* <Landing /> */}

        <Info />
        <HeroCarousel />
        <SlidingImage />
        <HorizontalScroll />
        <Works />
        <Contacts />
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
