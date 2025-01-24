import React, { useEffect, useState } from "react";
import "../../../ProductCard.css";
import "../../../ProductsRow.css";
import { Modal, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";

import { toast } from "react-toastify";

import { Request } from "../../../../../../components/utils/Request";

const TrademarkModal = ({
  handleTradeMarkModalClose,
  ShowTradeMark,
  categories,
}) => {
  const [activeCategory, setactiveCategory] = useState(null);
  const [activeBrand, setactiveBrand] = useState("");

  const [Categories, setCategories] = useState(categories);
  const [brands, setbrands] = useState([]);

  const [language, setLanguage] = useState("AR");
  const [trademarkNameAR, settrademarkNameAR] = useState("");
  const [trademarkNameEN, settrademarkNameEN] = useState("");
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
      settrademarkNameAR(value);
    } else {
      settrademarkNameEN(value);
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

  const updateTradeMarkImage = async (image) => {
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

      setfile(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    setCategories(categories);
    setactiveCategory(categories[0]?.category_id);
  }, [categories]);

  useEffect(() => {
    const getbrands = async () => {
      try {
        const { data } = await Request({
          url: `/Getallbrands?catid=${activeCategory}`,
          headers: {
            Authorization: `Bearer ${cookies.usertoken}`,
          },
        });
        setbrands(data);
      } catch (error) {
        console.log(error);
      }
    };
    getbrands();
  }, [activeCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      trade_mark_name_en: trademarkNameAR,
      trade_mark_name_ar: trademarkNameEN,
      trade_mark_details_en: Detailsen,
      trade_mark_details_ar: DetaillsAR,
      trade_mark_photo: file,
    };

    try {
      setloading(true);
      const response = await Request({
        url: `addtrademarks?bid=${activeBrand}`,
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${cookies.usertoken}`,
        },
      });

      if (response.status === 200 || response.status === 201) {
        // setTradeMarks((prev) => [...prev, response.data[0]]);
        handleTradeMarkModalClose();
        setloading(false);
        settrademarkNameAR("");
        settrademarkNameEN("");
        setDetaillsAR("");
        setDetailsen("");
        setfile(null);
        toast.success("you have been added Trade Mark  successfuly");
      }
    } catch (error) {
      console.error("Error adding category", error);
      setloading(false);
    }
  };

  return (
    <>
      <Modal
        show={ShowTradeMark}
        onHide={handleTradeMarkModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="CategoryModal"
      >
        <div className="modal-header">
          <h4>إضافة تصنيف جديد</h4>
          <Button
            variant="link"
            onClick={handleTradeMarkModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body>
          <form style={{ direction: "rtl" }}>
            <div className="selectClassificationClass">
              <label
                htmlFor="category"
                style={{ marginRight: "16px", marginTop: "16px" }}
              >
                Choose Trade Mark Category
              </label>
              <select
                name="category"
                onChange={(e) => setactiveCategory(e.target.value)}
              >
                {Categories.map((category) => (
                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.category_name_ar}
                  </option>
                ))}
              </select>
            </div>
            <div className="selectClassificationClass">
              <label
                htmlFor="category"
                style={{ marginRight: "16px", marginTop: "16px" }}
              >
                Choose Trade Mark Brand
              </label>

              <select
                name="category"
                onChange={(e) => setactiveBrand(e.target.value)}
                required
              >
                <option disabled selected>
                  Choose Trade Mark Brand
                </option>
                {brands.map((brand) => (
                  <option key={brand.brand_id} value={brand.brand_id}>
                    {brand.brand_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <br />
              <div className="field-category ">
                <div className="InputCategoryClass">
                  <input
                    type="text"
                    placeholder={
                      language === "AR"
                        ? "ادخل اسم البراند"
                        : "Enter the category name"
                    }
                    value={
                      language === "AR" ? trademarkNameAR : trademarkNameEN
                    }
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
                        ? "ادخل وصف البراند"
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
                onChange={(e) => updateTradeMarkImage(e.target.files[0])}
                style={{ display: "none" }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                <div className="upload-button">
                  <p> {loading ? "Loading ..." : " اضف صورة للبراند"} </p>
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
          <Button variant="secondary" onClick={handleTradeMarkModalClose}>
            إلغاء
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            {loading ? "loading ..." : "إضافة البراند"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TrademarkModal;
