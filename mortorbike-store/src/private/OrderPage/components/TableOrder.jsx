/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const TableOrder = ({ cart }) => {
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const arrayTotalPrice = cart[0]?.items.map((item) => {
      return item.product.price * item.quantity;
    });

    if (arrayTotalPrice) {
      setTotalPrice(
        arrayTotalPrice.reduce((total, current) => total + current, 0)
      );
    } else {
      setTotalPrice(0);
    }
  }, [cart, totalPrice]);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="text-center">Tên sản phẩm</TableHead>
          <TableHead className="text-center">Số lượng</TableHead>
          <TableHead className="text-center">Đơn giá</TableHead>
          <TableHead className="text-center">Tổng tiền</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart[0]?.items.map((item, index) => (
          <TableRow key={item._id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="text-center">{item.product.name}</TableCell>
            <TableCell className="text-center">{item.quantity}</TableCell>
            <TableCell className="text-center">
              {item.product.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </TableCell>
            <TableCell className="text-center">
              {(item.product.price * item.quantity).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-center">
            {totalPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableOrder;
