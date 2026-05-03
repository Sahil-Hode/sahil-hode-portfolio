"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Apps", "Mobile Apps", "SaaS", "AI"];

  const projects = [
    {
      title: "AI-Powered Code Reviewer",
      category: "AI Tool",
      desc: "Built an intelligent code review platform integrated with Gemini AI API for real-time feedback and analysis.",
      tech: ["React", "Node.js", "Express.js", "Gemini AI"],
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
      type: "AI"
    },
    {
      title: "User Analytics Dashboard",
      category: "MERN Stack",
      desc: "Engineered and deployed a new user analytics dashboard on AWS, providing real-time insights.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&q=80&w=800",
      type: "Web Apps"
    },
    {
      title: "Task Management App",
      category: "Mobile Application",
      desc: "Productivity app to manage tasks, teams, and track real-time progress efficiently.",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      type: "Mobile Apps"
    },
    {
      title: "SaaS Landing Page",
      category: "SaaS",
      desc: "Conversion-focused landing page for a SaaS product with modern UI and animations.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      type: "SaaS"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <section id="projects" style={{ background: "#060606", color: "#fff", padding: "80px 24px 40px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div className="responsive-flex" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ color: "#A3FF12", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MY WORK</span>
              <div style={{ width: "40px", height: "2px", background: "#A3FF12" }} />
            </div>
            <h2 style={{ fontSize: "52px", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
              Featured <span style={{ color: "#A3FF12" }}>Projects</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "16px", maxWidth: "500px", lineHeight: 1.6 }}>
              Here are some of the projects I&apos;ve worked on. Each one was a challenge that helped me grow.
            </p>
          </div>
          
          {/* Filters */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "10px", flexWrap: "wrap", marginTop: "20px" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "10px 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.08)",
                  background: activeFilter === f ? "#A3FF12" : "rgba(255,255,255,0.02)",
                  color: activeFilter === f ? "#000" : "#a1a1aa",
                  fontSize: "13px", fontWeight: 700, cursor: "pointer", transition: "all 0.3s ease"
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="responsive-grid projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px", marginBottom: "80px" }}>
          {filteredProjects.map((project, i) => (
            <div key={i} style={{ 
              background: "rgba(255,255,255,0.02)", borderRadius: "32px", overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.3s ease"
            }} className="project-card">
              {/* Image Container */}
              <div style={{ width: "100%", height: "280px", position: "relative", overflow: "hidden" }}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAkAAQAkJZwCBNgAAud0LwAA/v5YIf5wM8kZzH+2d77vNnAAAAA="
                  style={{ objectFit: "cover", transition: "transform 0.5s ease", willChange: "transform" }}
                  className="project-image"
                />
              </div>
              
              {/* Content */}
              <div style={{ padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <div style={{ width: "8px", height: "8px", background: "#A3FF12", borderRadius: "50%" }} />
                  <span style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: 600 }}>{project.category}</span>
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "16px" }}>{project.title}</h3>
                <p style={{ color: "#71717a", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px", minHeight: "44px" }}>
                  {project.desc}
                </p>
                
                {/* Tech Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                  {project.tech.map((t, j) => (
                    <span key={j} style={{ 
                      fontSize: "11px", fontWeight: 700, padding: "6px 14px", borderRadius: "8px",
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "#a1a1aa"
                    }}>{t}</span>
                  ))}
                </div>
                
                {/* Links */}
                <div style={{ display: "flex", gap: "24px" }}>
                  <a href="#" style={{ 
                    color: "#A3FF12", fontSize: "14px", fontWeight: 800, textDecoration: "none", 
                    display: "flex", alignItems: "center", gap: "8px" 
                  }}>
                    Live Demo 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </a>
                  <a href="#" style={{ 
                    color: "#a1a1aa", fontSize: "14px", fontWeight: 800, textDecoration: "none", 
                    display: "flex", alignItems: "center", gap: "8px" 
                  }}>
                    Case Study
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
