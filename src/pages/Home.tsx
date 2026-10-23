import { useState, useEffect } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  MapPin,
} from 'lucide-react';
import { packages, services, testimonials, SITE } from '@/data/content';
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

const bigFiveAnimals = [
  {
    id: 'elephant',
    name: 'African Elephant',
    setswana: 'Tlou',
    scientific: 'Loxodonta africana',
    image: '/assets/images/big5/elephant.jpg',
    tag: "Earth's Largest Population",
    stats: '130,000+ free-roaming in Botswana',
    primaryHabitat: 'Chobe Riverfront & Okavango Waterways',
    bestEncounter: 'Golden hour riverboat cruises & game drives',
    description:
      'Botswana is home to over 130,000 African elephants — the greatest concentration anywhere on Earth. Witness matriarchs guiding multi-generational family herds to drink, splash, and feed along the lush riverfronts of Chobe and secluded delta channels.',
  },
  {
    id: 'lion',
    name: 'African Lion',
    setswana: 'Tau',
    scientific: 'Panthera leo',
    image: '/assets/images/big5/lion.jpg',
    tag: 'Apex Predator of the Savanna',
    stats: 'Legendary Savuti & Moremi Prides',
    primaryHabitat: 'Savuti Marsh & Moremi Game Reserve',
    bestEncounter: 'Dawn game tracking & dusk waterhole vigils',
    description:
      "Botswana's lions are celebrated globally for their imposing physical stature, audacious hunting tactics, and famous daytime water crossings. In Savuti and Moremi, dominant prides rule expansive floodplains and dense woodlands with regal majesty.",
  },
  {
    id: 'leopard',
    name: 'African Leopard',
    setswana: 'Nkwe',
    scientific: 'Panthera pardus',
    image: '/assets/images/big5/leopard.jpg',
    tag: 'Master of Stealth & Elegance',
    stats: 'Dense Khwai & Delta Populations',
    primaryHabitat: 'Riverine Forests & Leadwood Canopies',
    bestEncounter: 'Guided night spotlight drives & river tracking',
    description:
      'Solitary, elusive, and mesmerisingly graceful. Botswana boasts one of the highest leopard densities in Southern Africa, particularly along the Khwai River where these spotted predators drape effortlessly across high acacia branches, surveying the African dusk.',
  },
  {
    id: 'buffalo',
    name: 'Cape Buffalo',
    setswana: 'Nare',
    scientific: 'Syncerus caffer',
    image: '/assets/images/big5/buffalo.jpg',
    tag: 'The Indomitable Titan',
    stats: 'Super-Herds of 500+ Strong',
    primaryHabitat: 'Okavango Floodplains & Linyanti Swamps',
    bestEncounter: 'Open 4x4 wilderness drives & delta crossings',
    description:
      'Known for their imposing fused horn boss and fierce loyalty, Cape buffalo are one of the most formidable forces in the African wilderness. Watch super-herds numbering in the hundreds kick up golden plumes of dust across fertile delta floodplains.',
  },
  {
    id: 'rhino',
    name: 'White & Black Rhino',
    setswana: 'Tshukudu',
    scientific: 'Ceratotherium simum',
    image: '/assets/images/big5/rhino.jpg',
    tag: 'Living Prehistoric Marvel',
    stats: 'Fiercely Guarded Sanctuaries',
    primaryHabitat: 'Khama Rhino Sanctuary & Delta Sanctuaries',
    bestEncounter: 'Guided bush tracking & sanctuary safaris',
    description:
      'Seeing a rhinoceros in the wild is one of the rarest, most poignant wildlife encounters in modern Africa. Protected around the clock by dedicated conservation rangers, Botswana’s sanctuaries provide safe haven for both white and black rhinos to flourish.',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bigFiveAnimals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + bigFiveAnimals.length) % bigFiveAnimals.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bigFiveAnimals.length);
  };

  const activeAnimal = bigFiveAnimals[currentSlide];

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

      {/* The Big 5 Wildlife Showcase — Interactive Slideshow */}
      <section className="py-20 lg:py-32 bg-espresso text-cream overflow-hidden relative">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber/15 border border-amber/30 text-amber text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                The Big Five of Botswana
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-h2 font-light text-cream leading-tight max-w-2xl text-balance">
                Encounter Africa&apos;s Legendary Big Five
              </h2>
              <p className="mt-4 text-cream/70 text-base lg:text-lg max-w-2xl leading-relaxed">
                Botswana is one of Africa&apos;s last pristine strongholds where all five iconic species roam completely free across unfenced wilderness.
              </p>
            </div>

            {/* Slider Controls (Auto toggle + Prev/Next) */}
            <div className="flex items-center gap-2.5 self-start md:self-end">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-11 px-3.5 flex items-center gap-2 border border-cream/20 bg-cream/5 hover:bg-cream/10 text-cream/80 hover:text-cream hover:border-amber transition-all text-xs tracking-wider uppercase cursor-pointer"
                title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <Pause size={14} className="text-amber" /> : <Play size={14} className="text-amber" />}
                <span className="hidden sm:inline">{isPlaying ? 'Auto' : 'Paused'}</span>
              </button>
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 flex items-center justify-center border border-cream/20 bg-cream/5 hover:bg-cream/10 text-cream/80 hover:text-cream hover:border-amber transition-all cursor-pointer"
                aria-label="Previous animal"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 flex items-center justify-center border border-cream/20 bg-cream/5 hover:bg-cream/10 text-cream/80 hover:text-cream hover:border-amber transition-all cursor-pointer"
                aria-label="Next animal"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Quick Animal Tabs / Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 lg:gap-3 mb-8 lg:mb-12">
            {bigFiveAnimals.map((animal, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={animal.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`text-left p-3 lg:p-4 border transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? 'bg-cream/10 border-amber text-cream shadow-md'
                      : 'bg-cream/5 border-cream/10 text-cream/60 hover:text-cream hover:bg-cream/[0.08] hover:border-cream/25'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-mono tracking-wider transition-colors ${isActive ? 'text-amber font-semibold' : 'text-cream/40 group-hover:text-amber/70'}`}>
                      0{idx + 1}
                    </span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_8px_#f59e0b]" />
                    ) : (
                      <span className="text-[10px] text-cream/30 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    )}
                  </div>
                  <div className="font-display text-base lg:text-lg font-medium leading-snug">
                    {animal.name.replace('African ', '')}
                  </div>
                  <div className="text-[11px] text-cream/45 italic truncate mt-0.5">
                    {animal.setswana}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Slide Stage */}
          <div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left: Large High-Resolution Animal Photo */}
            <div className="lg:col-span-7 relative group">
              <div className="overflow-hidden shadow-2xl relative border border-cream/15 bg-espresso-dark aspect-[16/10]">
                <img
                  key={activeAnimal.id}
                  src={activeAnimal.image}
                  alt={activeAnimal.name}
                  className="w-full h-full object-cover object-center animate-fade-in transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-transparent pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-espresso/85 backdrop-blur-md border border-cream/20 text-amber text-xs font-medium tracking-wide">
                    {activeAnimal.tag}
                  </span>
                </div>

                {/* Bottom Bar inside image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-cream/90 backdrop-blur-md bg-espresso/80 border border-cream/15 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-amber font-semibold">0{currentSlide + 1} / 05</span>
                    <span className="text-cream/40">•</span>
                    <span className="font-medium tracking-wide">{activeAnimal.name}</span>
                  </div>
                  <span className="text-cream/60 italic hidden sm:inline">{activeAnimal.scientific}</span>
                </div>

                {/* Auto-play progress bar */}
                {isPlaying && !isHovered && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-cream/10 overflow-hidden">
                    <div key={currentSlide} className="h-full bg-amber animate-big5-progress" />
                  </div>
                )}
              </div>
            </div>

            {/* Right: Curated Editorial Story & Facts */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div key={activeAnimal.id} className="animate-fade-in">
                <div className="flex items-center gap-2 text-amber text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
                  <span>Setswana: <strong className="italic">{activeAnimal.setswana}</strong></span>
                  <span className="text-cream/30">•</span>
                  <span className="text-cream/60 italic font-normal">{activeAnimal.scientific}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight mb-4">
                  {activeAnimal.name}
                </h3>

                <p className="text-cream/75 text-base sm:text-lg leading-relaxed mb-6 font-light">
                  {activeAnimal.description}
                </p>

                {/* Information Callout Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="bg-cream/5 border border-cream/10 p-3.5">
                    <div className="flex items-center gap-2 text-amber text-xs font-semibold tracking-wider uppercase mb-1">
                      <MapPin size={13} />
                      <span>Primary Territory</span>
                    </div>
                    <p className="text-cream/85 text-xs sm:text-sm font-medium leading-snug">
                      {activeAnimal.primaryHabitat}
                    </p>
                  </div>
                  <div className="bg-cream/5 border border-cream/10 p-3.5">
                    <div className="flex items-center gap-2 text-amber text-xs font-semibold tracking-wider uppercase mb-1">
                      <Compass size={13} />
                      <span>Best Encounter</span>
                    </div>
                    <p className="text-cream/85 text-xs sm:text-sm font-medium leading-snug">
                      {activeAnimal.bestEncounter}
                    </p>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/plan-your-trip"
                    className="inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-6 py-3.5 hover:bg-terracotta-light transition-all shadow-md group"
                  >
                    Plan Your Big 5 Safari
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/packages"
                    className="inline-flex items-center gap-2 text-cream/70 hover:text-amber text-sm font-medium transition-colors border-b border-cream/20 hover:border-amber pb-1"
                  >
                    View Safari Packages
                  </Link>
                </div>
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
