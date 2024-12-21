import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Products.css";
import { ProductContext } from "../../../components/context/Product";
import { request } from "../../../components/utils/Request";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const getcategories = async () => {
      try {
        const { data } = await request({
          url: `/api/dashboard/categories`,
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
      <div className="product-flex">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            categories={categories}
            setcategories={setcategories}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
