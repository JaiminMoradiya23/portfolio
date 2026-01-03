"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/siteData";

const skillCategories = [
  { key: "frontend", label: "Frontend", icon: "code" },
  { key: "tools", label: "Tools & Platforms", icon: "tools" },
  { key: "other", label: "Other Skills", icon: "star" },
];

const icons = {
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  ),
  tools: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
  ),
  star: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  ),
};

export default function Skills() {
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
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div
            className={`flex items-center gap-3 mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="text-accent text-sm font-medium tracking-wide uppercase">
              Skills
            </span>
            <span className="flex-1 h-px bg-border max-w-24" />
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-medium ${
              isVisible ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            Technologies I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.key}
              className={`glass-card p-8 ${
                isVisible
                  ? `animate-fade-in-up delay-${(catIndex + 2) * 100}`
                  : "opacity-0"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icons[category.icon]}
                  </svg>
                </div>
                <h3 className="text-lg font-medium">{category.label}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {skills[category.key].map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    <span className="group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
