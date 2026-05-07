'use client';

import { useState, useEffect } from 'react';
import { initialPortfolioData } from '@/data/portfolio-data';

export function usePortfolio() {
  const [data, setData] = useState(initialPortfolioData);

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('portfolio_full_data');
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse portfolio data", e);
      }
    }
  }, []);

  const updateData = (newData: typeof initialPortfolioData) => {
    setData(newData);
    localStorage.setItem('portfolio_full_data', JSON.stringify(newData));
    // Dispatch a custom event to notify other components in the same tab
    window.dispatchEvent(new Event('portfolio-update'));
  };

  useEffect(() => {
    const handleUpdate = () => {
      const saved = localStorage.getItem('portfolio_full_data');
      if (saved) {
        setData(JSON.parse(saved));
      }
    };
    window.addEventListener('portfolio-update', handleUpdate);
    return () => window.removeEventListener('portfolio-update', handleUpdate);
  }, []);

  return { data, updateData };
}
