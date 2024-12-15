import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import FormUpdateProfile from "./FormUpdateProfile";

const UpdateProfile = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 bg-[#ef4444] px-2 py-1 rounded-md hover:opacity-70">
        <span className="font-sans text-white">Edit Profile</span>
        <Pencil size={14} color="#ffff" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cập nhập thông tin..!!</DialogTitle>
          <DialogDescription>
            Vui lòng nhập thông tin cần cập nhập bên dưới, sau đó bấm lưu để hệ
            thống cập nhập
          </DialogDescription>
        </DialogHeader>
        <FormUpdateProfile />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
