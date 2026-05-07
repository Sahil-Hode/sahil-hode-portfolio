"use client";
 
import React from "react";
import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTrophy } from "react-icons/fa";
import { TbBrain, TbCode, TbCloudCode, TbDeviceMobile, TbDatabase, TbRocket } from "react-icons/tb";
import { usePortfolio } from "@/hooks/usePortfolio";
import { iconMap } from "@/lib/iconMap";

export default function About() {
  const { data, loading } = usePortfolio();
  
  if (loading || !data) return null;

  const { about, socials } = data;
  if (!about || about.error) return null;
  
  const stats = about.stats || [];
  const profileImage = about.profileImage || "/placeholder.png";

  const specialties = [
    { title: "AI Agent Development", desc: "LangChain, RAG pipelines, n8n workflow automation.", icon: <TbBrain /> },
    { title: "Full Stack Engineering", desc: "Next.js, React, Node.js, Express & Databases.", icon: <TbCode /> },
    { title: "Cloud & DevOps", desc: "AWS deployment, Docker, GitHub Actions CI/CD.", icon: <TbCloudCode /> },
    { title: "Mobile Development", desc: "Flutter & Dart cross-platform apps.", icon: <TbDeviceMobile /> },
    { title: "Database Engineering", desc: "Scalable data architecture with MongoDB & SQL.", icon: <TbDatabase /> },
    { title: "Performance Optimization", desc: "Production-grade code built for scale.", icon: <TbRocket /> }
  ];

  const techStack = [
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" },
    { name: "AWS", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "Flutter", icon: "flutter" },
    { name: "LangChain", icon: "brain" }
  ];

  return (
    <section id="about" style={{ background: "#060606", color: "#fff", padding: "clamp(60px, 10vw, 100px) 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Column 1 — Bio (Left) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: "16px" }}>
              GET TO KNOW ME ——
            </p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.04em" }}>About Me</h2>
            <div style={{ width: "120px", height: "5px", background: "#A3FF12", borderRadius: "2px", marginBottom: "32px" }} />
            
            <p style={{ color: "#a1a1aa", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>
              {about.bio}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              <div style={{ 
                background: "rgba(255,255,255,0.03)", padding: "14px 20px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", fontWeight: 600, color: "#e4e4e7"
              }}>
                <HiOutlineLocationMarker size={18} color="#A3FF12" /> {about.location}
              </div>
              <div style={{ 
                background: "rgba(255,255,255,0.03)", padding: "14px 20px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", fontWeight: 600, color: "#e4e4e7"
              }}>
                <HiOutlineCalendar size={18} color="#A3FF12" /> {about.education}
              </div>
            </div>

            {/* Social Icon Buttons */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noopener noreferrer" style={{
                  width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "20px", transition: "all 0.3s ease"
                }} className="glow-hover">
                  <FaGithub />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" style={{
                  width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "20px", transition: "all 0.3s ease"
                }} className="glow-hover">
                  <FaLinkedin />
                </a>
              )}
            </div>

            {/* Awards & Recognition Badge */}
            <div style={{ 
              background: "linear-gradient(135deg, rgba(163,255,18,0.1) 0%, rgba(163,255,18,0.02) 100%)", 
              padding: "20px", borderRadius: "20px", border: "1px solid rgba(163,255,18,0.2)",
              marginTop: "auto", width: "100%", maxWidth: "400px", textAlign: "left"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <FaTrophy color="#A3FF12" size={14} />
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#A3FF12", textTransform: "uppercase", letterSpacing: "0.1em" }}>Awards & Recognition</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {about.awards?.map((award, i) => (
                  <div key={i} style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>• {award}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 — Profile Photo & Stats (Center) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div style={{ position: "relative", width: "100%", maxWidth: "340px", aspectRatio: "1/1", marginBottom: "48px" }}>
              <div style={{ 
                position: "absolute", zIndex: 10,
                background: "rgba(18,18,18,0.9)", backdropFilter: "blur(12px)",
                padding: "10px 16px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                whiteSpace: "nowrap"
              }} className="bottom-[5%] left-1/2 -translate-x-1/2 md:bottom-[10%] md:right-[-40px] md:left-auto md:translate-x-0">
                <div style={{ width: "32px", height: "32px", background: "rgba(163,255,18,0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12" }}>
                  <FaTrophy size={16} />
                </div>
                <div>
                  <p style={{ fontSize: "9px", color: "#A3FF12", fontWeight: 800, margin: 0, textTransform: "uppercase" }}>Hackathon Winner</p>
                  <p style={{ fontSize: "11px", fontWeight: 800, margin: 0 }}>National Finalist</p>
                </div>
              </div>

              <div style={{ 
                position: "absolute", inset: "-20px", borderRadius: "50%", 
                border: "2px dashed rgba(163,255,18,0.3)", animation: "spin 20s linear infinite"
              }} />
              <div style={{ 
                position: "absolute", inset: "0", borderRadius: "50%", background: "#A3FF12",
                boxShadow: "0 0 60px rgba(163,255,18,0.2)", overflow: "hidden"
              }}>
                <Image 
                  src={profileImage} 
                  alt={about.name} 
                  fill 
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((stat, i) => (
                <div key={i} style={{ 
                  background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "20px", 
                  border: "1px solid rgba(255,255,255,0.05)", textAlign: "center"
                }}>
                  <p style={{ fontSize: "28px", fontWeight: 900, color: "#A3FF12", margin: "0 0 4px" }}>{stat.val}</p>
                  <p style={{ fontSize: "10px", color: "#71717a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 — Specialties Grid (Right) */}
          <div className="lg:col-span-4">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", justifyContent: "center" }} className="justify-center lg:justify-start">
              <div className="hidden lg:block" style={{ width: "40px", height: "2px", background: "#A3FF12" }} />
              <h3 style={{ fontSize: "24px", fontWeight: 800 }}>What I Do Best</h3>
              <div className="lg:hidden" style={{ width: "40px", height: "2px", background: "#A3FF12" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {specialties.map((item, i) => (
                <div key={i} style={{ 
                  background: "rgba(255,255,255,0.02)", padding: "24px", borderRadius: "20px", 
                  border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.3s ease"
                }} className="glow-hover">
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div style={{ 
                      width: "44px", height: "44px", background: "rgba(163,255,18,0.08)", borderRadius: "12px",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "24px", flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "17px", fontWeight: 800, marginBottom: "8px" }}>{item.title}</h4>
                      <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee Section */}
        <div style={{ 
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", 
          borderRadius: "32px", padding: "40px 0", overflow: "hidden", position: "relative"
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span style={{ color: "#71717a", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MY TECH STACK</span>
          </div>
          
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-6 md:gap-12 px-6">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a1a1aa", fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 700, whiteSpace: "nowrap" }}>
                  <span style={{ fontSize: "clamp(18px, 3vw, 24px)", color: "#fff" }}>{iconMap[tech.icon]}</span>
                  {tech.name}
                  <span style={{ color: "#A3FF12", margin: "0 5px" }}>★</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
