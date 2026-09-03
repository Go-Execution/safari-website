import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { SITE, navLinks, packages } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-sm">
          
          {/* Column 1: LEGAL & COMPANY */}
          <div>
            <h4 className="font-natgeo font-extrabold uppercase tracking-widest text-xs text-white/50 mb-4 pb-1 border-b border-white/10">
              LEGAL & IDENTITY
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <span className="text-white font-medium block">Safari Knight Tours (Pty) Ltd</span>
                <span className="text-white/40">Registered in the Republic of Botswana</span>
              </li>
              <li>
                <span className="text-white/40">Tourism Enterprise License:</span> BTO Certified
              </li>
              <li>
                <Link to="/about" className="hover:text-natgeo-yellow transition-colors">
                  Ethics, Guide Fair Wages & Standards
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-natgeo-yellow transition-colors">
                  Emergency Satellite Field Comms
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-natgeo-yellow transition-colors">
                  Wildlife Conservation Code
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: BOTSWANA EXPEDITIONS */}
          <div>
            <h4 className="font-natgeo font-extrabold uppercase tracking-widest text-xs text-white/50 mb-4 pb-1 border-b border-white/10">
              BOTSWANA EXPEDITIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {packages.map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="hover:text-natgeo-yellow transition-colors block leading-snug"
                  >
                    {pkg.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-natgeo-yellow hover:underline font-natgeo uppercase tracking-wider text-xs inline-block mt-1">
                  View All Wilderness Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: EXPEDITION DESK */}
          <div>
            <h4 className="font-natgeo font-extrabold uppercase tracking-widest text-xs text-white/50 mb-4 pb-1 border-b border-white/10">
              EXPEDITION DESK
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/plan-your-trip" className="hover:text-natgeo-yellow transition-colors">
                  Plan a Custom Itinerary
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-natgeo-yellow transition-colors">
                  Compare Mobile vs. Lodge Safaris
                </Link>
              </li>
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-1.5 hover:text-natgeo-yellow transition-colors">
                  <Phone size={12} className="text-natgeo-yellow" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-natgeo-yellow transition-colors">
                  <Mail size={12} className="text-natgeo-yellow" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li className="pt-1 text-white/50 flex items-start gap-1.5">
                <MapPin size={13} className="text-natgeo-yellow shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW US & NEWSLETTER */}
          <div>
            <h4 className="font-natgeo font-extrabold uppercase tracking-widest text-xs text-white/50 mb-4 pb-1 border-b border-white/10">
              FOLLOW US
            </h4>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">
              Stay connected with wildlife sightings, seasonal flood charts, and field dispatches from the Okavango Delta.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/80 hover:bg-natgeo-yellow hover:text-black hover:border-natgeo-yellow transition-all"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/80 hover:bg-natgeo-yellow hover:text-black hover:border-natgeo-yellow transition-all"
              >
                <Facebook size={14} />
              </a>
            </div>

            <Link
              to="/plan-your-trip"
              className="inline-block bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 text-center transition-colors"
            >
              Start Safari Inquiry
            </Link>
          </div>
        </div>

        {/* Bottom Bar with Signature Yellow Frame Emblem */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-3">
            <div className="w-4 h-6 border-2 border-natgeo-yellow shrink-0" />
            <span className="font-natgeo font-extrabold text-sm tracking-wider uppercase text-white">
              SAFARI KNIGHT TOURS
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-center md:text-right">
            <span>© {year} Safari Knight Tours. All rights reserved.</span>
            <span>Gaborone & Maun, Botswana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
