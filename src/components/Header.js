"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { navLinks, personalInfo } from "@/data/siteData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const ctaRef = useRef(null);

  // Initial animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      tl.fromTo(
        navItemsRef.current.filter(Boolean),
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-xl" 
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <a
              ref={logoRef}
              href="#"
              onClick={closeMobileMenu}
              className="relative z-10 flex items-center gap-1.5 sm:gap-2 opacity-0 group"
            >
              {/* Code-style branding */}
              <span className="text-muted text-lg sm:text-xl font-light">&lt;</span>
              <span className="text-base sm:text-lg font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                {personalInfo.name}
              </span>
              <span className="text-accent text-lg sm:text-xl font-light">/</span>
              <span className="text-muted text-lg sm:text-xl font-light">&gt;</span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.slice(1).map((link, index) => (
                <li
                  key={link.href}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  className="opacity-0"
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* CTA - Redesigned */}
              <a
                ref={ctaRef}
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors duration-300 opacity-0"
              >
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                  />
                </svg>
                Let&apos;s Talk
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-card border border-border"
                aria-label="Toggle menu"
              >
                <div className="w-4 sm:w-5 flex flex-col gap-1 sm:gap-1.5">
                  <span
                    className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0 scale-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container h-full flex flex-col justify-center px-6">
          <nav className="space-y-1 sm:space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block text-3xl sm:text-4xl md:text-5xl font-medium text-muted hover:text-foreground hover:translate-x-2 transition-all duration-300 py-2 sm:py-3 ${
                  isMobileMenuOpen 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div
            className={`mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border transition-all duration-500 ${
              isMobileMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50 + 100}ms` : "0ms",
            }}
          >
            <p className="text-xs sm:text-sm text-muted mb-3 sm:mb-4">Ready to collaborate?</p>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="inline-flex items-center gap-3 text-xl sm:text-2xl font-medium text-foreground hover:text-accent transition-colors group"
            >
              Let&apos;s Talk
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-background" 
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
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
