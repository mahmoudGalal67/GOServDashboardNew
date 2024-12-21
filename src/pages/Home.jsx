import React from "react";
import LineChart from "../components/Chart";
import { GoPeople } from "react-icons/go";
import { FaSackDollar } from "react-icons/fa6";
import { BsBox2 } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { GoBell } from "react-icons/go";
import { CiWarning } from "react-icons/ci";
import avatar from "../assets/avatar_male.webp";
import productpic from "../assets/A2Ul4ZQF31sxFYWnAZ1TRYhczO8JI8tff7xrBxiq.webp";
import { IoIosArrowBack } from "react-icons/io";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Helper from "../components/Helper";

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
      style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Helper />
      <main
        className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[60px]"
        style={{
          flexGrow: 2,
          marginTop: "116px",
          // padding: "0 40px 60px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {/* ملخص الشهر */}
        <section
          className="w-full  lg:w-[60%]"
          style={{
            // maxWidth: "64%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            className="w-full flex flex-wrap items-stretch"
            style={{
              backgroundColor: darkMode ? "#282828" : "#fff",
            }}
          >
            <div
              className={`month-summary ${
                darkMode ? "dark" : ""
              }  w-full lg:w-1/2`}
            >
              <div className="msHeader">
                <h3>ملخص الشهر</h3>
                <span>اكتوبر 2024</span>
              </div>
              <div className="article className='w-full md:w-1/2'-container w-full flex flex-wrap justify-between  ">
                <article className="w-full md:w-1/2">
                  {/* icon */}
                  <button>
                    <GoPeople />
                  </button>
                  <div>
                    <span>-</span>
                    <span>الزيارات</span>
                  </div>
                </article>
                <article className="w-full md:w-1/2">
                  {/* icon */}
                  <button>
                    <FaSackDollar />
                  </button>
                  <div>
                    <span>-</span>
                    <span>المبيعات</span>
                  </div>
                </article>
                <article className="w-full md:w-1/2">
                  {/* icon */}
                  <button>
                    <BsBox2 />
                  </button>
                  <div>
                    <span>-</span>
                    <span>الطلبات</span>
                  </div>
                </article>
                <article className="w-full md:w-1/2">
                  {/* icon */}
                  <button>
                    <GiTrophyCup />
                  </button>
                  <div>
                    <span>-</span>
                    <span>هدف الشهر</span>
                  </div>
                </article>
              </div>
              <footer>
                <a
                  href="/"
                  className="flex items-center gap-2 justify-center text-sm pt-3 pb-2 "
                  style={{ color: "#004956" }}
                >
                  المزيد من التقارير
                  <IoIosArrowBack />
                </a>
              </footer>
            </div>

            {/* chart */}
            <LineChart className="w-full" />
          </div>

          {/* احدث الطلبات */}
          <div className="lastOrders mt-14 mb-10  ">
            <h3 className="sechead">
              <BsBox2 />
              احدث الطلبات{" "}
            </h3>
            <div>
              <p>لا توجد طلبات حاليا</p>
            </div>
          </div>
        </section>

        <div className="leftsideContainer w-full lg:w-1/3">
          {/* التنبيهات */}
          <aside style={{ height: "430px" }}>
            <h3 className="sechead">
              <GoBell />
              التنبيهات
            </h3>
            <ul>
              <li>
                <div>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p> زائر أضاف عقد Dancing Iconic Swan للسلة</p>
                    <span>منذ 13 ساعة</span>
                  </div>
                </div>
                <img
                  src={productpic}
                  alt="product-pic"
                  style={{ width: "40px", height: "40px" }}
                />
              </li>
              <li>
                <div>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p> زائر أضاف عقد Dancing Iconic Swan للسلة</p>
                    <span>منذ 13 ساعة</span>
                  </div>
                </div>
                <img
                  src={productpic}
                  alt="product-pic"
                  style={{ width: "40px", height: "40px" }}
                />
              </li>
              <li>
                <div>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p> زائر أضاف عقد Dancing Iconic Swan للسلة</p>
                    <span>منذ 13 ساعة</span>
                  </div>
                </div>
                <img
                  src={productpic}
                  alt="product-pic"
                  style={{ width: "40px", height: "40px" }}
                />
              </li>
              <li>
                <div>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p> زائر أضاف عقد Dancing Iconic Swan للسلة</p>
                    <span>منذ 13 ساعة</span>
                  </div>
                </div>
                <img
                  src={productpic}
                  alt="product-pic"
                  style={{ width: "40px", height: "40px" }}
                />
              </li>
              <li>
                <div>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p> زائر أضاف عقد Dancing Iconic Swan للسلة</p>
                    <span>منذ 13 ساعة</span>
                  </div>
                </div>
                <img
                  src={productpic}
                  alt="product-pic"
                  style={{ width: "40px", height: "40px" }}
                />
              </li>
              <li>
                <div>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <p> زائر أضاف عقد Dancing Iconic Swan للسلة</p>
                    <span>منذ 13 ساعة</span>
                  </div>
                </div>
                <img
                  src={productpic}
                  alt="product-pic"
                  style={{ width: "40px", height: "40px" }}
                />
              </li>
            </ul>
          </aside>

          {/* منتجات نفذت */}
          <div className="outofstock">
            <h3 className="sechead">
              <CiWarning />
              منتجات نفذت
            </h3>
            <ul>
              <li>
                <img
                  src={productpic}
                  alt="product-pic"
                  style={{ width: "40px", height: "40px" }}
                />

                <div>
                  <p style={{ color: "#f44336", fontSize: "13px" }}>
                    عطر انتنس عود من قوتشي - 90مل - أو دو برفيوم
                  </p>
                  <span>805 SAR</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
