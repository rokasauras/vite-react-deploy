import { useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';


export default function Home() {
  useEffect(() => {
    const overlay = document.querySelector('.image-overlay') as HTMLElement | null;
    if (!overlay) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.015;
      currentY += (targetY - currentY) * 0.015;

      overlay.style.setProperty('--x', `${currentX}px`);
      overlay.style.setProperty('--y', `${currentY}px`);

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

    return (
      <>
        <section className="home-hero">
          <div className="image-overlay" />
          <div className="hero-content">
            <h1>Hi! I’m Rokas</h1>
            <p>Developer & ML Builder with Product Vision</p>
          </div>
        </section>
    
        <section className="tech-carousel">
          <div className="carousel-track">
            <img src="/vite-react-deploy/tech/react.png" alt="React" />
            <img src="/vite-react-deploy/tech/typescript.png" alt="TypeScript" />
            <img src="/vite-react-deploy/tech/nodejs.png" alt="Node.js" />
            <img src="/vite-react-deploy/tech/python.png" alt="Python" />
            <img src="/vite-react-deploy/tech/sql.png" alt="SQL" />
            <img src="/vite-react-deploy/tech/javascript.png" alt="JavaScript" />
            <img src="/vite-react-deploy/tech/react.png" alt="React" />
            <img src="/vite-react-deploy/tech/typescript.png" alt="TypeScript" />
            <img src="/vite-react-deploy/tech/nodejs.png" alt="Node.js" />
            <img src="/vite-react-deploy/tech/python.png" alt="Python" />
            <img src="/vite-react-deploy/tech/sql.png" alt="SQL" />
            <img src="/vite-react-deploy/tech/javascript.png" alt="JavaScript" />
          </div>
        </section>
    
        <section className="after-hero">
          <div className="main-content">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
    
              {/* Project 1 */}
              <div className="project-card">
                <h3>Bee Parsing Login Dashboard</h3>
                <p>
                  Node.js, Express, HTML, CSS — Built a modern login interface for Bee Parsing with animated transitions, social login buttons, and a clean, responsive user experience tailored for data-driven apps.
                  <br />
                  🔗 <a href="https://github.com/rokasauras/BeeParsingLogin" target="_blank" rel="noopener noreferrer">
                    Click here for the GitHub repo
                  </a>
                </p>
                <ImageCarousel images={[
                  "/vite-react-deploy/images/bpdash/1.png",
                  "/vite-react-deploy/images/bpdash/2.png"
                ]} />
              </div>
    
              {/* Project 2 */}
              <div className="project-card">
                <h3>AI Document Scanner</h3>
                <p>
                  Developed a web app for authenticating bank statements, featuring a user-friendly interface that integrates machine learning and AI models for document verification.
                  <br />
                  🔗 <a href="https://github.com/rokasauras/FinCheck" target="_blank" rel="noopener noreferrer">
                    Click here for the GitHub repo
                  </a>
                </p>
                <ImageCarousel images={[
                  "/vite-react-deploy/images/ai-scanner/1.png",
                  "/vite-react-deploy/images/ai-scanner/2.png"
                ]} />
              </div>
    
              {/* Project 3 */}
              <div className="project-card">
                <h3>Blog Start-up</h3>
                <p>
                  Designed and built a multi-page startup website focused on clarity, visual hierarchy, and conversion. Responsible for layout planning, content structure, and delivering a cohesive user experience across screens.
                  <br />
                  🔒 This site has since been shut down.
                </p>
                <ImageCarousel images={[
                  "/vite-react-deploy/images/idea-fy/1.png",
                  "/vite-react-deploy/images/idea-fy/2.png",
                  "/vite-react-deploy/images/idea-fy/3.png"
                ]} />
              </div>
    
              {/* Project 4 */}
              <div className="project-card">
                <h3>Business in London</h3>
                <p>
                  Developed a client-facing skincare clinic site with strong emphasis on frontend structure, service accessibility, and visual storytelling. Applying React-style modular design and backend integration.
                  <br />
                  🌐 <a href="https://foreveryoungbeautyclinic.co.uk/" target="_blank" rel="noopener noreferrer">
                    Visit the live website
                  </a>
                </p>
                <ImageCarousel images={[
                  "/vite-react-deploy/images/fybc/1.png",
                  "/vite-react-deploy/images/fybc/2.png",
                  "/vite-react-deploy/images/fybc/3.png"
                ]} />
              </div>

              {/* See more link */}
              <div style={{ textAlign: "center", marginTop: "2rem", gridColumn: "1 / -1" }}>
                <Link
                  to="/projects"
                  className="see-more-link"
                >
                  See more projects
                </Link>
              </div>
            </div>
          </div>
        </section>
    
        <section style={{ backgroundColor: "transparent", padding: "4rem 1rem", textAlign: "center", color: "#f0f0f0" }}>
          <h2 style={{ marginBottom: "2rem" }}>Coming Soon: Blog Posts</h2>
    
          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "1rem" }}>
            <h3>Modern TypeScript</h3>
            <p>
              My takeaways from <em>Modern TypeScript: A Practical Guide</em> — how it helped me improve my dev workflow, write safer code, and design more scalable frontend logic.
            </p>
            <p style={{ opacity: 0.6, marginTop: "0.5rem" }}>Coming Soon</p>
          </div>
    
          <div style={{ maxWidth: "700px", margin: "3rem auto 0 auto", padding: "1rem" }}>
            <h3>AI vs Bank Statements</h3>
            <p>
              Observations from building FinCheck — thoughts on automating bank statement verification, spotting fraud, and how AI-generated statements could fool even trained eyes.
            </p>
            <p style={{ opacity: 0.6, marginTop: "0.5rem" }}>Coming Soon</p>
          </div>
        </section>
      </>
    );
  }
    