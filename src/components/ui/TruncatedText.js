"use client";

import { useState, useRef, useEffect } from "react";

export default function TruncatedText({ text, lines = 2, className = "" }) {
  const [isTruncated, setIsTruncated] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const textRef = useRef(null);
  const tooltipRef = useRef(null);

  // Check if text is truncated
  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [text]);

  const lineClampClass = {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
  }[lines] || "line-clamp-2";

  return (
    <div
      className="relative"
      onMouseEnter={() => isTruncated && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Truncated Text */}
      <p
        ref={textRef}
        className={`${lineClampClass} ${className} ${isTruncated ? "cursor-help" : ""}`}
      >
        {text}
      </p>

      {/* Tooltip */}
      {isTruncated && (
        <div
          ref={tooltipRef}
          className={`absolute left-0 right-0 bottom-full mb-3 z-50 pointer-events-none transition-all duration-300 ${showTooltip
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
            }`}
        >
          <div className="relative bg-background border border-border rounded-xl p-4 shadow-2xl shadow-black/30">
            {/* Full text */}
            <p className="text-sm text-foreground leading-relaxed">
              {text}
            </p>

            {/* Arrow pointing down */}
            <div className="absolute left-6 bottom-0 translate-y-1/2 w-3 h-3 bg-background border-r border-b border-border rotate-45" />
          </div>
        </div>
      )}
    </div>
  );
}
