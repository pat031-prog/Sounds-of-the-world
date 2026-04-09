import React from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Disc,
  Globe2,
  Mic2,
  Newspaper,
  Radio,
} from 'lucide-react';
import { essays } from '../data/essays';
import { getDeckImage } from '../data/editorialCuratedImages';
import {
  compilationPicks,
  curatedHubCountries,
  editorialBriefing,
  globalLead,
  inProgressHubCountries,
} from '../data/editorialHub';

interface EditorialHubProps {
  isDesktop: boolean;
  editorialImageDeck: string[];
  onOpenGlobalIssue: () => void;
  onOpenEssay: (essayId: string) => void;
  onOpenCountry: (countryName: string) => void;
}

export const EditorialHub: React.FC<EditorialHubProps> = ({
  isDesktop,
  editorialImageDeck,
  onOpenGlobalIssue,
  onOpenEssay,
  onOpenCountry,
}) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-[#050505] text-[#EDEDED]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: isDesktop ? '54px 54px' : '34px 34px',
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-24 pt-32 md:px-10 md:pt-36 lg:px-12">
        <section className="mb-14 grid grid-cols-1 gap-6 xl:grid-cols-12">
          <button
            onClick={onOpenGlobalIssue}
            className="group relative overflow-hidden border border-white/10 bg-[#0d0d0d] text-left xl:col-span-7"
          >
            <img
              src={getDeckImage(editorialImageDeck, 0)}
              alt="Global Issue"
              className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/95 via-[#050505]/80 to-[#FF3530]/15" />
            <div className="relative flex h-full flex-col gap-8 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                <span>Global Issue</span>
                <span className="border border-white/15 px-2 py-1 text-white/70">April 2026</span>
              </div>
              <div className="max-w-4xl">
                <h2 className="mb-4 font-serif-display text-4xl leading-none text-white md:text-6xl">
                  Global Panorama
                </h2>
                <p className="max-w-3xl font-serif text-lg leading-relaxed text-gray-300 md:text-2xl">
                  {globalLead.editorial.forecast.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
                <div>
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                    Sound Palette
                  </span>
                  <p className="font-serif text-base text-white md:text-lg">
                    {globalLead.editorial.soundPalette.slice(0, 3).join(' / ')}
                  </p>
                </div>
                <div>
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                    Local Verdict
                  </span>
                  <p className="font-serif text-base text-white md:text-lg">
                    {globalLead.editorial.localVerdict.consensus}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                      Open Dossier
                    </span>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Abrir la edición global completa con chapters, cult albums y radar.
                    </p>
                  </div>
                  <ArrowUpRight className="shrink-0 text-[#FF3530] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
                </div>
              </div>
            </div>
          </button>

          <div className="grid gap-6 xl:col-span-5">
            <div className="border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                <Mic2 size={14} />
                <span>{isDesktop ? 'Atlas Desktop' : 'Pocket Editorial Hub'}</span>
              </div>
              <p className="font-serif text-lg leading-relaxed text-gray-300">
                Un frente de lectura para navegar la revista sin depender del mapa roto en móvil
                y sin dejar el escritorio sin contexto editorial cuando el mapa no es la mejor
                interfaz.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-1">
              <div className="border border-white/10 bg-[#0d0d0d] p-5">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                  Essays
                </span>
                <p className="text-3xl font-black text-white">{essays.length}</p>
                <p className="mt-2 text-sm text-gray-400">Longforms techno-criticos listos para abrir.</p>
              </div>
              <div className="border border-white/10 bg-[#0d0d0d] p-5">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                  Curated Countries
                </span>
                <p className="text-3xl font-black text-white">{curatedHubCountries.length}</p>
                <p className="mt-2 text-sm text-gray-400">Dossiers trabajados con archivo, discos y lecturas reales.</p>
              </div>
              <div className="border border-white/10 bg-[#0d0d0d] p-5">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                  Research Briefing
                </span>
                <p className="text-3xl font-black text-white">{editorialBriefing.length}</p>
                <p className="mt-2 text-sm text-gray-400">Links vivos para seguir el presente sin convertirlo en humo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Newspaper size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Special Essays</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {essays.map((essay, index) => (
              <button
                key={essay.id}
                onClick={() => onOpenEssay(essay.id)}
                className="group overflow-hidden border border-white/10 bg-[#0d0d0d] text-left transition-all hover:border-[#FF3530]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={getDeckImage(editorialImageDeck, index + 1)}
                    alt={essay.title}
                    className="h-full w-full object-cover opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                    Essay
                  </span>
                  <h4 className="mb-3 font-serif-display text-2xl leading-tight text-white transition-colors group-hover:text-[#FF3530]">
                    {essay.title}
                  </h4>
                  <p className="font-serif text-sm leading-relaxed text-gray-400">{essay.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Globe2 size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Curated Countries</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {curatedHubCountries.map((country) => (
              <button
                key={country.countryName}
                onClick={() => onOpenCountry(country.countryName)}
                className="group border border-white/10 bg-[#0d0d0d] p-6 text-left transition-all hover:border-[#FF3530] hover:bg-[#111]"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                      {country.editorial.subgenreFocus.name}
                    </span>
                    <h4 className="font-serif-display text-3xl text-white">{country.countryName}</h4>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-gray-600 transition-colors group-hover:text-[#FF3530]"
                  />
                </div>
                <p className="mb-5 font-serif text-base leading-relaxed text-gray-300">
                  {country.editorial.sceneDescription}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">
                    Signal
                  </span>
                  <p className="text-sm text-gray-400">
                    {country.editorial.soundPalette.slice(0, 3).join(' / ')}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <BookOpen size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Archive In Construction</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {inProgressHubCountries.map((country) => (
              <button
                key={country.countryName}
                onClick={() => onOpenCountry(country.countryName)}
                className="group border border-white/10 bg-[#0b0b0b] p-5 text-left transition-all hover:border-white/30"
              >
                <span className="mb-2 inline-block bg-[#FF3530] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-black">
                  In Progress
                </span>
                <h4 className="mb-3 font-serif-display text-2xl text-white">{country.countryName}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{country.editorial.editorialStatusNote}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Radio size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Research Briefing</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {editorialBriefing.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 bg-[#0d0d0d] p-6 transition-all hover:border-[#FF3530]"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">{item.source}</span>
                  <span className="border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-white/55">
                    {item.tag}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">{item.publishedAt}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="mb-3 font-serif-display text-2xl leading-tight text-white transition-colors group-hover:text-[#FF3530]">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-400">{item.blurb}</p>
                  </div>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-gray-600 transition-colors group-hover:text-white" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Disc size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">
              Compilations & Recommendations
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {compilationPicks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-white/10 bg-[#0d0d0d] p-6 transition-all hover:border-[#FF3530]"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">{item.source}</span>
                  {item.territory ? (
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">{item.territory}</span>
                  ) : null}
                </div>
                <h4 className="mb-3 font-serif-display text-2xl leading-tight text-white transition-colors group-hover:text-[#FF3530]">
                  {item.title}
                </h4>
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-gray-500">{item.curator}</p>
                <p className="mt-auto text-sm leading-relaxed text-gray-400">{item.note}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
