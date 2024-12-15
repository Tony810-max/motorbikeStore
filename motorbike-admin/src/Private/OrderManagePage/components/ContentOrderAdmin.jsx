import TitleAdmin from "@/components/TitleAdmin";
import TableOrder from "./TableOrder";
import SelectStatus from "./SelectStatus";

const ContentOrderAdmin = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <TitleAdmin title={"Quản lý đơn đặt hàng của người dùng"} />
        <SelectStatus />
      </div>
      <TableOrder />
    </div>
  );
};

export default ContentOrderAdmin;
