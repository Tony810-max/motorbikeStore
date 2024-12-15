import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactContext } from "@/Contexts/ContactContext";
import React from "react";

const TableContact = () => {
  const { contacts } = React.useContext(ContactContext);
  return (
    <Table>
      <TableCaption>Danh sách người dùng liên hệ.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="text-center">Tên người dùng</TableHead>
          <TableHead className="text-center">Số điện thoại</TableHead>
          <TableHead className="text-center">Nội dung tin nhắn</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts?.map((item, index) => (
          <TableRow key={item?._id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="text-center">{item?.name}</TableCell>
            <TableCell className="text-center">{item?.phone}</TableCell>
            <TableCell className="text-center">{item?.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableContact;
