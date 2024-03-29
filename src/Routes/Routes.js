// React router
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
// Local Components
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import AddProduct from "../components/Products/AddProduct";
import AddBanner from "../components/General/Banner/AddBanner";
import Product from "../components/Products/Product";
import Products from "../components/Products/Products";
import Dashboard from "../components/General/Dashboard/Dashboard";
import Home from "../components/General/Home";
import EditProduct from "../components/Products/EditProduct";
import EditBanner from "../components/General/Banner/EditBanner";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/actions/index";

function AppRoutes() {
  const userData = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  // console.log(userData);
  const usertype = userData?.user?.role;
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("auth-token");
    // console.log(JSON.parse(user));
    if (user && token) {
      dispatch(setUser({ user: JSON.parse(user), token }));
    }
  }, []);

  switch (usertype) {
    case "admin":
      return (
        <div className="">
          <Routes>
            <Route exact path="/admin-dashboard" element={<Dashboard />} />
            <Route exact path="/add-product" element={<AddProduct />} />
            <Route exact path="/edit-product/:id" element={<EditProduct />} />
            <Route exact path="/add-banner" element={<AddBanner />} />
            <Route exact path="/edit-banner/:id" element={<EditBanner />} />
            <Route
              exact
              path="*"
              element={<Navigate to={"/admin-dashboard"} />}
            />
          </Routes>
        </div>
      );
    case "user":
      return (
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
      );
    default:
      return (
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
      );
  }
}

export default AppRoutes;
