import { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from '@/lib/translations';

type Language = 'en' | 'ar';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    if (language === 'ar') {
      html.setAttribute('lang', 'ar');
      html.setAttribute('dir', 'rtl');
      body.classList.remove('font-sans');
      body.classList.add('font-arabic');
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      body.classList.remove('font-arabic');
      body.classList.add('font-sans');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
