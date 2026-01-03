"use client";

import { useEffect, useRef, useState } from "react";
import { aboutContent } from "@/data/siteData";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        {/* Section Divider */}
        <div className="divider mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Label & Heading */}
          <div>
            <div
              className={`flex items-center gap-3 mb-6 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <span className="text-accent text-sm font-medium tracking-wide uppercase">
                About
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-tight ${
                isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
              }`}
            >
              {aboutContent.heading}
            </h2>
          </div>

          {/* Right Column - Content */}
          <div>
            <div
              className={`space-y-6 text-muted text-lg leading-relaxed ${
                isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
              }`}
            >
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Highlights */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 ${
                isVisible ? "animate-fade-in-up delay-300" : "opacity-0"
              }`}
            >
              {aboutContent.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
