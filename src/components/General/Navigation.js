import React from "react";
import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/actions/index";
import Cart from "./Cart";
import wishlist from "../../Images/wishList.svg";

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
  const handleBackToDashboard = (e) => {
    e.stopPropagation();
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

  const handleNavigateToHome = (e) => {
    e.stopPropagation();
    navigate("/");
  };
  switch (userType) {
    case "user":
      return (
        <>
          {/* Add sticky top-0 z-10 for sticky banner */}
          <div className="h-[80px] w-[1440px] bg-neutral-50 flex items-center justify-between m-auto border-b-[1px] ">
            <div className=" left-5">
              <span
                className="font-logo font-normal text-logo ml-5 mt-5 cursor-pointer transition-all ease-linear"
                onClick={handleNavigateToHome}
              >
                Elaichi Kitchen
              </span>
            </div>
            <div>
              <Stack
                direction="row"
                spacing={3}
                className="font-poppins flex items-center mr-5 "
              >
                <Typography
                  variant="inherit"
                  component="span"
                  className="text-custom cursor-pointer"
                >
                  Categories
                </Typography>
                <div className="flex gap-3 cursor-pointer">
                  <img src={wishlist} alt="" />
                  <Cart />
                </div>
                <Typography
                  variant="inherit"
                  component="span"
                  className="text-custom p-1 hover:text-rose-600 border-b-[1px] border-neutral-50 hover:border-b-[1px] hover:border-rose-600 transition-all ease-linear cursor-pointer"
                  onClick={handleLogOut}
                >
                  Logout
                </Typography>
              </Stack>
            </div>
          </div>
          {/* <AppBar className="bg-stone-800 flex p-1" >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                className="cursor-pointer"
                onClick={handleNavigateToHome}
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
                <Cart />
              </Stack>
            </Toolbar>
          </AppBar> */}
        </>
      );
    case "admin":
      return (
        <div className="h-[80px] w-[1440px] bg-neutral-50 flex items-center justify-between m-auto border-b-[1px] ">
          <div className=" left-5">
            <span
              className="text-neutral-500 font-logo font-normal text-logo ml-5 mt-5 cursor-pointer transition-all ease-linear hover:text-black"
              onClick={handleBackToDashboard}
            >
              Elaichi Kitchen
            </span>
          </div>
          <div>
            <Stack
              direction="row"
              spacing={3}
              className="font-poppins flex items-center mr-5 cursor-pointer"
            >
              {!window.location.pathname.includes("add-banner") &&
                !window.location.pathname.includes("add-product") && (
                  <Typography
                    variant="inherit"
                    component="span"
                    onClick={handleBanner}
                    className="text-custom p-1 hover:text-green-500 border-b-[1px] border-neutral-50 hover:border-b-[1px] hover:border-green-500 transition-all ease-linear"
                  >
                    Add Banner
                  </Typography>
                )}
              {!window.location.pathname.includes("add-product") &&
                !window.location.pathname.includes("add-banner") && (
                  <Typography
                    variant="inherit"
                    component="span"
                    className="text-custom p-1 hover:text-green-600 border-b-[1px] border-neutral-50 hover:border-b-[1px] hover:border-green-600 transition-all ease-linear"
                    onClick={handleAddProduct}
                  >
                    Add Product
                  </Typography>
                )}
              {!window.location.pathname.includes("add-product") &&
                !window.location.pathname.includes("add-banner") && (
                  <Typography
                    variant="inherit"
                    component="span"
                    className="text-custom p-1 hover:text-rose-600 border-b-[1px] border-neutral-50 hover:border-b-[1px] hover:border-red-600 transition-all ease-linear"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Typography>
                )}
            </Stack>
          </div>
        </div>
        // <AppBar className="bg-stone-800">
        //   <Toolbar>
        //     <Typography
        //       variant="h6"
        //       component="div"
        //       sx={{ flexGrow: 1 }}
        //       onClick={handleBackToDashboard}
        //       className="cursor-pointer"
        //     >
        //       Elaichi kitchen
        //     </Typography>
        //     <Stack direction="row" spacing={2}>
        //       {!window.location.pathname.includes("add-product") && (
        //         <Button
        //           onClick={handleBanner}
        //           color="secondary"
        //           variant="contained"
        //           className="cursor-pointer"
        //         >
        //           Add Banner
        //         </Button>
        //       )}
        //       {!window.location.pathname.includes("add-product") && (
        //         <Button
        //           onClick={handleAddProduct}
        //           color="inherit"
        //           variant="contained"
        //           className="bg-green-900 "
        //         >
        //           Add Product
        //         </Button>
        //       )}
        //       {!window.location.pathname.includes("add-product") && (
        //         <Button
        //           color="error"
        //           variant="contained"
        //           onClick={handleLogOut}
        //           className=""
        //         >
        //           Log Out
        //         </Button>
        //       )}
        //     </Stack>
        //   </Toolbar>
        // </AppBar>
      );
    default:
      return (
        <>
          <div className="h-[80px] w-[1440px] bg-neutral-50 flex items-center justify-between m-auto border-b-[1px] ">
            <div className=" left-5">
              <span
                className="font-logo font-normal text-logo ml-5 mt-5 cursor-pointer transition-all ease-linear"
                onClick={handleNavigateToHome}
              >
                Elaichi Kitchen
              </span>
            </div>
            <div>
              <Stack
                direction="row"
                spacing={3}
                className="font-poppins flex items-center mr-5 "
              >
                {!window.location.pathname.includes("login") &&
                  !window.location.pathname.includes("signup") && (
                    <Typography
                      variant="inherit"
                      component="span"
                      className="text-custom"
                    >
                      Categories
                    </Typography>
                  )}

                <Typography
                  variant="inherit"
                  component="span"
                  className="text-custom cursor-pointer"
                  onClick={handleLogIn}
                >
                  Login / Sign Up
                </Typography>
              </Stack>
            </div>
          </div>
          {/* <AppBar className="bg-stone-800">
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
          </AppBar> */}
        </>
      );
  }
};

export default Navigation;
