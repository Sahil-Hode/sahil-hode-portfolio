"use client";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#D9FF00] rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="w-5 h-5 bg-black rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full border-4 border-black/10 rounded-xl" />
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-1 bg-[#1A1A1A]/80 backdrop-blur-xl px-2 py-1.5 rounded-full border border-white/5">
        <a href="#" className="text-[#D9FF00] px-6 py-2 rounded-full text-sm font-medium hover:bg-white/5 transition-all">Home</a>
        <a href="#" className="text-white/60 px-6 py-2 rounded-full text-sm font-medium hover:text-white transition-all">Projects</a>
        <a href="#" className="text-white/60 px-6 py-2 rounded-full text-sm font-medium hover:text-white transition-all">Blogs</a>
        <a href="#" className="text-white/60 px-6 py-2 rounded-full text-sm font-medium hover:text-white transition-all">Testimonials</a>
        <a href="#" className="text-white/60 px-6 py-2 rounded-full text-sm font-medium hover:text-white transition-all">Contact us</a>
      </div>

      {/* Let's Talk Button */}
      <button className="bg-[#D9FF00] text-black pl-6 pr-2 py-2 rounded-full font-bold flex items-center gap-3 hover:bg-[#D9FF00]/90 transition-all group shadow-[0_0_20px_rgba(217,255,0,0.2)]">
        {"Let's Talk"}
        <span className="w-9 h-9 bg-black text-[#D9FF00] rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </span>
      </button>
    </nav>
  );
}
