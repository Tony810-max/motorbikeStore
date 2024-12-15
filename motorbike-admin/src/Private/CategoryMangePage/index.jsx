import HeaderAdmin from "@/components/layouts/Header";
import SheetAdminPage from "../AdminPage/components/SheetAdminPage";
import ContentCategoryAdmin from "./components/ContentCategoryAdmin";

const CategoryMangePage = () => {
  return (
    <div className="flex flex-col items-center py-2 gap-4">
      <div className="container flex justify-between">
        <SheetAdminPage />
        <HeaderAdmin />
      </div>
      <div className="container">
        <ContentCategoryAdmin />
      </div>
    </div>
  );
};

export default CategoryMangePage;
