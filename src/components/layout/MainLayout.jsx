import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Helper from "../Helper";
import Home from "../../pages/Home";

const MainLayout = ({ darkMode = false }) => {
  return (
    // <div
    //   className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
    //   style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
    // >
    //   <Sidebar />
    //   <Navbar />
    //   <Helper />
    //   <main
    //     className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[60px]"
    //     style={{
    //       flexGrow: 2,
    //       marginTop: "116px",
    //       // padding: "0 40px 60px",
    //       height: "100%",
    //       width: "calc(100% - 260px)",
    //       minHeight: "100vh",
    //       display: "flex",
    //       flexWrap: "wrap",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //
    //   </main>
    // </div>
    <div>{/* <Outlet /> */}</div>
  );
};

export default MainLayout;
