import React from 'react';
import { essays, Essay } from '../data/essays';
import { X, ChevronLeft, Globe2, ArrowUpRight, BookOpen } from 'lucide-react';
import { getDeckImage } from '../data/editorialCuratedImages';

interface EssayPanelProps {
  essay: Essay | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCountry: (countryName: string) => void;
  editorialImageDeck: string[];
}

export const EssayPanel: React.FC<EssayPanelProps> = ({
  essay,
  isOpen,
  onClose,
  onNavigateToCountry,
  editorialImageDeck,
}) => {
  if (!isOpen || !essay) return null;

  const essayIndex = Math.max(0, essays.findIndex((entry) => entry.id === essay.id));
  const heroImage = getDeckImage(
    editorialImageDeck,
    Math.max(0, editorialImageDeck.length - 1 - essayIndex),
  );

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#050505] font-serif text-[#EDEDED] animate-in slide-in-from-bottom-10 duration-500">
      <div className="sticky top-0 z-50 flex h-auto items-center justify-between gap-4 border-b border-white/10 bg-[#050505]/95 px-4 py-3 backdrop-blur-md md:h-20 md:px-12 md:py-4">
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-white"
        >
          <div className="rounded-full border border-white/20 p-2 transition-all group-hover:bg-white group-hover:text-black">
            <ChevronLeft size={16} />
          </div>
          <span className="hidden md:inline">Volver al Hub</span>
        </button>
        <div className="text-center">
          <h2 className="font-cinzel text-sm uppercase tracking-widest text-white md:text-base">
            Ensayo <span className="font-sans text-xs font-bold tracking-normal text-[#FF3530]">/// Especial</span>
          </h2>
          <p className="mt-0.5 text-[10px] uppercase tracking-widest text-gray-500">{essay.author}</p>
        </div>
        <button
          onClick={onClose}
          className="rounded-full bg-white/5 p-2 text-white transition-all hover:bg-white/10"
        >
          <X size={24} />
        </button>
      </div>

      <div className="mx-auto max-w-[980px] px-6 pb-32 pt-12 lg:px-12">
        <div className="mb-14 text-center">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-[#FF3530]">
            Por {essay.author}
          </span>
          <h1 className="mb-6 font-serif-display text-5xl leading-[0.9] text-white md:text-7xl">
            {essay.title}
          </h1>
          <p className="mx-auto max-w-3xl font-serif text-xl italic leading-relaxed text-gray-400 md:text-3xl">
            {essay.subtitle}
          </p>
          {essay.dek ? (
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
              {essay.dek}
            </p>
          ) : null}
        </div>

        <div className="group relative mb-20 aspect-video w-full overflow-hidden border border-white/10 bg-[#111] shadow-2xl">
          <img
            src={heroImage}
            alt={essay.title}
            className="h-full w-full object-cover scale-105 mix-blend-luminosity transition-all duration-1000 group-hover:scale-100 group-hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
        </div>

        <div className="mx-auto max-w-[760px] space-y-9 md:space-y-11">
          {essay.kpunkSource ? (
            <div className="flex flex-col gap-3 border border-white/15 bg-white/[0.03] p-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 rounded-sm bg-[#FF3530] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-black">
                  k-punk
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Entrada original del blog
                  </p>
                  <p className="mt-1 font-serif-display text-base italic text-gray-300">
                    &ldquo;{essay.kpunkSource.originalTitle}&rdquo;
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-gray-600">
                    Publicado en k-punk.org &mdash; {essay.kpunkSource.publishedAt}
                  </p>
                </div>
              </div>
              <a
                href={essay.kpunkSource.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1.5 self-start rounded-sm border border-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all hover:border-[#FF3530]/50 hover:text-white md:self-center"
              >
                <ArrowUpRight size={12} />
                <span>Original</span>
              </a>
            </div>
          ) : null}
          {essay.content.map((paragraph, idx) => (
            <p
              key={idx}
              className={`font-serif text-[1.04rem] leading-[1.95] text-gray-300 text-pretty md:text-[1.12rem] ${idx === 0 ? 'drop-cap' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {essay.sources.length > 0 ? (
          <div className="mt-24 border-t border-white/10 pt-12">
            <h3 className="mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white">
              <BookOpen size={16} className="text-[#FF3530]" /> Research Notes
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {essay.sources.map((source) => (
                <a
                  key={`${essay.id}-${source.url}`}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-white/10 bg-[#111] p-5 transition-all hover:border-[#FF3530]"
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF3530]">
                      {source.source}
                    </span>
                    <ArrowUpRight size={14} className="text-white/35 group-hover:text-white" />
                  </div>
                  <h4 className="mb-2 font-serif-display text-2xl leading-tight text-white group-hover:text-[#FF3530]">
                    {source.title}
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-gray-500">{source.publishedAt}</p>
                </a>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-24 border-t border-white/10 pt-12">
          <h3 className="mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white">
            <Globe2 size={16} className="text-[#FF3530]" /> Explorar Escenas Relacionadas
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {essay.relatedCountries.map((country, i) => (
              <button
                key={i}
                onClick={() => {
                  onClose();
                  onNavigateToCountry(country);
                }}
                className="group flex items-center justify-between border border-white/10 bg-[#111] p-6 text-left transition-all hover:border-[#FF3530] hover:bg-[#1A1A1A]"
              >
                <span className="font-serif-display text-xl text-gray-300 group-hover:text-white">{country}</span>
                <ArrowUpRight size={20} className="text-gray-600 transition-colors group-hover:text-[#FF3530]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
