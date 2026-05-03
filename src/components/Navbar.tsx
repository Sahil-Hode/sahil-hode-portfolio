"use client";

import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 32px", position: "relative", zIndex: 100, maxWidth: "1400px", margin: "0 auto", width: "100%"
    }}>
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ 
          width: "48px", height: "48px", background: "#D9FF00", borderRadius: "10px",
          display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#000", fontSize: "22px",
          boxShadow: "0 0 20px rgba(217,255,0,0.2)"
        }}>SH</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "18px", fontWeight: 900, margin: 0, letterSpacing: "0.02em", color: "#fff" }}>SAHIL HODE</h1>
          <p style={{ fontSize: "11px", color: "#71717a", margin: 0, fontWeight: 600, letterSpacing: "0.05em" }}>UI/UX Designer & Developer</p>
        </div>
      </div>

      {/* Nav Links Pill */}
      <div style={{
        display: "flex", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)",
        padding: "10px 36px", borderRadius: "999px", gap: "34px", border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)"
      }}>
        {["Home", "About", "Skills", "Projects", "Experience", "Testimonials", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: "20px", fontWeight: 400, color: item === "Home" ? "#D9FF00" : "#a1a1aa",
            textDecoration: "none", transition: "all 0.3s ease", position: "relative",
            display: "flex", flexDirection: "column", alignItems: "center"
          }} className="nav-link">
            {item}
            {item === "Home" && (
              <span style={{ 
                position: "absolute", bottom: "-8px", width: "14px", height: "2.5px", 
                background: "#D9FF00", borderRadius: "2px" 
              }} />
            )}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button style={{
          background: "#D9FF00", color: "#000", padding: "12px 28px", borderRadius: "999px",
          fontWeight: 800, fontSize: "14px", border: "none", cursor: "pointer", 
          display: "flex", alignItems: "center", gap: "8px", transition: "transform 0.2s"
        }}>
          Let&apos;s Talk
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </button>
        <div style={{ 
          width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#a1a1aa", cursor: "pointer" 
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
