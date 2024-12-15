import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderContext } from "@/Contexts/OrderContext";
import React from "react";
import UpdateStatus from "./UpdateStatus";
import { format } from "date-fns";

const TableOrder = () => {
  const { orders, status } = React.useContext(OrderContext);
  return (
    <Table>
      <TableCaption>Danh sách đơn đặt hàng của người dùng.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="text-center">Tên người đặt hàng</TableHead>
          <TableHead className="text-center">Số điện thoại</TableHead>
          <TableHead className="text-center">Địa chỉ</TableHead>
          <TableHead className="text-center">Trạng thái</TableHead>
          {status === "pending" && (
            <TableHead className="text-center">Cập nhập trạng thái</TableHead>
          )}
          {status === "pending" ? (
            <TableHead className="text-center">Ngày đặt</TableHead>
          ) : (
            <TableHead className="text-center">
              Thời gian thay đổi trạng thái
            </TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((item, index) => (
          <TableRow key={item?._id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="text-center">{item?.user?.name}</TableCell>
            <TableCell className="text-center">{item?.user?.phone}</TableCell>
            <TableCell className="text-center">{item?.user?.address}</TableCell>
            <TableCell className="text-center">{item?.status}</TableCell>
            {item?.status === "pending" && (
              <TableCell className="text-center">
                <UpdateStatus orderID={item?._id} />
              </TableCell>
            )}
            <TableCell className="text-center">
              {item?.updatedAt
                ? format(new Date(item?.updatedAt), "dd-MM-yyyy HH:mm")
                : ""}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOrder;
