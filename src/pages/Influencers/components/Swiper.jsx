import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.css";
import { IoSearch } from "react-icons/io5";

const SwiperComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [
    {
      title: "الكل",
      count: "",
      color: "#999",
      icon: <i className="sicon-store-alt" style={{ fontSize: "20px" }}></i>,
    },
    {
      title: "اطفال",
      count: 56,
      color: "#999",
      icon: <i className="sicon-users" style={{ fontSize: "20px" }}></i>,
    },
    {
      title: "جمال و عناية",
      count: 93,
      color: "#999",
      icon: (
        <i className="sicon-pencil-paintbrush" style={{ fontSize: "20px" }}></i>
      ),
    },
    {
      title: "اخبار",
      count: 39,
      color: "#999",
      icon: <i className="sicon-megaphone" style={{ fontSize: "20px" }}></i>,
    },
    {
      title: "تقنية",
      count: 55,
      color: "#999",
      icon: <i className="sicon-computer" style={{ fontSize: "20px" }}></i>,
    },
    {
      title: "تطوير الاعمال",
      count: 54,
      color: "#999",
      icon: <i className="sicon-graph-line" style={{ fontSize: "20px" }}></i>,
    },
    {
      title: "فتون",
      count: 50,
      color: "#999",
      icon: <i className="sicon-music" style={{ fontSize: "20px" }}></i>,
    },
    {
      title: "طبخ وطعام",
      count: 98,
      color: "#999",
      icon: <i className="sicon-fork-knife" style={{ fontSize: "20px" }}></i>,
    },
    {
      title: "ترفية والعاب",
      count: 88,
      color: "#999",
      icon: (
        <i
          className="sicon-game-controller-alt"
          style={{ fontSize: "20px" }}
        ></i>
      ),
    },
  ];

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          // when window width is >= 640px
          400: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          980: {
            width: 768,
            slidesPerView: 5,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        grabCursor={true}
        style={{ overflow: "hidden" }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-item ${
              selectedIndex === index ? "selected" : ""
            }`}
            style={{
              borderColor: item.color,
              backgroundColor:
                selectedIndex === index ? "#007bff61" : "#e8f1f129",
            }}
            onClick={() => handleCardClick(index)}
          >
            <div className="flexheadClass">
              <div
                className="icon-Class"
                style={{ color: item.color, position: "relative" }}
              >
                {item.icon}
              </div>
              <div className="clear">
                <span className="clear-icon">x</span>
              </div>
            </div>
            <div className="flexContenetClass-influencers">
              <div>
                <h3 style={{ position: "relative" }}>{item.title}</h3>
              </div>
              <div>
                <span className="count-span">{item.count}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div class="search-container-influencers">
        <button class="search-button-influencers">
          <IoSearch class="search-icon-influencers" />
        </button>
        <input
          type="text"
          class="search-input-influencers"
          placeholder="اﻟﺒﺤﺚ بإسم المؤثر"
        />
      </div>
    </>
  );
};

export default SwiperComponent;
