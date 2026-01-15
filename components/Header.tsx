import React from 'react';
import { TranslationContent, Language } from '../types';

interface HeaderProps {
  content: TranslationContent['header'];
  currentLang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ content, currentLang, onToggleLang }) => {
  return (
    <nav className="w-full glass-dark sticky top-0 z-50 border-b border-green-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300 border border-green-400/20">
              <span className="text-white font-black text-xl">V</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              {content.logoText}<span className="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Pro</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 hover:bg-slate-800/50 transition-colors border border-green-500/20 text-slate-300 backdrop-blur-md"
              aria-label="Toggle Language"
            >
              <span className={`text-sm font-bold ${currentLang === 'en' ? 'text-green-400' : 'text-slate-500'}`}>EN</span>
              <span className="text-slate-600">|</span>
              <span className={`text-sm font-bold ${currentLang === 'pt' ? 'text-green-400' : 'text-slate-500'}`}>PT</span>
            </button>
            
            <a href="#cta" className="hidden md:block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-2.5 px-6 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all border border-green-400/20">
              {content.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};