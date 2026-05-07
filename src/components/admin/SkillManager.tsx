'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/hooks/usePortfolioCMS';

export default function SkillManager() {
  const { data, loading, refresh } = usePortfolio();
  const [newSkill, setNewSkill] = useState({ name: '', category: 'Frontend' });
  const [saving, setSaving] = useState(false);

  if (loading || !data) return <div className="animate-pulse h-64 bg-white/5 rounded-2xl" />;

  const handleUpdate = async (updatedSkills: any[]) => {
    setSaving(true);
    try {
      const res = await fetch('/api/cms/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSkills),
      });
      if (res.ok) await refresh();
    } catch (error) {
      alert('Update failed');
    } finally {
      setSaving(false);
    }
  };

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkill.name) return;
    const icon = newSkill.name.toLowerCase().replace('.', '');
    handleUpdate([...data.skills, { ...newSkill, id: Math.random().toString(36).substr(2, 9), icon }]);
    setNewSkill({ ...newSkill, name: '' });
  };

  const removeSkill = (name: string) => {
    handleUpdate(data.skills.filter(s => s.name !== name));
  };

  const categories = ['Frontend', 'Backend', 'Language', 'Tools', 'Design'];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-bold">Skill Inventory</h3>
          <p className="text-gray-400">Add or remove skills displayed on your portfolio</p>
        </div>
      </div>

      <div className="bg-white/[0.03] p-8 rounded-2xl border border-white/5">
        <h4 className="font-bold mb-6 text-[#A3FF12]">Add New Skill</h4>
        <form onSubmit={addSkill} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Skill name (e.g. Docker)"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors text-white"
          />
          <select
            value={newSkill.category}
            onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors appearance-none cursor-pointer text-white"
          >
            {categories.map(cat => (
              <option key={cat} value={cat} className="bg-[#050505]">{cat}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-[#A3FF12] text-black font-bold px-8 py-3 rounded-xl hover:bg-[#8edb10] transition-colors"
          >
            Add Skill
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div key={cat} className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3FF12] rounded-full"></span>
              {cat}
            </h5>
            <div className="space-y-2">
              <AnimatePresence>
                {data.skills.filter(s => s.category === cat).map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-all group"
                  >
                    <span className="font-medium text-white">{skill.name}</span>
                    <button
                      onClick={() => removeSkill(skill.name)}
                      className="text-gray-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              {data.skills.filter(s => s.category === cat).length === 0 && (
                <p className="text-xs text-gray-600 italic px-2">No {cat.toLowerCase()} skills added.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
