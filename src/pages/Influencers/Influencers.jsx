import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import HeaderComponent from "./components/HeaderComponent";
import HeadSection from "./components/HeadSection";
import Swiper from "./components/Swiper";
import CardGrid from "./components/CardGrid";
const Influencers = ({ darkMode, setDarkMode }) => {
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
          marginTop: "70px",
          // padding: "0 40px 60px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflowX: "hidden",
        }}
      >
        <HeaderComponent />
        <HeadSection />
        <Swiper />
        <CardGrid />
      </main>
    </div>
  );
};

export default Influencers;
