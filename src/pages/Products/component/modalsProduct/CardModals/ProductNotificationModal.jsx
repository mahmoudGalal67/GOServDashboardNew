import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../../ProductCard.css";
import "../../ProductsRow.css";

const ProductNotificationModal = ({ isColumn }) => {
  const [productAmount, setProductAmount] = useState(0);
  const [thresholdAmount, setThresholdAmount] = useState(15);
  const [notifyPercentage, setNotifyPercentage] = useState(100);
  const [showProductNotificationModal, setProductNotificationModal] =
    useState(false);
  const handleProductNotificationModalClose = () =>
    setProductNotificationModal(false);
  const handleProductNotificationModalShow = () =>
    setProductNotificationModal(true);

  const handleSave = () => {
    handleProductNotificationModalClose();
  };

  return (
    <>
      {isColumn ? (
        <div className="icon-1" onClick={handleProductNotificationModalShow} style={{cursor:"pointer"}}>
          <i className="sicon-bell-time"></i>
        </div>
      ) : (
        <div
          className="icon-1"
          style={{ marginTop: "10px", padding: "0 8px" ,cursor:"pointer"}}
          onClick={handleProductNotificationModalShow}
        >
          <i className="sicon-bell-time" style={{ color: "#aaa" }}></i>
        </div>
      )}
      <Modal
        show={showProductNotificationModal}
        onHide={handleProductNotificationModalClose}
        centered
        className="notification"
        size="lg"
        style={{ zIndex: 9999999999 }}
      >
        <div className="modal-header">
          <h4>netflix - تنبهات المنتج </h4>
          <Button
            variant="link"
            onClick={handleProductNotificationModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>نبهني عند وصول كمية المنتج إلى</Form.Label>
              <br />
              <Form.Text className="text-muted">
                سيتم إشعارك قبل نفاذ كمية المنتج
              </Form.Text>

              <div className="input-container">
                <button style={{borderRight:"1px solid #ddd"}}>
                  <i className="bg-white text-black">قطعة</i>
                </button>
                <input
                  type="text"
                  className="text-input"
                  placeholder="0"
                />
                <i
                  className="sicon-luggage-cart"
                  style={{ color: "#aaa", marginRight: "8px" }}
                ></i>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                تنبيه العملاء المشتركين في "أعلمني عند التوفر" عند توفر كمية
                للمنتج أكبر من
              </Form.Label>
              <br />
              <Form.Text className="text-muted">
                لتجنب إرسال الإشعارات للعملاء عند توفر كمية بسيطة من المنتج،
                يمكنك تحديد الحد الأدنى المطلوب توفره للبدء في إرسال الإشعارات
                للعملاء، القيمة الافتراضية 15
              </Form.Text>
              <div className="input-container">
                <button style={{borderRight:"1px solid #ddd"}}>
                  <i className="bg-white text-black">قطعة</i>
                </button>
                <input
                  type="text"
                  className="text-input"
                  placeholder="15"
                />
                <i
                  className="sicon-megaphone"
                  style={{ color: "#aaa", marginRight: "8px" }}
                ></i>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>نسبة العملاء المراد إشعارهم</Form.Label>
              <Form.Text className="text-muted">
                سيتم إرسال إشعار توفر المنتج لنسبة من العملاء المشتركين في
                "أعلمني عند التوفر". عدد العملاء المشتركين الآن 0 عملاء.
              </Form.Text>
              <div className="input-container">
                <button style={{borderRight:"1px solid #ddd"}}>
                  <i className="bg-white text-black">%</i>
                </button>
                <input
                  type="text"
                  className="text-input"
                  placeholder="100"
                />
                <i
                  className="sicon-special-discount"
                  style={{ color: "#aaa", marginRight: "8px" }}
                ></i>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button
            variant="secondary"
            onClick={handleSave}
            className="save-btn-options"
          >
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductNotificationModal;
