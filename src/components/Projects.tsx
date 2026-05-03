"use client";

import React from "react";
import { HiOutlineSparkles, HiOutlineCode, HiOutlineDocumentText, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineHome, HiOutlineClock, HiOutlineScissors } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      title: "Campus++",
      category: "AI / EdTech",
      desc: "AI-powered performance analytics dashboard that fetches live marks, provides smart recommendations, decision-making insights, and features a 3D mentor with AR/VR integration.",
      tech: ["React", "Node.js", "AI/ML", "AR/VR", "Three.js"],
      icon: <HiOutlineSparkles />
    },
    {
      title: "AI Code Reviewer",
      category: "AI Tool",
      desc: "Intelligent code review platform integrated with Gemini AI API for real-time code analysis, feedback, and improvement suggestions across multiple languages.",
      tech: ["React", "Node.js", "Express", "Gemini AI"],
      icon: <HiOutlineCode />
    },
    {
      title: "AI Resume Builder",
      category: "AI / SaaS",
      desc: "Smart resume builder that uses AI to generate tailored, ATS-optimized resumes with personalized content, formatting, and keyword optimization.",
      tech: ["Next.js", "OpenAI", "Tailwind CSS", "MongoDB"],
      icon: <HiOutlineDocumentText />
    },
    {
      title: "AI Medication Reminder",
      category: "AI / HealthTech",
      desc: "Personalized medication reminder app powered by AI that tracks prescriptions, sends timely alerts, and adapts schedules based on user health patterns.",
      tech: ["React Native", "Node.js", "AI/ML", "Firebase"],
      icon: <HiOutlineHeart />
    },
    {
      title: "Food Ordering System",
      category: "E-Commerce",
      desc: "Full-stack e-commerce food ordering platform with real-time order tracking, payment integration, restaurant management, and delivery system.",
      tech: ["MERN Stack", "Stripe", "Socket.io", "Redux"],
      icon: <HiOutlineShoppingCart />
    },
    {
      title: "Real Estate Portfolio",
      category: "Web App",
      desc: "Premium real estate portfolio website with property listings, advanced search filters, virtual tours, and lead management for agents.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Mapbox"],
      icon: <HiOutlineHome />
    },
    {
      title: "Turf Booking App",
      category: "SaaS",
      desc: "Live slot booking SaaS platform for turf grounds with real-time availability, instant reservations, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
      icon: <HiOutlineClock />
    },
    {
      title: "Salon Booking App",
      category: "SaaS",
      desc: "Salon appointment booking SaaS with live availability tracking, stylist selection, automated reminders, and business analytics dashboard.",
      tech: ["React", "Express", "PostgreSQL", "Twilio"],
      icon: <HiOutlineScissors />
    }
  ];

  return (
    <section id="projects" style={{ background: "#060606", color: "#fff", padding: "80px 24px 40px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span style={{ color: "#A3FF12", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MY WORK</span>
            <div style={{ width: "40px", height: "2px", background: "#A3FF12" }} />
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em" }}>
            Featured <span style={{ color: "#A3FF12" }}>Projects</span>
          </h2>
        </div>

        {/* Projects Grid — 4 columns */}
        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px"
        }}>
          {projects.map((project, i) => (
            <div key={i} className="project-card" style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              padding: "32px 24px",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Icon */}
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                background: "rgba(163,255,18,0.08)", border: "1px solid rgba(163,255,18,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", color: "#A3FF12", marginBottom: "20px"
              }}>
                {project.icon}
              </div>

              {/* Category */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "6px", height: "6px", background: "#A3FF12", borderRadius: "50%" }} />
                <span style={{ fontSize: "11px", color: "#a1a1aa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{project.category}</span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>{project.title}</h3>

              {/* Description */}
              <p style={{ color: "#71717a", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px", minHeight: "62px" }}>
                {project.desc}
              </p>
              
              {/* Tech Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tech.map((t, j) => (
                  <span key={j} style={{ 
                    fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "6px",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "#a1a1aa"
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
