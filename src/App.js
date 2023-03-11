import "./App.css";
// import Routes from "./Routes/Routes";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local Components
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AddProduct from "./components/Products/AddProduct";
import Product from "./components/Products/Product";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home */}
          <Route index element={"Hello this is home page 👋🏻"} />

          {/* User Login */}
          <Route exact path="/login" element={<Login />} />

          {/* User SignUp */}
          <Route exact path="/signup" element={<Signup />} />

          {/* Products */}
          {/* Add a product 👇🏻 */}
          <Route exact path="/add-product" element={<AddProduct />} />
          {/* Get a single product 👇🏻 */}
          <Route exact path="/product/:id" element={<Product />} />
          {/* Get all products 👇🏻 */}
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
