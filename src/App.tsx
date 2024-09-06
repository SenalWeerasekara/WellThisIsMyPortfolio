import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home";
import PortfolioDisplay from "./pages/portfolioDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
