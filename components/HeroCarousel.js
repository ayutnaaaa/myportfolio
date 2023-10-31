"use client"
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  snapshot,
  docs,
  doc,
} from "firebase/storage";
import { storage } from "@/utils/firebase";
import Description from "./Description";

const heroImage = [
  { imgUrl: "/img/frontend2.jpg", alt: "1" },
  { imgUrl: "/img/full.jpg", alt: "1" },
  { imgUrl: "/img/mobile.jpg", alt: "1" },
  { imgUrl: "/img/port2.jpg", alt: "1" },
];

export default () => {
  // const [heroImage, setHeroImage] = useState([]);

  const carListReff = ref(storage, "carouselImages/");

  // useEffect(() => {
  //   listAll(carListReff).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         // console.log(url);
  //         // setHeroImage(url);
  //         setHeroImage((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center mt-5 ">
      <div className="hero-carousel w-[400px] lg:w-[500px] m-auto md:ml-20 ">
        <Carousel
          className=""
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          {heroImage.map((hero, i) => (
            <div
              key={i}
              className="flex m-auto h-[400px] w-[300px] sm:w-[350px] sm:h-[500px] md:w-[450px] md:h-[550px]"
              // className="flex m-auto h-30vh"
            >
              <img
                src={hero.imgUrl}
                alt={hero.alt}
                // width={400}
                // height={200}
                className="object-contain"
                key={i}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <Description />
    </div>
  );
};
