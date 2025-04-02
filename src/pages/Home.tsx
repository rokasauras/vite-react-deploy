import { useEffect } from 'react';

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
          <img src="/vite-react-deploy/tech/react.png" alt="Test" />

          <img src="/vite-react-deploy/tech/typescript.png" alt="TypeScript" />
          <img src="/vite-react-deploy/tech/nodejs.png" alt="Node.js" />
          <img src="/vite-react-deploy/tech/python.png" alt="Python" />
          <img src="/vite-react-deploy/tech/sql.png" alt="SQL" />
          <img src="/vite-react-deploy/tech/javascript.png" alt="JavaScript" />
          {/* Repeat for seamless loop */}
          <img src="/vite-react-deploy/tech/react.png" alt="React" />
          <img src="/vite-react-deploy/tech/typescript.png" alt="TypeScript" />
          <img src="/vite-react-deploy/tech/nodejs.png" alt="Node.js" />
        </div>
      </section>

      <section className="after-hero">
        {/* Background is applied here */}
        <div className="main-content">
          <h2>Scroll Section</h2>
          <p>This content will be for featured Projects and Blogs</p>
        </div>
      </section>
    </>
  );
}
