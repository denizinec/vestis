'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Loading from '@/components/ui/loading';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initial loading when the site first loads
    const timer = setTimeout(() => {
      // Loading bitmeye başlıyor
      setFadeOut(true);
      
      // Loading fade-out animasyonu için 500ms bekle
      setTimeout(() => {
        setIsLoading(false);
        // İçeriği göster ve fade-in animasyonu başlat
        setShowContent(true);
      }, 500);
    }, 2000); // 2 saniye loading göster

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <Loading />
        </div>
      ) : (
        <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      )}
    </LoadingContext.Provider>
  );
} 