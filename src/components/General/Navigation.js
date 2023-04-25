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

  const handleBanner = () => {
    navigate("/add-banner");
  };
  const handleBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  const handleLogOut = () => {
    const user = localStorage.removeItem("user");
    const token = localStorage.removeItem("auth-token");
    dispatch(logOut({ user, token }));
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  switch (userType) {
    case "user":
      return (
        <>
          <AppBar className="bg-stone-800">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={() => navigate("/")}
                className="cursor-pointer"
              >
                Elaichi kitchen
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit">Categories</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                <Button
                  color="inherit"
                  variant="text"
                  className="flex justify-evenly"
                  onClick={handleLogOut}
                >
                  Log out
                </Button>
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
                  onClick={handleBanner}
                  color="secondary"
                  variant="contained"
                  className="cursor-pointer"
                >
                  Add Banner
                </Button>
              )}
              {!window.location.pathname.includes("add-product") && (
                <Button
                  onClick={handleAddProduct}
                  color="inherit"
                  variant="contained"
                  className="bg-green-900 "
                >
                  Add Product
                </Button>
              )}
              {!window.location.pathname.includes("add-product") && (
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleLogOut}
                  className=""
                >
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
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={() => navigate("/")}
                className="cursor-pointer"
              >
                Elaichi kitchen
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button color="inherit">Categories</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit" variant="text" onClick={handleLogIn}>
                  Log In
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </>
      );
  }
};

export default Navigation;
