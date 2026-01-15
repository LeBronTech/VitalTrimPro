import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  // Application State: Language
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Toggle Handler
  const toggleLanguage = () => {
    setCurrentLang(prev => (prev === 'en' ? 'pt' : 'en'));
  };

  // Derived content based on current language
  const content = TRANSLATIONS[currentLang];

  return (
    <div className="min-h-screen relative font-sans antialiased selection:bg-green-500 selection:text-white overflow-x-hidden bg-slate-950 text-slate-50">
      
      {/* Dark Ambient Background with Green Lights */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep dark gradient base */}
        <div className="absolute inset-0 bg-slate-950"></div>
        
        {/* Animated Green Neon Glows */}
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[100px] animate-neon"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] animate-neon delay-500"></div>
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-green-800/10 rounded-full blur-[80px] animate-pulse"></div>
        
        {/* Tech Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-circuit opacity-20"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header 
          content={content.header} 
          currentLang={currentLang} 
          onToggleLang={toggleLanguage} 
        />

        <main className="flex-grow">
          <Hero content={content.hero} />
          <Benefits content={content.benefits} />
          <TrustSection content={content.trust} />
        </main>

        <Footer content={content.footer} />
      </div>
    </div>
  );
};

export default App;