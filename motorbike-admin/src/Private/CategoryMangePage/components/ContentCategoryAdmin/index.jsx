import TitleAdmin from "@/components/TitleAdmin";
import TableCategory from "./TableCategory";
import AddCategoryAdmin from "../AddCategoryAdmin";

const ContentCategoryAdmin = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <TitleAdmin title={"Quản lý danh mục"} />
        <AddCategoryAdmin />
      </div>
      <TableCategory />
    </div>
  );
};

export default ContentCategoryAdmin;
