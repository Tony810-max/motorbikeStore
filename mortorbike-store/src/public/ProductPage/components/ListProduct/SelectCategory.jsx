import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryContext } from "@/contexts/categoryContext";
import { ProductContext } from "@/contexts/productContext";
import React from "react";

const SelectCategory = () => {
  const { filterCategory, setFilterCategory } =
    React.useContext(ProductContext);
  const { categories } = React.useContext(CategoryContext);
  return (
    <Select
      value={filterCategory}
      onValueChange={(value) => setFilterCategory(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Hãng xe" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Hãng xe</SelectLabel>
          {categories?.map((category) => (
            <SelectItem value={category?.name} key={category?._id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
