import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CiWarning } from "react-icons/ci";
import { FaCheck, FaRegEye, FaStar } from "react-icons/fa";
import { HiDotsHorizontal, HiOutlineRefresh } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoBagRemoveOutline, IoSettingsOutline } from "react-icons/io5";
// import Helper from "../../components/Helper";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeaderComponent from "./Component/HeaderComponent";
import ThemeSwiper from "./Component/Swiper";

export default function Themes({ darkMode, setDarkMode }) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

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
          }}
        >
          <HeaderComponent />
          <div className="border rounded-md overflow-hidden gap-2 mb-10 bg-blue-300 flex flow-row items-center ">
            <div className="bg-blue-400 p-3">
              <CiWarning className="text-xl" />
            </div>
            <p className="text-blue-700">
              مساهماتك بتقييم تجربتك تساعد الآخرين على اتخاذ قرارات بشأن الثيمات
              التي تساعدهم بإدارة متاجرهم
              <span>
                <button className="underline text-blue-900">
                  اضغط هنا للتقييم
                </button>
              </span>
            </p>
          </div>
          <div className="mx-2 w-full">
            <h1 className="text-3xl my-4">صمّمت لتبهر عملائك </h1>
            <p>نمو مبيعاتك يبدأ بتجربة تسوق سهلة وفريدة</p>
            <div className="my-6">
              <ThemeSwiper />
              {/* main themes */}
              <div className="themes rounded-md overflow-hidden my-10">
                <header className="bg-gray-100 p-3 flex flex-row items-center  justify-between">
                  <h3>ثيماتي</h3>
                  <div className="flex flex-row ">
                    <button className="flex text-black flex-row items-center gap-2">
                      <IoBagRemoveOutline />
                      إعدادات
                    </button>
                    <button className="text-black hover:bg-green-400 border outline-1 rounded-md px-2 py-1">
                      عرض المزيد
                    </button>
                  </div>
                </header>
                <body className="flex xl:flex-row flex-col gap-3 items-center my-6">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* كمل هنا */}
                    <img
                      class="w-full "
                      src="https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/o5cqTdwQWor238cxkgv455wRDvnttwGn80wy6aee.png"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                          {/* <!--checkbox start--> */}
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={toggleCheckbox}
                              className="hidden" // Hide the default checkbox
                            />
                            <span
                              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200 
                                                        ${
                                                          checked
                                                            ? ""
                                                            : "bg-white border-gray-400"
                                                        }
                                                        `}
                            >
                              {checked && <FaCheck />}
                            </span>
                          </label>
                          {/* <!--checkbox end--> */}

                          <h4>وسام</h4>
                          <p className="bg-green-800 rounded-pill px-1 text-white">
                            1269.0
                          </p>
                        </div>
                        <button className="text-orange-400 rounded-pill px-3 text-sm flex flex-row items-center bg-orange-200">
                          <HiOutlineRefresh />
                          تحديث الثيم
                        </button>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-1">
                          <FaStar className="text-orange-300 text-xl" />
                          <span>3</span>
                          <p>(62 تقييم)</p>
                        </div>
                        <button className="underline text-black text-sm">
                          تقييم الثيم
                        </button>
                      </div>
                      <div className="border-t-2 flex justify-center items-center p-2">
                        <Dropdown className="w-full " dir="rtl">
                          <Dropdown.Toggle
                            className="text-black bg-white m-auto border-none flex flow-row items-center gap-2 "
                            id="dropdown-basic"
                          >
                            خيارات الثيم
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="w-full">
                            <Dropdown.Item href="#/action-1">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoMdCheckmarkCircleOutline />
                                تفعيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <FaRegEye />
                                معاينة الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <HiDotsHorizontal />
                                تفاصيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoSettingsOutline />
                                تخصيص الثيم
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* كمل هنا */}
                    <img
                      class="w-full "
                      src="https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/o5cqTdwQWor238cxkgv455wRDvnttwGn80wy6aee.png"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                          {/* <!--checkbox start--> */}
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={toggleCheckbox}
                              className="hidden" // Hide the default checkbox
                            />
                            <span
                              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200 
                                                        ${
                                                          checked
                                                            ? ""
                                                            : "bg-white border-gray-400"
                                                        }
                                                        `}
                            >
                              {checked && <FaCheck />}
                            </span>
                          </label>
                          {/* <!--checkbox end--> */}

                          <h4>وسام</h4>
                          <p className="bg-green-800 rounded-pill px-1 text-white">
                            1269.0
                          </p>
                        </div>
                        <button className="text-orange-400 rounded-pill px-3 text-sm flex flex-row items-center bg-orange-200">
                          <HiOutlineRefresh />
                          تحديث الثيم
                        </button>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-1">
                          <FaStar className="text-orange-300 text-xl" />
                          <span>3</span>
                          <p>(62 تقييم)</p>
                        </div>
                        <button className="underline text-black text-sm">
                          تقييم الثيم
                        </button>
                      </div>
                      <div className="border-t-2 flex justify-center items-center p-2">
                        <Dropdown className="w-full " dir="rtl">
                          <Dropdown.Toggle
                            className="text-black bg-white m-auto border-none flex flow-row items-center gap-2 "
                            id="dropdown-basic"
                          >
                            خيارات الثيم
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="w-full">
                            <Dropdown.Item href="#/action-1">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoMdCheckmarkCircleOutline />
                                تفعيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <FaRegEye />
                                معاينة الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <HiDotsHorizontal />
                                تفاصيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoSettingsOutline />
                                تخصيص الثيم
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* كمل هنا */}
                    <img
                      class="w-full "
                      src="https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/o5cqTdwQWor238cxkgv455wRDvnttwGn80wy6aee.png"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                          {/* <!--checkbox start--> */}
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={toggleCheckbox}
                              className="hidden" // Hide the default checkbox
                            />
                            <span
                              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200 
                                                        ${
                                                          checked
                                                            ? ""
                                                            : "bg-white border-gray-400"
                                                        }
                                                        `}
                            >
                              {checked && <FaCheck />}
                            </span>
                          </label>
                          {/* <!--checkbox end--> */}

                          <h4>وسام</h4>
                          <p className="bg-green-800 rounded-pill px-1 text-white">
                            1269.0
                          </p>
                        </div>
                        <button className="text-orange-400 rounded-pill px-3 text-sm flex flex-row items-center bg-orange-200">
                          <HiOutlineRefresh />
                          تحديث الثيم
                        </button>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-1">
                          <FaStar className="text-orange-300 text-xl" />
                          <span>3</span>
                          <p>(62 تقييم)</p>
                        </div>
                        <button className="underline text-black text-sm">
                          تقييم الثيم
                        </button>
                      </div>
                      <div className="border-t-2 flex justify-center items-center p-2">
                        <Dropdown className="w-full " dir="rtl">
                          <Dropdown.Toggle
                            className="text-black bg-white m-auto border-none flex flow-row items-center gap-2 "
                            id="dropdown-basic"
                          >
                            خيارات الثيم
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="w-full">
                            <Dropdown.Item href="#/action-1">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoMdCheckmarkCircleOutline />
                                تفعيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <FaRegEye />
                                معاينة الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <HiDotsHorizontal />
                                تفاصيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoSettingsOutline />
                                تخصيص الثيم
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </body>
              </div>
              {/* special themes */}
              <div className="themes rounded-md overflow-hidden my-10">
                <header className="bg-gray-100 p-3 flex flex-row items-center  justify-between">
                  <h3>ثيمات مميزة</h3>
                </header>
                <body className="flex xl:flex-row flex-col gap-3 items-center my-6">
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* كمل هنا */}
                    <img
                      class="w-full "
                      src="https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/1Ho12lAQ15qhnbWRHOCIxREPEZq4DB8Zs6cGMPY8.png"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                          <h4>عطاء</h4>
                        </div>
                        <p>مجاني</p>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-1">
                          <FaStar className="text-orange-300 text-xl" />
                          <span>3</span>
                          <p>(62 تقييم)</p>
                        </div>
                        <button className="underline text-black text-sm">
                          تقييم الثيم
                        </button>
                      </div>
                      <div className="border-t-2 flex justify-center items-center p-2">
                        <Dropdown className="w-full " dir="rtl">
                          <Dropdown.Toggle
                            className="text-black bg-white m-auto border-none flex flow-row items-center gap-2 "
                            id="dropdown-basic"
                          >
                            خيارات الثيم
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="w-full">
                            <Dropdown.Item href="#/action-1">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoMdCheckmarkCircleOutline />
                                تفعيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <FaRegEye />
                                معاينة الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <HiDotsHorizontal />
                                تفاصيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoSettingsOutline />
                                تخصيص الثيم
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* كمل هنا */}
                    <img
                      class="w-full "
                      src="https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/gu6pgCKzzVWnODBGIM4UjQupyk07dmE1IcWip9pT.png"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                          {/* <!--checkbox start--> */}
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={toggleCheckbox}
                              className="hidden" // Hide the default checkbox
                            />
                            <span
                              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200 
                                                        ${
                                                          checked
                                                            ? ""
                                                            : "bg-white border-gray-400"
                                                        }
                                                        `}
                            >
                              {checked && <FaCheck />}
                            </span>
                          </label>
                          {/* <!--checkbox end--> */}

                          <h4>وسام</h4>
                          <p className="bg-green-800 rounded-pill px-1 text-white">
                            1269.0
                          </p>
                        </div>
                        <button className="text-orange-400 rounded-pill px-3 text-sm flex flex-row items-center bg-orange-200">
                          <HiOutlineRefresh />
                          تحديث الثيم
                        </button>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-1">
                          <FaStar className="text-orange-300 text-xl" />
                          <span>3</span>
                          <p>(62 تقييم)</p>
                        </div>
                        <button className="underline text-black text-sm">
                          تقييم الثيم
                        </button>
                      </div>
                      <div className="border-t-2 flex justify-center items-center p-2">
                        <Dropdown className="w-full " dir="rtl">
                          <Dropdown.Toggle
                            className="text-black bg-white m-auto border-none flex flow-row items-center gap-2 "
                            id="dropdown-basic"
                          >
                            خيارات الثيم
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="w-full">
                            <Dropdown.Item href="#/action-1">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoMdCheckmarkCircleOutline />
                                تفعيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <FaRegEye />
                                معاينة الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <HiDotsHorizontal />
                                تفاصيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoSettingsOutline />
                                تخصيص الثيم
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* كمل هنا */}
                    <img
                      class="w-full "
                      src="https://salla-dev-portal.s3.eu-central-1.amazonaws.com/uploads/oiPJlMF7qh6Wf0S744rQUwfUqFTaiONG7RJKmDMs.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                          {/* <!--checkbox start--> */}
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={toggleCheckbox}
                              className="hidden" // Hide the default checkbox
                            />
                            <span
                              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200 
                                                        ${
                                                          checked
                                                            ? ""
                                                            : "bg-white border-gray-400"
                                                        }
                                                        `}
                            >
                              {checked && <FaCheck />}
                            </span>
                          </label>
                          {/* <!--checkbox end--> */}

                          <h4>وسام</h4>
                          <p className="bg-green-800 rounded-pill px-1 text-white">
                            1269.0
                          </p>
                        </div>
                        <button className="text-orange-400 rounded-pill px-3 text-sm flex flex-row items-center bg-orange-200">
                          <HiOutlineRefresh />
                          تحديث الثيم
                        </button>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-1">
                          <FaStar className="text-orange-300 text-xl" />
                          <span>3</span>
                          <p>(62 تقييم)</p>
                        </div>
                        <button className="underline text-black text-sm">
                          تقييم الثيم
                        </button>
                      </div>
                      <div className="border-t-2 flex justify-center items-center p-2">
                        <Dropdown className="w-full " dir="rtl">
                          <Dropdown.Toggle
                            className="text-black bg-white m-auto border-none flex flow-row items-center gap-2 "
                            id="dropdown-basic"
                          >
                            خيارات الثيم
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="w-full">
                            <Dropdown.Item href="#/action-1">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoMdCheckmarkCircleOutline />
                                تفعيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <FaRegEye />
                                معاينة الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <HiDotsHorizontal />
                                تفاصيل الثيم
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              <div className="  flex flex-row gap-1 items-center w-full">
                                <IoSettingsOutline />
                                تخصيص الثيم
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </body>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
