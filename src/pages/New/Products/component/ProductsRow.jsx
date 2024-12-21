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

const ProductsRow = ({ imageUrl }) => {
  const ProductFormContainer = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
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

  const [showModal, setShowModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleOptionsModalClose = () => setShowOptionsModal(false);
  const handleOptionsModalShow = () => setShowOptionsModal(true);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const [uploadedImage, setUploadedImage] = useState(null);
  const handleFiles = (files) => {
    const validFiles = files.filter((file) => file.type.startsWith("image/"));
    if (validFiles.length > 0) {
      const file = validFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const [options, setOptions] = useState([{ color: "", language: "AR" }]);
  const addOption = () => {
    setOptions([...options, { color: "", language: "AR" }]);
  };

  const handleOptionChange = (index, field, value) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  const [showList, setShowList] = useState(false);

  const addNewOption = () => {
    setShowDeleteButton(true);
    setShowList(true);
    setOptions([
      ...options,
      {
        color: "",
        language: "AR",
      },
    ]);
  };

  const removeOptionList = () => {
    setShowList(false);
    setOptions([]);
  };

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const removeOptionHeaderList = () => {
    setShowDeleteButton(false);
  };

  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleCategoryModalClose = () => setShowCategoryModal(false);
  const handleCategoryModalShow = () => setShowCategoryModal(true);

  const [isMainCategory, setIsMainCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleMainCategory = () => {
    setIsMainCategory((prev) => !prev);
  };

  const [quantities, setQuantities] = useState([
    { color: "الأبيض", available: 9 },
    { color: "الأسود", available: 6 },
    { color: "الوردي", available: 5 },
    { color: "الأزرق", available: 6 },
  ]);

  const [unlimited, setUnlimited] = useState(false);

  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleDetailsModalClose = () => setShowDetailsModal(false);
  const handleDetailsModalShow = () => setShowDetailsModal(true);

  const [activeButton, setActiveButton] = useState(null);

  const [showCustomFields, setShowCustomFields] = useState(false);
  const [showProductDetailsSection, setShowProductDetailsSection] =
    useState(true);

  const handleCustomFieldsToggle = () => {
    setShowCustomFields(true);
    setShowFilesSection(false);
    setShowProductDetailsSection(false);
    setActiveButton("customFields");
  };

  const [showFilesSection, setShowFilesSection] = useState(false);
  const handleFilesToggle = () => {
    setShowFilesSection(true);
    setShowCustomFields(false);
    setShowProductDetailsSection(false);
    setActiveButton("files");
  };

  const handleProductDetailsSectionToggle = () => {
    setShowFilesSection(false);
    setShowCustomFields(false);
    setShowProductDetailsSection(true);
  };

  const [fileAction, setFileAction] = useState("upload");
  const [fileLink, setFileLink] = useState("");

  const handleFileActionChange = (id, action) => {
    setFileSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, action } : section
      )
    );
  };

  const [fileSections, setFileSections] = useState([
    { id: Date.now(), action: "upload", link: "" },
  ]);

  const handleDeleteFile = (id) => {
    setFileSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  };

  const handleAddFileSection = () => {
    setFileSections((prevSections) => [
      ...prevSections,
      { id: Date.now(), action: "upload", link: "" },
    ]);
  };

  const [description, setDescription] = useState("");

  const [showTotal, setShowTotal] = useState(false);

  const [expandedItem, setExpandedItem] = useState(null);
  const handleItemToggle = (item) => {
    setExpandedItem((prev) => (prev === item ? null : item));
  };

  const [quantity, setQuantity] = useState(9);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
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
          <div>
            <button className="check-icon-btn">
              <ToggleCheckButton />
            </button>
          </div>
          <div
            className="icon-upload"
            style={{ backgroundColor: isRed ? "red" : "white" }}
            onClick={handleColorClick}
          >
            <FontAwesomeIcon icon={faThumbtack} />
          </div>
        </Col>
        <Col style={{ position: "relative" }} className="col-2">
          <img src={imageUrl} alt="" className="CardImage" />
          <span className="spanPlusClass" onClick={handleModalShow}>
            +
          </span>
        </Col>
        <Col className="col-3" style={{ marginTop: "10px" }}>
          <div className="product-info">
            <div style={{ display: "flex" }}>
              <div className="product-name" style={{ width: "50%" }}>
                <input
                  type="text"
                  className="product-name-input"
                  value="Netflix"
                  style={{ width: "90%" }}
                />
              </div>
              <div
                className="product-name-input"
                style={{
                  display: "flex",
                  width: "50%",
                  height: "45px",
                  marginTop: "10px",
                }}
              >
                <div>
                  <input
                    type="number"
                    name="price"
                    value={productDetails.price}
                    placeholder="السعر"
                    onChange={handleChange}
                    style={{ border: "none", width: "70%" }}
                  />
                </div>
                <div
                  className="labelPriceClass"
                  style={{ borderRight: "1px solid #aaa", padding: "2px" }}
                >
                  <label>ر.س</label>
                </div>
              </div>
            </div>

            <div className="product-options">
              <div style={{ display: "flex" }}>
                <div className="product-name" style={{ width: "50%" }}>
                  <input
                    type="text"
                    className="product-name-input"
                    value="كمية غير محدودة"
                    style={{ width: "90%" }}
                    disabled
                  />
                </div>
                <div
                  className="tab-container"
                  style={{ height: "48px", marginTop: "10px" }}
                >
                  <select
                    className="tab-item"
                    placeholder="اختر تصنيف المنتج"
                    style={{ border: "none", marginRight: "-5px" }}
                  >
                    <option value="">اختر تصنيف المنتج</option>
                    <option value="">المزيد</option>
                    <option value="">الشتاء (مخفي)</option>
                    <option value="">الصيف (مخفي)</option>
                    <option value="">الربيع (مخفي)</option>
                    <option value="">كفر جوال هدية</option>
                  </select>
                  <span className="tab-item" onClick={handleCategoryModalShow}>
                    اضف تصنيف
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-4">
          <div className="tab-container">
            <div className="tab-item active" onClick={handleDetailsModalShow}>
              <FontAwesomeIcon icon={faSlidersH} />
              <span>بيانات المنتج</span>
            </div>
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
      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleModalClose}
            className="close-button"
            style={{ backgroundColor: "none" }}
          >
            &times;
          </Button>
          <h4 style={{ color: "#5666ab" }}>صور وفيديوهات المنتج</h4>
        </div>
        <Modal.Body className="photoPopup">
          <div className="head-section">
            <h4>صور المنتج</h4>
            <p>
              لمقاس لا يقل عن (100px ارتفاع * 250px عرض) من نوع ( jpg, jpeg, png
              , gif ) ولا يتجاوز 5 ميجابيت لكل صوره بحد اقصي 10 صور
            </p>
          </div>
          <div
            className="image-upload-area"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              style={{ display: "none" }}
              id="file-input"
            />
            <label htmlFor="file-input" style={{ cursor: "pointer" }}>
              <div className="upload-button">
                <p>اسحب الصورة وأفلتها هنا</p>
                <p style={{ textAlign: "center" }}> او تصفح من جهازك</p>
              </div>
            </label>
          </div>
          {uploadedImage && (
            <div className="uploaded-image">
              <img src={uploadedImage} alt="Uploaded" />
            </div>
          )}

          <div className="input-container">
            <button className="input-button">
              <i className="icon-class">اضافة</i>
            </button>
            <input
              type="text"
              className="text-input"
              placeholder="أضف تعليقاً أو فيديو من اليوتيوب"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleModalClose}
            className="close-btn"
          >
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>
      {/* onClick={handleOptionsModalShow} */}
      <Modal
        show={showOptionsModal}
        onHide={handleOptionsModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleOptionsModalClose}
            className="close-button"
          >
            &times;
          </Button>
          <h4>إدارة الكميات - طباعة على الحقائب</h4>
        </div>
        <Modal.Body style={{ direction: "rtl" }}>
          <div
            style={{
              width: "100%",
              border: "1px solid blue",
              padding: "3px",
              backgroundColor: "rgb(167, 168, 180, 0.33)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                color: "blue",
                width: "25px",
                height: "25px",
              }}
            />
            <p style={{ marginTop: "9px", marginLeft: "10px" }}>
              يمكنك إدارة الكمية بناءً على خيارات المنتج
            </p>
          </div>
          <div className="toggle-switch">
            <label>
              <input
                type="checkbox"
                checked={isToggleOn}
                onChange={() => setIsToggleOn(!isToggleOn)}
              />
              <span className="slider"></span>
            </label>
            <span style={{ marginRight: "10px" }}>تفعيل خيارات المنتج</span>
          </div>
          {isToggleOn && (
            <div>
              <div className="option-list">
                <div className="option-container toggleheader-section">
                  <div className="right-toggleHeader">
                    <input
                      type="text"
                      className="option-input"
                      placeholder="اللون"
                    />
                    <select className="option-select">
                      <option value="AR">AR</option>
                      <option value="EN">EN</option>
                    </select>
                  </div>
                  <div className="left-toggleHeader">
                    <select className="option-select">
                      <option>نص</option>
                      <option>اللون</option>
                      <option>الصورة</option>
                    </select>

                    {showDeleteButton && (
                      <button
                        onClick={removeOptionHeaderList}
                        className="delete-button-list"
                      >
                        <MdDelete />
                      </button>
                    )}
                  </div>
                </div>
                {options.map((option, index) => (
                  <div key={index} className="option-container">
                    <input
                      type="text"
                      className="option-input"
                      placeholder="القيمة"
                      value={option.color}
                      onChange={(e) =>
                        handleOptionChange(index, "color", e.target.value)
                      }
                    />
                    <select
                      className="option-select"
                      value={option.language}
                      onChange={(e) =>
                        handleOptionChange(index, "language", e.target.value)
                      }
                    >
                      <option value="AR">AR</option>
                      <option value="EN">EN</option>
                    </select>

                    <button
                      className="delete-button"
                      onClick={() =>
                        setOptions(options.filter((_, i) => i !== index))
                      }
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
                <button onClick={addOption} className="add-option-button">
                  <span className="plus-icon">+</span> إضافة قيمة جديدة
                </button>
              </div>
              {showList && (
                <div className="option-list">
                  <div className="option-container toggleheader-section">
                    <div className="right-toggleHeader">
                      <input
                        type="text"
                        className="option-input"
                        placeholder="اللون"
                      />
                      <select className="option-select">
                        <option value="AR">AR</option>
                        <option value="EN">EN</option>
                      </select>
                    </div>
                    <div className="left-toggleHeader">
                      <select className="option-select">
                        <option>نص</option>
                        <option>اللون</option>
                        <option>الصورة</option>
                      </select>

                      {showList && (
                        <button
                          onClick={removeOptionList}
                          className="delete-button-list"
                        >
                          <MdDelete />
                        </button>
                      )}
                    </div>
                  </div>
                  {options.map((option, index) => (
                    <div key={index} className="option-container">
                      <input
                        type="text"
                        className="option-input"
                        placeholder="اللون"
                        value={option.color}
                        onChange={(e) =>
                          handleOptionChange(index, "color", e.target.value)
                        }
                      />
                      <select
                        className="option-select"
                        value={option.language}
                        onChange={(e) =>
                          handleOptionChange(index, "language", e.target.value)
                        }
                      >
                        <option value="AR">AR</option>
                        <option value="EN">EN</option>
                      </select>

                      <button
                        className="delete-button"
                        onClick={() =>
                          setOptions(options.filter((_, i) => i !== index))
                        }
                      >
                        <MdDelete />
                      </button>
                    </div>
                  ))}

                  <button onClick={addNewOption} className="add-option-button">
                    <span className="plus-icon">+</span> إضافة قيمة جديدة
                  </button>
                </div>
              )}
              <button onClick={addNewOption} className="addNewOption">
                <span className="plus-icon">+</span> إضافة خيار جديد
              </button>

              <Form className="mt-5 quantitiesClass">
                <Form.Group className="mb-3">
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Form.Check
                        type="checkbox"
                        checked={unlimited}
                        onChange={() => setUnlimited(!unlimited)}
                        onClick={() => setShowTotal(true)}
                      />
                    </Col>
                    <Col>
                      <Form.Label className="mb-0">
                        الكمية غير محدودة
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label className="mb-0">
                        {showTotal && (
                          <p
                            style={{
                              position: "absolute",
                              left: "40px",
                              top: "510px",
                            }}
                          >
                            إجمالي الكمية 26
                          </p>
                        )}
                      </Form.Label>
                    </Col>
                  </Row>
                </Form.Group>
                {quantities.map((item, index) => (
                  <div key={index}>
                    <div
                      className="d-flex justify-content-between mb-2"
                      onClick={() => handleItemToggle(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="flex-grow-1 bg-light p-2 rounded">
                        <span
                          style={{
                            fontSize: "10px",
                            border: "1px solid #aaa",
                            padding: "3px",
                            borderRadius: "4px",
                            marginLeft: "5px",
                          }}
                        >
                          {" "}
                          +{" "}
                        </span>
                        {item.color}
                      </div>
                      <div
                        className="ms-2 bg-light p-2 rounded text-end"
                        style={{ minWidth: "120px" }}
                      >
                        متوفر عدد {item.available}
                      </div>
                    </div>
                    {expandedItem === item && (
                      <div className="additional-content p-3 rounded mt-2">
                        <div className="product-form">
                          <div className="row">
                            <div
                              className="col"
                              style={{
                                backgroundColor: "white",
                                borderRadius: "5px",
                              }}
                            >
                              <input
                                type="text"
                                placeholder="السعر"
                                style={{
                                  outline: "none",
                                  border: "none",
                                  backgroundColor: "none",
                                }}
                              />
                              <label
                                className="p-2 text-start"
                                style={{ borderRight: "1px solid #aaa" }}
                              >
                                ر.س
                              </label>
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col">
                              <div
                                className="col"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "5px",
                                }}
                              >
                                <input
                                  type="text"
                                  placeholder="سعر التكلفة"
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "none",
                                  }}
                                />
                                <label
                                  className="p-2 text-start"
                                  style={{ borderRight: "1px solid #aaa" }}
                                >
                                  ر.س
                                </label>
                              </div>
                            </div>
                            <div className="col">
                              <div
                                className="col"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "5px",
                                }}
                              >
                                <input
                                  type="text"
                                  placeholder="السعر المنخفض"
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "none",
                                  }}
                                />
                                <label
                                  className="p-2 text-start"
                                  style={{ borderRight: "1px solid #aaa" }}
                                >
                                  ر.س
                                </label>
                              </div>
                            </div>
                          </div>
                          <div
                            className="row mt-3"
                            style={{ marginTop: "20px" }}
                          >
                            <div className="col">
                              <div
                                className="col"
                                style={{
                                  backgroundColor: "white",
                                  borderRadius: "5px",
                                }}
                              >
                                <input
                                  type="text"
                                  placeholder="الوزن"
                                  style={{
                                    outline: "none",
                                    border: "none",
                                    backgroundColor: "none",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="باركود"
                              />
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="SKU"
                              />
                            </div>
                            <div className="col">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="اقل كمية للتنبية"
                              />
                            </div>
                          </div>

                          <label
                            style={{ marginTop: "20px", marginBottom: "-20px" }}
                          >
                            الكمية
                          </label>
                          <div className="quantity-section mt-2">
                            <div>
                              <label>كمية المنتج</label>
                            </div>
                            <div className="quantity-control">
                              <button
                                className="btn btn-light"
                                onClick={() => handleQuantityChange(-1)}
                              >
                                -
                              </button>
                              <span>{quantity}</span>
                              <button
                                className="btn btn-light"
                                onClick={() => handleQuantityChange(1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </Form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleOptionsModalClose}
            className="save-btn-options"
          >
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showCategoryModal}
        onHide={handleCategoryModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="CategoryModal"
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleCategoryModalClose}
            className="close-button"
          >
            &times;
          </Button>
          <h4>إضافة تصنيف جديد</h4>
        </div>
        <Modal.Body>
          <form style={{ direction: "rtl" }}>
            <div>
              <label style={{ marginRight: "16px" }}>اسم التصنيف</label>
              <br />
              <div className="field-category">
                <div className="InputCategoryClass">
                  <input type="text" placeholder="ادخل اسم التصنيف" required />
                </div>
                <div className="selectCategoryClass">
                  <select
                    name="language"
                    value={productDetails.language}
                    onChange={handleChange}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "16px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={isMainCategory}
                  onChange={toggleMainCategory}
                />
                إضافة الي التصنيف رئيسي
              </label>
            </div>
            {isMainCategory && (
              <div style={{ marginRight: "16px", marginTop: "10px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">تحديد التصنيف الرئيسي</option>
                  <option value="هدية موسمية">هدية موسمية</option>
                  <option value="الشتاء">الشتاء</option>
                  <option value="الصيف">الصيف</option>
                  <option value="الربيع">الربيع</option>
                  <option value="كفر جوال هدية">كفر جوال هدية</option>
                </select>
              </div>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCategoryModalClose}>
            إلغاء
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleCategoryModalClose}
          >
            إضافة التصنيف
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showDetailsModal}
        onHide={handleDetailsModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999, maxWidth: "80%", width: "80%" }}
        className="DetailsModalClass"
      >
        <div className="modal-header">
          <Button
            variant="link"
            onClick={handleDetailsModalClose}
            className="close-button"
          >
            &times;
          </Button>
          <h4>(netflix) بيانات المنتج</h4>
        </div>
        <div className="modal-subheader">
          <Button
            style={{
              backgroundColor:
                activeButton === "files" ? "#005379" : "transparent",
              color: activeButton === "files" ? "white" : "#000",
              borderColor: activeButton === "files" ? "#005379" : "#ccc",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
            onClick={handleFilesToggle}
            className="subheader-button"
          >
            الملفات المرفقة
          </Button>
          <Button
            variant="outline-secondary"
            onClick={handleCustomFieldsToggle}
            className="subheader-button"
          >
            الحقول المخصصة
          </Button>
          <Button
            variant="outline-secondary"
            className="subheader-button"
            onClick={handleProductDetailsSectionToggle}
          >
            بيانات المنتج
          </Button>
        </div>
        <Modal.Body className="DetailsBodyClass">
          {showProductDetailsSection && (
            <div className="product-details-section">
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  سعر التكلفة
                </label>
                <input
                  type="text"
                  placeholder="سعر التكلفة"
                  className="form-control"
                />
              </div>
              <div className="form-group-flex">
                <div className="form-group-flex-one">
                  <label className="form-productDetails-label-class">
                    السعر المخفض
                  </label>
                  <input
                    type="text"
                    placeholder="السعر المخفض"
                    className="form-control"
                  />
                </div>
                <div className="form-group-flex-one">
                  <label className="form-productDetails-label-class">
                    نهاية التخفيض
                  </label>
                  <input
                    type="text"
                    placeholder="نهاية التخفيض (اختباري)"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group-flex-3col">
                <div className="form-group-flex-col">
                  <label className="form-productDetails-label-class">
                    رمز التخزين
                  </label>
                  <input
                    type="text"
                    placeholder="SUK رمز التخزين"
                    className="form-control"
                  />
                </div>
                <div className="form-group-flex-col">
                  <label className="form-productDetails-label-class">
                    GTIN
                  </label>
                  <input
                    type="text"
                    placeholder="GTIN"
                    className="form-control"
                  />
                </div>
                <div className="form-group-flex-col">
                  <label className="form-productDetails-label-class">MPN</label>
                  <input
                    type="text"
                    placeholder="MPN"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  تحديد الماركة التجارية
                </label>
                <select style={{ width: "calc(98% - 50px)" }}>
                  <option>البحث عن الماركة</option>
                </select>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  العنوان الفرعي
                </label>
                <div
                  className="field-productDetails"
                  style={{ width: "calc(98% - 50px)" }}
                >
                  <div className="InputproductDetailsClass">
                    <input
                      type="text"
                      placeholder="العنوان الفرعي"
                      style={{ border: "none" }}
                    />
                  </div>
                  <div
                    className="selectproductDetailsClass"
                    style={{ marginTop: "2px" }}
                  >
                    <select
                      name="language"
                      value={productDetails.language}
                      onChange={handleChange}
                    >
                      <option value="AR">AR</option>
                      <option value="EN">EN</option>
                    </select>
                  </div>
                </div>
                <p style={{ marginRight: "30px", marginTop: "-20px" }}>
                  العنوان الفرعي يظهر تحت اسم المنتج في المتجر، بحد اقصى 35 حرف.
                  نسبة الخصم:
                  <span className="spanProductDetailsClass">percent</span>
                  مبلغ الخصم
                  <span className="spanProductDetailsClass">discount</span>
                  ماركة
                  <span className="spanProductDetailsClass">brand</span>
                </p>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  العنوان الترويجي
                </label>
                <input
                  type="text"
                  placeholder="العنوان الترويجي"
                  style={{
                    width: "calc(98% - 50px)",
                    border: "1px solid rgb(225 218 218)",
                  }}
                />
                <p style={{ marginRight: "40px" }}>
                  يظهر العنوان الترويجي على صورة المنتج بحد أقصى 25 حرف. نسبة
                  الخصم:
                  <span className="spanProductDetailsClass">percent</span>
                  مبلغ الخصم
                  <span className="spanProductDetailsClass">discount</span>
                  ماركة
                  <span className="spanProductDetailsClass">brand</span>
                </p>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  تحديد كمية المنتج
                </label>
                <select
                  className="form-control"
                  style={{
                    width: "calc(98% - 50px)",
                    border: "1px solid rgb(225 218 218)",
                    backgroundColor: "#e6f9ff",
                  }}
                >
                  <option value="">تحديد كمية المنتج</option>
                  <option value="enabled">تفعيل خيار تحديد الكمية</option>
                  <option value="rules">قوانين تحديد الكمية</option>
                  <option value="disable">تعطيل خيار تحديد الكمية</option>
                </select>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "41px", marginTop: "15px" }}
                >
                  قنوات عرض المنتج
                </label>
                <p style={{ marginRight: "40px" }}>
                  قم بتحديد قنوات عرض المنتج
                </p>
                <select
                  className="form-control"
                  style={{
                    width: "calc(98% - 50px)",
                    border: "1px solid rgb(225 218 218)",
                    backgroundColor: "#e6f9ff",
                    marginTop: "-10px",
                  }}
                >
                  <option value="">قم بتحديد قنوات عرض المتجر</option>
                  <option value="enabled">اظهار في موقع المتجر</option>
                  <option value="rules">اظهار في تطبيق المتجر</option>
                </select>
              </div>
              <form
                className=""
                style={{ marginRight: "43px", marginTop: "15px" }}
              >
                <div style={{ textAlign: "right" }}>
                  <label>
                    <input
                      type="checkbox"
                      name="ارفاق ملف عند الطلب"
                      style={{ marginLeft: "10p" }}
                    />
                    ارفاق ملف عند الطلب{" "}
                  </label>
                </div>
                <div style={{ textAlign: "right" }}>
                  <label>
                    <input
                      type="checkbox"
                      name="امكانية كتابة الملاحظة"
                      style={{ marginLeft: "10p" }}
                    />
                    امكانبة كتابة الملاحظة{" "}
                  </label>
                </div>
                <div style={{ textAlign: "right" }}>
                  <label>
                    <input
                      type="checkbox"
                      name="المنتج خاضع لضريبة"
                      style={{ marginLeft: "10p" }}
                    />
                    المنتج خاضع لضريبة{" "}
                  </label>
                </div>
              </form>
              <div className="form-group" style={{ marginRight: "43px" }}>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  placeholder="وصف المنتج"
                  style={{
                    width: "calc(98% - 50px)",
                    border: "1px solid rgb(225 218 218)",
                    marginTop: "10px",
                    textAlign: "right",
                  }}
                  className="ql-container"
                />
              </div>

              <style jsx>{`
                .ql-editor {
                  direction: rtl;
                  text-align: right;
                }
                .ql-placeholder {
                  text-align: right;
                  padding: 10px;
                }
              `}</style>

              <label
                className="form-productDetails-label-class"
                style={{ marginRight: "41px", marginTop: "15px" }}
              >
                ادخل الوسوم هنا
              </label>
              <div
                className="input-container"
                style={{ width: "90%", marginRight: "40px", marginTop: "-2px" }}
              >
                <input
                  type="text"
                  className="text-input"
                  placeholder=" ادخل الوسيم هنا ,ثم اضغط زر اضافة او اضغط Enter"
                />
                <button className="input-button">
                  <i className="icon-class">اضافة</i>
                </button>
              </div>

              <label
                className="form-productDetails-label-class"
                style={{ marginRight: "41px", marginTop: "15px" }}
              >
                لا توجد رسوم لهذا المنتج
              </label>
              <div
                style={{
                  margin: "20px",
                  backgroundColor: "rgb(235 232 232 / 59%)",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  تحسينات SEO
                </label>
                <br />
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  عنوان صفحة المنتج (Page Title)
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                  <input
                    type="text"
                    placeholder="عنوان صفحة المنتج"
                    style={{
                      width: "90%",
                      border: "1px solid rgb(225 218 218)",
                      padding: "5px",
                    }}
                  />
                  <p style={{ marginRight: "40px" }}>
                    اسم المنتج :
                    <span className="spanProductDetailsClass">Name</span>
                    التصنيف :
                    <span className="spanProductDetailsClass">Category</span>
                    الماركه :
                    <span className="spanProductDetailsClass">brand</span>
                  </p>
                </div>
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  رابط صفحة المنتج (SEO Page URL)
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                  <input
                    type="text"
                    placeholder="رابط صفحة المنتج"
                    style={{
                      width: "90%",
                      border: "1px solid rgb(225 218 218)",
                      padding: "5px",
                    }}
                  />
                  <p style={{ marginRight: "40px" }}>
                    اسم المنتج :
                    <span className="spanProductDetailsClass">Name</span>
                    التصنيف :
                    <span className="spanProductDetailsClass">Category</span>
                    الماركه :
                    <span className="spanProductDetailsClass">brand</span>
                  </p>
                </div>
                <br />
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  وصف صفحة المنتج (Page Description)
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                  <textarea
                    placeholder="وصف صفحة المنتج"
                    style={{
                      width: "90%",
                      height: "100px",
                      border: "1px solid rgb(225 218 218)",
                      padding: "5px",
                      outline: "none",
                    }}
                  />
                  <p style={{ marginRight: "20px" }}>
                    اسم المنتج :
                    <span className="spanProductDetailsClass">Name</span>
                    التصنيف :
                    <span className="spanProductDetailsClass">Category</span>
                    الماركه :
                    <span className="spanProductDetailsClass">brand</span>
                  </p>
                </div>
                <br />
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  netflix
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                  <a
                    href="https://salla.sa/giftshop2024/netflix/p1744624860"
                    style={{ color: "green", textDecoration: "none" }}
                  >
                    https://salla.sa/giftshop2024/netflix/p1744624860
                  </a>
                </div>
              </div>
            </div>
          )}
          {showFilesSection && (
            <div>
              <div style={{ color: "#aaa", fontSize: "13px" }}>
                <p>هناك طريقتين لرفع الملفات الرقمية:</p>
                <p>
                  1. رفع الملف: والذي يتيح لك رفع الملفات من جهازك حتى حجم 100
                  ميجا
                </p>
                <p>
                  2. رابط الملف: بامكانك رفع الملفات الكبيرة على خدمات التخزين
                  السحابية ثم اضافة الرابط
                </p>
              </div>

              {fileSections.map((section) => (
                <div key={section.id} className="file-upload-section">
                  <div
                    className="form-group"
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="InputDetailsClass" style={{ width: "80%" }}>
                      <input
                        type="text"
                        placeholder="اسم الملف"
                        required
                        style={{
                          width: "100%",
                          outline: "none",
                          border: "none",
                        }}
                      />
                    </div>
                    <div
                      className="selectDetailsClass"
                      style={{ width: "15%" }}
                    >
                      <select
                        name="language"
                        value={productDetails.language}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          outline: "none",
                          border: "none",
                          marginTop: "3px",
                        }}
                      >
                        <option value="AR">AR</option>
                        <option value="EN">EN</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className="form-group d-flex"
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      marginTop: "10px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  >
                    <div style={{ width: "20%" }}>
                      <select
                        value={section.action}
                        onChange={(e) =>
                          handleFileActionChange(section.id, e.target.value)
                        }
                        style={{
                          width: "81%",
                          height: "50px",
                          borderRadius: "10px",
                          outline: "none",
                          border: "none",
                          padding: "0 10px",
                        }}
                      >
                        <option value="upload">رفع الملف</option>
                        <option value="link">رابط الملف</option>
                      </select>
                    </div>

                    {section.action === "upload" && (
                      <>
                        <div
                          style={{
                            width: "15%",
                            outline: "none",
                            border: "none",
                          }}
                        >
                          <Form.Label
                            variant=""
                            className="mr-2"
                            style={{
                              width: "100%",
                              outline: "none",
                              border: "none",
                              marginTop: "15px",
                              paddingRight: "14px",
                            }}
                          >
                            اختر ملف
                          </Form.Label>
                        </div>
                        <div
                          style={{
                            width: "40%",
                            outline: "none",
                            border: "none",
                            backgroundColor: "rgb(4 147 227 / 94%)",
                            width: "100px",
                            position: "absolute",
                            left: 30,
                            height: "50px",
                            borderRadius: "10px",
                          }}
                        >
                          <Form.Control
                            type="file"
                            style={{ display: "none" }}
                            id="fileUpload"
                          />
                          <Form.Label
                            htmlFor="fileUpload"
                            className="file-upload-label"
                            style={{
                              width: "100%",
                              outline: "none",
                              border: "none",
                              marginTop: "5px",
                              backgroundColor: "rgb(4 147 227 / 94%)",
                            }}
                          >
                            <FaUpload
                              className="mr-1"
                              style={{ marginLeft: "8px" }}
                            />
                            استعراض
                          </Form.Label>
                        </div>
                      </>
                    )}

                    {section.action === "link" && (
                      <div>
                        <div
                          style={{
                            width: "60%",
                            outline: "none",
                            border: "none",
                            marginTop: "5px",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="أدخل رابط الملف"
                            value={fileLink}
                            onChange={(e) => setFileLink(e.target.value)}
                            style={{
                              width: "100%",
                              borderRadius: "10px",
                              outline: "none",
                              border: "none",
                              padding: "10px",
                            }}
                          />
                        </div>

                        <p
                          style={{
                            color: "orange",
                            margin: "7px 0",
                            width: "90%",
                            position: "absolute",
                            right: "35px",
                          }}
                        >
                          إضافة رابط ملف (PDF) قد يعرّض المنتج للنسخ، لذا تأكّد
                          من رفع الملف مباشرةً من جهازك لحماية محتواه.
                        </p>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="danger"
                    className="delete-button mt-5"
                    onClick={() => handleDeleteFile(section.id)}
                  >
                    <FaTrash className="mr-1" /> حذف الملف
                  </Button>
                </div>
              ))}
              <button onClick={handleAddFileSection} className="addNewOption">
                <span className="plus-icon">+</span>
              </button>
            </div>
          )}
          {showCustomFields && (
            <div className="form-group">
              <select className="custom-select">
                <option value="">اضافة قسم</option>
                <option value="">لا يوجد حقول متاحة</option>
              </select>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(170 170 170 / 13%)" }}>
          <div className="footerDetailsClass">
            <div>
              <Button variant="secondary" onClick={handleDetailsModalClose}>
                إلغاء
              </Button>
            </div>
            <div>
              <Button variant="primary">حفظ بيانات المنتج</Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </ProductFormContainer>
  );
};

export default ProductsRow;
