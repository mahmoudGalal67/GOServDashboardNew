import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReportSelector.css";
const ReportSelector = () => {
  const Reportdata = [
    { title: "المبيعات", iconReport: <i className="sicon-full-wallet"></i> },
    {
      title: "المنتجات",
      iconReport: <i className="sicon-round-neck-t-shirt"></i>,
    },
    { title: "العملاء", iconReport: <i className="sicon-users"></i> },
    { title: "الزيارات", iconReport: <i className="sicon-link"></i> },
    {
      title: "الاكثر بحثا",
      iconReport: <i className="sicon-round-neck-t-shirt"></i>,
    },
    {
      title: "الدفع والشحن",
      iconReport: <i className="sicon-shipping-fast"></i>,
    },
    { title: "نظام الولاء", iconReport: <i className="sicon-trophy2"></i> },
    { title: "قنوات البيع", iconReport: <i className=""></i> },
  ];

  return (
    <div className="report-selector-container">
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="report-header">
          <h3 className="report-title">نوع التقرير</h3>
          <div>
            <span>
              <i
                class="fa-solid fa-chevron-right"
                style={{ fontSize: "20px", color: "#ddd" }}
              ></i>
            </span>
            <span>
              <i
                class="fa-solid fa-chevron-left mr-3"
                style={{ fontSize: "20px", color: "#ddd" }}
              ></i>
            </span>
          </div>
        </div>
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
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {Reportdata.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="report-slide">
                <span> {item.iconReport} </span>
                {item.title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="report-action-container">
          <p>اختر التقرير الفرعي</p>
          <div className="report-action">
            <div
              style={{
                border: "1px solid #ddd",
                width: "86%",
                padding: "0 5px",
              }}
            >
              <span style={{ marginRight: "5px" }}>
                <i
                  className="sicon-newspaper-alt"
                  style={{ color: "#d5d5d" }}
                ></i>
              </span>
              <select className="report-select">
                <option value="report-summary">ملخص</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
                <option value="report-summary">مبيعات المنتجات</option>
              </select>
            </div>
            <div className="show-report-btn">
              <button>عرض</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSelector;
