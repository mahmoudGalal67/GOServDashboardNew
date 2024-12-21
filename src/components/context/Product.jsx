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
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id == action.payload.newproduct.id) {
            return { ...action.payload.newproduct };
          } else {
            return item;
          }
        }),
      };
    case "addProducrForm":
      let newProducts;
      if (state.products.lenght == 0) {
        newProducts = [{ ...action.payload }, ...state.products];
      } else if (state.products[0]?.id == 0) {
        newProducts = state.products.map((product) => {
          if (product.id == 0) {
            return {
              ...action.payload,
            };
          } else {
            return product;
          }
        });
      } else {
        newProducts = [{ ...action.payload }, ...state.products];
      }
      return {
        ...state,
        products: newProducts,
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
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload.id
        ),
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
