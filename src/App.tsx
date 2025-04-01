
export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <section className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Rokas Jelinskas</h1>
        <p className="text-lg text-gray-700 mb-6">
          Full-Stack Developer | Data Scientist | ML & AI Enthusiast
        </p>
        <nav className="flex justify-center space-x-4">
          <a href="#projects" className="text-blue-500 hover:underline">Projects</a>
          <a href="#about" className="text-blue-500 hover:underline">About</a>
          <a href="#contact" className="text-blue-500 hover:underline">Contact</a>
        </nav>
      </section>
    </main>
  );
}
