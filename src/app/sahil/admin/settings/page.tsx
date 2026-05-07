'use client';

import React from 'react';

export default function SettingsAdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">General <span className="text-[#A3FF12]">Settings</span></h1>
        <p className="text-gray-400">Configure global CMS behaviors and security.</p>
      </div>
      
      <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center py-20">
        <p className="text-gray-500 font-medium">Authentication and API settings are managed via environment variables.</p>
        <p className="text-[#A3FF12] mt-4 text-xs font-black uppercase tracking-widest">Version 1.0.0 Stable</p>
      </div>
    </div>
  );
}
