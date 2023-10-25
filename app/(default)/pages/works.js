"use client";
import Image from "next/image";

import { useState } from "react";
import Portfolia from "@/components/portfolio";
import Web from "@/components/web";
import Mobile from "@/components/mobile";
import { usePathname } from "next/navigation";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
const variable = ["Portfolio", "Web App", "Mobile App"];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
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
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const handle = (e) => {
    setActive(e);
  };

  return (
    <div id="works">
      {/* <HorizontalScroll /> */}
      <div className="flex text-baseBrown my-3 mx-6 justify-center">
        {variable.map((e, i) => (
          <button
            key={i}
            onClick={() => handle(e)}
            className={`${
              active
                ? "border-b-2 border-baseOne text-baseOne font-bold cursor-pointer p-2 mx-3 rounded-xl "
                : ""
            } border-b-2 border-baseFive cursor-pointer p-2 mx-3 rounded-xl hover:bg-baseFive `}
            // className=""
          >
            {e}
          </button>
        ))}
      </div>
      {active === "Mobile App" ? (
        <div className="flex justify-center">
          <Mobile />
        </div>
      ) : active === "Web App" ? (
        <div className="flex justify-center">
          <Web />
        </div>
      ) : (
        <div className="flex justify-center">
          <Portfolia />
        </div>
      )}
    </div>
  );
};

// const HorizontalScroll = () => {
//   const targetRef = (useRef < HTMLDivElement) | (null > null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });
//   const x = useTransform(scrollYProgress, [1, 0], ["1%", "-65%"]);
//   return (
//     <section className="relative">
//       <div className=" top-0 sticky items-center overflow-hidden my-6">
//         <motion.div style={{ x }} className="flex gap-4 w-[300vw] bg-green-300">
//           {cards.map((card) => {
//             return (
//               <div className="relative m-3">
//                 <img
//                   src={card.url}
//                   className="w-[30vw] h-[30vh] object-cover"
//                 />
//                 <p className="absolute top-10 left-20 text-white">{card.id}</p>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// type CardType = {
//   url:String;
//   title: String;
//   id:number
// }

// const defaultSelect = () => {
//   let key = ["1"];
//   switch (pathname) {
//     case "/works":
//       key = ["1"];
//       break;
//     case "/works/web":
//       key = ["2"];
//       break;
//     case "/works/mobile":
//       key = ["3"];
//       break;
//   }
// };

// const handle = (i) => {
//   console.log(i);
//   switch (i) {
//     case "0":
//       router.push("/works");
//       break;
//     case "1":
//       router.push("/works/web");
//       break;
//     case "2":
//       router.push("/works/mobile");
//       break;
//   }
// };

{
  /* {links.map((link, i) => (
          <Link href={link.href}>
            <div
              // className={`link ${
              //   pathname === link.href ? "text-green-300" : ""
              // }`}
              className="border-b-2 border-baseBrown cursor-pointer p-2 mx-3 rounded-xl hover:bg-baseOrange hover:border-baseReddishBrown hover:text-baseReddishBrown"
            >
              {link.text}
            </div>
          </Link>
        ))} */
}
