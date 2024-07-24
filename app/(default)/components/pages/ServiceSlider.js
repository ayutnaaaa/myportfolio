// icons
import {
    RxCrop,
    RxPencil2, 
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
  } from "react-icons/rx";

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules";
  // data
  const serviceData = [
    {
      icon: <RxCrop />,
      title: 'Mobile app',
      description: 'UX UI загварын дагуу хөгжүүлэлт хийгдэнэ.',
    },
    {
      icon: <RxPencil2 />,
      title: 'UX UI',
      description: 'Харилцагчын зорилго, хүсэлтийн дагуу дизайн хийгдэнэ.',
    },
    {
      icon: <RxDesktop />,
      title: 'Web site',
      description: 'UX UI загварын дагуу хөгжүүлэлт хийгдэнэ.',
    },
    // {
    //   icon: <RxReader />,
    //   title: 'Copywriting',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // },
    // {
    //   icon: <RxRocket />,
    //   title: 'SEO',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // },
  ];
  
  const ServiceSlider = () => {
    return (
        <Swiper breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween:15
            },
            770: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }}
        freeMode={true}
        pagination={{
            clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
        >
            {serviceData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="bg-[rgba(65, 47, 123,0.15)] h-max rounded-lg px-6 py-8 flex 
                            md:flex-col  gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                            <div className="text-4xl text-purple-300 mb-4">{item.icon}</div>
                            <div className="mb-8">
                                <div className="mb-2 text-lg">{item.title}</div>
                                <p className="max-w-[350px] leading-normal">{item.description}</p>
                            </div>
                            {/* <div className="text-3xl">
                                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-purple-300 transition-all duration-300"/>
                            </div> */}
                        </div>

                    </SwiperSlide>
                )
            } )}
        </Swiper>
    );
  };
  
  export default ServiceSlider;