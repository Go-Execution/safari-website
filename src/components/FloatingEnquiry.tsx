import { useState, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function FloatingEnquiry() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = useCallback(() => setModalOpen(true), []);

  return (
    <>
      <button
        onClick={handleClick}
        className={`fixed bottom-5 right-5 z-30 flex items-center gap-2 bg-natgeo-yellow text-black font-natgeo font-extrabold uppercase tracking-wider px-4 py-2.5 shadow-xl hover:bg-natgeo-yellowHover border-2 border-black transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Inquire about safari"
      >
        <MessageCircle size={16} />
        <span className="text-xs">Safari Inquiry</span>
      </button>
      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
