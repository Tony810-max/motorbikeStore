import React from "react";
import LabelInpt from "./LabelInpt";
import { UserContext } from "@/contexts/userContext";

const InfoProfile = () => {
  const { user } = React.useContext(UserContext);
  return (
    <div className="grid grid-cols-2 gap-4">
      <LabelInpt name={"Họ và tên"} value={user?.user?.name} />
      <LabelInpt name={"Số điện thoại"} value={user?.user?.phone} />
      <LabelInpt name={"Email"} value={user?.user?.email} />
      <LabelInpt name={"Address"} value={user?.user?.address} />
    </div>
  );
};

export default InfoProfile;
