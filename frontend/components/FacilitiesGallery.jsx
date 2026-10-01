'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Radio,
} from 'lucide-react';

/* =========================================================
   11 ACTUAL TRAINING FACILITIES DATA
========================================================= */
const facilityItems = [
  {
    id: 'booths',
    title: 'Welding Booths',
    category: 'booths',
    caption: 'Individual hands-on welding booths equipped with fume extractors & individual machines',
    image: '/images/facility-welding-booths.jpg',
    badge: '100% INDIVIDUAL BOOTHS',
  },
  {
    id: 'tig-machines',
    title: 'TIG Machines',
    category: 'machines',
    caption: 'High-purity inverter GTAW TIG welding power sources with pulse & high frequency arc control',
    image: '/images/welding-hero-4.jpg',
    badge: 'GTAW POWER SOURCES',
  },
  {
    id: 'mig-machines',
    title: 'MIG Machines',
    category: 'machines',
    caption: 'Continuous wire feed GMAW MIG/MAG welding stations for high-speed industrial production',
    image: '/images/welding-hero.jpg',
    badge: 'GMAW PRODUCTION RIGS',
  },
  {
    id: 'arc-machines',
    title: 'ARC Machines',
    category: 'machines',
    caption: 'Heavy-duty SMAW shielded metal arc welding units with precise digital current controls',
    image: '/images/welding-hero-2.jpg',
    badge: 'SMAW HEAVY UNITS',
  },
  {
    id: '6g-pipe-setup',
    title: '6G Pipe Setup',
    category: 'machines',
    caption: 'Fixed 45° incline pipe rigs with restriction rings for ASME IX & AWS 6G welder qualification',
    image: '/images/facility-6g-pipe.jpg',
    badge: 'ASME IX 6G RIGS',
  },
  {
    id: 'fabrication-area',
    title: 'Fabrication Area',
    category: 'booths',
    caption: 'Heavy steel beam, plate fit-up, edge beveling, grinding & structural assembly workshop',
    image: '/images/facility-fabrication.jpg',
    badge: 'HEAVY FABRICATION',
  },
  {
    id: 'classroom',
    title: 'Classroom',
    category: 'classroom',
    caption: 'Air-conditioned theory classroom for welding symbols, WPS/PQR reading & code study',
    image: '/images/facility-classroom.jpg',
    badge: 'THEORY & CODES ROOM',
  },
  {
    id: 'safety-equipment',
    title: 'Safety Equipment',
    category: 'testing',
    caption: 'Auto-darkening helmets, leather jackets, aprons, safety boots & respirators for full PPE compliance',
    image: '/images/facility-safety-gear.jpg',
    badge: '100% PPE COMPLIANCE',
  },
  {
    id: 'testing-equipment',
    title: 'Testing Equipment',
    category: 'testing',
    caption: 'Visual (VT), Ultrasonic (UT), Magnetic (MT), Dye Penetrant (PT) & mechanical bend testing lab',
    image: '/images/facility-testing-equipment.jpg',
    badge: 'NDT QUALITY LAB',
  },
  {
    id: 'students-practicing',
    title: 'Students Practicing',
    category: 'instruction',
    caption: 'Trainees executing real 1G to 6G arc time practice under individual instructor supervision',
    image: '/images/welding-hero.jpg',
    badge: 'REAL ARC PRACTICE',
  },
  {
    id: 'trainers-demonstrating',
    title: 'Trainers Demonstrating',
    category: 'instruction',
    caption: 'Certified AWS/IS master instructors demonstrating torch angle, travel speed & root pass techniques',
    image: '/images/welding-hero-2.jpg',
    badge: 'EXPERT INSTRUCTION',
  },
];

