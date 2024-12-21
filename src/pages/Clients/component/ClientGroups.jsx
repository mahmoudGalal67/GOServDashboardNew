import React from "react";
import "./ClientGroupStyle.css";
import { FaPlus } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ClientGroups = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="client-groups-container" style={{ width: "100%" }}>
        <h4 style={{ marginBottom: "25px" }}>
          <i className="sicon-group mx-3" style={{ fontSize: "25px" }}></i>
          مجموعات العملاء <span>(2 مجموعات)</span>
        </h4>
        <div className="client-card-container">
          <div className="client-card all-clients">
            <i className="sicon-group client-sicon"></i>
            <div style={{ marginTop: "15px" }}>
              <h5>جميع العملاء</h5>
              <p>91 عميل</p>
            </div>
          </div>
          <div className="client-card order-group">
            <i className="sicon-users client-sicon"></i>
            <div style={{ marginTop: "15px" }}>
              <h5>اول طلب</h5>
              <p>85 عميل</p>
            </div>
          </div>
          <div className="client-card client-new-group">
            <FaPlus className="client-icon" />
            <h6>مجموعة جديدة</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGroups;
