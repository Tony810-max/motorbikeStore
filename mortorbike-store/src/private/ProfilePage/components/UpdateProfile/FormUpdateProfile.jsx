import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "@/types/common";
import { UserContext } from "@/contexts/userContext";
import React from "react";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email("Email không đúng định dạng").required(),
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

const FormUpdateProfile = () => {
  const { user } = React.useContext(UserContext);
  const idUser = user?.user?._id;
  const token = user?.token;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.user?.name,
      email: user?.user?.email,
      phone: user?.user?.phone,
      address: user?.user?.address,
    },
  });

  const handleUpdateProfile = async (data) => {
    try {
      const response = await axios.put(
        `${API_URL}/users/me/${idUser}`,
        {
          name: data?.name,
          email: data?.email,
          phone: data?.phone,
          address: data?.address,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response) {
        toast.success("Cập nhật thông tin thành công");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-4">
      <div className="space-y-2">
        <Label>Họ và tên</Label>
        <Input {...register("name")} />
        {errors.name?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.name?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" {...register("email")} />
        {errors.email?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Số điện thoại</Label>
        <Input type="phone" {...register("phone")} />
        {errors.phone?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.phone?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Địa chỉ</Label>
        <Input {...register("address")} />
        {errors.address?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.address?.message}
          </p>
        )}
      </div>
      <div className="flex justify-end">
        <Button variant="destructive" type="submit">
          Lưu
        </Button>
      </div>
    </form>
  );
};

export default FormUpdateProfile;
