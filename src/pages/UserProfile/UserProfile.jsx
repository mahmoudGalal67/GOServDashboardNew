import React from "react";
import "./UserProfile.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Helper from "../../components/Helper";
import HelpModal from "./helper/HelpModal";
import { FaHome } from "react-icons/fa";
const userProfile =
  "https://www.gravatar.com/avatar/112e28edfaa501b1942f68247921fcec?s=80&d=mm&r=g";

const UserProfile = ({ darkMode, setDarkMode }) => {
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
            marginTop: "83px",
            // padding: "0 40px 60px",
            height: "100%",
            width: "calc(100% - 260px)",
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div className="profile-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom:"10px",
            }}
          >
            <div className="nav-items-profile">
                <FaHome className="nav-icon-profile" />
                <span className="nav-item-home-profile">الرئيسية</span>
                <span className="nav-item-profile">/ الملف الشخصي</span>
              </div>
            <div>
              < HelpModal/>
            </div>
          </div>
          <div className="profile-container-box">
            <div className="profile-header">
              <h2>الملف الشخصي</h2>
            </div>
            <div className="profile-avatar">
              <img src={userProfile} alt="User Avatar" className="avatar" />
            </div>
            <div className="profile-fields">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="محرر البيانات"
                  className="form-input"
                />
                <i className="con-profile sicon-user"></i>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  value="sallaplus.demo2024@gmail.com"
                  className="form-input"
                  readOnly
                />
                <i className="icon-profile sicon-mail"></i>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserProfile;
