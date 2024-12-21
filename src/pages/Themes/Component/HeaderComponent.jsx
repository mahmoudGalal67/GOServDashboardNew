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
            <div className="nav-items-themes">
                <FaHome className="nav-icon-themes" />
                <span className="nav-item-home-themes">الرئيسية</span>
                <span className="nav-item-themes">/  تصميم المتجر  </span>
              </div>
            <div>
              < HelpModal/>
            </div>
        </div>
    </>
  );
};

export default HeaderComponent;
