import React from 'react';
import { Translations } from './types';

// Icons for benefits section - updated to lighter green for dark mode
export const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 mb-4 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);

export const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 mb-4 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

export const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 mb-4 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

export const TRANSLATIONS: Translations = {
  en: {
    header: {
      logoText: "VitalTrim",
      cta: "Order Now",
    },
    hero: {
      badge: "Advanced Weight Loss Formula",
      headline: "Activate Your Body's Natural Fat-Burning Furnace",
      subheadline: "Experience the power of our new thermogenic blend. Melt visceral fat, boost metabolism, and control cravings with our scientifically formulated plant-based solution.",
      cta: "Rush My Order Now",
      videoOverlay: "Watch The Video To Learn How It Works",
    },
    benefits: {
      title: "Why VitalTrim Pro Is Different",
      items: [
        {
          title: "Shape Boost Technology",
          description: "Our proprietary thermogenic formula targets stubborn fat cells while preserving lean muscle mass.",
        },
        {
          title: "Night Guard Complex",
          description: "Includes PM weight management support to keep your metabolism active while ensuring deep, restorative sleep.",
        },
        {
          title: "100% Clean Energy",
          description: "Sustain high energy levels throughout the day without the crash or jitters associated with other supplements.",
        },
      ],
    },
    trust: {
      title: "Trusted By Experts",
      description: "Our formula is backed by scientific research and clinical studies ensuring potency and purity.",
      guaranteeTitle: "100% Satisfaction Guarantee",
      guaranteeText: "Try VitalTrim Pro for 60 days. If you don't see the results you desire, we'll refund every penny. No questions asked.",
    },
    footer: {
      disclaimer: "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary depending on individual factors.",
      copyright: "© 2024 VitalTrim Pro. All Rights Reserved.",
    },
  },
  pt: {
    header: {
      logoText: "VitalTrim",
      cta: "Pedir Agora",
    },
    hero: {
      badge: "Fórmula Avançada de Perda de Peso",
      headline: "Ative a Queima Natural de Gordura do Seu Corpo",
      subheadline: "Experimente o poder da nossa nova mistura termogênica. Derreta a gordura visceral, acelere o metabolismo e controle os desejos com nossa solução à base de plantas formulada cientificamente.",
      cta: "Quero Meu Pedido Agora",
      videoOverlay: "Assista ao Vídeo para Entender Como Funciona",
    },
    benefits: {
      title: "Por Que VitalTrim Pro é Diferente",
      items: [
        {
          title: "Tecnologia Shape Boost",
          description: "Nossa fórmula termogênica exclusiva ataca as células de gordura teimosas enquanto preserva a massa muscular magra.",
        },
        {
          title: "Complexo Night Guard",
          description: "Inclui suporte para controle de peso noturno para manter seu metabolismo ativo enquanto garante um sono profundo e restaurador.",
        },
        {
          title: "100% Energia Limpa",
          description: "Mantenha altos níveis de energia ao longo do dia sem a queda ou nervosismo associados a outros suplementos.",
        },
      ],
    },
    trust: {
      title: "Confiado por Especialistas",
      description: "Nossa fórmula é apoiada por pesquisas científicas e estudos clínicos, garantindo potência e pureza.",
      guaranteeTitle: "Garantia de Satisfação de 100%",
      guaranteeText: "Experimente o VitalTrim Pro por 60 dias. Se você não vir os resultados que deseja, devolveremos cada centavo. Sem perguntas.",
    },
    footer: {
      disclaimer: "Estas declarações não foram avaliadas pela Food and Drug Administration. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar dependendo de fatores individuais.",
      copyright: "© 2024 VitalTrim Pro. Todos os Direitos Reservados.",
    },
  },
};