import HeaderAdmin from "@/components/layouts/Header";
import SheetAdminPage from "../AdminPage/components/SheetAdminPage";
import ContentContact from "./components/ContentContact";

const ContactManagePage = () => {
  return (
    <div className="flex flex-col items-center py-2 gap-4">
      <div className="container flex justify-between">
        <SheetAdminPage />
        <HeaderAdmin />
      </div>
      <div className="container">
        <ContentContact />
      </div>
    </div>
  );
};

export default ContactManagePage;
