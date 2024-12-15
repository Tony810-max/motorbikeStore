import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "@/types/common";
import React from "react";
import { AdminContext } from "@/Contexts/AdminContext";

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Email không hợp lệ").required(),
    password: yup.string().required(),
  })
  .required();

const ContentLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { setAdminInfo } = React.useContext(AdminContext);
  const navigate = useNavigate();

  const handleLoginAdmin = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/admin/login`, {
        email: data.email,
        password: data.password,
      });
      if (response) {
        toast.success("Đăng nhập thành công");
        localStorage.setItem("admin", JSON.stringify(response?.data));

        setAdminInfo(response?.data);
        navigate("/admin/category", { replace: true });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="absolute border border-[#000] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-12 py-5 rounded-md shadow-xl space-y-4">
      <span className="font-sans text-3xl font-bold italic capitalize">
        Welcome to Admin Page
      </span>
      <form className="space-y-2" onSubmit={handleSubmit(handleLoginAdmin)}>
        <div className="space-y-1">
          <Label className="font-sans text-lg">Email</Label>
          <Input
            placeholder="Vui lòng nhập email đã đăng ký với cửa hàng"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="font-sans text-sm text-red-500 font-semibold italic">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label className="font-sans text-lg">Mật khẩu</Label>
          <Input type="password" {...register("password")} />
          {errors.password?.message && (
            <p className="font-sans text-sm text-red-500 font-semibold italic">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="default"
            className="font-sans text-base hover:opacity-80"
          >
            Đăng nhập
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContentLogin;
