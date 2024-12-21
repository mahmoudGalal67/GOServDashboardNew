import React, { useState } from "react";
import "../../../ProductHead.css";
import { Modal, Button } from "react-bootstrap";

const Rimage1 = 'https://cdn.salla.sa/vgdyP/pXNWYfoezjY0fEjMEdJDNaG2x8kuRc27lKNHylrs.jpg';
const Rimage2 = 'https://vid.alarabiya.net/images/2015/06/09/418e8747-7a46-4904-a89b-8d673f483712/418e8747-7a46-4904-a89b-8d673f483712.jpg';
const Rimage3 = 'https://pa.namshicdn.com/product/A7/89365W/v7/1-web-desktop-list.jpg';

const fimage1="https://modo3.com/thumbs/fit630x300/124332/1480261777/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7_%D8%B9%D8%B1%D8%A8%D9%8A.jpg";
const fimage2="https://cdn.saudigates.net/wp-content/uploads/2022/08/%D9%85%D8%B7%D8%B9%D9%85-%D9%83%D8%A7%D9%84%D9%8A%D9%81%D9%88%D8%B1%D9%86%D9%8A%D8%A7-%D8%A8%D8%B1%D8%AC%D8%B1-%D8%AC%D8%AF%D8%A9-California-Burger-Restaurant.jpg";

const dCimage="https://cdn.salla.sa/PnvqQ/opqL72jBFJciwB4wvP4fRrmxN9yjeSUBGclFuU63.png";

const dPimage="https://kolalkotob.com/media/imgs/books/book22-06-2020-09-58-18.jpg";

const oDSimage="https://i.pinimg.com/originals/fd/d6/52/fdd65245b400fc973f775913f3610ca8.jpg";

