'use client';

import { useState, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function EnquiryModal({ courseOptions }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check initial hash
    if (typeof window !== 'undefined' && window.location.hash === '#enquire') {
      setIsOpen(true);
    }

    // Listen to hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#enquire') {
        setIsOpen(true);
      }
    };

    // Listen to all clicks on links with href="#enquire"
    const handleDocumentClick = (e) => {
      const link = e.target.closest('a[href="#enquire"], button[data-open-enquire]');
      if (link) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    // Custom event listener for programmatically opening modal
    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('openEnquireModal', handleCustomOpen);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('openEnquireModal', handleCustomOpen);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined' && window.location.hash === '#enquire') {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B2545]/85 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Background Overlay Click to Close */}
      <div className="absolute inset-0" onClick={closeModal} />

      {/* Modal Steel Chassis Box */}
      <div className="relative max-w-3xl w-full bg-[#0B2545] rounded-3xl border-2 border-slate-700 p-6 sm:p-8 shadow-2xl text-white z-10 overflow-hidden">
        {/* Top Laser Weld Accent Line */}
        <div className="h-[4.5px] bg-gradient-to-r from-[#0066FF] via-[#38BDF8] to-[#F97316] absolute top-0 left-0 right-0" />

        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 hover:bg-[#0066FF] text-white border border-slate-700 transition-all shadow-xl hover:scale-110 cursor-pointer z-20"
          title="Close Modal"
        >
          <X size={22} strokeWidth={2.5} />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-6 pr-6 sm:pr-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-4 py-1.5 font-tech text-[10px] sm:text-xs font-black uppercase tracking-widest text-white mb-3 shadow-md">
            <Send size={13} className="animate-bounce" />
            <span>ADMISSION & BATCH ENQUIRY</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
            Have Specific Questions? <span className="text-[#38BDF8]">Enquire Now</span>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
            Get course details, fee structures, accommodation details, and next batch start dates directly on WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-6 backdrop-blur-md">
          <EnquiryForm courseOptions={courseOptions} layout="grid" />
        </div>
      </div>
    </div>
  );
}
