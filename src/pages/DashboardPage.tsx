
import React, { useState } from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardContentRenderer from '../components/dashboard/DashboardContentRenderer';
import OnboardingTutorial from '../components/OnboardingTutorial';
import { useDashboardState } from '../hooks/useDashboardState';
import ChatWidget from '../components/ChatWidget';
import { MessageCircle } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const {
    language,
    activeTab,
    showOnboarding,
    translations,
    setActiveTab,
    setShowOnboarding,
    toggleLanguage,
  } = useDashboardState();

  // Live Chat Support modal control
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          translations={translations}
          onShowChat={() => setIsChatOpen(true)}
        />
        <SidebarInset>
          <DashboardHeader
            language={language}
            translations={translations}
            onLanguageToggle={toggleLanguage}
            onShowOnboarding={() => setShowOnboarding(true)}
          />
          <main className="flex-1 p-4 lg:p-6">
            <DashboardContentRenderer
              activeTab={activeTab}
              language={language}
              translations={translations}
              setActiveTab={setActiveTab}
            />
          </main>
        </SidebarInset>
        {/* Floating chat button */}
        <button
          type="button"
          className="fixed z-40 bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-xl p-3 flex items-center gap-2 transition active:scale-95"
          style={{ boxShadow: "0 8px 24px 0 rgba(80, 80, 120, 0.12)" }}
          onClick={() => setIsChatOpen(true)}
          aria-label="Live Chat Support"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        {/* Chat modal */}
        <ChatWidget visible={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
      
      {showOnboarding && (
        <OnboardingTutorial
          language={language}
          translations={translations}
          onComplete={() => setShowOnboarding(false)}
          onSkip={() => setShowOnboarding(false)}
        />
      )}
    </SidebarProvider>
  );
};

export default DashboardPage;
