import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Stack, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const userData = useSelector((state) => state.authUser);
  const userType = userData?.user?.role;
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/add-product");
  };
  switch (userType) {
    case "user":
      return (
        <>
          <AppBar className="bg-stone-800">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Elaichi kitchen
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit">Categories</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </>
      );
    case "admin":
      return (
        <AppBar className="bg-stone-800">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Elaichi kitchen
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button onClick={handleAddProduct} color="inherit" variant="contained" className="bg-green-900">
                Add Product
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      );
    default:
      return (
        <>
          <AppBar className="bg-stone-800">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Elaichi kitchen
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit">Categories</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </>
      );
  }
};

export default Navigation;
