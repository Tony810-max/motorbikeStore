import React from "react";
import { Link } from "react-router-dom";
import LogoHeader from "./components/LogoHeader";
import NavbarHeader from "./components/NavbarHeader";
import UserHeader from "./components/UserHeader";
import { UserContext } from "@/contexts/userContext";

const Header = () => {
  const { user } = React.useContext(UserContext);

  return (
    <div className="container w-full flex items-center justify-between ">
      <LogoHeader />
      <NavbarHeader />
      {!user ? (
        <div className="flex-1 space-x-2">
          <Link
            to={"/login"}
            className="font-sans text-base font-medium bg-slate-300 text-black rounded-lg px-2 py-1 hover:opacity-70"
          >
            Đăng nhập
          </Link>
          <Link
            to={"/signUp"}
            className="font-sans text-base font-medium bg-black text-white rounded-lg px-2 py-1 hover:opacity-70"
          >
            Đăng ký
          </Link>
        </div>
      ) : (
        <UserHeader name={user?.user?.name} />
      )}
    </div>
  );
};

export default Header;
