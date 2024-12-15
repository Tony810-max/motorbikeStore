import InfoProfile from "./InfoProfile";
import UpdateProfile from "./UpdateProfile";

const ContentProfile = () => {
  return (
    <div className="container space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-sans text-xl font-bold uppercase">
          Thông tin tài khoản
        </span>
        <UpdateProfile />
      </div>
      <InfoProfile />
    </div>
  );
};

export default ContentProfile;
