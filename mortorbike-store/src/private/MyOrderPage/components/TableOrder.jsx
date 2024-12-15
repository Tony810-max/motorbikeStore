/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useOrder } from "@/private/hooks/useOrder";
import CancelOrder from "./CancelOrder";

const TableOrder = ({ status }) => {
  const { orders, fetchOrder } = useOrder(status);
  const renderStatus = (statusOrder) => {
    switch (statusOrder) {
      case "pending":
        return (
          <span className="bg-slate-500 px-4 py-2 rounded-md text-white">
            Đang xử lý...
          </span>
        );
      case "shipped":
        return (
          <span className="bg-green-500 px-4 py-2 rounded-md text-white">
            Đã giao
          </span>
        );
      case "in_transit":
        return (
          <span className="bg-amber-500 px-4 py-2 rounded-md text-white">
            Đang giao
          </span>
        );
      case "cancelled":
        return (
          <span className="bg-red-500 px-4 py-2 rounded-md text-white">
            Đã hủy
          </span>
        );
      default:
        return <span>Lỗi</span>;
    }
  };

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="text-center">Trạng thái</TableHead>
          <TableHead className="text-center">Tổng tiền</TableHead>
          {status === "pending" && (
            <TableHead className="text-center">Hủy đơn hàng</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((order, index) => (
          <TableRow key={order?._id}>
            <TableCell className="text-center py-4">{index + 1}</TableCell>
            <TableCell className="text-center">
              {renderStatus(order?.status)}
            </TableCell>
            <TableCell className="text-center">
              {order?.totalPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </TableCell>
            {order?.status === "pending" && (
              <TableCell className="text-center">
                <CancelOrder fetchOrder={fetchOrder} idOrder={order?._id} />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOrder;
