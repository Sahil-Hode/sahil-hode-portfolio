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
                 style={{
                   background: "#A3FF12", color: "#000", padding: "16px 32px", borderRadius: "14px",
                   fontWeight: 900, fontSize: "16px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                   display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                   boxShadow: "0 10px 30px rgba(163,255,18,0.15)", transition: "all 0.3s ease",
                   opacity: loading ? 0.7 : 1, width: "fit-content"
                 }} 
                 className="send-btn"
               >
                 {loading ? "Sending..." : "Send Message"}
                 {!loading && <FaArrowRight className="btn-arrow" style={{ transition: "transform 0.3s ease" }} />}
               </button>
             </form>
           </div>
         </div>
       </div>
 
       <style jsx>{`
         .social-pill-btn:hover {
           background: #A3FF12 !important;
           color: #000 !important;
           border-color: #A3FF12 !important;
           transform: translateY(-3px);
         }
         .send-btn:hover {
           transform: translateY(-3px);
           background: #ffffff !important;
           box-shadow: 0 15px 40px rgba(255,255,255,0.1);
         }
         .send-btn:hover .btn-arrow {
           transform: rotate(-45deg);
         }
         input::placeholder, textarea::placeholder {
           color: #555;
         }
       `}</style>
     </section>
   );
 }
