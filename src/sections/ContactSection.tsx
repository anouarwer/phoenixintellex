import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
      // Headline animation
      gsap.fromTo(headline,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            end: 'top 55%',
            scrub: true,
          }
        }
      );

      // Form animation
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
            scrub: true,
          }
        }
      );

      // Panels animation
      gsap.fromTo(panels,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panels,
            start: 'top 85%',
            end: 'top 60%',
            scrub: true,
          }
        }
      );

      // Footer animation
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
            end: 'top 80%',
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

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
        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-12">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
            Ready to simulate your next decision?
          </h2>
          <p className="text-[16px] text-[#A6B3D0]">
            Talk to our team about a pilot.
          </p>
        </div>

        {/* Contact Form */}
        {!submitted ? (
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="info-panel rounded-xl p-6 lg:p-10 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">Full Name *</label>
                <Input
                  type="text"
                  placeholder="Dr. Maria García"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#1F2937] border-[#374151] text-white placeholder:text-[#6B7280]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">Institution *</label>
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
                <label className="block text-sm text-[#A6B3D0] mb-2">Role / Title *</label>
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
                <label className="block text-sm text-[#A6B3D0] mb-2">Work Email *</label>
                <Input
                  type="email"
                  placeholder="maria.garcia@institution.eu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#1F2937] border-[#374151] text-white placeholder:text-[#6B7280]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">Portfolio Focus</label>
                <Select 
                  value={formData.portfolioFocus} 
                  onValueChange={(value) => setFormData({ ...formData, portfolioFocus: value })}
                >
                  <SelectTrigger className="bg-[#1F2937] border-[#374151] text-white">
                    <SelectValue placeholder="Select focus area" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F2937] border-[#374151]">
                    <SelectItem value="npl">NPL / Stage-2 Analytics</SelectItem>
                    <SelectItem value="systemic">Systemic Risk Monitoring</SelectItem>
                    <SelectItem value="supervisory">Supervisory / Audit</SelectItem>
                    <SelectItem value="investment">Distressed Asset Investment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm text-[#A6B3D0] mb-2">Approximate Portfolio Size</label>
                <Select 
                  value={formData.portfolioSize} 
                  onValueChange={(value) => setFormData({ ...formData, portfolioSize: value })}
                >
                  <SelectTrigger className="bg-[#1F2937] border-[#374151] text-white">
                    <SelectValue placeholder="Select size range" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F2937] border-[#374151]">
                    <SelectItem value="<100M">&lt; €100M</SelectItem>
                    <SelectItem value="100M-500M">€100M - €500M</SelectItem>
                    <SelectItem value="500M-2B">€500M - €2B</SelectItem>
                    <SelectItem value="2B-10B">€2B - €10B</SelectItem>
                    <SelectItem value=">10B">&gt; €10B</SelectItem>
                    <SelectItem value="na">N/A (Supervisor/Auditor)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-[#A6B3D0] mb-2">Message</label>
              <Textarea
                placeholder="Briefly describe your current challenges or interest in PHOENIX..."
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
                I acknowledge that this inquiry will be handled under NDA and that PHOENIX INTELLEX will contact me at the provided email address.
              </label>
            </div>

            <Button
              type="submit"
              className="btn-pill-primary w-full md:w-auto flex items-center justify-center gap-2"
              disabled={!formData.privacyAccepted}
            >
              Submit Request
              <ArrowRight size={18} />
            </Button>

            <p className="text-xs text-[#6B7280] mt-4">
              Expected response time: 48-72 hours. All technical discussions require NDA signature.
            </p>
          </form>
        ) : (
          <div className="info-panel rounded-xl p-10 mb-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#2D6BFF]/20 flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-[#2D6BFF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Thank you for your interest
            </h3>
            <p className="text-[#A6B3D0] max-w-[400px] mx-auto">
              We have received your request and will contact you within 48-72 hours to schedule a demonstration.
            </p>
          </div>
        )}

        {/* Contact Panels */}
        <div ref={panelsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="feature-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2D6BFF]/10 flex items-center justify-center">
                <Mail size={20} className="text-[#2D6BFF]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Sales</h3>
            </div>
            <p className="text-[14px] text-[#A6B3D0] mb-4">
              Request a demo or pricing.
            </p>
            <a 
              href="mailto:contact@phoenixintellex.com"
              className="btn-pill-primary text-sm inline-flex items-center gap-2"
            >
              Contact sales
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="feature-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2D6BFF]/10 flex items-center justify-center">
                <MessageSquare size={20} className="text-[#2D6BFF]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Support</h3>
            </div>
            <p className="text-[14px] text-[#A6B3D0] mb-4">
              Questions? We're here to help.
            </p>
            <a 
              href="mailto:support@phoenixintellex.com"
              className="btn-pill-outline text-sm inline-flex items-center gap-2"
            >
              Email support
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer ref={footerRef} className="border-t border-[#1F2937] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="font-['Sora'] font-bold text-lg text-white block mb-2">
                PHOENIX INTELLEX
              </span>
              <p className="text-sm text-[#6B7280]">
                Redefining financial reality through physics-based intelligence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-[#A6B3D0] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#A6B3D0] hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-[#A6B3D0] hover:text-white transition-colors">Security</a>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-[#1F2937]/50">
            <p className="text-xs text-[#6B7280]">
              © 2026 PHOENIX INTELLEX SL · Registered in Spain (EU)
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
