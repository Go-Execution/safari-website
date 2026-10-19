import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { SITE, navLinks } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  const isTransparent = isHome && !scrolled;
  const handleNavClick = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* Utility bar */}
      <div className={`hidden lg:block bg-espresso-dark text-sand/70 text-xs transition-all duration-300 ${scrolled && !isHome ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="mx-auto max-w-content px-6 lg:px-12 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 hover:text-terracotta transition-colors">
              <Phone size={12} className="text-terracotta" />
              <span>{SITE.phone}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-terracotta transition-colors">
              <Mail size={12} className="text-terracotta" />
              <span>{SITE.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sand/40">Follow</span>
            <a href="#" className="hover:text-terracotta transition-colors">Instagram</a>
            <a href="#" className="hover:text-terracotta transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-40 transition-all duration-500 ${isTransparent ? 'bg-transparent' : 'bg-espresso/95 backdrop-blur-md border-b border-espresso-light/20'}`}>
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group" onClick={handleNavClick}>
              <img src={SITE.logo} alt="Safari Knight Tours logo" className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              <span className="font-display text-lg lg:text-xl font-medium leading-none text-cream hidden sm:block tracking-tight">
                Safari Knight
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors relative group py-2 ${
                    isTransparent ? 'text-cream/85 hover:text-cream' : 'text-cream/85 hover:text-cream'
                  } ${location.pathname === link.path ? 'text-amber' : ''}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber origin-left transition-transform duration-400 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/plan-your-trip"
                className="hidden sm:inline-flex items-center gap-1.5 bg-terracotta text-cream font-semibold uppercase tracking-wider text-xs px-5 py-2.5 hover:bg-terracotta-light transition-all duration-200 group shadow-sm"
              >
                Plan Your Trip
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 -mr-2 text-cream"
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-espresso-dark/98 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between px-5 h-16 border-b border-espresso-light/20">
              <div className="flex items-center gap-2.5">
                <img src={SITE.logo} alt="Safari Knight Tours" className="h-9 w-auto object-contain" />
                <span className="font-display text-lg font-medium text-cream">Safari Knight</span>
              </div>
              <button onClick={() => setMenuOpen(false)} className="p-2 -mr-2 text-cream" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`font-display text-3xl font-light py-3 transition-colors ${location.pathname === link.path ? 'text-amber' : 'text-cream hover:text-amber'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="px-5 pb-8 pt-6 border-t border-espresso-light/20 space-y-3">
              <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-3 text-cream/75 text-sm">
                <Phone size={16} className="text-amber" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-cream/75 text-sm">
                <Mail size={16} className="text-amber" />
                {SITE.email}
              </a>
              <Link to="/plan-your-trip" onClick={handleNavClick} className="block w-full text-center bg-terracotta text-cream font-semibold uppercase tracking-wider text-xs py-3.5 mt-4 hover:bg-terracotta-light transition-colors">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
