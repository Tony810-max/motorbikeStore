import HeaderAdmin from "@/components/layouts/Header";
import SheetAdminPage from "../AdminPage/components/SheetAdminPage";
import ContentUserManage from "./components/ContentUserManage";

const UserMangePage = () => {
  return (
    <div className="flex flex-col items-center py-2 gap-4">
      <div className="container flex justify-between">
        <SheetAdminPage />
        <HeaderAdmin />
      </div>
      <div className="container">
        <ContentUserManage />
      </div>
    </div>
  );
};

export default UserMangePage;
