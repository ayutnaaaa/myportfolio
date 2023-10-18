"use client";
import Image from "next/image";

import { useState } from "react";
import Portfolia from "../../../components/portfolio";
import Web from "../../../components/web";
import Mobile from "../../../components/mobile";
import { usePathname } from "next/navigation";
const variable = ["Portfolio", "Web", "Mobile"];

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default () => {
  const pathname = usePathname();
  const [active, setActive] = useState("Web");
  const handle = (e) => {
    setActive(e);
  };

  return (
    <div>
      <div className="flex text-baseBrown my-3 mx-6">
        {variable.map((e, i) => (
          <button
            onClick={() => handle(e)}
            className={`${
              active
                ? "border-b-2 border-baseBrown cursor-pointer p-2 mx-3 rounded-xl "
                : ""
            } border-b-2 border-baseBrown cursor-pointer p-2 mx-3 rounded-xl hover:bg-baseOrange hover:border-baseReddishBrown hover:text-baseReddishBrown `}
            // className=""
          >
            {e}
          </button>
        ))}
      </div>
      {active === "Mobile" ? (
        <Mobile />
      ) : active === "Web" ? (
        <Web />
      ) : (
        <Portfolia />
      )}
    </div>
  );
};

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
