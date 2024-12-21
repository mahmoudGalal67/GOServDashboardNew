import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import '../../../ProductHead.css';

const ExportModal = () => {
  const [showExportModal, setShowExportModal] = useState(false);
  const handleCloseExportModal = () => setShowExportModal(false);
  const handleShowExportModal = () => setShowExportModal(true);
  
  return (
    <>
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
    </>
  );
};

export default ExportModal;
