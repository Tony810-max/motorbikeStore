/* eslint-disable react/prop-types */
import React from "react";

export const AdminContext = React.createContext();

export const AdminProvider = ({ children }) => {
  const [adminInfo, setAdminInfo] = React.useState(() => {
    return JSON.parse(localStorage.getItem("admin"));
  });

  const handleLogout = () => {
    localStorage.removeItem("admin");
    setAdminInfo(null);
  };

  const context = { adminInfo, setAdminInfo, handleLogout };

  return (
    <AdminContext.Provider value={context}>{children}</AdminContext.Provider>
  );
};
