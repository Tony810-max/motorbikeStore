import React from "react";
import { useDebouncedValue } from "@mantine/hooks";

import { Input } from "@/components/ui/input";
import { ProductContext } from "@/contexts/productContext";

const SearchProduct = () => {
  const { setFilterProduct, value, setValue } =
    React.useContext(ProductContext);

  const [debounced] = useDebouncedValue(value, 500);

  React.useEffect(() => {
    setFilterProduct(debounced);
  }, [debounced, setFilterProduct]);

  return (
    <div>
      <Input
        placeholder="Nhập tên sản phẩm bạn muốn tìm...."
        className="min-w-64"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchProduct;
