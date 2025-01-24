import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Modal, Button, Form } from "react-bootstrap";
import ExportModal from "../export/ExportModal";
import "../../../ProductHead.css";
import { ProductContext } from "../../../../../../components/context/Product";

const FilterModal = ({ allProducts }) => {
  const { dispatch, products } = useContext(ProductContext);

  const [checkedItems, setCheckedItems] = useState({});

  const [filters, setFilters] = useState({
    category_id: [], // For multiple selected categories
    brand_id: [], // For multiple selected brands
    tradeMark_id: [], // For multiple selected tradeMarks
  });

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleShowFilterModal = () => setShowFilterModal(true);
  const handleCloseFilterModal = () => setShowFilterModal(false);

  const categories = allProducts.map((product) => ({
    id: product.category_id,
    name: product.category_name_ar,
  }));
  let productBrands = [];
  allProducts.map((category) => {
    category.brandsDto.map((brand) => {
      productBrands.push({ id: brand.brand_id, name: brand.brand_name });
    });
  });

  let productTypes = [];
  allProducts.map((category) => {
    category.brandsDto.map((brand) => {
      brand.trade_marksDto.map((trademark) => {
        productTypes.push({
          id: trademark.trade_mark_id,
          name: trademark.trade_mark_name_en,
        });
      });
    });
  });
  console.log(productTypes);
  // Function to handle checkbox changes (for category_id, brand_id, and color_name)
  const handleCheckboxChange = (filterKey, value) => (e) => {
    const { checked } = e.target;
    setFilters((prev) => {
      const updatedValues = checked
        ? [...prev[filterKey], value] // Add value if checked
        : prev[filterKey].filter((item) => item !== value); // Remove value if unchecked
      return {
        ...prev,
        [filterKey]: updatedValues,
      };
    });
  };

  // Filter function
  const filterProducts = () => {
    let filtered = JSON.parse(JSON.stringify(allProducts));
    const { category_id, brand_id, tradeMark_id } = filters;

    // First, globally filter products by the selected criteria
    filtered = filtered.map((category) => {
      // Apply category filter if category_id is selected
      if (
        category_id.length > 0 &&
        !category_id.includes(category.category_id.toString())
      ) {
        return null; // Skip this category
      }

      // Filter brands
      const filteredBrands = category.brandsDto.filter((brand) => {
        const isBrandMatch =
          brand_id.length === 0 ||
          brand_id.some((id) => id === brand.brand_id.toString());
        return isBrandMatch;
      });

      // Skip categories with no matching brands
      if (filteredBrands.length === 0) return null;

      // Filter trdeMarks
      // const filteredTradeMarks = filteredBrands.trade_marksDto.filter(
      //   (TradeMark) => {
      //     const isTradeMarkMatch =
      //       tradeMark_id.length === 0 ||
      //       tradeMark_id.some(
      //         (id) => id === TradeMark.trade_mark_id.toString()
      //       );
      //     return isTradeMarkMatch;
      //   }
      // );

      // Skip brands with no matching trdeMarks
      // if (filteredTradeMarks.length === 0) return null;

      // Filter products within each brand
      filteredBrands.forEach((brand) => {
        brand.productDto = brand.productDto.filter((product) => {
          // Check color filter
          if (tradeMark_id.length > 0) {
            const tradeMarkMatch = tradeMark_id.some(
              (id) => id == product.productDetailDto[0].trade_mark.toString()
            );
            if (!tradeMarkMatch) return false;
          }

          return true;
        });
      });

      // Return brands with filtered and sorted filteredBrands
      // filteredBrands.trade_marksDto = filteredTradeMarks;
      category.brandsDto = filteredBrands;
      return category;
    });

    // Remove null categories
    filtered = filtered.filter((category) => category !== null);

    return filtered;
  };

  // Get the filtered products
  useEffect(() => {
    dispatch({
      type: "fetchProducts",
      payload: filterProducts(),
    });
  }, [filters]);

  return (
    <>
      <Button className="btn-filter" onClick={handleShowFilterModal}>
        <i className="sicon-filter icon-filter"></i> تصفية
      </Button>
      <Modal
        show={showFilterModal}
        onHide={handleCloseFilterModal}
        dialogClassName="full-screen-modal"
      >
        <Modal.Body
          className="custom-scroll"
          style={{
            height: "100vh",
            overflowY: "auto",
            direction: "rtl",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>
                {" "}
                <i
                  className="sicon-filter mx-2"
                  style={{ fontSize: "15px" }}
                ></i>
                فرز المنتجات حسب
              </h4>
              <div className="close-button-class">
                <Button
                  variant="link"
                  onClick={handleCloseFilterModal}
                  className="close-button-filter"
                >
                  &times;
                </Button>
              </div>
            </div>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="3" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    تصنيف المنتج
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {categories.map((category, index) => (
                    <div key={index} style={{ textAlign: "right" }}>
                      <label>
                        <input
                          type="checkbox"
                          style={{ marginLeft: "10px" }}
                          id={category.id}
                          value={category.id}
                          onChange={handleCheckboxChange(
                            "category_id",
                            category.id.toString()
                          )}
                          checked={filters.category_id.includes(
                            category.id.toString()
                          )}
                        />
                        {category.name}
                      </label>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>{" "}
              <Accordion.Item eventKey="2" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    {" "}
                    نوع المنتج
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {productBrands.map((brand, index) => (
                    <div key={index} style={{ textAlign: "right" }}>
                      <label>
                        <input
                          type="checkbox"
                          style={{ marginLeft: "10px" }}
                          id={brand.id}
                          value={brand.id}
                          onChange={handleCheckboxChange(
                            "brand_id",
                            brand.id.toString()
                          )}
                          checked={filters.brand_id.includes(
                            brand.id.toString()
                          )}
                        />
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ border: "none" }}>
                <Accordion.Header>
                  <div style={{ flexGrow: 1, textAlign: "right" }}>
                    ماركة المنتج
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {productTypes.map((type, index) => (
                    <div key={index} style={{ textAlign: "right" }}>
                      <label>
                        <input
                          type="checkbox"
                          style={{ marginLeft: "10px" }}
                          id={type.id}
                          value={type.id}
                          onChange={handleCheckboxChange(
                            "tradeMark_id",
                            type.id.toString()
                          )}
                          checked={filters.tradeMark_id.includes(
                            type.id.toString()
                          )}
                        />
                        {type.name}
                      </label>
                    </div>
                  ))}
                  {/* <Form.Select
                    aria-label="ماركة المنتج"
                    style={{ textAlign: "right" }}
                  >
                    <option value="" disabled hidden>
                      الماركة
                    </option>
                    {productTypes.map((brand, index) => (
                      <option key={index} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </Form.Select> */}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="primary"
              style={{
                backgroundColor: "#82CAFF",
                border: "none",
                width: "160px",
              }}
            >
              عرض النتائج
            </Button>
            <Button
              variant="secondary"
              style={{
                border: "none",
                margin: "0 10px",
                width: "90px",
              }}
            >
              إعادة تعيين
            </Button>
          </div>
          <ExportModal />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilterModal;
