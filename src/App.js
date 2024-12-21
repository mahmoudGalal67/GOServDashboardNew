import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import Orders from "./pages/Orders/Orders";
import Clients from "./pages/Clients/Clients";
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
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/products"
          element={
            <ProductsPage darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route
          path="/orders"
          element={<Orders darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/clients"
          element={<Clients darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/reports"
          element={<Reports darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/mahally"
          element={<Mahally darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/influencers"
          element={
            <Influencers darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route
          path="/experts"
          element={<Experts darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/swelly"
          element={<Sweply darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/marketPlace"
          element={
            <Marketplace darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route
          path="/settings"
          element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/profile"
          element={
            <ProfilePage darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route
          path="/wallet"
          element={<Wallet darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/themes"
          element={<Themes darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
          <Route
          path="/userProfile"
          element={<UserProfile darkMode={darkMode} setDarkMode={setDarkMode} />}
        />    
        <Route
         path="/notifications"
         element={<Notifications darkMode={darkMode} setDarkMode={setDarkMode} />}
       />
        <Route
         path="/feedback"
         element={<Feedback darkMode={darkMode} setDarkMode={setDarkMode} />}
       />
         <Route
         path="/marketing"
         element={<Marketing darkMode={darkMode} setDarkMode={setDarkMode} />}
       />
        <Route
          path="*"
          element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
