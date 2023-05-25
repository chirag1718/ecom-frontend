import "./App.css";
// React router
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import Navigation from "./components/General/Navigation";

// Local Components

function App() {
  return (
    <div className="m-auto w-full">
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
