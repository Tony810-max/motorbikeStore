import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CategoryContext } from "@/Contexts/CategoryContext";
import React from "react";
import { format } from "date-fns";

const TableCategory = () => {
  const { category } = React.useContext(CategoryContext);
  return (
    <Table>
      <TableCaption>Danh sách danh mục của bạn.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="font-sans text-center">Tên danh mục</TableHead>
          <TableHead className="font-sans text-center">Cập nhập</TableHead>
          <TableHead className="font-sans text-center">
            Lần cập nhập gần nhất
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {category?.map((item, index) => (
          <TableRow key={item?._id}>
            <TableCell className="font-sans text-center">{index + 1}</TableCell>
            <TableCell className="font-sans text-center">
              {item?.name}
            </TableCell>
            <TableCell className="font-sans text-center">Cập nhập</TableCell>
            <TableCell className="font-sans text-center">
              {format(new Date(item?.updatedAt), "dd-MM-yyyy HH:mm")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableCategory;
