/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectStatusOrder = ({ status, onSetStatus }) => {
  return (
    <Select onValueChange={(value) => onSetStatus(value)} defaultValue={status}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Đang xử lý" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pending">Đang xử lý</SelectItem>
        <SelectItem value="shipped">Đã giao</SelectItem>
        <SelectItem value="in_transit">Đang giao</SelectItem>
        <SelectItem value="cancelled">Đã hủy</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectStatusOrder;
