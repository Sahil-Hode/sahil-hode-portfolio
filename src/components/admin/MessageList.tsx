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
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/admin/messages');
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleRead = async (id: string, currentRead: boolean) => {
    try {
      const res = await fetch('/api/admin/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, read: !currentRead }),
      });
      if (res.ok) fetchMessages();
    } catch (error) {
      console.error('Failed to update message:', error);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch('/api/admin/messages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) fetchMessages();
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white">Inbox</h3>
          <p className="text-gray-400">Persistent storage (src/data/messages.json)</p>
        </div>
        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">
          <span className="text-[#A3FF12] font-bold">{messages.filter(m => !m.read).length}</span>
          <span className="text-gray-400 ml-2">New Messages</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-4 border-[#A3FF12]/20 border-t-[#A3FF12] rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid gap-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
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
                <p className="text-xs opacity-50">{new Date(msg.date).toLocaleString()}</p>
              </div>
              <p className="text-sm leading-relaxed mb-6 italic">"{msg.message}"</p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => toggleRead(msg.id, msg.read)}
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
              <p className="text-gray-500">No messages found in server storage.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
