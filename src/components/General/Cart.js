// MOVE THIS CART COMPONENT TO CHECKOUT FOLDER AND DON'T FORGET TO CHANGE IMPORT STATEMENTS

import {
  Badge,
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Drawer,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import "../../index.css";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React, { useEffect, useState } from "react";
import EcomAPI from "../../apis/EcomAPI";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const Cart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState(false);
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user);
  const cartData = useSelector((state) => state.cart);
  console.log(cartData.totalQuantity);
  const fetchData = async () => {
    try {
      const response = await EcomAPI.post("/cart/get-all-items", {
        userId: userId._id,
      });
      setSelectedItems(response.data);
      // console.log(selectedItems, "This is seletedItems");

      console.log(response.data, "This is cart items");
    } catch (err) {
      console.log(err, "Error: This is Cart component Error");
    }
  };
  useEffect(() => {
    if (isDrawerOpen) {
      fetchData();
    }
  }, [isDrawerOpen]);
  function cartTotal() {
    const total = selectedItems.reduce(
      (acc, curr) => acc + curr.productId.price * curr.quantity,
      0
    );
    console.log(total, "This is total amount of cart");
    return total;
  }
  const handleDeleteItem = async (id) => {
    try {
      const response = await EcomAPI.delete(`/cart/delete-item/${id}`);
      setSelectedItems(selectedItems.filter((a) => a._id !== id));
      console.log(response, "cart item deleted successfully");
    } catch (err) {
      console.log(err, "This is cart delete item route error");
    }
    setOpen(true);
  };
  // const handleIncItem = (cartItem) => {
  //   fetchData();
  // };
  // const handleDecItem = () => {
  //   fetchData();
  // };
  const handleCloseToast = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <IconButton
        size="small"
        edge="start"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Badge badgeContent color="secondary">
          <LocalMallOutlinedIcon htmlColor="#fff" />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{}}
      >
        <Box
          p={1.6}
          width="600px"
          textAlign="center"
          role="presentation"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            position: "sticky",
            top: "0",
            backgroundColor: "white",
            boxShadow: "0px 1px 8px -6px",
            zIndex: "1",
          }}
        >
          <Typography variant="h5" component="span" align="center">
            Cart
          </Typography>
          <IconButton disableRipple sx={{ cursor: "default" }}>
            <LocalMallOutlinedIcon
              sx={{
                fontSize: "25px",
                color: "black",
              }}
            />
          </IconButton>
        </Box>
        <Divider />
        <div>
          {selectedItems &&
            selectedItems.map((cartItem) => {
              return (
                <div
                  key={cartItem._id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px",
                    padding: "10px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Card
                      sx={{
                        height: "150px",
                        width: "150px",
                        display: "flex",
                      }}
                    >
                      <CardMedia
                        image={cartItem.productId.image.url}
                        sx={{
                          height: "150px",
                          width: "150px",
                        }}
                      />
                    </Card>
                  </Box>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography variant="h6" component="span">
                      {cartItem.productId.name}
                    </Typography>
                    <Typography variant="h5" component="span">
                      ₹ {cartItem.productId.price}
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "5px",
                        padding: "0px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        color="inherit"
                        size="small"
                        // onClick={handleDecItem}
                      >
                        <RemoveIcon />
                      </Button>
                      <Typography
                        variant="caption"
                        component="span"
                        style={{
                          fontSize: "20px",
                          paddingInline: "5px",
                        }}
                      >
                        {cartItem.quantity}
                      </Typography>
                      <Button
                        color="inherit"
                        size="small"
                        // onClick={handleIncItem}
                      >
                        <AddIcon />
                      </Button>
                      <Button onClick={() => handleDeleteItem(cartItem._id)}>
                        <DeleteIcon color="error" />
                        <Snackbar
                          message="Product removed from Cart"
                          autoHideDuration={3000}
                          open={open}
                          onClose={handleCloseToast}
                        />
                      </Button>
                    </Box>
                  </div>
                </div>
              );
            })}
        </div>
        <Box
          sx={{
            position: "sticky",
            bottom: 0,
            backgroundColor: "#fff",
            // boxShadow: "0px 1px 8px -6px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px -1px 5px -3px",
            }}
          >
            {selectedItems.length < 1 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Typography variant="h4" component="span">
                  Your Cart is Empty!
                </Typography>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  alignItems: "end",
                  paddingTop: "10px",
                  paddingRight: "17px",
                }}
              >
                <Typography sx={{ fontSize: "25px" }} component="span">
                  Total
                </Typography>
                <Typography
                  sx={{
                    fontSize: "40px",
                    color: "green",
                  }}
                  component="span"
                >
                  <CurrencyRupeeIcon sx={{ fontSize: "35px" }} />
                  {cartTotal()}
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Drawer>
    </div>
  );
};
export default Cart;
