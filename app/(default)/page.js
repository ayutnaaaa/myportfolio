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
import { db } from "../../utils/firebase";
import HeroCarousel from "@/components/HeroCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Works from "./pages/works";
import Contacts from "./pages/contacts.js";
import About from "./pages/about";

export default function Home() {
  const router = useRouter();
  const [items, setItems] = useState("");

  // console.log(items);

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
      <AnimatePresence>
        {/* <motion.div
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
        > */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exist={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          {/* <section className="w-screen m-2 h-2/6 border-2 border-baseReddishBrown">
            <div className="flex max-xl:flex-col ">
              <p className="small-text text-white">Танилцуулга</p>
              <Image src="/img/zur2.jpg" alt="img" width={30} height={30} />
            </div>
          </section> */}

          <HeroCarousel />
          <Works />
          <About />
          <Contacts />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
