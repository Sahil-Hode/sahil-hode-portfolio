"use client";

import React, { useState, useEffect } from "react";
import { FaTrophy } from "react-icons/fa";
import {
  HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineBookOpen,
  HiOutlineUserGroup,
} from "react-icons/hi";

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
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const coursework = ["Data Structures", "Databases", "Web Development", "Programming Fund."];
  const activities = ["Hackathons", "Technical Events", "Project-based Learn"];

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(true);
        else setData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="journey"
      style={{
        background: "#060606",
        color: "#fff",
        padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 24px)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <style>{`
        .journey-inner {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── Row 1 grid ── */
        .journey-row1 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (min-width: 1024px) {
          .journey-row1 {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ── Education header row ── */
        .edu-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 28px;
        }
        @media (max-width: 480px) {
          .edu-header {
            grid-template-columns: 1fr;
          }
        }

        /* ── Coursework / Activities grid ── */
        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 360px) {
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── GitHub stat cards ── */
        .gh-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 28px;
        }
        @media (min-width: 640px) {
          .gh-stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ── Recent Repos grid ── */
        .repos-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 540px) {
          .repos-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 900px) {
          .repos-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── Repo card hover ── */
        .repo-card {
          background: #111;
          padding: 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          display: block;
          transition: border-color 0.3s ease, transform 0.3s ease;
          box-sizing: border-box;
        }
        .repo-card:hover {
          border-color: rgba(163,255,18,0.3);
          transform: translateY(-4px);
        }

        /* ── Clamp helpers ── */
        .card-base {
          background: #111111;
          padding: clamp(18px, 4vw, 40px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.06);
          position: relative;
          box-sizing: border-box;
          width: 100%;
        }

        .gh-wrapper {
          background: #0d0d0d;
          padding: clamp(20px, 5vw, 48px);
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
          box-sizing: border-box;
          width: 100%;
        }
      `}</style>

      <div className="journey-inner">

        {/* ── Section Header ── */}
        <div style={{ marginBottom: "clamp(36px, 6vw, 60px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <span style={{ color: "#A3FF12", fontSize: "clamp(11px, 2vw, 14px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em" }}>THE PATH ——</span>
            <div style={{ width: "80px", height: "1px", background: "rgba(163, 255, 18, 0.3)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px, 7vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "16px", lineHeight: 1.1 }}>
            My <span style={{ color: "#A3FF12" }}>Journey</span>
          </h2>
        </div>

        {/* ── Row 1: Achievement + Education ── */}
        <div className="journey-row1">

          {/* Achievement Card */}
          <div className="card-base" style={{ borderLeft: "4px solid #A3FF12", display: "flex", flexDirection: "column" }}>
            <span style={{
              position: "absolute", top: "16px", right: "16px",
              fontSize: "clamp(40px, 10vw, 80px)", fontWeight: 900,
              color: "rgba(163,255,18,0.06)", lineHeight: 1, pointerEvents: "none",
              userSelect: "none",
            }}>2025</span>

            <div style={{
              width: "52px", height: "52px", minWidth: "52px",
              background: "rgba(163, 255, 18, 0.1)", borderRadius: "16px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#A3FF12", fontSize: "24px", marginBottom: "24px", flexShrink: 0,
            }}>
              <FaTrophy />
            </div>

            <h3 style={{ fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 900, color: "#A3FF12", marginBottom: "6px", lineHeight: 1.1 }}>2nd Place</h3>
            <h4 style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>Invento Competition</h4>
            <p style={{ color: "#71717a", fontSize: "clamp(12px, 2vw, 14px)", lineHeight: 1.6, marginBottom: "20px" }}>
              Recognized for innovative AI-powered solution at the regional technology competition.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              <span style={{ padding: "5px 12px", background: "rgba(255,255,255,0.03)", borderRadius: "999px", fontSize: "11px", fontWeight: 700, color: "#a1a1aa", border: "1px solid rgba(255,255,255,0.05)" }}>Innovative Problem Solving</span>
              <span style={{ padding: "5px 12px", background: "rgba(163, 255, 18, 0.05)", borderRadius: "999px", fontSize: "11px", fontWeight: 800, color: "#A3FF12", border: "1px solid rgba(163, 255, 18, 0.1)" }}>AI Innovation · 2025</span>
            </div>

            <a href="#" style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 800, textDecoration: "none", marginTop: "auto" }}>View Certificate →</a>
          </div>

          {/* Education Card */}
          <div className="card-base">
            {/* Header row: icon+text | badge */}
            <div className="edu-header">
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <div style={{
                  width: "48px", height: "48px", minWidth: "48px", minHeight: "48px",
                  background: "rgba(255,255,255,0.05)", borderRadius: "14px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: "22px", border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <HiOutlineAcademicCap />
                </div>
                <div>
                  <h3 style={{ fontSize: "clamp(15px, 3.5vw, 22px)", fontWeight: 900, color: "#fff", lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: "4px" }}>
                    Bachelor of Computer Application
                  </h3>
                  <p style={{ fontSize: "13px", color: "#71717a", fontWeight: 600, margin: 0 }}>Sahyog College, KKU</p>
                </div>
              </div>
              <div style={{
                background: "#A3FF12", color: "#000",
                padding: "5px 12px", borderRadius: "999px",
                fontSize: "10px", fontWeight: 900, textTransform: "uppercase",
                letterSpacing: "0.05em", whiteSpace: "nowrap",
                alignSelf: "flex-start", flexShrink: 0,
              }}>Currently Pursuing</div>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 800, color: "#a1a1aa", marginBottom: "8px" }}>
                <span>Year 1 of 3</span>
                <span style={{ color: "#A3FF12" }}>33%</span>
              </div>
              <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{ width: "33%", height: "100%", background: "#A3FF12", borderRadius: "999px" }} />
              </div>
            </div>

            <p style={{ color: "#a1a1aa", fontSize: "13px", fontWeight: 700, marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <HiOutlineLightningBolt color="#A3FF12" />
              2024 → 2027 · Thane, Maharashtra
            </p>

            {/* Coursework / Activities — always 2-col, wraps on tiny screens */}
            <div className="edu-grid">
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "clamp(12px, 3vw, 16px)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px", color: "#A3FF12" }}>
                  <HiOutlineBookOpen style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>Coursework</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {coursework.map((item, i) => (
                    <li key={i} style={{ fontSize: "clamp(11px, 2.5vw, 12px)", color: "#a1a1aa", fontWeight: 600, lineHeight: 1.4 }}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", padding: "clamp(12px, 3vw, 16px)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px", color: "#A3FF12" }}>
                  <HiOutlineUserGroup style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>Activities</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {activities.map((item, i) => (
                    <li key={i} style={{ fontSize: "clamp(11px, 2.5vw, 12px)", color: "#a1a1aa", fontWeight: 600, lineHeight: 1.4 }}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Row 2: GitHub Activity ── */}
        <div className="gh-wrapper">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "clamp(24px, 5vw, 40px)", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#A3FF12" style={{ flexShrink: 0 }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <h3 style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 800, color: "#fff", margin: 0 }}>GitHub Activity</h3>
            </div>
            {data && (
              <a href={data.profileUrl} target="_blank" rel="noopener noreferrer"
                style={{ color: "#A3FF12", fontSize: "13px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
                View Profile →
              </a>
            )}
          </div>

          {loading ? (
            <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#71717a" }}>
              Loading GitHub Data...
            </div>
          ) : error || !data ? (
            <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#f44" }}>
              Failed to load GitHub data. Please try again later.
            </div>
          ) : (
            <>
              {/* Stat Cards */}
              <div className="gh-stats">
                {[
                  { label: "Repos", val: `${data.publicRepos}+` },
                  { label: "Followers", val: data.followers },
                  { label: "Stars", val: data.totalStars },
                  { label: "Languages", val: data.languages.length },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: "#111", padding: "clamp(14px, 3vw, 20px)",
                    borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center",
                    boxSizing: "border-box",
                  }}>
                    <p style={{ fontSize: "clamp(24px, 6vw, 32px)", fontWeight: 900, color: "#A3FF12", margin: "0 0 4px", lineHeight: 1 }}>{stat.val}</p>
                    <p style={{ fontSize: "10px", color: "#555", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Top Languages</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {data.languages.map((lang) => (
                    <div key={lang.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 600, marginBottom: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: langColors[lang.name] || '#A3FF12', flexShrink: 0 }} />
                          <span style={{ color: "#ccc" }}>{lang.name}</span>
                        </div>
                        <span style={{ color: "#555" }}>{lang.percentage}%</span>
                      </div>
                      <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "999px", overflow: "hidden" }}>
                        <div style={{
                          width: `${lang.percentage}%`, height: "100%",
                          background: langColors[lang.name] || '#A3FF12',
                          borderRadius: "999px", transition: "width 1s ease",
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Repos */}
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Recent Projects</p>
                <div className="repos-grid">
                  {data.recentRepos.map((repo) => (
                    <a key={repo.name} href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", gap: "8px" }}>
                        <h4 style={{ color: "#fff", fontSize: "13px", fontWeight: 700, margin: 0, wordBreak: "break-word", flex: 1 }}>
                          {repo.name.length > 20 ? repo.name.slice(0, 20) + '…' : repo.name}
                        </h4>
                        {repo.language && (
                          <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: langColors[repo.language] || '#A3FF12' }} />
                            <span style={{ fontSize: "10px", color: "#555" }}>{repo.language}</span>
                          </div>
                        )}
                      </div>
                      <p style={{
                        fontSize: "12px", color: "#555", lineHeight: 1.5, marginBottom: "10px",
                        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                      }}>
                        {repo.description || "No description provided."}
                      </p>
                      <div style={{ display: "flex", gap: "12px", color: "#555", fontSize: "11px" }}>
                        <span>⭐ {repo.stars}</span>
                        <span>🔀 {repo.forks}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Profile Button */}
              <div style={{ textAlign: "center", marginTop: "28px" }}>
                <a href={data.profileUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#A3FF12", color: "#000", borderRadius: "999px",
                  padding: "12px clamp(18px, 5vw, 28px)", fontSize: "clamp(11px, 2.5vw, 13px)",
                  fontWeight: 800, textDecoration: "none", letterSpacing: "0.02em",
                }}>
                  github.com/sahilhode ↗
                </a>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}