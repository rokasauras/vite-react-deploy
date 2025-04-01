// src/pages/Home.tsx

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const overlay = document.querySelector('.image-overlay') as HTMLElement | null;


    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX + 'px';
      const y = e.clientY + 'px';
      if (overlay) {
        overlay.style.setProperty('--x', x);
        overlay.style.setProperty('--y', y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="home-hero">
      <div className="image-overlay" />
      <div className="hero-content">
        <h1>Hi, I’m Rokas</h1>
        <p>Full-stack developer & data scientist</p>
      </div>
    </section>
  );
}

