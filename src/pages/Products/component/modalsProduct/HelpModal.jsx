import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaExpandArrowsAlt } from "react-icons/fa";
import "./HelpModal.css";

const HelpModal = ({showModal, handleClose}) => {
  const [isLarge, setIsLarge] = useState(false);
  const toggleSize = () => setIsLarge((prev) => !prev);
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName={`left-alignedHelp-modal ${
        isLarge ? "modal-large" : "modal-small"
      }`}
    >
      <Modal.Header style={{backgroundColor:"#77c1e3"}}>
        <Modal.Title>المقالات</Modal.Title>
        <button onClick={toggleSize} className="toggle-btn">
          <FaExpandArrowsAlt className="mx-2" />
          {isLarge ? "تصغير" : "تكبير"}
        </button>
      </Modal.Header>
      <Modal.Body
        className="custom-scroll"
        style={{ height: "500px", overflowY: "auto" }}
      >
        <div style={{ textAlign: "center", direction: "rtl" }}>
          <input
            type="text"
            className="form-control"
            placeholder="بحث عن ما تريد....."
            style={{ marginBottom: "15px" }}
          />
          <Accordion defaultActiveKey="0" className="custom-accordion">
            <Accordion.Item eventKey="">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  إعداد المتجر لأول مرة
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>المنتجات</div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>الطلبات</div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  التسويق والأدوات التسويقية
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  الثيمات وتصميم المتجر
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  الشحن والتوصيل
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  إدارة المدفوعات ومحفظة المتجر
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  إدارة المدفوعات ومحفظة المتجر
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  باقات ومتجر سلة
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  صانع التطبيقات
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                <div style={{ flexGrow: 1, textAlign: "right" }}>
                  تلميحات التسويق وإعادة الاستهداف
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore rem reprehenderit voluptatem ducimus dolor consequuntur
                aliquam, et soluta eveniet delectus.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HelpModal;
