import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Animation Presets - Subtle & Professional
// ============================================

export const DURATIONS = {
  fast: 0.4,
  normal: 0.6,
  slow: 0.8,
  xslow: 1.2,
};

export const EASE = {
  smooth: "power2.out",
  smoothInOut: "power2.inOut",
  bounce: "back.out(1.2)",
  elastic: "elastic.out(1, 0.5)",
};

// ============================================
// Fade Up Animation (most common)
// ============================================
export function fadeUp(element, options = {}) {
  const {
    duration = DURATIONS.normal,
    delay = 0,
    y = 40,
    ease = EASE.smooth,
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, delay, ease }
  );
}

// ============================================
// Stagger Fade Up (for lists/grids)
// ============================================
export function staggerFadeUp(elements, options = {}) {
  const {
    duration = DURATIONS.normal,
    stagger = 0.1,
    y = 40,
    ease = EASE.smooth,
    delay = 0,
  } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, stagger, ease, delay }
  );
}

// ============================================
// Scroll-Triggered Fade Up
// ============================================
export function scrollFadeUp(element, options = {}) {
  const {
    duration = DURATIONS.normal,
    y = 50,
    ease = EASE.smooth,
    start = "top 85%",
    toggleActions = "play none none none",
    scrub = false,
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions,
        scrub: scrub ? 1 : false,
      },
    }
  );
}

// ============================================
// Scroll-Triggered Stagger
// ============================================
export function scrollStagger(elements, trigger, options = {}) {
  const {
    duration = DURATIONS.normal,
    stagger = 0.08,
    y = 40,
    ease = EASE.smooth,
    start = "top 80%",
    scrub = false,
  } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger,
        start,
        scrub: scrub ? 1 : false,
      },
    }
  );
}

// ============================================
// Parallax Effect
// ============================================
export function parallax(element, options = {}) {
  const {
    y = 100,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
  } = options;

  return gsap.fromTo(
    element,
    { y: -y / 2 },
    {
      y: y / 2,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: scrub === true ? 1 : scrub,
      },
    }
  );
}

// ============================================
// Word Split Animation
// ============================================
export function splitTextIntoWords(element) {
  if (!element) return [];
  
  const text = element.textContent;
  const words = text.split(" ");
  
  element.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden"><span class="inline-block word-animate">${word}</span></span>`
    )
    .join(" ");
  
  return element.querySelectorAll(".word-animate");
}

export function animateWords(element, options = {}) {
  const {
    duration = DURATIONS.slow,
    stagger = 0.05,
    y = 50,
    ease = EASE.smooth,
    delay = 0,
  } = options;

  const words = splitTextIntoWords(element);

  return gsap.fromTo(
    words,
    { y, opacity: 0 },
    { y: 0, opacity: 1, duration, stagger, ease, delay }
  );
}

// ============================================
// Reveal Animation (with clip-path)
// ============================================
export function reveal(element, options = {}) {
  const {
    duration = DURATIONS.slow,
    delay = 0,
    ease = EASE.smoothInOut,
    direction = "up", // up, down, left, right
  } = options;

  const clipPaths = {
    up: {
      from: "inset(100% 0 0 0)",
      to: "inset(0 0 0 0)",
    },
    down: {
      from: "inset(0 0 100% 0)",
      to: "inset(0 0 0 0)",
    },
    left: {
      from: "inset(0 100% 0 0)",
      to: "inset(0 0 0 0)",
    },
    right: {
      from: "inset(0 0 0 100%)",
      to: "inset(0 0 0 0)",
    },
  };

  return gsap.fromTo(
    element,
    { clipPath: clipPaths[direction].from },
    { clipPath: clipPaths[direction].to, duration, delay, ease }
  );
}

// ============================================
// Scale In Animation
// ============================================
export function scaleIn(element, options = {}) {
  const {
    duration = DURATIONS.normal,
    delay = 0,
    scale = 0.95,
    ease = EASE.smooth,
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, scale },
    { opacity: 1, scale: 1, duration, delay, ease }
  );
}

// ============================================
// Create Timeline Helper
// ============================================
export function createTimeline(options = {}) {
  return gsap.timeline(options);
}

// ============================================
// Kill All ScrollTriggers (cleanup)
// ============================================
export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

