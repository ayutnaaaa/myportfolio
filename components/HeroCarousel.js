import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const heroImage = [
  { imgUrl: "/img/zur1.jpg", alt: "1" },
  { imgUrl: "/img/zur2.jpg", alt: "1" },
  { imgUrl: "/img/zur3.jpg", alt: "1" },
  { imgUrl: "/img/zur4.jpg", alt: "1" },
];
export default () => {
  return (
    <div className="hero-carousel ">
      <Carousel
        className=""
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImage.map((hero) => (
          <div className="flex m-auto h-[400px] w-[300px] sm:w-[350px] sm:h-[500px] md:w-[450px] md:h-[600px] lg:w-[700px]">
            <img
              src={hero.imgUrl}
              alt={hero.alt}
              // width={400}
              // height={200}
              className="object-cover "
              key={hero.alt}
            />
          </div>
        ))}
      
      </Carousel>
    </div>
  );
};
