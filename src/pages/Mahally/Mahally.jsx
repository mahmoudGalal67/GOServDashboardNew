import React from 'react';
import HeaderSection from './components/HeaderSection';
import FeatureSection from './components/FeatureSection';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import HeaderComponent from './components/HeaderComponent';

const Mahally = (props) => {
  return (
    <div
      className={`slidePage flex flex-wrap' ${props.darkMode ? "dark" : ""}`}
      style={{ backgroundColor: props.darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <main
        className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-0 lg:px-10 pb-[60px]"
        style={{
          flexGrow: 2,
          marginTop: "90px",
          marginRight: "250px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
      <HeaderComponent />
      <HeaderSection />
      <FeatureSection/>
      </main>
    </div>
  );
}

export default Mahally;
