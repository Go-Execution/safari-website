import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { pillars, testimonials } from '@/data/content';

const heroImage = '/assets/images/placeholders/placeholder-1.jpg';

const pillarImages = [
  '/assets/images/placeholders/placeholder-2.jpg',
  '/assets/images/placeholders/placeholder-3.jpg',
  '/assets/images/placeholders/placeholder-4.jpg',
  '/assets/images/placeholders/placeholder-5.jpg',
  '/assets/images/placeholders/placeholder-6.jpg',
];

const differences = [
  'Fully customised, private safaris — never a fixed group itinerary.',
  'Experienced, caring local guides who were born and raised in the areas we explore.',
  'A well-maintained 4x4 fleet, so breakdowns are rare.',
  'Fair, ethical treatment of our own guides and staff.',
  'Deep local knowledge, with plans to expand safaris across Southern Africa.',
];

export default function About() {
  return (
    <div className="bg-sand">
      {/* Page hero */}
      <section className="relative h-[52vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Safari group preparing for a tour in open 4x4 vehicles" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-espresso/55" />
        </div>
        <div className="relative h-full flex items-end pb-14 lg:pb-20">
          <div className="mx-auto max-w-content px-5 lg:px-12 w-full">
            <p className="eyebrow text-amber mb-4 animate-fade-up">About Safari Knight</p>
            <h1 className="font-display text-4xl lg:text-h1 font-light text-cream animate-fade-up">About Us</h1>
          </div>
        </div>
      </section>

      {/* Main narrative — large editorial paragraph */}
      <section className="py-20 lg:py-32 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xl lg:text-2xl font-display font-light text-ink leading-relaxed mb-8">
              Safari Knight Tours is a travel management company. As a travel agency we offer a full customised safari and holidays experience to exciting destinations throughout Botswana and beyond. Safari Knight Tours is a registered company located in the heart of Botswana.
            </p>
            <p className="text-base lg:text-body-lg text-inkSoft leading-relaxed">
              As an experienced tour operator, we personalise our safaris according to our customer's tastes and needs. Safari Knight Tours combines luxury, style, service, and authenticity to provide a unique, exciting adventure. All of our safaris are conducted by talented, responsible, and caring guides, in comfortable 4x4 safari vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars — alternating full-width editorial sections */}
      <section className="bg-cream">
        <div className="mx-auto max-w-content px-5 lg:px-12 py-20 lg:py-32 space-y-20 lg:space-y-32">
          {pillars.map((pillar, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="overflow-hidden relative">
                  <div className="aspect-[4/3]">
                    <img src={pillarImages[i]} alt={pillar.title} className="w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                  <div className={`absolute ${i % 2 === 1 ? '-bottom-3 -right-3' : '-bottom-3 -left-3'} w-20 h-20 border-2 border-terracotta/30 hidden lg:block`} />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="font-display text-6xl font-light text-terracotta/20 block mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-2xl lg:text-h3 font-medium text-ink mb-5 leading-tight">{pillar.title}</h2>
                <p className="text-base lg:text-body-lg text-inkSoft leading-relaxed">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different — numbered grid on dark */}
      <section className="py-20 lg:py-32 bg-espresso text-cream">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="eyebrow text-amber mb-5">What makes us different</p>
            <h2 className="font-display text-3xl lg:text-h2 font-light text-cream">The Safari Knight difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-espresso-light/20 max-w-3xl mx-auto">
            {differences.map((d, i) => (
              <div key={i} className="bg-espresso p-6 lg:p-8 flex items-start gap-4">
                <span className="font-display text-2xl font-light text-amber/60 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-cream/75 text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-cream/30 mt-8 text-center">Placeholder copy — confirm or replace before going live.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="mb-12">
            <p className="eyebrow text-terracotta mb-5">Client stories</p>
            <h2 className="font-display text-3xl lg:text-h2 font-light text-ink">What our travellers say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-ink/8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-sand p-8 lg:p-10">
                <Quote size={28} className="text-terracotta mb-6" />
                <p className="text-ink text-lg lg:text-xl leading-relaxed mb-8 font-display font-light italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-ink/10">
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-medium text-ink text-sm">{t.name}</p>
                    {t.sample && <p className="text-xs text-inkSoft/50 mt-0.5">Sample — replace with real quote</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-cream border-t border-ink/8">
        <div className="mx-auto max-w-content px-5 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-5">Let's start planning your safari</h2>
          <Link to="/plan-your-trip" className="inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-7 py-4 hover:bg-terracotta-light transition-colors group">
            Plan Your Trip
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
