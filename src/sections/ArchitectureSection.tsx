import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Layers, Cpu } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { useIsMobile } from '../hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

interface ArchitectureSectionProps {
  className?: string;
}

export default function ArchitectureSection({ className = '' }: ArchitectureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const layersRef = useRef<HTMLDivElement>(null);
  
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  const steps = [
    {
      number: '01',
      icon: Database,
      title: t.system_step_1_title,
      description: t.system_step_1_desc,
    },
    {
      number: '02',
      icon: Layers,
      title: t.system_step_2_title,
      description: t.system_step_2_desc,
    },
    {
      number: '03',
      icon: Cpu,
      title: t.system_step_3_title,
      description: t.system_step_3_desc,
    },
  ];

  const layerLabels = language === 'es' ? [
    'Informes y APIs',
    'Motor de Simulación',
    'Capa de Enriquecimiento',
    'Ingestión de Datos',
  ] : [
    'Reporting & APIs',
    'Simulation Engine',
    'Enrichment Layer',
    'Data Ingestion',
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const stepElements = stepsRef.current.filter(Boolean);
    const layers = layersRef.current;

    if (!section || !text || !layers) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(text,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.6,
          }
        }
      );

      if (!isMobile) {
        gsap.fromTo(layers,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: layers,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.6,
            }
          }
        );
      }

      stepElements.forEach((step) => {
        gsap.fromTo(step,
          { y: 30, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 90%',
              end: 'top 70%',
              scrub: 0.6,
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section 
      ref={sectionRef}
      id="architecture"
      className={`relative bg-[#05060B] py-[10vh] px-6 lg:px-[6vw] ${className}`}
    >
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div ref={textRef} className="lg:w-[46vw]">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
              {t.system_title}
            </h2>
            <p className="font-mono-label text-[#2D6BFF] mb-6">
              {language === 'es' ? 'INGERIR · ENRIQUECER · SIMULAR · INFORMAR' : 'INGEST · ENRICH · SIMULATE · REPORT'}
            </p>
            <p className="text-[16px] text-[#A6B3D0] leading-relaxed max-w-[500px]">
              {t.system_desc}
            </p>
          </div>

          <div ref={layersRef} className="lg:w-[40vw] hidden lg:block">
            <div className="relative space-y-3">
              {layerLabels.map((label, index) => (
                <div
                  key={label}
                  className={`bg-[#2D6BFF] rounded-lg px-5 py-4 text-white font-medium text-sm`}
                  style={{
                    opacity: 1 - index * 0.15,
                    transform: `translateX(${index * 8}px)`,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                ref={el => { stepsRef.current[index] = el; }}
                className="relative"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2D6BFF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#2D6BFF]" />
                  </div>
                  <div>
                    <span className="font-mono-label text-[#6B7280] text-[10px]">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#A6B3D0] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
