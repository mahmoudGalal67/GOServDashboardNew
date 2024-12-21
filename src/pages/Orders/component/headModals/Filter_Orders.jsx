import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../RequestHead.css";
import { Modal, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterOrders = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const handleShowFilterModal = () => setShowFilterModal(true);
  const handleCloseFilterModal = () => setShowFilterModal(false);

  const requestStatuses = [
    "الكل",
    "مسودة",
    "محذوف",
    "بانتظار الدفع",
    "بانتظار المراجعة",
    "قيد التنفيذ",
    "تم التنفيذ",
    "جاري التوصيل",
    "تم التوصيل",
    "تم الشحن",
    "ملغي",
    "مسترجع",
    "قيد الاسترجاع",
    "طلب عرض السعر",
  ];
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const shippingCompany = [
    "الكل",
    "مندوب مكة",
    "ارامكس",
    "سمسا",
    "DHL Express",
    "البريد السعودي | شبل",
    "اي مكان",
    "برق",
    "كريم",
    "ريدبوكس",
    "أفق السرعة",
  ];
  const requestType = ["الكل", "طلب مباشر", "تبرع سريع"];
  const paymentMethod = [
    "الكل",
    "الدفع عند الاستلام",
    "البطاقة الإتمانية",
    "مدى",
    "قوقل باي",
    "تمارا",
    "تابي",
    "ام اي اس باي",
    "كي نت",
  ];

  const notRead = ["نعم"];

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

  const branch = ["الكل", "الرئيسي"];

  const arrangeOrders = [
    "رقم الطلب - تنازلياً",
    "رقم الطلب - تصاعدياً",
    "إجمالي الطلب - تنازلياً",
    "إجمالي الطلب - تصاعدياً",
    "تاريخ آخر تحديث - تصاعدياً",
    "تاريخ آخر تحديث - تنازلياً",
    "تاريخ الطلب - تصاعدياً",
    "تاريخ الطلب - تنازلياً",
  ];

  const [selectedType, setSelectedType] = useState("");

  const handleRadioChange = (event) => {
    setSelectedType(event.target.value);
  };

  const employeeRequests = ["الكل"];

  const salesChannels = [
    "الكل",
    "مستعرض جوال",
    "مستعرض كمبيوتر",
    "تسويق بالعمولة",
    "تطبيق محلي",
    "تطبيق نقاط البيع",
    "غير معروف",
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <>
      <Button className="btn-services" onClick={handleShowFilterModal}>
        <i className="sicon-filter icon-filter"></i> تصفية
      </Button>
      <Modal
        show={showFilterModal}
        onHide={handleCloseFilterModal}
        dialogClassName="full-screen-modal"
      >
        <Modal.Body
          className="custom-scroll"
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
              }}
            >
              <h4>
                {" "}
                <i
                  className="sicon-filter mx-2"
                  style={{ fontSize: "15px" }}
                ></i>
                فرز الطلبات حسب
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
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-flag-wave mx-2"></i>
                    حالة الطلب
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {requestStatuses.map((type, index) => (
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
              <Accordion.Item eventKey="1" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-shipping mx-2"></i>
                    شركة الشحن
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {shippingCompany.map((type, index) => (
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    {" "}
                    <i className="sicon-credit-card mx-2"></i>
                    نوع الطلب
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
                    <i className="sicon-full-wallet mx-2"></i>
                    لم يتم قرائتها
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {notRead.map((type, index) => (
                      <div key={index} style={{ textAlign: "right" }}>
                        <label>
                          <input
                            type="radio"
                            name="orderType"
                            value={type}
                            checked={selectedType === type}
                            onChange={handleRadioChange}
                            style={{ marginLeft: "10px" }}
                          />
                          {type}
                        </label>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="4" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-flag-wave mx-2"></i>
                    طريقة الدفع
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {paymentMethod.map((type, index) => (
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
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="5" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-location mx-2"></i>
                    الدولة والمدينة
                  </div>
                </Accordion.Header>
                <Accordion.Body style={{ position: "relative" }}>
                  <label
                    style={{ position: "absolute", right: "60px", top: 10 }}
                  >
                    الدولة
                  </label>
                  <Form.Select
                    aria-label="الدولة"
                    style={{ textAlign: "right", marginTop: "20px" }}
                  >
                    <option value="">السعودية</option>
                    {country.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </Form.Select>

                  <label
                    style={{ position: "absolute", right: "60px", top: 90 }}
                  >
                    المدينة
                  </label>
                  <Form.Select
                    aria-label="المدينة"
                    style={{ textAlign: "right", marginTop: "40px" }}
                  >
                    <option value="">كل المدن</option>
                    {city.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </Form.Select>
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="6" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-store mx-2"></i>
                    الفرع
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {branch.map((branch, index) => (
                      <div key={index} style={{ textAlign: "right" }}>
                        <label>
                          <input
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            style={{ marginLeft: "10px" }}
                          />
                          {branch}
                        </label>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="7" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-list-reorder mx-2"></i>
                    ترتيب الطلبات
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {arrangeOrders.map((type, index) => (
                      <div key={index} style={{ textAlign: "right" }}>
                        <label>
                          <input
                            type="radio"
                            name="orderType"
                            value={type}
                            checked={selectedType === type}
                            onChange={handleRadioChange}
                            style={{ marginLeft: "10px" }}
                          />
                          {type}
                        </label>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="8" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-user mx-2"></i>
                    طلبات الموظف
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {employeeRequests.map((type, index) => (
                    <div key={index} style={{ textAlign: "right" }}>
                      <label>
                        <input
                          name="type"
                          type="checkbox"
                          onChange={handleCheckboxChange}
                          style={{ marginLeft: "10px" }}
                        />
                        {type}
                      </label>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="9" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-devices mx-2"></i>
                    قنوات البيع
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {salesChannels.map((type, index) => (
                      <div key={index} style={{ textAlign: "right" }}>
                        <label>
                          <input
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            style={{ marginLeft: "10px" }}
                          />
                          {type}
                        </label>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="10" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-calendar-dates mx-2"></i>
                    تاريخ الطلب
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
              <Accordion.Item eventKey="11" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-tag mx-2"></i>
                    الوسوم
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form.Select
                    aria-label="الوسوم"
                    style={{ textAlign: "right", marginTop: "20px" }}
                  >
                    <option value="">اختار احد الوسوم </option>
                  </Form.Select>
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="12" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    <i className="sicon-t-shirt mx-2"></i>
                    المنتجات
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form.Select
                    aria-label="المنتجات"
                    style={{ textAlign: "right", marginTop: "20px" }}
                  >
                    <option value="">ابحث عن المنتج .....</option>
                  </Form.Select>
                  <p style={{ fontSize: "12px", marginTop: "5px" }}>
                    الحد الاقصى المسموح به هو منتج واحد فقط
                  </p>
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
          <Button
            variant="light"
            style={{
              border: "1px solid #dee2e6",
              color: "#6c757d",
              width: "250px",
              marginTop: "10px",
            }}
          >
            <i className="sicon-file-download"></i> تصدير النتائج
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilterOrders;
