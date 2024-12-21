import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import HelpModal from "./helper/HelpModal";
import "./HeaderComponent.css";
const HeaderComponent = () => {
  return (
    <>
      <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom:"3px",
              width:"100%",
              marginRight:"50px"
            }}
          >
            <div className="nav-items-wallet">
                <FaHome className="nav-icon-wallet" />
                <span className="nav-item-home-wallet">الرئيسية</span>
                <span className="nav-item-wallet">/ المحفظة </span>
              </div>
            <div>
              < HelpModal/>
            </div>
        </div>
    </>
  );
};

export default HeaderComponent;
