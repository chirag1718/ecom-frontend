import React from "react";
import ProductsCards from "./ProductsCard";
const Products = () => {
  return (
    <div className="inline-flex h-60  scroll-smooth  border-2 rounded-lg m-3 items-center bg-black w-[700px] scrollbar-hide overflow-scroll">
      <div className="flex px-3 ">
        <ProductsCards />
      </div>
    </div>
  );
};

export default Products;
