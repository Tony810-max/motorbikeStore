/* eslint-disable react/prop-types */
import { AdminContext } from "@/Contexts/AdminContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { adminInfo } = React.useContext(AdminContext);

  const navigate = useNavigate();

  React.useEffect( () => {
    if (!adminInfo) {
      toast.warn("Vui lòng đăng nhập lại....");
      navigate("/admin/login", { replace: true });
    }
  }, [adminInfo, navigate]);

  return adminInfo ? children : null;
};

export default ProtectedRoute;
