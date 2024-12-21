import React from "react";
import Helper from "../../components/Helper";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeaderComponent from "./Component/HeaderComponent";
import ActiveSubscriptions from "./Component/ActiveSubscriptions";
import BillingSettings from "./Component/BillingSettings";
import Types from "./Component/Types";
import Vervication from "./Component/Vervication";
import PurchaseInvoices from "./Component/PurchaseInvoices";

export default function Wallet({ darkMode, setDarkMode }) {
  return (
    <>
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
          <main className="mt-3 mr-0">
            <Vervication />
            <Types />
            <BillingSettings />
            <ActiveSubscriptions />
            <PurchaseInvoices />
          </main>
        </main>
      </div>
    </>
  );
}
