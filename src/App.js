import "./App.css";
// React router
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import Navigation from "./components/General/Navigation";

// Local Components

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
