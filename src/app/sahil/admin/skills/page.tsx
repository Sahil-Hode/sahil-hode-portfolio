'use client';

import React from 'react';
import SkillManager from '@/components/admin/SkillManager';

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight mb-2 uppercase italic">Skill <span className="text-[#A3FF12]">Inventory</span></h1>
        <p className="text-gray-400">Manage your technical skills and categories.</p>
      </div>
      
      <SkillManager />
    </div>
  );
}
