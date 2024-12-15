/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import { UserContext } from "./userContext";
import { toast } from "react-toastify";
import { API_URL } from "@/types/common";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const { user } = React.useContext(UserContext);
  const userInfo = user && user.user;
  const userId = user && userInfo?._id;
  const token = user && user?.token;

  const fetchCartMe = React.useCallback(async () => {
    try {
      if (!user) return toast.warn("Vui lòng đăng nhập lại để tiếp tục");
      const response = await axios.get(`${API_URL}/carts/me/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response) {
        setCart(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }, [token, user, userId]);

  React.useEffect(() => {
    fetchCartMe();
  }, [fetchCartMe]);
  const context = {
    cart,
    userId,
    fetchCartMe,
    token,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
