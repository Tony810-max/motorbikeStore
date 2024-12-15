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
import SetRoleAdmin from "./SetRoleAdmin";

const TableUser = () => {
  const { users } = React.useContext(UserContext);
  const filterUserNotAdmin = users?.filter((user) => user?.isAdmin === false);
  console.log(users);

  return (
    <Table>
      <TableCaption>Danh sách người dùng tại cửa hàng.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">#</TableHead>
          <TableHead className="text-center">Tên người dùng</TableHead>
          <TableHead className="text-center">Số điện thoại</TableHead>
          <TableHead className="text-center">Địa chỉ</TableHead>
          <TableHead className="text-center">Set quyền quản trị viên</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filterUserNotAdmin?.map((item, index) => (
          <TableRow key={item?._id}>
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="text-center">{item?.name}</TableCell>
            <TableCell className="text-center">{item?.phone}</TableCell>
            <TableCell className="text-center">{item?.address}</TableCell>
            <TableCell className="text-center">
              <SetRoleAdmin idUser={item?._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableUser;
