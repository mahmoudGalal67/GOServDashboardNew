import React, { useState } from "react";
import HeaderComponent from "./component/HeaderComponent";
import RequestHead from "./component/RequestHead";
import Swiper from "./component/SwiperOrders";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Helper from "../../components/Helper";
import OrderSummary from "./component/OrderSummary";

function Orders({ darkMode, setDarkMode }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = (index) => {
    if (selectedIndex === index) {
      setShowDetails(!showDetails);
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
      setShowDetails(true);
    }
  };
  return (
    <div
      className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main
        className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[60px]"
        style={{
          flexGrow: 2,
          marginTop: "80px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "space-around",
        }}
      >
        <div style={{width:"98%"}}>
        <HeaderComponent/>
         <RequestHead />
        <Swiper
          selectedIndex={selectedIndex}
          onCardClick={handleCardClick}
        /> 
        <OrderSummary selectedIndex={selectedIndex} showDetails={showDetails} />
        </div>
      </main>
    </div>
  );
}

export default Orders;
