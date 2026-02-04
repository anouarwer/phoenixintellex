import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Settings2, 
  Network, 
  Droplets, 
  TrendingUp, 
  FileCheck, 
  Plug 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CapabilitiesSectionProps {
  className?: string;
}

const capabilities = [
  {
    icon: Settings2,
    title: 'Scenario Builder',
    description: 'Design multi-factor shocks with intuitive parameters.',
  },
  {
    icon: Network,
    title: 'Contagion Engine',
    description: 'Model how defaults and downgrades propagate through networks.',
  },
  {
    icon: Droplets,
    title: 'Liquidity Lens',
    description: 'Identify funding gaps and rollover risk under stress.',
  },
  {
    icon: TrendingUp,
    title: 'Capital Impact',
    description: 'Translate losses into regulatory capital and ratio projections.',
  },
  {
    icon: FileCheck,
    title: 'Audit Trail',
    description: 'Every assumption is versioned, exportable, and reproducible.',
  },
  {
    icon: Plug,
    title: 'API & Integration',
    description: 'Connect to data warehouses and risk systems.',
  },
];

export default function CapabilitiesSection({ className = '' }: CapabilitiesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !heading || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(heading,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Cards animation with stagger
      cards.forEach((card) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
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
      id="capabilities"
      className={`relative bg-[#05060B] py-[10vh] px-6 lg:px-[6vw] ${className}`}
    >
      {/* Background Grid Decoration */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45, 107, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 107, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="mb-12">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
            Capabilities
          </h2>
          <p className="text-[16px] text-[#A6B3D0] max-w-[600px]">
            A complete toolkit for stress testing, scenario design, and portfolio intelligence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                ref={el => { cardsRef.current[index] = el; }}
                className="feature-card"
              >
                <div className="w-12 h-12 rounded-lg bg-[#2D6BFF]/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[#2D6BFF]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-[14px] text-[#A6B3D0] leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
