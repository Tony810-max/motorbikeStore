import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormAddCategory from "./FormAddCategory";
import React from "react";

const AddCategoryAdmin = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-[#ef4444] px-4 py-1 text-white rounded-md">
        Thêm danh mục
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm danh mục</DialogTitle>
          <DialogDescription>
            Nhập thông tin danh mục cần thêm bên dưới sau đó bấm nút{" "}
            <span className="font-sans font-bold"> thêm danh mục </span>
          </DialogDescription>
        </DialogHeader>
        <FormAddCategory onSetOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryAdmin;
