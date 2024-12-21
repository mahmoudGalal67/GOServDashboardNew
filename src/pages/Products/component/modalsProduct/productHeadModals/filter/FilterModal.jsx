import React, { useState } from 'react';
import Accordion from "react-bootstrap/Accordion";
import { Modal, Button, Form } from "react-bootstrap";
import ExportModal from '../export/ExportModal';
import '../../../ProductHead.css';

const FilterModal = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleShowFilterModal = () => setShowFilterModal(true);
  const handleCloseFilterModal = () => setShowFilterModal(false);
  const productStatuses = [
    "الكل",
    "منتجات غير مسعرة",
    "منتجات مبينة",
    "منتجات مخفية",
    "منتجات مخفية من تطبيق المتجر",
    "منتجات مخفضة",
    "منتجات نفدت",
    "منتجات للبيع",
    "منتجات غير مصنفة",
    "منتجات خاضعة للضريبة",
    "منتجات تتطلب شحن",
    "منتجات قاربت على النفاذ",
    "منتجات بدون وصف",
  ];

  const productBrands = [
    "الكل",
    "فندي",
    "اديداس",
    "كالفن كلاين",
    "موسكينو",
    "نابيك",
    "بوما",
    "تومي هيلفيغر",
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const productTypes = [
    "الكل",
    "منتج جاهز",
    "خدمة حسب الطلب",
    "أكل",
    "منتج رقمي",
    "إضافة رقمنة",
    "مجموعة منتجات",
    "حجوزات",
    "استخدام نماذج جاهزة!",
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const classifications = [
    "الصيف",
    "الربيع",
    "الشتاء",
    "كفر جوال حديثة",
    "هديا حسب الفئة",
    "نسائية",
    "عطور",
    "اكسسورات",
    "ساعات",
    "مواليد",
  ];
  return (
    <>
        <Button className="btn-filter" onClick={handleShowFilterModal}>
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
              <h4> <i className="sicon-filter mx-2" style={{ fontSize: "15px" }}></i>فرز المنتجات حسب</h4>
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
                    حالة المنتج
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {productStatuses.map((type, index) => (
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
                    ماركة المنتج
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form.Select
                    aria-label="ماركة المنتج"
                    style={{ textAlign: "right" }}
                  >
                    <option value="" disabled hidden>
                      الماركة
                    </option>
                    {productBrands.map((brand, index) => (
                      <option key={index} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </Form.Select>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    {" "}
                    نوع المنتج
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {productTypes.map((type, index) => (
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
              <Accordion.Item eventKey="3" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    تصنيف المنتج
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form.Select
                    aria-label="ماركة المنتج"
                    style={{ textAlign: "right" }}
                  >
                    <option value="">الصيف</option>
                    <option value="">هدية موسمية</option>
                    {classifications.map((classification, index) => (
                      <option key={index} value={classification}>
                        ___{classification}
                      </option>
                    ))}
                  </Form.Select>
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
          <ExportModal/>
        </Modal.Body>
      </Modal>
    </>
    
  );
};

export default FilterModal;
