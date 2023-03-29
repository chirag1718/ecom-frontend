import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Stack, Toolbar, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/actions/index";

const Navigation = () => {
  const userData = useSelector((state) => state.authUser);
  const userType = userData?.user?.role;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  const handleBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  const handleLogin = () => {
    const user = localStorage.removeItem("user");
    const token = localStorage.removeItem("auth-token");
    dispatch(logOut({ user, token }));
  };

  switch (userType) {
    case "user":
      return (
        <>
          <AppBar className="bg-stone-800">
            <Toolbar>
              <Typography variant="h6" component="div">
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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={handleBackToDashboard}
              className="cursor-pointer"
            >
              Elaichi kitchen
            </Typography>
            <Stack direction="row" spacing={2}>
              {!window.location.pathname.includes("add-product") && (
                <Button
                  onClick={handleAddProduct}
                  color="inherit"
                  variant="contained"
                  className="bg-green-900"
                >
                  Add Product
                </Button>
              )}
              {!window.location.pathname.includes("add-product") && (
                <Button onClick={handleLogin} color="error" variant="contained">
                  Log Out
                </Button>
              )}
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
