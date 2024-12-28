import React, { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { ProductContext } from "../../../components/context/Product";
import { Request } from "../../../components/utils/Request";
import { useCookies } from "react-cookie";

// Category Component
const Category = ({ category }) => {
  const [brands, setbrands] = useState([]);
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    const getbrands = async () => {
      try {
        const { data } = await Request({
          url: `/Getallbrands?catid=${category.category_id}`,
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        });
        setbrands(data);
      } catch (error) {
        console.log(error);
      }
    };
    getbrands();
  }, []);

  if (!category.brandsDto.length > 0) {
    return <></>;
  }
  return (
    <div className="category" id={category.category_id}>
      <h2>{category.category_name_ar}</h2>
      {category.brandsDto.map((brand) => (
        <div key={brand.brand_id} className="brand">
          <div className="product-flex">
            {brand.productDto.map((product) => (
              <ProductCard
                brands={brands}
                key={product.product_id}
                product={product}
                setbrands={setbrands}
                productBrand={brand.brand_id}
                productCategory={category.category_id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
// Category Component

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      {products.map((category) => (
        <Category key={category.category_id} category={category} />
      ))}
    </>
  );
};

export default ProductList;
