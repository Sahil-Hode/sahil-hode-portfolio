'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Load real messages from localStorage (populated by Contact form)
    const stored = localStorage.getItem('portfolio_messages');
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, []);

  const toggleRead = (id: string) => {
    const updated = messages.map(m => m.id === id ? { ...m, read: !m.read } : m);
    setMessages(updated);
    localStorage.setItem('portfolio_messages', JSON.stringify(updated));
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('portfolio_messages', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold">Inbox</h3>
          <p className="text-gray-400">Manage your contact form submissions</p>
        </div>
        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
          <span className="text-[#A3FF12] font-bold">{messages.filter(m => !m.read).length}</span>
          <span className="text-gray-400 ml-2">New Messages</span>
        </div>
      </div>

      <div className="grid gap-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-6 rounded-2xl border transition-all duration-300 ${
              msg.read 
                ? 'bg-white/[0.02] border-white/5 text-gray-400' 
                : 'bg-white/[0.05] border-[#A3FF12]/20 text-white shadow-[0_0_20px_rgba(163,255,18,0.05)]'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className={`font-bold text-lg ${!msg.read && 'text-[#A3FF12]'}`}>{msg.subject}</h4>
                <p className="text-sm font-medium">{msg.name} &bull; {msg.email}</p>
              </div>
              <p className="text-xs opacity-50">{new Date(msg.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm leading-relaxed mb-6 italic">"{msg.message}"</p>
            
            <div className="flex gap-3">
              <button 
                onClick={() => toggleRead(msg.id)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold transition-colors"
              >
                {msg.read ? 'Mark as Unread' : 'Mark as Read'}
              </button>
              <button 
                onClick={() => deleteMessage(msg.id)}
                className="px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs font-bold transition-colors"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-20 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-500">No messages found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
