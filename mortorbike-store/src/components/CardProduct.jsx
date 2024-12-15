/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const CardProduct = ({ idProduct, title, rate, price, image, category }) => {
  return (
    <div className="border rounded-md hover:shadow-2xl hover:scale-105 ">
      <div className="relative group">
        <img src={image} alt="product new" className="min-h-[30rem]" />
        <Link
          to={`/product/${idProduct}`}
          className="absolute text-center bottom-0 rounded-md left-0 w-full translate-y-full opacity-0 bg-[#c31311] text-white py-2 hover:bg-[#c31311] group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-300"
        >
          Chi tiết
        </Link>
        <span className="absolute top-2 right-4 bg-orange-500 px-4 py-1 rounded-md shadow-md">
          {category}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <span className="text-center">{title}</span>
        <ReactStars
          count={5}
          value={rate}
          size={28}
          activeColor="#c31311"
          edit={false}
        />
        <span className="font-sans text-xl font-semibold text-[#c31311]">
          {price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
