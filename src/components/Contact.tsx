"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaBehance, FaPaperPlane } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

export default function Contact() {
  const contactInfo = [
    { label: "Email", value: "sahil.hode@example.com", icon: <HiOutlineMail /> },
    { label: "Phone", value: "+91 12345 67890", icon: <HiOutlinePhone /> },
    { label: "Location", value: "Kolkata, West Bengal, India", icon: <HiOutlineLocationMarker /> },
    { label: "Availability", value: "Open for Freelance & Full-time", icon: <HiOutlineClock /> }
  ];

  const socials = [
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaGithub />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaBehance />, link: "#" },
    { icon: <FaDribbble />, link: "#" }
  ];

  return (
    <section id="contact" style={{ background: "#060606", color: "#fff", padding: "80px 24px 120px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        <div className="responsive-grid contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }}>
          
          {/* Left Column */}
          <div style={{ position: "relative" }}>
            {/* Header */}
            <div style={{ marginBottom: "60px", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{ color: "#D9FF00", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>GET IN TOUCH</span>
                <div style={{ width: "40px", height: "2px", background: "#D9FF00" }} />
              </div>
              <h2 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
                Let&apos;s <span style={{ color: "#D9FF00" }}>Connect</span>
              </h2>
              <p style={{ color: "#a1a1aa", fontSize: "18px", maxWidth: "480px", lineHeight: 1.6 }}>
                I&apos;m always open to discussing new opportunities, exciting projects, or just having a chat.
              </p>

              {/* Decorative Paper Plane & Path */}
              <div style={{ position: "absolute", right: "20px", top: "10px", zIndex: 1, width: "180px", height: "200px", pointerEvents: "none" }}>
                {/* Looping Dotted Path */}
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" style={{ position: "absolute", left: "-20px", top: "20px", overflow: "visible" }}>
                  <path 
                    d="M 0 150 C 100 150, 110 60, 80 60 C 50 60, 50 110, 80 110 C 110 110, 120 70, 140 40" 
                    stroke="#D9FF00" 
                    strokeWidth="2" 
                    strokeDasharray="6 6" 
                    opacity="0.6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div style={{ 
                  width: "72px", height: "72px", borderRadius: "50%", border: "2px solid #D9FF00", 
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#D9FF00", fontSize: "32px",
                  boxShadow: "0 0 20px rgba(217,255,0,0.3)", background: "#060606", position: "absolute", right: "0", top: "0", zIndex: 2, pointerEvents: "auto"
                }}>
                  <FaPaperPlane style={{ transform: "rotate(-10deg) translateX(-2px)" }} />
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
              {contactInfo.map((info, i) => (
                <div key={i} style={{ 
                  background: "rgba(255,255,255,0.02)", padding: "24px 32px", borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "24px",
                  transition: "all 0.3s ease"
                }} className="contact-info-card">
                  <div style={{ 
                    width: "48px", height: "48px", borderRadius: "50%", background: "rgba(217,255,0,0.05)",
                    border: "1px solid rgba(217,255,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", 
                    color: "#D9FF00", fontSize: "20px" 
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ color: "#fff", fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>{info.label}</p>
                    <p style={{ color: "#a1a1aa", fontSize: "14px", fontWeight: 500 }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p style={{ color: "#D9FF00", fontSize: "13px", fontWeight: 800, marginBottom: "20px" }}>Follow Me</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {socials.map((soc, i) => (
                  <a key={i} href={soc.link} style={{ 
                    width: "48px", height: "48px", background: "rgba(255,255,255,0.02)", borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "20px",
                    border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.3s ease"
                  }} onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"} onMouseOut={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}>
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-form-container" style={{ 
            background: "rgba(255,255,255,0.02)", padding: "clamp(24px, 5vw, 60px)", borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.05)", position: "relative",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)", width: "100%"
          }}>
            {/* Glow border effect */}
            <div style={{ 
              position: "absolute", inset: "-1px", borderRadius: "32px", 
              background: "linear-gradient(45deg, transparent 50%, rgba(217,255,0,0.1) 100%)", pointerEvents: "none" 
            }} />

            <form style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Your Name</label>
                <input type="text" placeholder="Enter your name" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "12px", color: "#fff", outline: "none", fontSize: "15px"
                }} />
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Your Email</label>
                <input type="email" placeholder="Enter your email" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "12px", color: "#fff", outline: "none", fontSize: "15px"
                }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Subject</label>
                <input type="text" placeholder="How can I help you?" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "12px", color: "#fff", outline: "none", fontSize: "15px"
                }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Message</label>
                <textarea placeholder="Write your message here..." rows={6} style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "20px", color: "#fff", outline: "none", fontSize: "15px",
                  resize: "none"
                }} />
              </div>

              <button style={{
                background: "#D9FF00", color: "#000", padding: "18px 32px", borderRadius: "12px",
                fontWeight: 900, fontSize: "16px", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                boxShadow: "0 10px 30px rgba(217,255,0,0.2)", transition: "all 0.3s ease"
              }} onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
              </button>
            </form>
          </div>
        </div>



      </div>
    </section>
  );
}
