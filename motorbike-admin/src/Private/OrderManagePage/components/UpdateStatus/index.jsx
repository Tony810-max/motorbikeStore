/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import FormUpdate from "./FormUpdate";
import React from "react";

const UpdateStatus = ({orderID}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Pencil size={16} className="hover:opacity-70" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thay đổi trạng thái đơn hàng</DialogTitle>
          <DialogDescription>
            Sau khi thay đổi không thể quay lại. Bấm{" "}
            <span className="font-bold">thay đổi</span> để cập nhập trạng thái
            mới đơn hàng
          </DialogDescription>
        </DialogHeader>
        <FormUpdate onSetOpen={setOpen} orderID={orderID} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateStatus;
