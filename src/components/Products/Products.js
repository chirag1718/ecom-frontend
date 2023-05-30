import React from "react";
import ProductsCards from "./ProductsCard";
const Products = () => {
  return (
    <div className="inline-flex h-[500px] mb-10 w-full scroll-smooth items-center scrollbar-hide overflow-scroll">
      <div className="flex px-3 ">
        <ProductsCards />
      </div>
    </div>
  );
};

export default Products;
