import { Link } from 'react-router-dom';
import { BedDouble, Users, Binoculars, Compass, ArrowRight } from 'lucide-react';
import { services } from '@/data/content';

const heroImage = 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80';

const serviceImages = [
  'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1506161642106-2598379c6a7f?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1547471080-7cb2acd472c4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&q=80',
];

const serviceIcons: Record<string, typeof BedDouble> = { BedDouble, Users, Binoculars, Compass };

export default function Services() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Banner with NatGeo Yellow Bar */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-black flex items-end pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Elephant herd in Botswana nature"
            className="w-full h-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="border-l-[6px] border-natgeo-yellow pl-5 sm:pl-7 max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 text-natgeo-yellow font-natgeo font-extrabold text-xs uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
              <span>FIELD CAPABILITIES</span>
            </div>
            <h1 className="font-natgeo font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              WHAT WE OFFER
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              Tailored safari arrangements, private mobile camps, fly-in lodge logistics, and specialized birding expeditions throughout Botswana and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Narrative List */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon] || Compass;
            return (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/10] overflow-hidden bg-black shadow-md border-l-4 border-natgeo-yellow">
                    <img
                      src={serviceImages[i]}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-natgeo font-extrabold text-3xl sm:text-4xl text-natgeo-yellow">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-9 h-9 bg-black text-natgeo-yellow flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-4 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-black text-white text-center border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-natgeo font-extrabold text-3xl uppercase tracking-wider text-white mb-3">
            SEE HOW THESE COME TOGETHER IN OUR EXPEDITIONS
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
            From 5-day lodge explorations to 10-day wild camping deep in Moremi and Khwai.
          </p>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 transition-colors"
          >
            View Signature Packages
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
