'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData } from '@/types/portfolio';

const PortfolioContext = createContext<{
  data: PortfolioData | null;
  loading: boolean;
  refresh: () => Promise<void>;
} | null>(null);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const sections = ['about', 'projects', 'experience', 'education', 'skills', 'socials', 'contact'];
      const results = await Promise.all(
        sections.map(s => fetch(`/api/cms/${s}`).then(res => res.json()))
      );
      
      const portfolioData: any = {};
      sections.forEach((s, i) => {
        portfolioData[s] = results[i];
      });
      
      setData(portfolioData as PortfolioData);
    } catch (error) {
      console.error('Failed to fetch portfolio data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading, refresh: fetchAll }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
