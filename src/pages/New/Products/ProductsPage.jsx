import React, { useState } from "react";
import HeaderComponent from "./component/HeaderComponent";
import ProductHead from "./component/ProductHead";
import ProductList from "./component/Products";
import ProductListRow from "./component/ProductsListRow";
import "./ProductPage.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Helper from "../../components/Helper";

const ProductsPage = (props) => {
  const [isProductListVisible, setProductListVisible] = useState(true);

  const showProductList = () => {
    setProductListVisible(true);
  };

  const hideProductList = () => {
    setProductListVisible(false);
  };

  return (
    <div
      className={`slidePage flex flex-wrap' ${props.darkMode ? "dark" : ""}`}
      style={{ backgroundColor: props.darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <Helper />
      <main
        className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[60px]"
        style={{
          flexGrow: 2,
          marginTop: "116px",
          marginRight: "250px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div className="headerComponent">
          <HeaderComponent />
          <ProductHead
            showProductList={showProductList}
            hideProductList={hideProductList}
          />
          {isProductListVisible ? <ProductList /> : <ProductListRow />}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
