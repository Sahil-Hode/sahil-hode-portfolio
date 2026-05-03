"use client";

import React from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiOpenai,
  SiDocker, SiVercel, SiPython,
  SiPostgresql, SiFlutter, SiRailway,
  SiGitlab, SiBun
} from "react-icons/si";
import { HiOutlineLightningBolt, HiOutlineServer, HiOutlineCog, HiOutlineSparkles } from "react-icons/hi";
import { TbCloudCode, TbInfinity, TbRoute, TbBrain } from "react-icons/tb";
import { FaRocket } from "react-icons/fa";

export default function Skills() {
  const categories = [
    {
      title: "Frontend & Mobile",
      icon: <HiOutlineLightningBolt />,
      desc: "Building high-performance interfaces for web and mobile platforms.",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
        { name: "React / Native", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "Flutter & Dart", icon: <SiFlutter color="#02569B" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: "Backend & DB",
      icon: <HiOutlineServer />,
      desc: "Architecting scalable server-side systems and robust databases.",
      skills: [
        { name: "Node / NestJS", icon: <SiNodedotjs color="#339933" /> },
        { name: "Bun / Express", icon: <SiBun color="#fff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Postgres / MySQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "REST APIs", icon: <TbCloudCode color="#A3FF12" /> }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <HiOutlineCog />,
      desc: "Managing deployments, CI/CD pipelines, and cloud infrastructure.",
      skills: [
        { name: "Docker & Git", icon: <SiDocker color="#2496ED" /> },
        { name: "GitHub / GitLab", icon: <SiGitlab color="#FC6D26" /> },
        { name: "Vercel / Netlify", icon: <SiVercel color="#fff" /> },
        { name: "AWS / Railway", icon: <SiRailway color="#fff" /> },
        { name: "CI / CD", icon: <TbInfinity color="#A3FF12" /> }
      ]
    },
    {
      title: "AI & Automation",
      icon: <HiOutlineSparkles />,
      desc: "Integrating LLMs and building autonomous AI agent workflows.",
      skills: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "LangChain & LangGraph", icon: <TbRoute color="#A3FF12" /> },
        { name: "RAG Systems", icon: <TbBrain color="#A3FF12" /> },
        { name: "Gemini / OpenAI", icon: <SiOpenai color="#412991" /> },
        { name: "Automation", icon: <HiOutlineLightningBolt color="#A3FF12" /> }
      ]
    }
  ];

  return (
    <section id="skills" style={{ background: "#060606", color: "#fff", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
          <div>
            <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(217,255,0,0.3) 0%, rgba(217,255,0,0) 100%)", marginBottom: "40px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ color: "#A3FF12", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MY SKILLS</span>
              <div style={{ width: "40px", height: "2px", background: "#A3FF12" }} />
            </div>
            <h2 style={{ fontSize: "clamp(32px, 8vw, 52px)", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
              Skills & <span style={{ color: "#A3FF12" }}>Expertise</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "16px", maxWidth: "500px", lineHeight: 1.6 }}>
              I combine creativity with technology to build fast, scalable, and user-focused digital products.
            </p>
          </div>
          <div style={{ 
            background: "rgba(255,255,255,0.03)", padding: "10px 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", gap: "10px", color: "#a1a1aa", fontSize: "13px", fontWeight: 600
          }}>
            <div style={{ width: "8px", height: "8px", background: "#A3FF12", borderRadius: "50%", boxShadow: "0 0 10px #A3FF12" }} />
            Always learning new technologies
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, i) => (
            <div key={i} style={{ 
              background: "rgba(255,255,255,0.02)", padding: "40px 32px", borderRadius: "24px", 
              border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.3s ease"
            }}>
              <div style={{ 
                width: "48px", height: "48px", background: "rgba(217,255,0,0.1)", borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "32px",
                border: "1px solid rgba(217,255,0,0.2)", color: "#A3FF12"
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "12px" }}>{cat.title}</h3>
              <div style={{ width: "30px", height: "3px", background: "#A3FF12", marginBottom: "24px" }} />
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
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white/[0.03] border border-white/[0.08] rounded-[32px] p-8 md:p-12 lg:p-16 relative overflow-hidden gap-10">
          <div style={{ position: "relative", zIndex: 2, textAlign: "center" }} className="lg:text-left">
            <h3 style={{ fontSize: "clamp(24px, 5vw, 28px)", fontWeight: 900, marginBottom: "8px" }}>Let&apos;s build something amazing together!</h3>
            <p style={{ color: "#71717a", fontSize: "16px", margin: 0 }}>I&apos;m always open to discussing new opportunities and exciting projects.</p>
          </div>
          <button style={{
            background: "#A3FF12", color: "#000", padding: "18px 40px", borderRadius: "16px",
            fontWeight: 800, fontSize: "16px", border: "none", cursor: "pointer", 
            display: "flex", alignItems: "center", gap: "12px", zIndex: 2,
            boxShadow: "0 10px 30px rgba(217,255,0,0.2)", width: "100%", maxWidth: "300px", justifyContent: "center"
          }}>
            Let&apos;s Connect
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
          </button>
          
          {/* Decorative Rocket Icon */}
          <div style={{ 
            position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", 
            opacity: 0.05, fontSize: "80px", pointerEvents: "none" 
          }}>
            <FaRocket />
          </div>
        </div>

      </div>
    </section>
  );
}
