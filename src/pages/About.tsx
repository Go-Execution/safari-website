import { Link } from 'react-router-dom';
import { ArrowRight, Quote, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import { pillars, testimonials } from '@/data/content';

const heroImage = 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80';

const pillarImages = [
  'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1506161642106-2598379c6a7f?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1547471080-7cb2acd472c4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&q=80',
];

export default function About() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Banner with NatGeo Yellow Bar */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden bg-black flex items-end pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Safari team and guides exploring Botswana wilderness"
            className="w-full h-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="border-l-[6px] border-natgeo-yellow pl-5 sm:pl-7 max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 text-natgeo-yellow font-natgeo font-extrabold text-xs uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
              <span>WHO WE ARE</span>
            </div>
            <h1 className="font-natgeo font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              ABOUT SAFARI KNIGHT
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              A registered Botswana travel management company dedicated to ethical, non-invasive wildlife safaris and immersive wilderness journeys across Southern Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Mission */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
              <span className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-black">
                OUR WILDERNESS HERITAGE
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-black leading-tight mb-6">
              Born in Botswana. Deeply Rooted in the Okavango, Chobe, and Kalahari.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-normal">
              Safari Knight Tours is a registered travel management company located in the heart of Botswana. As a specialized safari operator, we offer fully customized and private wildlife experiences to the most extraordinary destinations across Botswana and neighbouring Southern African nations.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              Our founders and guides were born and raised in these floodplains. We combine genuine local intimacy, responsible conservation ethics, and world-class mobile camp logistics to give travelers an authentic encounter with Africa’s greatest wildlife spectacles.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars: Alternating Editorial Rows */}
      <section className="py-16 sm:py-24 bg-natgeo-lightBg">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden bg-black shadow-md border-l-4 border-natgeo-yellow">
                  <img
                    src={pillarImages[i]}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-natgeo font-extrabold text-4xl sm:text-5xl text-natgeo-yellow block mb-2 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-black mb-4 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Field Testimonials */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
              <span className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-black">
                FIELD DISPATCH VOICES
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-black">
              Words From Our Travelers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-natgeo-lightBg p-6 sm:p-8 border-l-4 border-natgeo-yellow shadow-xs">
                <Quote size={24} className="text-natgeo-yellow mb-4" />
                <p className="text-sm sm:text-base text-gray-800 italic leading-relaxed mb-6 font-serif">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black text-natgeo-yellow flex items-center justify-center font-natgeo font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-natgeo font-bold text-sm uppercase tracking-wide text-black">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-gray-500 font-medium">Okavango Delta Safari Guest</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-black text-white text-center border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-natgeo font-extrabold text-3xl uppercase tracking-wider text-white mb-3">
            EXPERIENCE THE WILD WITH OUR GUIDES
          </h2>
          <p className="text-white/75 text-sm sm:text-base mb-6 leading-relaxed">
            Ready to design your journey? Talk to our safari directors today.
          </p>
          <Link
            to="/plan-your-trip"
            className="inline-block bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 transition-colors"
          >
            Start Your Plan
          </Link>
        </div>
      </section>
    </div>
  );
}
