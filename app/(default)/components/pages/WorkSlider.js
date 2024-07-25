// icons
import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import Link from "next/link";
import 'swiper/css'
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules";
import { useContext, useState } from "react";
import { DataContext } from "@/context/data";
  // data
  
  const workSlides = {
    slides: [
      {
        images: [
          {
            title: 'title',
            path: '/img/mobile.jpg',
          },
          {
            title: 'title',
            path: '/img/web.jpg',
          },
          {
            title: 'title',
            path: '/img/frontend.jpg',
          },
          {
            title: 'title',
            path: '/img/port2.jpg',
          },
        ],
      },
      // {
      //   images: [
      //     {
      //       title: 'title',
      //       path: '/img/mobile.jpg',
      //     },
      //     {
      //       title: 'title',
      //       path: '/img/web.jpg',
      //     },
      //     {
      //       title: 'title',
      //       path: '/img/frontend.jpg',
      //     },
      //     {
      //       title: 'title',
      //       path: '/img/port2.jpg',
      //     },
      //   ],
      // },
    ],
  };
  const WorkSlider = () => {
    const ctx = useContext(DataContext);
    // console.log(ctx?.allWeb)

    return (
        <Swiper 
        spaceBetween={10}
        pagination={{
            clickable: true
        }}
        modules={[ Pagination]}
        
        >
            {ctx?.allWeb.map((slide, index) => { 
              
                //  {workSlides.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                      <div className="flex h-[300px] md:h-[400px] lg:h-[500px] justify-center flex-wrap sm:flex-nowrap">
                      {/* <div className="bg-red-200 grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer"> */}
                         
                          <img
                            src={slide?.photo}
                            className="w-2/3 sm:w-1/2 mx-3 border border-gray-400"
                          />
                          <div className="flex flex-col justify-center items-center md:px-4">
                            <div className="flex text-[12px] w-[180px] justify-between">
                              <p>{slide?.work?.type}</p>
                              <p>{slide?.work?.date}</p>
                            </div>
                            <p className="uppercase text-blue-300 lg:text-[40px] flex flex-wrap">{slide?.work?.name}</p>
                            <p className="text-sm w-full text-blue-300">{slide?.work?.detail}</p>
                            <Link href={slide?.work?.link} target="blank">
                              <button className="text-xl mt-3 cursor-pointer text-purple-700 px-10 py-3 bg-purple-300 rounded-lg hover:bg-baseFive">
                                Visit
                              </button>
                            </Link>
                          </div>
                        
                      </div>
                    </SwiperSlide>
                  //    <SwiperSlide key={index}>
                  //    <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                  //      {slide.images.map((image, index) => {
                  //        return (
                  //          <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  //            <div className="flex items-center justify-center relative overflow-hidden group">
                  //              <Image src={image.path} width={300} height={200} alt=""/>
                  //              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#d9abff] to-[#4a22bd] opacity-0
                  //                group-hover:opacity-80 transition-all duration-700">
                  //              </div>
                  //              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                  //                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  //                  <div className="delay-100">LIVE</div>
                  //                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                  //                  <div
                  //                    className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"
                  //                  ><BsArrowRight/></div>
                  //                </div>
                  //              </div>
                  //            </div>
                  //          </div>
                  //        )
                  //      })}
                  //    </div>
                  //  </SwiperSlide>
                )
            } )}
        </Swiper>
    );
  };
  
  export default WorkSlider;