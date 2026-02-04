import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { useIsMobile } from '../hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scanLinesRef = useRef<SVGSVGElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const body = bodyRef.current;
    const cta = ctaRef.current;
    const scanLines = scanLinesRef.current;
    const image = imageRef.current;

    if (!section || !content || !headline || !subhead || !body || !cta || !scanLines || !image) return;

    const ctx = gsap.context(() => {
      gsap.set([headline, subhead], { opacity: 0, y: 24 });
      gsap.set(body, { opacity: 0, y: 18 });
      gsap.set(cta, { opacity: 0, y: 18 });
      gsap.set(scanLines, { opacity: 0 });
      gsap.set(image, { opacity: 0, scale: 1.06 });

      const loadTl = gsap.timeline({ delay: 0.2 });
      
      loadTl
        .to(image, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' })
        .to(headline, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(subhead, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(body, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(cta, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(scanLines, { opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2');

      // Only enable complex scroll animations on desktop
      if (!isMobile) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=120%',
            pin: true,
            scrub: 0.6,
            onLeaveBack: () => {
              gsap.set([headline, subhead, body, cta], { opacity: 1, x: 0, y: 0 });
              gsap.set(scanLines, { opacity: 1, x: 0 });
              gsap.set(image, { opacity: 1, scale: 1 });
            }
          }
        });

        scrollTl
          .fromTo(headline, { x: 0, opacity: 1 }, { x: '-18vw', opacity: 0, ease: 'power2.in' }, 0.7)
          .fromTo(subhead, { x: 0, opacity: 1 }, { x: '-14vw', opacity: 0, ease: 'power2.in' }, 0.72)
          .fromTo(body, { x: 0, opacity: 1 }, { x: '-10vw', opacity: 0, ease: 'power2.in' }, 0.74)
          .fromTo(cta, { x: 0, opacity: 1 }, { x: '-8vw', opacity: 0, ease: 'power2.in' }, 0.76)
          .fromTo(scanLines, { x: 0, opacity: 1 }, { x: '-12vw', opacity: 0, ease: 'power2.in' }, 0.7)
          .fromTo(image, { scale: 1, opacity: 1 }, { scale: 1.06, opacity: 0.65, ease: 'power2.in' }, 0.7);
      }
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  const scrollToNext = () => {
    document.getElementById('what-it-is')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className={`${isMobile ? 'relative min-h-screen py-20' : 'pinned-section'} ${className}`}
    >
      <div ref={imageRef} className="absolute inset-0 z-[1]">
        <img src="/images/hero_globe_streams.jpg" alt="Digital globe" className="w-full h-full object-cover" />
        <div className="gradient-overlay absolute inset-0" />
      </div>

      <svg ref={scanLinesRef} className="absolute inset-0 z-[5] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="70" x2="40" y2="100" className="scan-line" />
        <line x1="5" y1="65" x2="45" y2="95" className="scan-line" />
      </svg>

      <div ref={contentRef} className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-[6vw]">
        <div className="max-w-[88vw] pt-[10vh]">
          <h1 ref={headlineRef} className="text-[clamp(32px,5.5vw,78px)] font-bold text-white leading-[0.95] mb-4">
            {t.hero_title_1}
          </h1>
          <h1 className="text-[clamp(32px,5.5vw,78px)] font-bold text-white leading-[0.95] mb-8">
            {t.hero_title_2}
          </h1>
          
          <p ref={subheadRef} className="text-[clamp(18px,2vw,28px)] text-[#B8C5D6] font-medium max-w-[600px] mb-8">
            {t.hero_subtitle}
          </p>
          
          <div ref={bodyRef} className="max-w-[420px] mb-10">
            <p className="text-[15px] text-[#A6B3D0] leading-relaxed mb-4">{t.hero_body_1}</p>
            <p className="text-[15px] text-[#A6B3D0] leading-relaxed">{t.hero_body_2}</p>
          </div>
          
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button onClick={scrollToContact} className="btn-pill-primary flex items-center gap-2">
              {t.cta_demo} <ArrowRight size={18} />
            </button>
            <button onClick={scrollToNext} className="btn-pill-outline flex items-center gap-2">
              {t.cta_engine} <ChevronDown size={18} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-[4vh] right-6 lg:right-[4vw]">
          <span className="font-mono-label text-[#6B7280]">{t.scroll_hint}</span>
        </div>
      </div>
    </section>
  );
}
