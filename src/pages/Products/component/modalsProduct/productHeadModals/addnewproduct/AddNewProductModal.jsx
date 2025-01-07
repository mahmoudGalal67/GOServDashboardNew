import React, { useContext, useEffect, useState } from "react";
import "../../../ProductHead.css";
import { Modal, Button, Placeholder } from "react-bootstrap";
import Readymadetemplates from "./Readymadetemplates";
import { ProductContext } from "../../../../../../components/context/Product";
import { Request } from "../../../../../../components/utils/Request";

import { useCookies } from "react-cookie";

const AddNewProductModal = () => {
  const { dispatch } = useContext(ProductContext);

  const [categories, setcategories] = useState([]);

  const [showAddProductModal, setshowAddProductModal] = useState(false);

  const handleShowModal = () => setshowAddProductModal(true);
  const handleCloseModal = () => setshowAddProductModal(false);

  const [cookies, setCookie] = useCookies(["userusertoken"]);
  const [activeCategory, setactiveCategory] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem("userInfo"))?.userId;

  const handleAddProduct = (category) => {
    setactiveCategory(category.category_id);
    const newProductData = {
      product_id: 0,
      categoryId: category.category_id,
      Placeholder: category.category_name_ar,
      firstPhoto:
        "https://cdn.assets.salla.network/prod/admin/cp/assets/images/placeholder.png",
      form: true,
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
    dispatch({ type: "addProducrForm", payload: { ...newProductData } });

    handleCloseModal();
  };

  const closeAddProductWhenTemplateOpens = () => {
    handleCloseModal();
  };

  useEffect(() => {
    const getcategories = async () => {
      try {
        const { data } = await Request({
          url: `/Getallcategories?userid=${currentUser}`,
          headers: {
            Authorization: `Bearer ${cookies.usertoken}`,
          },
        });
        setcategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getcategories();
  }, []);

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
                <p> {item.details_en}</p>
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
