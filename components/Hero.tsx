import React from 'react';
import { TranslationContent } from '../types';

interface HeroProps {
  content: TranslationContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* BACKGROUND IMAGE - Wide Product Family Shot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://iili.io/fSECKZP.jpg" 
          alt="VitalTrim Product Family" 
          className="w-full h-full object-cover object-center opacity-40" 
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        <div className="absolute inset-0 bg-circuit opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Cyber/Tech Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <div className="text-left opacity-0 animate-fade-in-up">
            <div className="inline-flex mb-6">
               <div className="p-[1px] rounded-full bg-gradient-to-r from-green-500/50 via-emerald-400/50 to-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <span className="inline-flex items-center py-1.5 px-5 rounded-full bg-slate-950/90 backdrop-blur-md text-green-400 text-sm font-bold tracking-wide uppercase border border-green-500/20">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse shadow-[0_0_8px_#4ade80]"></span>
                    {content.badge}
                  </span>
               </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter text-glow drop-shadow-2xl">
              {content.headline}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl font-medium drop-shadow-lg mb-10">
              {content.subheadline}
            </p>

            <div className="flex flex-col gap-8 mb-10">
               <button 
                  id="cta"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black py-5 px-10 rounded-full text-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] transform transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-pulse-glow border border-green-400/30 relative overflow-hidden group uppercase tracking-widest"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
                    {content.cta} 
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
               </button>

               {/* TRUST & PAYMENT SECTION */}
               <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                  {/* Money Back Guarantee Badge */}
                  <div className="flex items-center gap-2">
                     <div className="w-16 h-16 rounded-full border-2 border-green-500 bg-slate-900 flex items-center justify-center relative shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                        <div className="absolute inset-1 border border-dashed border-green-500/50 rounded-full"></div>
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     </div>
                     <div className="text-left">
                        <p className="text-green-500 font-black text-sm uppercase leading-none mb-1">100% Money Back</p>
                        <p className="text-white font-bold text-xs uppercase tracking-wide">Guarantee</p>
                     </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-10 bg-slate-700"></div>

                  {/* Payment Icons */}
                  <div className="flex items-center gap-3 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      {/* VISA */}
                      <div className="bg-white/10 p-1 rounded backdrop-blur-sm">
                        <svg className="h-6 w-10 text-white" viewBox="0 0 36 24" fill="currentColor">
                           <path d="M14.636 14.652L16.488 4.708H13.68L11.832 14.652H14.636ZM24.468 4.888C24.432 4.96 23.364 8.752 23.364 8.752L22.284 5.392C22.068 4.78 21.168 4.708 21.168 4.708H17.46L21.852 20H25.272L29.628 4.708H25.68C25.68 4.708 24.576 4.744 24.468 4.888ZM34.236 4.708H30.744C30.744 4.708 29.52 4.744 29.376 5.572L25.308 20H28.188L28.764 17.588H32.328L32.652 20H35.424L34.236 4.708ZM29.52 15.064L30.996 9.424L31.86 15.064H29.52ZM11.088 14.652L11.52 12.388L8.64 5.356C8.64 5.356 8.28 4.708 7.308 4.708H1.26L1.116 5.284C1.116 5.284 3.636 5.752 4.356 6.328C5.004 6.904 5.076 7.408 5.076 7.408L7.848 19.964H11.772L15.3 4.708H12.3L11.088 14.652Z"/>
                        </svg>
                      </div>
                      
                      {/* MASTERCARD */}
                      <div className="bg-white/10 p-1 rounded backdrop-blur-sm">
                         <svg className="h-6 w-10" viewBox="0 0 36 24" fill="none">
                           <circle cx="12" cy="12" r="8" fill="#EB001B" fillOpacity="0.9"/>
                           <circle cx="24" cy="12" r="8" fill="#F79E1B" fillOpacity="0.9"/>
                           <path d="M18 17.5359C16.3262 16.3333 15.2285 14.2989 15.2285 12C15.2285 9.7011 16.3262 7.66668 18 6.46411C19.6738 7.66668 20.7715 9.7011 20.7715 12C20.7715 14.2989 19.6738 16.3333 18 17.5359Z" fill="#FF5F00"/>
                        </svg>
                      </div>

                      {/* PAYPAL */}
                      <div className="bg-white/10 p-1 rounded backdrop-blur-sm">
                         <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.62.848 4.525-.579 2.42-1.936 4.15-3.666 5.28-1.505.981-3.328 1.305-5.58 1.305h-.75c-.53 0-.982.385-1.07.91l-.945 5.707a1.002 1.002 0 0 0 .991 1.167l-1.9 1.633z"/>
                         </svg>
                      </div>

                      {/* SECURE SHIELD */}
                      <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded text-white text-[10px] font-bold tracking-wider">
                         <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                         SECURE
                      </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side - Video/Visual Focus */}
          <div className="relative opacity-0 animate-slide-in-right delay-200">
             <div className="relative aspect-video bg-slate-950 rounded-2xl shadow-[0_0_50px_rgba(34,197,94,0.1)] overflow-hidden border border-green-500/30 group">
                {/* Fixed Video Source with Poster */}
                <video 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-green-digital-circuit-loop-23423-large.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay Text on Video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-green-500/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-green-400 mb-4 animate-pulse hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                    </div>
                    <span className="text-white font-bold tracking-widest text-sm uppercase drop-shadow-md bg-slate-900/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">{content.videoOverlay}</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};