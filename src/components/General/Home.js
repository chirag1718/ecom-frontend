import React from "react";
import HeroProduct from "../Products/HeroProduct";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Btn from "../utils/Btn";
import HighlightText from "../utils/HighlightText";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Banner />
      <Btn text={"Shop Now"} />
      <HighlightText text={"Discover a World of Devine Chocolate Delight"} />
      <div>
        <HeroProduct />
      </div>
      <Banner />
      <Btn text={"New Launches"} />
      <Products />
      <HighlightText
        text={"Savor the pure delight of Handpicked Cocoa Beans"}
      />
      <Banner />
      <HighlightText
        text={"Gift special Handmade Chocolate for your Special Ones!"}
      />
      <Footer />
    </div>
  );
};

export default Home;
