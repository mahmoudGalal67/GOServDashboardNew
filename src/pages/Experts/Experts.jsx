import React, { useState } from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Helper from "../../components/Helper";
import HeaderComponent from "./Component/HeaderComponent";
import ImgSwiper from "./Component/Swiper";
import { FiBriefcase } from "react-icons/fi";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import OrderCenter from "./Component/OrderCenter";
import MerchantServices from "./Component/MerchantServices";

function Experts({ darkMode, setDarkMode }) {
  const [switched, setSwitched] = useState(1);
  const setswitched = (to) => {
    setSwitched(to);
  };
  return (
    <div
      className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Helper /> */}
      <main
        style={{
          marginTop: "90px",
          height: "100%",
          // width: "calc(100% - 260px)",
          minHeight: "100vh",
        }}
        className="w-full overflow-x-hidden mb-4"
      >
        <HeaderComponent/>
        <div className="Experts ms-6 my-10">
          <div className="h-6 w-full">
            <ImgSwiper />
            <div className="btnss flex justify-between gap-0 items-center border rounded-md my-6 w-full">
              <button
                onClick={() => {
                  setswitched(1);
                }}
                className={`text-black flex flex-row items-center w-full ${
                  switched ? "bg-green-300 " : ""
                } w-full justify-center gap-2`}
              >
                <FiBriefcase />
                خدمات التاجر
              </button>
              <button
                onClick={() => {
                  setswitched(0);
                }}
                className={`text-black flex flex-row items-center w-full ${
                  !switched ? "bg-green-300 " : ""
                } w-full justify-center gap-2`}
              >
                <BsFileEarmarkSpreadsheet />
                مركز الطلبات
              </button>
            </div>
            <div className="details">
              {switched ? <MerchantServices /> : <OrderCenter />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Experts;
