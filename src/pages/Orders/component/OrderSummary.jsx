import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./OrderSummary.css";
import { Modal, Form } from "react-bootstrap";

const OrderSummary = ({ selectedIndex, showDetails }) => {
  const data = [
    { title: "جاري التوصيل", count: 0 },
    { title: "تم التنفيذ", count: 0 },
    { title: "قيد التنفيذ", count: 0 },
    { title: "بانتظار المراجعة", count: 0 },
    { title: "بانتظار الدفع", count: 0 },
    { title: "محذوف", count: 0 },
  ];

  const selectedOrder = selectedIndex !== null ? data[selectedIndex] : null;

  const handleShowReleaseModal = () => setShowReleaseModal(true);
  const handleCloseReleaseModal = () => setShowReleaseModal(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  const handleMouseEnter2 = () => {
    setShowExportDropdown(true);
  };

  const handleMouseLeave2 = () => {
    setShowExportDropdown(false);
  };
  const handleMouseEnter = () => {
    setShowImportDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowImportDropdown(false);
  };
  const [showExportDropdown, setShowExportDropdown] = useState(false);

  const [showImportDropdown, setShowImportDropdown] = useState(false);
  return (
    <div className="order-summary">
      <div className="order-header">
        <div className="order-header-title">
          <input
            type="checkbox"
            className="order-header-checkbox mx-3"
            disabled
          />
          <h2>الطلبات </h2>
          {showDetails && selectedOrder ? (
            <div className="order-info">
              <span className="order-details">
                {selectedOrder.title} {selectedOrder.count}
              </span>
              <FontAwesomeIcon icon={faTimes} className="order-close-icon" />
            </div>
          ) : null}
        </div>
        <button className="order-edit-button" onClick={handleShowReleaseModal}>
          <i className="sicon-magic-wand flip-x"></i> تحرير سريع
        </button>
      </div>
      <div className="order-item">
        <div className="order-item-right">
          <div className="order-actions">
            <input type="checkbox" className="order-header-checkbox mx-2" />
          </div>
          <div className="order-details">
            {showDetails && selectedOrder ? (
              <p style={{ color: "black" }}>لا توجد طلبات محددة</p>
            ) : (
              <p>
                <span> #128487450 </span>
                <span> مستعرض الجوال</span>
                <span> مسودة </span>
              </p>
            )}
          </div>
        </div>

        {showDetails && selectedOrder ? null : (
          <div className="order-item-left">
            <div className="order-item-left-1">
              <p style={{ color: "black" }}>SAR 0</p>
            </div>
            <div className="order-item-left-2">
              <p>منذ اليوم</p>
            </div>
          </div>
        )}
      </div>

      <Modal
        show={showReleaseModal}
        onHide={handleCloseReleaseModal}
        dialogClassName="left-aligned-service-release"
      >
        <Modal.Body>
          <div
            className="dropdown-item-service"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="text-container-service">
              <p>
                <i
                  className="sicon-keyboard_arrow_left"
                  style={{ position: "absolute", left: 2 }}
                ></i>{" "}
                تعديل حالة الطلب
              </p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-inbox-multi"></i>
            </div>
            {showExportDropdown && (
              <div className="dropdown-content p-2">
                <p>محذوف</p>
                <p>بانتظار الدفع</p>
                <p>بانتظار المراجعة</p>
                <p>قيد التنفيذ</p>
                <p>تم التنفيذ</p>
                <p>جاري التوصيل</p>
                <p>تم التوصيل</p>
                <p>تم الشحن</p>
                <p>ملغي</p>
                <p>مسترجع</p>
              </div>
            )}
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>اسناد الي الموظفين</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-users"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعة الفواتير</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-newspaper-alt"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعة ملخص الفواتير</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-receipt"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعة قوائم التجهيز</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-barcode-scan"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعةالبوليصات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-shipping"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>تصدير الطلبات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-share"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>ارجاع مبلغ الطلب</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cash-payment"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>حذف الطلب</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-trash"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OrderSummary;
