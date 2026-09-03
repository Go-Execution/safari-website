import { useState, type FormEvent } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { SITE } from '@/data/content';

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  packageName?: string;
}

export default function EnquiryModal({ open, onClose, packageName }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: packageName ? `I'm interested in the ${packageName} expedition. Please provide seasonal rates and availability.` : '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!open) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" onClick={handleClose} />
      <div className="relative bg-white text-black w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border-t-4 border-natgeo-yellow">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <span className="font-natgeo font-extrabold text-[10px] tracking-widest text-gray-400 uppercase block">
              SAFARI DESK
            </span>
            <h3 className="font-display text-xl font-bold text-black">
              {submitted ? 'Inquiry Sent' : 'Expedition Inquiry'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 -mr-1.5 text-gray-400 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <CheckCircle2 size={40} className="text-black mx-auto mb-4" />
            <p className="text-black text-xl font-display font-bold mb-2">Thank you, {form.name.split(' ')[0]}</p>
            <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">
              Your inquiry has been dispatched to our Botswana guides. We will reach out within 24 hours. For urgent field coordination, contact us at {SITE.phone}.
            </p>
            <button
              onClick={handleClose}
              className="bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <p className="text-xs text-gray-600">
              Inquire about tailored dates, lodge availability, and wildlife sighting opportunities.
            </p>
            <div>
              <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full px-3.5 py-2.5 border text-sm text-black focus:outline-none focus:border-black ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 border text-sm text-black focus:outline-none focus:border-black ${
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
                className={`w-full px-3.5 py-2.5 border text-sm text-black focus:outline-none focus:border-black ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="+267 ..."
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-natgeo font-bold uppercase tracking-wider text-gray-700 mb-1">
                Message / Details
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-3.5 py-2.5 border border-gray-200 text-sm text-black focus:outline-none focus:border-black resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-xs uppercase tracking-wider py-3 transition-colors shadow-xs mt-2"
            >
              <Send size={14} />
              Submit Expedition Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
