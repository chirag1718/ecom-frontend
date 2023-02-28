import "./App.css";
// import Routes from "./Routes/Routes";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostProduct from "./components/PostProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={"Hello this is home page 👋🏻"} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/post-product" element={<PostProduct />} />
        </Routes>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
