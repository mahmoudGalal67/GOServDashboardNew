import React from "react";
import ProductsRow from "./ProductsRow";
import "./Products.css";


const ProductsListRow = ({ products,onDelete,onImageUpload}) => {
  return (
    <div className="RowProduct">
      {products.map((product, index) => (
        <ProductsRow key={index} {...product} onDelete={() => onDelete(index)}  onImageUpload={(newImageUrl) => onImageUpload(product.id, newImageUrl)}/>
      ))}
    </div>
  );
};

export default ProductsListRow;
