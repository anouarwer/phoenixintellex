import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Server, Cloud } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { useIsMobile } from '../hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

interface SecuritySectionProps {
  className?: string;
}

export default function SecuritySection({ className = '' }: SecuritySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  const deploymentOptions = [
    {
      icon: Cloud,
      title: language === 'es' ? 'SaaS en la Nube' : 'Cloud SaaS',
      description: language === 'es' ? 'Tiempo de valor más rápido.' : 'Fastest time-to-value.',
      highlight: false,
    },
    {
      icon: Server,
      title: language === 'es' ? 'Nube Privada' : 'Private Cloud',
      description: language === 'es' ? 'Infraestructura dedicada.' : 'Dedicated infrastructure.',
      highlight: false,
    },
    {
      icon: Lock,
      title: language === 'es' ? 'On-Premise' : 'On-Premise',
      description: language === 'es' ? 'Control total en su entorno.' : 'Full control in your environment.',
      highlight: true,
    },
  ];

  const securityFeatures = language === 'es' ? [
    'Encriptación en reposo y en tránsito.',
    'Acceso basado en roles con SSO/SAML.',
    'Documentación lista para cumplimiento y registros de auditoría.',
  ] : [
    'Encryption at rest and in transit.',
    'Role-based access with SSO/SAML.',
    'Compliance-ready documentation and audit logs.',
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const scanLine = scanLineRef.current;

    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(left,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: left,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.6,
          }
        }
      );

      gsap.fromTo(right,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: right,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.6,
          }
        }
      );

      if (scanLine && !isMobile) {
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
  }, [isMobile]);

  return (
    <section 
      ref={sectionRef}
      id="security"
      className={`relative bg-[#05060B] py-[10vh] px-6 lg:px-[6vw] ${className}`}
    >
      <div 
        ref={scanLineRef}
        className="absolute right-0 top-1/2 w-[1px] h-[20vh] bg-gradient-to-b from-transparent via-[#2D6BFF] to-transparent opacity-0 hidden lg:block"
      />

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div ref={leftRef} className="lg:w-[48vw]">
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
              {language === 'es' ? 'Seguridad y despliegue' : 'Security & deployment'}
            </h2>
            <p className="text-[16px] text-[#A6B3D0] mb-8">
              {t.security_desc}
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
