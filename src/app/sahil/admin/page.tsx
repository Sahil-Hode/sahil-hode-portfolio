'use client';

import React from 'react';
import { usePortfolio } from '@/hooks/usePortfolioCMS';
import { 
  HiOutlineFolder, HiOutlineBriefcase, HiOutlineLightningBolt, 
  HiOutlineAcademicCap, HiOutlineArrowSmRight 
} from 'react-icons/hi';
import Link from 'next/link';

export default function Dashboard() {
  const { data, loading } = usePortfolio();

  if (loading || !data) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-12 w-48 bg-white/5 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-white/5 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  const stats = [
    { name: 'Projects', value: data.projects?.length || 0, icon: <HiOutlineFolder />, color: '#A3FF12', href: '/sahil/admin/projects' },
    { name: 'Experiences', value: data.experiences?.length || 0, icon: <HiOutlineBriefcase />, color: '#3178C6', href: '/sahil/admin/experience' },
    { name: 'Skills', value: data.skills?.length || 0, icon: <HiOutlineLightningBolt />, color: '#F59E0B', href: '/sahil/admin/skills' },
    { name: 'Education', value: data.education?.length || 0, icon: <HiOutlineAcademicCap />, color: '#10B981', href: '/sahil/admin/education' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-black tracking-tight mb-2">Welcome Back, <span className="text-[#A3FF12]">Sahil</span></h1>
        <p className="text-gray-400">Here's an overview of your portfolio content.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Link key={i} href={stat.href}>
            <div className="bg-[#111] p-6 rounded-3xl border border-white/5 hover:border-[#A3FF12]/30 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div style={{ color: stat.color }} className="text-2xl p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <HiOutlineArrowSmRight className="text-gray-600 group-hover:text-[#A3FF12] transition-colors" />
              </div>
              <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-1">{stat.name}</p>
              <h3 className="text-3xl font-black tracking-tight">{stat.value}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity / Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#111] p-8 rounded-[32px] border border-white/5">
          <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/sahil/admin/projects" className="p-4 bg-white/5 rounded-2xl hover:bg-[#A3FF12] hover:text-black transition-all text-sm font-bold text-center">
              Add New Project
            </Link>
            <Link href="/sahil/admin/about" className="p-4 bg-white/5 rounded-2xl hover:bg-[#A3FF12] hover:text-black transition-all text-sm font-bold text-center">
              Edit Hero Bio
            </Link>
            <Link href="/sahil/admin/skills" className="p-4 bg-white/5 rounded-2xl hover:bg-[#A3FF12] hover:text-black transition-all text-sm font-bold text-center">
              Update Skills
            </Link>
            <Link href="/sahil/admin/contact" className="p-4 bg-white/5 rounded-2xl hover:bg-[#A3FF12] hover:text-black transition-all text-sm font-bold text-center">
              Update Contact
            </Link>
          </div>
        </div>

        <div className="bg-[#111] p-8 rounded-[32px] border border-white/5 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-[#A3FF12]/10 rounded-full flex items-center justify-center text-[#A3FF12] mb-4">
            <HiOutlineLightningBolt size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Live Status</h3>
          <p className="text-gray-400 text-sm mb-6">Your portfolio is currently live and synchronized with GitHub.</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#A3FF12]/10 rounded-full text-[#A3FF12] text-xs font-black uppercase tracking-widest">
            <div className="w-2 h-2 bg-[#A3FF12] rounded-full animate-pulse" />
            Connected to Vercel
          </div>
        </div>
      </div>
    </div>
  );
}
