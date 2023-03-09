import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import EcomAPI from "../../apis/EcomAPI";

const ProductCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get("/product/getallproducts");
        console.log(response.data);
        setSelectedProduct(response.data);
      } catch (err) {
        console.log(err, "This is error");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {selectedProduct &&
        selectedProduct.map((product) => {
          return (
            <Card
              className="flex flex-col w-40 h-48 mx-2 shadow-lg cursor-pointer transition-all transform hover:scale-105 ease-linear duration-200"
              key={product._id}
            >
              <div className="overflow-hidden">
                <CardMedia
                  image={product.image}
                  // className=" w-40 h-32"
                  className=" w-40 h-32 transition-all duration-200 ease-in transform hover:scale-105"
                />
              </div>
              <CardContent className="p-2 ">
                <p className="text-sm">{product.name}</p>
                <p className="text-xs">₹ {product.price}</p>
                <p className="text-[10px]">{product.category}</p>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};

export default ProductCard;
