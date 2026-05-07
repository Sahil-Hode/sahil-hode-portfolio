'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/admin');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-[#111] p-10 rounded-[32px] border border-white/5 shadow-2xl"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 bg-[#A3FF12] rounded-2xl flex items-center justify-center text-black font-black text-3xl mb-6 shadow-[0_0_30px_rgba(163,255,18,0.3)]">S</div>
          <h1 className="text-2xl font-black tracking-tight mb-2 uppercase italic">Admin <span className="text-[#A3FF12]">Access</span></h1>
          <p className="text-gray-500 text-sm">Enter your PIN to manage the portfolio CMS.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input 
              type="password" 
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center text-2xl tracking-[1em] outline-none focus:border-[#A3FF12]/50 focus:bg-white/[0.08] transition-all"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs text-center font-bold">{error}</p>}
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#A3FF12] text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(163,255,18,0.2)] disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Unlock Dashboard'}
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] uppercase font-black tracking-widest">Sahil Hode Portfolio CMS v1.0</p>
        </div>
      </motion.div>
    </div>
  );
}
