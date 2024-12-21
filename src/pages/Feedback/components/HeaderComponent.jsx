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
            }}
          >
            <div className="nav-items-feedback">
                <FaHome className="nav-icon-feedback" />
                <span className="nav-item-home-feedback">الرئيسية</span>
                <span className="nav-item-feedback">/ الأسئلة والتقييمات </span>
              </div>
            <div>
              < HelpModal/>
            </div>
        </div>
    </>
  );
};

export default HeaderComponent;
