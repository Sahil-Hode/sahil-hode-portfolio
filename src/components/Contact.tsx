"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null, message: string }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus({ type: "success", message: "Email sent successfully!" });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Try again later." });
    } finally {
      setLoading(false);
    }
  };
  const contactInfo = [
    { label: "Email", value: "sahilhode67@gmail.com", icon: <HiOutlineMail /> },
    { label: "Phone", value: "+91 8652601566", icon: <HiOutlinePhone /> },
    { label: "Location", value: "Thane, Mumbai, Maharashtra", icon: <HiOutlineLocationMarker /> },
    { label: "Availability", value: "Open for Freelance & Full-time", icon: <HiOutlineClock /> }
  ];

  const socials = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sahil-hode" },
    { icon: <FaGithub />, link: "https://github.com/Sahil-Hode" },
    { icon: <FaWhatsapp />, link: "https://wa.me/918652601566" }
  ];

  return (
    <section id="contact" style={{ background: "#060606", color: "#fff", padding: "clamp(60px, 10vw, 120px) 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div style={{ position: "relative", width: "100%" }}>
            {/* Header */}
            <div style={{ marginBottom: "60px", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span style={{ color: "#A3FF12", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>GET IN TOUCH</span>
                <div style={{ width: "40px", height: "2px", background: "#A3FF12" }} />
              </div>
              <h2 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
                Let&apos;s <span style={{ color: "#A3FF12" }}>Connect</span>
              </h2>
              <p style={{ color: "#a1a1aa", fontSize: "18px", maxWidth: "480px", lineHeight: 1.6 }}>
                I&apos;m always open to discussing new opportunities, exciting projects, or just having a chat.
              </p>

              {/* Decorative Paper Plane & Path */}
              <div className="hidden md:block" style={{ position: "absolute", right: "0", top: "0", zIndex: 1, width: "180px", height: "200px", pointerEvents: "none" }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" style={{ position: "absolute", left: "-20px", top: "20px", overflow: "visible" }}>
                  <path 
                    d="M 0 150 C 100 150, 110 60, 80 60 C 50 60, 50 110, 80 110 C 110 110, 120 70, 140 40" 
                    stroke="#A3FF12" 
                    strokeWidth="2" 
                    strokeDasharray="6 6" 
                    opacity="0.6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div style={{ 
                  width: "72px", height: "72px", borderRadius: "50%", border: "2px solid #A3FF12", 
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "32px",
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
                  background: "rgba(255,255,255,0.02)", padding: "20px 24px", borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "20px",
                  transition: "all 0.3s ease", width: "100%", overflow: "hidden"
                }} className="contact-info-card">
                  <div style={{ 
                    width: "48px", height: "48px", borderRadius: "50%", background: "rgba(217,255,0,0.05)",
                    border: "1px solid rgba(217,255,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", 
                    color: "#A3FF12", fontSize: "20px", flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p style={{ color: "#fff", fontSize: "16px", fontWeight: 700, marginBottom: "4px" }}>{info.label}</p>
                    <p style={{ color: "#a1a1aa", fontSize: "14px", fontWeight: 500, wordBreak: "break-all", overflowWrap: "anywhere" }}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p style={{ color: "#A3FF12", fontSize: "13px", fontWeight: 800, marginBottom: "20px" }}>Follow Me</p>
              <div style={{ display: "flex", gap: "12px" }}>
                {socials.map((soc, i) => (
                  <a key={i} href={soc.link} target="_blank" rel="noopener noreferrer" style={{ 
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

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Your Name</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Enter your name" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "12px", color: "#fff", outline: "none", fontSize: "15px", width: "100%"
                }} />
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Your Email</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Enter your email" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "12px", color: "#fff", outline: "none", fontSize: "15px", width: "100%"
                }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Contact Number</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXXXXXXX" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "12px", color: "#fff", outline: "none", fontSize: "15px", width: "100%"
                }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Subject</label>
                <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} placeholder="How can I help you?" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "12px", color: "#fff", outline: "none", fontSize: "15px", width: "100%"
                }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Message</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Write your message here..." rows={6} style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                  padding: "18px 24px", borderRadius: "20px", color: "#fff", outline: "none", fontSize: "15px",
                  resize: "none", width: "100%"
                }} />
              </div>

              {status.message && (
                <div style={{ color: status.type === "error" ? "#ff4444" : "#A3FF12", fontSize: "14px", fontWeight: 600 }}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={loading} style={{
                background: "#A3FF12", color: "#000", padding: "18px 32px", borderRadius: "12px",
                fontWeight: 900, fontSize: "16px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                boxShadow: "0 10px 30px rgba(217,255,0,0.2)", transition: "all 0.3s ease",
                opacity: loading ? 0.7 : 1, width: "100%"
              }} onMouseOver={(e) => !loading && (e.currentTarget.style.transform = "translateY(-2px)")} onMouseOut={(e) => !loading && (e.currentTarget.style.transform = "translateY(0)")}>
                {loading ? "Sending..." : "Send Message"}
                {!loading && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>}
              </button>
            </form>
          </div>
        </div>



      </div>
    </section>
  );
}
