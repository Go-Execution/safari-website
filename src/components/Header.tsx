import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone } from 'lucide-react';
import { SITE, navLinks } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* Top NatGeo Global Header */}
      <header className={`sticky top-0 z-40 bg-black border-b border-white/10 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Left: NatGeo Iconic Yellow Border Logo */}
            <div className="flex items-center gap-6 lg:gap-8">
              <Link to="/" className="flex items-center gap-2.5 shrink-0 group" onClick={handleNavClick}>
                {/* NatGeo Signature Yellow Frame */}
                <div className="w-5 h-7 sm:w-6 sm:h-8 border-[3px] border-natgeo-yellow flex items-center justify-center shrink-0 transition-transform group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="font-natgeo font-extrabold text-base sm:text-lg tracking-wider uppercase text-white leading-none">
                    SAFARI KNIGHT
                  </span>
                  <span className="font-natgeo font-semibold text-[9px] sm:text-[10px] tracking-widest text-natgeo-yellow uppercase leading-tight mt-0.5">
                    BOTSWANA EXPEDITIONS
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links in NatGeo Style */}
              <nav className="hidden xl:flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-xs font-natgeo font-bold uppercase tracking-wider transition-colors relative py-1 ${
                        isActive
                          ? 'text-natgeo-yellow'
                          : 'text-white/90 hover:text-natgeo-yellow'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-natgeo-yellow" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search, Contact info, and Yellow CTA Button */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Call indicator */}
              <a
                href={`tel:${SITE.phoneHref}`}
                className="hidden md:flex items-center gap-1.5 text-xs text-white/80 hover:text-natgeo-yellow font-natgeo tracking-wider uppercase transition-colors"
                title="Call safari desk"
              >
                <Phone size={13} className="text-natgeo-yellow" />
                <span>{SITE.phone.split('/')[0]}</span>
              </a>

              {/* NatGeo Yellow Action Button */}
              <Link
                to="/plan-your-trip"
                className="bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-xs sm:text-sm tracking-wider uppercase px-4 sm:px-5 py-2 transition-colors shadow-sm"
              >
                PLAN EXPEDITION
              </Link>

              {/* Mobile hamburger button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="xl:hidden p-1.5 text-white hover:text-natgeo-yellow transition-colors"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="xl:hidden bg-black/98 border-t border-white/15 px-5 py-6 space-y-4 animate-fade-in max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`text-base font-natgeo font-bold uppercase tracking-wider py-2 border-b border-white/10 ${
                    location.pathname === link.path
                      ? 'text-natgeo-yellow'
                      : 'text-white hover:text-natgeo-yellow'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneHref}`}
                className="flex items-center gap-2 text-sm text-white/90 hover:text-natgeo-yellow font-natgeo uppercase tracking-wide"
              >
                <Phone size={16} className="text-natgeo-yellow" />
                <span>Call Us: {SITE.phone}</span>
              </a>
              <Link
                to="/plan-your-trip"
                onClick={handleNavClick}
                className="w-full text-center bg-natgeo-yellow text-black font-natgeo font-extrabold text-sm uppercase tracking-wider py-3 mt-2"
              >
                Plan Your Safari Trip
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
