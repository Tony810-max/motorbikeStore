import Header from "@/components/layouts/Header";
import ContentOrder from "./components/ContentOrder";
import React from "react";
import { CartContext } from "@/contexts/cartContext";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const { cart } = React.useContext(CartContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (cart.length === 0) return navigate("/");
  }, [cart, navigate]);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <ContentOrder />
    </div>
  );
};

export default OrderPage;
