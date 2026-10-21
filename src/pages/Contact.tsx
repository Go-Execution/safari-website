import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { SITE, packages } from '@/data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div className="bg-sand">
      {/* Page hero */}
      <section className="bg-espresso text-cream py-14 lg:py-20 border-b border-cream/10">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <p className="eyebrow text-amber mb-4 tracking-widest text-xs font-bold animate-fade-up flex items-center gap-2">
            <span className="w-2 h-2 bg-amber inline-block" />
            Get in touch
          </p>
          <h1 className="font-display text-3xl lg:text-h1 font-light text-cream animate-fade-up">Contact Us</h1>
          <p className="text-cream/65 text-base lg:text-lg mt-3 max-w-xl">We'd love to hear from you — reach out any time and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <div className="mx-auto max-w-content px-5 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-8">Get in touch</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-espresso text-amber border border-amber/20 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="eyebrow text-terracotta mb-1 font-bold text-xs">Address</h3>
                  <p className="text-inkSoft text-sm leading-relaxed">{SITE.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-espresso text-amber border border-amber/20 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="eyebrow text-terracotta mb-1 font-bold text-xs">Phone</h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a href={`tel:${SITE.phoneHref}`} className="text-inkSoft text-sm hover:text-terracotta font-medium transition-colors">+1 443 864 0098</a>
                    <span className="text-inkSoft/40">/</span>
                    <a href={`tel:${SITE.secondaryPhoneHref}`} className="text-inkSoft text-sm hover:text-terracotta font-medium transition-colors">{SITE.secondaryPhone}</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-espresso text-amber border border-amber/20 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="eyebrow text-terracotta mb-1 font-bold text-xs">Email</h3>
                  <a href={`mailto:${SITE.email}`} className="text-inkSoft text-sm hover:text-terracotta font-medium transition-colors">{SITE.email}</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-ink/10">
              <iframe
                title="Safari Knight Tours office location in Gaborone, Botswana"
                src="https://www.openstreetmap.org/export/embed.html?bbox=25.8600%2C-24.6300%2C25.9000%2C-24.6000&layer=mapnik&marker=-24.6282%2C25.8815"
                className="w-full h-[300px] border-0 grayscale-[0.3]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-cream p-8 lg:p-10 border border-ink/10 text-center shadow-sm">
                <CheckCircle2 size={44} className="text-terracotta mx-auto mb-5" />
                <h2 className="font-display text-xl font-medium text-ink mb-3">Message sent</h2>
                <p className="text-inkSoft text-sm mb-6">Thank you, {form.name.split(' ')[0]}. We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', package: '', message: '' }); }} className="text-ink font-bold uppercase tracking-wider text-xs border-b-2 border-terracotta pb-1 hover:text-terracotta transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream p-6 lg:p-8 border border-ink/10 space-y-5 shadow-sm">
                <h2 className="font-display text-xl font-medium text-ink mb-2">Send us a message</h2>
                <div>
                  <label className="block text-xs font-bold text-inkSoft mb-1.5 uppercase tracking-wider">Name *</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`w-full px-4 py-3 border bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.name ? 'border-red-400' : 'border-neutral-200'}`} placeholder="Your full name" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-inkSoft mb-1.5 uppercase tracking-wider">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full px-4 py-3 border bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.email ? 'border-red-400' : 'border-neutral-200'}`} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-inkSoft mb-1.5 uppercase tracking-wider">Phone *</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`w-full px-4 py-3 border bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.phone ? 'border-red-400' : 'border-neutral-200'}`} placeholder="+267 ..." />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-inkSoft mb-1.5 uppercase tracking-wider">Which package are you interested in?</label>
                  <select value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })} className="w-full px-4 py-3 border border-neutral-200 bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors">
                    <option value="">Select a package...</option>
                    {packages.map((p) => (<option key={p.slug} value={p.name}>{p.name}</option>))}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-inkSoft mb-1.5 uppercase tracking-wider">Message *</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className={`w-full px-4 py-3 border bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-neutral-200'}`} placeholder="Tell us about your ideal safari..." />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-terracotta text-cream font-bold uppercase tracking-wider text-xs py-4 hover:bg-terracotta-dark transition-all duration-200 shadow-md">
                  <Send size={15} />
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
