import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaExpandArrowsAlt } from "react-icons/fa";

function Helper() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [isLarge, setIsLarge] = useState(false);

  const toggleSize = () => setIsLarge((prev) => !prev);
  return (
    <div>
      {" "}
      <Button
        className="help-dropdown"
        onClick={handleShow}
        style={{ marginRight: "15px" }}
      >
        <i className="sicon-life-ring mx-1"></i>
        المساعدة
        <i className="mx-2" style={{ color: "white" }}>
          {showModal ? (
            <i className="sicon-keyboard_arrow_down"></i>
          ) : (
            <i className="sicon-keyboard_arrow_up"></i>
          )}
        </i>
      </Button>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName={`left-aligned-modal ${
          isLarge ? "modal-large" : "modal-small"
        }`}
      >
        <Modal.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#a6abc8",
          }}
        >
          <Modal.Title>المقالات</Modal.Title>
          <span
            onClick={toggleSize}
            className="toggle-btn"
            style={{ display: "flex" }}
          >
            <div> {isLarge ? " تصغير" : "تكبير"}</div>
            <div>
              {" "}
              <FaExpandArrowsAlt className="mx-2" />{" "}
            </div>
          </span>
        </Modal.Header>
        <Modal.Body
          className="custom-scroll"
          style={{ height: "500px", overflowY: "auto" }}
        >
          <div style={{ textAlign: "center" }}>
            <input
              type="text"
              className="form-control"
              placeholder="بحث عن ما تريد....."
              style={{ margin: "auto auto", marginBottom: "15px" }}
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    المنتجات
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>الطلبات</div>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
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
                  Tempore rem reprehenderit voluptatem ducimus dolor
                  consequuntur aliquam, et soluta eveniet delectus.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Helper;
