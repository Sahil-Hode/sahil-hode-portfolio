"use client";

import React from "react";
import { 
  SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, 
  SiPython, SiNestjs, SiExpress
} from "react-icons/si";
import { HiOutlineBriefcase, HiOutlineCode, HiCheckCircle, HiOutlineLocationMarker, HiOutlineServer } from "react-icons/hi";
import { TbTrophy, TbRoute } from "react-icons/tb";

export default function Experience() {
  const stats = [
    { label: "Live Projects", value: "10+", icon: <HiOutlineCode /> },
    { label: "Work Experiences", value: "2", icon: <HiOutlineBriefcase /> },
    { label: "AI Tools Built", value: "5+", icon: <HiOutlineServer /> },
    { label: "Tech Stack", value: "15+", icon: <TbTrophy /> }
  ];

  const experiences = [
    {
      date: "Jan 2026 – Apr 2026",
      duration: "4 Months",
      role: "Software Developer & LLM Apps",
      company: "Yours Faithfully Advisors LLP",
      location: "Ghansoli, Navi Mumbai (On-site)",
      icon: <HiOutlineBriefcase />,
      desc: "Developing and optimizing LLM-based applications and software solutions for complex business workflows.",
      achievements: [
        "Architecting AI-driven automation systems",
        "Building scalable enterprise-grade software",
        "Collaborating on-site with core development teams"
      ],
      tech: [
        { name: "Python", icon: <SiPython /> },
        { name: "LangChain", icon: <TbRoute /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "NestJS", icon: <SiNestjs /> }
      ]
    },
    {
      date: "Aug 2025 – Jan 2026",
      duration: "6 Months",
      role: "Full Stack Developer Intern",
      company: "Gristip Software Private Limited",
      location: "Thane (Remote)",
      icon: <HiOutlineCode />,
      desc: "Engineered and deployed user analytics dashboards and refactored API integration points for live web and mobile projects.",
      achievements: [
        "10% increase in user engagement tracking via MERN dashboards",
        "Reduced data load times by 30% through API refactoring",
        "Automated deployment with CI/CD (GitHub Actions/AWS)"
      ],
      tech: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "AWS", icon: <HiOutlineServer /> }
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: "#060606", color: "#fff", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-2">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ color: "#A3FF12", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MY JOURNEY</span>
              <div style={{ width: "40px", height: "2px", background: "#A3FF12" }} />
            </div>
            <h2 style={{ fontSize: "clamp(32px, 8vw, 52px)", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
              Experience & <span style={{ color: "#A3FF12" }}>Journey</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "16px", maxWidth: "400px", lineHeight: 1.6 }}>
              Over the years, I&apos;ve worked with amazing teams and built solutions that solve real-world problems.
            </p>
          </div>

          {/* Stats Box */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/[0.02] p-8 md:p-10 rounded-[32px] border border-white/[0.05]">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ color: "#A3FF12", fontSize: "24px", marginBottom: "12px", display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ fontSize: "28px", fontWeight: 900, marginBottom: "4px" }}>{s.value}</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="flex flex-col gap-10 relative max-w-full">
          
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-[189px] top-4 bottom-2.5 w-[2px] bg-gradient-to-b from-[#A3FF12]/30 to-transparent z-[1]" />

          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-6 lg:gap-0">
              
              {/* Date Column */}
              <div className="lg:w-[160px] text-left pt-3 shrink-0">
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#A3FF12", marginBottom: "4px" }}>{exp.date}</div>
                <div style={{ fontSize: "13px", color: "#a1a1aa", fontWeight: 600 }}>{exp.duration}</div>
              </div>

              {/* Glowing Dot Wrapper - Hidden on small screens */}
              <div className="hidden lg:flex w-[60px] justify-center pt-3 shrink-0 z-[2]">
                <div style={{ 
                  width: "24px", height: "24px", borderRadius: "50%", border: "2px solid rgba(217,255,0,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center", background: "#060606"
                }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#A3FF12", boxShadow: "0 0 10px #A3FF12" }} />
                </div>
              </div>

              {/* Experience Card */}
              <div style={{ 
                flex: 1, background: "rgba(255,255,255,0.02)", padding: "40px", borderRadius: "32px",
                border: "1px solid rgba(255,255,255,0.05)", borderLeft: "4px solid #A3FF12",
                transition: "all 0.3s ease", position: "relative", minWidth: 0
              }} className="experience-card">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <div className="flex gap-4 sm:gap-6">
                    <div style={{ 
                      width: "60px", height: "60px", background: "rgba(217,255,0,0.05)", borderRadius: "16px",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "28px", shrink: 0
                    }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "22px", md: "26px", fontWeight: 800, marginBottom: "4px" }}>{exp.role}</h3>
                      <p style={{ color: "#A3FF12", fontSize: "16px", fontWeight: 700 }}>{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#71717a] text-sm font-semibold">
                    <HiOutlineLocationMarker />
                    {exp.location}
                  </div>
                </div>

                <p style={{ color: "#a1a1aa", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                  {exp.desc}
                </p>

                <div style={{ marginBottom: "32px" }}>
                  <p style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 800, marginBottom: "16px" }}>Key Achievements:</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {exp.achievements.map((ach, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", fontSize: "14px", fontWeight: 500 }}>
                        <HiCheckCircle color="#A3FF12" fontSize="18px" />
                        {ach}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t, j) => (
                    <div key={j} style={{ 
                      display: "flex", alignItems: "center", gap: "10px",
                      fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "12px",
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "#fff"
                    }}>
                      <span style={{ color: "#A3FF12" }}>{t.icon}</span>
                      {t.name}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
