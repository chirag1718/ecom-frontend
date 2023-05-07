import React, { useEffect, useState } from "react";
import EcomAPI from "../../apis/EcomAPI";
import { useParams } from "react-router-dom";
import AddToCart from "../utils/AddToCart";

// This is component that provides a single component UI
const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.get(`/product/get-one-product/${id}`);
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
        <div className="md:flex items-center m-auto my-8 gap-10 w-8/12  ">
          <>
            <div
              className="rounded-3xl flex items-center justify-center overflow-hidden md:w-[25rem] m-auto w-[25rem] h-[25rem]
            "
            >
              <img
                src={selectedProduct.image.url}
                style={{
                  height: "400px",
                  width: "400px",
                  // rotate: "-90deg",
                }}
                className="transition-all duration-300 ease-in transform hover:scale-110"
                alt=""
              />
            </div>
          </>

          <div className="flex-col md:w-[20rem] lg:w-[30rem] w-[30rem] md:rounded-r-3xl">
            <p className="text-5xl">{selectedProduct.name}</p>
            <p className="text-lg">{selectedProduct.description}</p>
            <button
              className="p-0 m-0 bg-amber-800 text-white border-0 rounded-md w-28"
              // onClick={handleBuy}
            >
              <p className="text-sm">₹ {selectedProduct.price}</p>
            </button>
            <p className="text-xl underline">{selectedProduct.category}</p>
            <AddToCart product={selectedProduct} />
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
