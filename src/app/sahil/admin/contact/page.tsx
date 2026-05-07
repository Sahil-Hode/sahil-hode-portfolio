'use client';

import React from 'react';
import DetailEditor from '@/components/admin/DetailEditor';

export default function ContactAdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Contact <span className="text-[#A3FF12]">Settings</span></h1>
        <p className="text-gray-400">Manage your location, availability, and public reach.</p>
      </div>
      
      <DetailEditor />
    </div>
  );
}
