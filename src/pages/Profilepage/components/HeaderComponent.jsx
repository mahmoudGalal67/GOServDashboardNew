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
            <div className="nav-items-profilepage">
                <FaHome className="nav-icon-profilepage" />
                <span className="nav-item-home-profilepage">الرئيسية</span>
                <span className="nav-item-profilepage">/ الصفحات التعريفية</span>
              </div>
            <div>
              < HelpModal/>
            </div>
        </div>
    </>
  );
};

export default HeaderComponent;
