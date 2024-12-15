/* eslint-disable react/prop-types */
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [filterCategory, setFilterCategory] = React.useState("");
  const [filterProduct, setFilterProduct] = React.useState("");
  const [value, setValue] = React.useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);

      if (response) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const context = {
    products,
    setProducts,
    filterCategory,
    filterProduct,
    value,
    setFilterCategory,
    setFilterProduct,
    setValue,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
