import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AdminContext } from "@/Contexts/AdminContext";
import { ChevronDown } from "lucide-react";
import React from "react";

const HeaderAdmin = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const { handleLogout } = React.useContext(AdminContext);
  const adminInfo = admin?.admin;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <span className="capitalize">Xin chào, {adminInfo?.name}</span>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="hover:opacity-70" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderAdmin;
