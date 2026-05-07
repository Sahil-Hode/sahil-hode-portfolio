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
        sections.map(s =>
          fetch(`/api/cms/${s}`)
            .then(res => {
              if (!res.ok) throw new Error(`Failed to fetch ${s}`);
              return res.json();
            })
            .then(json => {
              // If the API returned an error object, treat as null
              if (json && json.error) return null;
              return json;
            })
            .catch(err => {
              console.warn(`CMS fetch failed for ${s}:`, err);
              return null;
            })
        )
      );

      const portfolioData: any = {};
      // Map API section names to the keys our types/components expect
      const keyMap: Record<string, string> = { experience: 'experiences' };
      sections.forEach((s, i) => {
        portfolioData[keyMap[s] || s] = results[i];
      });

      // Only set data if we got at least the core sections
      if (portfolioData.about) {
        setData(portfolioData as PortfolioData);
      } else {
        console.error('Critical portfolio data missing (about).');
      }
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
