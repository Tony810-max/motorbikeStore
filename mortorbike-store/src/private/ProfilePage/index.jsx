import Header from "@/components/layouts/Header";
import ContentProfile from "./components/ContentProfile";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <ContentProfile />
    </div>
  );
};

export default ProfilePage;
