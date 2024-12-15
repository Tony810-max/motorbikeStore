import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserContext } from "@/Contexts/UserContext";
import React from "react";
import BanAdmin from "./BanAdmin";

const TableAdmin = () => {
  const { users } = React.useContext(UserContext);

  const listAdmin = users?.filter((user) => user?.isAdmin === true);
  return (
    <Table>
      <TableCaption>Danh sách quản trị viên tại cửa hàng.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="text-center">Tên quản trị viên</TableHead>
          <TableHead className="text-center">Số điện thoại</TableHead>
          <TableHead className="text-center">Địa chỉ</TableHead>
          <TableHead className="text-center">Chức danh</TableHead>
          <TableHead className="text-center">Gỡ quyền quản trị viên</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listAdmin?.map((admin, index) => (
          <TableRow key={admin?._id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="text-center">{admin?.name}</TableCell>
            <TableCell className="text-center">{admin?.phone}</TableCell>
            <TableCell className="text-center">{admin?.address}</TableCell>
            <TableCell className="text-center">
              <Badge variant={"destructive"} className="bg-green-600">
                Admin
              </Badge>
            </TableCell>
            <TableCell className="text-center">
              <BanAdmin idAmin={admin?._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableAdmin;
