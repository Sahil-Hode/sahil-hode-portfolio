"use client";
 
import React, { useState } from "react";
import { 
  HiOutlineSparkles, HiOutlineCode, HiOutlineDocumentText, HiOutlineHeart, 
  HiOutlineShoppingCart, HiOutlineHome, HiOutlineClock, HiOutlineScissors,
  HiLightningBolt, HiOutlineExternalLink
} from "react-icons/hi";
import { FaGithub, FaStar } from "react-icons/fa";
import { usePortfolio } from "@/hooks/usePortfolio";

const iconMap: Record<string, React.ReactNode> = {
  "Campus++": <HiOutlineSparkles />,
  "AI Code Reviewer": <HiOutlineCode />,
  "AI Resume Builder": <HiOutlineDocumentText />,
  "AI Medication Reminder": <HiOutlineHeart />,
  "Food Ordering System": <HiOutlineShoppingCart />,
  "Real Estate Portfolio": <HiOutlineHome />,
  "Turf Booking App": <HiOutlineClock />,
  "Salon Booking App": <HiOutlineScissors />,
};

export default function Projects() {
  const { data } = usePortfolio();
  const [filter, setFilter] = useState("All");

  const projects = data.projects;
  const filters = ["All", "AI Projects", "Full Stack", "SaaS", "Web App"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects" style={{ background: "#060606", color: "#fff", padding: "clamp(80px, 10vw, 120px) 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Upgraded Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em" }}>MY WORK ——</span>
                <div style={{ width: "80px", height: "1px", background: "rgba(163, 255, 18, 0.3)" }} />
              </div>
              <h2 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "16px" }}>
                Featured <span style={{ color: "#A3FF12" }}>Projects</span>
              </h2>
              <p style={{ color: "#71717a", fontSize: "14px", fontWeight: 700 }}>
                {projects.length} Projects  <span style={{ color: "#A3FF12" }}>·</span>  AI Projects <span style={{ color: "#A3FF12" }}>·</span>  Full Stack <span style={{ color: "#A3FF12" }}>·</span>  SaaS
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {filters.map((f, i) => (
              <button 
                key={i} 
                onClick={() => setFilter(f)}
                style={{
                  padding: "10px 24px", borderRadius: "999px", fontSize: "13px", fontWeight: 800, cursor: "pointer", transition: "all 0.3s ease",
                  background: filter === f ? "#A3FF12" : "transparent",
                  color: filter === f ? "#000" : "#888",
                  border: filter === f ? "1px solid #A3FF12" : "1px solid rgba(255,255,255,0.12)"
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {filteredProjects.map((project, i) => (
            <div 
              key={project.id} 
              className="project-card group"
              style={{
                background: "#111111",
                border: project.featured ? "1px solid rgba(163, 255, 18, 0.18)" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "28px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                flexDirection: "column",
                display: "flex",
                height: "100%",
                minHeight: "360px",
                zIndex: 1
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div style={{ 
                  position: "absolute", top: "28px", right: "28px", zIndex: 10,
                  background: "#A3FF12", color: "#000", padding: "4px 8px", borderRadius: "4px",
                  fontSize: "10px", fontWeight: 900, display: "flex", alignItems: "center", gap: "4px"
                }}>
                  <FaStar size={10} /> FEATURED
                </div>
              )}

              {/* Project Number (Ghost) */}
              <span style={{ 
                position: "absolute", top: project.featured ? "54px" : "28px", right: "28px", fontSize: "32px", fontWeight: 900, 
                color: "rgba(255,255,255,0.06)", lineHeight: 1, pointerEvents: "none" 
              }}>{project.id}</span>

              {/* Icon Area */}
              <div className="icon-container" style={{
                width: "44px", height: "44px", borderRadius: "14px",
                background: "rgba(163, 255, 18, 0.08)", border: "1px solid rgba(163, 255, 18, 0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", color: "#A3FF12", marginBottom: "24px",
                transition: "transform 0.4s ease"
              }}>
                {iconMap[project.title] || <HiOutlineCode />}
              </div>

              {/* Category Pill */}
              <div style={{ 
                display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "12px",
                padding: "4px 10px", background: "rgba(163, 255, 18, 0.08)", borderRadius: "999px",
                border: "1px solid rgba(163, 255, 18, 0.15)", width: "fit-content"
              }}>
                <HiLightningBolt size={12} color="#A3FF12" />
                <span style={{ fontSize: "10px", color: "#A3FF12", fontWeight: 800 }}>{project.category}</span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px", color: "#fff" }}>{project.title}</h3>

              {/* Description (3 lines max) */}
              <p style={{ 
                color: "#666", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px",
                display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden"
              }}>
                {project.desc}
              </p>
              
              {/* Tech Dots */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "auto", marginBottom: "24px" }}>
                {project.tech.map((t, j) => (
                  <span key={j} style={{ 
                    fontSize: "12px", fontWeight: 700, color: "#555", display: "flex", alignItems: "center", gap: "6px"
                  }}>
                    <span style={{ width: "4px", height: "4px", background: "#A3FF12", borderRadius: "50%" }} />
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Row */}
              <div style={{ 
                paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)",
                display: "flex", justifyContent: "space-between", alignItems: "center"
              }}>
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                  Live Demo <HiOutlineExternalLink />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#555", transition: "all 0.3s ease" }} className="hover:text-white">
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(163, 255, 18, 0.3) !important;
          background: #151515 !important;
        }
        .project-card:hover .icon-container {
          transform: rotate(8deg);
        }
      `}</style>
    </section>
  );
}
