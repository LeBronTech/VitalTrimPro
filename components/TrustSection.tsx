import React from 'react';
import { TranslationContent } from '../types';

interface TrustProps {
  content: TranslationContent['trust'];
}

export const TrustSection: React.FC<TrustProps> = ({ content }) => {
  return (
    <section className="py-20 relative overflow-hidden border-t border-white/5 bg-slate-900/50">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute w-[800px] h-[800px] bg-green-600 rounded-full blur-[150px] -top-[400px] -left-[200px]"></div>
        </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
            <div className="text-center md:text-left order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-white">{content.title}</h2>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">{content.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <span className="flex items-center gap-3 px-5 py-3 bg-slate-900/80 rounded-xl border border-green-500/20 text-slate-200 text-sm font-semibold shadow-lg backdrop-blur-sm">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        GMP Certified
                    </span>
                    <span className="flex items-center gap-3 px-5 py-3 bg-slate-900/80 rounded-xl border border-green-500/20 text-slate-200 text-sm font-semibold shadow-lg backdrop-blur-sm">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        Lab Tested
                    </span>
                </div>
            </div>

            <div className="order-1 md:order-2 glass-dark p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transform rotate-2 hover:rotate-0 transition-all duration-500 border border-green-500/20 relative group">
                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="w-20 h-20 mx-auto bg-slate-950 rounded-full flex items-center justify-center mb-6 text-green-400 font-black text-3xl shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/50 relative z-10">
                    60
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white relative z-10">{content.guaranteeTitle}</h3>
                <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                    {content.guaranteeText}
                </p>
                <div className="mt-6 flex justify-center relative z-10">
                     <img src="https://picsum.photos/100/40?random=20" alt="Guarantee Badge" className="h-10 opacity-60 grayscale hover:grayscale-0 transition-all" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};