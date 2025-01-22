import React, { useState } from "react";
import "../../../ProductCard.css";
import "../../../ProductsRow.css";
import { Modal, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

import { Request } from "../../../../../../components/utils/Request";

const CategoryModal = ({
  handleCategoryModalClose,
  showCategoryModal,
  setcategories,
}) => {
  const currentUser = JSON.parse(localStorage.getItem("userInfo"))?.userId;

  const [language, setLanguage] = useState("AR");
  const [categoryNameAR, setCategoryNameAR] = useState("");
  const [categoryNameEN, setCategoryNameEN] = useState("");
  const [DetaillsAR, setDetaillsAR] = useState("");
  const [Detailsen, setDetailsen] = useState("");
  const [file, setfile] = useState(null);

  const [cookies, setCookie] = useCookies(["usertoken"]);

  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (language === "AR") {
      setCategoryNameAR(value);
    } else {
      setCategoryNameEN(value);
    }
  };

  const handledetailsChange = (e) => {
    const value = e.target.value;
    if (language === "AR") {
      setDetaillsAR(value);
    } else {
      setDetailsen(value);
    }
  };

  const uploadeCategoryImage = async (image) => {
    const formData = new FormData();
    formData.append("photo", image);

    try {
      setloading(true);
      const { data } = await Request({
        url: `/upload_single_photo`,
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer  ${cookies.usertoken}`,
        },
      });
      console.log(data);
      setfile(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Category_name_en: categoryNameAR,
      Category_name_ar: categoryNameEN,
      Details_en: Detailsen,
      Details_ar: DetaillsAR,
      Category_photo: file,
    };

    try {
      setloading(true);
      const response = await Request({
        url: `addcategories?userid=${currentUser}`,
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${cookies.usertoken}`,
        },
      });

      if (response.status === 200 || response.status === 201) {
        // alert("Brand added successfully");
        setcategories((prev) => [...prev, response.data[0]]);
        handleCategoryModalClose();
        setloading(false);
      }
    } catch (error) {
      console.error("Error adding category", error);
      setloading(false);
    }
  };

  return (
    <>
      <Modal
        show={showCategoryModal}
        onHide={handleCategoryModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="CategoryModal"
      >
        <div className="modal-header">
          <h4>إضافة تصنيف جديد</h4>
          <Button
            variant="link"
            onClick={handleCategoryModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body>
          <form style={{ direction: "rtl" }}>
            <div>
              <label style={{ marginRight: "16px" }}>اسم التصنيف</label>
              <br />
              <div className="field-category ">
                <div className="InputCategoryClass">
                  <input
                    type="text"
                    placeholder={
                      language === "AR"
                        ? "ادخل اسم التصنيف"
                        : "Enter the category name"
                    }
                    value={language === "AR" ? categoryNameAR : categoryNameEN}
                    onChange={handleInputChange}
                    required
                    style={{
                      direction: language === "AR" ? "rtl" : "ltr",
                      textAlign: language === "AR" ? "right" : "left",
                    }}
                  />
                </div>

                <div className="selectCategoryClass">
                  <select
                    name="language"
                    value={language}
                    onChange={handleLanguageChange}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
              <div className="field-category">
                <div className="InputCategoryClass">
                  <input
                    type="text"
                    placeholder={
                      language === "AR"
                        ? "ادخل وصف التصنيف"
                        : "Enter the category details"
                    }
                    value={language === "AR" ? DetaillsAR : Detailsen}
                    onChange={handledetailsChange}
                    required
                    style={{
                      direction: language === "AR" ? "rtl" : "ltr",
                      textAlign: language === "AR" ? "right" : "left",
                    }}
                  />
                </div>
                <div className="selectCategoryClass">
                  <select
                    name="language"
                    value={language}
                    onChange={handleLanguageChange}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="image-upload-area">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => uploadeCategoryImage(e.target.files[0])}
                style={{ display: "none" }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                <div className="upload-button">
                  <p> {loading ? "Loading ..." : " اضف صورة للتصنيف"} </p>
                </div>
              </label>
              <div className="uploaded-image">
                <img
                  style={{ width: "100%" }}
                  src={
                    file && `https://salla111-001-site1.ptempurl.com/${file}`
                  }
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCategoryModalClose}>
            إلغاء
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            {loading ? "loading ..." : "إضافة التصنيف"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryModal;
