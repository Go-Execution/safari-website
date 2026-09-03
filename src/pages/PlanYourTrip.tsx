import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Check, ChevronRight, ChevronLeft, CheckCircle2,
  MapPin, Users, Calendar, Clock, Mail, Phone, User, MessageSquare, Compass,
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
      <div className="min-h-[75vh] bg-white text-black flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-lg text-center bg-natgeo-lightBg p-8 sm:p-10 border-t-4 border-natgeo-yellow shadow-md">
          <div className="w-16 h-16 bg-black text-natgeo-yellow flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} />
          </div>
          <h1 className="font-display text-3xl font-bold text-black mb-3">
            Expedition Details Received
          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
            Thank you, {contact.name.split(' ')[0]}. Our senior field naturalists in Maun and Gaborone have received your preferences and will prepare a detailed proposal within 24 hours.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-sm uppercase tracking-wider px-6 py-3 transition-colors"
          >
            Back to Home
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header Banner */}
      <section className="bg-black text-white py-14 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="border-l-[6px] border-natgeo-yellow pl-5 sm:pl-7 max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 text-natgeo-yellow font-natgeo font-extrabold text-xs uppercase tracking-widest mb-1.5">
              <Compass size={14} />
              <span>CUSTOM SAFARI ARCHITECT</span>
            </div>
            <h1 className="font-natgeo font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              PLAN YOUR EXPEDITION
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Tell us your target habitats, timing, and travel party style. We’ll design a private Botswana safari tailored to your exact expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-natgeo-lightBg border-b border-gray-200 sticky top-14 sm:top-16 z-20 shadow-xs">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 overflow-x-auto scrollbar-hide">
            {steps.map((label, i) => (
              <div key={i} className="flex items-center shrink-0">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 flex items-center justify-center text-xs font-natgeo font-extrabold transition-colors ${
                    i < step
                      ? 'bg-black text-natgeo-yellow'
                      : i === step
                      ? 'bg-natgeo-yellow text-black'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  <span className={`text-xs font-natgeo font-bold uppercase tracking-wider hidden sm:block ${
                    i === step ? 'text-black' : 'text-gray-400'
                  }`}>
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-6 sm:w-12 h-[2px] mx-2 ${i < step ? 'bg-black' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Step 1: Destinations */}
        {step === 0 && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-2">
              Which wilderness regions do you want to explore?
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Select one or multiple habitats — your guide will coordinate optimal logistics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {planTripDestinations.map((dest) => {
                const selected = destinations.includes(dest.id);
                return (
                  <button
                    key={dest.id}
                    onClick={() => toggleDestination(dest.id)}
                    className={`relative text-left group overflow-hidden border-2 transition-all ${
                      selected ? 'border-natgeo-yellow ring-2 ring-natgeo-yellow/20' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="aspect-[4/3] bg-black">
                      <img src={dest.image} alt={dest.label} className="w-full h-full object-cover object-center" loading="lazy" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white text-xs sm:text-sm font-semibold leading-snug">{dest.label}</p>
                    </div>
                    {selected && (
                      <div className="absolute top-2.5 right-2.5 w-6 h-6 bg-natgeo-yellow text-black flex items-center justify-center">
                        <Check size={14} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Party Size */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-2">
              How big is your expedition party?
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              All our safaris are private — exclusively your party and your dedicated guide.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {planTripGroupSizes.map((g) => {
                const selected = groupSize === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setGroupSize(g.id)}
                    className={`relative text-center group overflow-hidden border-2 transition-all ${
                      selected ? 'border-natgeo-yellow ring-2 ring-natgeo-yellow/20' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="aspect-[3/4] bg-black">
                      <img src={g.image} alt={g.label} className="w-full h-full object-cover object-center" loading="lazy" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white text-xs sm:text-sm font-semibold">{g.label}</p>
                    </div>
                    {selected && (
                      <div className="absolute top-2.5 right-2.5 w-6 h-6 bg-natgeo-yellow text-black flex items-center justify-center">
                        <Check size={14} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Duration */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-2">
              How many days in the wild are you planning?
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Select the timeframe that best aligns with your international flights.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {planTripDurations.map((d) => {
                const selected = duration === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setDuration(d.id)}
                    className={`flex flex-col items-center justify-center py-10 border-2 transition-all ${
                      selected
                        ? 'border-natgeo-yellow bg-natgeo-yellow/10 text-black'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <Clock size={28} className={selected ? 'text-black' : 'text-gray-400'} />
                    <span className="font-natgeo font-bold text-base uppercase tracking-wider mt-3">
                      {d.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: When */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-2">
              When would you like to travel?
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Different months correspond to Okavango flood peaks, predator movements, and bird migrations.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 max-w-lg">
              <div>
                <label className="font-natgeo font-bold text-xs uppercase tracking-widest text-gray-500 mb-2.5 block">
                  Target Month
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {months.map((m) => (
                    <button
                      key={m}
                      onClick={() => setWhen({ ...when, month: m })}
                      className={`py-2 text-xs font-natgeo font-bold uppercase tracking-wider border transition-all ${
                        when.month === m
                          ? 'border-black bg-black text-natgeo-yellow'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {m.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-natgeo font-bold text-xs uppercase tracking-widest text-gray-500 mb-2.5 block">
                  Year
                </label>
                <div className="flex gap-2">
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setWhen({ ...when, year: y })}
                      className={`flex-1 py-3 text-xs font-natgeo font-bold uppercase tracking-wider border transition-all ${
                        when.year === y
                          ? 'border-black bg-black text-natgeo-yellow'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Contact & Summary */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-black mb-2">
              Expedition Contact Details
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              We'll transmit your itinerary blueprint directly to your inbox.
            </p>

            <div className="bg-natgeo-lightBg p-6 border-l-4 border-natgeo-yellow mb-8">
              <h3 className="font-natgeo font-extrabold text-xs uppercase tracking-widest text-gray-500 mb-3">
                SUMMARY OF SELECTED PREFERENCES
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div><span className="text-gray-400">Regions: </span><strong className="text-black">{selectedDestLabels.join(', ') || 'None selected'}</strong></div>
                <div><span className="text-gray-400">Party Size: </span><strong className="text-black">{selectedGroup || 'None selected'}</strong></div>
                <div><span className="text-gray-400">Duration: </span><strong className="text-black">{selectedDuration || 'None selected'}</strong></div>
                <div><span className="text-gray-400">Target Season: </span><strong className="text-black">{when.month && when.year ? `${when.month} ${when.year}` : 'None selected'}</strong></div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 border text-sm focus:outline-none focus:border-black ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="e.g. Jane Doe"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 border text-sm focus:outline-none focus:border-black ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="you@domain.com"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Phone Number (with Country Code) *
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 border text-sm focus:outline-none focus:border-black ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Special Interests or Wildlife Wishes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    value={contact.message}
                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                    rows={3}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm focus:outline-none focus:border-black resize-none"
                    placeholder="e.g. Wildlife photography focus, interest in wild dog denning, private mokoro only..."
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`inline-flex items-center gap-1.5 px-4 py-2 font-natgeo font-bold text-xs uppercase tracking-wider transition-colors ${
              step === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-black hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={16} />
            Previous Step
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`inline-flex items-center gap-2 px-6 py-2.5 font-natgeo font-extrabold text-xs uppercase tracking-wider transition-colors ${
              canProceed()
                ? 'bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black shadow-xs'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {step === 4 ? 'Submit Expedition Details' : 'Continue'}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
