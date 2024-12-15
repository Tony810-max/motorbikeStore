import TableOrder from "./TableOrder";

import FormInforOrder from "./FormInforOrder";
import React from "react";
import { CartContext } from "@/contexts/cartContext";

const ContentOrder = () => {
  const { cart } = React.useContext(CartContext);

  return (
    <div className="container space-y-4">
      <span className="font-sans text-xl font-bold">Thanh toán đơn hàng</span>
      <TableOrder cart={cart} />
      <FormInforOrder cart={cart} />
    </div>
  );
};

export default ContentOrder;
