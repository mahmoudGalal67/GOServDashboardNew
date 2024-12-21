import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../RequestHead.css";
import { Modal, Form } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

const ServiceOrders = () => {
  const [showServiceModal, setShowServiceModal] = useState(false);

  const handleShowServiceModal = () => setShowServiceModal(true);
  const handleCloseServiceModal = () => setShowServiceModal(false);

  const handleMouseEnter2 = () => {
    setShowExportDropdown(true);
  };

  const handleMouseLeave2 = () => {
    setShowExportDropdown(false);
  };

  const [showExportDropdown, setShowExportDropdown] = useState(false);

  const [showImportDropdown, setShowImportDropdown] = useState(false);

  return (
    <>
      <Button className="btn-services" onClick={handleShowServiceModal}>
        <i className="sicon-toolbox icon-toolbox"></i> خدمات
      </Button>
      <Modal
        show={showServiceModal}
        onHide={handleCloseServiceModal}
        dialogClassName="left-aligned-service-request"
      >
        <Modal.Body>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>الاستاذ التلقائي</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-user-check"></i>
            </div>
          </div>
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
                تصدير الطلبات
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
              <p>تخصيص الحالات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-magic-wand"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>تحديث حالات الطلبات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-edit"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>عملية الدفع الالكتروني</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-script"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ServiceOrders;
