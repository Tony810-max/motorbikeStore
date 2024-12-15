/* eslint-disable react/prop-types */
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";

export const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = React.useState([]);
  const [status, setStatus] = React.useState("pending");

  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const fetchOrders = React.useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/orders?status=${status}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response) {
        setOrders(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [status, token]);

  React.useEffect(() => {
    fetchOrders();
  }, [fetchOrders, status]);

  const context = { status, orders, setStatus, fetchOrders };

  return (
    <OrderContext.Provider value={context}>{children}</OrderContext.Provider>
  );
};
