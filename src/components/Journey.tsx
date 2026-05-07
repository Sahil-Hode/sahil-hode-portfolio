"use client";

import React, { useState, useEffect } from "react";
import { FaTrophy, FaGithub } from "react-icons/fa";
import {
  HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineBookOpen,
  HiOutlineUserGroup, HiOutlineExternalLink, HiOutlineStar, HiOutlineShare
} from "react-icons/hi";
import { usePortfolio } from "@/hooks/usePortfolioCMS";

interface GitHubData {
  publicRepos: number;
  followers: number;
  totalStars: number;
  languages: { name: string; count: number; percentage: number }[];
  recentRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
    updatedAt: string;
  }[];
  profileUrl: string;
}

const langColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  Dart: '#00B4AB',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Shell: '#89e051',
  C: '#555555',
  Java: '#b07219'
};

export default function Journey() {
  const { data: portfolioData, loading: portfolioLoading } = usePortfolio();
  const [ghData, setGhData] = useState<GitHubData | null>(null);
  const [ghLoading, setGhLoading] = useState(true);
  const [ghError, setGhError] = useState(false);

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (data.error) setGhError(true);
        else setGhData(data);
      })
      .catch(() => setGhError(true))
      .finally(() => setGhLoading(false));
  }, []);

  if (portfolioLoading || !portfolioData) return null;

  const { education } = portfolioData;
  const currentEdu = education[0] || {
    degree: "Bachelor of Computer Application",
    institution: "Sahyog College, KKU",
    duration: "2024 → 2027",
    location: "Thane, Maharashtra",
    progress: 66,
    status: "Currently Pursuing",
    coursework: ["Data Structures", "Databases", "Web Development", "Programming Fund."],
    activities: ["Hackathons", "Technical Events", "Project-based Learn"]
  };

  return (
    <section id="journey" style={{ background: "#060606", color: "#fff", padding: "clamp(60px, 10vw, 120px) 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        <div style={{ marginBottom: "clamp(36px, 6vw, 60px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em" }}>THE PATH ——</span>
            <div style={{ width: "80px", height: "1px", background: "rgba(163, 255, 18, 0.3)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px, 7vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "16px" }}>
            My <span style={{ color: "#A3FF12" }}>Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Achievement Card */}
          <div style={{ 
            background: "#111", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "4px solid #A3FF12",
            position: "relative"
          }}>
            <span style={{ position: "absolute", top: "20px", right: "20px", fontSize: "80px", fontWeight: 900, color: "rgba(163,255,18,0.06)", lineHeight: 1 }}>2025</span>
            <div style={{ width: "52px", height: "52px", background: "rgba(163, 255, 18, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "24px", marginBottom: "24px" }}>
              <FaTrophy />
            </div>
            <h3 style={{ fontSize: "32px", fontWeight: 900, color: "#A3FF12", marginBottom: "6px" }}>2nd Place</h3>
            <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>Invento Competition</h4>
            <p style={{ color: "#71717a", fontSize: "14px", lineHeight: 1.6 }}>Recognized for innovative AI-powered solution at the regional technology competition.</p>
          </div>

          {/* Education Card */}
          <div style={{ background: "#111", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.05)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "22px" }}>
                  <HiOutlineAcademicCap />
                </div>
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", lineHeight: 1.25 }}>{currentEdu.degree}</h3>
                  <p style={{ fontSize: "13px", color: "#71717a", fontWeight: 600 }}>{currentEdu.institution}</p>
                </div>
              </div>
              <div style={{ background: "#A3FF12", color: "#000", padding: "5px 12px", borderRadius: "999px", fontSize: "10px", fontWeight: 900 }}>{currentEdu.status}</div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 800, color: "#a1a1aa", marginBottom: "8px" }}>
                <span>Year {Math.ceil((currentEdu.progress / 100) * 3)} of 3</span>
                <span style={{ color: "#A3FF12" }}>{currentEdu.progress}%</span>
              </div>
              <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{ width: `${currentEdu.progress}%`, height: "100%", background: "#A3FF12" }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p style={{ fontSize: "10px", fontWeight: 900, color: "#A3FF12", textTransform: "uppercase", marginBottom: "10px" }}>Coursework</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "12px", color: "#a1a1aa", lineHeight: 1.8 }}>
                  {currentEdu.coursework.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p style={{ fontSize: "10px", fontWeight: 900, color: "#A3FF12", textTransform: "uppercase", marginBottom: "10px" }}>Activities</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "12px", color: "#a1a1aa", lineHeight: 1.8 }}>
                  {currentEdu.activities.map((a, i) => <li key={i}>• {a}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Section */}
        <div style={{ background: "#0d0d0d", padding: "48px", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaGithub size={24} color="#A3FF12" />
              <h3 style={{ fontSize: "20px", fontWeight: 800 }}>GitHub Activity</h3>
            </div>
            {ghData && <a href={ghData.profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#A3FF12", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>View Profile →</a>}
          </div>

          {ghLoading ? <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#71717a" }}>Loading GitHub Stats...</div> : ghError || !ghData ? <div style={{ height: "100px", color: "#71717a" }}>Unable to load live GitHub data.</div> : (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { label: "Repos", val: `${ghData.publicRepos}+` },
                  { label: "Followers", val: ghData.followers },
                  { label: "Stars", val: ghData.totalStars },
                  { label: "Languages", val: ghData.languages.length }
                ].map((stat, i) => (
                  <div key={i} style={{ background: "#111", padding: "24px 20px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                    <p style={{ fontSize: "32px", fontWeight: 900, color: "#A3FF12", margin: "0 0 4px" }}>{stat.val}</p>
                    <p style={{ fontSize: "10px", color: "#555", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Languages Bar */}
              <div style={{ marginBottom: "48px" }}>
                <p style={{ fontSize: "12px", fontWeight: 900, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>Top Languages</p>
                <div style={{ display: "flex", width: "100%", height: "8px", borderRadius: "999px", overflow: "hidden", marginBottom: "24px" }}>
                  {ghData.languages.map((lang, i) => (
                    <div key={i} style={{ width: `${lang.percentage}%`, height: "100%", background: langColors[lang.name] || "#333" }} />
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
                  {ghData.languages.map((lang, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: langColors[lang.name] || "#333" }} />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#a1a1aa" }}>{lang.name}</span>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#555" }}>{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Repos */}
              <div>
                <p style={{ fontSize: "12px", fontWeight: 900, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>Recent Projects</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ghData.recentRepos.map((repo, i) => (
                    <a key={i} href={repo.url} target="_blank" rel="noopener noreferrer" style={{ 
                      background: "#111", padding: "24px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.06)",
                      textDecoration: "none", transition: "all 0.3s ease"
                    }} className="repo-card group">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                        <h4 style={{ color: "#fff", fontSize: "15px", fontWeight: 700 }}>{repo.name}</h4>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#555", fontSize: "12px" }}>
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: langColors[repo.language] || "#333" }} />
                          {repo.language}
                        </div>
                      </div>
                      <p style={{ color: "#555", fontSize: "13px", lineHeight: 1.5, marginBottom: "20px", height: "40px", overflow: "hidden" }}>{repo.description || "No description provided."}</p>
                      <div style={{ display: "flex", gap: "16px", color: "#555", fontSize: "12px", fontWeight: 700 }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><HiOutlineStar /> {repo.stars}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><HiOutlineShare /> {repo.forks}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: "48px" }}>
                <a href={ghData.profileUrl} target="_blank" rel="noopener noreferrer" style={{ 
                  display: "inline-flex", background: "#A3FF12", color: "#000", borderRadius: "999px", padding: "12px 32px",
                  fontSize: "13px", fontWeight: 900, textDecoration: "none", transition: "all 0.3s ease"
                }} className="hover:scale-105">
                  github.com/sahilhode ↗
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .repo-card:hover { border-color: rgba(163,255,18,0.3) !important; transform: translateY(-4px); }
      `}</style>
    </section>
  );
}