// File: src/App.tsx

import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation */}
      <header className="bg-white shadow sticky top-0 z-50 mb-8">
        <nav className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold">Rokas Jelinskas</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline text-blue-600">Home</Link>
            <Link to="/projects" className="hover:underline text-blue-600">Projects</Link>
            <Link to="/blog" className="hover:underline text-blue-600">Blog</Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} /> {/* fallback route */}
      </Routes>
    </main>
  );
}
