'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminLoginProps {
  onLogin: (pin: string) => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    
    const newPin = [...pin];
    newPin[index] = value.slice(-1);
    setPin(newPin);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const pinString = pin.join('');
    if (pinString.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        if (pinString === '281106') {
          onLogin(pinString);
        } else {
          setError(true);
          setPin(['', '', '', '', '', '']);
          document.getElementById('pin-0')?.focus();
          setTimeout(() => setError(false), 2000);
        }
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (pin.every(digit => digit !== '')) {
      handleSubmit();
    }
  }, [pin]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-4 font-outfit">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-[#A3FF12] rounded-2xl mx-auto mb-6 flex items-center justify-center rotate-12"
          >
            <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin Access</h1>
          <p className="text-gray-400">Enter your secure PIN to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between gap-2">
            {pin.map((digit, index) => (
              <input
                key={index}
                id={`pin-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInput(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-16 sm:w-14 sm:h-20 bg-white/5 border-2 rounded-xl text-center text-2xl font-bold text-[#A3FF12] focus:outline-none transition-all duration-300 ${
                  error ? 'border-red-500 animate-shake' : 'border-white/10 focus:border-[#A3FF12] focus:bg-white/10'
                }`}
                autoFocus={index === 0}
              />
            ))}
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-center font-medium"
              >
                Invalid PIN. Please try again.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={isLoading || pin.some(d => d === '')}
            className="w-full py-4 bg-[#A3FF12] text-black font-bold rounded-xl hover:bg-[#8edb10] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              'Unlock Dashboard'
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Secure Environment &bull; Authorized Personnel Only
          </p>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
}
