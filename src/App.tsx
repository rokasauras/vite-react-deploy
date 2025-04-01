import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import './App.css';

export default function App() {
  return (
    <>
      <header className="app-header">
        <div className="header-inner">
          <h1 className="site-title">Portfolio</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
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
