import React from "react";

import "./Reports.css";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import HeaderComponent from "./components/HeaderComponent";
import ReportHeader from "./components/ReportHeader";
import ReportSelector from "./components/ReportSelector";
import ReportCards from "./components/ReportCards";
function Reports({ darkMode, setDarkMode }) {
  return (
    <div
      className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Helper /> */}
      <main
        className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[60px]"
        style={{
          flexGrow: 2,
          marginTop: "70px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <HeaderComponent/>
        <ReportHeader />
        <ReportSelector />
        <ReportCards />
      </main>
    </div>
  );
}

export default Reports;
