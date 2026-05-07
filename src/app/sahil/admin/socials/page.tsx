'use client';

import React from 'react';
import DetailEditor from '@/components/admin/DetailEditor';

export default function SocialsAdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Social <span className="text-[#A3FF12]">Profiles</span></h1>
        <p className="text-gray-400">Update your GitHub, LinkedIn, and other professional links.</p>
      </div>
      
      <DetailEditor />
    </div>
  );
}
