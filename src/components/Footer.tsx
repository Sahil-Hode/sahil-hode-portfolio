"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiChevronRight, HiOutlineHeart, HiOutlineArrowUp } from "react-icons/hi";

export default function Footer() {
  const quickLinks = ["About Me", "Skills", "Projects", "Experience", "Contact"];
  const services = ["Web Development", "UI/UX Design", "Full Stack Development", "API Development", "Consulting"];
  const tech = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS", "Express.js"];
  
  const connect = [
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#060606", color: "#fff", paddingTop: "80px", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Top Grid */}
        <div className="responsive-grid footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.5fr", gap: "40px", marginBottom: "80px" }}>
          
          {/* Col 1: Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              {/* Logo icon */}
              <div style={{ color: "#A3FF12", fontSize: "40px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px" }}>
                SH
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em" }}>SAHIL HODE</div>
                <div style={{ fontSize: "11px", color: "#a1a1aa" }}>SDE & Full Stack Developer, Agentic AI Developer</div>
              </div>
            </div>
            <p style={{ color: "#a1a1aa", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px", maxWidth: "260px" }}>
              I build high-performance web applications that are fast, scalable and create real impact.
            </p>
            <div style={{ width: "40px", height: "2px", background: "#A3FF12", marginBottom: "24px" }} />
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{ 
                  width: "44px", height: "44px", background: "rgba(255,255,255,0.02)", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "18px",
                  border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.3s ease"
                }} onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"} onMouseOut={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {quickLinks.map((link, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a1a1aa", fontSize: "14px", cursor: "pointer" }}>
                  <HiChevronRight color="#A3FF12" size={16} />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {services.map((service, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a1a1aa", fontSize: "14px", cursor: "pointer" }}>
                  <HiChevronRight color="#A3FF12" size={16} />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Technologies */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Technologies</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {tech.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#a1a1aa", fontSize: "14px", cursor: "pointer" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#A3FF12" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Let's Connect */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Let&apos;s Connect</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {connect.map((info, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{ 
                    width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(217,255,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "16px", flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>{info.value}</div>
                    <div style={{ color: "#71717a", fontSize: "11px" }}>{info.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>



        {/* Bottom Section */}
        <div className="responsive-flex" style={{ padding: "30px 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "#71717a", gap: "20px" }}>
          <div>© 2024 Sahil Hode. All rights reserved.</div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <HiOutlineHeart color="#A3FF12" size={16} />
            Built with passion and lots of ☕
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div>Privacy Policy &nbsp;|&nbsp; Terms of Use</div>
            <button 
              onClick={scrollToTop}
              style={{ 
                width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.3s ease"
              }}
            >
              <HiOutlineArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
