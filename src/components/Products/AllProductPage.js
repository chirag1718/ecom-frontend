import React from "react";
import ProductCard from "./ProductCard";

const AllProductPage = () => {
  return (
    <div className="inline-flex h-60 relative scroll whitespace-nowrap scroll-smooth border-2 rounded-lg m-3 items-center bg-black">
      <div className="flex px-3">
        <ProductCard />
      </div>
    </div>
  );
};

export default AllProductPage;
