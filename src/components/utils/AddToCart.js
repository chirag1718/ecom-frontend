import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import EcomAPI from "../../apis/EcomAPI";
const AddToCart = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleCloseToast = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
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
    setOpen(true);
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
        <Snackbar
          message="Product added to cart"
          autoHideDuration={2000}
          open={open}
          onClose={handleCloseToast}
        />
      </Button>
    </>
  );
};

export default AddToCart;
