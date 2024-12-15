import { Link } from "react-router-dom";

const DATA_TAB_SHEET = [
  {
    name: "Category Manage",
    href: "/admin/category",
  },
  {
    name: "Product Manage",
    href: "/admin/product",
  },
  {
    name: "User Manage",
    href: "/admin/user",
  },
  {
    name: "Order Manage",
    href: "/admin/order",
  },
  {
    name: "Contact Manage",
    href: "/admin/contact",
  },
  {
    name: "Admin Manage",
    href: "/admin/admin",
  },
];

const ContentSheetAdmin = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      {DATA_TAB_SHEET?.map((item) => (
        <Link
          key={item?.name}
          to={item?.href}
          className="hover:bg-[#ef4444] min-w-48 text-center px-6 py-1 hover:text-white rounded-md hover:opacity-70"
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default ContentSheetAdmin;
