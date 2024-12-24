import "./ProductHead.css";

import AddNewProductModal from "./modalsProduct/productHeadModals/addnewproduct/AddNewProductModal";
import FilterModal from "./modalsProduct/productHeadModals/filter/FilterModal";
import ServiceModal from "./modalsProduct/productHeadModals/service/ServiceModal";

const ProductHead = ({ setbrand }) => {
  return (
    <div className="header-container">
      <div className="header-right" style={{ marginRight: "-20px" }}>
        <AddNewProductModal setbrand={setbrand} />
      </div>
      <div className="header-left">
        <FilterModal />
        <ServiceModal />
      </div>
    </div>
  );
};

export default ProductHead;
