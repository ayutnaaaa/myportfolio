"use client"
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "@/utils/firebase";
import Description from "./Description";

export default () => {
  const [heroImage, setHeroImage] = useState([]);
  const carListReff = ref(storage, "carouselImages/");

  useEffect(() => {
    listAll(carListReff).then((res) => {
      let images = []
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          images.push( url)
        });
      });
      setHeroImage(images);

    });
  }, []);

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
            >
              <img
                src={hero}
                alt={hero}
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