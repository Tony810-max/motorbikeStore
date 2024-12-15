import Header from "@/components/layouts/Header";
import ContentChangePassword from "./components/ContentChangePassword";

const ChangePassword = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Header />
      <ContentChangePassword />
    </div>
  );
};

export default ChangePassword;
