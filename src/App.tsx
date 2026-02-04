import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import WhatItIsSection from './sections/WhatItIsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import WhyItMattersSection from './sections/WhyItMattersSection';
import WhoItsForSection from './sections/WhoItsForSection';
import CapabilitiesSection from './sections/CapabilitiesSection';
import ArchitectureSection from './sections/ArchitectureSection';
import SecuritySection from './sections/SecuritySection';
import ContactSection from './sections/ContactSection';
import GrainOverlay from './components/GrainOverlay';
import { useIsMobile } from './hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // On mobile, we might want to disable complex snapping or pinning if it's causing "crushing"
    if (isMobile) {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.pin) st.kill(); // Kill pins on mobile to allow natural scroll
      });
      return;
    }

    // Desktop Snapping Logic
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinned.some(st => {
              const start = st.start / maxScroll;
              const end = st.end / maxScroll;
              return value >= start - 0.02 && value <= end + 0.02;
            });
            
            if (!inPinned) return value;
            
            const target = pinned.reduce((closest, st) => {
              const center = (st.start + (st.end - st.start) * 0.5) / maxScroll;
              return Math.abs(center - value) < Math.abs(closest - value) ? center : closest;
            }, Infinity);
            
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <div ref={mainRef} className="relative bg-[#05060B] min-h-screen">
      <Navigation />
      <GrainOverlay />
      
      <main className="relative">
        <HeroSection className="z-10" />
        <WhatItIsSection className="z-20" />
        <HowItWorksSection className="z-30" />
        <WhyItMattersSection className="z-40" />
        <WhoItsForSection className="z-50" />
        <CapabilitiesSection className="z-60" />
        <ArchitectureSection className="z-70" />
        <SecuritySection className="z-80" />
        <ContactSection className="z-90" />
      </main>
    </div>
  );
}

export default App;
