import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import EcomAPI from "../../apis/EcomAPI";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/reducers/cartSlice";
// import cart from "../../Images/cart.svg";
const AddToCart = ({ product }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

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
      dispatch(cartActions.addToCart(product));
      // localStorage.setItem()
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
