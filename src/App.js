import "./App.css";
// import Routes from "./Routes/Routes";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local Components
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={"Hello this is home page 👋🏻"} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
