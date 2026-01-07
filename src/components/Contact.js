"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, socialLinks } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const dividerRef = useRef(null);
  const headerRef = useRef(null);
  const emailCardRef = useRef(null);
  const socialsRef = useRef(null);

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

      // Header animations (centered)
      const headerElements = headerRef.current.children;
      gsap.fromTo(
        headerElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );

      // Email card - scale in
      gsap.fromTo(
        emailCardRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: emailCardRef.current,
            start: "top 85%",
          },
        }
      );

      // Social buttons stagger
      const socialButtons = socialsRef.current.children;
      gsap.fromTo(
        socialButtons,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        {/* Section Divider */}
        <div
          ref={dividerRef}
          className="divider mb-16 origin-center"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <div ref={headerRef}>
            <div className="flex items-center justify-center gap-3 mb-6 opacity-0">
              <span className="h-px w-12 bg-border" />
              <span className="text-accent text-sm font-medium tracking-wide uppercase">
                Contact
              </span>
              <span className="h-px w-12 bg-border" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 opacity-0">
              Let&apos;s Work Together
            </h2>

            <p className="text-muted text-lg mb-12 max-w-xl mx-auto opacity-0">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          {/* Email CTA */}
          <div ref={emailCardRef} className="mb-12 opacity-0">
            <a
              href={socialLinks.email}
              className="group inline-flex items-center gap-4 glass-card px-8 py-6 hover:border-accent/50"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-muted mb-1">Send me an email</p>
                <p className="text-lg font-medium group-hover:text-accent transition-colors">
                  {personalInfo.email}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div ref={socialsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto opacity-0"
            >
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-border bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-border bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-background transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted mb-0.5">Check out my work</p>
                  <p className="text-base sm:text-lg font-medium group-hover:text-accent transition-colors">GitHub</p>
                </div>
                <svg
                  className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto opacity-0"
            >
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-border bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-border bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-background transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted mb-0.5">Let&apos;s connect</p>
                  <p className="text-base sm:text-lg font-medium group-hover:text-accent transition-colors">LinkedIn</p>
                </div>
                <svg
                  className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
