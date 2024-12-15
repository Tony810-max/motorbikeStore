import { UserContext } from "@/contexts/userContext";
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";
export const useOrder = (status) => {
  const [orders, setOrders] = React.useState([]);
  const { user } = React.useContext(UserContext);
  const idUser = user && user.user?._id;
  const token = user?.token;

  const fetchOrder = React.useCallback(async () => {
    try {
      const response = await axios.get(
        `${API_URL}/orders/me/${idUser}?status=${status}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [idUser, status, token]);

  React.useEffect(() => {
    fetchOrder();
  }, [fetchOrder, status]);

  return { orders, fetchOrder };
};
