'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/hooks/usePortfolioCMS';
import { HiOutlineSave, HiOutlineCloudUpload, HiOutlineCheckCircle } from 'react-icons/hi';

export default function DetailEditor() {
  const { data, loading, refresh } = usePortfolio();
  const [about, setAbout] = useState<any>(null);
  const [socials, setSocials] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (data) {
      setAbout(data.about);
      setSocials(data.socials);
    }
  }, [data]);

  if (loading || !data || !about || !socials) return <div className="animate-pulse space-y-8"><div className="h-64 bg-white/5 rounded-3xl" /><div className="h-64 bg-white/5 rounded-3xl" /></div>;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      // Save About
      const resAbout = await fetch('/api/cms/about', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(about),
      });

      // Save Socials
      const resSocials = await fetch('/api/cms/socials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(socials),
      });

      if (resAbout.ok && resSocials.ok) {
        await refresh();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      alert('Save failed');
    } finally {
      setIsSaving(false);
    }
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
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Professional Role</label>
              <input
                type="text"
                value={about.role}
                onChange={(e) => setAbout({ ...about, role: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Role Highlight (Green Text)</label>
            <input
              type="text"
              value={about.highlight}
              onChange={(e) => setAbout({ ...about, highlight: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Hero Description</label>
            <textarea
              rows={4}
              value={about.bio}
              onChange={(e) => setAbout({ ...about, bio: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white resize-none"
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
                value={socials.github}
                onChange={(e) => setSocials({ ...socials, github: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">LinkedIn Profile</label>
              <input
                type="text"
                value={socials.linkedin}
                onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">WhatsApp Link</label>
              <input
                type="text"
                value={socials.whatsapp}
                onChange={(e) => setSocials({ ...socials, whatsapp: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Public Email</label>
              <input
                type="text"
                value={socials.email}
                onChange={(e) => setSocials({ ...socials, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl space-y-8">
          <h4 className="text-[#A3FF12] font-bold text-lg border-b border-white/5 pb-4">Contact & Reach</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Office Location</label>
              <input
                type="text"
                value={data?.contact?.location || ''}
                onChange={async (e) => {
                   if (!data) return;
                   const updated = { ...data.contact, location: e.target.value };
                   await fetch('/api/cms/contact', {
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify(updated),
                   });
                }}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#A3FF12] transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Availability Status</label>
              <input
                type="text"
                value={data?.contact?.availability || ''}
                onChange={async (e) => {
                   if (!data) return;
                   const updated = { ...data.contact, availability: e.target.value };
                   await fetch('/api/cms/contact', {
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify(updated),
                   });
                }}
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
            {isSaving ? 'Updating GitHub...' : <><HiOutlineSave /> Save All Changes</>}
          </button>

          {showSuccess && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#A3FF12] font-bold flex items-center gap-2"
            >
              <HiOutlineCheckCircle /> Portfolio updated successfully!
            </motion.p>
          )}
        </div>
      </form>
    </div>
  );
}
