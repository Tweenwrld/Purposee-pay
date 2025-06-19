
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { translations, Language } from '@/constants/translations';

export const useDashboardState = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState('monitoring');
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sw')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'sw' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    toast.success(newLanguage === 'en' ? 'Language changed to English' : 'Lugha imebadilishwa kuwa Kiswahili');
  };

  const t = translations[language];

  return {
    language,
    activeTab,
    showOnboarding,
    translations: t,
    setActiveTab,
    setShowOnboarding,
    toggleLanguage,
  };
};
