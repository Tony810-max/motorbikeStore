import TitleAdmin from "@/components/TitleAdmin";
import TableContact from "./TableContact";

const ContentContact = () => {
  return (
    <div className="space-y-4">
      <TitleAdmin title={"Quản lý liên hệ"} />
      <TableContact />
    </div>
  );
};

export default ContentContact;
