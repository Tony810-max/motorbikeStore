import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container grid grid-cols-3 bg-slate-200 rounded-md">
      <div className="flex flex-col items-center">
        <Link to={"/"}>
          <img src="/images/logo.webp" alt="logo" className="w-20 h-20" />
        </Link>
        <span className="text-xl font-bold ">Mortorbike Store</span>
      </div>
      <div>
        <Link to={"/product"} className="hover:opacity-70 hover:text-red-600">
          Sản phẩm
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-bold font-sans">Trợ giúp</span>
        <Link to={"/contact"} className="hover:opacity-70 hover:text-red-600">
          Liên hệ
        </Link>
      </div>
    </div>
  );
};

export default Footer;
