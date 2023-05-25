import React, { useState } from "react";
import { MenuItem, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/actions/index";
import Cart from "./Cart";
import wishlist from "../../Images/wishList.svg";
import SelectOptions from "../Products/SelectOptions";

const Navigation = () => {
  const userData = useSelector((state) => state.authUser);
  const [open, setOpen] = useState(false);
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
          <div
            className="h-[70px] w-full bg-neutral-50 flex items-center justify-between m-auto border-b-[1px] "
            onMouseLeave={() => setOpen(false)}
          >
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
                  onMouseOver={() => setOpen(true)}
                >
                  Categories
                </Typography>
                <Stack
                  className={`absolute right-[165px] top-12 bg-neutral-50 z-10 w-[170px] py-2 mt-6 ${
                    open ? "block" : "hidden"
                  }`}
                >
                  {SelectOptions.map((categories) => (
                    <MenuItem key={categories.value} value={categories.label}>
                      {categories.label}
                    </MenuItem>
                  ))}
                </Stack>
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
      );
    default:
      return (
        <>
          <div className="h-[80px] w-[1440px] bg-neutral-50 flex items-center justify-between m-auto border-b-[1px]">
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
        </>
      );
  }
};

export default Navigation;
