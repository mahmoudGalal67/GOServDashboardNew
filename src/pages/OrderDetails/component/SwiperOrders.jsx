import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faGift,
  faLock,
  faTrash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "./SwiperOrders.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const SwiperOrders = ({ onCardClick, selectedIndex }) => {
  const Orderdata = [
    {
      title: "جاري التوصيل",
      count: 0,
      color: "#999",
      iconOrder: (
        <i
          className="order-st-entr sicon-shipping"
          style={{ fontSize: "20px" }}
        ></i>
      ),
    },
    {
      title: "تم التنفيذ",
      count: 0,
      color: "#999",
      iconOrder: (
        <i
          className="order-st-entr sicon-check"
          style={{ fontSize: "20px" }}
        ></i>
      ),
    },
    {
      title: "قيد التنفيذ",
      count: 0,
      color: "#999",
      iconOrder: (
        <i
          className="order-st-entr sicon-gift"
          style={{ fontSize: "20px" }}
        ></i>
      ),
    },
    {
      title: "بانتظار المراجعة",
      count: 0,
      color: "#999",
      iconOrder: (
        <i
          className="order-st-entr sicon-time"
          style={{ fontSize: "20px" }}
        ></i>
      ),
    },
    {
      title: "بانتظار الدفع",
      count: 0,
      color: "#999",
      iconOrder: (
        <i
          className="order-st-entr sicon-watch"
          style={{ fontSize: "20px" }}
        ></i>
      ),
    },
    {
      title: "محذوف",
      count: 0,
      color: "#999",
      iconOrder: (
        <i
          className="order-st-entr sicon-folder-cancel"
          style={{ fontSize: "20px" }}
        ></i>
      ),
    },
  ];

  return (
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
      style={{ marginTop: "25px" }}
      grabCursor={true}
      onSlideChange={(swiper) => onCardClick(swiper.activeIndex)}
    >
      {Orderdata.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={`swiper-item-orders ${
              selectedIndex === index ? "selected" : ""
            }`}
            style={{
              borderColor: item.color,
              backgroundColor:
                selectedIndex === index ? "#a6abc8" : "#e8f1f129",
            }}
            onClick={() => onCardClick(index)}
          >
            <div className="icon-Class-orders" style={{ color: item.color }}>
              {selectedIndex === index ? (
                <div className="icons-class-header-orders">
                  <div className="icons-item-class-orders">
                    {item.iconOrder}
                  </div>
                  <div className="fa-times-icon-orders">
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                  </div>
                </div>
              ) : (
                item.iconOrder
              )}
            </div>
            <div className="flexContenetClass-orders">
              <div>
                <h3 style={{ position: "relative" }}>
                  <span className="status-circle-orders"></span>
                  {item.title}
                </h3>
              </div>
              <div>
                <span>{item.count}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperOrders;
