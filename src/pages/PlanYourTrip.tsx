import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Check, ChevronRight, ChevronLeft, CheckCircle2,
  MapPin, Users, Calendar, Clock, Mail, Phone, User, MessageSquare,
} from 'lucide-react';
import { planTripDestinations, planTripGroupSizes, planTripDurations } from '@/data/content';

export default function PlanYourTrip() {
  const [step, setStep] = useState(0);
  const [destinations, setDestinations] = useState<string[]>([]);
  const [groupSize, setGroupSize] = useState('');
  const [duration, setDuration] = useState('');
  const [when, setWhen] = useState({ month: '', year: '' });
  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const steps = ['Destinations', 'Party size', 'Duration', 'When', 'Contact'];

  const toggleDestination = (id: string) => {
    setDestinations((prev) => prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]);
  };

  const canProceed = () => {
    if (step === 0) return destinations.length > 0;
    if (step === 1) return !!groupSize;
    if (step === 2) return !!duration;
    if (step === 3) return !!when.month && !!when.year;
    return true;
  };

  const validateContact = () => {
    const e: Record<string, string> = {};
    if (!contact.name.trim()) e.name = 'Required';
    if (!contact.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = 'Invalid email';
    if (!contact.phone.trim()) e.phone = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else if (validateContact()) setSubmitted(true);
  };

  const handleBack = () => { if (step > 0) setStep(step - 1); };

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const years = ['2026', '2027', '2028'];

  const selectedDestLabels = destinations.map((id) => planTripDestinations.find((d) => d.id === id)?.label);
  const selectedGroup = planTripGroupSizes.find((g) => g.id === groupSize)?.label;
  const selectedDuration = planTripDurations.find((d) => d.id === duration)?.label;

  if (submitted) {
    return (
      <div className="min-h-[75vh] bg-sand flex items-center justify-center px-5 py-20">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-terracotta/12 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-terracotta" />
          </div>
          <h1 className="font-display text-3xl lg:text-h2 font-light text-ink mb-4">Your trip details have been sent</h1>
          <p className="text-inkSoft text-lg leading-relaxed mb-8">
            Thank you, {contact.name.split(' ')[0]}. We've received your safari preferences and will be in touch within 24 hours to start crafting your perfect Botswana adventure.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-espresso text-cream font-semibold px-6 py-3.5 hover:bg-espresso-light transition-colors">
            Back to home
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand min-h-screen">
      {/* Header */}
      <section className="bg-espresso text-cream py-14 lg:py-20">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <p className="eyebrow text-amber mb-4">Trip planner</p>
          <h1 className="font-display text-3xl lg:text-h1 font-light text-cream mb-3">Plan Your Trip</h1>
          <p className="text-cream/55 text-base lg:text-lg max-w-xl">Tell us what you're looking for and we'll craft the perfect safari for you.</p>
        </div>
      </section>

      {/* Progress bar */}
      <div className="bg-cream border-b border-ink/8 sticky top-16 lg:top-20 z-20">
        <div className="mx-auto max-w-content px-5 lg:px-12">
          <div className="flex items-center justify-between py-4 overflow-x-auto scrollbar-hide">
            {steps.map((label, i) => (
              <div key={i} className="flex items-center shrink-0">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-xs font-semibold transition-colors ${i < step ? 'bg-terracotta text-cream' : i === step ? 'bg-espresso text-cream' : 'bg-ink/8 text-ink/30'}`}>
                    {i < step ? <Check size={15} /> : i + 1}
                  </div>
                  <span className={`text-xs lg:text-sm font-medium hidden sm:block ${i === step ? 'text-ink' : 'text-ink/35'}`}>{label}</span>
                </div>
                {i < steps.length - 1 && <div className={`w-6 lg:w-12 h-px mx-1.5 ${i < step ? 'bg-terracotta' : 'bg-ink/12'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step content */}
      <div className="mx-auto max-w-content px-5 lg:px-12 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Step 1: Destinations */}
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-2">Which destinations do you want to visit?</h2>
              <p className="text-inkSoft text-sm mb-8">Select one or more — you can change this later.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {planTripDestinations.map((dest) => {
                  const selected = destinations.includes(dest.id);
                  return (
                    <button key={dest.id} onClick={() => toggleDestination(dest.id)} className={`relative group overflow-hidden border-2 transition-all ${selected ? 'border-terracotta ring-1 ring-terracotta/20' : 'border-transparent hover:border-terracotta/30'}`}>
                      <div className="aspect-[4/3]"><img src={dest.image} alt={dest.label} className="w-full h-full object-cover object-center" loading="lazy" /></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3"><p className="text-cream text-sm font-medium leading-snug">{dest.label}</p></div>
                      {selected && <div className="absolute top-2.5 right-2.5 w-7 h-7 bg-terracotta text-cream flex items-center justify-center"><Check size={16} /></div>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Group size */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-2">How big is your party?</h2>
              <p className="text-inkSoft text-sm mb-8">Private safaris only — just your group, no strangers.</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {planTripGroupSizes.map((g) => {
                  const selected = groupSize === g.id;
                  return (
                    <button key={g.id} onClick={() => setGroupSize(g.id)} className={`relative group overflow-hidden border-2 transition-all ${selected ? 'border-terracotta ring-1 ring-terracotta/20' : 'border-transparent hover:border-terracotta/30'}`}>
                      <div className="aspect-[3/4]"><img src={g.image} alt={g.label} className="w-full h-full object-cover object-center" loading="lazy" /></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-center"><p className="text-cream text-sm font-medium">{g.label}</p></div>
                      {selected && <div className="absolute top-2.5 right-2.5 w-7 h-7 bg-terracotta text-cream flex items-center justify-center"><Check size={16} /></div>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Duration */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-2">How many days of safari are you planning?</h2>
              <p className="text-inkSoft text-sm mb-8">Pick the range that fits your schedule.</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {planTripDurations.map((d) => {
                  const selected = duration === d.id;
                  return (
                    <button key={d.id} onClick={() => setDuration(d.id)} className={`flex flex-col items-center justify-center py-10 lg:py-12 border-2 transition-all ${selected ? 'border-terracotta bg-terracotta/8 text-espresso' : 'border-ink/10 bg-cream text-ink hover:border-terracotta/30'}`}>
                      <Clock size={28} className={selected ? 'text-terracotta' : 'text-sage'} />
                      <span className="font-display text-lg font-medium mt-3">{d.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: When */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-2">When are you planning for the safari?</h2>
              <p className="text-inkSoft text-sm mb-8">Pick a month and year — we'll confirm exact dates with you.</p>
              <div className="grid sm:grid-cols-2 gap-8 max-w-lg">
                <div>
                  <label className="eyebrow text-inkSoft mb-3 block">Month</label>
                  <div className="grid grid-cols-3 gap-2">
                    {months.map((m) => (
                      <button key={m} onClick={() => setWhen({ ...when, month: m })} className={`py-2.5 text-sm font-medium border transition-all ${when.month === m ? 'border-terracotta bg-terracotta text-cream' : 'border-ink/12 bg-cream text-ink hover:border-terracotta/30'}`}>{m.slice(0, 3)}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="eyebrow text-inkSoft mb-3 block">Year</label>
                  <div className="flex gap-2">
                    {years.map((y) => (
                      <button key={y} onClick={() => setWhen({ ...when, year: y })} className={`flex-1 py-3 text-sm font-medium border transition-all ${when.year === y ? 'border-terracotta bg-terracotta text-cream' : 'border-ink/12 bg-cream text-ink hover:border-terracotta/30'}`}>{y}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Contact + review */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl lg:text-h3 font-light text-ink mb-2">Contact information</h2>
              <p className="text-inkSoft text-sm mb-8">We'll use this to get back to you with a tailored quote.</p>

              <div className="bg-cream p-6 lg:p-7 border border-ink/8 mb-8">
                <h3 className="eyebrow text-inkSoft mb-5">Your trip summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3"><MapPin size={17} className="text-terracotta shrink-0 mt-0.5" /><div><span className="text-ink/40">Destinations: </span><span className="text-ink">{selectedDestLabels.join(', ') || '—'}</span></div></div>
                  <div className="flex items-start gap-3"><Users size={17} className="text-terracotta shrink-0 mt-0.5" /><div><span className="text-ink/40">Party size: </span><span className="text-ink">{selectedGroup || '—'}</span></div></div>
                  <div className="flex items-start gap-3"><Clock size={17} className="text-terracotta shrink-0 mt-0.5" /><div><span className="text-ink/40">Duration: </span><span className="text-ink">{selectedDuration || '—'}</span></div></div>
                  <div className="flex items-start gap-3"><Calendar size={17} className="text-terracotta shrink-0 mt-0.5" /><div><span className="text-ink/40">When: </span><span className="text-ink">{when.month && when.year ? `${when.month} ${when.year}` : '—'}</span></div></div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Name *</label>
                  <div className="relative">
                    <User size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/35" />
                    <input type="text" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className={`w-full pl-10 pr-4 py-3 border bg-cream text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.name ? 'border-red-400' : 'border-ink/12'}`} placeholder="Your full name" />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Email *</label>
                  <div className="relative">
                    <Mail size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/35" />
                    <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className={`w-full pl-10 pr-4 py-3 border bg-cream text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.email ? 'border-red-400' : 'border-ink/12'}`} placeholder="you@example.com" />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Phone number *</label>
                  <div className="relative">
                    <Phone size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/35" />
                    <input type="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className={`w-full pl-10 pr-4 py-3 border bg-cream text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.phone ? 'border-red-400' : 'border-ink/12'}`} placeholder="+267 ..." />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Message (optional)</label>
                  <div className="relative">
                    <MessageSquare size={17} className="absolute left-3 top-3 text-ink/35" />
                    <textarea value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} rows={3} className="w-full pl-10 pr-4 py-3 border border-ink/12 bg-cream text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors resize-none" placeholder="Anything else you'd like us to know?" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-ink/8">
            <button onClick={handleBack} disabled={step === 0} className={`inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold transition-colors ${step === 0 ? 'text-ink/25 cursor-not-allowed' : 'text-ink hover:bg-ink/5'}`}>
              <ChevronLeft size={18} />
              Back
            </button>
            <button onClick={handleNext} disabled={!canProceed()} className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${canProceed() ? 'bg-terracotta text-cream hover:bg-terracotta-light' : 'bg-ink/8 text-ink/30 cursor-not-allowed'}`}>
              {step === 4 ? 'Submit trip details' : 'Next'}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
