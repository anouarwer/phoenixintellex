import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Layers, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ArchitectureSectionProps {
  className?: string;
}

const steps = [
  {
    number: '01',
    icon: Database,
    title: 'Ingest',
    description: 'Connect via API, file, or warehouse.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Enrich',
    description: 'Add ratings, market data, and internal overlays.',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Simulate',
    description: 'Run scenarios and export actionable outputs.',
  },
];

export default function ArchitectureSection({ className = '' }: ArchitectureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const layersRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const steps = stepsRef.current.filter(Boolean);
    const layers = layersRef.current;

    if (!section || !text || !layers) return;

    const ctx = gsap.context(() => {
      // Text block animation
      gsap.fromTo(text,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Layer diagram animation
      gsap.fromTo(layers,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: layers,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Steps animation
      steps.forEach((step) => {
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
              start: 'top 85%',
              end: 'top 65%',
              scrub: true,
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="architecture"
      className={`relative bg-[#05060B] py-[10vh] px-6 lg:px-[6vw] ${className}`}
    >
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Text Block */}
          <div ref={textRef} className="lg:w-[46vw]">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
              Data model architecture
            </h2>
            <p className="font-mono-label text-[#2D6BFF] mb-6">
              INGEST · ENRICH · SIMULATE · REPORT
            </p>
            <p className="text-[16px] text-[#A6B3D0] leading-relaxed max-w-[500px]">
              Phoenix normalizes disparate sources into a unified graph: counterparties, instruments, collateral, and macro factors.
            </p>
          </div>

          {/* Right Layer Diagram */}
          <div ref={layersRef} className="lg:w-[40vw] hidden lg:block">
            <div className="relative space-y-3">
              {[
                { label: 'Reporting & APIs', color: 'bg-[#2D6BFF]' },
                { label: 'Simulation Engine', color: 'bg-[#1E5AEB]' },
                { label: 'Enrichment Layer', color: 'bg-[#1645C0]' },
                { label: 'Data Ingestion', color: 'bg-[#0F3399]' },
              ].map((layer, index) => (
                <div
                  key={layer.label}
                  className={`${layer.color} rounded-lg px-5 py-4 text-white font-medium text-sm`}
                  style={{
                    opacity: 1 - index * 0.15,
                    transform: `translateX(${index * 8}px)`,
                  }}
                >
                  {layer.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
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
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-6 h-[1px] bg-gradient-to-r from-[#2D6BFF]/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
