import TitleAdmin from "@/components/TitleAdmin";
import AddProduct from "../AddProduct";
import TableProduct from "./TableProduct";

const ContentProductAdmin = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <TitleAdmin title={"Quản lý sản phẩm"} />
        <AddProduct />
      </div>
      <TableProduct />
    </div>
  );
};

export default ContentProductAdmin;
