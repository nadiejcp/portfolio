"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ES' | 'EN';
  setLanguage: React.Dispatch<React.SetStateAction<'ES' | 'EN'>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectLanguage = (): 'ES' | 'EN' => {
  if (typeof window === 'undefined') return 'EN'; // Fallback for Server-Side Rendering (SSR)

  // Retrieve user's preferred browser languages (e.g., ['es-AR', 'es-ES', 'en-US'])
  const userLocales = navigator.languages || [navigator.language || ''];

  const isSpanish = userLocales.some((locale) => {
    const cleanLocale = locale.toLowerCase();
    
    // Check for general Spanish ('es'), Spain ('es-es'), or LATAM countries ('es-419', 'es-mx', 'es-ar', etc.)
    return cleanLocale.startsWith('es');
  });

  return isSpanish ? 'ES' : 'EN';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'ES' | 'EN'>(detectLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};