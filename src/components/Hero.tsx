"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { MdWavingHand } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { usePortfolio } from "@/hooks/usePortfolioCMS";

export default function Hero() {
  const { data, loading } = usePortfolio();
  
  if (loading || !data) return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#A3FF12]/20 border-t-[#A3FF12] rounded-full animate-spin" />
    </div>
  );

  const { about, socials } = data;

  if (!about ) return null;

  return (
    <div id="home" className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden font-sans">
      <Navbar />

      <main className="responsive-grid hero-grid" style={{
        position: "relative", width: "100%", maxWidth: "1400px", margin: "0 auto",
        padding: "10px 24px 0 24px", display: "grid", gridTemplateColumns: "1fr 1fr",
        alignItems: "center", minHeight: "calc(100vh - 80px)"
      }}>
        
        {/* Left Column */}
        <div style={{ zIndex: 10 }}>
          <p style={{ color: "#A3FF12", fontSize: "16px", fontWeight: 600, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            Hello, I&apos;m {about.name} <MdWavingHand />
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "24px" }}>
            {(about.role || "").split(',')[0]}, <br />
            <span style={{ color: "#A3FF12" }}>{about.highlight}</span>
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: "18px", lineHeight: 1.6, maxWidth: "540px", marginBottom: "40px" }}>
            {about.bio}
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: "flex", gap: "20px", marginBottom: "60px" }}>
            <a href="#projects" style={{ textDecoration: "none" }}>
              <button style={{
                background: "#A3FF12", color: "#000", padding: "16px 32px", borderRadius: "12px",
                fontWeight: 800, fontSize: "16px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px",
                whiteSpace: "nowrap", justifyContent: "center"
              }}>
                View My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </button>
            </a>
            <a href="/Sahil_Hode_Software_Engineer_Resume.pdf" download style={{
               background: "transparent", color: "#fff", padding: "16px 32px", borderRadius: "12px",
              fontWeight: 700, fontSize: "16px", border: "2px solid rgba(255,255,255,0.1)", cursor: "pointer", display:                "flex", alignItems: "center", gap: "10px",
              whiteSpace: "nowrap", justifyContent: "center", textDecoration: "none"
      }}>
            Download CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"                            strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
           </a>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span style={{ fontSize: "14px", color: "#71717a", fontWeight: 600 }}>Follow Me On</span>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <FaLinkedinIn />, href: socials.linkedin },
                { icon: <FaGithub />, href: socials.github },
                { icon: <FaWhatsapp />, href: socials.whatsapp },
                { icon: <FaTwitter />, href: socials.twitter },
              ].filter(s => s.href).map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn"
                  style={{
                    width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.03)",
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", 
                    border: "1px solid rgba(255,255,255,0.08)", fontSize: "18px", color: "#a1a1aa",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", textDecoration: "none"
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Photo */}
        <div className="hero-photo" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
          {/* Circular Glow */}
          <div style={{
            position: "absolute", width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(217,255,0,0.15) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "50%", zIndex: 1
          }} />
          <div style={{
            position: "absolute", width: "420px", height: "420px",
            border: "2px dashed rgba(217,255,0,0.2)", borderRadius: "50%", zIndex: 2
          }} />
          
          {/* Image */}
          <div style={{ position: "relative", zIndex: 5, width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
            <Image 
              src={about.profileImage || "/placeholder.png"} 
              alt={about.name || "Profile"} 
              width={450} 
              height={550} 
              priority={true}
              style={{ objectFit: "contain", position: "relative", zIndex: 10, willChange: "transform" }}
            />
          </div>

          {/* Freelance Badge */}
          <div style={{
            position: "absolute", bottom: "10%", right: "10%", zIndex: 20,
            background: "rgba(18,18,18,0.8)", backdropFilter: "blur(12px)",
            padding: "12px 20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", gap: "12px"
          }}>
            <div style={{ width: "8px", height: "8px", background: "#A3FF12", borderRadius: "50%", boxShadow: "0 0 10px #A3FF12" }} />
            <div>
              <p style={{ fontSize: "10px", color: "#71717a", margin: 0, fontWeight: 700 }}>Available for</p>
              <p style={{ fontSize: "14px", fontWeight: 800, margin: 0 }}>Freelance Projects</p>
            </div>
            <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
