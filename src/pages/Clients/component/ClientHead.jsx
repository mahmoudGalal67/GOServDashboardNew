import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPlus, FaFilter, FaTools, FaClipboardCheck } from "react-icons/fa";
import "./ClientHead.css";
import { Modal, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const RequestHead = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const handleShowFilterModal = () => setShowFilterModal(true);
  const handleCloseFilterModal = () => setShowFilterModal(false);

  const requestStatuses = ["الكل", "الذكور", "الاناث"];
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const requestType = ["الكل", "اول الطلب"];
  const country = ["الكل"];
  const city = [
    "الرياض",
    "جدة",
    "مكة",
    "المدينة المنورة",
    "الدمام",
    "الاحساء",
    "القطيف",
    "خميس مشيط",
    "المظليف",
    "تبوك",
    "الهفوف",
    "المبرز",
  ];
  const [selectedType, setSelectedType] = useState("");

  const handleRadioChange = (event) => {
    setSelectedType(event.target.value);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  const [showServiceModal, setShowServiceModal] = useState(false);

  const handleShowServiceModal = () => setShowServiceModal(true);
  const handleCloseServiceModal = () => setShowServiceModal(false);
  return (
    <div>
      <div className="header-container-client-head">
        <div className="header-right-client bg-none">
          <Button
            className="btn-add-client"
            style={{ backgroundColor: "white", border: "1px solid blue" }}
          >
            <span className="spanIcon">
              <i className="sicon-add mr-2"></i>
            </span>
            عميل جديد
          </Button>
        </div>
        <div>
          <Button
            className="btn-services-client"
            onClick={handleShowFilterModal}
          >
            <i className="sicon-filter icon-filter"></i> تصفية
          </Button>
          <Button
            className="btn-services-client"
            onClick={handleShowServiceModal}
          >
            <i className="sicon-toolbox icon-toolbox"></i> خدمات
          </Button>
        </div>
      </div>

      <Modal
        show={showFilterModal}
        onHide={handleCloseFilterModal}
        dialogClassName="full-screen-modal"
      >
        <Modal.Body
          className="customer-scroll"
          style={{
            height: "100vh",
            overflowY: "auto",
            direction: "rtl",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h4>
                {" "}
                <i
                  className="sicon-filter mx-2"
                  style={{ fontSize: "15px" }}
                ></i>
                فرز العملاء حسب
              </h4>
              <div className="close-button-class">
                <Button
                  variant="link"
                  onClick={handleCloseFilterModal}
                  className="close-button-filter"
                >
                  &times;
                </Button>
              </div>
            </div>

            <div>
              <h3>طلبات جديدة الإسم او رقم الجوال يحتوي على</h3>
              <div className="customer-search-container">
                <input
                  type="text"
                  className="customer-search-input"
                  placeholder="ابحث عن ما تريد"
                  style={{ marginBottom: "20px" }}
                />
                <i className="sicon-user customer-search-icon"></i>
              </div>
            </div>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-user mx-2"></i>
                    الجنس
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {requestStatuses.map((type, index) => (
                      <div key={index} style={{ textAlign: "right" }}>
                        <label>
                          <input
                            type="radio"
                            name={type}
                            checked={!!checkedItems[type]}
                            onChange={handleCheckboxChange}
                            style={{ marginLeft: "10px" }}
                          />
                          {type}
                        </label>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-location mx-2"></i>
                    العنوان
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <label style={{ position: "absolute", right: "80px" }}>
                    الدولة
                  </label>
                  <Form.Select
                    aria-label="الدولة"
                    style={{ textAlign: "right", marginTop: "25px" }}
                  >
                    <option value="">كل الدوال</option>
                    {country.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </Form.Select>

                  <label
                    style={{
                      position: "absolute",
                      right: "80px",
                      marginTop: "10px",
                    }}
                  >
                    المدينة
                  </label>
                  <Form.Select
                    aria-label="المدينة"
                    style={{ textAlign: "right", marginTop: "35px" }}
                  >
                    <option value="">اختر الدولة اولا</option>
                    {city.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </Form.Select>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    {" "}
                    <i className="sicon-users mx-2"></i>
                    المجموعات
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {requestType.map((type, index) => (
                      <div key={index} style={{ textAlign: "right" }}>
                        <label>
                          <input
                            type="checkbox"
                            name={type}
                            checked={!!checkedItems[type]}
                            onChange={handleCheckboxChange}
                            style={{ marginLeft: "10px" }}
                          />
                          {type}
                        </label>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-align-right mx-2"></i>
                    تاريخ فتح الحساب
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <div style={{ marginTop: "10px" }}>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="من"
                        dateFormat="MM/dd/yyyy"
                        style={{ paddingRight: "30px" }}
                        className="custom-datepicker"
                      />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="الي"
                        dateFormat="MM/dd/yyyy"
                        style={{ paddingRight: "30px" }}
                        className="custom-datepicker"
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>{" "}
            </Accordion>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="primary"
              style={{
                backgroundColor: "#82CAFF",
                border: "none",
                width: "160px",
              }}
            >
              عرض النتائج
            </Button>
            <Button
              variant="secondary"
              style={{
                border: "none",
                margin: "0 10px",
                width: "90px",
              }}
            >
              إعادة تعيين
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showServiceModal}
        onHide={handleCloseServiceModal}
        dialogClassName="left-aligned-service-client"
      >
        <Modal.Body>
          <div className="dropdown-item-service-client">
            <div className="text-container-service">
              <p>استيراد العملاء</p>
            </div>
            <div className="icon-container-drop-client">
              <i className="sicon-archive-upload"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RequestHead;
