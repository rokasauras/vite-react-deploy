// src/components/ImageCarousel.tsx
import { useState } from 'react';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images: string[];
  alt?: string;
}

export default function ImageCarousel({ images, alt = "Project screenshot" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="carousel">
      <img src={images[index]} alt={alt} className="carousel-image" />
      <div className="carousel-controls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
}
