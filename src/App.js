import "./App.css";
// React router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Local Components
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AddProduct from "./components/Products/AddProduct";
import Product from "./components/Products/Product";
import Products from "./components/Products/Products";
import Dashboard from "./components/General/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import Navigation from "./components/General/Navigation";

function App() {
  const userData = useSelector((state) => state.authUser);
  // console.log(userData);
  const usertype = userData?.user?.role;

  switch (usertype) {
    case "admin":
      return (
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/admin-dashboard" element={<Dashboard />} />
            <Route
              exact
              path="*"
              element={<Navigate to={"/admin-dashboard"} />}
            />
            <Route exact path="/add-product" element={<AddProduct />} />
          </Routes>
        </Router>
      );
    case "user":
      return (
        <Router>
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={"Hello this is home page 👋🏻"} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </Router>
      );
    default:
      return (
        <Router>
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={"Hello this is home page 👋🏻"} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </Router>
      );
  }
  // return <div className="App"></div>;
}

export default App;
