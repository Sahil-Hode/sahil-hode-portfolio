'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineViewGrid, HiOutlineUser, HiOutlineBriefcase, 
  HiOutlineAcademicCap, HiOutlineLightningBolt, HiOutlineShare,
  HiOutlineMail, HiOutlineCog, HiOutlineLogout, HiOutlineMenu, HiOutlineX,
  HiOutlineFolder
} from 'react-icons/hi';

const menuItems = [
  { name: 'Dashboard', icon: <HiOutlineViewGrid />, href: '/sahil/admin' },
  { name: 'About', icon: <HiOutlineUser />, href: '/sahil/admin/about' },
  { name: 'Projects', icon: <HiOutlineFolder />, href: '/sahil/admin/projects' },
  { name: 'Experience', icon: <HiOutlineBriefcase />, href: '/sahil/admin/experience' },
  { name: 'Education', icon: <HiOutlineAcademicCap />, href: '/sahil/admin/education' },
  { name: 'Skills', icon: <HiOutlineLightningBolt />, href: '/sahil/admin/skills' },
  { name: 'Social Links', icon: <HiOutlineShare />, href: '/sahil/admin/socials' },
  { name: 'Contact', icon: <HiOutlineMail />, href: '/sahil/admin/contact' },
  { name: 'Settings', icon: <HiOutlineCog />, href: '/sahil/admin/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    // Clear cookie (simplified)
    document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push('/sahil/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: isSidebarOpen ? (isMobile ? '100%' : '280px') : '0px',
          x: isSidebarOpen ? 0 : (isMobile ? -100 : -280)
        }}
        className={`fixed lg:relative z-50 h-full bg-[#0d0d0d] border-r border-white/5 flex flex-col overflow-hidden`}
      >
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#A3FF12] rounded-xl flex items-center justify-center text-black font-black text-xl">S</div>
            <span className="font-black text-xl tracking-tighter">PORTFOLIO <span className="text-[#A3FF12]">CMS</span></span>
          </div>
          {isMobile && (
            <button onClick={() => setSidebarOpen(false)} className="text-white/50 hover:text-white">
              <HiOutlineX size={24} />
            </button>
          )}
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-[#A3FF12] text-black font-bold shadow-[0_0_20px_rgba(163,255,18,0.2)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className={`text-xl transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`}>
                  {item.icon}
                </span>
                <span className="text-sm tracking-tight">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3.5 w-full rounded-xl text-red-500 hover:bg-red-500/10 transition-colors font-bold text-sm"
          >
            <HiOutlineLogout size={20} />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#060606]/80 backdrop-blur-md z-40">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isSidebarOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-sm font-bold">Sahil Hode</p>
              <p className="text-[10px] text-[#A3FF12] font-black tracking-widest uppercase">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#A3FF12]/20 p-0.5">
              <img 
                src="https://res.cloudinary.com/dvyxf0plo/image/upload/v1777808344/mine_qsf9ji.png" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar bg-[#060606]">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(163, 255, 18, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(163, 255, 18, 0.2);
        }
      `}</style>
    </div>
  );
}
