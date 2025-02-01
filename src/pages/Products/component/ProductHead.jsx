import { useEffect, useState } from "react";
import "./ProductHead.css";

import AddNewProductModal from "./modalsProduct/productHeadModals/addnewproduct/AddNewProductModal";
import FilterModal from "./modalsProduct/productHeadModals/filter/FilterModal";
import ServiceModal from "./modalsProduct/productHeadModals/service/ServiceModal";

import { useCookies } from "react-cookie";
import { Request } from "../../../components/utils/Request";

const ProductHead = ({ allProducts }) => {
  const [categories, setcategories] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("userInfo"))?.userId;

  const [cookies, setCookie] = useCookies(["userusertoken"]);
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
    <div className="header-container">
      <div className="header-right" style={{ marginRight: "-20px" }}>
        <AddNewProductModal categories={categories} />
      </div>
      <div className="header-left">
        <FilterModal allProducts={allProducts} />
        <ServiceModal setcategories={setcategories} categories={categories} />
      </div>
    </div>
  );
};

export default ProductHead;
