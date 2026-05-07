'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/hooks/usePortfolioCMS';
import { HiOutlineSave, HiOutlineTrash, HiOutlinePlus, HiOutlineCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  const { data, loading, refresh } = usePortfolio();
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  if (loading || !data) return <div className="animate-pulse space-y-8"><div className="h-20 bg-white/5 rounded-2xl" /><div className="h-64 bg-white/5 rounded-3xl" /></div>;

  const handleSave = async (updated: any[]) => {
    setSaving(true);
    try {
      const res = await fetch('/api/cms/experience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        await refresh();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      alert('Save failed');
    } finally {
      setSaving(false);
    }
  };

  const addExperience = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      company: 'New Company',
      role: 'Software Engineer',
      duration: '2024 - Present',
      desc: ['Key achievement 1'],
      tech: ['React']
    };
    handleSave([...data.experiences, newItem]);
  };

  const removeExperience = (id: string) => {
    handleSave(data.experiences.filter(e => e.id !== id));
  };

  const updateExperience = (id: string, field: string, value: any) => {
    const updated = data.experiences.map(e => e.id === id ? { ...e, [field]: value } : e);
    // Note: This only updates local state if we had a local copy, 
    // but here we just send to API on 'Save All' usually.
    // For simplicity, let's just make it a big form.
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Professional <span className="text-[#A3FF12]">Experience</span></h1>
          <p className="text-gray-400">Manage your work history and career milestones.</p>
        </div>
        <button 
          onClick={addExperience}
          className="bg-[#A3FF12] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-all"
        >
          <HiOutlinePlus /> Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {data.experiences.map((exp, idx) => (
          <div key={exp.id} className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] space-y-6 relative group">
            <button 
              onClick={() => removeExperience(exp.id)}
              className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            >
              <HiOutlineTrash size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Company</label>
                <input 
                  type="text" 
                  defaultValue={exp.company}
                  onBlur={(e) => {
                    const updated = [...data.experiences];
                    updated[idx].company = e.target.value;
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Role</label>
                <input 
                  type="text" 
                  defaultValue={exp.role}
                  onBlur={(e) => {
                    const updated = [...data.experiences];
                    updated[idx].role = e.target.value;
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Duration</label>
                <input 
                  type="text" 
                  defaultValue={exp.duration}
                  onBlur={(e) => {
                    const updated = [...data.experiences];
                    updated[idx].duration = e.target.value;
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Description (One per line)</label>
              <textarea 
                rows={3}
                defaultValue={exp.desc.join('\n')}
                onBlur={(e) => {
                  const updated = [...data.experiences];
                  updated[idx].desc = e.target.value.split('\n').filter(l => l.trim());
                  handleSave(updated);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors resize-none"
              />
            </div>
          </div>
        ))}
      </div>

      {success && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#A3FF12] text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 z-50">
          <HiOutlineCheckCircle /> Experience updated on GitHub
        </div>
      )}
    </div>
  );
}
