import React from 'react';
import { TranslationContent } from '../types';

interface TestimonialsProps {
  content: TranslationContent['testimonials'];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  return (
    <section className="py-24 relative z-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{content.title}</h2>
            <div className="flex justify-center gap-1 mb-2">
                {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-green-400 text-xl animate-pulse" style={{animationDelay: `${i*100}ms`}}>★</span>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div 
                key={index}
                className="glass-dark p-8 rounded-2xl relative group hover:border-green-500/30 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-full border-2 border-green-500/30 object-cover"
                    />
                    <div>
                        <h4 className="text-white font-bold">{item.name}</h4>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">{item.role}</span>
                        </div>
                    </div>
                </div>
                
                <div className="mb-4">
                    <div className="flex text-green-400 text-sm mb-2">★★★★★</div>
                    <p className="text-slate-300 italic leading-relaxed">"{item.text}"</p>
                </div>

                {/* Decorative quote icon */}
                <div className="absolute top-4 right-6 text-6xl text-green-500/5 font-serif font-black select-none pointer-events-none">
                    "
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};