import ImageCarousel from '../components/ImageCarousel';

export default function Projects() {
  return (
    <section className="projects-section" >
      <h1>PROJECTS</h1>
      <div className="projects-grid">

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

          <div className="project-card">
            <h3>AI Document Scanner</h3>
            <p>
              ​Developed a web app for authenticating bank statements, featuring a user-friendly interface that integrates machine learning and AI models for document verification.
              <br />
              🔗 <a
                href="https://github.com/rokasauras/FinCheck"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here for the GitHub repo
              </a>
            </p>
            <ImageCarousel
              images={[
                "/vite-react-deploy/images/ai-scanner/1.png",
                "/vite-react-deploy/images/ai-scanner/2.png",
              ]}
            />
          </div>

          <div className="project-card">
            <h3>Blog Start-up</h3>
            <p>
              Designed and built a multi-page startup website focused on clarity, visual hierarchy, and conversion. Responsible for layout planning, content structure, and delivering a cohesive user experience across screens.
              <br />
              🔒 This site has since been shut down.
            </p>
            <ImageCarousel
              images={[
                "/vite-react-deploy/images/idea-fy/1.png",
                "/vite-react-deploy/images/idea-fy/2.png",
                "/vite-react-deploy/images/idea-fy/3.png"
              ]}
            />
          </div>

          <div className="project-card">
            <h3>Business in London</h3>
            <p>
              Developed a client-facing skincare clinic site with strong emphasis on frontend structure, service accessibility, and visual storytelling. applying React-style modular design and backend integration.
              <br />
              🌐 <a
                href="https://foreveryoungbeautyclinic.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the live website
              </a>
            </p>
            <ImageCarousel
              images={[
                "/vite-react-deploy/images/fybc/1.png",
                "/vite-react-deploy/images/fybc/2.png",
                "/vite-react-deploy/images/fybc/3.png"
              ]}
            />
          </div>



        <div className="project-card">
          <h3>Bee Parsing Dashboard (In Development)</h3>
          <p>
            A custom analytics dashboard built using React and Vite, focused on modular architecture, clean data presentation, and scalable component structure. Designed to visualise customer insights, automate reporting, and support decision-making in data-driven environments.
          </p>
          <p style={{ marginTop: "1rem" }}>
            🛠️ <em>Showcases proficiency in TypeScript, React, Node.js and UI product design.</em>
          </p>

          <ImageCarousel images={[
            "/vite-react-deploy/images/bp/1.png"
          ]} />
        </div>


        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            Designed and developed a personal portfolio to showcase my work as a full-stack developer and data scientist. Built with React and Vite, the site demonstrates modern UI/UX principles, responsive design, and seamless navigation.
          </p>
          <p style={{ marginTop: "1rem" }}>
            🌐 <a
              href="https://rokasauras.github.io/vite-react-deploy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the live website
            </a>
            &nbsp;|&nbsp;
            🔗 <a
              href="https://github.com/rokasauras/vite-react-deploy"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </p>

          <ImageCarousel images={[
            "/vite-react-deploy/images/port/1.png"
          ]} />
        </div>
      </div>
    </section>
  );
}
