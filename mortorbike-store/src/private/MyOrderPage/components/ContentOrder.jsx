import React from "react";
import SelectStatusOrder from "./SelectStatusOrder";
import TableOrder from "./TableOrder";

const ContentOrder = () => {
  const [status, setStatus] = React.useState("pending");

  return (
    <div className="container space-y-4">
      <span className="font-sans text-xl font-bold">
        Danh sách đơn hàng đặt của bạn
      </span>
      <div className="flex flex-col items-end gap-2">
        <SelectStatusOrder status={status} onSetStatus={setStatus} />
        <TableOrder status={status} />
      </div>
    </div>
  );
};

export default ContentOrder;
