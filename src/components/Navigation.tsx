import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Product', target: 'what-it-is' },
  { label: 'System', target: 'architecture' },
  { label: 'Security', target: 'security' },
  { label: 'Contact', target: 'contact' },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isVisible]);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] opacity-0 -translate-y-full"
      style={{ 
        background: 'rgba(5, 6, 11, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        <div className="font-['Sora'] font-bold text-lg tracking-tight text-white">
          PHOENIX INTELLEX
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="text-sm text-[#A6B3D0] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="btn-pill-primary text-sm py-2 px-4"
        >
          Request Demo
        </button>
      </div>
    </nav>
  );
}
