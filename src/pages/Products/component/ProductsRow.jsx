import React, { useState } from "react";
import styled from "styled-components";
import "./ProductsRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faChevronDown,
  faThumbtack,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Form, Col, Dropdown } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { MdDelete } from "react-icons/md";
import { FaTrash, FaUpload } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import AddNewPhotoModal from "./modalsProduct/CardModals/AddNewPhotoModal";
import OptionsModal from "./modalsProduct/CardModals/OptionsModal";
import CategoryModal from "./modalsProduct/CardModals/CategoryModal";
import DetailsModal from "./modalsProduct/CardModals/DetailsModal";
import ProductNotificationModal from "./modalsProduct/CardModals/ProductNotificationModal";


const ProductFormContainer = styled.div`
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  width: 98%;
  border: 1px solid #ccc;
  // max-width: 1600px;
  margin: 0 auto;
  overflow:-xhidden;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #a7dfd5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ProductsRow = ({ imageUrl, price, Prductname, placeholder, newprd , onDelete ,onImageUpload }) => {
  function ToggleCheckButton() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
      setIsChecked(!isChecked);
    };

    return (
      <button
        onClick={handleToggle}
        className={`toggle-button ${isChecked ? "checked" : ""}`}
      >
        {isChecked ? "✔" : " "}
      </button>
    );
  }

  const [productDetails, setProductDetails] = useState({
    language: "AR",
    price: 150,
    quantity: 26,
    description: "هدايا حسب الحدث",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const [isRed, setIsRed] = useState(false);

  const handleColorClick = () => {
    setIsRed((prev) => !prev);
  };

  return (
    <ProductFormContainer
      style={{ marginBottom: "20px" }}
      className="RowHeadClass"
    >
      <Row className="RowFlex">
        <Col className="col-1">
          <div style={{ marginTop: "-15px" }}>
          {newprd ? (
            <button className="check-icon-btn deleteCardButton" style={{color:"white",backgroundColor:"red"}}  onClick={onDelete}>X</button>
          ) : (
            <button className="check-icon-btn">
            <ToggleCheckButton />
          </button> 
          )}
          </div>
          <div
            className="icon-upload"
            style={{ backgroundColor: isRed ? "red" : "white"}}
            onClick={handleColorClick}
          >
            <FontAwesomeIcon icon={faThumbtack} />
          </div>
        </Col>
        <Col style={{ position: "relative" }} className="col-2">
          <img src={imageUrl} alt="" className="CardImage" />
          <AddNewPhotoModal  isColumn={false} onImageUpload={onImageUpload}/>
        </Col>
        <Col className="col-3">
          <div className="product-info" style={{ width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <div className="product-name-placeholder">
                <div
                  className="inputClass"
                  style={{ width: "70%", marginRight: "0", padding: "2px" }}
                >
                  <i
                    className="sicon-packed-box"
                    style={{ marginRight: "5px" }}
                  ></i>
                  <input
                    type="text"
                    placeholder={placeholder}
                    Value={Prductname}
                    style={{ border: "none", fontSize: "12px" }}
                    className="product-input"
                  />
                </div>
                <div
                  className="selectClass"
                  style={{ width: "35%", fontSize: "12px" }}
                >
                  <select
                    name="language"
                    value={productDetails.language}
                    onChange={handleChange}
                    style={{ width: "60%", border: "none" }}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
              <div className="product-name-input" style={{ height: "45px" }}>
                <div style={{ width: "70%", display: "flex" }}>
                  <i
                    className="sicon-dollar-coin-stack"
                    style={{ marginTop: "10px", marginRight: "-5px" }}
                  ></i>
                  <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="السعر"
                    onChange={handleChange}
                    style={{ border: "none" }}
                  />
                </div>
                <div
                  className="labelPriceClass"
                  style={{
                    borderRight: "1px solid #aaa",
                    padding: "0px",
                    width: "10%",
                  }}
                >
                  <label style={{ width: "100%", padding: "2px" }}>ر.س</label>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "9px",
                marginTop: "17px",
              }}
            >
              <div className="product-q-placeholder">
                <div
                  className="inputClass"
                  style={{ width: "50%", borderLeft: "1px solid #aaa" }}
                >
                  <i
                    className="sicon-box-bankers"
                    style={{ marginRight: "5px", color: "#aaa" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="كمية غير محددة"
                    style={{ border: "none" }}
                    className="product-input"
                  />
                </div>
                  <ProductNotificationModal isColumn={false} />
                <div
                  className="icon-2"
                  style={{
                    position: "relative",
                    borderRight: "1px solid #aaa",
                    padding: "2px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 10,
                      right: 14,
                      top: 10,
                    }}
                  >
                    <svg
                      data-v-4ed85b4c=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="20px"
                      height="20px"
                      style={{ color: "#aaa" }}
                    >
                      <path
                        data-v-4ed85b4c=""
                        d="M 8 8 C 3.6102416 8 0 11.595515 0 16 C 0 20.400585 3.599415 24 8 24 C 10.646 24 12.420344 22.745203 13.777344 21.033203 C 13.147344 20.063203 12.616672 19.057234 12.138672 18.115234 C 10.996672 19.940234 9.828 21 8 21 C 5.220585 21 3 18.779415 3 16 C 3 13.224485 5.2377584 11 8 11 C 9.4265669 11 10.267624 11.520682 11.15625 12.525391 C 12.044876 13.530099 12.834942 15.048526 13.652344 16.673828 C 14.469745 18.29913 15.315394 20.031983 16.585938 21.464844 C 17.85648 22.897705 19.696851 24 22 24 C 26.362802 24 30 20.414234 30 16 C 30 11.599415 26.400585 8 22 8 C 19.35 8 17.576703 9.2652813 16.220703 10.988281 C 16.849703 11.961281 17.379422 12.969109 17.857422 13.912109 C 19.003422 12.069109 20.172 11 22 11 C 24.779415 11 27 13.220585 27 16 C 27 18.765766 24.719198 21 22 21 C 20.566649 21 19.72091 20.477295 18.830078 19.472656 C 17.939247 18.468017 17.14913 16.95087 16.332031 15.326172 C 15.514933 13.701474 14.671546 11.969901 13.404297 10.537109 C 12.137048 9.1043186 10.298933 8 8 8 z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <OptionsModal isColumn={false}/>
               
              </div>
              <div
                className="tab-item tab-container"
                style={{
                  width: "49%",
                  display: "flex",
                  height: "43px",
                  marginRight: "4px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "60%",
                  }}
                >
                  <select
                    placeholder="اختر تصنيف المنتج"
                    style={{ border: "none", width: "100%",padding:"none" ,marginRight:"0px"}}
                  >
                    <option value="">اختر تصنيف المنتج</option>
                    <option value="">المزيد</option>
                    <option value="">الشتاء (مخفي)</option>
                    <option value="">الصيف (مخفي)</option>
                    <option value="">الربيع (مخفي)</option>
                    <option value="">كفر جوال هدية</option>
                  </select>
                </div>
                <div style={{ width: "35%" }}>
                <CategoryModal  isColumn={false}/>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-4">
          <div className="tab-container" style={{ marginTop: "15px" }}>
            {/* <div className="tab-item active" onClick={handleDetailsModalShow}>
              <FontAwesomeIcon icon={faSlidersH} />
              <span>بيانات المنتج</span>
            </div> */}
            <DetailsModal isColumn={false}/>
            <div className="tab-item">
              <span>المزيد</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="save-button-container">
            <button className="save-button">حفظ</button>
          </div>
        </Col>
      </Row>
    </ProductFormContainer>
  );
};

export default ProductsRow;
