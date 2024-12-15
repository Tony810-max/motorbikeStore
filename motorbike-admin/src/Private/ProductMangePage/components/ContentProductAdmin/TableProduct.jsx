import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductContext } from "@/Contexts/ProductContext";
import { format } from "date-fns";
import React from "react";

const TableProduct = () => {
  const { products } = React.useContext(ProductContext);
  return (
    <Table>
      <TableCaption>Danh sách sản phẩm hiện tại.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="text-center">Danh mục</TableHead>
          <TableHead className="text-center">Tên sản phẩm</TableHead>
          <TableHead className="text-center">Ảnh sản phẩm</TableHead>
          <TableHead className="text-center">Giá sản phẩm</TableHead>
          <TableHead className="text-center">Ngày cập nhập lần cuối</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product, index) => (
          <TableRow key={product?._id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="text-center">
              {product?.category?.name}
            </TableCell>
            <TableCell className="text-center">{product?.name}</TableCell>
            <TableCell className="text-center flex justify-center">
              <img
                src={product?.image}
                alt="img product"
                className="w-20 h-20 text-center "
              />
            </TableCell>
            <TableCell className="text-center">
              {product?.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </TableCell>
            <TableCell className="text-center">
              {format(new Date(product?.updatedAt), "dd-MM-yyyy HH:mm")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableProduct;
