/* eslint-disable react/prop-types */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserContext } from "@/contexts/userContext";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const UserHeader = ({ name }) => {
  const { handleLogout } = React.useContext(UserContext);

  return (
    <DropdownMenu className="w-full">
      <DropdownMenuTrigger className="font-sans text-lg capitalize font-semibold flex items-center gap-2">
        {name}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48 space-y-2">
        <DropdownMenuLabel className="text-center uppercase">
          Tài khoản của tôi
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-400" />
        <Link
          to="/profile"
          className="w-full block text-center font-sans font-semibold text-base hover:opacity-70 "
        >
          Thông tin tài khoản
        </Link>
        <Link
          to="/cart"
          className="w-full block text-center font-sans font-semibold text-base hover:opacity-70 "
        >
          Giỏ hàng
        </Link>
        <Link
          to="/myOrder"
          className="w-full block text-center font-sans font-semibold text-base hover:opacity-70 "
        >
          Đơn đặt hàng của tôi
        </Link>
        <Link
          to="/change-password"
          className="w-full block text-center font-sans font-semibold text-base hover:opacity-70 "
        >
          Đổi mật khẩu
        </Link>

        <DropdownMenuSeparator className="bg-slate-400" />
        <DropdownMenuItem
          className="font-sans text-base justify-center hover:opacity-70 hover:cursor-pointer font-semibold"
          onClick={handleLogout}
        >
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserHeader;
