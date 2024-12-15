import Header from "@/components/layouts/Header";
import ContentCart from "./components/ContentCart";

const CartPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Header />
      <ContentCart />
    </div>
  );
};

export default CartPage;
