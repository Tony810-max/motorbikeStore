/* eslint-disable react/prop-types */
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

export const CategoryContext = React.createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = React.useState([]);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);

      if (response) {
        setCategory(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  React.useEffect(() => {
    fetchCategory();
  }, []);

  const context = { category, fetchCategory };

  return (
    <CategoryContext.Provider value={context}>
      {children}
    </CategoryContext.Provider>
  );
};
