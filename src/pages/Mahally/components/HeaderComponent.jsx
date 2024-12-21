import React, { useState } from "react";
import "./HeaderComponent.css";
import { FaHome } from "react-icons/fa";
import Helper from "../../../components/Helper";

const HeaderComponent = () => {
  return (
    <>
      <div className="header-container-prd" style={{width:"98%"}}>
        <div className="nav-items">
          <FaHome className="nav-icon"/>
          <span className="nav-item-home">الرئيسية</span>
          <span className="nav-item">/ المحلي</span>
        </div>
        <div
          className="help-class"  
        >
          <Helper />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
