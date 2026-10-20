import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  BedDouble,
  Users,
  Binoculars,
  Compass,
  Phone,
  Quote,
  Plus,
  Minus,
} from 'lucide-react';
import { packages, services, pillars, testimonials, SITE } from '@/data/content';
import PackageCard from '@/components/PackageCard';

const heroImage = 'https://images.pexels.com/photos/35994684/pexels-photo-35994684.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';
const aboutImage = 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80';
const ctaImage = 'https://images.pexels.com/photos/35722304/pexels-photo-35722304.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1800';

const quickLinks = [
  { title: 'About Us', desc: 'Meet the team', path: '/about', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80' },
  { title: 'What We Offer', desc: 'Tailor-made safaris', path: '/services', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Our Packages', desc: 'Four journeys', path: '/packages', image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80' },
  { title: 'Plan Your Trip', desc: 'Build your itinerary', path: '/plan-your-trip', image: '/assets/images/plan-your-trip.jpg' },
];

const serviceIcons: Record<string, typeof BedDouble> = { BedDouble, Users, Binoculars, Compass };

const pillarImages = [
  'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&w=1200&q=80',
  'https://images.pexels.com/photos/6995536/pexels-photo-6995536.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920',
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-sand">
      {/* Hero — full-bleed, dramatic */}
      <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Herd of African elephants traversing the savannah at sunset" className="w-full h-full object-cover object-center animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/80" />
        </div>
        <div className="relative h-full flex flex-col justify-end pb-16 lg:pb-24">
          <div className="mx-auto max-w-content px-5 lg:px-12 w-full">
            <div className="max-w-3xl animate-fade-up">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-hero font-light italic text-cream leading-[0.95] text-balance">
                Let's rumble<br />in the jungle
              </h1>
              <p className="mt-7 text-lg lg:text-body-lg text-cream/80 leading-relaxed max-w-xl">
                Safari Knight Tours is a registered Botswana travel management company offering fully customised safari and holiday experiences across Botswana and beyond.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/plan-your-trip" className="inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-8 py-4 hover:bg-terracotta-light transition-colors shadow-sm group">
                  Plan Your Trip
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link to="/packages" className="inline-flex items-center gap-2 border border-cream/35 text-cream font-semibold px-8 py-4 hover:bg-cream hover:text-espresso transition-colors">
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-6 right-6 lg:right-12 hidden lg:flex flex-col items-center gap-2 text-cream/40">
          <span className="text-xs tracking-widest rotate-90 origin-center mb-8">SCROLL</span>
          <div className="w-px h-12 bg-cream/30" />
        </div>
      </section>

      {/* Quick-link cards — asymmetric staggered */}
      <section className="py-16 lg:py-24 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {quickLinks.map((card, i) => (
              <Link
                key={card.path}
                to={card.path}
                className={`group relative overflow-hidden bg-espresso shadow-md border border-espresso-light/40 hover:border-terracotta/60 transition-all duration-300 ${i % 2 === 1 ? 'lg:mt-12' : ''}`}
              >
                <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-95" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <h3 className="font-display text-xl lg:text-2xl font-medium text-cream mb-0.5">{card.title}</h3>
                  <p className="text-xs text-cream/75">{card.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber font-semibold tracking-wider uppercase">
                    EXPLORE
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser — editorial split with oversized quote */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow text-terracotta mb-4 tracking-widest text-xs font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-terracotta rounded-full inline-block" />
                About Safari Knight
              </p>
              <h2 className="font-display text-3xl lg:text-h2 font-light text-ink leading-[1.1] mb-6 text-balance">
                A registered travel company in the heart of Botswana
              </h2>
              <p className="text-base lg:text-body-lg text-inkSoft leading-relaxed mb-6 max-w-prose-narrow">
                Safari Knight Tours is a registered company located in the heart of Botswana. As a travel agency we offer a <strong className="text-ink font-semibold">full customised safari and holidays experience</strong> to exciting destinations throughout Botswana and beyond.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-espresso font-semibold border-b border-terracotta pb-1 hover:text-terracotta transition-colors group">
                Learn more about us
                <ArrowRight size={16} className="text-terracotta group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="overflow-hidden shadow-md">
                <div className="aspect-[5/4]">
                  <img src={aboutImage} alt="Majestic male lion surveying the Botswana wilderness" className="w-full h-full object-cover object-center" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose — interactive accordion panel */}
      <section className="py-20 lg:py-32 bg-espresso text-cream">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="eyebrow text-amber mb-5">Why choose Safari Knight</p>
            <h2 className="font-display text-3xl lg:text-h2 font-light text-cream leading-tight max-w-2xl text-balance">
              Five pillars that shape every journey we craft
            </h2>
          </div>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            {/* Accordion list */}
            <div className="divide-y divide-espresso-light/20">
              {pillars.map((pillar, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  onMouseEnter={() => setActiveTab(i)}
                  onFocus={() => setActiveTab(i)}
                  className={`w-full flex items-center justify-between py-5 text-left transition-all duration-200 group cursor-pointer ${activeTab === i ? 'text-cream' : 'text-cream/45 hover:text-cream/80'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-display text-sm w-6 transition-colors duration-200 ${activeTab === i ? 'text-amber font-semibold' : 'text-cream/40 group-hover:text-amber/70'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-display text-xl lg:text-2xl font-light tracking-tight transition-transform duration-200 ${activeTab === i ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                      {pillar.title}
                    </span>
                  </div>
                  <span className="shrink-0 ml-4 transition-transform duration-200">
                    {activeTab === i ? <Minus size={18} className="text-terracotta" /> : <Plus size={18} className="text-cream/40 group-hover:text-cream/70" />}
                  </span>
                </button>
              ))}
            </div>
            {/* Content panel */}
            <div className="lg:sticky lg:top-28 self-start">
              <div key={activeTab} className="animate-fade-in">
                <div className="overflow-hidden mb-6">
                  <div className="aspect-[16/10]">
                    <img src={pillarImages[activeTab]} alt={pillars[activeTab].title} className="w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-medium text-cream mb-4">{pillars[activeTab].title}</h3>
                <p className="text-cream/65 leading-relaxed text-base">{pillars[activeTab].text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer — numbered list with large numbers */}
      <section className="py-20 lg:py-32 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="eyebrow text-amber mb-4 tracking-widest text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-amber inline-block" />
              What we offer
            </p>
            <h2 className="font-display text-3xl lg:text-h2 font-light text-ink text-balance">
              Safari services, tailored to you
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon] || Compass;
              return (
                <div key={service.title} className="bg-sand p-7 lg:p-8 hover:bg-white transition-colors duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl font-light text-amber/40 group-hover:text-amber transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon size={22} className="text-neutral-400 group-hover:text-amber transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm text-inkSoft leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-ink font-bold uppercase tracking-wider text-xs border-b-2 border-amber pb-1 hover:text-amber-dark transition-colors group">
              See all services
              <ArrowRight size={15} className="text-amber group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages — editorial horizontal with first card large */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <p className="eyebrow text-amber mb-4 tracking-widest text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-amber inline-block" />
                Featured packages
              </p>
              <h2 className="font-display text-3xl lg:text-h2 font-light text-ink">
                Signature Botswana safaris
              </h2>
            </div>
            <Link to="/packages" className="hidden sm:inline-flex items-center gap-2 text-ink font-bold uppercase tracking-wider text-xs hover:text-amber-dark transition-colors group">
              View all
              <ArrowUpRight size={15} className="text-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="eyebrow text-terracotta mb-4 tracking-widest text-xs font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-terracotta rounded-full inline-block" />
              Client stories
            </p>
            <h2 className="font-display text-3xl lg:text-h2 font-light text-ink">
              Travellers who trusted us<br />with their adventure
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-cream p-8 border border-espresso/10 hover:border-terracotta/40 transition-colors shadow-sm flex flex-col justify-between">
                <div>
                  <Quote size={24} className="text-terracotta mb-4" />
                  <p className="text-ink text-base leading-relaxed mb-6 font-display font-light italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-espresso/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-espresso/10">
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-inkSoft/70 mt-0.5">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — full-bleed image with overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="Mokoro canoe navigating the pristine channels of the Okavango Delta" className="w-full h-full object-cover object-center" loading="lazy" />
          <div className="absolute inset-0 bg-espresso/85" />
        </div>
        <div className="relative mx-auto max-w-content px-5 lg:px-12 py-24 lg:py-32">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl lg:text-h2 font-light text-cream mb-5 text-balance">
              Ready to start planning<br />your Botswana safari?
            </h2>
            <p className="text-cream/75 text-lg mb-8 max-w-lg">
              Use our trip planner or call us directly — we're here to help.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/plan-your-trip" className="inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-8 py-4 hover:bg-terracotta-light transition-colors shadow-sm group">
                Plan Your Trip
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a href={`tel:${SITE.phoneHref}`} className="inline-flex items-center gap-2 border border-cream/30 text-cream font-semibold px-8 py-4 hover:bg-cream hover:text-espresso transition-colors">
                <Phone size={16} />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
