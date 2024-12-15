/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import React from "react";
import { CategoryContext } from "@/Contexts/CategoryContext";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
  })
  .required();

const FormAddCategory = ({ onSetOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fetchCategory } = React.useContext(CategoryContext);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const adminToken = admin?.token;

  const handleAddCategory = async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/categories`,
        {
          name: data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (response) {
        onSetOpen(false);
        fetchCategory();
        toast.success("Thêm danh mục thành công");
      }
    } catch (error) {
      toast.error(error.response.data?.message);
      console.log(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleAddCategory)}>
      <div className="space-y-2">
        <Label>Tên danh mục</Label>
        <Input {...register("name")} />
        {errors.name?.message && (
          <p className="font-sans text-red-500">{errors.name?.message}</p>
        )}
      </div>
      <div className="flex justify-end">
        <Button variant="destructive">Thêm danh mục</Button>
      </div>
    </form>
  );
};

export default FormAddCategory;
