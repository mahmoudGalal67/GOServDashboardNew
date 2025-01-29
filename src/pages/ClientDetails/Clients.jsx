import React, { useState } from "react";
import "./Clients.css";
import HeaderComponent from "./component/HeaderComponent";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import OrderSummary from "../Orders/component/OrderSummary";
import { Modal } from "react-bootstrap";

function Clients({ darkMode, setDarkMode, userInfo }) {
  const [showReleaseModal, setShowReleaseModal] = useState(false);
  const handleShowReleaseModal = () => setShowReleaseModal(true);
  const handleCloseReleaseModal = () => setShowReleaseModal(false);

  const [showeditClient, setShoweditClient] = useState(false);
  const handleShoweditClient = () => setShoweditClient(true);
  const handleCloseeditClient = () => setShoweditClient(false);

  const [showblockClient, setShowblockClient] = useState(false);
  const handleShowblockClient = () => setShowblockClient(true);
  const handleCloseblockClient = () => setShowblockClient(false);
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
          marginTop: "75px",
          height: "100%",
          // width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <HeaderComponent />
        <div className="client container mt-5">
          <div className="d-flex justify-between">
            <h1>العميل</h1>
            <div
              className="client-options cursor-pointer"
              onClick={handleShowReleaseModal}
            >
              <i class="sicon-user ml-1"></i>
              <span>خيارات العميل</span>
            </div>
          </div>
          <div className="client-info">
            <div className="client-image">
              <img
                alt="صورة العميل"
                height="80"
                src="https://storage.googleapis.com/a1aa/image/26DILztuhfSpdi6cjDSaJtd2eNBre8W4Md2vDfeATr56bwDhC.jpg"
                width="80"
              />
              <p>فجر جابر</p>
              <p>تاريخ الميلاد غير مدخل</p>
            </div>
            <div className="client-details">
              <p>
                <i class="ml-2 sicon-location v-align-middle"></i>
                المنطقة: نجران, Saudi Arabia
              </p>
              <p>
                <i class="ml-2 sicon-lang"></i>
                اللغة: العربية
              </p>
              <p>
                <i class="ml-2 sicon-calendar"></i>
                تاريخ التسجيل في المتجر: 2025-01-25
              </p>
              <p>
                <i class="ml-2 sicon-group"></i>
                منضم لمجموعة العملاء: اول طلب
              </p>
              <div className="phone-cover ">
                <a href="tel:+966#########">
                  966#########
                  <i class="ml-2 sicon-phone center inline-icon start"></i>
                </a>
              </div>
              <div className="client-contact">
                <a href="#">
                  <i class="ml-2 sicon-whatsapp"></i>
                  واتساب
                </a>
                <a href="#">
                  <i class="ml-2 sicon-chat-message-alt"></i>
                  رسالة نصية
                </a>

                <a href="#">
                  <i class="ml-2 sicon-mail"></i>
                  ايميل
                </a>
              </div>
            </div>
          </div>
        </div>
        <OrderSummary orders={[]} />
      </main>
      <Modal
        show={showReleaseModal}
        onHide={handleCloseReleaseModal}
        dialogClassName="client left-aligned-service-release"
      >
        <Modal.Body>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>ارسال رسالة</p>
            </div>
            <div className="icon-container-drop">
              <i class="sicon-chat-conversation"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div
              className="text-container-service"
              onClick={handleShoweditClient}
            >
              <p>تعديل العميل</p>
            </div>
            <div className="icon-container-drop">
              <i class="sicon-edit"></i>
            </div>
          </div>
          <div
            className="dropdown-item-service"
            onClick={handleShowblockClient}
          >
            <div className="text-container-service">
              <p> حظر العميل</p>
            </div>
            <div className="icon-container-drop">
              <i class="sicon-block"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showeditClient}
        onHide={handleCloseeditClient}
        dialogClassName="client "
      >
        <Modal.Body>
          <div className="modal-header">
            <h5 className="modal-title">تعديل معلومات المستخدم (فجر جابر)</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value="فجر"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  اسم العائلة
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value="جابر"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value="no_reply@salla.sa"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">
                  تاريخ الميلاد
                </label>
                <input type="date" className="form-control" id="birthDate" />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  النوع
                </label>
                <select className="form-select" id="gender">
                  <option>النوع</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-save mr-auto">
              حفظ
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showblockClient}
        onHide={handleCloseblockClient}
        dialogClassName="client "
      >
        <Modal.Body>
          <div className="modal-header">
            <h5 className="modal-title">سبب الحظر</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  سبب الحظر
                </label>
                <select className="form-select" id="gender">
                  <option disabled> سبب الحظر</option>
                  <option>العميل لا يجيب عند التواصل</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  تفاصيل اخرى{" "}
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="تفاصيل اخرى"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-save mr-auto">
              حفظ
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Clients;
