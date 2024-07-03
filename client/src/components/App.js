import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import Ranking from './Ranking/Ranking';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;