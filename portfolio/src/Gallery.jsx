import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import Block1 from './assets/5.webp';
import Block2 from './assets/2.jpg';
import Block3 from './assets/3.jpg';
import Block4 from './assets/4.jpg';
import Block5 from './assets/ammadi_poster2.jpg';

const Gallery = () => {
  const galleryRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch support for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!containerRef.current) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          containerRef.current.scrollLeft -= 100;
          break;
        case 'ArrowRight':
          containerRef.current.scrollLeft += 100;
          break;
        default:
          return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-scroll effect (optional - can be removed if you only want manual scroll)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (containerRef.current) {
        // Subtle auto-scroll effect while user scrolls vertically
        containerRef.current.scrollLeft = scrollY * 0.5;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="gallery-wrapper"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      tabIndex={0} 
    >
      <h2 className="gallery-title">Through the lens...</h2>

      <div className="gallery" ref={galleryRef}>
        <img src={Block1} alt="Work 1" />
        <img src={Block2} alt="Work 2" />
        <img src={Block3} alt="Work 3" />
        <img src={Block4} alt="Work 4" />
        <img src={Block5} alt="Work 5" />
        <img src={Block1} alt="Work 6" />
        <img src={Block2} alt="Work 7" />
        <img src={Block3} alt="Work 8" />
        <img src={Block4} alt="Work 9" />
        <img src={Block5} alt="Work 10" />
      </div>
      
      <div className="scroll-hint">
        <span className="hint-text">← Drag or use arrow keys →</span>
      </div>
    </section>
  );
};

export default Gallery;