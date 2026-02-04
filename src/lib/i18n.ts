import { create } from 'zustand';

type Language = 'en' | 'es';

interface Translation {
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_body_1: string;
  hero_body_2: string;
  cta_demo: string;
  cta_engine: string;
  nav_product: string;
  nav_system: string;
  nav_security: string;
  nav_contact: string;
  scroll_hint: string;
  product_label: string;
  product_title: string;
  product_body_1: string;
  product_body_2: string;
  product_cta: string;
  system_label: string;
  system_title: string;
  system_desc: string;
  security_label: string;
  security_title: string;
  security_desc: string;
  contact_label: string;
  contact_title: string;
  contact_desc: string;
  contact_cta: string;
}

const translations: Record<Language, Translation> = {
  en: {
    hero_title_1: "Redefining",
    hero_title_2: "financial reality.",
    hero_subtitle: "A physics-based intelligence layer for credit, liquidity, and systemic risk.",
    hero_body_1: "Phoenix Intellex simulates how stress propagates through portfolios—before it appears in headlines.",
    hero_body_2: "Built for banks, asset managers, and supervisors who need clarity under uncertainty.",
    cta_demo: "Request a demo",
    cta_engine: "Explore the engine",
    nav_product: "Product",
    nav_system: "System",
    nav_security: "Security",
    nav_contact: "Contact",
    scroll_hint: "Scroll to enter",
    product_label: "PRODUCT",
    product_title: "An intelligence layer that simulates financial stress.",
    product_body_1: "Phoenix Intellex models credit, liquidity, and contagion as a unified system.",
    product_body_2: "Instead of static risk reports, you get dynamic scenarios—updated as markets move.",
    product_cta: "See how it works",
    system_label: "SYSTEM",
    system_title: "A modular, scalable architecture.",
    system_desc: "Built on a foundation of physics and data science to handle massive scale.",
    security_label: "SECURITY",
    security_title: "Enterprise-grade protection.",
    security_desc: "Your data is encrypted and protected with the highest security standards.",
    contact_label: "CONTACT",
    contact_title: "Ready to redefine your financial reality?",
    contact_desc: "Get in touch with our team to learn more about Phoenix Intellex.",
    contact_cta: "Send Message",
  },
  es: {
    hero_title_1: "Redefiniendo",
    hero_title_2: "la realidad financiera.",
    hero_subtitle: "Una capa de inteligencia basada en la física para el crédito, la liquidez y el riesgo sistémico.",
    hero_body_1: "Phoenix Intellex simula cómo se propaga el estrés a través de las carteras, antes de que aparezca en los titulares.",
    hero_body_2: "Diseñado para bancos, gestores de activos y supervisores que necesitan claridad ante la incertidumbre.",
    cta_demo: "Solicitar una demostración",
    cta_engine: "Explorar el motor",
    nav_product: "Producto",
    nav_system: "Sistema",
    nav_security: "Seguridad",
    nav_contact: "Contacto",
    scroll_hint: "Desliza para entrar",
    product_label: "PRODUCTO",
    product_title: "Una capa de inteligencia que simula el estrés financiero.",
    product_body_1: "Phoenix Intellex modela el crédito, la liquidez y el contagio como un sistema unificado.",
    product_body_2: "En lugar de informes de riesgo estáticos, obtienes escenarios dinámicos, actualizados según el movimiento de los mercados.",
    product_cta: "Ver cómo funciona",
    system_label: "SISTEMA",
    system_title: "Una arquitectura modular y escalable.",
    system_desc: "Construido sobre una base de física y ciencia de datos para manejar escalas masivas.",
    security_label: "SEGURIDAD",
    security_title: "Protección de nivel empresarial.",
    security_desc: "Sus datos están encriptados y protegidos con los más altos estándares de seguridad.",
    contact_label: "CONTACTO",
    contact_title: "¿Listo para redefinir su realidad financiera?",
    contact_desc: "Póngase en contacto con nuestro equipo para obtener más información sobre Phoenix Intellex.",
    contact_cta: "Enviar Mensaje",
  }
};

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export const useLanguage = create<LanguageState>((set) => {
  // Auto-detection logic
  const detectLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'es' ? 'es' : 'en';
    }
    return 'en';
  };

  const initialLang = detectLanguage();

  return {
    language: initialLang,
    setLanguage: (lang) => set({ language: lang, t: translations[lang] }),
    t: translations[initialLang],
  };
});
