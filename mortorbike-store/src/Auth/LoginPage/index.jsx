import React from "react";

import Header from "@/components/layouts/Header";
import FormLogin from "./FormLogin";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className=" flex flex-col items-center">
      <div className="container">
        <Header />
        <div className="flex justify-center">
          <div className="border flex flex-col items-center px-10 py-5 rounded-lg gap-4 w-1/2">
            <span className="font-sans text-2xl font-bold">Đăng nhập</span>
            <FormLogin />
            <p className="text-center text-sm text-gray-600">
              Bạn chưa có tài khoản?{" "}
              <Link
                to={"/signUp"}
                className="text-blue-600 hover:text-blue-800 font-bold underline"
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
