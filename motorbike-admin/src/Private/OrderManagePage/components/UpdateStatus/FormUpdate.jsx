/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderContext } from "@/Contexts/OrderContext";
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const FormUpdate = ({ onSetOpen, orderID }) => {
  const [value, setValue] = React.useState("shipped");

  const { fetchOrders } = React.useContext(OrderContext);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const handleUpdateStatus = async () => {
    try {
      const response = await axios.patch(
        `${API_URL}/orders/status/${orderID}`,
        {
          status: value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        toast.success("Cập nhật trạng thái thành công");
        onSetOpen(false);
        fetchOrders();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label>Trạng thái</Label>
        <Select defaultValue={value} onValueChange={(value) => setValue(value)}>
          <SelectTrigger className="">
            <SelectValue placeholder="Lựa chọn trạng thái..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="shipped">Đã giao hàng</SelectItem>
            <SelectItem value="in_transit">Đang giao hàng</SelectItem>
            <SelectItem value="cancelled">Hủy đơn hàng</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end">
        <Button
          type="button"
          variant="destructive"
          onClick={handleUpdateStatus}
        >
          Thay đổi
        </Button>
      </div>
    </form>
  );
};

export default FormUpdate;
