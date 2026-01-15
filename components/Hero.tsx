import React from 'react';
import { TranslationContent } from '../types';

interface HeroProps {
  content: TranslationContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden min-h-screen flex items-center">
      
      {/* BACKGROUND IMAGE - Wide Product Shot */}
      {/* Replaced generic background with the "3 products" wide shot style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.freepik.com/premium-photo/sport-nutrition-containers-with-green-lighting-background-3d-rendering_357568-687.jpg" 
          alt="VitalTrim Product Line Background" 
          className="w-full h-full object-cover object-center opacity-40" 
        />
        {/* Heavy gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-circuit opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Cyber/Tech Accents - "Green Circuit Lines" */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent z-0"></div>
      <div className="hidden lg:block absolute right-10 top-20 w-[1px] h-96 bg-gradient-to-b from-transparent via-green-500/20 to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Text Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex justify-center mb-6">
             <div className="p-[1px] rounded-full bg-gradient-to-r from-green-500/50 via-emerald-400/50 to-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <span className="inline-flex items-center py-1.5 px-5 rounded-full bg-slate-950/90 backdrop-blur-md text-green-400 text-sm font-bold tracking-wide uppercase border border-green-500/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse shadow-[0_0_8px_#4ade80]"></span>
                  {content.badge}
                </span>
             </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter text-glow drop-shadow-2xl">
            {content.headline}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-lg">
            {content.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Video Content - Left Side */}
          <div className="lg:col-span-7 w-full opacity-0 animate-fade-in-up delay-200">
            <div className="relative aspect-video bg-slate-950 rounded-2xl shadow-[0_0_50px_rgba(34,197,94,0.15)] overflow-hidden border border-green-500/30 group">
              
              {/* VIDEO PLAYER - Replaces static image */}
              {/* Using a stock tech video to simulate the 'Veo' reference. Replace src with your actual file URL. */}
              <video 
                className="w-full h-full object-cover opacity-90"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-green-digital-circuit-loop-23423-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

               {/* Video Overlay UI */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
               <div className="absolute inset-0 bg-circuit opacity-20 pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div className="text-left">
                    <p className="text-green-400 font-mono text-xs mb-1 tracking-[0.2em] uppercase animate-pulse">System Active</p>
                    <span className="inline-block bg-slate-900/60 backdrop-blur-md text-white font-bold text-sm px-4 py-2 rounded-lg border border-green-500/30">
                      {content.videoOverlay}
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-green-500/50 flex items-center justify-center bg-slate-900/50 backdrop-blur-md">
                     <div className="w-3 h-3 bg-green-500 rounded animate-spin"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA & Single Product Showcase Side - Right Side */}
          <div className="lg:col-span-5 flex flex-col items-center relative opacity-0 animate-slide-in-right delay-300">
            
            {/* Animated Floating Bottle - Single Product Focus */}
            <div className="relative w-full max-w-[300px] aspect-[3/4] mb-8 animate-float z-20 flex justify-center items-center">
               {/* Behind-product glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-green-500 rounded-full blur-[60px] -z-10 opacity-40 animate-pulse"></div>
               
               {/* Realistic Product Image */}
               <img 
                 src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-black-bottle-mockup-3d-render-png-image_11488667.png" 
                 alt="VitalTrim Pro Bottle" 
                 className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-90 contrast-125"
               />

               {/* Artificial Green Rim Light Effect on the image */}
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-500/10 to-transparent mix-blend-overlay pointer-events-none"></div>
               
               {/* Floating elements */}
               <div className="absolute -right-4 bottom-10 w-16 h-16 bg-green-500/10 backdrop-blur-md rounded-full border border-green-500/30 flex items-center justify-center animate-bounce delay-700">
                  <span className="text-xs font-bold text-green-400">100%<br/>Natural</span>
               </div>
            </div>

            <div className="glass-dark p-8 rounded-3xl shadow-2xl w-full relative z-10 border border-green-500/20 backdrop-blur-xl bg-slate-900/40">
               <div className="flex items-center justify-center gap-4 mb-6 border-b border-green-500/10 pb-6">
                  <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => (
                       <img key={i} className="w-10 h-10 rounded-full border-2 border-slate-900" src={`https://picsum.photos/40?random=${i}`} alt="User" />
                     ))}
                  </div>
                  <div className="text-xs font-bold text-slate-300">
                    <span className="text-green-400 text-lg mr-1 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">★★★★★</span>
                    <br/>4.9/5 from 10k+ Users
                  </div>
               </div>
               
              <button 
                id="cta"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black py-5 px-6 rounded-xl text-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] transform transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-pulse-glow border border-green-400/30 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
                  {content.cta} 
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-5 flex items-center justify-center gap-2">
                 <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                 High Demand: Limited Stock Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};