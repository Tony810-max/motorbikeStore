/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "@/contexts/userContext";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(UserContext);
  // Nếu chưa đăng nhập, chuyển hướng về trang home
  if (!user) {
    toast.warn("Vui lòng đăng nhập lại....");
    return <Navigate to="/" replace />;
  }

  // Nếu đã đăng nhập, hiển thị nội dung
  return children;
};

export default ProtectedRoute;
