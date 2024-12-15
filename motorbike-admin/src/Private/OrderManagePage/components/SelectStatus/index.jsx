import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { OrderContext } from "@/Contexts/OrderContext";
const SelectStatus = () => {
  const { status, setStatus } = React.useContext(OrderContext);
  return (
    <Select defaultValue={status} onValueChange={(value) => setStatus(value)}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Đang xử lý" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pending">Đang xử lý</SelectItem>
        <SelectItem value="shipped">Đã giao hàng</SelectItem>
        <SelectItem value="in_transit">Đang giao hàng</SelectItem>
        <SelectItem value="cancelled">Đã hủy</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectStatus;
