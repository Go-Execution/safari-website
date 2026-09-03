import React from 'react';
import { X, ExternalLink, ShieldAlert, Compass, Gauge, Scale, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { SpeciesProfile } from '@/data/content';

interface WildlifeModalProps {
  species: SpeciesProfile | null;
  onClose: () => void;
}

export default function WildlifeModal({ species, onClose }: WildlifeModalProps) {
  if (!species) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white text-black overflow-hidden shadow-2xl border-t-4 border-natgeo-yellow max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center bg-black/70 text-white hover:bg-natgeo-yellow hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal body scrollable */}
        <div className="overflow-y-auto">
          {/* Header image with NatGeo Yellow badge */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
            <img
              src={species.image}
              alt={species.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-natgeo-yellow text-black text-xs font-natgeo font-bold uppercase tracking-wider px-2 py-0.5">
                  {species.category}
                </span>
                <span
                  className="text-xs font-natgeo font-bold uppercase tracking-wider px-2 py-0.5 text-white"
                  style={{ backgroundColor: species.statusColor }}
                >
                  IUCN: {species.status} ({species.statusCode})
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl text-white font-bold tracking-tight">
                {species.name}
              </h2>
              <p className="text-white/80 italic font-serif text-sm sm:text-base">
                {species.latinName}
              </p>
            </div>
          </div>

          {/* Species Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 border-y border-gray-200 text-xs">
            <div className="bg-white p-3">
              <div className="flex items-center gap-1.5 text-gray-500 uppercase font-natgeo font-bold tracking-wider">
                <Gauge size={14} className="text-natgeo-yellow" /> Speed
              </div>
              <div className="font-bold text-gray-900 mt-1">{species.speed}</div>
            </div>
            <div className="bg-white p-3">
              <div className="flex items-center gap-1.5 text-gray-500 uppercase font-natgeo font-bold tracking-wider">
                <Scale size={14} className="text-natgeo-yellow" /> Weight
              </div>
              <div className="font-bold text-gray-900 mt-1">{species.weight}</div>
            </div>
            <div className="bg-white p-3">
              <div className="flex items-center gap-1.5 text-gray-500 uppercase font-natgeo font-bold tracking-wider">
                <Clock size={14} className="text-natgeo-yellow" /> Lifespan
              </div>
              <div className="font-bold text-gray-900 mt-1">{species.lifespan}</div>
            </div>
            <div className="bg-white p-3">
              <div className="flex items-center gap-1.5 text-gray-500 uppercase font-natgeo font-bold tracking-wider">
                <MapPin size={14} className="text-natgeo-yellow" /> Best Season
              </div>
              <div className="font-bold text-gray-900 mt-1">{species.encounterSeason.split('(')[0]}</div>
            </div>
          </div>

          {/* Description & Field Information */}
          <div className="p-6 space-y-5">
            {/* Key Field Fact Box */}
            <div className="p-4 bg-natgeo-lightBg border-l-4 border-natgeo-yellow">
              <span className="text-xs font-natgeo font-bold uppercase tracking-widest text-gray-500 block mb-1">
                National Geographic Field Note
              </span>
              <p className="text-sm sm:text-base font-medium text-gray-900 leading-snug">
                "{species.leadFact}"
              </p>
            </div>

            <div>
              <h3 className="font-natgeo font-bold text-base uppercase tracking-wider text-black mb-2">
                Habitat & Wild Behavior
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {species.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100 text-sm">
              <div>
                <span className="font-natgeo font-bold uppercase text-xs text-gray-400 block tracking-wider">
                  Primary Botswana Hotspot
                </span>
                <span className="font-semibold text-gray-800">{species.botswanaHotspot}</span>
              </div>
              <div>
                <span className="font-natgeo font-bold uppercase text-xs text-gray-400 block tracking-wider">
                  Peak Wildlife Season
                </span>
                <span className="font-semibold text-gray-800">{species.encounterSeason}</span>
              </div>
            </div>

            {/* Expedition CTA */}
            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-gray-500">
                Want to encounter {species.name} in their natural habitat?
              </div>
              <Link
                to={`/packages/${species.relatedPackageSlug}`}
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-natgeo-yellow text-black font-natgeo font-bold text-sm tracking-wider uppercase px-5 py-2.5 hover:bg-natgeo-yellowHover transition-colors"
              >
                View Recommended Safari
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
