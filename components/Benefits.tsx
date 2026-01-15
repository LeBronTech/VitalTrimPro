import React from 'react';
import { TranslationContent } from '../types';
import { LeafIcon, ZapIcon, ShieldIcon } from '../constants';

interface BenefitsProps {
  content: TranslationContent['benefits'];
}

export const Benefits: React.FC<BenefitsProps> = ({ content }) => {
  const icons = [<LeafIcon key="1" />, <ZapIcon key="2" />, <ShieldIcon key="3" />];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 opacity-0 animate-fade-in-up delay-100">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            {content.title}
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full shadow-[0_0_10px_#22c55e]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div 
              key={index} 
              className={`glass-dark p-10 rounded-3xl hover:bg-slate-900/80 hover:border-green-500/50 transition-all duration-500 group opacity-0 animate-fade-in-up relative overflow-hidden`}
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Card Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-20 h-20 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-8 mx-auto transform rotate-3 group-hover:rotate-12 transition-transform duration-300 border border-white/5 shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <div className="transform -rotate-3 group-hover:scale-110 transition-transform duration-300">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-center font-medium group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};