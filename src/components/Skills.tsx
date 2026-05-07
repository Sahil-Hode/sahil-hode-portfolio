"use client";

import React from "react";
import { HiOutlineLightningBolt, HiOutlineServer, HiOutlineCog, HiOutlineSparkles, HiOutlineDatabase } from "react-icons/hi";
import { TbCloudCode, TbInfinity } from "react-icons/tb";
import { usePortfolio } from "@/hooks/usePortfolioCMS";
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
      icon: <HiOutlineDatabase />,
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
        <div style={{ marginBottom: "60px" }}>
          <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, rgba(163,255,18,0.3) 0%, rgba(163,255,18,0) 100%)", marginBottom: "40px" }} />
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, i) => (
            <div key={i} style={{ 
              background: "rgba(255,255,255,0.02)", padding: "48px 36px", borderRadius: "28px", 
              border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.3s ease",
              display: "flex", flexDirection: "column"
            }} className="skill-cat-card group">
              <div style={{ 
                width: "56px", height: "56px", background: "rgba(163,255,18,0.08)", borderRadius: "14px",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "36px",
                border: "1px solid rgba(163,255,18,0.12)", color: "#A3FF12"
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "14px" }}>{cat.title}</h3>
              <div style={{ width: "30px", height: "3px", background: "#A3FF12", marginBottom: "28px" }} />
              <p style={{ fontSize: "14px", color: "#71717a", lineHeight: 1.6, marginBottom: "40px" }}>{cat.desc}</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "auto" }}>
                {skills.filter(s => s.category === cat.filter).map((skill, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: "#A3FF12" }}>
                      {iconMap[skill.icon] || <HiOutlineSparkles />}
                    </div>
                    <span style={{ fontSize: "16px", fontWeight: 600, color: "#a1a1aa" }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skill-cat-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.03) !important; border-color: rgba(163,255,18,0.2) !important; }
      `}</style>
    </section>
  );
}
