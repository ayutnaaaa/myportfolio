"use client";

import ProjectButton from "../ProjectButton";

export default () => {
  return (
    <div className="relative h-screen w-screen text-white">
      <ProjectButton className="" />
      <p className="absolute bottom-2/3 text-center ml-10 text-4xl lg:text-6xl xl:text-8xl">
        FREELANCE DEVELOPER
      </p>
      <div className=" absolute h-full w-full  right-0 bottom-0 -z-10">
        <div className=" bg-explosion bg-cover xl:bg-right bg-no-repeat w-full h-full absolute translate-z-0"></div>
      </div>
    </div>
  );
};

//https://www.youtube.com/watch?v=qp0-L_M3Ad4&t=3032s  lesson 2:50
