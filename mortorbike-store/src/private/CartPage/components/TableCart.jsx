import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteProduct from "./DeleteProduct";
import React from "react";
import { CartContext } from "@/contexts/cartContext";

const TableCart = () => {
  const { cart, userId, fetchCartMe, token } = React.useContext(CartContext);

  return (
    <Table>
      <TableCaption>Danh sách sản phẩm trong giỏ hàng của bạn.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-semibold text-center ">
            #
          </TableHead>
          <TableHead className=" font-semibold text-center">
            Tên sản phẩm
          </TableHead>
          <TableHead className=" font-semibold text-center">Giá</TableHead>
          <TableHead className=" font-semibold text-center">Số lượng</TableHead>
          <TableHead className=" font-semibold text-center">
            Tổng tiền
          </TableHead>
          <TableHead className=" font-semibold text-center">
            Xóa sản phẩm
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart[0]?.items.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell className=" text-center">{index + 1}</TableCell>
              <TableCell className="text-center">
                {item?.product?.name}
              </TableCell>
              <TableCell className="text-center">
                {item?.product?.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </TableCell>
              <TableCell className="text-center">{item?.quantity}</TableCell>
              <TableCell className="text-center">
                {(
                  Number(item?.product?.price) * Number(item?.quantity)
                ).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </TableCell>
              <TableCell className="text-center">
                <DeleteProduct
                  idProduct={item.product._id}
                  userId={userId}
                  fetchCart={fetchCartMe}
                  token={token}
                  idCart={cart[0]?._id}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TableCart;
