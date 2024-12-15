/* eslint-disable react/prop-types */
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";

export const ContactContext = React.createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = React.useState([]);

  const admin = JSON.parse(localStorage.getItem("admin"));
  const adminToken = admin?.token;

  const fetchContact = React.useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      if (response) {
        setContacts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [adminToken]);

  React.useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  const context = {
    contacts,
  };

  return (
    <ContactContext.Provider value={context}>
      {children}
    </ContactContext.Provider>
  );
};
