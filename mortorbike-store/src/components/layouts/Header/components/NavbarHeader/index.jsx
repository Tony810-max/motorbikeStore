import { Link } from "react-router-dom";

const NavbarHeader = () => {
  return (
    <div className="flex-[2] flex justify-center gap-2 ">
      <Link
        to={"/"}
        className="font-sans text-base font-medium hover:opacity-70 hover:text-red-600 hover:underline"
      >
        Trang chủ
      </Link>
      <Link
        to={"/product"}
        className="font-sans text-base font-medium hover:opacity-70 hover:text-red-600 hover:underline"
      >
        Sản phẩm
      </Link>
      <Link
        to={"/contact"}
        className="font-sans text-base font-medium hover:opacity-70 hover:text-red-600 hover:underline"
      >
        Liên hệ
      </Link>
    </div>
  );
};

export default NavbarHeader;
