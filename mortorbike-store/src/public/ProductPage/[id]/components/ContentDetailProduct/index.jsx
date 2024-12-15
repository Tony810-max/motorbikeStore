/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AccordionDetailProduct from "./AccordionDetailProduct";
import axios from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { UserContext } from "@/contexts/userContext";
import { CartContext } from "@/contexts/cartContext";

const ContentDetailProduct = ({
  idProduct,
  countInStock,
  name,
  price = 0,
  des,
}) => {
  const [valueColor, setValueCor] = React.useState("gray");
  const [quantity, setQuantity] = React.useState(1);

  const { user } = React.useContext(UserContext);
  const { fetchCartMe } = React.useContext(CartContext);
  const userInfo = user?.user;

  const handleAddCart = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/carts/me/${idProduct}`,
        {
          quantity: Number(quantity),
          color: valueColor,
          user: userInfo?._id,
        },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );

      if (response) {
        fetchCartMe();
        toast.success("Product added to Cart successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="border shadow-lg px-4 py-2 rounded-md">
      <form className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="font-sans text-2xl font-bold">{name}</span>
          {countInStock !== 0 ? (
            <span className="font-sans bg-green-500 rounded-md px-4 py-1 text-white">
              Còn hàng
            </span>
          ) : (
            <span className="font-sans bg-red-600 rounded-md px-4 py-1 text-white">
              Hết hàng
            </span>
          )}
        </div>
        <span className="font-sans text-3xl font-bold">
          {price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="font-sans text-lg font-semibold">Số lượng</Label>
            <Input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <div>
            <span className="font-sans text-lg font-semibold">Màu sắc</span>
            <Select
              onValueChange={(value) => {
                setValueCor(value);
              }}
              defaultValue="gray"
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Chọn màu sắc" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Màu sắc</SelectLabel>
                  <SelectItem value="gray">Xám</SelectItem>
                  <SelectItem value="red">Đỏ</SelectItem>
                  <SelectItem value="white">Trắng</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          type="button"
          className="w-full hover:opacity-90"
          onClick={handleAddCart}
        >
          Đặt ngay
        </Button>
      </form>
      <AccordionDetailProduct des={des} name={name} />
    </div>
  );
};

export default ContentDetailProduct;
