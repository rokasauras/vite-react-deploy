export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold">Rokas Jelinskas</h1>
          <div className="space-x-4">
            <a href="#home" className="hover:underline text-blue-600">Home</a>
            <a href="#projects" className="hover:underline text-blue-600">Projects</a>
            <a href="#blog" className="hover:underline text-blue-600">Blog</a>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome</h2>
        <p className="text-lg max-w-xl mx-auto">
          I'm Rokas, a full-stack developer and data scientist. Scroll down to see my projects and ideas!
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          A collection of my full-stack, AI, and automation projects.
        </p>
        {/* Project cards will go here */}
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          Articles, insights, and tutorials I've written while learning and building.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          Reach out to collaborate or say hi — rokas@example.com
        </p>
      </section>
    </main>
  );
}
