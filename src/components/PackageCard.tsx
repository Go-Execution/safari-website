import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Compass } from 'lucide-react';
import type { Package } from '@/data/content';

interface PackageCardProps {
  pkg: Package;
  compact?: boolean;
}

export default function PackageCard({ pkg, compact }: PackageCardProps) {
  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className="group flex flex-col bg-white border border-gray-200 hover:border-natgeo-yellow transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={pkg.heroImage}
          alt={pkg.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
        
        {/* Category Tag on Image */}
        <div className="absolute top-3 left-3 bg-black/85 border-l-2 border-natgeo-yellow text-white text-[11px] font-natgeo font-bold px-2.5 py-1 tracking-wider uppercase">
          {pkg.category}
        </div>
      </div>

      {/* Card Details */}
      <div className="flex flex-col flex-1 p-5">
        {/* Yellow NatGeo square tag */}
        <div className="flex items-center gap-1.5 text-xs font-natgeo font-bold uppercase tracking-wider text-black mb-1.5">
          <span className="w-2 h-2 bg-natgeo-yellow inline-block" />
          <span>EXPEDITION DOSSIER</span>
        </div>

        {/* Headline */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-black group-hover:text-natgeo-yellowHover transition-colors leading-snug mb-2.5">
          {pkg.name}
        </h3>

        {/* Key expedition stats */}
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-natgeo-yellow" />
            <span className="text-gray-900 font-semibold">{pkg.duration}</span>
          </span>
          <span className="flex items-center gap-1">
            <Compass size={13} className="text-natgeo-yellow" />
            <span>Botswana Wilderness</span>
          </span>
        </div>

        {!compact && (
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 font-normal">
            {pkg.overview}
          </p>
        )}

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-natgeo uppercase tracking-widest text-gray-400 block">
              Pricing
            </span>
            <span className="text-xs font-bold text-black">
              {pkg.price === 'Price on request' ? 'On Request' : pkg.price.split(' per')[0]}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-natgeo font-bold uppercase tracking-wider text-black group-hover:text-natgeo-yellowHover transition-colors">
            Read Dossier
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
