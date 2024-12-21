import React, { useState } from "react";
import "./ProductHead.css";
import Accordion from "react-bootstrap/Accordion";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import {
  FaPlus,
  FaFilter,
  FaTools,
  FaTh,
  FaList,
  FaBoxOpen,
  FaCog,
  FaPizzaSlice,
  FaBook,
  FaGift,
  FaCubes,
  FaThLarge,
  FaCalendarAlt,
} from "react-icons/fa";

const ProductHead = ({ showProductList, hideProductList }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleShowFilterModal = () => setShowFilterModal(true);
  const handleCloseFilterModal = () => setShowFilterModal(false);

  const [showExportModal, setShowExportModal] = useState(false);

  const handleCloseExportModal = () => setShowExportModal(false);
  const handleShowExportModal = () => setShowExportModal(true);

  const [showServiceModal, setShowServiceModal] = useState(false);

  const handleShowServiceModal = () => setShowServiceModal(true);
  const handleCloseServiceModal = () => setShowServiceModal(false);

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

  const [showImportDropdown, setShowImportDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowImportDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowImportDropdown(false);
  };
  const [showExportDropdown, setShowExportDropdown] = useState(false);

  const handleMouseEnter2 = () => {
    setShowExportDropdown(true);
  };

  const handleMouseLeave2 = () => {
    setShowExportDropdown(false);
  };
  return (
    <div className="header-container">
      <div className="header-right">
        <Button className="btn-add-product" onClick={handleShowModal}>
          <span className="spanIcon">
            <FaPlus className="icon-plus" />
          </span>
          إضافة منتج جديد
          <span className="caret-icon me-2">{showModal ? <i className="sicon-keyboard_arrow_down"></i> : <i className="sicon-keyboard_arrow_up"></i>}</span>
        </Button>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          dialogClassName="left-aligned"
        >
          <Modal.Body>
            <div className="dropdown-item">
              <div className="text-container">
                <h5>منتج جاهز</h5>
                <p>المنتجات الملموسة والقابلة للشحن</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-packed-box"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h5>خدمة حسب الطلب</h5>
                <p>التصميم، الطباعة، البحوث، الكتابة</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-fabric-swatch"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h5>أكل</h5>
                <p>المأكولات والمشروبات التي تطلبها حسب خاص</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-cake"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h5>منتج رقمي</h5>
                <p>الكتب الإلكترونية، الدورات، ملفات التحميل</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-game-controller-alt"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h5>بطاقة رقمية</h5>
                <p>بطاقات الإهداء، حسابات للبيع</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-barcode-scan"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h5>مجموعة منتجات</h5>
                <p>أكثر من منتج في منتج واحد</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-inbox-full"></i>
              </div>
            </div>

            <div className="dropdown-item">
              <div className="text-container">
                <h5>حجوزات</h5>
                <p>دورات، استشارات، خدمات طبية وسياحية</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-calendar-date"></i>
              </div>
            </div>

            <div className="dropdown-item new-item">
              <span className="badge">جديد</span>
              <div className="text-container">
                <h5>استخدام نماذج جاهزة</h5>
                <p>إضافة منتج بسرعة وسهولة</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-layout-grid"></i>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="header-left">
        <Button className="btn-filter" onClick={handleShowFilterModal}>
          <i className="sicon-filter icon-filter"></i> تصفية
        </Button>
        <Button className="btn-services" onClick={handleShowServiceModal}>
          <i className="sicon-toolbox icon-services"></i> خدمات
        </Button>
        <Button className="btn-grid" onClick={showProductList}>
          <FaTh className="icon" style={{color:"#999"}}/>
        </Button>
        <Button className="btn-list" onClick={hideProductList}>
          <FaList className="icon" style={{color:"#999"}}/>
        </Button>
      </div>

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
          <Button
            variant="light"
            style={{
              border: "1px solid #dee2e6",
              color: "#6c757d",
              width: "250px",
              marginTop: "10px",
            }}
            onClick={handleShowExportModal}
          >
            <i className="sicon-file-download"></i> تصدير النتائج
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        show={showExportModal}
        onHide={handleCloseExportModal}
        centered
        size="lg"
        style={{ zIndex: 9999999999, marginTop: "-80px", marginStart: "20px" }}
      >
        <Modal.Header
          closeButton
          style={{
            direction: "rtl",
            backgroundColor: "rgb(183 214 247)",
            borderBottom: "none",
          }}
        >
          <Modal.Title style={{ textAlign: "right", width: "100%" }}>
            اختر صيغة الملف
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              controlId="exportTemplate"
              style={{ marginBottom: "20px", direction: "rtl" }}
            >
              <Form.Label>قالب التصدير</Form.Label>
              <Form.Control as="select" custom>
                <option value="default" selected>
                  تصدير أسعار المنتجات
                </option>
                <option>اختر قالب التصدير</option>
                <option>تصدير المنتجات</option>
                <option>تصدير كمية المنتجات</option>
                <option>تصدير اسعار المنتجات</option>
                <option>تصدير بيانات SEO</option>
                <option>تصدير كود التنسيق الاحمر</option>
              </Form.Control>
            </Form.Group>
            <Form.Group
              controlId="fileFormat"
              style={{ marginBottom: "20px", direction: "rtl" }}
            >
              <Form.Label>اختر صيغة الملف</Form.Label>
              <Form.Control as="select" custom>
                <option>CSV</option>
                <option>XLSX</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "space-between" }}>
          <Button
            variant="secondary"
            onClick={handleCloseExportModal}
            style={{
              backgroundColor: "#e0e0e0",
              border: "none",
              color: "#6c757d",
            }}
          >
            إلغاء
          </Button>
          <Button
            variant="primary"
            style={{
              backgroundColor: "rgb(183 214 247)",
              border: "none",
              color: "black",
            }}
            onClick={handleCloseExportModal}
          >
            تصدير
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showServiceModal}
        onHide={handleCloseServiceModal}
        dialogClassName="left-aligned-service"
      >
        <Modal.Body>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>تصنيفات المنتجات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-inbox-multi"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>إدارة الفلاتر (تجريبي)</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-filter"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>المعارض التجارية</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-award-ribbon"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>ترتيب المنتجات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-list-reorder"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>تعديل المنتجات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-edit"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>تعديل الأسعار</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-edit"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>جرد المنتجات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-box-bankers"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>سجل الكميات</p>
            </div>
            <div className="icon-container-drop">
              <FaCalendarAlt />
            </div>
          </div>
          <div className="dropdown-item-service"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="text-container-service">
              <p> <i className="sicon-keyboard_arrow_left" style={{ position: "absolute", left: 2 }}></i>  استيراد المنتجات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cloud-upload"></i>
            </div>
            {showImportDropdown && (
              <div className="dropdown-content p-2">
                <p>استيراد المنتجات <i className="sicon-cloud-upload"></i></p>
                <p>استيراد كميات المنتجات <i className="sicon-cloud-upload"></i></p>
                <p>استيراد أسعار المنتجات <i className="sicon-cloud-upload"></i></p>
                <p>استيراد بيانات SEO <i className="sicon-cloud-upload"></i></p>
              </div>
            )}
          </div>
          <div className="dropdown-item-service"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}>
            <div className="text-container-service">
              <p> <i className="sicon-keyboard_arrow_left" style={{ position: "absolute", left: 2 }}></i> تصدير المنتجات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cloud-download"></i>
            </div>
            {showExportDropdown && (
              <div className="dropdown-export-content p-2">
                <p><i className="sicon-add" style={{ position: "absolute", left: 2 }}></i> اضافة قالب تصدير <i className="sicon-page"></i></p>
                <hr />
                <p> تصدير الطلبات</p>
              </div>
            )}
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>حذف جميع المنتجات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-delete"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductHead;
