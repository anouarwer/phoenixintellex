import { create } from 'zustand';

type Language = 'en' | 'es';

interface Translation {
  // Navigation & Hero
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

  // Product (What It Is)
  product_label: string;
  product_title: string;
  product_body_1: string;
  product_body_2: string;
  product_cta: string;

  // Method (How It Works)
  method_label: string;
  method_title: string;
  method_body_1: string;
  method_body_2: string;
  method_cta: string;

  // Value (Why It Matters)
  value_label: string;
  value_title: string;
  value_body_1: string;
  value_body_2: string;
  value_cta: string;

  // Audience (Who It's For)
  audience_label: string;
  audience_title: string;
  audience_body_risk: string;
  audience_body_portfolio: string;
  audience_body_supervisors: string;
  audience_cta: string;

  // Capabilities
  capabilities_title: string;
  capabilities_subtitle: string;
  cap_1_title: string;
  cap_1_desc: string;
  cap_2_title: string;
  cap_2_desc: string;
  cap_3_title: string;
  cap_3_desc: string;
  cap_4_title: string;
  cap_4_desc: string;
  cap_5_title: string;
  cap_5_desc: string;
  cap_6_title: string;
  cap_6_desc: string;

  // System (Architecture)
  system_label: string;
  system_title: string;
  system_desc: string;
  system_step_1_title: string;
  system_step_1_desc: string;
  system_step_2_title: string;
  system_step_2_desc: string;
  system_step_3_title: string;
  system_step_3_desc: string;

  // Security
  security_label: string;
  security_title: string;
  security_desc: string;
  sec_feat_1: string;
  sec_feat_2: string;
  sec_feat_3: string;
  sec_deploy_saas: string;
  sec_deploy_saas_desc: string;
  sec_deploy_private: string;
  sec_deploy_private_desc: string;
  sec_deploy_onprem: string;
  sec_deploy_onprem_desc: string;

