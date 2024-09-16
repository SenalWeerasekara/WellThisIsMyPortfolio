import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home";
import PortfolioDisplay from "./pages/portfolioDisplay";
import YoutubeDisplay from "./pages/youtubeDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioDisplay />} />
        <Route path="/youtube" element={<YoutubeDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;