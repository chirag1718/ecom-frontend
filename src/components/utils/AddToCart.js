import { Button } from "@mui/material";
import React from "react";
import EcomAPI from "../../apis/EcomAPI";
const AddToCart = ({ product }) => {
  const handleAddToCart = async () => {
    const user = localStorage.getItem("user");
    const userId = JSON.parse(user);
    try {
      const response = await EcomAPI.post("/cart/add-item", {
        userId: userId._id,
        productId: product._id,
      });
      console.log(response, "This is response");
    } catch (err) {
      console.log(err, "Error: Add to cart component");
    }
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
