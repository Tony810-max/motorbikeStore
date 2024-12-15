import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API_URL } from "@/types/common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    password: yup.string().required(),
    reEnterPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Mật khẩu không khớp với mật khẩu đã nhập")
      .required(),
    email: yup.string().email("Email không hợp lệ").required(),
    address: yup.string().required(),
    phone: yup
      .string()
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
        "Số điện thoại không hợp lệ"
      )
      .required(),
  })
  .required();

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        address: data?.address,
        password: data?.password,
      });

      if (response) {
        toast.success("Đăng ký thành công!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="w-full space-y-2" onSubmit={handleSubmit(handleSignUp)}>
      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">
          Tên đầy đủ của bạn
        </label>
        <input
          {...register("name")}
          className="border border-slate-400 px-2 py-1 rounded-lg"
        />
        {errors.name?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.name?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">Email</label>
        <input
          {...register("email")}
          className="border border-slate-400 px-2 py-1 rounded-lg"
        />
        {errors.email?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">
          Số điện thoại
        </label>
        <input
          {...register("phone")}
          className="border border-slate-400 px-2 py-1 rounded-lg"
        />
        {errors.phone?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.phone?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">Địa chỉ</label>
        <input
          {...register("address")}
          className="border border-slate-400 px-2 py-1 rounded-lg"
        />
        {errors.address?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.address?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">Mật khẩu</label>
        <input
          type="password"
          {...register("password")}
          className="border border-slate-400 px-2 py-1 rounded-lg"
        />
        {errors.password?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.password?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-sans text-base font-semibold">
          Nhập lại mật khẩu
        </label>
        <input
          type="password"
          {...register("reEnterPassword")}
          className="border border-slate-400 px-2 py-1 rounded-lg"
        />
        {errors.reEnterPassword?.message && (
          <p className="font-sans text-sm text-red-500 italic capitalize">
            {errors.reEnterPassword?.message}
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-black text-white text-lg rounded-lg w-1/2 hover:opacity-70 py-1"
        >
          Đăng ký
        </button>
      </div>
    </form>
  );
};

export default FormSignUp;
