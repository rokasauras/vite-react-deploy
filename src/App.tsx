import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

export default function App() {
  console.log("App.tsx is definitely rendering!");

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Header (Not Sticky) */}
      <header className="bg-gray-800 shadow mb-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-xl font-bold">Rokas Jelinskas</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline text-blue-400">Home</Link>
            <Link to="/projects" className="hover:underline text-blue-400">Projects</Link>
            <Link to="/blog" className="hover:underline text-blue-400">Blog</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}