export default function FacilitiesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto-Slide carousel every 3.5 seconds
  useEffect(() => {
    if (isPaused || selectedImage) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilityItems.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, selectedImage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + facilityItems.length) % facilityItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % facilityItems.length);
  };

  return (
    <section id="facilities" className="scroll-mt-20 bg-slate-100/90 py-16 sm:py-20 lg:py-24 border-b border-slate-200 overflow-hidden">
      <div className="container-site">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#CBD5E1] shadow-sm px-4 py-1.5 mb-4 cursor-default">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF3FE] text-[#0066FF]">
              <Camera size={13} className="animate-pulse" />
            </span>
            <span className="font-display text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-[#0B2545]">
              NIW HEAVY INDUSTRIAL WORKSHOP • KOVUR, CHENNAI
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF] animate-ping" />
          </div>

          <h2 className="font-display font-extrabold uppercase tracking-tight text-[#0B2545] text-2xl sm:text-3xl lg:text-[2.25rem]">
            Our Training <span className="text-weld-blue">Facilities</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            Slide through our 11 actual workshop facility viewports: individual welding booths, TIG/MIG/ARC power sources, 6G pipe setups, fabrication area, NDT testing lab, and classroom.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-l from-[#0066FF] to-transparent rounded-full" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#0066FF] shadow-[0_0_10px_#0066FF] animate-ping" />
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#0066FF] to-transparent rounded-full" />
          </div>
        </div>

        {/* ===================================================
            FULL-WIDTH INDUSTRIAL STEEL LENS CAROUSEL (3D COVER-FLOW)
        =================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-5xl mx-auto"
        >
          {/* CAROUSEL SLIDER TRACK (3 VISIBLE SLIDES AT A TIME) */}
          <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
            {facilityItems.map((item, idx) => {
              // Calculate relative position to currentIndex
              let diff = idx - currentIndex;
              if (diff < -5) diff += facilityItems.length;
              if (diff > 5) diff -= facilityItems.length;

              const isCurrent = idx === currentIndex;
              const isPrev = diff === -1 || (currentIndex === 0 && idx === facilityItems.length - 1);
              const isNext = diff === 1 || (currentIndex === facilityItems.length - 1 && idx === 0);

              // Position styling
              let positionStyles = 'opacity-0 pointer-events-none scale-75 z-0 translate-x-0';
              if (isCurrent) {
                positionStyles = 'opacity-100 z-30 scale-100 translate-x-0 pointer-events-auto';
              } else if (isPrev) {
                positionStyles = 'opacity-60 z-10 scale-90 -translate-x-[50%] sm:-translate-x-[60%] pointer-events-auto';
              } else if (isNext) {
                positionStyles = 'opacity-60 z-10 scale-90 translate-x-[50%] sm:translate-x-[60%] pointer-events-auto';
              }

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isCurrent) setSelectedImage(item);
                    else setCurrentIndex(idx);
                  }}
                  className={`absolute w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[580px] bg-white rounded-2xl border-2 transition-all duration-700 ease-out overflow-hidden cursor-pointer shadow-xl ${positionStyles}`}
                  style={{
                    borderColor: isCurrent ? '#0066FF' : '#CBD5E1',
                    boxShadow: isCurrent ? '0 25px 50px rgba(11,37,69,0.22)' : '0 10px 30px rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Top Laser Seam Line */}
                  <div className="h-[4.5px] bg-gradient-to-r from-[#0066FF] via-[#38BDF8] to-[#0B2545]" />

                  {/* Photo Lens Display Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority={isCurrent}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/20 to-transparent" />

                    {/* Top Telemetry Badge */}
                    <div className="absolute top-3.5 left-4 z-10 flex items-center gap-2">
                      <span className="font-tech text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded bg-[#0B2545]/90 text-[#38BDF8] border border-white/20 backdrop-blur-md">
                        {item.badge}
                      </span>
                    </div>

                    {/* Zoom Button */}
                    <div className="absolute top-3.5 right-4 z-10">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-[#0B2545] shadow-md hover:scale-110 transition-transform">
                        <Maximize2 size={16} />
                      </div>
                    </div>

                    {/* Bottom Title & Counter */}
                    <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white flex items-end justify-between">
                      <div>
                        <span className="font-tech text-[10px] text-[#38BDF8] uppercase tracking-widest block mb-0.5">
                          VIEWPORT {idx + 1} OF {facilityItems.length}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white drop-shadow-md">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Photo Caption Footer */}
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
                    <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium max-w-md">
                      {item.caption}
                    </p>

                    <div className="shrink-0 font-display text-xs font-extrabold uppercase text-[#0066FF] flex items-center gap-1">
                      <span>FULLSCREEN</span>
                      <ChevronRight size={15} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CAROUSEL NAVIGATION CONTROLS */}
          <div className="mt-8 flex items-center justify-between gap-4 px-2">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0B2545] border-2 border-slate-300 hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all shadow-md cursor-pointer"
              title="Previous Facility"
            >
              <ChevronLeft size={20} strokeWidth={3} />
            </button>

            {/* Indicator Dots & Titles */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-300 shadow-sm overflow-x-auto max-w-full">
              {facilityItems.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className="group flex items-center gap-1.5 focus:outline-none cursor-pointer"
                    title={item.title}
                  >
                    <span
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        isActive ? 'w-7 bg-[#0066FF]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0B2545] border-2 border-slate-300 hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all shadow-md cursor-pointer"
              title="Next Facility"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* ===================================================
            LIGHTBOX MODAL PHOTO VIEWER
        =================================================== */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B2545]/90 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-300">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0B2545] border border-white/20 transition-all shadow-xl cursor-pointer"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Modal Lightbox Content Plate */}
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              {/* Photo Display Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Caption & Metadata Footer */}
              <div className="p-5 sm:p-7 bg-[#0B2545] border-t border-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-tech text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#0066FF] text-white">
                      {selectedImage.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                    {selectedImage.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}