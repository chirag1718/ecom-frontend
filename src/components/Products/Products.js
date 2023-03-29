import React from "react";
import ProductsCards from "./ProductsCard";
const Products = () => {
  return (
    <div className="inline-flex h-60 w-[1400px] scroll-smooth border-2 rounded-xl m-3 items-center bg-black scrollbar-hide overflow-scroll">
      <div className="flex px-3 ">
        <ProductsCards />
      </div>
    </div>
  );
};

export default Products;
