"use client";

import React, { useState, useEffect } from "react";
import { usePortfolio } from "@/hooks/usePortfolioCMS";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const { data, loading } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Auto active section highlight based on scroll position
      const sections = NAV_ITEMS.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(NAV_ITEMS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  if (loading || !data) {
    return <div style={{ height: "80px" }} />;
  }

  const { about } = data;

  return (
    <>
      <style jsx global>{`
        .nb-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 200;
          display: flex;
          justify-content: center;
          padding: 20px 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .nb-wrapper.scrolled {
          padding: 12px 24px;
        }
        .nb-bar {
          pointer-events: all;
          width: 100%;
          max-width: 1280px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: rgba(12, 12, 14, 0.75);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          padding: 8px 12px 8px 16px;
          box-shadow: 
            0 20px 50px -10px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }
        .nb-bar.scrolled {
          background: rgba(8, 8, 10, 0.88);
          border-color: rgba(163, 255, 18, 0.25);
          box-shadow: 
            0 20px 60px -10px rgba(0, 0, 0, 0.8),
            0 0 25px rgba(163, 255, 18, 0.12),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.15);
        }

        /* Brand */
        .nb-brand {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          min-width: 0;
        }
        .nb-logo {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: linear-gradient(135deg, #B5FF28 0%, #A3FF12 50%, #76C400 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          color: #050505;
          font-size: 17px;
          box-shadow: 0 0 20px rgba(163, 255, 18, 0.35);
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .nb-brand:hover .nb-logo {
          transform: scale(1.08) rotate(-4deg);
          box-shadow: 0 0 28px rgba(163, 255, 18, 0.55);
        }
        .nb-brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .nb-name {
          font-size: clamp(13px, 1.8vw, 15px);
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          letter-spacing: 0.05em;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nb-subtitle {
          font-size: clamp(9.5px, 1.1vw, 11px);
          color: #8e8e93;
          margin: 0;
          font-weight: 600;
          letter-spacing: 0.02em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 260px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nb-status-dot {
          width: 6px;
          height: 6px;
          background-color: #A3FF12;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #A3FF12;
          animation: nb-pulse 2s infinite;
        }

        @keyframes nb-pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        /* Nav Pills Container */
        .nb-links {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 999px;
          padding: 4px;
          gap: 4px;
          flex-shrink: 1;
          min-width: 0;
        }
        .nb-link {
          font-size: clamp(12px, 1.3vw, 13.5px);
          font-weight: 600;
          color: #a1a1aa;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 999px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          border: 1px solid transparent;
        }
        .nb-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }
        .nb-link.active {
          color: #A3FF12;
          font-weight: 800;
          background: rgba(163, 255, 18, 0.1);
          border-color: rgba(163, 255, 18, 0.25);
          box-shadow: 0 0 16px rgba(163, 255, 18, 0.12);
        }

        /* CTA Button */
        .nb-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .nb-cta {
          background: linear-gradient(135deg, #B5FF28 0%, #A3FF12 100%);
          color: #050505;
          padding: 10px 22px;
          border-radius: 999px;
          font-weight: 800;
          font-size: clamp(12px, 1.3vw, 13.5px);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(163, 255, 18, 0.3);
        }
        .nb-cta svg {
          transition: transform 0.3s ease;
        }
        .nb-cta:hover {
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 6px 28px rgba(163, 255, 18, 0.5);
          background: linear-gradient(135deg, #C2FF47 0%, #B5FF28 100%);
        }
        .nb-cta:hover svg {
          transform: translate(2px, -2px);
        }

        /* Mobile Hamburger */
        .nb-hamburger {
          display: none;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          padding: 0;
          color: #fff;
          cursor: pointer;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .nb-hamburger:hover {
          background: rgba(163, 255, 18, 0.1);
          border-color: rgba(163, 255, 18, 0.3);
          color: #A3FF12;
        }

        /* Mobile Overlay */
        .nb-mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6, 6, 8, 0.96);
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          z-index: 999;
          padding: 80px 24px 40px;
          box-sizing: border-box;
        }
        .nb-mobile-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nb-mobile-close:hover {
          background: rgba(163, 255, 18, 0.15);
          border-color: rgba(163, 255, 18, 0.3);
          color: #A3FF12;
        }
        .nb-mobile-brand {
          position: absolute;
          top: 24px;
          left: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .nb-mobile-link {
          font-size: clamp(24px, 6vw, 32px);
          font-weight: 800;
          color: #e4e4e7;
          text-decoration: none;
          padding: 12px 32px;
          border-radius: 999px;
          width: 100%;
          max-width: 320px;
          text-align: center;
          transition: all 0.25s ease;
          border: 1px solid transparent;
        }
        .nb-mobile-link:hover, .nb-mobile-link.active {
          background: rgba(163, 255, 18, 0.1);
          border-color: rgba(163, 255, 18, 0.25);
          color: #A3FF12;
        }
        .nb-mobile-cta {
          margin-top: 20px;
          background: linear-gradient(135deg, #B5FF28 0%, #A3FF12 100%);
          color: #050505;
          padding: 14px 44px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 16px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 30px rgba(163, 255, 18, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nb-mobile-cta:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 36px rgba(163, 255, 18, 0.55);
        }

        @media (max-width: 900px) {
          .nb-links { display: none; }
          .nb-cta { display: none; }
          .nb-hamburger { display: flex; }
        }
        @media (max-width: 440px) {
          .nb-subtitle { display: none; }
          .nb-logo { width: 36px; height: 36px; min-width: 36px; font-size: 15px; }
          .nb-wrapper { padding: 12px 14px; }
          .nb-wrapper.scrolled { padding: 10px 14px; }
        }
      `}</style>

      <div className={`nb-wrapper${scrolled ? " scrolled" : ""}`}>
        <div className={`nb-bar${scrolled ? " scrolled" : ""}`}>
          <a href="#home" className="nb-brand" onClick={() => setActive("Home")}>
            <div className="nb-logo">{about.name.split(' ').map((n: string) => n[0]).join('')}</div>
            <div className="nb-brand-text">
              <p className="nb-name">{about.name.toUpperCase()}</p>
              <p className="nb-subtitle">
                <span className="nb-status-dot" />
                {about.role}
              </p>
            </div>
          </a>

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

          <div className="nb-actions">
            <a href="#contact" className="nb-cta" onClick={() => setActive("Contact")}>
              Let&apos;s Talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <button className="nb-hamburger" onClick={() => setMenuOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="nb-mobile-overlay">
          <a href="#home" className="nb-mobile-brand" onClick={() => { setActive("Home"); setMenuOpen(false); }}>
            <div className="nb-logo">{about.name.split(' ').map(n => n[0]).join('')}</div>
            <p className="nb-name" style={{ color: "#fff", margin: 0 }}>{about.name.toUpperCase()}</p>
          </a>
          <button className="nb-mobile-close" onClick={() => setMenuOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18" /><path d="M6 6l12 12" />
            </svg>
          </button>
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
          <a href="#contact" className="nb-mobile-cta" onClick={() => { setActive("Contact"); setMenuOpen(false); }}>
            Let&apos;s Talk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      )}

      <div style={{ height: "90px" }} />
    </>
  );
}