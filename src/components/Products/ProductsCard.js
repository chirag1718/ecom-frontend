import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";
import EcomAPI from "../../apis/EcomAPI";
import Wishlist from "../utils/Wishlist";
import CartIcon from "../utils/CartIcon";

// This is a component that provides all products card for the home component
const ProductsCard = () => {
  let navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/product/get-all-products");
        console.log(response.data);
        setSelectedProduct(response.data);
      } catch (err) {
        console.log(err, "This is error");
      }
    };
    fetchData();
  }, []);

  const handleProductSelect = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {selectedProduct &&
        selectedProduct.map((product) => {
          return (
            <Card
              className="flex flex-col w-[250px] h-[450px] mx-2 rounded-none"
              //transition-all transform hover:scale-105 ease-linear duration-75

              key={product._id}
              variant="outlined"
            >
              <div className="overflow-hidden">
                <CardMedia
                  component="img"
                  image={product.image.url}
                  onClick={() => handleProductSelect(product._id)}
                  className="object-cover w-[250px] h-[350px] cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
                />
              </div>
              <CardContent className="p-2 flex justify-between items-center rounded-none">
                <div>
                  <p className="text-[15px]">{product.name}</p>
                  <p className="text-[15px]">₹ {product.price}</p>
                  <p className="text-[15px]">{product.category}</p>
                </div>
                <div className="space-y-5">
                  <Wishlist />
                  <CartIcon />
                </div>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};

export default ProductsCard;
