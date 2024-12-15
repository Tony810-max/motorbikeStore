import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContentSheetAdmin from "./ContentSheetAdmin";
import { AlignJustify } from "lucide-react";
import React from "react";
import { AdminContext } from "@/Contexts/AdminContext";

const SheetAdminPage = () => {
  const { handleLogout } = React.useContext(AdminContext);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="hover:cursor-pointer hover:opacity-50" />
      </SheetTrigger>
      <SheetContent side="left" className="space-y-4">
        <SheetHeader>
          <SheetTitle className="font-sans text-xl font-bold text-center">
            Motorbike Store Management
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ContentSheetAdmin />
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="destructive" type="submit" onClick={handleLogout}>
              Đăng xuất
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetAdminPage;
