import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Clock, Tag, BedDouble, Utensils, CheckCircle2, ArrowUpRight,
  ChevronDown, MapPin, ArrowLeft, Star,
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
    <div className="bg-sand">
      {/* Hero band */}
      <section className="relative h-[62vh] min-h-[440px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={pkg.heroImage} alt={pkg.name} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/35 to-espresso/25" />
        </div>
        <div className="relative h-full flex items-end pb-10 lg:pb-16">
          <div className="mx-auto max-w-content px-5 lg:px-12 w-full">
            <Link to="/packages" className="inline-flex items-center gap-1.5 text-cream/60 text-sm hover:text-amber transition-colors mb-5">
              <ArrowLeft size={15} />
              All packages
            </Link>
            <span className="inline-block bg-terracotta/90 text-cream text-xs font-semibold px-3 py-1.5 tracking-wide mb-5">
              {pkg.category}
            </span>
            <h1 className="font-display text-3xl lg:text-h1 font-light text-cream leading-tight max-w-3xl text-balance">
              {pkg.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-6 text-cream/85">
              <span className="flex items-center gap-2 text-base">
                <Clock size={17} className="text-amber" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-2 text-base">
                <Tag size={17} className="text-amber" />
                {pkg.price}
              </span>
            </div>
            {pkg.priceNote && <p className="text-cream/60 text-sm mt-2 max-w-xl">{pkg.priceNote}</p>}
            <button
              onClick={() => setEnquiryOpen(true)}
              className="mt-7 inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-8 py-4 hover:bg-terracotta-light transition-colors shadow-sm group"
            >
              Enquire About This Package
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Overview + info blocks */}
      <section className="py-16 lg:py-24 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16">
            <div>
              <p className="eyebrow text-terracotta mb-4 tracking-widest text-xs font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-terracotta rounded-full inline-block" />
                Trip overview
              </p>
              <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-6 leading-snug">{pkg.overview}</h2>
              {pkg.highlights && (
                <div className="mt-8">
                  <h3 className="eyebrow text-inkSoft mb-4">Highlights</h3>
                  <ul className="space-y-3">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-inkSoft">
                        <CheckCircle2 size={18} className="text-sage shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {pkg.note && (
                <div className="mt-8 flex items-start gap-3 bg-sage/10 p-4 border-l-2 border-sage">
                  <MapPin size={20} className="text-sage-dark shrink-0 mt-0.5" />
                  <p className="text-sm text-inkSoft">{pkg.note}</p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              {pkg.accommodation && (
                <div className="bg-cream p-6 border border-ink/8">
                  <div className="flex items-center gap-2.5 mb-3">
                    <BedDouble size={20} className="text-espresso" />
                    <h3 className="eyebrow text-ink">Accommodation</h3>
                  </div>
                  <p className="text-sm text-inkSoft leading-relaxed">{pkg.accommodation}</p>
                </div>
              )}
              {pkg.meals && (
                <div className="bg-cream p-6 border border-ink/8">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Utensils size={20} className="text-espresso" />
                    <h3 className="eyebrow text-ink">Meals & drinks</h3>
                  </div>
                  <p className="text-sm text-inkSoft leading-relaxed">{pkg.meals}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day itinerary — editorial timeline */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <p className="eyebrow text-terracotta mb-4 tracking-widest text-xs font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-terracotta rounded-full inline-block" />
              Itinerary
            </p>
            <h2 className="font-display text-3xl lg:text-h2 font-light text-ink">Day by day</h2>
          </div>
          <div className="max-w-3xl">
            {pkg.itinerary.map((day, i) => {
              const isOpen = openDay === i;
              return (
                <div key={i} className="border-b border-ink/10">
                  <button
                    onClick={() => setOpenDay(isOpen ? null : i)}
                    className="w-full flex items-center gap-5 py-5 text-left group"
                  >
                    <span className="font-display text-3xl font-light text-terracotta/30 group-hover:text-terracotta/50 shrink-0 w-14 text-right transition-colors">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-lg font-medium text-ink">
                        {day.day}
                        {day.title && <span className="text-inkSoft font-normal"> — {day.title}</span>}
                      </p>
                    </div>
                    <ChevronDown size={20} className={`text-ink/40 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
                    <div className="pb-6 pl-14 pr-4">
                      <p className="text-sm lg:text-base text-inkSoft leading-relaxed">{day.text}</p>
                      {(day.highlights || day.meals) && (
                        <div className="flex flex-wrap gap-3 mt-5">
                          {day.highlights && (
                            <span className="inline-flex items-center gap-1.5 text-xs bg-sage/15 text-sage-dark px-3 py-1.5 font-medium">
                              <Star size={12} />
                              {day.highlights}
                            </span>
                          )}
                          {day.meals && (
                            <span className="inline-flex items-center gap-1.5 text-xs bg-amber/15 text-amber-dark px-3 py-1.5 font-medium">
                              <Utensils size={12} />
                              {day.meals}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-20 lg:py-32 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="mb-12">
            <p className="eyebrow text-terracotta mb-4 tracking-widest text-xs font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-terracotta rounded-full inline-block" />
              Gallery
            </p>
            <h2 className="font-display text-3xl lg:text-h2 font-light text-ink">Photo gallery</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {pkg.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden group">
                <div className={`aspect-square ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <img src={img} alt={`${pkg.name} — photo ${i + 1}`} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 lg:py-24 bg-espresso text-cream border-t border-espresso-light/20">
        <div className="mx-auto max-w-content px-5 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-h3 font-light text-cream mb-4">Interested in this itinerary?</h2>
          <p className="text-cream/70 text-base mb-7 max-w-xl mx-auto">Get in touch and we'll tailor it to your dates, group size, and preferences.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setEnquiryOpen(true)} className="inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-8 py-4 hover:bg-terracotta-light transition-colors shadow-sm group">
              Enquire now
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-cream/30 text-cream font-semibold px-8 py-4 hover:bg-cream hover:text-espresso transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} packageName={pkg.name} />
    </div>
  );
}
