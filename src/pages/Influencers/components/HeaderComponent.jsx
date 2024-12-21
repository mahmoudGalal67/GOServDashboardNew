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
            <div className="nav-items-influncers">
                <FaHome className="nav-icon-influncers" />
                <span className="nav-item-home-influncers">الرئيسية</span>
                <span className="nav-item-influncers">/ المؤثرين</span>
              </div>
            <div>
              < HelpModal/>
            </div>
        </div>
    </>
  );
};

export default HeaderComponent;
