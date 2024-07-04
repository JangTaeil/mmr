import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import Ranking from './Ranking/Ranking';

function App() {
  return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <NavBar />
              <div style={{ minHeight: '100vh' }}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/champranking" element={<Ranking />} />
                  </Routes>
               </div>
            <Footer />
        </div>
        </Router>
  );
}

export default App;