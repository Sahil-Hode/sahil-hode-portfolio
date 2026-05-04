"use client";

import React, { useState, useEffect } from "react";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* ── Wrapper ── */
        .nb-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          display: flex;
          justify-content: center;
          padding: 16px 20px;
          transition: padding 0.3s ease;
          pointer-events: none;
        }
        .nb-wrapper.scrolled {
          padding: 10px 20px;
        }

        /* ── Inner bar ── */
        .nb-bar {
          pointer-events: all;
          width: 100%;
          max-width: 1400px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 10px 16px;
          transition: box-shadow 0.3s ease, padding 0.3s ease;
          box-sizing: border-box;
        }
        .nb-bar.scrolled {
          box-shadow: 0 8px 40px rgba(0,0,0,0.5);
        }

        /* ── Brand ── */
        .nb-brand {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          min-width: 0;
        }
        .nb-logo {
          width: 42px; height: 42px;
          min-width: 42px;
          background: #A3FF12;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; color: #000; font-size: 18px;
          box-shadow: 0 0 18px rgba(163,255,18,0.25);
          flex-shrink: 0;
        }
        .nb-brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .nb-name {
          font-size: clamp(13px, 2vw, 16px);
          font-weight: 900;
          color: #fff;
          margin: 0;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .nb-subtitle {
          font-size: clamp(9px, 1.2vw, 11px);
          color: #71717a;
          margin: 0;
          font-weight: 600;
          letter-spacing: 0.03em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 260px;
        }

        /* ── Desktop nav pill ── */
        .nb-links {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          padding: 8px 20px;
          gap: clamp(12px, 2vw, 28px);
          flex-shrink: 1;
          min-width: 0;
          overflow: hidden;
        }
        .nb-link {
          font-size: clamp(12px, 1.4vw, 14px);
          font-weight: 500;
          color: #a1a1aa;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
          white-space: nowrap;
          padding-bottom: 2px;
        }
        .nb-link:hover { color: #fff; }
        .nb-link.active {
          color: #A3FF12;
          font-weight: 700;
        }
        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: -6px; left: 50%;
          transform: translateX(-50%);
          width: 14px; height: 2.5px;
          background: #A3FF12;
          border-radius: 2px;
        }

        /* ── Actions ── */
        .nb-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .nb-cta {
          background: #A3FF12;
          color: #000;
          padding: 10px 20px;
          border-radius: 999px;
          font-weight: 800;
          font-size: clamp(11px, 1.3vw, 13px);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }
        .nb-cta:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(163,255,18,0.3);
        }


        /* ── Hamburger ── */
        .nb-hamburger {
          display: none;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 0;
          color: #fff;
          cursor: pointer;
          width: 40px; height: 40px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.2s;
        }
        .nb-hamburger:hover {
          border-color: rgba(163,255,18,0.4);
        }

        /* ── Mobile overlay ── */
        .nb-mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6,6,6,0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          z-index: 999;
          padding: 80px 24px 40px;
          box-sizing: border-box;
        }
        .nb-mobile-close {
          position: absolute;
          top: 20px; right: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer;
          transition: border-color 0.2s;
        }
        .nb-mobile-close:hover {
          border-color: rgba(163,255,18,0.4);
        }
        .nb-mobile-brand {
          position: absolute;
          top: 20px; left: 20px;
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
        }
        .nb-mobile-link {
          font-size: clamp(26px, 7vw, 36px);
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          padding: 12px 32px;
          border-radius: 14px;
          width: 100%; max-width: 320px;
          text-align: center;
          transition: background 0.2s, color 0.2s;
          border: 1px solid transparent;
        }
        .nb-mobile-link:hover,
        .nb-mobile-link.active {
          background: rgba(163,255,18,0.07);
          border-color: rgba(163,255,18,0.15);
          color: #A3FF12;
        }
        .nb-mobile-cta {
          margin-top: 16px;
          background: #A3FF12;
          color: #000;
          padding: 14px 40px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 16px;
          text-decoration: none;
          display: flex; align-items: center; gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nb-mobile-cta:hover {
          transform: scale(1.03);
          box-shadow: 0 0 28px rgba(163,255,18,0.35);
        }

        /* ── Breakpoints ── */

        /* Hide desktop links + show hamburger below 860px */
        @media (max-width: 860px) {
          .nb-links { display: none; }
          .nb-cta { display: none; }
          .nb-hamburger { display: flex; }
        }

        /* On very small screens shrink brand subtitle */
        @media (max-width: 400px) {
          .nb-subtitle { display: none; }
          .nb-logo { width: 36px; height: 36px; min-width: 36px; font-size: 15px; }
        }
      `}</style>

      {/* Fixed wrapper */}
      <div className={`nb-wrapper${scrolled ? " scrolled" : ""}`}>
        <div className={`nb-bar${scrolled ? " scrolled" : ""}`}>

          {/* Brand */}
          <a href="#home" className="nb-brand" onClick={() => setActive("Home")}>
            <div className="nb-logo">SH</div>
            <div className="nb-brand-text">
              <p className="nb-name">SAHIL HODE</p>
              <p className="nb-subtitle">SDE & Full Stack Developer, Agentic AI Developer</p>
            </div>
          </a>

          {/* Desktop nav pill */}
          <nav className="nb-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nb-link${active === item ? " active" : ""}`}
                onClick={() => setActive(item)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="nb-actions">
            <a href="#contact" className="nb-cta" onClick={() => setActive("Contact")}>
              Let&apos;s Talk
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            {/* Hamburger (mobile) */}
            <button
              className="nb-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="nb-mobile-overlay">
          {/* Brand in overlay */}
          <a href="#home" className="nb-mobile-brand" onClick={() => { setActive("Home"); setMenuOpen(false); }}>
            <div className="nb-logo">SH</div>
            <p className="nb-name" style={{ color: "#fff", margin: 0 }}>SAHIL HODE</p>
          </a>

          {/* Close */}
          <button className="nb-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18" /><path d="M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nb-mobile-link${active === item ? " active" : ""}`}
              onClick={() => { setActive(item); setMenuOpen(false); }}
            >
              {item}
            </a>
          ))}

          {/* CTA */}
          <a href="#contact" className="nb-mobile-cta" onClick={() => { setActive("Contact"); setMenuOpen(false); }}>
            Let&apos;s Talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      )}

      {/* Spacer so content doesn't hide under fixed bar */}
      <div style={{ height: "80px" }} />
    </>
  );
}