import React from "react";
import { Filter } from "lucide-react";

import FilterProduct from "./FilterProduct";

const HeaderProduct = () => {
  const [filter, setFilter] = React.useState(false);
  
  return (
    <div className="flex justify-between">
      <span className="font-sans text-xl font-bold ">Sản phẩm hiện có</span>
      <div className="flex items-center gap-2">
        <FilterProduct filter={filter} />
        <Filter
          className="hover:opacity-70 hover:cursor-pointer"
          onClick={() => setFilter(!filter)}
        />
      </div>
    </div>
  );
};

export default HeaderProduct;
