import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { TbNotification } from "react-icons/tb";
import { BsPen } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi2";
import { GoGift } from "react-icons/go";
import { Link } from "react-router-dom";

const Profileropdown = ({ setDarkMode }) => {
  const [visible, setVisible] = useState(false);

  const showList = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (visible) {
      document.body.classList.add("activeProfile");
    } else {
      document.body.classList.remove("activeProfile");
    }
  }, [visible]);

  return (
    <div className="profileDdBox">
      <button onClick={showList} className="align-middle text-gray-600">
        <MdKeyboardArrowDown />
      </button>

      {visible && (
        <ul className="profileDropdown">
          <li>
            <Link to="/userProfile">
              <FiUser />
              الملف الشخصي{" "}
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <TbNotification />
              التنبيهات
            </Link>
          </li>

          <li className="highlight">
            <a href="#">
              <MdCelebration />
              تحديثات المنصة{" "}
            </a>
          </li>
          <li>
            <a href="">
              <BsPen />
              الاقتراحات{" "}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setDarkMode((prev) => !prev)}>
              <HiOutlineMoon />
              الوضع الليلي{" "}
            </a>
          </li>
          <li>
            <a href="">
              <GoGift />
              نقاط الولاء{" "}
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a href="#" className="logout">
              <FiLogOut />
              تسجيل الخروج
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profileropdown;
