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

const SetRoleAdmin = ({ idUser }) => {
  console.log(idUser);
  const { fetchUser } = React.useContext(UserContext);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const handleSetRoleAdmin = async () => {
    try {
      const response = await axios.patch(
        `${API_URL}/admin/${idUser}`,
        { isAdmin: true },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response) {
        toast.success("Đã set quyền admin thành công");
        fetchUser();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-sans text-red-500 hover:opacity-70">
        Set
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Bạn có chắc muốn sét người này là quản trị viên?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Sau khi nhấn nút <span className="font-bold">Set </span> sẽ không
            thể quay lại
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSetRoleAdmin}
            className=" bg-[#ef4444] hover:bg-[#ef4444] hover:opacity-70 "
          >
            Set
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SetRoleAdmin;
