"use client";
 
 import React, { useState } from "react";
 import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight } from "react-icons/fa";
 import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiOutlineDuplicate, HiCheckCircle, HiXCircle } from "react-icons/hi";
 
 export default function Contact() {
   const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
   const [loading, setLoading] = useState(false);
   const [status, setStatus] = useState<{ type: "success" | "error" | null, message: string }>({ type: null, message: "" });
   const [focusedField, setFocusedField] = useState<string | null>(null);
   const [copied, setCopied] = useState<string | null>(null);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setLoading(true);
     setStatus({ type: null, message: "" });
 
     try {
       const res = await fetch("/api/contact", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
       });
       const data = await res.json();
       
       if (res.ok) {
         setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
         setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
       } else {
         setStatus({ type: "error", message: data.error || "Something went wrong." });
       }
     } catch (err) {
       setStatus({ type: "error", message: "Failed to send message. Try again later." });
     } finally {
       setLoading(false);
     }
   };
 
   const handleCopy = (text: string, label: string) => {
     navigator.clipboard.writeText(text);
     setCopied(label);
     setTimeout(() => setCopied(null), 2000);
   };
 
   const socials = [
     { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/sahil-hode" },
     { icon: <FaGithub />, label: "GitHub", link: "https://github.com/Sahil-Hode" },
     { icon: <FaWhatsapp />, label: "WhatsApp", link: "https://wa.me/918652601566" }
   ];
 
   return (
     <section id="contact" style={{ background: "#060606", color: "#fff", padding: "clamp(60px, 10vw, 120px) 24px", position: "relative", overflow: "hidden" }}>
       <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
         
         {/* Availability Badge */}
         <div style={{ display: "flex", marginBottom: "40px" }} className="justify-center lg:justify-start">
           <div style={{ 
             background: "rgba(163, 255, 18, 0.05)", padding: "8px 16px", borderRadius: "999px", 
             border: "1px solid rgba(163, 255, 18, 0.2)", display: "flex", alignItems: "center", gap: "10px" 
           }}>
             <div className="w-2 h-2 rounded-full bg-[#A3FF12] animate-pulse-green" />
             <span style={{ fontSize: "12px", fontWeight: 800, color: "#A3FF12", textTransform: "uppercase", letterSpacing: "0.1em" }}>Available for work</span>
           </div>
         </div>
 
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
           {/* Vertical Divider (Desktop Only) */}
           <div className="hidden lg:block" style={{ position: "absolute", left: "50%", top: "0", bottom: "0", width: "1px", background: "rgba(163, 255, 18, 0.1)", transform: "translateX(-50%)" }} />
           
           {/* Left Column */}
           <div style={{ position: "relative", width: "100%" }}>
             {/* Header */}
             <div style={{ marginBottom: "60px" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                 <span style={{ color: "#A3FF12", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.25em" }}>GET IN TOUCH</span>
                 <div style={{ flex: 1, height: "1px", background: "rgba(163, 255, 18, 0.2)" }} />
               </div>
               <h2 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.04em" }}>
                 Let&apos;s <span style={{ color: "#A3FF12" }}>Connect</span>
               </h2>
               <p style={{ color: "#a1a1aa", fontSize: "18px", maxWidth: "480px", lineHeight: 1.6, marginBottom: "32px" }}>
                 I&apos;m always open to discussing new opportunities, exciting projects, or just having a chat.
               </p>
               <div style={{ color: "#71717a", fontSize: "14px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}>
                 <HiOutlineClock className="text-[#A3FF12]" /> Avg. response: &lt; 2 hours
               </div>
             </div>
 
             {/* Info Cards */}
             <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
               {/* Email Card (Highlighted) */}
               <div style={{ 
                 background: "rgba(255,255,255,0.02)", padding: "24px", borderRadius: "20px",
                 border: "1px solid rgba(255,255,255,0.05)", borderLeft: "4px solid #A3FF12",
                 display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"
               }} className="glow-hover">
                 <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                   <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(163, 255, 18, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "20px" }}>
                     <HiOutlineMail />
                   </div>
                   <div>
                     <p style={{ color: "#fff", fontSize: "16px", fontWeight: 800, marginBottom: "4px" }}>Email</p>
                     <p style={{ color: "#a1a1aa", fontSize: "14px", marginBottom: "4px" }}>sahilhode67@gmail.com</p>
                     <p style={{ color: "#A3FF12", fontSize: "11px", fontWeight: 800, textTransform: "uppercase" }}>Replies within 24hrs</p>
                   </div>
                 </div>
                 <button 
                   onClick={() => handleCopy("sahilhode67@gmail.com", "Email")}
                   style={{ background: "transparent", border: "none", color: copied === "Email" ? "#A3FF12" : "#71717a", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700 }}
                 >
                   {copied === "Email" ? "Copied!" : <HiOutlineDuplicate size={18} />}
                 </button>
               </div>
 
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* Phone Card */}
                 <div style={{ 
                   background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "20px",
                   border: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center"
                 }} className="glow-hover">
                   <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                     <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(163, 255, 18, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "18px" }}>
                       <HiOutlinePhone />
                     </div>
                     <div>
                       <p style={{ color: "#fff", fontSize: "14px", fontWeight: 800, margin: 0 }}>Phone</p>
                       <p style={{ color: "#a1a1aa", fontSize: "13px", margin: 0 }}>+91 8652601566</p>
                     </div>
                   </div>
                   <button onClick={() => handleCopy("+91 8652601566", "Phone")} style={{ background: "transparent", border: "none", color: "#71717a", cursor: "pointer" }}>
                     <HiOutlineDuplicate size={16} />
                   </button>
                 </div>
 
                 {/* Location Card */}
                 <div style={{ 
                   background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "20px",
                   border: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: "16px", alignItems: "center"
                 }} className="glow-hover">
                   <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(163, 255, 18, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#A3FF12", fontSize: "18px" }}>
                     <HiOutlineLocationMarker />
                   </div>
                   <div>
                     <p style={{ color: "#fff", fontSize: "14px", fontWeight: 800, margin: 0 }}>Location</p>
                     <p style={{ color: "#a1a1aa", fontSize: "13px", margin: 0 }}>Mumbai, IN</p>
                   </div>
                 </div>
               </div>
 
               {/* Availability Card (Small) */}
               <div style={{ 
                 background: "rgba(255,255,255,0.02)", padding: "16px 24px", borderRadius: "16px",
                 border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "12px"
               }}>
                 <div className="w-2 h-2 rounded-full bg-[#A3FF12] animate-pulse-green" />
                 <span style={{ fontSize: "14px", fontWeight: 700, color: "#e4e4e7" }}>Open for Freelance & Full-time roles</span>
               </div>
             </div>
 
             {/* Socials as Pill Buttons */}
             <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
               {socials.map((soc, i) => (
                 <a 
                   key={i} 
                   href={soc.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   style={{ 
                     padding: "10px 20px", background: "rgba(255,255,255,0.03)", borderRadius: "999px",
                     display: "flex", alignItems: "center", gap: "10px", color: "#fff", fontSize: "14px", fontWeight: 700,
                     border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.3s ease", textDecoration: "none"
                   }} 
                   className="social-pill-btn"
                 >
                   <span style={{ fontSize: "18px" }}>{soc.icon}</span>
                   {soc.label}
                 </a>
               ))}
             </div>
           </div>
 
           {/* Right Column - Form Card */}
           <div style={{ 
             background: "#0d0d0d", padding: "clamp(24px, 5vw, 48px)", borderRadius: "32px",
             border: "1px solid rgba(163, 255, 18, 0.15)", position: "relative",
             boxShadow: "0 20px 60px rgba(0,0,0,0.5)", width: "100%"
           }}>
             <div style={{ marginBottom: "40px" }}>
               <span style={{ color: "#A3FF12", fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em" }}>Send a Message</span>
               <h3 style={{ fontSize: "28px", fontWeight: 900, marginTop: "8px" }}>Got a project? <br/>Let&apos;s talk about it.</h3>
             </div>
 
             <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Name */}
                 <div style={{ position: "relative" }}>
                   <input 
                     required type="text" 
                     value={formData.name} 
                     onChange={(e) => setFormData({...formData, name: e.target.value})} 
                     onFocus={() => setFocusedField("name")}
                     onBlur={() => setFocusedField(null)}
                     placeholder="Your Name"
                     style={{
                       background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)",
                       padding: "18px 20px", borderRadius: "14px", color: "#fff", outline: "none", fontSize: "15px", width: "100%",
                       transition: "all 0.3s ease"
                     }}
                     className="input-focus-glow"
                   />
                 </div>
                 
                 {/* Email */}
                 <div style={{ position: "relative" }}>
                   <input 
                     required type="email" 
                     value={formData.email} 
                     onChange={(e) => setFormData({...formData, email: e.target.value})} 
                     onFocus={() => setFocusedField("email")}
                     onBlur={() => setFocusedField(null)}
                     placeholder="Email Address"
                     style={{
                       background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)",
                       padding: "18px 20px", borderRadius: "14px", color: "#fff", outline: "none", fontSize: "15px", width: "100%",
                       transition: "all 0.3s ease"
                     }}
                     className="input-focus-glow"
                   />
                 </div>
               </div>
 
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Phone */}
                 <div style={{ position: "relative" }}>
                   <input 
                     type="tel" 
                     value={formData.phone} 
                     onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                     onFocus={() => setFocusedField("phone")}
                     onBlur={() => setFocusedField(null)}
                     placeholder="Phone"
                     style={{
                       background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)",
                       padding: "18px 20px", borderRadius: "14px", color: "#fff", outline: "none", fontSize: "15px", width: "100%",
                       transition: "all 0.3s ease"
                     }}
                     className="input-focus-glow"
                   />
                 </div>
 
                 {/* Subject */}
                 <div style={{ position: "relative" }}>
                   <input 
                     type="text" 
                     value={formData.subject} 
                     onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                     onFocus={() => setFocusedField("subject")}
                     onBlur={() => setFocusedField(null)}
                     placeholder="Project Subject"
                     style={{
                       background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)",
                       padding: "18px 20px", borderRadius: "14px", color: "#fff", outline: "none", fontSize: "15px", width: "100%",
                       transition: "all 0.3s ease"
                     }}
                     className="input-focus-glow"
                   />
                 </div>
               </div>
 
               {/* Message */}
               <div style={{ position: "relative" }}>
                 <textarea 
                   required 
                   value={formData.message} 
                   onChange={(e) => setFormData({...formData, message: e.target.value.slice(0, 500)})} 
                   onFocus={() => setFocusedField("message")}
                   onBlur={() => setFocusedField(null)}
                   placeholder="Your Message"
                   rows={5} 
                   style={{
                     background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)",
                     padding: "18px 20px", borderRadius: "18px", color: "#fff", outline: "none", fontSize: "15px",
                     resize: "none", width: "100%", transition: "all 0.3s ease"
                   }}
                   className="input-focus-glow"
                 />
                 <div style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "10px", color: "#555", fontWeight: 800 }}>
                   {formData.message.length}/500
                 </div>
               </div>
 
                {status.message && (
                  <div style={{ 
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "16px", borderRadius: "12px", 
                    background: status.type === "error" ? "rgba(255,68,68,0.1)" : "rgba(163,255,18,0.1)",
                    border: `1px solid ${status.type === "error" ? "rgba(255,68,68,0.2)" : "rgba(163,255,18,0.2)"}`,
                    color: status.type === "error" ? "#ff4444" : "#A3FF12", 
                    fontSize: "14px", fontWeight: 600 
                  }}>
                    {status.type === "error" ? <HiXCircle size={20} /> : <HiCheckCircle size={20} />}
                    {status.message}
                  </div>
                )}
                <button 
                  type="submit" 
                  disabled={loading} 
                  className={`button-animated ${loading || status.type === 'success' ? 'active' : ''} ${status.type === 'success' ? 'sent' : ''}`}
                  style={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '68px',
                    minWidth: '200px'
                  }}
                >
                  <div className="outline" />
                  <div className="state state--default" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="icon">
                      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{ filter: 'url(#shadow)' }}>
                          <path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="currentColor" />
                          <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="currentColor" />
                        </g>
                        <defs>
                          <filter id="shadow">
                            <feDropShadow dx={0} dy={1} stdDeviation="0.6" floodOpacity="0.5" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <p>
                      {["S", "e", "n", "d", "\u00A0", "M", "e", "s", "s", "a", "g", "e"].map((char, i) => (
                        <span key={i} style={{ "--i": i } as React.CSSProperties}>{char}</span>
                      ))}
                    </p>
                  </div>
                  <div className="state state--sent" style={{ display: status.type === 'success' ? 'flex' : 'none', alignItems: 'center' }}>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" width="1em" strokeWidth="0.5px" stroke="black">
                        <g style={{ filter: 'url(#shadow)' }}>
                          <path fill="currentColor" d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" />
                          <path fill="currentColor" d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" />
                        </g>
                      </svg>
                    </div>
                    <p>
                      {["S", "e", "n", "t"].map((char, i) => (
                        <span key={i} style={{ "--i": i + 5 } as React.CSSProperties}>{char}</span>
                      ))}
                    </p>
                  </div>
                </button>
             </form>
           </div>
         </div>
       </div>
 
       <style jsx>{`
          .button-animated {
            --primary: #ffffff;
            --neutral-1: #A3FF12;
            --neutral-2: #8edb10;
            --radius: 14px;

            cursor: pointer;
            border-radius: var(--radius);
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
            border: none;
            box-shadow: 0 0.5px 0.5px 1px rgba(255, 255, 255, 0.2),
              0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 5px 0px rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            transition: all 0.3s ease;
            min-width: 200px;
            padding: 20px;
            height: 68px;
            font-family: inherit;
            font-style: normal;
            font-size: 18px;
            font-weight: 600;
            background: transparent;
            width: fit-content;
          }
          .button-animated:hover {
            transform: scale(1.02);
            box-shadow: 0 0 1px 2px rgba(163, 255, 18, 0.4),
              0 15px 30px rgba(0, 0, 0, 0.3), 0 10px 3px -3px rgba(0, 0, 0, 0.04);
          }
          .button-animated:active {
            transform: scale(1);
            box-shadow: 0 0 1px 2px rgba(163, 255, 18, 0.3),
              0 10px 3px -3px rgba(0, 0, 0, 0.2);
          }
          .button-animated:after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: var(--radius);
            border: 2.5px solid transparent;
            background: linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
              linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.3))
                border-box;
            z-index: 0;
            transition: all 0.4s ease;
          }
          .button-animated:hover::after {
            transform: scale(1.05, 1.1);
            box-shadow: inset 0 -1px 3px 0 rgba(255, 255, 255, 1);
          }
          .button-animated::before {
            content: "";
            inset: 7px 6px 6px 6px;
            position: absolute;
            background: linear-gradient(to top, var(--neutral-1), var(--neutral-2));
            border-radius: 30px;
            filter: blur(0.5px);
            z-index: 2;
          }
          .state p {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
          }
          .state .icon {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            transform: scale(1.25);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .state .icon svg {
            overflow: visible;
          }

          /* Outline */
          .outline {
            position: absolute;
            border-radius: inherit;
            overflow: hidden;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.4s ease;
            inset: -2px -3.5px;
          }
          .outline::before {
            content: "";
            position: absolute;
            inset: -100%;
            background: conic-gradient(
              from 180deg,
              transparent 60%,
              white 80%,
              transparent 100%
            );
            animation: spin 2s linear infinite;
            animation-play-state: paused;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .button-animated:hover .outline {
            opacity: 1;
          }
          .button-animated:hover .outline::before {
            animation-play-state: running;
          }

          /* Letters */
          .state p span {
            display: block;
            opacity: 0;
            animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
            color: #000;
          }
          .button-animated:hover p span {
            opacity: 1;
            animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
          }
          .button-animated.active p span {
            opacity: 1;
            animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
          }
          @keyframes wave {
            30% { opacity: 1; transform: translateY(4px) translateX(0) rotate(0); }
            50% { opacity: 1; transform: translateY(-3px) translateX(0) rotate(0); color: var(--primary); }
            100% { opacity: 1; transform: translateY(0) translateX(0) rotate(0); }
          }
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-20px) translateX(5px) rotate(-90deg); color: var(--primary); filter: blur(5px); }
            30% { opacity: 1; transform: translateY(4px) translateX(0) rotate(0); filter: blur(0); }
            50% { opacity: 1; transform: translateY(-3px) translateX(0) rotate(0); }
            100% { opacity: 1; transform: translateY(0) translateX(0) rotate(0); }
          }
          @keyframes disapear {
            from { opacity: 1; }
            to { opacity: 0; transform: translateX(5px) translateY(20px); color: var(--primary); filter: blur(5px); }
          }

          /* Plane */
          .state--default .icon svg {
            animation: land 0.6s ease forwards;
            color: #000;
          }
          .button-animated:hover .state--default .icon {
            transform: rotate(45deg) scale(1.25);
          }
          .button-animated.active .state--default svg {
            animation: takeOff 0.8s linear forwards;
          }
          .button-animated.active .state--default .icon {
            transform: rotate(0) scale(1.25);
          }
          @keyframes takeOff {
            0% { opacity: 1; }
            60% { opacity: 1; transform: translateX(70px) rotate(45deg) scale(2); }
            100% { opacity: 0; transform: translateX(160px) rotate(45deg) scale(0); }
          }
          @keyframes land {
            0% { transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2); opacity: 0; filter: blur(3px); }
            100% { transform: translateX(0) translateY(0) rotate(0); opacity: 1; filter: blur(0); }
          }

          /* Contrail */
          .state--default .icon:before {
            content: "";
            position: absolute;
            top: 50%;
            height: 2px;
            width: 0;
            left: -5px;
            background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
          }
          .button-animated.active .state--default .icon:before {
            animation: contrail 0.8s linear forwards;
          }
          @keyframes contrail {
            0% { width: 0; opacity: 1; }
            8% { width: 15px; }
            60% { opacity: 0.7; width: 80px; }
            100% { opacity: 0; width: 160px; }
          }

          /* States */
          .state {
            padding-left: 29px;
            z-index: 2;
            display: flex;
            position: relative;
          }
          .state--default span:nth-child(4) {
            margin-right: 5px;
          }
          .state--sent {
            display: none;
          }
          .state--sent svg {
            transform: scale(1.25);
            margin-right: 8px;
            color: #000;
          }
          .button-animated.active .state--default {
            position: absolute;
          }
          .button-animated.sent .state--sent {
            display: flex;
          }
          .button-animated.sent .state--sent span {
            opacity: 0;
            animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
          }
          .button-animated.sent .state--sent .icon svg {
            opacity: 0;
            animation: appear 1.2s ease forwards 0.8s;
          }
          @keyframes appear {
            0% { opacity: 0; transform: scale(4) rotate(-40deg); color: var(--primary); filter: blur(4px); }
            30% { opacity: 1; transform: scale(0.6); filter: blur(1px); }
            50% { opacity: 1; transform: scale(1.2); filter: blur(0); }
            100% { opacity: 1; transform: scale(1); }
          }

          .social-pill-btn:hover {
            background: #A3FF12 !important;
            color: #000 !important;
            border-color: #A3FF12 !important;
            transform: translateY(-3px);
          }
          input::placeholder, textarea::placeholder {
            color: #555;
          }
       `}</style>
     </section>
   );
 }
