"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden font-sans selection:bg-[#D9FF00] selection:text-black">
      <Navbar />

      {/*
        TARGET LAYOUT (Image 2):
        | LEFT 38%          | CENTER 34%        | RIGHT 28%         |
        | name + text + CTA | profile photo     | quote + exp + 200+|
        All columns align to vertical center, image sits at bottom
      */}
      <main
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "50px 48px 0 48px",
          display: "grid",
          gridTemplateColumns: "38fr 34fr 28fr",
          gap: "0 24px",
          alignItems: "center",
          minHeight: "auto",
        }}
      >

        {/* ══ LEFT COLUMN ══ */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: "0", position: "relative", zIndex: 10 }}>

          <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 3.4rem)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            Hi, I AM<br />
            Mohammad Fazle<br />
            Rabbi{" "}
            <span style={{ color: "#D9FF00" }}>
              Interaction Designer
              <span style={{ display: "inline-block", width: "3px", height: "0.8em", background: "rgba(255,255,255,0.25)", marginLeft: "6px", verticalAlign: "middle", animation: "pulse 1.5s ease-in-out infinite" }} />
            </span>
          </h1>

          <p style={{ color: "#a1a1aa", fontSize: "clamp(0.82rem, 1vw, 0.95rem)", lineHeight: 1.7, fontWeight: 500, maxWidth: "460px", marginBottom: "32px" }}>
            I help businesses transform ideas into impactful digital products
            through smart UI/UX design, strong visual identity, and
            AI-enhanced workflows that improve efficiency and results.
          </p>

          {/* Let's Talk */}
          <button
            style={{
              background: "#D9FF00", color: "#000", borderRadius: "999px",
              fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "16px",
              padding: "12px 12px 12px 28px", width: "fit-content",
              marginBottom: "40px", boxShadow: "0 0 30px rgba(217,255,0,0.15)",
            }}
            className="group"
          >
            Let&apos;s Talk
            <span style={{
              width: "42px", height: "42px", background: "#000", color: "#D9FF00",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "transform 0.3s",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
          </button>

        </div>

        {/* ══ CENTER COLUMN — Photo ══ */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", alignSelf: "stretch", minHeight: "560px" }}>

          {/* Glow behind circle */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px", height: "400px",
            background: "#D9FF00", borderRadius: "50%",
            filter: "blur(90px)", opacity: 0.08,
            pointerEvents: "none",
          }} />

          {/* Lime green circle */}
          <div style={{
            position: "absolute", bottom: 0,
            left: "50%", transform: "translateX(-50%)",
            width: "350px", height: "350px",
            background: "#D9FF00", borderRadius: "50%",
          }} />

          {/* Person photo */}
          <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <Image
              src="/mine.png"
              alt="Mohammad Fazle Rabbi"
              width={480}
              height={620}
              priority
              style={{ objectFit: "contain", objectPosition: "bottom", width: "auto", height: "100%", maxHeight: "620px" }}
            />
          </div>


          {/* Badge — Hire Me */}
          <div style={{
            position: "absolute", left: "-14px", bottom: "22%", zIndex: 20,
            background: "#fff", color: "#000", borderRadius: "16px",
            display: "flex", alignItems: "center", gap: "12px",
            padding: "10px 24px 10px 10px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}>
            <div style={{
              width: "44px", height: "44px", background: "#D9FF00",
              borderRadius: "50%", display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "10px", color: "#71717a", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Hire Me</p>
              <p style={{ fontWeight: 700, fontSize: "14px", margin: 0 }}>+88 01916 84 29 29</p>
            </div>
          </div>
        </div>

        {/* ══ RIGHT COLUMN ══ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "0", paddingTop: "40px", position: "relative", zIndex: 10 }}>


          {/* Experience Card */}
          <div style={{
            background: "rgba(18,18,18,0.9)", backdropFilter: "blur(20px)",
            borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)",
            display: "flex", alignItems: "center", gap: "16px",
            padding: "16px 20px",
          }}>
            <div style={{
              width: "48px", height: "48px", background: "#D9FF00",
              borderRadius: "14px", display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0,
              boxShadow: "0 0 20px rgba(217,255,0,0.2)",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "10px", color: "#71717a", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 3px" }}>5+ Years Experience</p>
              <p style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "-0.01em", lineHeight: 1.25, margin: 0 }}>Professional Design<br />Practice</p>
            </div>
          </div>

          {/* 200+ Projects Card */}
          <div style={{
            background: "#121212", borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.05)",
            textAlign: "center", boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
            padding: "28px 20px",
          }}>
            <div style={{
              width: "64px", height: "64px", background: "rgba(63,63,70,0.5)",
              borderRadius: "18px", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 16px",
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D9FF00" strokeWidth="1.8">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <h4 style={{ fontSize: "52px", fontWeight: 900, color: "#D9FF00", letterSpacing: "-0.04em", lineHeight: 1, margin: "0 0 6px" }}>200+</h4>
            <p style={{ fontSize: "10px", color: "#71717a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>Completed Projects</p>
          </div>
        </div>
      </main>

      {/* ══ MARQUEE ══ */}
      <div style={{ background: "#D9FF00", overflow: "hidden", userSelect: "none", borderTop: "6px solid rgba(0,0,0,0.1)", padding: "18px 0", marginTop: "-110px", position: "relative", zIndex: 30 }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 40s linear infinite" }}>
          {[1,2,3,4].map((i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 900, color: "#000",
              gap: "56px", padding: "0 40px",
              letterSpacing: "-0.03em",
            }}>
              <span>APP DESIGN</span>
              <span>★</span>
              <span>UI/UX</span>
              <span>★</span>
              <span>GRAPHICS DESIGNER</span>
              <span>★</span>
              <span>BRAND IDENTITY DESIGN</span>
              <span>★</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}