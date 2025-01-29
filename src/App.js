import { useEffect, useLayoutEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import Orders from "./pages/Orders/Orders";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import Clients from "./pages/Clients/Clients";
import ClientDetails from "./pages/ClientDetails/Clients";
import Reports from "./pages/Reports/Reports";
import Mahally from "./pages/Mahally/Mahally";
import Influencers from "./pages/Influencers/Influencers";
import Experts from "./pages/Experts/Experts";
import Sweply from "./pages/Sweply/Sweply";
import Marketplace from "./pages/Marketplace/Marketplace";
import Settings from "./pages/Settings/Settings";
import ProfilePage from "./pages/Profilepage/Profilepage";
import Wallet from "./pages/Wallet/Wallet";
import NotFound from "./pages/NotFound/NotFound";
import Themes from "./pages/Themes/Themes";
import UserProfile from "./pages/UserProfile/UserProfile";
import Notifications from "./pages/Notifications/Notifications";
import Feedback from "./pages/Feedback/Feedback";
import Marketing from "./pages/Marketing/Marketing";

import Cookies from "js-cookie";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    userId: "",
    userPhoto: "",
  });
  const token = Cookies.get("usertoken");

  // useLayoutEffect(() => {
  //   if (token == undefined) {
  //     window.location.href = "https://sallaplus.com/login";
  //   }
  // }, [token]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name =
      params.get("name") || JSON.parse(localStorage.getItem("userInfo"))?.name;
    const email =
      params.get("email") ||
      JSON.parse(localStorage.getItem("userInfo"))?.email;
    const mobile =
      params.get("mobile") ||
      JSON.parse(localStorage.getItem("userInfo"))?.mobile;
    const userId =
      params.get("userId") ||
      JSON.parse(localStorage.getItem("userInfo"))?.userId;
    const userPhoto =
      params.get("userPhoto") ||
      JSON.parse(localStorage.getItem("userInfo"))?.userPhoto;
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ name, mobile, userId, userPhoto, email })
    );
    setuserInfo({ name, mobile, userId, userPhoto, email });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <Orders
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/order/:id"
          element={
            <OrderDetails
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/clients"
          element={
            <Clients
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/client/:id"
          element={
            <ClientDetails
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/reports"
          element={
            <Reports
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/mahally"
          element={
            <Mahally
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/influencers"
          element={
            <Influencers
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/experts"
          element={
            <Experts
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/swelly"
          element={
            <Sweply
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/marketPlace"
          element={
            <Marketplace
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/wallet"
          element={
            <Wallet
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/themes"
          element={
            <Themes
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/userProfile"
          element={
            <UserProfile
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/notifications"
          element={
            <Notifications
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/feedback"
          element={
            <Feedback
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="/marketing"
          element={
            <Marketing
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              userInfo={userInfo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
