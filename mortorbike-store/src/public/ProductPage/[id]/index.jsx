import Header from "@/components/layouts/Header";
import ContentDetailProduct from "./components/ContentDetailProduct";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import { API_URL } from "@/types/common";

const ProductDetail = () => {
  const [product, setProduct] = React.useState([]);
  const idProduct = useParams()?.id;
  const fetchDetailProduct = React.useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/products/${idProduct}`);

      if (response) {
        setProduct(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [idProduct]);

  React.useEffect(() => {
    fetchDetailProduct();
  }, [fetchDetailProduct]);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container grid grid-cols-2 gap-2">
        <div className="relative">
          <img
            src={product?.image}
            className="w-full border rounded-md shadow-md"
          />
          <span className="absolute top-2 right-4 bg-orange-500 px-4 py-1 rounded-md shadow-md">
            {product?.category?.name}
          </span>
        </div>
        <ContentDetailProduct
          idProduct={idProduct}
          countInStock={product?.countInStock}
          des={product?.describe}
          price={product?.price}
          name={product?.name}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
