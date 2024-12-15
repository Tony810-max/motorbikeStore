import TitleAdmin from "@/components/TitleAdmin";
import TableUser from "./TableUser";

const ContentUserManage = () => {
  return (
    <div className="space-y-4">
      <TitleAdmin title={"Quản lý người dùng"} />
      <TableUser />
    </div>
  );
};

export default ContentUserManage;
