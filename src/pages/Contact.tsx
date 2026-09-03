import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Compass } from 'lucide-react';
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
    <div className="bg-white text-black min-h-screen">
      {/* Header Banner with NatGeo Yellow Bar */}
      <section className="bg-black text-white py-14 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="border-l-[6px] border-natgeo-yellow pl-5 sm:pl-7 max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 text-natgeo-yellow font-natgeo font-extrabold text-xs uppercase tracking-widest mb-1.5">
              <Compass size={14} />
              <span>FIELD COMMUNICATIONS</span>
            </div>
            <h1 className="font-natgeo font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              CONTACT OUR SAFARI DESK
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Direct inquiries for private mobile camping, lodge bookings, and customized wildlife photography safaris across Botswana.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Field Contacts & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
                <span className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-black">
                  OPERATIONS BASE
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-6">
                Gaborone Headquarters & Delta Field Operations
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-natgeo-lightBg border-l-4 border-natgeo-yellow">
                <MapPin size={20} className="text-black shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-natgeo font-bold text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Central Registered Office
                  </h3>
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">
                    {SITE.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-natgeo-lightBg border-l-4 border-natgeo-yellow">
                <Phone size={20} className="text-black shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-natgeo font-bold text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Telephone / WhatsApp Safari Comms
                  </h3>
                  <a
                    href={`tel:${SITE.phoneHref}`}
                    className="text-sm text-black font-bold hover:text-natgeo-yellowHover transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-natgeo-lightBg border-l-4 border-natgeo-yellow">
                <Mail size={20} className="text-black shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-natgeo font-bold text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Direct Email Dispatch
                  </h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-black font-bold hover:text-natgeo-yellowHover transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="overflow-hidden border border-gray-200">
              <iframe
                title="Safari Knight Tours office location in Gaborone, Botswana"
                src="https://www.openstreetmap.org/export/embed.html?bbox=25.8600%2C-24.6300%2C25.9000%2C-24.6000&layer=mapnik&marker=-24.6282%2C25.8815"
                className="w-full h-[260px] border-0 grayscale"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-natgeo-lightBg p-8 sm:p-12 border-t-4 border-natgeo-yellow text-center shadow-xs">
                <CheckCircle2 size={44} className="text-black mx-auto mb-4" />
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-3">
                  Message Dispatched
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
                  Thank you, {form.name.split(' ')[0]}. Our safari operations team will review your message and reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', package: '', message: '' });
                  }}
                  className="bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-xs uppercase tracking-wider px-6 py-3 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-natgeo-lightBg p-6 sm:p-10 border border-gray-200 shadow-xs space-y-5">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
                    <span className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-black">
                      EXPEDITION QUERY
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-black mb-4">
                    Send a Direct Safari Inquiry
                  </h2>
                </div>

                <div>
                  <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-2.5 bg-white border text-sm text-black focus:outline-none focus:border-black ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-white border text-sm text-black focus:outline-none focus:border-black ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="you@domain.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`w-full px-4 py-2.5 bg-white border text-sm text-black focus:outline-none focus:border-black ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="+267 ..."
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Interested Expedition Package (Optional)
                  </label>
                  <select
                    value={form.package}
                    onChange={(e) => setForm({ ...form, package: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 text-sm text-black focus:outline-none focus:border-black"
                  >
                    <option value="">General Safari Inquiry</option>
                    {packages.map((pkg) => (
                      <option key={pkg.slug} value={pkg.name}>
                        {pkg.name} ({pkg.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Message / Travel Dates & Preferences *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className={`w-full px-4 py-2.5 bg-white border text-sm text-black focus:outline-none focus:border-black resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="Tell us about your ideal safari, number of travelers, preferred month, or questions..."
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-sm uppercase tracking-wider py-3.5 transition-colors shadow-sm"
                >
                  <Send size={15} />
                  Transmit Expedition Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
