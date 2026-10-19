import { useState, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function FloatingEnquiry() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = useCallback(() => setModalOpen(true), []);

  return (
    <>
      <button
        onClick={handleClick}
        className={`fixed bottom-5 right-5 z-30 flex items-center gap-2 bg-terracotta text-cream font-semibold uppercase tracking-wider text-xs px-5 py-3.5 shadow-2xl hover:bg-terracotta-light hover:scale-105 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Enquire now"
      >
        <MessageCircle size={17} className="text-cream" />
        <span className="hidden sm:inline">Enquire Now</span>
      </button>
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
