import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import HelpModal from "./modalsProduct/helper/HelpModal";
import "./HeaderComponent.css";
const HeaderComponent = () => {
  return (
    <>
      <div
            style={{
              display:"flex",
              justifyContent:"space-between",
              marginBottom:"3px",
              width:"100%",
            }}
          >
            <div className="nav-items-products">
                <FaHome className="nav-icon-products" />
                <span className="nav-item-home-products">الرئيسية</span>
                <span className="nav-item-products">/ المنتجات</span>
              </div>
            <div>
              < HelpModal/>
            </div>
        </div>
    </>
  );
};

export default HeaderComponent;
