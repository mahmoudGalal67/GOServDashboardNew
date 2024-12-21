import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import HeaderComponent from "./components/HeaderComponent";
import FeedbackHead from "./components/FeedbackHead";
import FeedbackCard from './components/FeedbackCard';
const Feedback = ({ darkMode, setDarkMode }) => {

  return (
    <>
      <div
        className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
        style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
      >
        <Sidebar />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <Helper /> */}
        <main
          className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[10px]"
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
          }}
        >
          <div style={{ width: "98%" }}>
            <HeaderComponent />
            <FeedbackHead />
            <FeedbackCard/>
          </div>
        </main>
      </div>
    </>
  );
};

export default Feedback;
