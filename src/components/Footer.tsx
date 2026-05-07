"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiChevronRight, HiOutlineHeart, HiOutlineArrowUp } from "react-icons/hi";
import { usePortfolio } from "@/hooks/usePortfolio";

export default function Footer() {
  const { data, loading } = usePortfolio();
  
  if (loading || !data) return null;

  const { about, socials, contact } = data;

  const quickLinks = ["About Me", "Skills", "Projects", "Experience", "Contact"];
  const tech = ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudinary"];
  
  const connect = [
    { label: "Email", value: contact.email, icon: <HiOutlineMail /> },
    { label: "Phone", value: contact.phone, icon: <HiOutlinePhone /> },
    { label: "Location", value: contact.location, icon: <HiOutlineLocationMarker /> },
    { label: "Availability", value: contact.availability, icon: <HiOutlineClock /> }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: socials.linkedin },
    { icon: <FaGithub />, link: socials.github },
    { icon: <FaWhatsapp />, link: socials.whatsapp }
  ].filter(s => s.link);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#060606", color: "#fff", paddingTop: "80px", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ color: "#A3FF12", fontSize: "40px", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px" }}>
                {about.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em" }}>{about.name.toUpperCase()}</div>
                <div style={{ fontSize: "11px", color: "#a1a1aa" }}>{about.role}</div>
              </div>
            </div>
            <p style={{ color: "#a1a1aa", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px", maxWidth: "260px" }}>
              {about.bio.slice(0, 100)}...
            </p>
            <div style={{ width: "40px", height: "2px", background: "#A3FF12", marginBottom: "24px" }} />
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{ 
                  width: "44px", height: "44px", background: "rgba(255,255,255,0.02)", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "18px",
                  border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.3s ease"
                }}>
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
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(" me", "")}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a1a1aa", fontSize: "14px", textDecoration: "none" }}>
                    <HiChevronRight color="#A3FF12" size={16} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Technologies */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Stack</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {tech.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#a1a1aa", fontSize: "14px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#A3FF12" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Let's Connect */}
          <div className="md:col-span-2">
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
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ color: "#fff", fontSize: "13px", fontWeight: 500, marginBottom: "2px", wordBreak: "break-all" }}>{info.value}</div>
                    <div style={{ color: "#71717a", fontSize: "11px" }}>{info.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6 border-t border-white/5 text-[13px]">
          <div className="text-[#a1a1aa]">© 2026 {about.name}. All rights reserved.</div>
          
          <div className="flex items-center gap-2 text-[#a1a1aa]">
            <HiOutlineHeart color="#A3FF12" size={16} />
            Made with ❤️ by {about.name}
          </div>

          <button onClick={scrollToTop} style={{ width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <HiOutlineArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
