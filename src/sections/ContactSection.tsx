import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';

import { useLanguage } from '../lib/i18n';
import { useIsMobile } from '../hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = '' }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    role: '',
    email: '',
    portfolioFocus: '',
    portfolioSize: '',
    message: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const form = formRef.current;
    const panels = panelsRef.current;
    const footer = footerRef.current;

    if (!section || !headline || !form || !panels || !footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headline,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.6,
          }
        }
      );

      gsap.fromTo(form,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.6,
          }
        }
      );

      gsap.fromTo(panels,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panels,
            start: 'top 90%',
            end: 'top 70%',
            scrub: 0.6,
          }
        }
      );

      gsap.fromTo(footer,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 95%',
            end: 'top 85%',
            scrub: 0.6,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.privacyAccepted) {
      setSubmitted(true);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className={`relative bg-[#05060B] py-[10vh] px-6 lg:px-[6vw] ${className}`}
    >
      <div className="relative z-10 max-w-[900px] mx-auto">
        <div ref={headlineRef} className="text-center mb-12">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
            {t.contact_title}
          </h2>
          <p className="text-[16px] text-[#A6B3D0]">
            {t.contact_desc}
          </p>
        </div>

        {!submitted ? (
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="info-panel rounded-xl p-6 lg:p-10 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">{language === 'es' ? 'Nombre completo *' : 'Full Name *'}</label>
                <Input
                  type="text"
                  placeholder={language === 'es' ? 'Dr. Maria García' : 'Dr. Maria García'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#1F2937] border-[#374151] text-white placeholder:text-[#6B7280]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">{language === 'es' ? 'Institución *' : 'Institution *'}</label>
                <Input
                  type="text"
                  placeholder="Banco Santander / ECB / XYZ Capital"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="bg-[#1F2937] border-[#374151] text-white placeholder:text-[#6B7280]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">{language === 'es' ? 'Cargo / Título *' : 'Role / Title *'}</label>
                <Input
                  type="text"
                  placeholder="Chief Risk Officer / Head of NPL Workout"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-[#1F2937] border-[#374151] text-white placeholder:text-[#6B7280]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">{language === 'es' ? 'Correo de trabajo *' : 'Work Email *'}</label>
                <Input
                  type="email"
                  placeholder="maria.garcia@institution.eu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#1F2937] border-[#374151] text-white placeholder:text-[#6B7280]"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-[#A6B3D0] mb-2">{language === 'es' ? 'Mensaje' : 'Message'}</label>
              <Textarea
                placeholder={language === 'es' ? 'Describa brevemente sus desafíos actuales...' : 'Briefly describe your current challenges...'}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-[#1F2937] border-[#374151] text-white placeholder:text-[#6B7280] min-h-[120px]"
              />
            </div>

            <div className="flex items-start gap-3 mb-8">
              <Checkbox
                id="privacy"
                checked={formData.privacyAccepted}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, privacyAccepted: checked as boolean })
                }
                className="mt-1 border-[#374151] data-[state=checked]:bg-[#2D6BFF] data-[state=checked]:border-[#2D6BFF]"
              />
              <label htmlFor="privacy" className="text-sm text-[#A6B3D0] cursor-pointer">
                {language === 'es' 
                  ? 'Reconozco que esta consulta se manejará bajo un acuerdo de confidencialidad (NDA) y que PHOENIX INTELLEX me contactará en la dirección de correo proporcionada.'
                  : 'I acknowledge that this inquiry will be handled under NDA and that PHOENIX INTELLEX will contact me at the provided email address.'}
              </label>
            </div>

            <Button
              type="submit"
              className="btn-pill-primary w-full md:w-auto flex items-center justify-center gap-2"
              disabled={!formData.privacyAccepted}
            >
              {t.contact_cta}
              <ArrowRight size={18} />
            </Button>
          </form>
        ) : (
          <div className="info-panel rounded-xl p-10 mb-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#2D6BFF]/20 flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-[#2D6BFF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === 'es' ? 'Gracias por su interés' : 'Thank you for your interest'}
            </h3>
            <p className="text-[#A6B3D0] max-w-[400px] mx-auto">
              {language === 'es' 
                ? 'Hemos recibido su solicitud y nos pondremos en contacto con usted en un plazo de 48-72 horas para programar una demostración.'
                : 'We have received your request and will contact you within 48-72 hours to schedule a demonstration.'}
            </p>
          </div>
        )}

        <div ref={panelsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="feature-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2D6BFF]/10 flex items-center justify-center">
                <Mail size={20} className="text-[#2D6BFF]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Sales</h3>
            </div>
            <p className="text-[14px] text-[#A6B3D0]">sales@phoenixintellex.com</p>
          </div>
          <div className="feature-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2D6BFF]/10 flex items-center justify-center">
                <Mail size={20} className="text-[#2D6BFF]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Press</h3>
            </div>
            <p className="text-[14px] text-[#A6B3D0]">media@phoenixintellex.com</p>
          </div>
        </div>

        <footer ref={footerRef} className="border-t border-white/5 pt-10 pb-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-['Sora'] font-bold text-white opacity-40">PHOENIX INTELLEX</span>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-[#6B7280] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-[#6B7280] hover:text-white transition-colors">Terms of Service</a>
            <span className="text-xs text-[#6B7280]">© 2026</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
