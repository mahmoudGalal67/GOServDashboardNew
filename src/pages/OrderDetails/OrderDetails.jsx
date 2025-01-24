import React, { useEffect, useState } from "react";
import HeaderComponent from "./component/HeaderComponent";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import "./Order.css";

import { useCookies } from "react-cookie";
import { Request } from "../../components/utils/Request";

function Orders({ darkMode, setDarkMode, userInfo }) {
  const currentUser = JSON.parse(localStorage.getItem("userInfo"));

  const [cookies, setCookie] = useCookies(["usertoken"]);

  const [orders, setorders] = useState([]);

  useEffect(() => {
    const getorders = async () => {
      try {
        const { data } = await Request({
          url: `/Clients/getorder?userid=${currentUser.userId}`,
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
          <div className="container my-8">
            <div className="order-card">
              <div className="row">
                <div className="col text-center order-detailss">
                  <i className="fas fa-hashtag"></i> تعديل الطلب رقم
                </div>
                <div className="col text-center order-detailss">
                  <i className="fas fa-calendar-alt"></i> تاريخ الطلب
                </div>
                <div className="col text-center order-detailss">
                  <i className="fas fa-info-circle"></i> حالة الطلب
                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-center order-statuss">جديد</div>
                <div className="col text-center order-date">
                  Wednesday 22 January 2025 | 04:34 PM
                </div>
                <div className="col text-center order-number">128487450</div>
              </div>
              <div className="row mt-3">
                <div className="col text-end tags">الوسوم:</div>
              </div>
            </div>
            <div className="container">
              <div className="summary-container">
                <div className="summary-header">
                  <i class="sicon-page ml-2"></i> ملخص الطلب
                </div>
                <div className="summary-item">
                  <span>مجموع السلة</span>
                  <span className="value">SAR 0</span>
                </div>
                <div className="summary-item">
                  <span>خيارات الطلب</span>
                  <span className="value">SAR 0</span>
                </div>
                <div className="summary-item">
                  <span>كوبونات التخفيض</span>
                  <input placeholder="ابحث عن كوبون" className="coupon-input" />
                </div>
                <div className="summary-footer">
                  <span>إجمالي الطلب</span>
                  <span className="value">SAR 0</span>
                </div>
              </div>
            </div>
            <div className="table-container mt-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                {/* <button className="btn btn-outline-success btn-add-product">
                  <i className="fas fa-plus"></i> إضافة منتج
                </button> */}
                <h5 className="mb-0 mx-2">
                  <i class="sicon-t-shirt ml-2"></i> المنتجات
                </h5>
              </div>
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th>المنتج</th>
                    <th>إجمالى الوزن</th>
                    <th>الكمية</th>
                    <th>وزن القطعة الواحدة</th>
                    <th>السعر</th>
                    <th>المجموع</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>المنتج</td>
                    <td>إجمالى الوزن</td>
                    <td>الكمية</td>
                    <td>وزن القطعة الواحدة</td>
                    <td>السعر</td>
                    <td>المجموع</td>
                  </tr>
                  <tr>
                    <td>المنتج</td>
                    <td>إجمالى الوزن</td>
                    <td>الكمية</td>
                    <td>وزن القطعة الواحدة</td>
                    <td>السعر</td>
                    <td>المجموع</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Orders;
