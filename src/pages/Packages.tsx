import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { packages } from '@/data/content';
import PackageCard from '@/components/PackageCard';

const heroImage = 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80';

export default function Packages() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Page Hero with NatGeo Yellow Bar */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-black flex items-end pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Mokoro canoe gliding through the Okavango Delta"
            className="w-full h-full object-cover object-center brightness-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="border-l-[6px] border-natgeo-yellow pl-5 sm:pl-7 max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 text-natgeo-yellow font-natgeo font-extrabold text-xs uppercase tracking-widest mb-1.5">
              <Compass size={14} />
              <span>FIELD ITINERARIES</span>
            </div>
            <h1 className="font-natgeo font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              OUR SAFARI EXPEDITIONS
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              Four signature journeys through Botswana's wildest places — from classic mobile camping deep in Moremi to luxury fly-in camps and cross-border expeditions.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Directory Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* NatGeo Panoramic Inquiry Banner */}
      <section className="py-16 sm:py-20 bg-black text-white text-center border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="w-2.5 h-2.5 bg-natgeo-yellow inline-block" />
            <span className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-natgeo-yellow">
              BESPOKE EXPEDITIONS
            </span>
          </div>
          <h2 className="font-natgeo font-extrabold text-3xl sm:text-4xl uppercase tracking-wider text-white mb-4">
            CAN'T DECIDE WHICH EXPEDITION IS RIGHT?
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Every Botswana safari can be completely tailored. Use our interactive expedition planner and our local guides will craft your exact itinerary.
          </p>
          <Link
            to="/plan-your-trip"
            className="inline-flex items-center gap-2 bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 transition-colors shadow-sm"
          >
            Start Custom Trip Planner
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
