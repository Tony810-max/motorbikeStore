import HeaderAdmin from "@/components/layouts/Header";
import React from "react";
import { useNavigate } from "react-router-dom";
import SheetAdminPage from "./components/SheetAdminPage";
import { AdminContext } from "@/Contexts/AdminContext";

const AdminPage = () => {
  const { adminInfo } = React.useContext(AdminContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!adminInfo) return navigate("/admin/login", { replace: true });
  }, [adminInfo, navigate]);

  return (
    <div className="flex justify-center py-2">
      <div className="container flex justify-between">
        <SheetAdminPage />
        <HeaderAdmin />
      </div>
    </div>
  );
};

export default AdminPage;
