import React, { useState, useEffect, useContext, memo, useMemo } from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import AddNewPhotoModal from "./modalsProduct/CardModals/AddNewPhotoModal";
import OptionsModal from "./modalsProduct/CardModals/OptionsModal";
import CategoryModal from "./modalsProduct/CardModals/CategoryModal";
import DetailsModal from "./modalsProduct/CardModals/DetailsModal";
import ProductNotificationModal from "./modalsProduct/CardModals/ProductNotificationModal";
import { ProductContext } from "../../../components/context/Product";

import { useCookies } from "react-cookie";

import arflag from "../../../assets/flag.png";
import enflag from "../../../assets/united-kingdom.png";
import { Request } from "../../../components/utils/Request";

import { toast } from "react-toastify";
import DotLoader from "react-spinners/DotLoader";

// function ToggleCheckButton() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggle = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <button
//       onClick={handleToggle}
//       className={`toggle-button ${isChecked ? "checked" : ""}`}
//     >
//       {isChecked ? "✔" : " "}
//     </button>
//   );
// }

const ProductCard = ({
  product,
  productBrand,
  productCategory,
  setbrands,
  brands,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [Productbrand, setProductbrand] = useState(productBrand);

  const [cookies, setCookie] = useCookies(["usertoken"]);
  const currentUser = JSON.parse(localStorage.getItem("userInfo"))?.userId;

  const override = {
    position: "absolute",
    inset: "50%",
  };
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const { dispatch } = useContext(ProductContext);

  const [lang, setLang] = useState("en");
  const [isRed, setIsRed] = useState(false);

  const [unlimited, setUnlimited] = useState(false);

  const handleColorClick = () => {
    setIsRed((prev) => !prev);
  };
  const deleteProduct = async (id) => {
    if (id != 0) {
      Request({
        url: `api/Product_details/deleteprod?id=${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookies.usertoken}`,
        },
      });
    }
    dispatch({
      type: "deleteProduct",
      payload: {
        categoryId: productCategory,
        brandId: Productbrand,
        product_id: id,
      },
    });
  };

  const handleProductSubmit = async () => {
    let productData = JSON.parse(JSON.stringify(updatedProduct));

    if (
      !productData.product_name_ar ||
      !productData.photoes ||
      productData.price == "" ||
      !Productbrand
    ) {
      toast.warn("please add all fields ");
      return;
    }
    if (!unlimited && productData.product_colors) {
      for (const item of productData.product_colors) {
        if (
          item.color_name == "" ||
          item.hex_code == "" ||
          item.photoes.length == 0 ||
          item.product_color_sizes.size == [] ||
          item.product_color_sizes.price == [] ||
          item.product_color_sizes.quantity == []
        ) {
          toast.warn("please add all fields");

          return;
        }
      }
    }

    try {
      setloading(true);
      const { data } = await Request({
        url:
          updatedProduct.product_id != 0
            ? `/api/Product_details/Putprod?id=${product.product_id}&cat_id=${productCategory}&bid=${Productbrand}&trademarkid=2`
            : `/api/Product_details/add?cat_id=${productCategory}&bid=${Productbrand}&userid=${currentUser}&trade_mark_id=2`,
        method: updatedProduct.product_id != 0 ? "PUT" : "POST",
        data: {
          ...updatedProduct,
        },
        headers: {
          Authorization: `Bearer ${cookies.usertoken}`,
        },
      });

      setloading(false);
      toast.success("you have been added product successfuly");
      dispatch({
        type: "addNewProduct",
        payload: {
          ...data[0],
          categoryId: productCategory,
          brandId: Productbrand,
        },
      });
    } catch (error) {
      console.log(error);
      setloading(false);
      toast.error(JSON.stringify(error.response?.data?.errors));
    }
  };

  const changeProductState = (name, value, lang) => {
    if (lang) {
      setUpdatedProduct((prev) => ({
        ...prev,
        [name + "_en"]: value,
        [name + "_ar"]: value,
      }));
    } else {
      setUpdatedProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <>
      <div className="product-container">
        <div className="product-card">
          <div className="product-image">
            <img
              src={
                !updatedProduct.updated && updatedProduct.form
                  ? updatedProduct.firstPhoto
                  : `https://salla111-001-site1.ptempurl.com/${updatedProduct.photoes[0]}`
              }
              alt=""
            />
            <button
              className="upload-icon deleteCardButton"
              onClick={() => deleteProduct(updatedProduct.product_id)}
            >
              X
            </button>
            <div className="media-buttons">
              <div className="right">
                <div
                  className="icon-container"
                  style={{ backgroundColor: isRed ? "red" : "white" }}
                  onClick={handleColorClick}
                >
                  <FontAwesomeIcon icon={faThumbtack} />
                </div>
              </div>
              <div className="left">
                <AddNewPhotoModal
                  isColumn={true}
                  product={updatedProduct}
                  setUpdatedProduct={setUpdatedProduct}
                />
              </div>
            </div>
          </div>
          <div className="product-details">
            <div className="field">
              <div className="input-select-container">
                <div className="input-wrapper">
                  <i
                    className="sicon-packed-box"
                    style={{ marginRight: "8px" }}
                  ></i>

                  <input
                    type="text"
                    required
                    placeholder={
                      updatedProduct.Placeholder
                        ? updatedProduct.Placeholder
                        : ""
                    }
                    name="product_name"
                    value={updatedProduct.product_name_ar}
                    onChange={(e) =>
                      changeProductState(e.target.name, e.target.value, true)
                    }
                  />
                </div>
              </div>
              <div className="select-wrapper">
                {lang == "ar" ? (
                  <img width={20} src={arflag} alt="" />
                ) : (
                  <img width={20} src={enflag} alt="" />
                )}

                <select
                  name="language"
                  className="language-select"
                  onChange={(e) => setLang(e.target.value)}
                >
                  <option value="en" style={{ width: "60px" }}>
                    {" "}
                    EN
                  </option>
                  <option value="ar">AR</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="InputNumberClass">
                <i className="sicon-dollar-coin-stack"></i>
                <input
                  type="text"
                  placeholder="السعر"
                  name="price"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    changeProductState(e.target.name, e.target.value, false)
                  }
                />
              </div>
              <div className="labelPriceClass">
                <label style={{ marginTop: "7px" }}>ر.س</label>
              </div>
            </div>
            <div className="field" style={{ padding: "10px" }}>
              <ProductNotificationModal
                isColumn={true}
                setUpdatedProduct={setUpdatedProduct}
                product={updatedProduct}
              />

              <div className="icon-2" style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 10,
                    right: 14,
                    top: -10,
                    cursor: "pointer",
                  }}
                  onClick={() => setUnlimited((prev) => !prev)}
                >
                  <svg
                    data-v-4ed85b4c=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                    style={{ fill: unlimited ? "red" : "" }}
                  >
                    <path
                      data-v-4ed85b4c=""
                      d="M 8 8 C 3.6102416 8 0 11.595515 0 16 C 0 20.400585 3.599415 24 8 24 C 10.646 24 12.420344 22.745203 13.777344 21.033203 C 13.147344 20.063203 12.616672 19.057234 12.138672 18.115234 C 10.996672 19.940234 9.828 21 8 21 C 5.220585 21 3 18.779415 3 16 C 3 13.224485 5.2377584 11 8 11 C 9.4265669 11 10.267624 11.520682 11.15625 12.525391 C 12.044876 13.530099 12.834942 15.048526 13.652344 16.673828 C 14.469745 18.29913 15.315394 20.031983 16.585938 21.464844 C 17.85648 22.897705 19.696851 24 22 24 C 26.362802 24 30 20.414234 30 16 C 30 11.599415 26.400585 8 22 8 C 19.35 8 17.576703 9.2652813 16.220703 10.988281 C 16.849703 11.961281 17.379422 12.969109 17.857422 13.912109 C 19.003422 12.069109 20.172 11 22 11 C 24.779415 11 27 13.220585 27 16 C 27 18.765766 24.719198 21 22 21 C 20.566649 21 19.72091 20.477295 18.830078 19.472656 C 17.939247 18.468017 17.14913 16.95087 16.332031 15.326172 C 15.514933 13.701474 14.671546 11.969901 13.404297 10.537109 C 12.137048 9.1043186 10.298933 8 8 8 z"
                    ></path>
                  </svg>
                </div>
              </div>
              {unlimited ? (
                <div className="numberOfQuantity">
                  <p style={{ fontSize: "10px" }}>كمية غير محدودة</p>
                </div>
              ) : (
                <OptionsModal
                  isColumn={true}
                  product={updatedProduct}
                  setUpdatedProduct={setUpdatedProduct}
                />
              )}
            </div>
            <div className="field">
              <div className="selectClassificationClass">
                <select
                  name="category"
                  onChange={(e) => setProductbrand(e.target.value)}
                >
                  <option disabled>Choose Product Brand</option>
                  {brands.map((brand) => (
                    <option
                      key={brand.brand_id}
                      value={brand.brand_id}
                      selected={brand.brand_id == Productbrand}
                    >
                      {brand.brand_name}
                    </option>
                  ))}
                </select>
              </div>
              <CategoryModal
                isColumn={true}
                setUpdatedProduct={setUpdatedProduct}
                setbrands={setbrands}
                categoryId={productCategory}
              />
            </div>
            <div className="field">
              <DetailsModal
                isColumn={true}
                product={updatedProduct}
                setUpdatedProduct={setUpdatedProduct}
                brand={Productbrand}
              />
              <div className="selectDetailsClass">
                <select name="" placeholder="اختر تصنيف المنتج">
                  {updatedProduct.moreDto.map((item) => (
                    <option key={item.more_id} value={item.more_id}>
                      {item.more_ar}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="save-button"
              onClick={handleProductSubmit}
              disabled={loading}
            >
              {loading ? "... Loading " : "حفظ"}
            </button>
          </div>
        </div>
      </div>
      <DotLoader
        color="#2ffff3"
        size={60}
        cssOverride={override}
        loading={loading}
      />
    </>
  );
};

export default memo(ProductCard);
