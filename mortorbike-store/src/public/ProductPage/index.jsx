import Header from "@/components/layouts/Header";
import ListProduct from "./components/ListProduct";

const ProductPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <ListProduct />
    </div>
  );
};

export default ProductPage;
