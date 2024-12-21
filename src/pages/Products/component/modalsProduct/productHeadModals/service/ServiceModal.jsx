import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import '../../../ProductHead.css';

const ServiceModal = () => {
  const [showServiceModal, setShowServiceModal] = useState(false);

  const handleShowServiceModal = () => setShowServiceModal(true);
  const handleCloseServiceModal = () => setShowServiceModal(false);

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
    <>
      <Button className="btn-services" onClick={handleShowServiceModal}>
        <i className="sicon-toolbox icon-services"></i> خدمات
      </Button>
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
          <div
            className="dropdown-item-service"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-container-service">
              <p>
                {" "}
                <i
                  className="sicon-keyboard_arrow_left"
                  style={{ position: "absolute", left: 2 }}
                ></i>{" "}
                استيراد المنتجات
              </p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cloud-upload"></i>
            </div>
            {showImportDropdown && (
              <div className="dropdown-content p-2">
                <p>
                  استيراد المنتجات <i className="sicon-cloud-upload"></i>
                </p>
                <p>
                  استيراد كميات المنتجات <i className="sicon-cloud-upload"></i>
                </p>
                <p>
                  استيراد أسعار المنتجات <i className="sicon-cloud-upload"></i>
                </p>
                <p>
                  استيراد بيانات SEO <i className="sicon-cloud-upload"></i>
                </p>
              </div>
            )}
          </div>
          <div
            className="dropdown-item-service"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="text-container-service">
              <p>
                {" "}
                <i
                  className="sicon-keyboard_arrow_left"
                  style={{ position: "absolute", left: 2 }}
                ></i>{" "}
                تصدير المنتجات
              </p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cloud-download"></i>
            </div>
            {showExportDropdown && (
              <div className="dropdown-export-content p-2">
                <p>
                  <i
                    className="sicon-add"
                    style={{ position: "absolute", left: 2 }}
                  ></i>{" "}
                  اضافة قالب تصدير <i className="sicon-page"></i>
                </p>
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
    </>
  );
};

export default ServiceModal;
