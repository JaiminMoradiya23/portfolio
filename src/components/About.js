"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutContent } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const dividerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider animation
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Label animation
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Heading - word by word with scrub
      const headingWords = headingRef.current.querySelectorAll(".word");
      gsap.fromTo(
        headingWords,
        { opacity: 0.2, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Paragraphs
      const paragraphs = paragraphsRef.current.querySelectorAll("p");
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: "top 75%",
          },
        }
      );

      // Highlights stagger
      const highlights = highlightsRef.current.querySelectorAll(".highlight-item");
      gsap.fromTo(
        highlights,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper to split text into word spans
  const splitWords = (text) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
        <span className="word inline-block">{word}</span>
      </span>
    ));
  };

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        {/* Section Divider */}
        <div
          ref={dividerRef}
          className="divider mb-16 origin-left"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Label & Heading */}
          <div>
            <div
              ref={labelRef}
              className="flex items-center gap-3 mb-6 opacity-0"
            >
              <span className="text-accent text-sm font-medium tracking-wide uppercase">
                About
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight"
            >
              {splitWords(aboutContent.heading)}
            </h2>
          </div>

          {/* Right Column - Content */}
          <div>
            <div
              ref={paragraphsRef}
              className="space-y-6 text-muted text-lg leading-relaxed"
            >
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="opacity-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div
              ref={highlightsRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
            >
              {aboutContent.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="highlight-item flex items-center gap-3 group opacity-0"
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
