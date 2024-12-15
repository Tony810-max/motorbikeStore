/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";

import { API_URL } from "@/types/common";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);

      if (response) {
        setProducts(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const context = { products, fetchProducts };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
