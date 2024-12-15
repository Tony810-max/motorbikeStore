import HeaderAdmin from "@/components/layouts/Header";
import SheetAdminPage from "../AdminPage/components/SheetAdminPage";
import ContentProductAdmin from "./components/ContentProductAdmin";

const ProductMangePage = () => {
  return (
    <div className="flex flex-col items-center py-2 gap-4">
      <div className="container flex justify-between">
        <SheetAdminPage />
        <HeaderAdmin />
      </div>
      <div className="container">
        <ContentProductAdmin />
      </div>
    </div>
  );
};

export default ProductMangePage;
