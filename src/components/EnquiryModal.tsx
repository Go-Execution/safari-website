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
    message: packageName ? `I'm interested in the ${packageName} package. Please get in touch.` : '',
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
      <div className="absolute inset-0 bg-espresso-dark/85 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-cream w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/8">
          <h3 className="font-display text-2xl font-medium text-ink">
            {submitted ? 'Thank you' : 'Quick enquiry'}
          </h3>
          <button onClick={handleClose} className="p-1.5 -mr-1.5 text-ink/40 hover:text-ink transition-colors" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-12 text-center">
            <CheckCircle2 size={44} className="text-terracotta mx-auto mb-5" />
            <p className="text-ink text-lg font-display font-medium mb-2">Your enquiry has been sent</p>
            <p className="text-inkSoft text-sm mb-6 leading-relaxed">
              We'll get back to you within 24 hours. For urgent matters, call us at {SITE.phone}.
            </p>
            <button onClick={handleClose} className="bg-espresso text-cream px-6 py-2.5 text-sm font-semibold hover:bg-espresso-light transition-colors">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            <p className="text-sm text-inkSoft mb-2">Send us a quick message and we'll get right back to you.</p>
            <div>
              <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full px-4 py-3 border bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.name ? 'border-red-400' : 'border-ink/12'}`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-4 py-3 border bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.email ? 'border-red-400' : 'border-ink/12'}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Phone *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full px-4 py-3 border bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors ${errors.phone ? 'border-red-400' : 'border-ink/12'}`}
                placeholder="+267 ..."
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-inkSoft mb-1.5 tracking-wide">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-ink/12 bg-white text-ink text-sm focus:outline-none focus:ring-1 focus:ring-terracotta focus:border-terracotta transition-colors resize-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-terracotta text-cream font-semibold py-3.5 hover:bg-terracotta-light transition-colors">
              <Send size={16} />
              Send enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
