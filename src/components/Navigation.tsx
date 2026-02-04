import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../lib/i18n';
import { useIsMobile } from '../hooks/use-mobile';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { t, language, setLanguage } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      // On mobile, show nav earlier or keep it sticky
      setIsVisible(isMobile ? scrollY > 20 : scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

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

  const navLinks = [
    { label: t.nav_product, target: 'what-it-is' },
    { label: t.nav_system, target: 'architecture' },
    { label: t.nav_security, target: 'security' },
    { label: t.nav_contact, target: 'contact' },
  ];

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
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="text-xs font-mono-label text-[#A6B3D0] hover:text-white border border-white/10 px-2 py-1 rounded"
          >
            {language.toUpperCase()}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-pill-primary text-sm py-2 px-4"
          >
            {t.cta_demo}
          </button>
        </div>
      </div>
    </nav>
  );
}
