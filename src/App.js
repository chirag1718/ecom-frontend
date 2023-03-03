import "./App.css";
// import Routes from "./Routes/Routes";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local Components
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AddProduct from "./components/Products/AddProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={"Hello this is home page 👋🏻"} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
        </Routes>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
