'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DetailEditor() {
  const [details, setDetails] = useState({
    fullName: 'Sahil Hode',
    role: 'Full Stack Developer',
    location: 'India',
    email: 'sahilhode67@gmail.com',
    github: 'Sahil-Hode',
    bio: 'Passionate developer crafting digital experiences with precision and creativity.',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('portfolio_details');
    if (stored) {
      setDetails(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('portfolio_details', JSON.stringify(details));
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10">
        <h3 className="text-2xl font-bold">Profile Details</h3>
        <p className="text-gray-400">Update your basic information and social presence</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={details.fullName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Professional Role</label>
              <input
                type="text"
                name="role"
                value={details.role}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Location</label>
              <input
                type="text"
                name="location"
                value={details.location}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Email Address</label>
              <input
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">GitHub Username</label>
              <input
                type="text"
                name="github"
                value={details.github}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400">Professional Bio</label>
          <textarea
            name="bio"
            rows={4}
            value={details.bio}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A3FF12] transition-colors resize-none"
          />
        </div>

        <div className="flex items-center gap-6 pt-4">
          <button
            type="submit"
            disabled={isSaving}
            className="bg-[#A3FF12] text-black font-bold px-10 py-4 rounded-xl hover:bg-[#8edb10] transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                Saving Changes...
              </>
            ) : (
              'Save Changes'
            )}
          </button>

          {showSuccess && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#A3FF12] font-bold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Changes saved successfully!
            </motion.p>
          )}
        </div>
      </form>
    </div>
  );
}
