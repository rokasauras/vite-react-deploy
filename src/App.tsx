import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import './App.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="app-header">
        <div className="header-inner">
          <Link to="/" className="site-title" style={{ textDecoration: 'none', color: 'inherit' }}>
            PORTFOLIO
          </Link>

          {/* Mobile toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          {/* Desktop navigation */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/">HOME</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/blog">BLOG</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div className="main-content"><Projects /></div>} />
        <Route path="/blog" element={<div className="main-content"><Blog /></div>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
