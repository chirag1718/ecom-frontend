import { Badge, Box, Drawer, IconButton } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import React, { useEffect, useState } from "react";
import EcomAPI from "../../apis/EcomAPI";

const Cart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const user = localStorage.getItem("user");
  const userId = JSON.parse(user);
  console.log(userId._id, "userId cart component");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EcomAPI.post("/cart/get-all-items", {
          userId: userId._id,
        });
        setSelectedItems(response.data);
        console.log(response.data, "This is cart items");
      } catch (err) {
        console.log(err, "Error: This is Cart component Error");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <IconButton
        size="small"
        edge="start"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Badge badgeContent={selectedItems.length} color="secondary">
          <LocalMallOutlinedIcon htmlColor="#fff" />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        addtocart={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="400px" textAlign="center" role="presentation">
          <p>Side Panel</p>
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
