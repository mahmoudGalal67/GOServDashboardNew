import React from "react";
import "./Clients.css";
import HeaderComponent from "./component/HeaderComponent";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ClientHead from "./component/ClientHead";
import CustomerList from "./component/CustomerList";
import ClientGroups from "./component/ClientGroups";

function Clients({ darkMode, setDarkMode }) {
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
          marginTop: "75px",
          height: "100%",
          // width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <HeaderComponent/>
        <ClientGroups style={{ width: "98%"}} />
        <ClientHead style={{ width: "100%" }} />
        <CustomerList />
      </main>
    </div>
  );
}

export default Clients;
