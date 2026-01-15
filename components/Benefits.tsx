import React from 'react';
import { TranslationContent } from '../types';

interface BenefitsProps {
  content: TranslationContent['benefits'];
}

export const Benefits: React.FC<BenefitsProps> = ({ content }) => {
  return (
    <section className="py-24 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 opacity-0 animate-fade-in-up delay-100">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            {content.title}
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full shadow-[0_0_20px_#22c55e]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {content.items.map((item, index) => (
            <div 
              key={index} 
              className={`relative group opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Outer Glow & Border */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/30 to-transparent rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>
              <div className="absolute inset-[1px] bg-slate-950 rounded-[23px] z-10"></div>
              
              <div className="relative z-20 h-full rounded-[23px] overflow-hidden glass-dark p-8 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
                  
                  {/* Neon Line Top */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                  {/* Product Image Area */}
                  <div className="h-64 w-full flex items-center justify-center mb-8 relative">
                    {/* Backlight Glow */}
                    <div className="absolute w-40 h-40 bg-green-500/20 blur-[50px] rounded-full transition-all duration-700 group-hover:bg-green-400/30 group-hover:blur-[60px] group-hover:scale-110"></div>
                    
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="max-h-full w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] relative z-10 transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-green-400 transition-colors drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  <div className="w-16 h-1 bg-green-500/40 rounded-full mb-6 group-hover:w-24 group-hover:bg-green-400 transition-all duration-500"></div>

                  <ul className="space-y-4 w-full">
                    {item.description.split('•').map((feature, i) => (
                      <li key={i} className="text-slate-300 font-medium flex items-center justify-center gap-3 text-sm md:text-base border-b border-green-500/10 pb-2 last:border-0 last:pb-0">
                         <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/30 flex-shrink-0 group-hover:bg-green-500 group-hover:border-green-400 transition-colors">
                            <svg className="w-3 h-3 text-green-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                         </div>
                        <span className="group-hover:text-white transition-colors">{feature.trim()}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};