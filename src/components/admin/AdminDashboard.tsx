'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MessageList from './MessageList';
import SkillManager from './SkillManager';
import DetailEditor from './DetailEditor';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'messages' | 'skills' | 'details'>('messages');

  const tabs = [
    { id: 'messages', label: 'Messages', icon: 'M' },
    { id: 'skills', label: 'Skills', icon: 'S' },
    { id: 'details', label: 'Details', icon: 'D' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-outfit">
      {/* Sidebar */}
      <div className="w-20 md:w-64 border-r border-white/5 bg-white/[0.02] backdrop-blur-xl flex flex-col">
        <div className="p-6">
          <div className="w-10 h-10 bg-[#A3FF12] rounded-xl flex items-center justify-center mb-10">
            <span className="text-black font-bold text-xl">S</span>
          </div>
          
          <nav className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#A3FF12] text-black' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="font-bold w-6 text-center">{tab.icon}</span>
                <span className="hidden md:block font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-4 p-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all duration-300"
          >
            <span className="font-bold w-6 text-center">L</span>
            <span className="hidden md:block font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-white/[0.01]">
          <h2 className="text-xl font-bold capitalize">{activeTab} Management</h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white">Sahil Hode</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#A3FF12] to-[#8edb10]" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'messages' && <MessageList />}
            {activeTab === 'skills' && <SkillManager />}
            {activeTab === 'details' && <DetailEditor />}
          </motion.div>
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
