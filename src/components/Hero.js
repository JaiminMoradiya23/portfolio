"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, socialLinks } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const socialsRef = useRef(null);
  const badgeRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split name into words
      const nameWords = nameRef.current.querySelectorAll(".word");
      const roleWords = roleRef.current.querySelectorAll(".word");

      // Create main timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Greeting line
      tl.fromTo(
        greetingRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6 }
      );

      // Name words stagger
      tl.fromTo(
        nameWords,
        { opacity: 0, y: 50, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.08,
        },
        "-=0.3"
      );

      // Role words stagger
      tl.fromTo(
        roleWords,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
        },
        "-=0.4"
      );

      // Tagline
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      );

      // Social links
      tl.fromTo(
        socialsRef.current.children,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 },
        "-=0.3"
      );

      // Badge (float in from right)
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.5"
      );

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.2"
      );

      // Parallax on glow elements
      gsap.to(glow1Ref.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(glow2Ref.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Fade out hero content on scroll
      gsap.to(sectionRef.current.querySelector(".hero-content"), {
        opacity: 0.3,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "50% top",
          scrub: 1,
        },
      });
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
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Glow - with parallax */}
      <div
        ref={glow1Ref}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
      />
      <div
        ref={glow2Ref}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container relative z-10 hero-content">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div ref={greetingRef} className="flex items-center gap-3 mb-8 opacity-0">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent text-sm font-medium tracking-wide uppercase">
              Hello!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="space-y-2">
            <span
              ref={nameRef}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium"
              style={{ perspective: "1000px" }}
            >
              {splitWords(`Hi! I'm ${personalInfo.name}`)}
            </span>
            <span
              ref={roleRef}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted font-medium"
            >
              {splitWords(personalInfo.role)}
            </span>
          </h1>

          {/* Description */}
          <p
            ref={taglineRef}
            className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed opacity-0"
          >
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="btn btn-primary opacity-0">
              View Projects
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost opacity-0">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div ref={socialsRef} className="flex items-center gap-5 mt-12">
            <SocialLink href={socialLinks.github} label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </SocialLink>
            <SocialLink href={socialLinks.linkedin} label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink href={socialLinks.email} label="Email">
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
            </SocialLink>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
      >
        <span className="text-xs text-muted uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent to-transparent animate-scroll" />
        </div>
      </div>

      {/* Decorative Badge */}
      <div ref={badgeRef} className="absolute top-1/3 right-12 hidden lg:block opacity-0">
        <div className="glass-card p-4 animate-float">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-muted">{personalInfo.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300 opacity-0"
      aria-label={label}
    >
      {children}
    </a>
  );
}
