import React, { useContext, useState } from "react";
import "../../../ProductHead.css";
import { Modal, Button } from "react-bootstrap";
import Readymadetemplates from "./Readymadetemplates";
import { ProductContext } from "../../../../../../components/context/Product";
const AddNewProductModal = ({ setbrand }) => {
  const { dispatch } = useContext(ProductContext);

  const [showAddProductModal, setshowAddProductModal] = useState(false);

  const handleShowModal = () => setshowAddProductModal(true);
  const handleCloseModal = () => setshowAddProductModal(false);

  const handleAddProduct = (placeholder) => {
    setbrand(placeholder);
    const newProductData = {
      id: 0,
      firstPhoto:
        "https://cdn.assets.salla.network/prod/admin/cp/assets/images/placeholder.png",
      form: true,
      product_name_en: "string",
      product_name_ar: "string",
      description_en: null,
      description_ar: null,

      productDetailDto: [
        {
          cost_price: 0,
          price: 0,
          price_after_discount: 0,
          end_discount_date: "string",
          store_code: "string",
          gtin: "string",
          mpn: "string",
          trade_mark: "string",
          second_address: "string",
          ads_address: "string",
          discount: 0,
          percent: 0,
          amount_options: "string",
          product_view_channels: "string",
          file_attach: true,
          write_note: true,
          under_taxes: true,
          product_status: "string",
          details_en: "string",
          details_ar: "string",
          weight: 0,
          tags: "string",
        },
      ],
      alertsDto: [
        {
          amount: 0,
          amount_of_clients: 0,
          percentt: 0,
        },
      ],
      attached_filesDto: [
        {
          attached_file_name: "string",
          attached_file_details: "string",
        },
      ],
      seo_detailsDto: [
        {
          page_title: "string",
          seo_page_url: "string",
          page_description: "string",
          netflix_link: "string",
        },
      ],
      product_statusDto: [
        {
          product_status_en: "string",
          product_status_ar: "string",
          product_status_details_ar: "string",
          product_status_details_en: "string",
        },
      ],
      moreDto: [
        {
          more_en: "string",
          more_ar: "string",
          more_details_ar: "string",
          more_details_en: "string",
        },
      ],
    };
    dispatch({ type: "addProducrForm", payload: newProductData });
    handleCloseModal();
  };

  const closeAddProductWhenTemplateOpens = () => {
    handleCloseModal();
  };

  return (
    <>
      <Button className="btn-newadd-product" onClick={handleShowModal}>
        <span className="spanIcon">
          <i className="sicon-add mx-3"></i>
          إضافة منتج جديد
          <span className="caret-icon me-2 mx-3" style={{ color: "#fff" }}>
            {showAddProductModal ? (
              <i className="sicon-keyboard_arrow_down"></i>
            ) : (
              <i className="sicon-keyboard_arrow_up"></i>
            )}
          </span>
        </span>
      </Button>
      <Modal
        show={showAddProductModal}
        onHide={handleCloseModal}
        dialogClassName="left-aligned"
      >
        <Modal.Body>
          <div className="dropdown-item">
            <div
              className="text-container"
              onClick={() => handleAddProduct("منتج جاهز")}
            >
              <h6>منتج جاهز</h6>
              <p>المنتجات الملموسة والقابلة للشحن</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-packed-box"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("خدمة حسب الطلب")}
          >
            <div className="text-container">
              <h6>خدمة حسب الطلب</h6>
              <p>التصميم، الطباعة، البحوث، الكتابة</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-fabric-swatch"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("أكل")}
          >
            <div className="text-container">
              <h6>أكل</h6>
              <p>المأكولات والمشروبات التي تطلبها حسب خاص</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cake"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("منتج رقمي")}
          >
            <div className="text-container">
              <h6>منتج رقمي</h6>
              <p>الكتب الإلكترونية، الدورات، ملفات التحميل</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-game-controller-alt"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("بطاقة رقمية")}
          >
            <div className="text-container">
              <h6>بطاقة رقمية</h6>
              <p>بطاقات الإهداء، حسابات للبيع</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-barcode-scan"></i>
            </div>
          </div>
          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("مجموعة منتجات")}
          >
            <div className="text-container">
              <h6>مجموعة منتجات</h6>
              <p>أكثر من منتج في منتج واحد</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-inbox-full"></i>
            </div>
          </div>

          <div
            className="dropdown-item"
            onClick={() => handleAddProduct("حجوزات")}
          >
            <div className="text-container">
              <h6>حجوزات</h6>
              <p>دورات، استشارات، خدمات طبية وسياحية</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-calendar-date"></i>
            </div>
          </div>

          <Readymadetemplates
            closeAddProductModal={closeAddProductWhenTemplateOpens}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddNewProductModal;
