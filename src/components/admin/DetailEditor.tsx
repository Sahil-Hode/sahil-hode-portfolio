'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/hooks/usePortfolio';

export default function DetailEditor() {
  const { data, updateData } = usePortfolio();
  const [isSaving, setIsSaving] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (section: 'hero' | 'socials', field: string, value: string) => {
    updateData({
      ...data,
      [section]: {
        ...(data as any)[section],
        [field]: value
      }
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white">Profile & Identity</h3>
        <p className="text-gray-400">Manage your core brand identity and social links</p>
      </div>

      <form onSubmit={handleSave} className="space-y-12">
        {/* Hero Section */}
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl space-y-8">
          <h4 className="text-[#A3FF12] font-bold text-lg border-b border-white/5 pb-4">Hero Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
              <input
                type="text"
                value={data.hero.name}
                onChange={(e) => handleChange('hero', 'name', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Professional Role</label>
              <input
                type="text"
                value={data.hero.role}
                onChange={(e) => handleChange('hero', 'role', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Role Highlight (Green Text)</label>
            <input
              type="text"
              value={data.hero.highlight}
              onChange={(e) => handleChange('hero', 'highlight', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Hero Description</label>
            <textarea
              rows={4}
              value={data.hero.description}
              onChange={(e) => handleChange('hero', 'description', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Profile Image URL</label>
            <input
              type="text"
              value={data.hero.profileImage}
              onChange={(e) => handleChange('hero', 'profileImage', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl space-y-8">
          <h4 className="text-[#A3FF12] font-bold text-lg border-b border-white/5 pb-4">Social Presence</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">GitHub Profile</label>
              <input
                type="text"
                value={data.socials.github}
                onChange={(e) => handleChange('socials', 'github', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">LinkedIn Profile</label>
              <input
                type="text"
                value={data.socials.linkedin}
                onChange={(e) => handleChange('socials', 'linkedin', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">WhatsApp Link</label>
              <input
                type="text"
                value={data.socials.whatsapp}
                onChange={(e) => handleChange('socials', 'whatsapp', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Public Email</label>
              <input
                type="text"
                value={data.socials.email}
                onChange={(e) => handleChange('socials', 'email', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 sticky bottom-8 bg-[#050505]/80 backdrop-blur-lg p-4 rounded-2xl border border-white/5 shadow-2xl z-50">
          <button
            type="submit"
            disabled={isSaving}
            className="bg-[#A3FF12] text-black font-bold px-10 py-4 rounded-xl hover:bg-[#8edb10] transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving ? 'Updating...' : 'Save All Changes'}
          </button>

          {showSuccess && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#A3FF12] font-bold flex items-center gap-2"
            >
              Portfolio updated successfully!
            </motion.p>
          )}
        </div>
      </form>
    </div>
  );
}
