import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  featuredGridStories,
  editorialStreamStories,
} from '@/data/content';

// High-resolution wildlife photography matching the reference screenshot
const heroBannerImage = 'https://images.pexels.com/photos/6995536/pexels-photo-6995536.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000';
const panoramicCtaImage = 'https://images.pexels.com/photos/35994684/pexels-photo-35994684.jpeg?auto=compress&cs=tinysrgb&h=900&w=2000';

export default function Home() {
  const [visibleStoriesCount, setVisibleStoriesCount] = useState<number>(6);

  const displayedStream = editorialStreamStories.stream.slice(0, visibleStoriesCount);

  return (
    <div className="bg-white min-h-screen text-black">
      {/* 1. HERO BANNER: Exact NatGeo "ANIMALS" Masthead from Screenshot */}
      <section className="relative w-full h-[45vh] min-h-[340px] max-h-[500px] overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBannerImage}
            alt="Animals in their natural habitat"
            className="w-full h-full object-cover object-center brightness-75 scale-100"
          />
          {/* Subtle natural dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 w-full z-10">
          {/* Iconic NatGeo Yellow Vertical Bar */}
          <div className="border-l-[4px] sm:border-l-[6px] border-natgeo-yellow pl-4 sm:pl-7 max-w-2xl animate-fade-up">
            <h1 className="font-natgeo font-extrabold text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
              BOTSWANA
            </h1>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-normal max-w-xl">
              Step into the heart of Africa with Safari Knight Tours. Discover untamed wilderness, remarkable wildlife, and vast landscapes on an unforgettable journey through the Okavango Delta, Moremi Game Reserve, and Chobe National Park.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED STORIES GRID (Exact 2-column top + 3-column bottom layout from screenshot) */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Asymmetric 2-Column (Lead feature + Secondary feature) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 items-start">
            
            {/* Left Big Lead Story (~65% width = 8 cols) */}
            <div className="lg:col-span-8 group">
              <Link
                to={featuredGridStories.leadStory.link}
                className="block relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black"
              >
                <img
                  src={featuredGridStories.leadStory.image}
                  alt={featuredGridStories.leadStory.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Overlay Text in NatGeo Style */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-2.5 h-2.5 bg-natgeo-yellow inline-block shrink-0" />
                    <span className="font-natgeo font-extrabold text-xs sm:text-sm tracking-widest text-white uppercase">
                      {featuredGridStories.leadStory.tag}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white group-hover:text-natgeo-yellow transition-colors leading-tight">
                    {featuredGridStories.leadStory.title}
                  </h2>
                </div>
              </Link>
            </div>

            {/* Right Secondary Story (~35% width = 4 cols) */}
            <div className="lg:col-span-4 group">
              <Link
                to={featuredGridStories.secondaryStory.link}
                className="block"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#E2A100] mb-3">
                  <img
                    src={featuredGridStories.secondaryStory.image}
                    alt={featuredGridStories.secondaryStory.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 bg-natgeo-yellow inline-block shrink-0" />
                    <span className="font-natgeo font-extrabold text-xs tracking-wider text-black uppercase">
                      {featuredGridStories.secondaryStory.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-black group-hover:text-natgeo-yellowHover transition-colors leading-snug">
                    {featuredGridStories.secondaryStory.title}
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-gray-200">
            {featuredGridStories.subCards.map((card) => (
              <Link
                key={card.id}
                to={card.link}
                className="group flex flex-col"
              >
                <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black mb-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 bg-natgeo-yellow inline-block shrink-0" />
                  <span className="font-natgeo font-extrabold text-xs tracking-wider text-black uppercase">
                    {card.tag}
                  </span>
                </div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-black group-hover:text-natgeo-yellowHover transition-colors leading-snug">
                  {card.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MID SECTION: Dark Panoramic Nature Banner from Screenshot */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-black text-center flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={panoramicCtaImage}
            alt="Panoramic nature view"
            className="w-full h-full object-cover object-center brightness-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 z-10">
          <h2 className="font-natgeo font-extrabold text-2xl sm:text-4xl uppercase tracking-wider text-white mb-3">
            EXPERIENCE THE WILD MAGIC OF BOTSWANA
          </h2>
          <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-6 font-normal">
            Expert local guides, bespoke itineraries, and authentic safari camps delivered straight to your dream holiday.
          </p>
          <Link
            to="/plan-your-trip"
            className="inline-block bg-natgeo-yellow hover:bg-natgeo-yellowHover text-black font-natgeo font-extrabold text-xs sm:text-sm tracking-widest uppercase px-7 py-3 transition-colors shadow-md"
          >
            PLAN YOUR TRIP
          </Link>
        </div>
      </section>

      {/* 4. EDITORIAL STREAM: Magazine List of Stories from Screenshot */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          
          {/* River Lead Story (Large horizontal card with overlay from screenshot) */}
          <div className="mb-10 group">
            <Link
              to={editorialStreamStories.lead.link}
              className="block relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-black"
            >
              <img
                src={editorialStreamStories.lead.image}
                alt={editorialStreamStories.lead.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2.5 h-2.5 bg-natgeo-yellow inline-block shrink-0" />
                  <span className="font-natgeo font-extrabold text-xs tracking-widest text-white uppercase">
                    {editorialStreamStories.lead.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-natgeo-yellow transition-colors leading-tight">
                  {editorialStreamStories.lead.title}
                </h3>
              </div>
            </Link>
          </div>

          {/* Stacked Horizontal Stories (Photo Left, Text Right) */}
          <div className="space-y-6 sm:space-y-8 divide-y divide-gray-200">
            {displayedStream.map((story) => (
              <div key={story.id} className="pt-6 sm:pt-8 first:pt-0">
                <Link
                  to={story.link}
                  className="group flex flex-row sm:grid sm:grid-cols-12 gap-4 sm:gap-6 items-center"
                >
                  {/* Story Thumbnail (Left on desktop, smaller left on mobile) */}
                  <div className="w-28 sm:w-auto sm:col-span-5 aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black shrink-0">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Story Title & Tag (Right) */}
                  <div className="flex-1 sm:col-span-7 flex flex-col justify-center py-1">
                    <div className="flex items-center gap-1.5 mb-1.5 sm:mb-1">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-natgeo-yellow inline-block shrink-0" />
                      <span className="font-natgeo font-extrabold text-[10px] sm:text-xs tracking-wider text-black uppercase">
                        {story.tag}
                      </span>
                    </div>
                    <h4 className="font-display text-base sm:text-xl font-bold text-black group-hover:text-natgeo-yellowHover transition-colors leading-snug">
                      {story.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* READ MORE Button */}
          {visibleStoriesCount < editorialStreamStories.stream.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleStoriesCount((prev) => prev + 3)}
                className="inline-flex items-center gap-2 border border-black hover:border-natgeo-yellow hover:bg-natgeo-yellow text-black font-natgeo font-extrabold text-xs sm:text-sm uppercase tracking-widest px-7 py-2.5 transition-colors"
              >
                <span>READ MORE</span>
                <ChevronDown size={15} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
