'use client';

import React, { useState } from 'react';
import { usePortfolio } from '@/hooks/usePortfolioCMS';
import { HiOutlineSave, HiOutlineTrash, HiOutlinePlus, HiOutlineCheckCircle } from 'react-icons/hi';

export default function EducationPage() {
  const { data, loading, refresh } = usePortfolio();
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  if (loading || !data) return <div className="animate-pulse space-y-8"><div className="h-20 bg-white/5 rounded-2xl" /><div className="h-64 bg-white/5 rounded-3xl" /></div>;

  const handleSave = async (updated: any[]) => {
    setSaving(true);
    try {
      const res = await fetch('/api/cms/education', {
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

  const addEducation = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      degree: 'Degree Name',
      institution: 'University Name',
      duration: '2024 - 2027',
      progress: 0,
      status: 'Ongoing',
      coursework: [],
      activities: []
    };
    handleSave([...data.education, newItem]);
  };

  const removeEducation = (id: string) => {
    handleSave(data.education.filter(e => e.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Academic <span className="text-[#A3FF12]">Journey</span></h1>
          <p className="text-gray-400">Manage your education, certifications, and courses.</p>
        </div>
        <button 
          onClick={addEducation}
          className="bg-[#A3FF12] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-all"
        >
          <HiOutlinePlus /> Add Education
        </button>
      </div>

      <div className="space-y-6">
        {data.education.map((edu, idx) => (
          <div key={edu.id} className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] space-y-6 relative group">
            <button 
              onClick={() => removeEducation(edu.id)}
              className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            >
              <HiOutlineTrash size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Degree</label>
                <input 
                  type="text" 
                  defaultValue={edu.degree}
                  onBlur={(e) => {
                    const updated = [...data.education];
                    updated[idx].degree = e.target.value;
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Institution</label>
                <input 
                  type="text" 
                  defaultValue={edu.institution}
                  onBlur={(e) => {
                    const updated = [...data.education];
                    updated[idx].institution = e.target.value;
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Duration</label>
                <input 
                  type="text" 
                  defaultValue={edu.duration}
                  onBlur={(e) => {
                    const updated = [...data.education];
                    updated[idx].duration = e.target.value;
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</label>
                <input 
                  type="text" 
                  defaultValue={edu.status}
                  onBlur={(e) => {
                    const updated = [...data.education];
                    updated[idx].status = e.target.value;
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Progress (%)</label>
                <input 
                  type="number" 
                  defaultValue={edu.progress}
                  onBlur={(e) => {
                    const updated = [...data.education];
                    updated[idx].progress = parseInt(e.target.value);
                    handleSave(updated);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {success && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#A3FF12] text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 z-50">
          <HiOutlineCheckCircle /> Education updated on GitHub
        </div>
      )}
    </div>
  );
}
