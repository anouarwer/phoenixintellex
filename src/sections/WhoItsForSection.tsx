import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

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
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // Phase 1: ENTRANCE (0-30%)
      scrollTl
        .fromTo(panel, 
          { x: '60vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(image, 
          { x: '-60vw', opacity: 0, scale: 1.08 }, 
          { x: 0, opacity: 1, scale: 1, ease: 'none' }, 
          0
        )
        .fromTo(label, 
          { y: '6vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.08
        )
        .fromTo(headline, 
          { y: '10vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.08
        )
        .fromTo(body, 
          { y: '6vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.14
        )
        .fromTo(cta, 
          { y: '4vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'none' }, 
          0.18
        );

      // Phase 2: SETTLE (30-70%) - no animation needed

      // Phase 3: EXIT (70-100%)
      scrollTl
        .fromTo(panel, 
          { x: 0, opacity: 1 }, 
          { x: '18vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(image, 
          { x: 0, opacity: 1 }, 
          { x: '-18vw', opacity: 0.5, ease: 'power2.in' }, 
          0.7
        )
        .fromTo([label, headline, body, cta], 
          { y: 0, opacity: 1 }, 
          { y: '-4vh', opacity: 0, ease: 'power2.in', stagger: 0.02 }, 
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToCapabilities = () => {
    const capabilitiesSection = document.getElementById('capabilities');
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="who-its-for"
      className={`pinned-section ${className}`}
    >
      {/* Left Image */}
      <div 
        ref={imageRef}
        className="absolute left-0 top-0 w-full lg:w-[56vw] h-full hidden lg:block"
      >
        <img 
          src="/images/hero_globe_streams.jpg" 
          alt="Global financial network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B0F1C] via-transparent to-transparent" />
      </div>

      {/* Right Info Panel */}
      <div 
        ref={panelRef}
        className="absolute right-0 top-0 w-full lg:w-[44vw] h-full info-panel flex flex-col justify-center px-6 lg:px-[4vw] py-[8vh]"
      >
        <span 
          ref={labelRef}
          className="font-mono-label text-[#2D6BFF] mb-6"
        >
          AUDIENCE
        </span>
        
        <h2 
          ref={headlineRef}
          className="text-[clamp(28px,3.2vw,44px)] font-bold text-white leading-[1.05] mb-8 max-w-[36vw]"
        >
          Built for banks, asset managers, and supervisors.
        </h2>
        
        <div ref={bodyRef} className="max-w-[34vw] mb-10 space-y-3">
          <p className="text-[16px] text-[#A6B3D0] leading-relaxed">
            <span className="text-white font-medium">Risk officers</span> use Phoenix to stress-test exposures.
          </p>
          <p className="text-[16px] text-[#A6B3D0] leading-relaxed">
            <span className="text-white font-medium">Portfolio managers</span> use it to size positions with confidence.
          </p>
          <p className="text-[16px] text-[#A6B3D0] leading-relaxed">
            <span className="text-white font-medium">Supervisors</span> use it to benchmark systemic scenarios.
          </p>
        </div>
        
        <button 
          ref={ctaRef}
          onClick={scrollToCapabilities}
          className="btn-pill-outline flex items-center gap-2 w-fit"
        >
          See use cases
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden z-[-1]">
        <img 
          src="/images/hero_globe_streams.jpg" 
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060B] via-[#05060B]/80 to-[#05060B]" />
      </div>
    </section>
  );
}
