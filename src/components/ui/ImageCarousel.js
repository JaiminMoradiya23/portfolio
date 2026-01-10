"use client";

import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="absolute inset-0">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
              index === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Navigation Arrows - show on card hover */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-background transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
        aria-label="Previous image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-background transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
        aria-label="Next image"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator - show on card hover */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-background/60 backdrop-blur-sm transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => goToSlide(index, e)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-accent w-4" 
                : "bg-foreground/50 hover:bg-foreground/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter - show on card hover */}
      <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/60 backdrop-blur-sm text-xs text-foreground transition-all duration-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
