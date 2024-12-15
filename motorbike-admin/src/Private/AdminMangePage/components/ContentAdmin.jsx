import TitleAdmin from "@/components/TitleAdmin";
import TableAdmin from "./TableAdmin";

const ContentAdmin = () => {
  return (
    <div className="space-y-4">
      <TitleAdmin title={"Quản lý quản trị viên"} />
      <TableAdmin />
    </div>
  );
};

export default ContentAdmin;
