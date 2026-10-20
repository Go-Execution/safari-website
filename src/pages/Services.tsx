import { Link } from 'react-router-dom';
import { BedDouble, Users, Binoculars, Compass, ArrowRight } from 'lucide-react';
import { services } from '@/data/content';

const heroImage = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80';

const serviceImages = [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  'https://images.pexels.com/photos/16444281/pexels-photo-16444281.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1800',
  'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80',
  'https://images.pexels.com/photos/32957448/pexels-photo-32957448.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
];

const serviceIcons: Record<string, typeof BedDouble> = { BedDouble, Users, Binoculars, Compass };

export default function Services() {
  return (
    <div className="bg-sand">
      {/* Page hero */}
      <section className="relative h-[48vh] min-h-[360px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="An African elephant drinking at a waterhole" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-espresso/55" />
        </div>
        <div className="relative h-full flex items-end pb-14 lg:pb-20">
          <div className="mx-auto max-w-content px-5 lg:px-12 w-full">
            <p className="eyebrow text-terracotta mb-4 animate-fade-up">Services</p>
            <h1 className="font-display text-4xl lg:text-h1 font-light text-cream animate-fade-up">What We Offer</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <p className="text-xl lg:text-2xl font-display font-light text-ink leading-relaxed max-w-3xl">
            We are a travel agency offering a fully customised and friendly safari packages to exciting destinations throughout Botswana and neighbouring countries.
          </p>
        </div>
      </section>

      {/* Services — full-width alternating editorial rows */}
      <section className="pb-20 lg:pb-32 bg-sand">
        <div className="mx-auto max-w-content px-5 lg:px-12 space-y-16 lg:space-y-24">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon] || Compass;
            return (
              <div key={service.title} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className={`overflow-hidden relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[3/2]">
                    <img src={serviceImages[i]} alt={service.title} className="w-full h-full object-cover object-center" loading="lazy" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-display text-5xl font-light text-terracotta/30">{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-10 h-10 flex items-center justify-center bg-espresso text-amber border border-espresso-light/30">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h2 className="font-display text-2xl lg:text-h3 font-medium text-ink mb-4 leading-snug">{service.title}</h2>
                  <p className="text-base lg:text-body-lg text-inkSoft leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-espresso text-cream border-t border-espresso-light/20">
        <div className="mx-auto max-w-content px-5 lg:px-12 text-center">
          <h2 className="font-display text-2xl lg:text-h3 font-light text-cream mb-6">See how these come together in our packages</h2>
          <Link to="/packages" className="inline-flex items-center gap-2 bg-terracotta text-cream font-semibold px-8 py-4 hover:bg-terracotta-light transition-colors shadow-sm group">
            View Packages
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
