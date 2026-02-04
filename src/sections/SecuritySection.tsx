import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Server, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SecuritySectionProps {
  className?: string;
}

const deploymentOptions = [
  {
    icon: Cloud,
    title: 'Cloud SaaS',
    description: 'Fastest time-to-value.',
    highlight: false,
  },
  {
    icon: Server,
    title: 'Private Cloud',
    description: 'Dedicated infrastructure.',
    highlight: false,
  },
  {
    icon: Lock,
    title: 'On-Premise',
    description: 'Full control in your environment.',
    highlight: true,
  },
];

const securityFeatures = [
  'Encryption at rest and in transit.',
  'Role-based access with SSO/SAML.',
  'Compliance-ready documentation and audit logs.',
];

export default function SecuritySection({ className = '' }: SecuritySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const scanLine = scanLineRef.current;

    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      // Left text animation
      gsap.fromTo(left,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: left,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Right cards animation
      gsap.fromTo(right,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: right,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Scan line animation
      if (scanLine) {
        gsap.fromTo(scanLine,
          { y: '-10vh', opacity: 0 },
          {
            y: '10vh',
            opacity: 0.12,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="security"
      className={`relative bg-[#05060B] py-[10vh] px-6 lg:px-[6vw] ${className}`}
    >
      {/* Scan Line Decoration */}
      <div 
        ref={scanLineRef}
        className="absolute right-0 top-1/2 w-[1px] h-[20vh] bg-gradient-to-b from-transparent via-[#2D6BFF] to-transparent opacity-0 hidden lg:block"
      />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column */}
          <div ref={leftRef} className="lg:w-[48vw]">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
              Security & deployment
            </h2>
            <p className="text-[16px] text-[#A6B3D0] mb-8">
              Enterprise-grade controls. Flexible deployment.
            </p>

            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield size={18} className="text-[#2D6BFF] mt-1 flex-shrink-0" />
                  <p className="text-[15px] text-[#B8C5D6]">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Deployment Cards */}
          <div ref={rightRef} className="lg:w-[52vw]">
            <div className="space-y-4">
              {deploymentOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className={`feature-card flex items-center gap-5 ${
                      option.highlight ? 'border-[#2D6BFF]/30' : ''
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      option.highlight ? 'bg-[#2D6BFF]/20' : 'bg-[#2D6BFF]/10'
                    }`}>
                      <Icon size={22} className="text-[#2D6BFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {option.title}
                      </h3>
                      <p className="text-[14px] text-[#A6B3D0]">
                        {option.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
