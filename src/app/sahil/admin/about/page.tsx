'use client';

import React, { useState, useEffect } from 'react';
import { usePortfolio } from '@/hooks/usePortfolioCMS';
import { HiOutlineSave, HiOutlineCloudUpload } from 'react-icons/hi';

export default function AboutEditor() {
  const { data, refresh } = usePortfolio();
  const [about, setAbout] = useState(data?.about || null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (data?.about) setAbout(data.about);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAbout((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'identity');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setAbout((prev: any) => ({ ...prev, profileImage: data.url }));
      }
    } catch (error) {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/cms/about', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(about),
      });
      if (res.ok) {
        await refresh();
        alert('About info updated successfully! GitHub commit triggered.');
      }
    } catch (error) {
      alert('Failed to save');
    } finally {
      setSaving(false);
    }
  };

  if (!about) return <div className="animate-pulse h-96 bg-white/5 rounded-3xl" />;

  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2">Edit <span className="text-[#A3FF12]">About</span></h1>
        <p className="text-gray-400">Update your hero section and personal details.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-[#111] p-10 rounded-[32px] border border-white/5">
        {/* Image Upload */}
        <div className="flex flex-col md:flex-row gap-10 items-center border-b border-white/5 pb-10 mb-10">
          <div className="relative group">
            <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-[#A3FF12]/20">
              <img src={about.profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            {uploading && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-3xl">
                <div className="w-6 h-6 border-2 border-[#A3FF12] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
          <div className="flex-1 space-y-4">
            <label className="block">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Profile Photo</span>
              <div className="mt-2 flex items-center gap-4">
                <input 
                  type="file" 
                  onChange={handleImageUpload}
                  className="hidden" 
                  id="profile-upload" 
                  accept="image/*"
                />
                <label 
                  htmlFor="profile-upload"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer flex items-center gap-2 text-sm font-bold transition-colors"
                >
                  <HiOutlineCloudUpload /> Change Image
                </label>
                <p className="text-xs text-gray-500">JPG, PNG or WEBP. Max 2MB.</p>
              </div>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-[#A3FF12]">Full Name</label>
            <input 
              name="name" 
              value={about.name} 
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#A3FF12]/50 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-[#A3FF12]">Main Role</label>
            <input 
              name="role" 
              value={about.role} 
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#A3FF12]/50 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-[#A3FF12]">Role Highlight (Neon Text)</label>
          <input 
            name="highlight" 
            value={about.highlight} 
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#A3FF12]/50 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-[#A3FF12]">Bio / Description</label>
          <textarea 
            name="bio" 
            value={about.bio} 
            onChange={handleChange}
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#A3FF12]/50 transition-colors resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-[#A3FF12]">Location</label>
            <input 
              name="location" 
              value={about.location} 
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#A3FF12]/50 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-[#A3FF12]">Education Summary</label>
            <input 
              name="education" 
              value={about.education} 
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#A3FF12]/50 transition-colors"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={saving}
          className="w-full bg-[#A3FF12] text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(163,255,18,0.3)] disabled:opacity-50"
        >
          {saving ? 'Committing to GitHub...' : <><HiOutlineSave size={20} /> Save Changes</>}
        </button>
      </form>
    </div>
  );
}
