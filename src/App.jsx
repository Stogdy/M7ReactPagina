import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import CookieClicker from './CookieClicker.jsx';
import Pokemon from './Pokemon.jsx';
import Top10 from './assets/Top10.jsx';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', backgroundColor: '#e0e0e0', fontFamily: 'Arial, sans-serif' }}>
        <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/cookieclicker" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>CookieClicker</Link>
        <Link to="/pokemon" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>Pokemon</Link>
        <Link to="/top10" style={{ textDecoration: 'none', color: '#333' }}>Top 10</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cookieclicker" element={<CookieClicker />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/top10" element={<Top10 />} />
      </Routes>
    </Router>
  );
}

export default App;