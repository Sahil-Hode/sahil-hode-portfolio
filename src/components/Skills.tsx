"use client";

import React from "react";
import { HiOutlineLightningBolt, HiOutlineServer, HiOutlineCog, HiOutlineSparkles } from "react-icons/hi";
import { usePortfolio } from "@/hooks/usePortfolio";
import { iconMap } from "@/lib/iconMap";

export default function Skills() {
  const { data, loading } = usePortfolio();
  
  if (loading || !data) return null;

  const { skills } = data;

  const categories = [
    {
      title: "Frontend & Mobile",
      icon: <HiOutlineLightningBolt />,
      desc: "Building high-performance interfaces for web and mobile platforms.",
      filter: "Frontend"
    },
    {
      title: "Backend & DB",
      icon: <HiOutlineServer />,
      desc: "Architecting scalable server-side systems and robust databases.",
      filter: "Backend"
    },
    {
      title: "DevOps & Cloud",
      icon: <HiOutlineCog />,
      desc: "Managing deployments, CI/CD pipelines, and cloud infrastructure.",
      filter: "Tools"
    },
    {
      title: "AI & Automation",
      icon: <HiOutlineSparkles />,
      desc: "Integrating LLMs and building autonomous AI agent workflows.",
      filter: "Language"
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
                {skills.filter(s => s.category === cat.filter).map((skill, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
                      {iconMap[skill.icon] || <HiOutlineSparkles color="#A3FF12" />}
                    </div>
                    <span style={{ fontSize: "16px", fontWeight: 600, color: "#a1a1aa" }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