const Readymadetemplates = ({ closeAddProductModal }) => {
  const [showReadymadetemplatesModal, setReadymadetemplatesModal] =
    useState(false);
  const handleReadymadetemplatesModalClose = () => {
    setReadymadetemplatesModal(false);
  };
  const handleReadymadetemplatesModalShow = () => {
    setReadymadetemplatesModal(true);
    // closeAddProductModal();
  };

  const handleSave = () => {
    handleReadymadetemplatesModalClose();
  };

  const [selectedProductType, setSelectedProductType] = useState(null);

  const handleSelectProductType = (productType) => {
    setSelectedProductType(productType);
  };

  const [selectedCardType, setSelectedCardType] = useState(null);

  const handleSelectCardType = (cardType) => {
    setSelectedCardType(cardType);
  };

  const renderProductPlaceholder = () => {
    switch (selectedProductType) {
      case "digitalCard":
        return (
          <>
            <div className="ready-product-container">
              <div
                className={`ready-product-card ${
                  selectedCardType === "sawaCard" ? "selected" : ""
                }`}
                onClick={() => handleSelectCardType("sawaCard")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={dCimage}
                    alt=""
                    className="ready-product-card-image"
                  />
                  <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="sawaCard"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                      checked={selectedCardType === "sawaCard"}
                      onChange={() => handleSelectCardType("sawaCard")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">بطاقة سوا 20 ريال</h6>
                  <p className="ready-product-price">23.00</p>
                </div>
              </div>
            </div>
          </>
        );
      case "food":
        return (
          <>
            <div className="ready-product-container">
            <div
                  className={`ready-product-card ${
                    selectedCardType === "beefBurger" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCardType("beefBurger")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={fimage2}
                    alt="Product 1"
                    className="ready-product-card-image"
                  />
                    <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="beefBurger"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                        checked={selectedCardType === "beefBurger"}
                      onChange={() => handleSelectCardType("beefBurger")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                   </div>
                </div>
                <div className="ready-product-info">
                <h6 className="ready-product-title">برجر لحم</h6>
                <p className="ready-product-price">25.00</p>
                </div>
              </div>

              <div
                 className={`ready-product-card ${
                    selectedCardType === "garlicShawarma" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCardType("garlicShawarma")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={fimage1}
                    alt="Product 1"
                    className="ready-product-card-image"
                  />
                  <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="garlicShawarma"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                      checked={selectedCardType === "garlicShawarma"}
                      onChange={() => handleSelectCardType("garlicShawarma")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">شاروما مثوم</h6>
                  <p className="ready-product-price">15.00</p>
                </div>
              </div>
               
              <div
                className="ready-product-card"
              >
                <div className="ready-product-image-container">
                  <img
                    src="path_to_image_1"
                    alt="Product 1"
                    className="ready-product-card-image"
                  />
                   <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>        
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">Product Title </h6>
                  <p className="ready-product-price">Product Price</p>
                </div>
              </div>
            </div>
          </>
        );
      case "readyProduct":
        return (
          <>
            <div className="ready-product-container">
              <div
                  className={`ready-product-card ${
                    selectedCardType === "mensT-shirt" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCardType("mensT-shirt")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={Rimage1}
                    alt="Product 1"
                    className="ready-product-card-image"
                  />
                  <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="mensT-shirt"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                      checked={selectedCardType === "mensT-shirt"}
                      onChange={() => handleSelectCardType("mensT-shirt")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">تيشيرت رجالي</h6>
                  <p className="ready-product-price">7000.00</p>
                </div>
              </div>

              <div
                className={`ready-product-card ${
                  selectedCardType === "shanil" ? "selected" : ""
                }`}
                onClick={() => handleSelectCardType("shanil")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={Rimage2}
                    alt=""
                    className="ready-product-card-image"
                  />
                    <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="shanil"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                      checked={selectedCardType === "shanil"}
                      onChange={() => handleSelectCardType("shanil")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                   </div>
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">شانيل</h6>
                  <p className="ready-product-price">560.00</p>
                </div>
              </div>

              <div
                  className={`ready-product-card ${
                    selectedCardType === "foundation" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCardType("foundation")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={Rimage3}
                    alt=""
                    className="ready-product-card-image"
                  />
                  <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="foundation"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                      checked={selectedCardType === "foundation"}
                      onChange={() => handleSelectCardType("foundation")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">فاونديشن</h6>
                  <p className="ready-product-price">120.00</p>
                </div>
              </div>
              
              <div
                className="ready-product-card"
              >
                <div className="ready-product-image-container">
                  <img
                    src="path_to_image_1"
                    alt="Product 1"
                    className="ready-product-card-image"
                  />
                   <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>        
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">Product Title </h6>
                  <p className="ready-product-price">Product Price</p>
                </div>
              </div>
          
            </div>
          </>
        );
      case "digitalProduct":
        return (
          <>
            <div className="ready-product-container">
              <div
                  className={`ready-product-card ${
                    selectedCardType === "reading" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCardType("reading")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={dPimage}
                    alt="Product 1"
                    className="ready-product-card-image"
                  />
                  <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="reading"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                      checked={selectedCardType === "reading"}
                      onChange={() => handleSelectCardType("reading")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">كتاب القراءة المثمرة</h6>
                  <p className="ready-product-price">20.00</p>
                </div>
              </div>
            </div>
          </>
        );
      case "onDemandService":
        return (
          <>
              <div className="ready-product-container">
              <div
                  className={`ready-product-card ${
                    selectedCardType === "drawaPicture" ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCardType("drawaPicture")}
              >
                <div className="ready-product-image-container">
                  <img
                    src={oDSimage}
                    alt=""
                    className="ready-product-card-image"
                  />
                  <div className="ready-product-checkbox-container">
                    <input
                      type="radio"
                      id="drawaPicture"
                      style={{marginRight:"10px" ,transform: "scale(1.5)"}}
                      checked={selectedCardType === "drawaPicture"}
                      onChange={() => handleSelectCardType("drawaPicture")}
                    />
                    
                    <span className="ready-product-checkmark">منتج غير حقيقي</span>
                  </div>
                </div>
                <div className="ready-product-info">
                  <h6 className="ready-product-title">رسم صورة مقاس 40*40</h6>
                  <p className="ready-product-price">2000.00</p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="product-placeholder">
              <div className="placeholder-icon">
                <i className="sicon-t-shirt font-50"></i>
              </div>
              <h5>حدد نوع المنتج</h5>
              <p>اختر نوع المنتج من الأعلى ليتم إظهار نماذج للمنتجات</p>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <div
        className="dropdown-item new-item"
        onClick={handleReadymadetemplatesModalShow}
      >
        <span className="badge">جديد</span>
        <div className="text-container">
          <h6>استخدام نماذج جاهزة</h6>
          <p>إضافة منتج بسرعة وسهولة</p>
        </div>
        <div className="icon-container-drop">
          <i className="sicon-layout-grid"></i>
        </div>
      </div>

      <Modal
        show={showReadymadetemplatesModal}
        onHide={handleReadymadetemplatesModalClose}
        centered
        className="notification"
        size="lg"
        style={{ zIndex: 9999999999,marginTop:"-20px" }}
      >
        <div className="modal-header">
          <h4>استخدام نموذج جاهز</h4>
          <Button
            variant="link"
            onClick={handleReadymadetemplatesModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body>
          <div className="product-type-head">
            <h5>اختر نوع المنتج</h5>
            <p>جميع النماذج تجريبية ولا يتم نشرها على المتجر</p>
          </div>
          <div className="product-type-selector">
            <div
              className={`product-type-cont ${
                selectedProductType === "onDemandService" ? "selected" : ""
              }`}
              onClick={() => handleSelectProductType("onDemandService")}
            >
              <div className="product-type-icon">
                <i className="sicon-fabric-swatch text-dark-100"></i>
              </div>
              <div>
                <div className="product-type">
                  <input
                    type="radio"
                    id="onDemandService"
                    name="productType"
                    className="product-type-input"
                    checked={selectedProductType === "onDemandService"}
                    onChange={() => handleSelectProductType("onDemandService")}
                  />
                  <label
                    htmlFor="onDemandService"
                    className="product-type-label"
                  >
                    خدمة حسب الطلب
                  </label>
                </div>
                <p className="product-type-p">التصميم، الطباعة، الحجوزات</p>
              </div>
            </div>
            <div
              className={`product-type-cont ${
                selectedProductType === "digitalProduct" ? "selected" : ""
              }`}
              onClick={() => handleSelectProductType("digitalProduct")}
            >
              <div className="product-type-icon">
                <i className="sicon-game-controller-alt text-dark-100"></i>
              </div>
              <div>
                <div className="product-type">
                  <input
                    type="radio"
                    id="digitalProduct"
                    name="productType"
                    className="product-type-input"
                    checked={selectedProductType === "digitalProduct"}
                    onChange={() => handleSelectProductType("digitalProduct")}
                  />
                  <label
                    htmlFor="digitalProduct"
                    className="product-type-label"
                  >
                    منتج رقمي
                  </label>
                </div>
                <p className="product-type-p">
                  الكتب الإلكترونية، الدورات، ملفات
                </p>
              </div>
            </div>
            <div
              className={`product-type-cont ${
                selectedProductType === "digitalCard" ? "selected" : ""
              }`}
              onClick={() => handleSelectProductType("digitalCard")}
            >
              <div className="product-type-icon">
                <i className="sicon-barcode-scan text-dark-100"></i>
              </div>
              <div>
                <div className="product-type">
                  <input
                    type="radio"
                    id="digitalCard"
                    name="productType"
                    className="product-type-input"
                    checked={selectedProductType === "digitalCard"}
                    onChange={() => handleSelectProductType("digitalCard")}
                  />
                  <label htmlFor="digitalCard" className="product-type-label">
                    بطاقة رقمية
                  </label>
                </div>
                <p className="product-type-p">بطاقات شحن، حسابات للبيع</p>
              </div>
            </div>

            <div
              className={`product-type-cont ${
                selectedProductType === "food" ? "selected" : ""
              }`}
              onClick={() => handleSelectProductType("food")}
            >
              <div className="product-type-icon">
                <i className="sicon-cake text-dark-100"></i>
              </div>
              <div>
                <div className="product-type">
                  <input
                    type="radio"
                    id="food"
                    name="productType"
                    className="product-type-input"
                    checked={selectedProductType === "food"}
                    onChange={() => handleSelectProductType("food")}
                  />
                  <label htmlFor="food" className="product-type-label">
                    أكل
                  </label>
                </div>
                <p className="product-type-p">
                  المأكولات والمشروبات التي تتطلب ...
                </p>
              </div>
            </div>
            <div
              className={`product-type-cont ${
                selectedProductType === "readyProduct" ? "selected" : ""
              }`}
              onClick={() => handleSelectProductType("readyProduct")}
            >
              <div className="product-type-icon">
                <i className="sicon-packed-box text-dark-100"></i>
              </div>
              <div>
                <div className="product-type">
                  <input
                    type="radio"
                    id="readyProduct"
                    name="productType"
                    className="product-type-input"
                    checked={selectedProductType === "readyProduct"}
                    onChange={() => handleSelectProductType("readyProduct")}
                  />
                  <label htmlFor="readyProduct" className="product-type-label">
                    منتج جاهز
                  </label>
                </div>
                <p className="product-type-p">
                  المنتجات الملموسة القابلة للشحن
                </p>
              </div>
            </div>
          </div>
          <div className="prd-placeholder-container">
            {renderProductPlaceholder()}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(170 170 170 / 13%)" }}>
          <div className="footerDetailsClass">
            <div>
              <Button
                variant="secondary"
                onClick={handleReadymadetemplatesModalClose}
              >
                إلغاء
              </Button>
            </div>
            <div>
              <Button variant="primary">حفظ بيانات المنتج</Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Readymadetemplates;
