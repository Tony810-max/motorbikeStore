import TableCart from "./TableCart";
import { Link } from "react-router-dom";

const ContentCart = () => {
  return (
    <div className="container space-y-4">
      <span className="font-sans text-xl font-bold">Giỏ hàng của bạn</span>
      <TableCart />
      <div className="flex justify-end">
        <Link
          to={"/order"}
          className="font-sans bg-[#ef4444] px-4 py-1 rounded-md text-white hover:opacity-70"
        >
          Thanh Toán
        </Link>
      </div>
    </div>
  );
};

export default ContentCart;
