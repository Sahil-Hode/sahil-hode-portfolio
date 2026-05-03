"use client";

import React from "react";
import { 
  SiNextdotjs, SiReact, SiNodedotjs, SiTypescript, SiMongodb, 
  SiTailwindcss, SiJavascript, SiFigma, SiHtml5, SiBootstrap 
} from "react-icons/si";
import { HiOutlineBriefcase, HiOutlineCode, HiOutlineDesktopComputer, HiCheckCircle, HiOutlineLocationMarker, HiOutlineUserGroup } from "react-icons/hi";
import { TbTrophy, TbBrandCss3 } from "react-icons/tb";

export default function Experience() {
  const stats = [
    { label: "Years Experience", value: "3+", icon: <HiOutlineBriefcase /> },
    { label: "Projects Completed", value: "15+", icon: <HiOutlineCode /> },
    { label: "Happy Clients", value: "10+", icon: <HiOutlineUserGroup /> },
    { label: "Technologies Mastered", value: "5+", icon: <TbTrophy /> }
  ];

  const experiences = [
    {
      date: "2023 – Present",
      duration: "1.5+ Years",
      role: "Full Stack Developer",
      company: "TechNova Solutions",
      location: "Remote",
      icon: <HiOutlineBriefcase />,
      desc: "Building scalable web applications and AI-powered tools for clients across various industries. Leading the development of high-performance solutions with modern technologies.",
      achievements: [
        "Delivered 10+ production-grade applications",
        "Improved application performance by 40%",
        "Integrated AI features that enhanced user experience"
      ],
      tech: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      date: "2022 – 2023",
      duration: "1 Year",
      role: "Frontend Developer",
      company: "Pixel Perfect Studios",
      location: "Remote",
      icon: <HiOutlineCode />,
      desc: "Developed responsive and interactive user interfaces for web applications and collaborated with designers to bring ideas to life.",
      achievements: [
        "Built 15+ responsive websites",
        "Improved UI/UX and performance",
        "Maintained 95%+ client satisfaction"
      ],
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Figma", icon: <SiFigma /> }
      ]
    },
    {
      date: "2021 – 2022",
      duration: "1 Year",
      role: "Web Developer Intern",
      company: "CodeCraft IT Solutions",
      location: "Kolkata, India",
      icon: <HiOutlineDesktopComputer />,
      desc: "Worked on real-world projects, learned modern technologies and best practices in web development.",
      achievements: [
        "Completed 5+ client projects",
        "Assisted in building internal tools",
        "Gained strong foundation in full-stack development"
      ],
      tech: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <TbBrandCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Bootstrap", icon: <SiBootstrap /> }
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: "#060606", color: "#fff", padding: "120px 48px", position: "relative" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", marginBottom: "80px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ color: "#D9FF00", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em" }}>MY JOURNEY</span>
              <div style={{ width: "40px", height: "2px", background: "#D9FF00" }} />
            </div>
            <h2 style={{ fontSize: "52px", fontWeight: 900, marginBottom: "20px", letterSpacing: "-0.03em" }}>
              Experience & <span style={{ color: "#D9FF00" }}>Journey</span>
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "16px", maxWidth: "400px", lineHeight: 1.6 }}>
              Over the years, I&apos;ve worked with amazing teams and built solutions that solve real-world problems.
            </p>
          </div>

          {/* Stats Box */}
          <div style={{ 
            background: "rgba(255,255,255,0.02)", padding: "40px", borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.05)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ color: "#D9FF00", fontSize: "24px", marginBottom: "12px", display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ fontSize: "28px", fontWeight: 900, marginBottom: "4px" }}>{s.value}</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", position: "relative" }}>
          
          {/* Vertical Line */}
          <div style={{ 
            position: "absolute", left: "189px", top: "16px", bottom: "10px", width: "2px", 
            background: "linear-gradient(to bottom, rgba(217,255,0,0.3) 0%, rgba(217,255,0,0) 100%)",
            zIndex: 1
          }} />

          {experiences.map((exp, i) => (
            <div key={i} style={{ display: "flex" }}>
              
              {/* Date Column */}
              <div style={{ width: "160px", textAlign: "left", paddingTop: "12px", flexShrink: 0 }}>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#D9FF00", marginBottom: "4px" }}>{exp.date}</div>
                <div style={{ fontSize: "13px", color: "#a1a1aa", fontWeight: 600 }}>{exp.duration}</div>
              </div>

              {/* Glowing Dot Wrapper */}
              <div style={{ width: "60px", display: "flex", justifyContent: "center", paddingTop: "12px", flexShrink: 0, zIndex: 2 }}>
                <div style={{ 
                  width: "24px", height: "24px", borderRadius: "50%", border: "2px solid rgba(217,255,0,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center", background: "#060606"
                }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#D9FF00", boxShadow: "0 0 10px #D9FF00" }} />
                </div>
              </div>

              {/* Experience Card */}
              <div style={{ 
                flex: 1, background: "rgba(255,255,255,0.02)", padding: "40px", borderRadius: "32px",
                border: "1px solid rgba(255,255,255,0.05)", borderLeft: "4px solid #D9FF00",
                transition: "all 0.3s ease", position: "relative"
              }} className="experience-card">
                
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
                  <div style={{ display: "flex", gap: "24px" }}>
                    <div style={{ 
                      width: "60px", height: "60px", background: "rgba(217,255,0,0.05)", borderRadius: "16px",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "#D9FF00", fontSize: "28px"
                    }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "4px" }}>{exp.role}</h3>
                      <p style={{ color: "#D9FF00", fontSize: "16px", fontWeight: 700 }}>{exp.company}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#71717a", fontSize: "14px", fontWeight: 600 }}>
                    <HiOutlineLocationMarker />
                    {exp.location}
                  </div>
                </div>

                <p style={{ color: "#a1a1aa", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                  {exp.desc}
                </p>

                <div style={{ marginBottom: "32px" }}>
                  <p style={{ color: "#D9FF00", fontSize: "14px", fontWeight: 800, marginBottom: "16px" }}>Key Achievements:</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {exp.achievements.map((ach, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", fontSize: "14px", fontWeight: 500 }}>
                        <HiCheckCircle color="#D9FF00" fontSize="18px" />
                        {ach}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {exp.tech.map((t, j) => (
                    <div key={j} style={{ 
                      display: "flex", alignItems: "center", gap: "10px",
                      fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "12px",
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "#fff"
                    }}>
                      <span style={{ color: "#D9FF00" }}>{t.icon}</span>
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
