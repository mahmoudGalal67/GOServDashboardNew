import React from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Helper from "../../components/Helper";
import HeaderComponent from "./components/HeaderComponent";
import MarketingDiscounts from "./components/MarketingDiscounts";
import MarketingCampaigns from "./components/MarketingCampaigns";
import ContentMarketing from "./components/ContentMarketing";
import AdvancedTools from "./components/AdvancedTools";
function Marketing({ darkMode, setDarkMode }) {
    return (
        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
               <div style={{width:"98%"}}>
                 <HeaderComponent/>
                 <div style={{margin:"15px 0px 0px 15px",padding:"5px" ,cursor:"pointer"}}><p style={{textAlign:"left"}}><i className="sicon-settings">  اعدادات التسويق </i></p></div>    
                   <MarketingDiscounts/>
                   <MarketingCampaigns/>
                   <ContentMarketing/>
                   <AdvancedTools/>
               </div>
            
            </main>
        </div>
    );
}

export default Marketing;
