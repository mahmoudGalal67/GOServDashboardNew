import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { ProductContext } from "../../../components/context/Product";
import { Request } from "../../../components/utils/Request";
import { useCookies } from "react-cookie";

const ProductList = ({ brand }) => {
  const [cookies, setCookie] = useCookies(["token"]);

  const { products } = useContext(ProductContext);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    if (brand) {
      const getcategories = async () => {
        try {
          const { data } = await Request({
            url: `/Getallbrands?catid=${brand.category_id}`,
            headers: {
              Authorization: `Bearer  ${cookies.token}`,
            },
          });
          setcategories(data);
        } catch (error) {
          console.log(error);
        }
      };
      getcategories();
    }
  }, [brand]);
  return (
    <>
      <div className="product-flex">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            categories={categories}
            setcategories={setcategories}
            brand={brand}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
