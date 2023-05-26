import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EcomAPI from "../../apis/EcomAPI";
import { Card, CardContent, CardMedia } from "@mui/material";
import Wishlist from "../utils/Wishlist";
import CartIcon from "../utils/CartIcon";

const HeroProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/product/get-all-products");
        setSelectedProduct(response.data);
        console.log(response.data, "this is reponse from hero-product clg");
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleProductSelect = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    // NOTE:{
    // Requirement => In heroProduct there will be 4 product which will be selected as Hero Product and out of those product every product will be render in a randomized manner like each and every product
    // }
    <div className="mb-10 flex justify-center space-x-20 ">
      {selectedProduct &&
        selectedProduct.map((product) => {
          if (product.isHero === true) {
            return (
              <div key={product._id}>
                <Card
                  className="flex flex-col w-[250px] h-[350px] mx-2 rounded-none cursor-pointer"
                  //transition-all transform hover:scale-105 ease-linear duration-75

                  key={product._id}
                  variant="outlined"
                >
                  <div className="overflow-hidden">
                    <CardMedia
                      onClick={() => handleProductSelect(product._id)}
                      component="img"
                      image={product.image.url}
                      className=" w-[250px] h-[350px] transition-all duration-100 ease-in transform hover:scale-105"
                      // className=" w-40 h-32 transition-all duration-75 ease-in transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-2 flex justify-between items-center">
                    <div>
                      <p className="text-[15px]">{product.name}</p>
                      <p className="text-[15px]">₹ {product.price}</p>
                      <p className="text-[15px]">{product.category}</p>
                    </div>
                    <div className="space-y-5 justify-center">
                      <Wishlist />
                      <CartIcon />
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default HeroProduct;
