import Header from "@/components/layouts/Header";
import FormSignUp from "./FormSignUp";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className=" border w-1/2 flex flex-col items-center px-4 py-5">
        <span className="font-sans text-2xl font-bold">Đăng ký</span>
        <FormSignUp />
        <p className="text-center text-sm text-gray-500 mt-4">
          Bạn đã có tài khoản?{" "}
          <Link
            to={"/login"}
            className="text-blue-600 hover:text-blue-800 font-bold underline"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
