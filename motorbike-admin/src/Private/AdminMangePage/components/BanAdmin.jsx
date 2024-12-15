/* eslint-disable react/prop-types */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { UserContext } from "@/Contexts/UserContext";
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const BanAdmin = ({ idAmin }) => {
  const { fetchUser } = React.useContext(UserContext);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const handleBanAdmin = async () => {
    try {
      const response = await axios.patch(
        `${API_URL}/admin/${idAmin}`,
        { isAdmin: false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        fetchUser();
        toast.success("Gỡ quyền trị viên thành công");
      }
    } catch (error) {
      toast.error(error?.response?.data?.messgae);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-red-600 hover:opacity-70">
        Gỡ
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Bạn có chắc muốn gỡ quyền quyền trị viên người này?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Để gỡ vui lòng nhấn <span className="font-bold">Gỡ</span> để gỡ
            quyền quản trị của người này
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#ef4444] hover:bg-[#ef4444] hover:opacity-70"
            onClick={handleBanAdmin}
          >
            Gỡ
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BanAdmin;
