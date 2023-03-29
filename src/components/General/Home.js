import React from "react";
import HeroProduct from "../Products/HeroProduct";
import Product from "../Products/Product";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <div>
        <HeroProduct />
      </div>
      <Products />
    </div>
  );
};

export default Home;
