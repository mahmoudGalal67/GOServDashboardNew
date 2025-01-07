import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

export const ProductContext = createContext(INITIAL_STATE);

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "fetchProducts":
      return {
        ...state,
        products: action.payload,
      };
    case "addNewProduct":
      // Find the category
      const category1 = state.products.find(
        (cat) => cat.category_id === parseInt(action.payload.categoryId)
      );

      if (!category1) {
        alert("Category not found");
        return { ...state };
      }

      // Find the brand
      // const brand = category.brandsDto.find((b) => b.brand_id === parseInt(1));
      const brand1 = category1.brandsDto.find(
        (b) => b.brand_id === parseInt(action.payload.brandId)
      );

      if (!brand1) {
        alert("Brand not found");
        return { ...state };
      }
      // Find the Product
      let updatedProduct = brand1.productDto.find(
        (P) => P.product_id === action.payload.product_id
      );
      if (updatedProduct) {
        updatedProduct = { ...action.payload };
        return {
          ...state,
        };
      } else {
        let newProduct = brand1.productDto.map((P) => {
          if (P.product_id === 0) {
            return { ...action.payload };
          } else {
            return P;
          }
        });
        brand1.productDto = newProduct;
        return { ...state };
      }

    case "addProducrForm":
      // Find the category
      const category = state.products.find(
        (cat) => cat.category_id === parseInt(action.payload.categoryId)
      );
      if (!category) {
        alert("Category not found");
        return { ...state };
      }

      // Find the brand
      // const brand = category.brandsDto.find((b) => b.brand_id === parseInt(1));
      const brand = category.brandsDto[0];
      if (!brand) {
        alert("Brand not found");
        return { ...state };
      }
      // Find the Product
      let Product = brand.productDto.find((P) => P.product_id === 0);

      if (Product) {
        Product = { ...action.payload };
        return {
          ...state,
        };
      }
      // Add the product
      brand.productDto = [action.payload, ...brand.productDto];
      return {
        ...state,
      };
    case "updateMainImages":
      return {
        ...state,
        products: [
          ...state.products.map((product) => {
            if (!product.form && product.id == action.payload.id) {
              return {
                ...product,
                photos: action.payload.files,
                updated: true,
              };
            } else if (product.form && product.id == action.payload.id) {
              return {
                ...product,
                photos: action.payload.files,
                updated: true,
              };
            } else {
              return product;
            }
          }),
        ],
      };
    case "updateProductOptions":
      return {
        ...state,
        products: [
          ...state.products.map((product) => {
            if (product.id == action.payload.id) {
              return {
                ...product,
                product_colors: action.payload.colors,
              };
            } else {
              return product;
            }
          }),
        ],
      };
    case "updateProduct":
      const productIndex = state.products.findIndex(
        (product) => product.id == action.payload.id
      );
      if (productIndex !== -1) {
        const updatedProduct = {
          ...state.products[productIndex],
          [action.payload.name]: action.payload.lang
            ? { en: action.payload.value, ar: action.payload.value }
            : action.payload.value,
        };
        const newProducts = [...state.products];
        newProducts[productIndex] = updatedProduct;
        return { ...state, products: newProducts };
      }
      return state;
    case "deleteProduct":
      // Find the category
      const category2 = state.products.find(
        (cat) => cat.category_id === parseInt(action.payload.categoryId)
      );

      if (!category2) {
        alert("Category not found");
        return { ...state };
      }

      // Find the brand
      // const brand = category.brandsDto.find((b) => b.brand_id === parseInt(1));
      const brand2 = category2.brandsDto.find(
        (b) => b.brand_id === action.payload.brandId
      );
      if (!brand2) {
        alert("Brand not found");
        return { ...state };
      }
      // Find the Product
      brand2.productDto = brand2.productDto.filter(
        (P) => P.product_id != action.payload.product_id
      );
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
