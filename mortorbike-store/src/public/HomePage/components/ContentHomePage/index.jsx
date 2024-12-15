import CardProduct from "@/components/CardProduct";
import { ProductContext } from "@/contexts/productContext";
import React from "react";
import { Link } from "react-router-dom";

const ContentHomePage = () => {
  const { products } = React.useContext(ProductContext);

  const groupedProducts = products?.reduce((acc, product) => {
    const categoryName = product?.category?.name || "Khác";
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(product);
    return acc;
  }, {});

  console.log("groupedProducts", Object.entries(groupedProducts));

  return (
    <div className="container space-y-4">
      {/* Lặp qua từng category */}
      {groupedProducts &&
        Object.entries(groupedProducts).map(
          ([categoryName, categoryProducts]) => (
            <div key={categoryName} className="space-y-4">
              {/* Tiêu đề category */}
              <span className="font-sans font-bold text-xl">
                {categoryName}
              </span>
              <div className="grid grid-cols-3 gap-4">
                {categoryProducts.slice(0, 6).map((product) => (
                  <CardProduct
                    key={product?._id}
                    idProduct={product?._id}
                    image={product?.image}
                    title={product?.title}
                    price={product?.price}
                    rate={product?.rate}
                    category={product?.category?.name}
                  />
                ))}
              </div>
              {/* Nút Xem thêm cho từng category */}
              <div className="flex justify-center mt-4">
                <Link
                  to={`/product?category=${categoryName}`}
                  className="px-6 py-2 bg-[#b80f0e] hover:bg-[#b80f0e] hover:opacity-70 text-white"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default ContentHomePage;
