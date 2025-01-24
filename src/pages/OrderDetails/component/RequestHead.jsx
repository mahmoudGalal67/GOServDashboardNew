import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./RequestHead.css";
import "react-datepicker/dist/react-datepicker.css";
import FilterOrders from "./headModals/Filter_Orders";
import ServiceOrders from "./headModals/Service_Orders";
const RequestHead = () => {
  return (
    <>
      <div className="header-container-orders-head">
        <div className="header-right-order">
          <Button className="btn-add-order">
            <span className="spanIcon" style={{ marginLeft: "20px" }}>
              <i className="sicon-add mx-2"></i>
              طلب جديد
            </span>
          </Button>
        </div>
        <div className="header-left">
          <Button className="btn-filter">
            <i className="sicon-calendar-date icon-calender"></i>
            الحجوزات
          </Button>
          <FilterOrders />
          <ServiceOrders />
        </div>
      </div>
    </>
  );
};

export default RequestHead;
