/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { CategoryContext } from "@/Contexts/CategoryContext";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "@/types/common";
import { ProductContext } from "@/Contexts/ProductContext";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    title: yup.string().required(),
    des: yup.string().required(),
    rate: yup.number().min(1).max(5).required(),
    image: yup.string().required(),
    count: yup.number().required(),
    price: yup.number().required(),
    color: yup.string().required(),
  })
  .required();

const FormAddProduct = ({ onSetOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { category } = React.useContext(CategoryContext);
  const { fetchProducts } = React.useContext(ProductContext);

  const [valueCategory, setValueCategory] = React.useState(category[0]?.name);

  const admin = JSON.parse(localStorage.getItem("admin"));
  const adminToken = admin?.token;

  const handleAddProduct = async (data) => {
    try {
      const colorArray = data?.color.split(",");
      const filterCategoryId = category?.find(
        (item) => item?.name === valueCategory
      );

      const response = await axios.post(
        `${API_URL}/products`,
        {
          name: data?.name,
          title: data?.title,
          rate: data?.rate,
          describe: data?.title,
          image: data?.image,
          countInStock: data?.count,
          price: data?.price,
          category: filterCategoryId?._id,
          color: colorArray,
        },
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (response) {
        onSetOpen(false);
        fetchProducts();
        toast.success("Thêm sản phẩm thành công");
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
      <div className="space-y-2">
        <Label>Tên sản phẩm</Label>
        <Input {...register("name")} />
        {errors.name?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.name?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Danh mục</Label>
        <Select
          onValueChange={(value) => setValueCategory(value)}
          defaultValue={valueCategory}
        >
          <SelectTrigger>
            <SelectValue placeholder="Lựa chọn danh mục" />
          </SelectTrigger>
          <SelectContent>
            {category?.map((item) => (
              <SelectItem value={item?.name} key={item?._id}>
                {item?.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Tiêu đề</Label>
        <Input {...register("title")} />
        {errors.title?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.title?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Mô tả</Label>
        <Input {...register("des")} />
        {errors.des?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.des?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>{`Đánh giá thang 5`}</Label>
        <Input type="number" min={1} max={5} {...register("rate")} />
        {errors.rate?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.rate?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>{`Image (Nhập đường dẫn image vào)`}</Label>
        <Input {...register("image")} />
        {errors.image?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.name?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Số lượng trong giỏ hàng</Label>
        <Input type="number" min={1} {...register("count")} />
        {errors.count?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.count?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Giá tiền</Label>
        <Input {...register("price")} />
        {errors.price?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.price?.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>{`Màu sắc (Thêm dấu , để ngăn cách các màu)`}</Label>
        <Input {...register("color")} />
        {errors.color?.message && (
          <p className="font-sans text-red-500 italic text-sm">
            {errors.color?.message}
          </p>
        )}
      </div>
      <div className="flex justify-end">
        <Button variant="destructive">Thêm sản phẩm</Button>
      </div>
    </form>
  );
};

export default FormAddProduct;
