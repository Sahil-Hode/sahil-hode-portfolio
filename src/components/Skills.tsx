"use client";

import React from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiOpenai,
  SiDocker, SiVercel, SiGithub, SiJsonwebtokens
} from "react-icons/si";
import { HiOutlineLightningBolt, HiOutlineServer, HiOutlineCog, HiOutlineSparkles } from "react-icons/hi";
import { TbCloudCode, TbInfinity, TbRoute, TbDatabase, TbBrain } from "react-icons/tb";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <HiOutlineLightningBolt />,
      desc: "Building responsive, interactive and high-performance user interfaces.",
      skills: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "HTML5 & CSS3", icon: <SiHtml5 color="#E34F26" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <HiOutlineServer />,
      desc: "Creating robust APIs and scalable server-side applications.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#fff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "REST APIs", icon: <TbCloudCode color="#D9FF00" /> },
        { name: "Auth (JWT)", icon: <SiJsonwebtokens color="#D9FF00" /> }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <HiOutlineCog />,
      desc: "Using modern tools to streamline development and deployment.",
      skills: [
        { name: "Git & GitHub", icon: <SiGithub color="#fff" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Vercel", icon: <SiVercel color="#fff" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        { name: "CI / CD", icon: <TbInfinity color="#D9FF00" /> }
      ]
    },
    {
      title: "AI & Advanced",
      icon: <HiOutlineSparkles />,
      desc: "Integrating AI capabilities and building smart solutions.",
      skills: [
        { name: "OpenAI API", icon: <SiOpenai color="#412991" /> },
        { name: "AI Workflows", icon: <TbBrain color="#D9FF00" /> },
        { name: "LangChain", icon: <TbRoute color="#D9FF00" /> },
        { name: "Automation", icon: <HiOutlineLightningBolt color="#D9FF00" /> },
        { name: "Vector DB", icon: <TbDatabase color="#D9FF00" /> }
      ]
    }
  ];

  return (
    <section id="skills" style={{ background: "#060606", color: "#fff", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div className="responsive-flex skills-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
          <div>
            <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(217,255,0,0.3) 0%, rgba(217,255,0,0) 100%)", marginBottom: "40px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ color: "#D9FF00", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MY SKILLS</span>
              <div style={{ width: "40px", height: "2px", background: "#D9FF00" }} />
            </div>
            <h2 style={{ fontSize: "52px", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
              Skills & <span style={{ color: "#D9FF00" }}>Expertise</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "16px", maxWidth: "500px", lineHeight: 1.6 }}>
              I combine creativity with technology to build fast, scalable, and user-focused digital products.
            </p>
          </div>
          <div style={{ 
            background: "rgba(255,255,255,0.03)", padding: "10px 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", gap: "10px", color: "#a1a1aa", fontSize: "13px", fontWeight: 600
          }}>
            <div style={{ width: "8px", height: "8px", background: "#D9FF00", borderRadius: "50%", boxShadow: "0 0 10px #D9FF00" }} />
            Always learning new technologies
          </div>
        </div>

        {/* Categories Grid */}
        <div className="responsive-grid skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", marginBottom: "60px" }}>
          {categories.map((cat, i) => (
            <div key={i} style={{ 
              background: "rgba(255,255,255,0.02)", padding: "40px 32px", borderRadius: "24px", 
              border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.3s ease"
            }}>
              <div style={{ 
                width: "48px", height: "48px", background: "rgba(217,255,0,0.1)", borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "32px",
                border: "1px solid rgba(217,255,0,0.2)", color: "#D9FF00"
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "12px" }}>{cat.title}</h3>
              <div style={{ width: "30px", height: "3px", background: "#D9FF00", marginBottom: "24px" }} />
              <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.6, marginBottom: "32px" }}>{cat.desc}</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {cat.skills.map((skill, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
                      {skill.icon}
                    </div>
                    <span style={{ fontSize: "16px", fontWeight: 600, color: "#a1a1aa" }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="responsive-flex skills-cta" style={{ 
          background: "rgba(217,255,0,0.03)", padding: "40px 60px", borderRadius: "32px",
          border: "1px solid rgba(217,255,0,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h3 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "8px" }}>Let&apos;s build something amazing together!</h3>
            <p style={{ color: "#71717a", fontSize: "16px", margin: 0 }}>I&apos;m always open to discussing new opportunities and exciting projects.</p>
          </div>
          <button style={{
            background: "#D9FF00", color: "#000", padding: "18px 40px", borderRadius: "16px",
            fontWeight: 800, fontSize: "16px", border: "none", cursor: "pointer", 
            display: "flex", alignItems: "center", gap: "12px", zIndex: 2,
            boxShadow: "0 10px 30px rgba(217,255,0,0.2)"
          }}>
            Let&apos;s Connect
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
          </button>
          
          {/* Decorative Rocket Icon */}
          <div style={{ 
            position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", 
            opacity: 0.05, fontSize: "80px", pointerEvents: "none" 
          }}>🚀</div>
        </div>

      </div>
    </section>
  );
}
