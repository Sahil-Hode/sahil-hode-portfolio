"use client";
 
 import React, { useState, useEffect } from "react";
 import { FaTrophy, FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
 import { TbGitBranch } from "react-icons/tb";
 import { 
   HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineBookOpen, 
   HiOutlineUserGroup, HiOutlineDuplicate, HiOutlineCode, 
   HiOutlineStar, HiOutlineClock
 } from "react-icons/hi";
 
 export default function Journey() {
   const [githubData, setGithubData] = useState<any>(null);
   const [repos, setRepos] = useState<any[]>([]);
   const [languages, setLanguages] = useState<any>({});
   const [loading, setLoading] = useState(true);
 
   const coursework = ["Data Structures", "Databases", "Web Development", "Programming Fund."];
   const activities = ["Hackathons", "Technical Events", "Project-based Learn"];
 
   useEffect(() => {
     async function fetchGithub() {
       try {
         const userRes = await fetch('https://api.github.com/users/sahilhode');
         const userData = await userRes.json();
         setGithubData(userData);
 
         const reposRes = await fetch('https://api.github.com/users/sahilhode/repos?sort=updated&per_page=100');
         const reposData = await reposRes.json();
         
         // Get 3 most recent repos
         setRepos(reposData.slice(0, 3));
 
         // Aggregate languages
         const langs: any = {};
         reposData.forEach((repo: any) => {
           if (repo.language) {
             langs[repo.language] = (langs[repo.language] || 0) + 1;
           }
         });
         setLanguages(langs);
       } catch (error) {
         console.error("Error fetching GitHub data:", error);
       } finally {
         setLoading(false);
       }
     }
     fetchGithub();
   }, []);
 
   const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
   const totalLangs = Object.keys(languages).length;
   const topLangs = Object.entries(languages)
     .sort(([, a]: any, [, b]: any) => b - a)
     .slice(0, 3);
   const totalLangCount = Object.values(languages).reduce((a: any, b: any) => a + b, 0) as number;
 
   return (
     <section id="journey" style={{ background: "#060606", color: "#fff", padding: "clamp(80px, 10vw, 120px) 24px", position: "relative", overflow: "hidden" }}>
       <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
         
         {/* Section Header */}
         <div style={{ marginBottom: "60px" }}>
           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
             <span style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em" }}>THE PATH ——</span>
             <div style={{ width: "80px", height: "1px", background: "rgba(163, 255, 18, 0.3)" }} />
           </div>
           <h2 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "16px" }}>
             My <span style={{ color: "#A3FF12" }}>Journey</span>
           </h2>
         </div>
 
         {/* Row 1: Achievement & Education */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
           {/* Achievement Card */}
           <div style={{ 
             background: "#111111", padding: "40px", borderRadius: "24px",
             border: "1px solid rgba(255,255,255,0.06)", borderLeft: "4px solid #A3FF12",
             position: "relative", display: "flex", flexDirection: "column"
           }}>
             {/* Year Ghost Text */}
             <span style={{ 
               position: "absolute", top: "20px", right: "20px", fontSize: "80px", fontWeight: 900, 
               color: "rgba(163,255,18,0.06)", lineHeight: 1, pointerEvents: "none" 
             }}>2025</span>
 
             <div style={{ width: "56px", height: "56px", background: "rgba(163, 255, 18, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "28px", marginBottom: "32px" }}>
               <FaTrophy />
             </div>
             
             <h3 style={{ fontSize: "32px", fontWeight: 900, color: "#A3FF12", marginBottom: "8px" }}>2nd Place</h3>
             <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>Invento Competition</h4>
             <p style={{ color: "#71717a", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px", maxWidth: "340px" }}>
               Recognized for innovative AI-powered solution at the regional technology competition.
             </p>
             
             <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
               <span style={{ padding: "6px 14px", background: "rgba(255,255,255,0.03)", borderRadius: "999px", fontSize: "11px", fontWeight: 700, color: "#a1a1aa", border: "1px solid rgba(255,255,255,0.05)" }}>Innovative Problem Solving</span>
               <span style={{ padding: "6px 14px", background: "rgba(163, 255, 18, 0.05)", borderRadius: "999px", fontSize: "11px", fontWeight: 800, color: "#A3FF12", border: "1px solid rgba(163, 255, 18, 0.1)" }}>AI Innovation · 2025</span>
             </div>
 
             <a href="#" style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 800, textDecoration: "none", marginTop: "auto" }}>View Certificate →</a>
           </div>
 
           {/* Education Card */}
           <div style={{ 
             background: "#111111", padding: "40px", borderRadius: "24px",
             border: "1px solid rgba(255,255,255,0.06)", position: "relative"
           }}>
             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
               <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                 <div style={{ width: "54px", height: "54px", background: "rgba(255,255,255,0.03)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "24px" }}>
                   <HiOutlineAcademicCap />
                 </div>
                 <div>
                   <h3 style={{ fontSize: "20px", fontWeight: 900, color: "#fff" }}>Bachelor of Computer Application</h3>
                   <p style={{ fontSize: "14px", color: "#71717a", fontWeight: 600 }}>Sahyog College, KKU</p>
                 </div>
               </div>
               <div style={{ background: "#A3FF12", color: "#000", padding: "6px 14px", borderRadius: "999px", fontSize: "10px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>Currently Pursuing</div>
             </div>
 
             {/* Degree Progress Bar */}
             <div style={{ marginBottom: "32px" }}>
               <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 800, color: "#a1a1aa", marginBottom: "8px" }}>
                 <span>Year 1 of 3</span>
                 <span style={{ color: "#A3FF12" }}>33%</span>
               </div>
               <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "999px", overflow: "hidden" }}>
                 <div style={{ width: "33%", height: "100%", background: "#A3FF12", borderRadius: "999px" }} />
               </div>
             </div>
 
             <p style={{ color: "#a1a1aa", fontSize: "14px", fontWeight: 700, marginBottom: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
               <HiOutlineLightningBolt color="#A3FF12" /> 2024 → 2027  ·  Thane, Maharashtra
             </p>
 
             <div className="grid grid-cols-2 gap-4">
               <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#A3FF12" }}>
                   <HiOutlineBookOpen />
                   <span style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase" }}>Coursework</span>
                 </div>
                 <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                   {coursework.map((item, i) => (
                     <li key={i} style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: 600 }}>• {item}</li>
                   ))}
                 </ul>
               </div>
               <div style={{ background: "rgba(255,255,255,0.02)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#A3FF12" }}>
                   <HiOutlineUserGroup />
                   <span style={{ fontSize: "11px", fontWeight: 900, textTransform: "uppercase" }}>Activities</span>
                 </div>
                 <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                   {activities.map((item, i) => (
                     <li key={i} style={{ fontSize: "12px", color: "#a1a1aa", fontWeight: 600 }}>• {item}</li>
                   ))}
                 </ul>
               </div>
             </div>
           </div>
         </div>
 
         {/* Row 2: GitHub Activity Redesign */}
         <div style={{ 
           background: "#0d0d0d", padding: "clamp(24px, 5vw, 48px)", borderRadius: "32px",
           border: "1px solid rgba(255,255,255,0.05)", position: "relative"
         }}>
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
             <h3 style={{ fontSize: "24px", fontWeight: 900, display: "flex", alignItems: "center", gap: "12px" }}>
               <FaGithub /> GitHub Activity
             </h3>
             <a href="https://github.com/Sahil-Hode" target="_blank" rel="noopener noreferrer" style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 700, textDecoration: "none" }}>
               View Profile →
             </a>
           </div>
 
           {loading ? (
             <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#71717a" }}>
               Loading GitHub Data...
             </div>
           ) : (
             <>
               {/* Stat Cards */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                 {[
                   { label: "Repos", val: `${githubData?.public_repos || 0}+` },
                   { label: "Followers", val: githubData?.followers || 0 },
                   { label: "Stars", val: totalStars || 0 },
                   { label: "Languages", val: totalLangs || 0 }
                 ].map((stat, i) => (
                   <div key={i} style={{ 
                     background: "#111", padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)",
                     textAlign: "center"
                   }}>
                     <p style={{ fontSize: "36px", fontWeight: 900, color: "#A3FF12", margin: "0 0 4px" }}>{stat.val}</p>
                     <p style={{ fontSize: "11px", color: "#555", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.label}</p>
                   </div>
                 ))}
               </div>
 
               {/* Languages Bar Section */}
               <div style={{ marginBottom: "48px" }}>
                 <p style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Top Languages</p>
                 <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                   {topLangs.map(([lang, count]: any) => {
                     const percent = Math.round((count / totalLangCount) * 100);
                     return (
                       <div key={lang}>
                         <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>
                           <span style={{ color: "#fff" }}>{lang}</span>
                           <span style={{ color: "#555" }}>{percent}%</span>
                         </div>
                         <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "999px" }}>
                           <div style={{ width: `${percent}%`, height: "100%", background: "#A3FF12", borderRadius: "999px", transition: "width 1s ease" }} />
                         </div>
                       </div>
                     );
                   })}
                 </div>
               </div>
 
               {/* Recent Repos */}
               <div>
                 <p style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Recent Projects</p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {repos.map((repo: any) => (
                     <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ 
                       background: "#111", padding: "18px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.06)",
                       textDecoration: "none", transition: "all 0.3s ease"
                     }} className="glow-hover">
                       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                         <h4 style={{ color: "#fff", fontSize: "15px", fontWeight: 800, margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                           <TbGitBranch color="#A3FF12" /> {repo.name}
                         </h4>
                         <span style={{ fontSize: "10px", color: "#555", fontWeight: 800, textTransform: "uppercase" }}>{repo.language}</span>
                       </div>
                       <p style={{ fontSize: "12px", color: "#71717a", lineHeight: 1.5, marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                         {repo.description || "No description provided."}
                       </p>
                       <div style={{ display: "flex", gap: "16px", color: "#555", fontSize: "11px", fontWeight: 700 }}>
                         <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                           <HiOutlineStar /> {repo.stargazers_count}
                         </span>
                         <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                           <FaCodeBranch /> {repo.forks_count}
                         </span>
                         <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
                           <HiOutlineClock /> {new Date(repo.updated_at).toLocaleDateString()}
                         </span>
                       </div>
                     </a>
                   ))}
                 </div>
               </div>
 
               {/* Final Profile Button */}
               <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
                 <a href="https://github.com/sahilhode" target="_blank" rel="noopener noreferrer" style={{
                   background: "#A3FF12", color: "#000", padding: "16px 32px", borderRadius: "12px",
                   fontWeight: 900, fontSize: "15px", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px",
                   boxShadow: "0 10px 20px rgba(163,255,18,0.15)"
                 }} className="hover:scale-105 transition-transform">
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
