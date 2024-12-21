import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import images
import swiper1 from "./../../../assets/swiper1.webp";
import swiper2 from "./../../../assets/swiper2.webp";
import swiper3 from "./../../../assets/swiper3.webp";
import swiper4 from "./../../../assets/swiper4.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

// import './style.css';

// import required modules
import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";

export default function ImgSwiper() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        zoom={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Zoom, Navigation, Pagination]}
        className=" rounded-md overflow-hidden  "
      >
        <SwiperSlide>
          <div className="swiper-zoom-container ">
            <img className="w-full" src={swiper1} alt=" swiper1 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="w-full" src={swiper2} alt=" swiper2 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="w-full" src={swiper3} alt=" swiper3 " />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img className="w-full" src={swiper4} alt=" swiper4 " />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
