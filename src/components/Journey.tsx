"use client";

import React, { useState, useEffect } from "react";
import { FaTrophy } from "react-icons/fa";
import {
  HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineBookOpen,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { usePortfolio } from "@/hooks/usePortfolio";

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
    school: "Sahyog College, KKU",
    year: "2024 \u2192 2027",
    location: "Thane, Maharashtra",
    progress: 66,
    status: "Currently Pursuing",
    coursework: ["Data Structures", "Databases", "Web Development", "Programming Fund."],
    activities: ["Hackathons", "Technical Events", "Project-based Learn"]
  };

  return (
    <section id="journey" style={{ background: "#060606", color: "#fff", padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 24px)", position: "relative", overflow: "hidden", boxSizing: "border-box", width: "100%" }}>
      <style>{`
        .journey-inner { max-width: 1400px; margin: 0 auto; width: 100%; box-sizing: border-box; }
        .journey-row1 { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 20px; }
        @media (min-width: 1024px) { .journey-row1 { grid-template-columns: 1fr 1fr; } }
        .edu-header { display: grid; grid-template-columns: 1fr auto; align-items: flex-start; gap: 12px; margin-bottom: 28px; }
        @media (max-width: 480px) { .edu-header { grid-template-columns: 1fr; } }
        .edu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 360px) { .edu-grid { grid-template-columns: 1fr; } }
        .gh-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 28px; }
        @media (min-width: 640px) { .gh-stats { grid-template-columns: repeat(4, 1fr); } }
        .repos-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
        @media (min-width: 540px) { .repos-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .repos-grid { grid-template-columns: repeat(3, 1fr); } }
        .repo-card { background: #111; padding: 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.06); text-decoration: none; display: block; transition: all 0.3s ease; box-sizing: border-box; }
        .repo-card:hover { border-color: rgba(163,255,18,0.3); transform: translateY(-4px); }
        .card-base { background: #111111; padding: clamp(18px, 4vw, 40px); border-radius: 24px; border: 1px solid rgba(255,255,255,0.06); position: relative; box-sizing: border-box; width: 100%; }
        .gh-wrapper { background: #0d0d0d; padding: clamp(20px, 5vw, 48px); border-radius: 32px; border: 1px solid rgba(255,255,255,0.05); position: relative; box-sizing: border-box; width: 100%; }
      `}</style>

      <div className="journey-inner">
        <div style={{ marginBottom: "clamp(36px, 6vw, 60px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ color: "#A3FF12", fontSize: "clamp(11px, 2vw, 14px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em" }}>THE PATH ——</span>
            <div style={{ width: "80px", height: "1px", background: "rgba(163, 255, 18, 0.3)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px, 7vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "16px", lineHeight: 1.1 }}>
            My <span style={{ color: "#A3FF12" }}>Journey</span>
          </h2>
        </div>

        <div className="journey-row1">
          {/* Achievement Card */}
          <div className="card-base" style={{ borderLeft: "4px solid #A3FF12", display: "flex", flexDirection: "column" }}>
            <span style={{ position: "absolute", top: "16px", right: "16px", fontSize: "clamp(40px, 10vw, 80px)", fontWeight: 900, color: "rgba(163,255,18,0.06)", lineHeight: 1, pointerEvents: "none" }}>2025</span>
            <div style={{ width: "52px", height: "52px", background: "rgba(163, 255, 18, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "24px", marginBottom: "24px" }}>
              <FaTrophy />
            </div>
            <h3 style={{ fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 900, color: "#A3FF12", marginBottom: "6px" }}>2nd Place</h3>
            <h4 style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>Invento Competition</h4>
            <p style={{ color: "#71717a", fontSize: "clamp(12px, 2vw, 14px)", lineHeight: 1.6, marginBottom: "20px" }}>Recognized for innovative AI-powered solution at the regional technology competition.</p>
          </div>

          {/* Education Card */}
          <div className="card-base">
            <div className="edu-header">
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.05)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "22px" }}>
                  <HiOutlineAcademicCap />
                </div>
                <div>
                  <h3 style={{ fontSize: "clamp(15px, 3.5vw, 22px)", fontWeight: 900, color: "#fff", lineHeight: 1.25, marginBottom: "4px" }}>{currentEdu.degree}</h3>
                  <p style={{ fontSize: "13px", color: "#71717a", fontWeight: 600 }}>{currentEdu.school}</p>
                </div>
              </div>
              <div style={{ background: "#A3FF12", color: "#000", padding: "5px 12px", borderRadius: "999px", fontSize: "10px", fontWeight: 900, textTransform: "uppercase" }}>{currentEdu.status}</div>
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

            <p style={{ color: "#a1a1aa", fontSize: "13px", fontWeight: 700, marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <HiOutlineLightningBolt color="#A3FF12" /> {currentEdu.year} · {currentEdu.location}
            </p>

            <div className="edu-grid">
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px", color: "#A3FF12" }}>
                  <HiOutlineBookOpen />
                  <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase" }}>Coursework</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {currentEdu.coursework.map((item, i) => (
                    <li key={i} style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: 600 }}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px", color: "#A3FF12" }}>
                  <HiOutlineUserGroup />
                  <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase" }}>Activities</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {currentEdu.activities.map((item, i) => (
                    <li key={i} style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: 600 }}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="gh-wrapper">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#A3FF12"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              <h3 style={{ fontSize: "20px", fontWeight: 800 }}>GitHub Activity</h3>
            </div>
            {ghData && <a href={ghData.profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#A3FF12", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>View Profile →</a>}
          </div>

          {ghLoading ? <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#71717a" }}>Loading...</div> : ghError || !ghData ? <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#f44" }}>Error.</div> : (
            <>
              <div className="gh-stats">
                {[{ label: "Repos", val: `${ghData.publicRepos}+` }, { label: "Followers", val: ghData.followers }, { label: "Stars", val: ghData.totalStars }, { label: "Languages", val: ghData.languages.length }].map((stat, i) => (
                  <div key={i} style={{ background: "#111", padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                    <p style={{ fontSize: "32px", fontWeight: 900, color: "#A3FF12", margin: "0 0 4px" }}>{stat.val}</p>
                    <p style={{ fontSize: "10px", color: "#555", fontWeight: 700, textTransform: "uppercase" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: "28px" }}>
                <a href={ghData.profileUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", background: "#A3FF12", color: "#000", borderRadius: "999px", padding: "12px 28px", fontSize: "13px", fontWeight: 800, textDecoration: "none" }}>github.com/sahilhode ↗</a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}