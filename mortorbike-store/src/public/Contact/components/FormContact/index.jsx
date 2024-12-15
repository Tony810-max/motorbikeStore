import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "@/types/common";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Vui lòng không bỏ sót trường này"),
    phone: yup
      .string()
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
        "Số điện thoại không hợp lệ"
      )
      .required(),
    email: yup.string().email().required("Vui lòng không bỏ sót trường này"),
    message: yup
      .string()
      .min(20, "Nội dung quá ngắn")
      .required("Vui lòng không bỏ sót trường này"),
  })
  .required();

const FormContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleContact = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/contacts`, {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        message: data?.message,
      });
      if (response) {
        toast.success(
          "Gửi yêu cầu thành công, chúng tôi sẽ sớm liên lạc đến bạn!"
        );
        reset();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="border px-4 py-2 bg-slate-100 rounded-lg shadow-lg space-y-4">
      <span className="font-sans text-xl font-bold border-l-4 text-[#66CC00] border-l-[#66CC00] pl-2">
        Yêu cầu trợ giúp
      </span>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleContact)}
      >
        <Input placeholder="Họ và tên" {...register("name")} />
        {errors.name?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.name?.message}
          </p>
        )}
        <Input placeholder="Số điện thoại của bạn" {...register("phone")} />
        {errors.phone?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.phone?.message}
          </p>
        )}
        <Input placeholder="Email" {...register("email")} />
        {errors.email?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.email?.message}
          </p>
        )}
        <Textarea
          placeholder="Bạn cần trợ giúp về vấn đề gì?..."
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="font-sans text-sm text-red-500">
            {errors.message?.message}
          </p>
        )}
        <Button
          type="submit"
          className="bg-[#66CC00] hover:bg-[#66CC00] hover:opacity-70"
        >
          Gửi hỗ trợ
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
