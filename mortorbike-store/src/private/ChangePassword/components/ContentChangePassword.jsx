import FormChangePassword from "./FormChangePassword";

const ContentChangePassword = () => {
  return (
    <div className="container flex flex-col items-center">
      <div className="border px-6 py-2 rounded-md space-y-2">
        <span className="font-sans text-lg font-bold">Đổi mật khẩu của bạn tại đây</span>
        <FormChangePassword />
      </div>
    </div>
  );
};

export default ContentChangePassword;
