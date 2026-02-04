import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
      // Set initial states for load animation
      gsap.set([headline, subhead], { opacity: 0, y: 24 });
      gsap.set(body, { opacity: 0, y: 18 });
      gsap.set(cta, { opacity: 0, y: 18 });
      gsap.set(scanLines, { opacity: 0 });
      gsap.set(image, { opacity: 0, scale: 1.06 });

      // Load animation timeline
      const loadTl = gsap.timeline({ delay: 0.2 });
      
      loadTl
        .to(image, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' })
        .to(headline, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(subhead, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(body, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(cta, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .to(scanLines, { opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2');

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([headline, subhead, body, cta], { opacity: 1, x: 0, y: 0 });
            gsap.set(scanLines, { opacity: 1, x: 0 });
            gsap.set(image, { opacity: 1, scale: 1 });
          }
        }
      });

      // Phase 1 (0-30%): Hold - elements stay visible
      // Phase 2 (30-70%): Settle - static
      // Phase 3 (70-100%): Exit
      scrollTl
        .fromTo(headline, 
          { x: 0, opacity: 1 }, 
          { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(subhead, 
          { x: 0, opacity: 1 }, 
          { x: '-14vw', opacity: 0, ease: 'power2.in' }, 
          0.72
        )
        .fromTo(body, 
          { x: 0, opacity: 1 }, 
          { x: '-10vw', opacity: 0, ease: 'power2.in' }, 
          0.74
        )
        .fromTo(cta, 
          { x: 0, opacity: 1 }, 
          { x: '-8vw', opacity: 0, ease: 'power2.in' }, 
          0.76
        )
        .fromTo(scanLines, 
          { x: 0, opacity: 1 }, 
          { x: '-12vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(image, 
          { scale: 1, opacity: 1 }, 
          { scale: 1.06, opacity: 0.65, ease: 'power2.in' }, 
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('what-it-is');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`pinned-section ${className}`}
    >
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 z-[1]"
      >
        <img 
          src="/images/hero_globe_streams.jpg" 
          alt="Digital globe with data streams"
          className="w-full h-full object-cover"
        />
        <div className="gradient-overlay absolute inset-0" />
      </div>

      {/* Decorative Scan Lines */}
      <svg 
        ref={scanLinesRef}
        className="absolute inset-0 z-[5] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="70" x2="40" y2="100" className="scan-line" />
        <line x1="5" y1="65" x2="45" y2="95" className="scan-line" />
      </svg>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-[6vw]"
      >
        {/* Wordmark */}
        <div className="absolute top-[4vh] left-6 lg:left-[4vw]">
          <span className="font-['Sora'] font-bold text-lg tracking-tight text-white">
            PHOENIX INTELLEX
          </span>
        </div>

        {/* Nav Links */}
        <div className="absolute top-[4vh] right-6 lg:right-[4vw] hidden md:flex items-center gap-6">
          <button onClick={() => document.getElementById('what-it-is')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-[#A6B3D0] hover:text-white transition-colors">Product</button>
          <button onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-[#A6B3D0] hover:text-white transition-colors">System</button>
          <button onClick={() => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-[#A6B3D0] hover:text-white transition-colors">Security</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-[#A6B3D0] hover:text-white transition-colors">Contact</button>
        </div>

        {/* Main Content */}
        <div className="max-w-[88vw] pt-[10vh]">
          <h1 
            ref={headlineRef}
            className="text-[clamp(40px,5.5vw,78px)] font-bold text-white leading-[0.95] mb-4"
          >
            Redefining
          </h1>
          <h1 
            className="text-[clamp(40px,5.5vw,78px)] font-bold text-white leading-[0.95] mb-8"
          >
            financial reality.
          </h1>
          
          <p 
            ref={subheadRef}
            className="text-[clamp(18px,2vw,28px)] text-[#B8C5D6] font-medium max-w-[600px] mb-8"
          >
            A physics-based intelligence layer for credit, liquidity, and systemic risk.
          </p>
          
          <div ref={bodyRef} className="max-w-[420px] mb-10">
            <p className="text-[15px] text-[#A6B3D0] leading-relaxed mb-4">
              Phoenix Intellex simulates how stress propagates through portfolios—before it appears in headlines.
            </p>
            <p className="text-[15px] text-[#A6B3D0] leading-relaxed">
              Built for banks, asset managers, and supervisors who need clarity under uncertainty.
            </p>
          </div>
          
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToContact}
              className="btn-pill-primary flex items-center gap-2"
            >
              Request a demo
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={scrollToNext}
              className="btn-pill-outline flex items-center gap-2"
            >
              Explore the engine
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-[4vh] right-6 lg:right-[4vw]">
          <span className="font-mono-label text-[#6B7280]">Scroll to enter</span>
        </div>
      </div>
    </section>
  );
}
