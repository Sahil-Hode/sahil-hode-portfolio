"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "16px 48px", position: "relative", zIndex: 100, maxWidth: "1400px", margin: "0 auto", width: "100%"
    }}>
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ 
          width: "40px", height: "40px", background: "#D9FF00", borderRadius: "8px",
          display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#000", fontSize: "20px"
        }}>SH</div>
        <div>
          <h1 style={{ fontSize: "16px", fontWeight: 800, margin: 0, letterSpacing: "0.05em" }}>SAHIL HODE</h1>
          <p style={{ fontSize: "10px", color: "#71717a", margin: 0, fontWeight: 600 }}>UI/UX Designer & Developer</p>
        </div>
      </div>

      {/* Nav Links */}
      <div style={{
        display: "flex", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)",
        padding: "6px 24px", borderRadius: "999px", gap: "32px", border: "1px solid rgba(255,255,255,0.05)"
      }}>
        {["Home", "About", "Skills", "Projects", "Experience", "Testimonials", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: "13px", fontWeight: 500, color: item === "Home" ? "#D9FF00" : "#a1a1aa",
            textDecoration: "none", transition: "color 0.3s"
          }}>{item}</a>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button style={{
          background: "#D9FF00", color: "#000", padding: "10px 24px", borderRadius: "999px",
          fontWeight: 700, fontSize: "14px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px"
        }}>
          Let&apos;s Talk
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </button>
        <div style={{ color: "#a1a1aa", cursor: "pointer" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
