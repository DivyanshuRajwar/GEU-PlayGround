import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CodingPage from './components/CodingPage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        {/* <Route path="coding/*" element={<CodingPage />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
