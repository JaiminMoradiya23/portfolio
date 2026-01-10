// ============================================
// Site Data - Update this file to customize your portfolio
// ============================================

export const personalInfo = {
  name: "Jaimin",
  role: "Frontend Developer",
  tagline:
    "I craft fast, scalable, and immersive digital experiences that merge creativity with engineering precision.",
  email: "jaiminmoradiya23@gmail.com",
  location: "India",
  availability: "Available for freelance",
};

export const socialLinks = {
  github: "https://github.com/JaiminMoradiya23",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "mailto:jaiminmoradiya23@gmail.com",
};

export const aboutContent = {
  heading: "Driving measurable growth through thoughtful design and engineering.",
  paragraphs: [
    "I'm a frontend developer passionate about crafting clean, accessible, and high-performance web experiences. Every product I build starts with understanding user goals and translating them into intuitive interfaces.",
    "From concept to launch, I focus on meaningful results—boosting user engagement, retention, and overall business impact. I specialize in React, Next.js, and modern CSS to build digital products that are fast, responsive, and visually polished.",
  ],
  highlights: [
    "Performance Optimization",
    "Clean Architecture",
    "Modern UI/UX",
    "Responsive Design",
  ],
};

export const skills = {
  frontend: [
    "JavaScript (ES6+)",
    "React & Next.js",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "TypeScript",
    "Responsive Design",
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Figma",
    "Chrome DevTools",
    "Vercel",
    "npm / yarn",
  ],
  other: [
    "REST APIs",
    "Performance Optimization",
    "SEO Best Practices",
    "Accessibility (a11y)",
  ],
};

// image: array of image paths (shows carousel if more than 1 image)
export const projects = [
  {
    id: 1,
    title: "InsightBoard Interactive Dashboard",
    description:
      "Visualize your business statistics though an interactive dashboard.",
    tech: ["Next.js", "Tailwind CSS", "Chart.js", "REST API"],
    image: ["/projects/insightBoard/insightBoard.png"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/JaiminMoradiya23/Insight-board-dashboard",
    featured: true,
  },
  {
    id: 2,
    title: "Authenticated login/Registration Portal",
    description:
      "Created a login/registration portal with authentication using firebase. Implemented other ways to login/register such as google. Also implemented protected routing for secure and seamless user experience.",
    tech: ["Next.js", "React","Firebase", "User Authentication", "Tailwind CSS"],
    image: ["/projects/authLoginAndRegistration/authLoginAndRegistration-1.png", "/projects/authLoginAndRegistration/authLoginAndRegistration-2.png"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 3,
    title: "Dynamic Stepper Form",
    description:
      "A multi step form with validation and with creative & professional design.",
    tech: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Tailwind UI"],
    image: ["/projects/dynamicStepperForm/dynamicStepperForm-1.png", "/projects/dynamicStepperForm/dynamicStepperForm-2.png", "/projects/dynamicStepperForm/dynamicStepperForm-3.png", "/projects/dynamicStepperForm/dynamicStepperForm-4.png"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A minimalist developer portfolio built with Next.js, featuring smooth scrolling and dark mode.",
    tech: ["Next.js", "Tailwind CSS"],
    image: ["/projects/project-4.jpg"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
