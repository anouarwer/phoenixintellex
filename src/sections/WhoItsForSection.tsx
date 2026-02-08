import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { useIsMobile } from '../hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

interface WhoItsForSectionProps {
  className?: string;
}

export default function WhoItsForSection({ className = '' }: WhoItsForSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const image = imageRef.current;
    const label = labelRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const cta = ctaRef.current;

    if (!section || !panel || !image || !label || !headline || !body || !cta) return;

    const ctx = gsap.context(() => {
      if (!isMobile) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=130%',
            pin: true,
            scrub: 0.6,
          }
        });

        scrollTl
          .fromTo(panel, { x: '60vw', opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
          .fromTo(image, { x: '-60vw', opacity: 0, scale: 1.08 }, { x: 0, opacity: 1, scale: 1, ease: 'none' }, 0)
          .fromTo(label, { y: '6vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.08)
          .fromTo(headline, { y: '10vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.08)
          .fromTo(body, { y: '6vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.14)
          .fromTo(cta, { y: '4vh', opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.18);

        scrollTl
          .fromTo(panel, { x: 0, opacity: 1 }, { x: '18vw', opacity: 0, ease: 'power2.in' }, 0.7)
          .fromTo(image, { x: 0, opacity: 1 }, { x: '-18vw', opacity: 0.5, ease: 'power2.in' }, 0.7)
          .fromTo([label, headline, body, cta], { y: 0, opacity: 1 }, { y: '-4vh', opacity: 0, ease: 'power2.in', stagger: 0.02 }, 0.7);
      } else {
        gsap.fromTo([label, headline, body, cta], 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            }
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  const scrollToCapabilities = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      id="who-its-for"
      className={`${isMobile ? 'relative min-h-screen py-20' : 'pinned-section'} ${className}`}
    >
      <div 
        ref={imageRef}
        className={`absolute left-0 top-0 w-full lg:w-[56vw] h-full ${isMobile ? 'z-[-1] opacity-30' : 'hidden lg:block'}`}
      >
        <img src="/images/hero_globe_streams.jpg" alt="" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-${isMobile ? 'b' : 'l'} from-[#05060B] via-transparent to-transparent`} />
      </div>

      <div 
        ref={panelRef}
        className={`${isMobile ? 'relative w-full' : 'absolute right-0 top-0 w-full lg:w-[44vw] h-full info-panel'} flex flex-col justify-center px-6 lg:px-[4vw] py-[8vh]`}
      >
        <span ref={labelRef} className="font-mono-label text-[#2D6BFF] mb-6">{t.audience_label}</span>
        <h2 ref={headlineRef} className={`${isMobile ? 'text-[32px]' : 'text-[clamp(28px,3.2vw,44px)]'} font-bold text-white leading-[1.05] mb-8 lg:max-w-[36vw]`}>
          {t.audience_title}
        </h2>
        <div ref={bodyRef} className={`${isMobile ? 'max-w-full' : 'max-w-[34vw]'} mb-10 space-y-3`}>
          <p className="text-[16px] text-[#A6B3D0] leading-relaxed">
            <span className="text-white font-medium">{language === 'es' ? 'Responsables de riesgo' : 'Risk officers'}</span> {t.audience_body_risk.replace(/Risk officers /i, '')}
          </p>
          <p className="text-[16px] text-[#A6B3D0] leading-relaxed">
            <span className="text-white font-medium">{language === 'es' ? 'Gestores de carteras' : 'Portfolio managers'}</span> {t.audience_body_portfolio.replace(/Portfolio managers /i, '')}
          </p>
          <p className="text-[16px] text-[#A6B3D0] leading-relaxed">
            <span className="text-white font-medium">{language === 'es' ? 'Supervisores' : 'Supervisors'}</span> {t.audience_body_supervisors.replace(/Supervisors /i, '')}
          </p>
        </div>
        <button ref={ctaRef} onClick={scrollToCapabilities} className="btn-pill-outline flex items-center gap-2 w-fit">
          {t.audience_cta} <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
