import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormAddProduct from "./FormAddProduct";
import React from "react";

const AddProduct = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <span className="bg-[#ef4444] text-white px-4 py-2 rounded-md hover:opacity-70">
          Thêm sản phẩm
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm sản phẩm vào cửa hàng</DialogTitle>
          <DialogDescription>
            Vui lòng nhập thông tin sản phẩm vào bên dưới sau đó bấm nút{" "}
            <span className="font-bold italic">thêm sản phẩm</span>
          </DialogDescription>
        </DialogHeader>
        <FormAddProduct onSetOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
