import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { packages } from '@/data/content';
import PackageCard from '@/components/PackageCard';

const heroImage = 'https://images.pexels.com/photos/35722304/pexels-photo-35722304.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1800';

export default function Packages() {
  return (
    <div className="bg-sand">
      {/* Page hero */}
      <section className="relative h-[48vh] min-h-[360px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Mokoro canoe gliding through the Okavango Delta waterways" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-espresso/55" />
        </div>
        <div className="relative h-full flex items-end pb-14 lg:pb-20">
          <div className="mx-auto max-w-content px-5 lg:px-12 w-full">
            <p className="eyebrow text-amber mb-4 animate-fade-up">Safari packages</p>
            <h1 className="font-display text-4xl lg:text-h1 font-light text-cream animate-fade-up">Our Packages</h1>
            <p className="text-cream/65 text-lg mt-4 max-w-xl">Four signature journeys through Botswana's wildest places — each fully customisable to your pace and interests.</p>
          </div>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-20 lg:py-32 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-cream border-t border-espresso/10">
        <div className="mx-auto max-w-content px-5 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-4">Can't decide which one is right for you?</h2>
          <p className="text-inkSoft text-base mb-6 max-w-xl mx-auto">Use our trip planner and we'll recommend the perfect package based on your preferences.</p>
          <Link to="/plan-your-trip" className="inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-8 py-4 hover:bg-terracotta-light transition-colors shadow-sm group">
            Plan Your Trip
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
