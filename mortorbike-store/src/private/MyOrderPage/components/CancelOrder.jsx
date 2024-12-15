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
import { UserContext } from "@/contexts/userContext";
import { API_URL } from "@/types/common";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const CancelOrder = ({ idOrder, fetchOrder }) => {
  const { user } = React.useContext(UserContext);
  const token = user?.token;
  const userId = user?.user?._id;

  const handleCancelOrder = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}/orders/me/status/${idOrder}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { user: userId },
        }
      );

      if (response) {
        fetchOrder();
        toast.success("Đơn hàng đã hủy thành công!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-sans bg-[#ef4444] px-4 py-1 rounded-md text-white">
        Hủy đơn hàng
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Bạn có chắc muốn hủy đơn hàng này?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Sau khi bấm <span className="font-sans font-bold">Tiếp tục</span> sẽ
            không thể quay lại.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Quay lại</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleCancelOrder}
            className="bg-[#ef4444]"
          >
            Tiếp tục
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelOrder;
