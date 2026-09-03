import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Clock, Tag, BedDouble, Utensils, CheckCircle2, ArrowRight,
  ChevronDown, MapPin, ArrowLeft, Star, Compass,
} from 'lucide-react';
import { getPackage } from '@/data/content';
import EnquiryModal from '@/components/EnquiryModal';

export default function PackageDetail() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = slug ? getPackage(slug) : undefined;
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openDay, setOpenDay] = useState<number | null>(0);

  if (!pkg) return <Navigate to="/packages" replace />;

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Banner with NatGeo Framing */}
      <section className="relative h-[65vh] min-h-[460px] overflow-hidden bg-black flex items-end pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <img
            src={pkg.heroImage}
            alt={pkg.name}
            className="w-full h-full object-cover object-center brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 w-full z-10">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-white/70 text-xs font-natgeo font-bold uppercase tracking-wider hover:text-natgeo-yellow transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            Back to All Expeditions
          </Link>

          <div className="border-l-[6px] border-natgeo-yellow pl-5 sm:pl-7 max-w-3xl animate-fade-up">
            <div className="flex items-center gap-2 text-natgeo-yellow font-natgeo font-extrabold text-xs uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
              <span>{pkg.category}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {pkg.name}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-5 text-white/90 text-sm">
              <span className="flex items-center gap-1.5 font-natgeo font-bold uppercase tracking-wider">
                <Clock size={16} className="text-natgeo-yellow" />
                <span>{pkg.duration}</span>
              </span>
              <span className="flex items-center gap-1.5 font-natgeo font-bold uppercase tracking-wider">
                <Tag size={16} className="text-natgeo-yellow" />
                <span>{pkg.price}</span>
              </span>
            </div>

            {pkg.priceNote && (
              <p className="text-white/60 text-xs mt-2 max-w-xl font-normal">
                {pkg.priceNote}
              </p>
            )}

            <button
              onClick={() => setEnquiryOpen(true)}
              className="mt-6 inline-flex items-center gap-2 bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
            >
              Inquire About This Expedition
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Overview & Field Specs */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Main Overview Column */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
                <span className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-black">
                  EXPEDITION OVERVIEW
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6 leading-snug">
                {pkg.overview}
              </h2>

              {pkg.highlights && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-gray-500 mb-4">
                    EXPEDITION HIGHLIGHTS & SIGHTINGS
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-800">
                        <CheckCircle2 size={16} className="text-natgeo-yellow shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.note && (
                <div className="mt-8 flex items-start gap-3 bg-natgeo-lightBg p-4 border-l-4 border-natgeo-yellow">
                  <MapPin size={18} className="text-black shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    {pkg.note}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-4 space-y-5">
              {pkg.accommodation && (
                <div className="bg-natgeo-lightBg p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2.5">
                    <BedDouble size={18} className="text-natgeo-yellow" />
                    <h3 className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-black">
                      WILDERNESS ACCOMMODATION
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {pkg.accommodation}
                  </p>
                </div>
              )}

              {pkg.meals && (
                <div className="bg-natgeo-lightBg p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Utensils size={18} className="text-natgeo-yellow" />
                    <h3 className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-black">
                      BUSH MEALS & DRINKS
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {pkg.meals}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day Itinerary Logs */}
      <section className="py-16 sm:py-24 bg-natgeo-lightBg border-b border-gray-200">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-natgeo-yellow inline-block" />
              <span className="font-natgeo font-extrabold text-xs tracking-widest text-black uppercase">
                FIELD LOG & TIMELINE
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-black">
              Day-by-Day Expedition Dossier
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {pkg.itinerary.map((day, i) => {
              const isOpen = openDay === i;
              return (
                <div key={i} className="bg-white border border-gray-200 overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenDay(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left group hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-natgeo font-bold text-base sm:text-lg text-natgeo-yellow bg-black px-2.5 py-1">
                        {day.day}
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg text-black group-hover:text-natgeo-yellowHover transition-colors">
                        {day.title || `Day ${i + 1} Safari`}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-black' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-6 pt-2 border-t border-gray-100 animate-fade-in">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                        {day.text}
                      </p>

                      {(day.highlights || day.meals) && (
                        <div className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-gray-100 text-xs">
                          {day.highlights && (
                            <span className="inline-flex items-center gap-1.5 bg-natgeo-lightBg text-gray-800 font-medium px-3 py-1.5 border border-gray-200">
                              <Star size={13} className="text-natgeo-yellow" />
                              Highlight: {day.highlights}
                            </span>
                          )}
                          {day.meals && (
                            <span className="inline-flex items-center gap-1.5 bg-natgeo-lightBg text-gray-800 font-medium px-3 py-1.5 border border-gray-200">
                              <Utensils size={13} className="text-natgeo-yellow" />
                              Meals: {day.meals}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-natgeo-yellow inline-block" />
              <span className="font-natgeo font-extrabold text-xs tracking-widest text-black uppercase">
                THROUGH THE LENS
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">
              Expedition Field Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pkg.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden bg-black group">
                <img
                  src={img}
                  alt={`${pkg.name} - photograph ${i + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-black text-white text-center border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-natgeo font-extrabold text-3xl uppercase tracking-wider text-white mb-3">
            READY TO JOIN THIS EXPEDITION?
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
            Let our local Batswana guides tailor this itinerary to your exact travel window, group size, and wildlife sighting priorities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 transition-colors"
            >
              Inquire Now
            </button>
            <Link
              to="/contact"
              className="border border-white/40 hover:border-white text-white font-natgeo font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 hover:bg-white/10 transition-colors"
            >
              Contact Safari Desk
            </Link>
          </div>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} packageName={pkg.name} />
    </div>
  );
}
