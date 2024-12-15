import CardProduct from "@/components/CardProduct";
import { ProductContext } from "@/contexts/productContext";
import React from "react";
import HeaderProduct from "./HeaderProduct";

const ListProduct = () => {
  const { products, filterCategory, filterProduct } =
    React.useContext(ProductContext);
  const [product, setProduct] = React.useState(products);

  React.useEffect(() => {
    let newProduct = [];

    if (filterCategory && filterProduct) {
      newProduct = products.filter(
        (item) =>
          item.category.name.toLowerCase() === filterCategory.toLowerCase() &&
          item.title.toLowerCase().includes(filterProduct.toLowerCase())
      );
      return setProduct(newProduct);
    }

    if (filterCategory) {
      newProduct = products.filter(
        (item) =>
          item.category.name.toLowerCase() === filterCategory.toLowerCase()
      );
      return setProduct(newProduct);
    }

    if (filterProduct) {
      newProduct = products.filter((item) =>
        item.title.toLowerCase().includes(filterProduct.toLowerCase())
      );
      return setProduct(newProduct);
    }

    if (!filterCategory || !filterProduct) return setProduct(products);
  }, [filterCategory, filterProduct, products]);

  return (
    <div className="container space-y-4 col-span-5">
      <HeaderProduct />
      <div className="grid grid-cols-3">
        {product?.map((product) => (
          <CardProduct
            key={product?._id}
            idProduct={product?._id}
            image={product?.image}
            price={product?.price}
            rate={product?.rate}
            title={product?.title}
            category={product?.category?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
