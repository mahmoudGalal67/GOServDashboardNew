import React from "react";
import { BsTranslate } from "react-icons/bs";
import { FaGift, FaPlus, FaWhatsapp } from "react-icons/fa";
import { IoIosInfinite } from "react-icons/io";
import {
  IoExtensionPuzzleOutline,
  IoInfinite,
  IoPeopleSharp,
  IoStorefrontOutline,
} from "react-icons/io5";
import Helper from "../../components/Helper";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HeaderComponent from "./component/HeaderComponent";
import sallastar from "./../../assets/sallastar.png";

export default function Marketplace({ darkMode, setDarkMode }) {
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
          <div className=" w-full">
            <HeaderComponent />
            <div className="flex lg:flex-row flex-col justify-center items-center p-2 border rounded-md w-[80%]  m-auto my-4">
              <div className="flex flex-col items-center gap-2 border-e-2 p-6 w-full">
                <figure>
                  <img src={sallastar} alt="sallastar" />
                </figure>
                <h2>سلة سبيشال </h2>
                <p className="">
                  الباقة المثالية لإدارة نمو متجرك من خلال أدوات الربط والتكامل
                </p>
              </div>
              <div className="grid place-items-center  p-6 w-full">
                <div className="bg-green-200 p-10 rounded-md">
                  <IoIosInfinite className="text-7xl text-[#5CD5C4]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border rounded-md ">
              <header className="flex flow-row gap-2 items-center bg-gray-200 p-4">
                <IoExtensionPuzzleOutline />
                <h3>الإضافات</h3>
              </header>
              <body className="flex flex-col ga-2 ">
                <div className="flex flex-row justify-between items-center  border-b-2">
                  <div className="flex flex-row gap-2 items-center p-4">
                    <IoStorefrontOutline className="text-2xl" />
                    <div className="flex flex-col gap-1">
                      <h4>زيادة عدد الفروع </h4>
                      <p className="text-sm">
                        أضِف جميع فروعك وأظهرها لعملائك عبر إضافة عدد غير محدود
                        من فروع متجرك
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between border rounded-md me-2 ">
                    <h5>عدد لا محدود</h5>
                    <div className="bg-gray-300 ms-10 p-1 h-full ">
                      <IoInfinite className="text-2xl " />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center  border-b-2">
                  <div className="flex flex-row gap-2 items-center p-4">
                    <IoPeopleSharp className="text-2xl" />
                    <div className="flex flex-col gap-1">
                      <h4>زيادة عدد المستخدمين</h4>
                      <p className="text-sm">
                        أضِف طاقم عملك لإدارة متجرك بشكل متكامل من خلال إضافة
                        الموظفين{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between border rounded-md me-2">
                    <h5>عدد لا محدود</h5>
                    <div className="bg-gray-300 ms-10 p-1 h-full ">
                      <IoInfinite className="text-2xl " />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center  border-b-2">
                  <div className="flex flex-row gap-2 items-center p-4">
                    <BsTranslate className="text-2xl" />
                    <div className="flex flex-col gap-1">
                      <h4>ترجمة فورية لمليون حرف</h4>
                      <p className="text-sm">
                        أضِف رصيداً من عدد الأحرف لترجمة متجرك فورياً بأكثر من
                        40 لغة.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between border rounded-md me-2 ">
                    <h5>العدد الحالي 0</h5>
                    <div className="bg-gray-300 ms-10 p-1 h-full ">
                      <FaPlus className="text-xl " />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center  border-b-2">
                  <div className="flex flex-row gap-2 items-center p-4">
                    <FaWhatsapp className="text-2xl" />
                    <div className="flex flex-col gap-1">
                      <h4>رصيد واتساب</h4>
                      <p className="text-sm">
                        انطلق لتنشيط مبيعاتك عبر إرسال الحملات التسويقية و
                        العروض إلى عملائك.
                      </p>
                    </div>
                  </div>
                  <button className="text-green-400 bg-green-200 p-2 rounded-md">
                    تثبيت التطبيق
                  </button>
                </div>
              </body>
            </div>

            <footer className="border rounded-md my-2 ">
              <div className="flex flex-row flex-wrap justify-around items-center  border-b-2 ">
                <div className="flex flex-row gap-2 items-center p-3">
                  <div className="bg-green-300 rounded-full p-2">
                    <FaGift className="text-2xl" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4>أهدِ من تحب باقة سلة</h4>
                    <p className="text-sm">
                      ادعم أحبابك في تجارتهم الإلكترونية بإهدائهم بطاقة سلة
                      للاشتراك في أحد الباقات الشهرية أو السنوية
                    </p>
                  </div>
                </div>
                <button className="flex flex-row gap-2 items-center text-black bg-green-200 p-2 rounded-pill">
                  <FaGift />
                  اهد بطاقة سلة
                </button>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
