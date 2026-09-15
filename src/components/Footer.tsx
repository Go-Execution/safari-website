import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { SITE, navLinks, packages } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-sand/70">
      <div className="mx-auto max-w-content px-5 lg:px-12 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-14">
          {/* Column 1: Logo + tagline + address */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <img src={SITE.logo} alt="Safari Knight Tours" className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-medium text-cream tracking-tight">Safari Knight</span>
                <span className="text-[10px] uppercase tracking-widest text-amber font-sans font-semibold">Tours &amp; Safaris</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-sand/50 max-w-xs">
              Customised safari and holiday experiences across Botswana and beyond — crafted by people who call it home.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-amber shrink-0 mt-0.5" />
                <span className="text-sand/55 leading-relaxed">{SITE.address}</span>
              </div>
              <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2.5 hover:text-amber transition-colors">
                <Phone size={15} className="text-amber shrink-0" />
                <span>{SITE.phone}</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-amber transition-colors">
                <Mail size={15} className="text-amber shrink-0" />
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Useful links */}
          <div>
            <h4 className="eyebrow text-amber mb-5 font-bold tracking-widest text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber inline-block" />
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-sand/75 hover:text-amber transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Safari packages */}
          <div>
            <h4 className="eyebrow text-amber mb-5 font-bold tracking-widest text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber inline-block" />
              Safari packages
            </h4>
            <ul className="space-y-3">
              {packages.map((pkg) => (
                <li key={pkg.slug}>
                  <Link to={`/packages/${pkg.slug}`} className="text-sm text-sand/75 hover:text-amber transition-colors leading-snug">
                    {pkg.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social + get in touch */}
          <div>
            <h4 className="eyebrow text-amber mb-5 font-bold tracking-widest text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber inline-block" />
              Get in touch
            </h4>
            <p className="text-sm text-sand/60 mb-5 leading-relaxed">
              Ready to start planning? Reach out — we'd love to hear from you.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center border border-white/20 text-sand/75 hover:bg-amber hover:text-black hover:border-amber transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center border border-white/20 text-sand/75 hover:bg-amber hover:text-black hover:border-amber transition-all">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sand/40">
          <span>© {year} Safari Knight Tours. All rights reserved.</span>
          <span>Registered travel management company — Gaborone, Botswana</span>
        </div>
      </div>
    </footer>
  );
}
