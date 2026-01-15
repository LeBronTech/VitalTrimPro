import React from 'react';
import { TranslationContent } from '../types';

interface FooterProps {
  content: TranslationContent['footer'];
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-600 leading-relaxed mb-8 border-b border-slate-900 pb-8">
            {content.disclaimer}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-6">
             <span>{content.copyright}</span>
             <div className="flex gap-6">
                <span className="hover:text-green-400 cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-green-400 cursor-pointer transition-colors">Terms of Service</span>
                <span className="hover:text-green-400 cursor-pointer transition-colors">Contact Us</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};