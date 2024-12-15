/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import SearchProduct from "./SearchProduct";
import SelectCategory from "./SelectCategory";
import React from "react";
import { ProductContext } from "@/contexts/productContext";
import classNames from "classnames";

const FilterProduct = ({ filter }) => {
  const { setFilterCategory, setValue } = React.useContext(ProductContext);
  const handleClearFilter = () => {
    setValue("");
    setFilterCategory("");
  };

  return (
    <div
      className={classNames(
        "animate__animated animate__slideInRight flex items-center",
        {
          "hidden": filter === false,
        }
      )}
    >
      <Button variant="destructive" onClick={handleClearFilter}>
        Xóa bộ lọc
      </Button>
      <SearchProduct />
      <SelectCategory />
    </div>
  );
};

export default FilterProduct;
