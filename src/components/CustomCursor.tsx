"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Only enable on desktop with mouse
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isMobileWidth = window.innerWidth <= 768;
    
    if (isTouchDevice || isMobileWidth) {
      setIsDesktop(false);
      return;
    }
    
    setIsDesktop(true);

    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const hover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setHovering(!!isInteractive);
    };

    const show = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };
    const hide = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  // Don't render on server or on mobile
  if (!mounted || !isDesktop) return null;

  const size = hovering ? 100 : 50;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: -(size / 2),
        left: -(size / 2),
        width: size,
        height: size,
        backgroundColor: "#fff",
        borderRadius: "50%",
        pointerEvents: "none",
        transition: "width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease",
        zIndex: 9999,
        mixBlendMode: "difference",
        willChange: "transform",
        opacity: 0,
      }}
    />
  );
}
