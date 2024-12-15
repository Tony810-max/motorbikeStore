import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React from "react";
import { UserContext } from "@/contexts/userContext";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .required("Vui lòng nhập đúng tên đã đăng ký hệ thống"),
    password: yup.string().required("Vui lòng không để trống mật khẩu"),
  })
  .required();

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { onSetUserLocalStorage } = React.useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, {
        email: data.email,
        password: data.password,
      });

      if (response) {
        toast.success("Login successfully");
        onSetUserLocalStorage(response);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">
          Email của bạn:
        </label>
        <input
          {...register("email")}
          className="border border-slate-400 rounded-md px-2 py-1"
          placeholder="Vui lòng nhập email đã đăng ký..."
        />
        {errors.email?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">Mật khẩu:</label>
        <input
          type="password"
          {...register("password")}
          className="border border-slate-400 rounded-md px-2 py-1"
          placeholder="Vui lòng nhập mật khẩu của bạn..."
        />
        {errors.password?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.password?.message}
          </p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-black py-2 text-white text-lg rounded-lg w-1/2"
        >
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
