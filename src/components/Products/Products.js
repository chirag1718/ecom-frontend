import React from "react";
import ProductsCards from "./ProductsCard";
const Products = () => {
  return (
    <div className="inline-flex h-[400px] w-full scroll-smooth m-3 mt-5 items-center  scrollbar-hide overflow-scroll">
      <div className="flex px-3 ">
        <ProductsCards />
      </div>
    </div>
  );
};

export default Products;
