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
import { API_URL } from "@/types/common";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteProduct = ({ idProduct, userId, fetchCart, token, idCart }) => {
  const handleDeleteCart = async () => {
    try {
      const response = await axios.delete(`${API_URL}/carts/me/${idProduct}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { user: userId, idCart },
      });

      if (response) {
        fetchCart();
        toast.success("Xóa sản phẩm thành công");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-sans text-red-500 font-semibold hover:opacity-70">
        Xóa
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Bạn có chắc muốn xóa sản phẩm này ra khỏi giỏ hàng?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Vui lòng nhấn{" "}
            <span className="font-sans text-red-500 font-bold italic">
              tiếp tục
            </span>{" "}
            nếu như bạn muốn xóa sản phẩm ra khỏi giỏ hàng
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-white hover:bg-red-500 hover:opacity-70"
            onClick={handleDeleteCart}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProduct;
