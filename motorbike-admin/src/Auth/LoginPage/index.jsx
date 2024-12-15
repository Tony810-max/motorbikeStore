import React from "react";
import ContentLogin from "./components/ContentLogin";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const adminInfo = admin?.admin;

  const navigate = useNavigate();

  React.useEffect(() => {
    if (adminInfo) return navigate("/admin", { replace: true });
  }, [adminInfo, navigate]);

  return (
    <div className="relative">
      <img
        src="https://cdn.prod.website-files.com/636373358c6f16797fe3617a/65440d2162e1e8423a3b87e8_63ef973f66bcda45312cb38a_ROIcalc.jpeg"
        alt="img Login Admin"
        className="w-full min-h-screen opacity-60"
      />
      <ContentLogin />
    </div>
  );
};

export default LoginPage;
