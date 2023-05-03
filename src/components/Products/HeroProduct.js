import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import EcomAPI from "../../apis/EcomAPI";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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
    <div className="my-10 flex justify-center space-x-20 ">
      {/* <Carousel> */}
      {selectedProduct &&
        selectedProduct.map((product) => {
          if (product.isHero === true) {
            return (
              <div key={product._id}>
                <Card
                  className="w-72 h-72 shadow-xl cursor-pointer"
                  onClick={() => handleProductSelect(product._id)}
                >
                  <CardMedia
                    component="img"
                    className="w-72 h-60 "
                    image={product.image.url}
                  />
                  <CardContent>
                    <Typography
                      component="div"
                      variant="body1"
                      className="text-black text-center"
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              // <div
              //   key={product._id}
              //   className="md:flex items-center m-auto gap-10 "
              // >
              //   <>
              //     <div
              //       className="rounded-3xl overflow-hidden cursor-pointer"
              //       onClick={() => handleProductSelect(product._id)}
              //     >
              //       <img
              //         src={product.image.url}
              //         style={{
              //           height: "300px",
              //           width: "300px",
              //         }}
              //         className="transition-all duration-300 ease-in transform hover:scale-110"
              //         alt=""
              //       />
              //     </div>
              //   </>

              //   <div className="flex-col w-[20rem] justify-center">
              //     <p className="text-5xl">{product.name}</p>
              //     <p className="text-lg">{product.description}</p>
              //     <button
              //       className="p-0 m-0 bg-amber-800 text-white border-0 rounded-md w-28"
              //       // onClick={handleBuy}
              //     >
              //       <p className="text-sm">₹ {product.price}</p>
              //     </button>
              //     <p className="text-xl underline">{product.category}</p>
              //   </div>
              // </div>
            );
          }
        })}
      {/* </Carousel> */}
    </div>
  );
};

export default HeroProduct;
