/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import axios from "axios";
import { API_URL } from "@/types/common";
import React from "react";
import { UserContext } from "@/contexts/userContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "@/contexts/cartContext";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    phone: yup
      .string()
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
        "Số điện thoại không hợp lệ"
      )
      .required(),
    address: yup.string().required(),
  })
  .required();

const FormInforOrder = ({ cart }) => {
  const { user } = React.useContext(UserContext);
  const { fetchCartMe } = React.useContext(CartContext);
  const userInfo = user?.user;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      address: userInfo?.address,
      name: userInfo?.name,
      phone: userInfo?.phone,
    },
  });

  const token = user?.token;
  const idCart = cart[0]?._id;
  const navigate = useNavigate();

  const handleOrder = async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/orders/me/${idCart}`,
        {
          user: userInfo?._id,
          name: data?.name,
          address: data?.address,
          phone: data?.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        toast.success("Thanh toán thành công!");
       await fetchCartMe();
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      }
    } catch (error) {
      // toast.error(error.response.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleOrder)} className="space-y-4">
      <span className="font-sans text-xl font-bold">
        Thông tin người đặt hàng
      </span>
      <div className="space-y-2">
        <Label className="font-sans text-base font-semibold">Họ và tên</Label>
        <Input {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="font-sans text-base font-semibold">
          Số điện thoại
        </Label>
        <Input {...register("phone")} />
        {errors.phone?.message && <p>{errors.phone?.message}</p>}
      </div>
      <div className="space-y-2">
        <Label className="font-sans text-base font-semibold">Địa chỉ</Label>
        <Input {...register("address")} />
        {errors.address?.message && <p>{errors.address?.message}</p>}
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Thanh toán
        </button>
      </div>
    </form>
  );
};

export default FormInforOrder;
