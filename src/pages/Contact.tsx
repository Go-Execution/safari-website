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
      <section className="bg-espresso text-cream py-14 lg:py-20">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <p className="eyebrow text-amber mb-4 animate-fade-up">Get in touch</p>
          <h1 className="font-display text-3xl lg:text-h1 font-light text-cream animate-fade-up">Contact Us</h1>
          <p className="text-cream/55 text-base lg:text-lg mt-3 max-w-xl">We'd love to hear from you — reach out any time and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <div className="mx-auto max-w-content px-5 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-8">Get in touch</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-espresso/8 shrink-0">
                  <MapPin size={20} className="text-espresso" />
                </div>
                <div>
                  <h3 className="eyebrow text-inkSoft mb-1">Address</h3>
                  <p className="text-inkSoft text-sm leading-relaxed">{SITE.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-espresso/8 shrink-0">
                  <Phone size={20} className="text-espresso" />
                </div>
                <div>
                  <h3 className="eyebrow text-inkSoft mb-1">Phone</h3>
                  <a href={`tel:${SITE.phoneHref}`} className="text-inkSoft text-sm hover:text-terracotta transition-colors">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-espresso/8 shrink-0">
                  <Mail size={20} className="text-espresso" />
                </div>
                <div>
                  <h3 className="eyebrow text-inkSoft mb-1">Email</h3>
                  <a href={`mailto:${SITE.email}`} className="text-inkSoft text-sm hover:text-terracotta transition-colors">{SITE.email}</a>
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
              <div className="bg-cream p-8 lg:p-10 border border-ink/8 text-center">
                <CheckCircle2 size={44} className="text-terracotta mx-auto mb-5" />
                <h2 className="font-display text-xl font-medium text-ink mb-3">Message sent</h2>
                <p className="text-inkSoft text-sm mb-6">Thank you, {form.name.split(' ')[0]}. We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', package: '', message: '' }); }} className="text-espresso font-semibold text-sm border-b border-terracotta pb-1 hover:text-terracotta transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream p-6 lg:p-8 border border-ink/8 space-y-5">
                <h2 className="font-display text-xl font-medium text-ink mb-2">Send us a message</h2>
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Name *</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`w-full px-4 py-3 border bg-sand/40 text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.name ? 'border-red-400' : 'border-ink/12'}`} placeholder="Your full name" />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full px-4 py-3 border bg-sand/40 text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.email ? 'border-red-400' : 'border-ink/12'}`} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Phone *</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`w-full px-4 py-3 border bg-sand/40 text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.phone ? 'border-red-400' : 'border-ink/12'}`} placeholder="+267 ..." />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Which package are you interested in?</label>
                  <select value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })} className="w-full px-4 py-3 border border-ink/12 bg-sand/40 text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors">
                    <option value="">Select a package...</option>
                    {packages.map((p) => (<option key={p.slug} value={p.name}>{p.name}</option>))}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Message *</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className={`w-full px-4 py-3 border bg-sand/40 text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-ink/12'}`} placeholder="Tell us about your ideal safari..." />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-terracotta text-cream font-semibold py-3.5 hover:bg-terracotta-light transition-colors">
                  <Send size={16} />
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
