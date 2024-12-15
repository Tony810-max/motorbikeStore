import { Button } from "@/components/ui/button";
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

const schema = yup
  .object()
  .shape({
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
    reEnterPassword: yup
      .string()
      .oneOf(
        [yup.ref("newPassword")],
        "Mật khẩu không khớp với mật khẩu đã nhập"
      )
      .required(),
  })
  .required();

const FormChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { user } = React.useContext(UserContext);
  const userId = user?.user?._id;
  const token = user?.token;
  const navigate = useNavigate();

  const handleChangePassword = async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/users/change-password/${userId}`,
        {
          oldPassword: data?.oldPassword,
          newPassword: data?.reEnterPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        toast.success("Thay đổi mật khẩu thành công!");
        navigate("/profile");
      }
    } catch (error) {
      toast.error(error.response.data?.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleChangePassword)}>
      <div className="space-y-2">
        <Label className="font-sans text-base font-semibold">Mật khẩu cũ</Label>
        <Input type="password" {...register("oldPassword")} />
        {errors.oldPassword?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.oldPassword?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label className="font-sans text-base font-semibold">
          Mật khẩu mới
        </Label>
        <Input type="password" {...register("newPassword")} />
        {errors.newPassword?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.newPassword?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label className="font-sans text-base font-semibold">
          Nhập lại mật khẩu
        </Label>
        <Input type="password" {...register("reEnterPassword")} />
        {errors.reEnterPassword?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.reEnterPassword?.message}
          </p>
        )}
      </div>
      <div className="flex justify-end">
        <Button type="submit" variant="destructive" className="">
          Đổi mật khẩu
        </Button>
      </div>
    </form>
  );
};

export default FormChangePassword;
