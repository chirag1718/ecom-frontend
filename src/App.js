import "./App.css";
// import Routes from "./Routes/Routes";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local Components
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AddProduct from "./components/Products/AddProduct";
import ProductPage from "./components/Products/ProductPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home */}
          <Route exact path="/" element={"Hello this is home page 👋🏻"} />

          {/* Login */}
          <Route exact path="/login" element={<Login />} />

          {/* SignUp */}
          <Route exact path="/signup" element={<Signup />} />

          {/* Products */}
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/productPage" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
