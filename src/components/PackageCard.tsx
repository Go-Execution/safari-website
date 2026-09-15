import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { Package } from '@/data/content';

interface PackageCardProps {
  pkg: Package;
  compact?: boolean;
}

export default function PackageCard({ pkg, compact }: PackageCardProps) {
  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className="group flex flex-col bg-white overflow-hidden border border-neutral-200 hover:border-amber hover:shadow-lg transition-all duration-300 relative hover:-translate-y-0.5"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
        <img
          src={pkg.heroImage}
          alt={pkg.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 bg-black/95 text-amber text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border-l-2 border-amber shadow-sm">
          {pkg.category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-xl font-medium text-ink mb-2 leading-snug group-hover:text-amber-dark transition-colors">
          {pkg.name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-inkSoft mb-3">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-amber" />
            {pkg.duration}
          </span>
        </div>
        {!compact && (
          <p className="text-sm text-inkSoft leading-relaxed mb-4 line-clamp-2">{pkg.overview}</p>
        )}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-neutral-100">
          <span className="text-sm font-bold text-ink">
            {pkg.price === 'Price on request' ? 'On request' : pkg.price.split(' per')[0]}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-black group-hover:text-amber-dark transition-colors">
            Explore
            <ArrowUpRight size={14} className="text-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
