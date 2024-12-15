/* eslint-disable react/prop-types */
import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const onSetUserLocalStorage = (res) => {
    localStorage.setItem("user", JSON.stringify(res.data));
    setUser(res.data);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const context = { user, handleLogout, onSetUserLocalStorage };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