  // Contact
  contact_label: string;
  contact_title: string;
  contact_desc: string;
  contact_cta: string;
  contact_form_name: string;
  contact_form_institution: string;
  contact_form_role: string;
  contact_form_email: string;
  contact_form_message: string;
  contact_form_privacy: string;
  contact_success_title: string;
  contact_success_desc: string;
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
    method_label: "METHOD",
    method_title: "Simulate scenarios. Measure what matters.",
    method_body_1: "Define shocks—rate moves, liquidity events, sector stress—and observe propagation across exposures.",
    method_body_2: "Our engine translates complex portfolios into clear, auditable outputs for decision-makers.",
    method_cta: "Explore the engine",
    value_label: "VALUE",
    value_title: "Turn complex data into decisive action.",
    value_body_1: "Reduce time-to-decision from weeks to hours.",
    value_body_2: "Align risk, treasury, and leadership around one consistent view of the portfolio.",
    value_cta: "Request a demo",
    audience_label: "AUDIENCE",
    audience_title: "Built for banks, asset managers, and supervisors.",
    audience_body_risk: "Risk officers use Phoenix to stress-test exposures.",
    audience_body_portfolio: "Portfolio managers use it to size positions with confidence.",
    audience_body_supervisors: "Supervisors use it to benchmark systemic scenarios.",
    audience_cta: "See use cases",
    capabilities_title: "Capabilities",
    capabilities_subtitle: "A complete toolkit for stress testing, scenario design, and portfolio intelligence.",
    cap_1_title: "Scenario Builder",
    cap_1_desc: "Design multi-factor shocks with intuitive parameters.",
    cap_2_title: "Contagion Engine",
    cap_2_desc: "Model how defaults and downgrades propagate through networks.",
    cap_3_title: "Liquidity Lens",
    cap_3_desc: "Identify funding gaps and rollover risk under stress.",
    cap_4_title: "Capital Impact",
    cap_4_desc: "Translate losses into regulatory capital and ratio projections.",
    cap_5_title: "Audit Trail",
    cap_5_desc: "Every assumption is versioned, exportable, and reproducible.",
    cap_6_title: "API & Integration",
    cap_6_desc: "Connect to data warehouses and risk systems.",
    system_label: "SYSTEM",
    system_title: "Data model architecture",
    system_desc: "Phoenix normalizes disparate sources into a unified graph: counterparties, instruments, collateral, and macro factors.",
    system_step_1_title: "Ingest",
    system_step_1_desc: "Connect via API, file, or warehouse.",
    system_step_2_title: "Enrich",
    system_step_2_desc: "Add ratings, market data, and internal overlays.",
    system_step_3_title: "Simulate",
    system_step_3_desc: "Run scenarios and export actionable outputs.",
    security_label: "SECURITY",
    security_title: "Security & deployment",
    security_desc: "Enterprise-grade controls. Flexible deployment.",
    sec_feat_1: "Encryption at rest and in transit.",
    sec_feat_2: "Role-based access with SSO/SAML.",
    sec_feat_3: "Compliance-ready documentation and audit logs.",
    sec_deploy_saas: "Cloud SaaS",
    sec_deploy_saas_desc: "Fastest time-to-value.",
    sec_deploy_private: "Private Cloud",
    sec_deploy_private_desc: "Dedicated infrastructure.",
    sec_deploy_onprem: "On-Premise",
    sec_deploy_onprem_desc: "Full control in your environment.",
    contact_label: "CONTACT",
    contact_title: "Ready to simulate your next decision?",
    contact_desc: "Talk to our team about a pilot.",
    contact_cta: "Submit Request",
    contact_form_name: "Full Name *",
    contact_form_institution: "Institution *",
    contact_form_role: "Role / Title *",
    contact_form_email: "Work Email *",
    contact_form_message: "Message",
    contact_form_privacy: "I acknowledge that this inquiry will be handled under NDA and that PHOENIX INTELLEX will contact me at the provided email address.",
    contact_success_title: "Thank you for your interest",
    contact_success_desc: "We have received your request and will contact you within 48-72 hours to schedule a demonstration.",
  },
  es: {
    hero_title_1: "Redefiniendo",
    hero_title_2: "la realidad financiera.",
    hero_subtitle: "Una capa de inteligencia basada en la física para el crédito, la liquidez y el riesgo sistémico.",
    hero_body_1: "Phoenix Intellex simula cómo se propaga el estrés a través de las carteras, antes de que aparezca en los titulares.",
    hero_body_2: "Diseñado para bancos, gestores de activos y supervisores que necesitan claridad ante la incertidumbre.",
    cta_demo: "Solicitar demostración",
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
    method_label: "MÉTODO",
    method_title: "Simular escenarios. Medir lo que importa.",
    method_body_1: "Defina choques (movimientos de tasas, eventos de liquidez, estrés sectorial) y observe la propagación a través de las exposiciones.",
    method_body_2: "Nuestro motor traduce carteras complejas en resultados claros y auditables para los tomadores de decisiones.",
    method_cta: "Explorar el motor",
    value_label: "VALOR",
    value_title: "Convierta datos complejos en acciones decisivas.",
    value_body_1: "Reduzca el tiempo de decisión de semanas a horas.",
    value_body_2: "Alinee el riesgo, la tesorería y el liderazgo en torno a una visión consistente de la cartera.",
    value_cta: "Solicitar demostración",
    audience_label: "AUDIENCIA",
    audience_title: "Diseñado para bancos, gestores de activos y supervisores.",
    audience_body_risk: "Los responsables de riesgo usan Phoenix para realizar pruebas de estrés en las exposiciones.",
    audience_body_portfolio: "Los gestores de carteras lo usan para dimensionar posiciones con confianza.",
    audience_body_supervisors: "Los supervisores lo usan para comparar escenarios sistémicos.",
    audience_cta: "Ver casos de uso",
    capabilities_title: "Capacidades",
    capabilities_subtitle: "Un conjunto completo de herramientas para pruebas de estrés, diseño de escenarios e inteligencia de cartera.",
    cap_1_title: "Constructor de Escenarios",
    cap_1_desc: "Diseñe choques multifactoriales con parámetros intuitivos.",
    cap_2_title: "Motor de Contagio",
    cap_2_desc: "Modele cómo los incumplimientos y las rebajas de calificación se propagan a través de las redes.",
    cap_3_title: "Lente de Liquidez",
    cap_3_desc: "Identifique brechas de financiamiento y riesgo de renovación bajo estrés.",
    cap_4_title: "Impacto de Capital",
    cap_4_desc: "Traduzca las pérdidas en proyecciones de capital regulatorio y ratios.",
    cap_5_title: "Pista de Auditoría",
    cap_5_desc: "Cada suposición está versionada, es exportable y reproducible.",
    cap_6_title: "API e Integración",
    cap_6_desc: "Conéctese a almacenes de datos y sistemas de riesgo.",
    system_label: "SISTEMA",
    system_title: "Arquitectura del modelo de datos",
    system_desc: "Phoenix normaliza fuentes dispares en un gráfico unificado: contrapartes, instrumentos, garantías y factores macro.",
    system_step_1_title: "Ingesta",
    system_step_1_desc: "Conecte vía API, archivo o almacén.",
    system_step_2_title: "Enriquecimiento",
    system_step_2_desc: "Añada calificaciones, datos de mercado y superposiciones internas.",
    system_step_3_title: "Simulación",
    system_step_3_desc: "Ejecute escenarios y exporte resultados accionables.",
    security_label: "SEGURIDAD",
    security_title: "Seguridad y despliegue",
    security_desc: "Controles de nivel empresarial. Despliegue flexible.",
    sec_feat_1: "Encriptación en reposo y en tránsito.",
    sec_feat_2: "Acceso basado en roles con SSO/SAML.",
    sec_feat_3: "Documentación lista para cumplimiento y registros de auditoría.",
    sec_deploy_saas: "SaaS en la Nube",
    sec_deploy_saas_desc: "Tiempo de valor más rápido.",
    sec_deploy_private: "Nube Privada",
    sec_deploy_private_desc: "Infraestructura dedicada.",
    sec_deploy_onprem: "On-Premise",
    sec_deploy_onprem_desc: "Control total en su entorno.",
    contact_label: "CONTACTO",
    contact_title: "¿Listo para simular su próxima decisión?",
    contact_desc: "Hable con nuestro equipo sobre un piloto.",
    contact_cta: "Enviar Solicitud",
    contact_form_name: "Nombre completo *",
    contact_form_institution: "Institución *",
    contact_form_role: "Cargo / Título *",
    contact_form_email: "Correo de trabajo *",
    contact_form_message: "Mensaje",
    contact_form_privacy: "Reconozco que esta consulta se manejará bajo un acuerdo de confidencialidad (NDA) y que PHOENIX INTELLEX me contactará en la dirección de correo proporcionada.",
    contact_success_title: "Gracias por su interés",
    contact_success_desc: "Hemos recibido su solicitud y nos pondremos en contacto con usted en un plazo de 48-72 horas para programar una demostración.",
  }
};

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export const useLanguage = create<LanguageState>((set) => {
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
