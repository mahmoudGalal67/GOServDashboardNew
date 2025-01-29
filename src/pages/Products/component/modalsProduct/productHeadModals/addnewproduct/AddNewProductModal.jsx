import React, { useContext, useEffect, useState } from "react";
import "../../../ProductHead.css";
import { Modal, Button, Placeholder } from "react-bootstrap";
import Readymadetemplates from "./Readymadetemplates";
import { ProductContext } from "../../../../../../components/context/Product";
import { Request } from "../../../../../../components/utils/Request";

const AddNewProductModal = ({ categories }) => {
  const { dispatch } = useContext(ProductContext);

  const [showAddProductModal, setshowAddProductModal] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("userInfo"));

  const handleShowModal = () => setshowAddProductModal(true);
  const handleCloseModal = () => setshowAddProductModal(false);

  const [activeCategory, setactiveCategory] = useState(null);

  const handleAddProduct = (category) => {
    setactiveCategory(category.category_id);
    const newProductData = {
      product_id: 0,
      categoryId: category.category_id,
      Placeholder: category.category_name_ar,
      firstPhoto:
        "https://cdn.assets.salla.network/prod/admin/cp/assets/images/placeholder.png",
      form: true,
      product_colors: [
        {
          product_colors_id: 0,
          color_name: null,
          price: 0,
          hex_code: null,
          photoes: [],
          size: [],
          size_price: [],
          cost: [],
          quantity: [],
        },
      ],
      productDetailDto: [
        {
          cost_price: null,
          price: null,
          price_after_discount: null,
          end_discount_date: null,
          store_code: null,
          gtin: null,
          mpn: null,
          trade_mark: "string",
          second_address: null,
          ads_address: null,
          discount: null,
          percent: null,
          amount_options: null,
          product_view_channels: null,
          file_attach: true,
          write_note: true,
          under_taxes: true,
          product_status: null,
          details_en: null,
          details_ar: null,
          weight: null,
          tags: null,
        },
      ],
      alertsDto: [
        {
          amount: null,
          amount_of_clients: null,
          percentt: null,
        },
      ],
      attached_filesDto: [
        {
          attached_file_name: null,
          attached_file_details: null,
        },
      ],
      seo_detailsDto: [
        {
          page_title: null,
          seo_page_url: null,
          page_description: null,
          netflix_link: null,
        },
      ],
      product_statusDto: [
        {
          product_status_en: null,
          product_status_ar: null,
          product_status_details_ar: null,
          product_status_details_en: null,
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
      trade_marksDto: [
        {
          trade_mark_id: 0,
          trade_mark_name_en: "string",
          trade_mark_name_ar: "string",
          trade_mark_details_en: "string",
          trade_mark_details_ar: "string",
        },
      ],
      ratingDto: [
        {
          rating_id: 0,
          rating_number: 0,
          rating_comment: null,
          userId: currentUser.userId,
          usersDto: [
            {
              userId: currentUser.userId,
              name: currentUser.name,
            },
          ],
        },
      ],
    };
    dispatch({ type: "addProducrForm", payload: { ...newProductData } });

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
          {categories.map((item) => (
            <div className="dropdown-item" key={item.category_id}>
              <div
                className="text-container"
                onClick={() => handleAddProduct(item)}
              >
                <h6> {item.category_name_ar}</h6>
                <p> {item.details_ar}</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-packed-box"></i>
              </div>
            </div>
          ))}

          <Readymadetemplates
            closeAddProductModal={closeAddProductWhenTemplateOpens}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddNewProductModal;
