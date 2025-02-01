import React, { useEffect, useMemo, useState } from "react";
import HeaderComponent from "./component/HeaderComponent";
import RequestHead from "./component/RequestHead";
import Swiper from "./component/SwiperOrders";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Helper from "../../components/Helper";
import OrderSummary from "./component/OrderSummary";

import { useCookies } from "react-cookie";
import { Request } from "../../components/utils/Request";

function Orders({ darkMode, setDarkMode, userInfo }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const [selectedorders, setselectedorders] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("userInfo"));

  const [cookies, setCookie] = useCookies(["usertoken"]);

  const [orders, setorders] = useState([]);

  useEffect(() => {
    const getorders = async () => {
      try {
        const { data } = await Request({
          url: `/api/Clients/getorder_admin?admin_id=${currentUser.userId}`,
          headers: {
            Authorization: `Bearer ${cookies.usertoken}`,
          },
        });
        setorders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getorders();
  }, []);
  let filterdOrders = selectedIndex
    ? orders.filter((order) => order.status == selectedIndex)
    : orders;

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
      <Sidebar userInfo={userInfo} />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        userInfo={userInfo}
      />
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
        <div style={{ width: "98%" }}>
          <HeaderComponent />
          <RequestHead />
          <Swiper selectedIndex={selectedIndex} onCardClick={handleCardClick} />
          <OrderSummary
            setselectedorders={setselectedorders}
            selectedorders={selectedorders}
            orders={filterdOrders}
            setorders={setorders}
          />
        </div>
      </main>
    </div>
  );
}

export default Orders;
