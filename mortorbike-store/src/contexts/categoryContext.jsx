/* eslint-disable react/prop-types */
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = React.useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);

      if (response) {
        setCategories(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    categories,
    fetchCategories,
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={context}>
      {children}
    </CategoryContext.Provider>
  );
};
