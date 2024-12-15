/* eslint-disable react/prop-types */
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);

  const admin = JSON.parse(localStorage.getItem("admin"));
  const adminToken = admin?.token;

  const fetchUser = React.useCallback(async () => {
    try {
      const respponse = await axios.get(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      if (respponse) {
        setUsers(respponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [adminToken]);

  React.useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const context = {
    users,
    fetchUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
