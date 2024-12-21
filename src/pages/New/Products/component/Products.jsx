import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

const ProductList = () => {
  const products = [
    {
      imageUrl:"https://cdn.assets.salla.network/prod/admin/cp/assets/images/placeholder.png",
      price: "120",
    },
    {
      imageUrl:"https://cdn.salla.sa/EZZNYp/4ioBtAzqiI02qmDCocNVOOEGxBZuqwmaKud2wLdm.jpg",
      price: "120",
    },
    {
      imageUrl: "https://cdn.salla.sa/EZZNYp/7CsgOx4DC34rcY5mPlqKjZIsaCYDRqYbGDZcmZOF.png",
      price: "150",
    },
    {
      imageUrl: "https://cdn.salla.sa/EZZNYp/7MB6vrvhhdzT5d50ZWeXircnJxR0oQbv8MHR9pRW.jpg",
      price: "120",
    },
    {
      imageUrl:"https://cdn.salla.sa/EZZNYp/7m9WvWv1M9RFu3ehPgx3dKAYz8UnnsjDsHNiKIiG.jpg",
      price: "150",
    },  {
      imageUrl: "https://cdn.salla.sa/EZZNYp/61f14335-c5de-483c-8d5f-3ed64074cf17-500x500-ow7PEdvPbvenlyyI1PkU37w2WdsrONvcS1vhfGsW.jpg",
      price: "120",
    },
    {
      imageUrl: "https://cdn.salla.sa/EZZNYp/D5QVPx3cjw7ksoQIfTowAiVZZeBYqHFKJb8nVsUl.jpg",
      price: "150",
    },
    {
      imageUrl: "https://cdn.salla.sa/EZZNYp/PkSe9oUyRBb34Xv2cA5aFmlzKSfzv5pRIC3cZqFo.jpg",
      price: "150",
    },
    {
      imageUrl: "https://cdn.salla.sa/EZZNYp/Sb0dzSc2XzBDJdCHZP6oDe3VdhdvjBBv3d080HEa.png",
      price: "150",
    },
  ];

  return (
    <div className="product-flex">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
