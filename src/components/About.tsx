"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" style={{ background: "#060606", color: "#fff", padding: "100px 48px", position: "relative" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* About Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1.8fr", gap: "40px", marginBottom: "80px" }}>
          
          {/* Column 1 — Bio */}
          <div>
            <p style={{ color: "#D9FF00", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "12px" }}>
              GET TO KNOW ME
            </p>
            <h2 style={{ fontSize: "42px", fontWeight: 900, marginBottom: "32px", letterSpacing: "-0.03em" }}>About Me</h2>
            <div style={{ width: "40px", height: "4px", background: "#D9FF00", marginBottom: "32px" }} />
            
            <p style={{ color: "#a1a1aa", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
              With a passion for clean design and efficient code, I create digital experiences that are not only visually appealing but also functional, accessible, and scalable.
            </p>
            <p style={{ color: "#a1a1aa", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px" }}>
              I&apos;ve worked with clients across different industries, delivering solutions that solve real problems and drive business growth.
            </p>

            <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
              <div style={{ 
                background: "rgba(255,255,255,0.03)", padding: "12px 20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "#a1a1aa"
              }}>
                📍 Kolkata, India
              </div>
              <div style={{ 
                background: "rgba(255,255,255,0.03)", padding: "12px 20px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: "#a1a1aa"
              }}>
                📅 Available Worldwide
              </div>
            </div>

            <button style={{
              background: "transparent", color: "#fff", padding: "14px 28px", borderRadius: "12px",
              fontWeight: 700, fontSize: "14px", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px"
            }}>
              More About My Journey
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9FF00" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </button>
          </div>

          {/* Column 2 — Stats List */}
          <div style={{ background: "rgba(255,255,255,0.02)", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {[
              { val: "10+", label: "Years Experience" },
              { val: "300+", label: "Happy Clients" },
              { val: "200+", label: "Projects Completed" },
              { val: "50+", label: "Tech Integrations" },
              { val: "99%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: "32px", fontWeight: 900, color: "#D9FF00" }}>{stat.val}</span>
                <span style={{ fontSize: "12px", color: "#71717a", fontWeight: 700, textTransform: "uppercase" }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Column 3 — Specialties Grid */}
          <div style={{ background: "rgba(255,255,255,0.02)", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "32px" }}>What I Do Best</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              {[
                { title: "User-Centered Design", desc: "Designing intuitive interfaces that users love." },
                { title: "AI-Enhanced Solutions", desc: "Integrating AI tools to automate workflows." },
                { title: "Web Development", desc: "Building fast, responsive web applications." },
                { title: "Brand-Focused Strategy", desc: "Aligning design with your brand goals." },
                { title: "Performance Optimization", desc: "Ensuring speed, SEO, and scalability." },
                { title: "Clean & Maintainable Code", desc: "Writing efficient, documented code." }
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <div style={{ width: "32px", height: "32px", background: "rgba(217,255,0,0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "16px", height: "16px", border: "2px solid #D9FF00", borderRadius: "4px" }} />
                    </div>
                    <h4 style={{ fontSize: "15px", fontWeight: 700, margin: 0 }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Stats Bar */}
        <div style={{ 
          background: "rgba(255,255,255,0.03)", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          {[
            { val: "300+", label: "Happy Clients" },
            { val: "200+", label: "Projects Completed" },
            { val: "10+", label: "Years Experience" },
            { val: "1K+", label: "Cups of Coffee" },
            { val: "99%", label: "Client Satisfaction" }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center", flex: 1, borderRight: i === 4 ? "none" : "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: "36px", fontWeight: 900, color: "#D9FF00", margin: "0 0 4px" }}>{stat.val}</p>
              <p style={{ fontSize: "11px", color: "#71717a", fontWeight: 700, textTransform: "uppercase" }}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
