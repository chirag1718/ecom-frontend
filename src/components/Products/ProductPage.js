import React, { useEffect, useState } from "react";
import EcomAPI from "../../apis/EcomAPI";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get(`/product/getoneproduct/${id}`);
        setSelectedProduct(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err, "This is error");
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      {selectedProduct && (
        <div className="md:flex items-center m-auto my-8 gap-10 w-8/12">
          <>
            <div
              className="rounded-3xl flex items-center justify-center overflow-hidden md:w-[25rem] w-[30rem] h-[25rem]
            "
            >
              <img
                src={selectedProduct.image}
                style={{
                  height: "400px",
                  width: "400px",
                  rotate: "-90deg",
                }}
                className="transition-all duration-300 ease-in transform hover:scale-110"
                alt=""
              />
            </div>
          </>

          <div className="flex-col md:w-[20rem] lg:w-[30rem] w-[30rem]">
            <p className="text-5xl">{selectedProduct.name}</p>
            <p className="text-lg">{selectedProduct.description}</p>
            <button
              className="p-0 m-0 bg-amber-800 text-white border-0 rounded-md w-28"
              // onClick={handleBuy}
            >
              <p className="text-sm">₹ {selectedProduct.price}</p>
            </button>
            <p className="text-lg">{selectedProduct.category}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
