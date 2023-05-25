import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";
import EcomAPI from "../../apis/EcomAPI";
import wishlist from "../../Images/wishList.svg";
import cart from "../../Images/cart.svg";

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
              className="flex flex-col w-[250px] h-[350px] mx-2 rounded-none "
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
              <CardContent className="p-2 flex justify-between">
                <div>
                  <p className="text-sm">{product.name}</p>
                  <p className="text-xs">₹ {product.price}</p>
                  <p className="text-[10px]">{product.category}</p>
                </div>
                <div className="space-y-5">
                  <img src={wishlist} alt="" className="cursor-pointer" />
                  <img src={cart} alt="" className="cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};

export default ProductsCard;
