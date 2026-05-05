"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovering, setHovering] = useState(false);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isMobileWidth = window.innerWidth <= 768;
    
    if (isTouchDevice || isMobileWidth) {
      setIsDesktop(false);
      return;
    }
    
    setIsDesktop(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setHovering(!!isInteractive);
    };

    const animate = () => {
      // Smoothing factor (lerp)
      const lerp = 0.2;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerp;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerp;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const show = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };
    const hide = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted || !isDesktop) return null;

  const size = hovering ? 80 : 30;

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: size,
          height: size,
          backgroundColor: "#fff",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "width 0.25s ease-out, height 0.25s ease-out, opacity 0.3s ease",
          zIndex: 9999,
          mixBlendMode: "difference",
          willChange: "transform",
          opacity: 0,
          marginTop: -(size / 2),
          marginLeft: -(size / 2),
        }}
      />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}

