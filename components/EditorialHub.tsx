import React, { useEffect } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Disc,
  Globe2,
  Headphones,
  Mic2,
  Newspaper,
  Radio,
  Sparkles,
  TowerControl,
} from 'lucide-react';
import { essays } from '../data/essays';
import { getDeckImage } from '../data/editorialCuratedImages';
import { EditorialIssueMap } from './EditorialIssueMap';
import {
  compilationPicks,
  cultCanonChart,
  curatedHubCountries,
  editorialIssueMapSections,
  editorialBriefing,
  globalLead,
  globalPanoramaDispatch,
  inProgressHubCountries,
  newSignalChart,
  playlistBundles,
  signalLexicon,
} from '../data/editorialHub';

interface EditorialHubProps {
  isDesktop: boolean;
  editorialImageDeck: string[];
  onOpenGlobalIssue: () => void;
  onOpenEssay: (essayId: string) => void;
  onOpenCountry: (countryName: string) => void;
  initialSectionId?: string | null;
}

const platformLabel: Record<'spotify' | 'apple' | 'youtube', string> = {
  spotify: 'Spotify',
  apple: 'Apple Music',
  youtube: 'YouTube',
};

const trendTone: Record<'new' | 'up' | 'steady', string> = {
  new: 'bg-[#FF3530] text-black',
  up: 'bg-white text-black',
  steady: 'bg-white/10 text-white/70',
};

export const EditorialHub: React.FC<EditorialHubProps> = ({
  isDesktop,
  editorialImageDeck,
  onOpenGlobalIssue,
  onOpenEssay,
  onOpenCountry,
  initialSectionId,
}) => {
  const hubIssueMapItems = editorialIssueMapSections.filter((section) => section.context === 'hub');
  const quickCountryPreview = curatedHubCountries.slice(0, isDesktop ? 10 : 6);
  const briefingPreview = editorialBriefing.slice(0, 2);

  useEffect(() => {
    if (!initialSectionId) return;

    const nextFrame = window.requestAnimationFrame(() => {
      const element = document.getElementById(initialSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    return () => window.cancelAnimationFrame(nextFrame);
  }, [initialSectionId]);

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

      <div className="relative mx-auto max-w-[1640px] px-5 pb-24 pt-32 md:px-10 md:pt-48 lg:px-12">
        <section className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
          <article className="group relative overflow-hidden border border-white/10 bg-[#0d0d0d] text-left xl:col-span-8">
            <img
              src={getDeckImage(editorialImageDeck, 0)}
              alt="Global Issue"
              className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/95 via-[#050505]/80 to-[#FF3530]/15" />
            <div className="relative flex h-full flex-col gap-8 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                <span>Global Issue</span>
                <span className="border border-white/15 px-2 py-1 text-white/70">
                  {globalPanoramaDispatch.dateLabel}
                </span>
              </div>
              <div className="max-w-4xl">
                <h2 className="mb-4 font-serif-display text-4xl leading-none text-white md:text-6xl">
                  Global Panorama
                </h2>
                <p className="max-w-3xl font-serif text-lg leading-relaxed text-gray-300 md:text-2xl">
                  {globalPanoramaDispatch.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {globalPanoramaDispatch.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/12 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/65 transition-colors hover:border-[#FF3530] hover:text-white"
                    >
                      {source.label}
                    </a>
                  ))}
                </div>
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
                    Research Pulse
                  </span>
                  <p className="font-serif text-base text-white md:text-lg">
                    {globalPanoramaDispatch.researchPulse.join(' / ')}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <button
                    onClick={onOpenGlobalIssue}
                    className="flex w-full items-end justify-between gap-4 text-left"
                  >
                    <div>
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                        Open Dossier
                      </span>
                      <p className="text-sm leading-relaxed text-gray-400">
                        Abrir la edicion global con chapters, canon, charts y radar expandido.
                      </p>
                    </div>
                    <ArrowUpRight className="shrink-0 text-[#FF3530] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6 xl:col-span-4">
            <div className="border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                <Mic2 size={14} />
                <span>{isDesktop ? 'Atlas Desktop Hub' : 'Pocket Editorial Hub'}</span>
              </div>
              <div className="grid gap-5">
                <button
                  onClick={onOpenGlobalIssue}
                  className="flex items-center justify-between border border-[#FF3530]/40 bg-[#FF3530]/10 px-4 py-3 text-left transition-colors hover:border-[#FF3530] hover:bg-[#FF3530]/15"
                >
                  <div>
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF3530]">
                      Open Global Issue
                    </span>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Entrar directo al dossier madre con chapters, canon y radar.
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-[#FF3530]" />
                </button>

                <EditorialIssueMap
                  items={hubIssueMapItems}
                  activeTarget={initialSectionId ?? undefined}
                  isDesktop={false}
                  onSelect={(item) => {
                    if (item.target === 'global-issue') {
                      onOpenGlobalIssue();
                      return;
                    }

                    const element = document.getElementById(item.target);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                />

                <div className="border-t border-white/10 pt-5">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                    Curated Countries
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {quickCountryPreview.map((country) => (
                      <button
                        key={country.countryName}
                        onClick={() => onOpenCountry(country.countryName)}
                        className="border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70 transition-colors hover:border-[#FF3530] hover:text-white"
                      >
                        {country.countryName}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                    Fresh Reading
                  </span>
                  <div className="space-y-3">
                    {briefingPreview.map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-white/10 px-4 py-3 transition-colors hover:border-[#FF3530]"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
                          <span className="text-[#FF3530]">{item.source}</span>
                          <span>{item.publishedAt}</span>
                        </div>
                        <p className="font-serif text-sm leading-relaxed text-gray-300">{item.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-2">
              <div className="border border-white/10 bg-[#0d0d0d] p-5">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                  Essays
                </span>
                <p className="text-3xl font-black text-white">{essays.length}</p>
                <p className="mt-2 text-sm text-gray-400">Longforms con research notes.</p>
              </div>
              <div className="border border-white/10 bg-[#0d0d0d] p-5">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                  Cult Canon
                </span>
                <p className="text-3xl font-black text-white">{cultCanonChart.length}</p>
                <p className="mt-2 text-sm text-gray-400">Discos de archivo con tapa real.</p>
              </div>
              <div className="border border-white/10 bg-[#0d0d0d] p-5">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                  New Signal
                </span>
                <p className="text-3xl font-black text-white">{newSignalChart.length}</p>
                <p className="mt-2 text-sm text-gray-400">Releases 2025-2026 bajo radar editorial.</p>
              </div>
              <div className="border border-white/10 bg-[#0d0d0d] p-5">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                  Signals
                </span>
                <p className="text-3xl font-black text-white">{signalLexicon.length}</p>
                <p className="mt-2 text-sm text-gray-400">Taxonomias para leer la escena ahora.</p>
              </div>
            </div>
          </div>
        </section>

        <EditorialIssueMap
          items={hubIssueMapItems}
          activeTarget={initialSectionId ?? undefined}
          isDesktop={isDesktop}
          sticky={isDesktop}
          className="hidden md:block mb-16"
          onSelect={(item) => {
            if (item.target === 'global-issue') {
              onOpenGlobalIssue();
              return;
            }

            const element = document.getElementById(item.target);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        />

        <section id="essays" className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Newspaper size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Special Essays</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                <div className="flex h-full flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                    <span>Essay</span>
                    <span className="text-white/45">{essay.sources.length} sources</span>
                  </div>
                  <h4 className="mb-3 font-serif-display text-2xl leading-tight text-white transition-colors group-hover:text-[#FF3530]">
                    {essay.title}
                  </h4>
                  <p className="font-serif text-sm leading-relaxed text-gray-400">
                    {essay.dek ?? essay.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="cult-canon" className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Disc size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Cult Canon // 20</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {cultCanonChart.map((entry) => (
              <a
                key={`${entry.chart}-${entry.rank}`}
                href={entry.coverSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 border border-white/10 bg-[#0d0d0d] p-4 transition-all hover:border-[#FF3530]"
              >
                <div className="flex w-10 shrink-0 items-start justify-center text-2xl font-black text-white/30">
                  {entry.rank}
                </div>
                <div className="h-24 w-24 shrink-0 overflow-hidden border border-white/10 bg-black">
                  <img
                    src={entry.coverImageUrl}
                    alt={entry.albumName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
                    <span className="font-bold text-[#FF3530]">{entry.label}</span>
                    <span>{entry.year}</span>
                    {entry.territory ? <span>{entry.territory}</span> : null}
                  </div>
                  <h4 className="font-serif-display text-2xl leading-tight text-white transition-colors group-hover:text-[#FF3530]">
                    {entry.albumName}
                  </h4>
                  <p className="mb-3 text-sm uppercase tracking-[0.22em] text-gray-500">{entry.artist}</p>
                  <p className="mb-2 text-sm leading-relaxed text-gray-300">{entry.blurb}</p>
                  <p className="text-sm leading-relaxed text-gray-500">{entry.whyItMatters}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="new-signal" className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <TowerControl size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">New Signal // 20</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {newSignalChart.map((entry) => (
              <a
                key={`${entry.chart}-${entry.rank}`}
                href={entry.coverSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 border border-white/10 bg-[#0d0d0d] p-4 transition-all hover:border-[#FF3530]"
              >
                <div className="flex w-10 shrink-0 items-start justify-center text-2xl font-black text-white/30">
                  {entry.rank}
                </div>
                <div className="h-24 w-24 shrink-0 overflow-hidden border border-white/10 bg-black">
                  <img
                    src={entry.coverImageUrl}
                    alt={entry.albumName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/50">
                    {entry.trend ? (
                      <span className={`px-2 py-1 font-bold tracking-[0.22em] ${trendTone[entry.trend]}`}>
                        {entry.trend}
                      </span>
                    ) : null}
                    <span className="font-bold text-[#FF3530]">{entry.label}</span>
                    <span>{entry.year}</span>
                    {entry.territory ? <span>{entry.territory}</span> : null}
                  </div>
                  <h4 className="font-serif-display text-2xl leading-tight text-white transition-colors group-hover:text-[#FF3530]">
                    {entry.albumName}
                  </h4>
                  <p className="mb-3 text-sm uppercase tracking-[0.22em] text-gray-500">{entry.artist}</p>
                  <p className="mb-2 text-sm leading-relaxed text-gray-300">{entry.blurb}</p>
                  <p className="text-sm leading-relaxed text-gray-500">{entry.whyItMatters}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="playlist-matrix" className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Headphones size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Playlist Matrix</h3>
          </div>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            {playlistBundles.map((bundle) => (
              <div key={bundle.title} className="border border-white/10 bg-[#0d0d0d] p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                      {bundle.territory}
                    </span>
                    <h4 className="font-serif-display text-3xl text-white">{bundle.title}</h4>
                  </div>
                  <ArrowUpRight size={18} className="text-white/35" />
                </div>
                <p className="mb-4 font-serif text-base leading-relaxed text-gray-300">
                  {bundle.description}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">{bundle.thesis}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {bundle.platforms.map((platform) => (
                    <a
                      key={platform.platform}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 transition-colors hover:border-[#FF3530] hover:text-white"
                    >
                      {platformLabel[platform.platform]}
                    </a>
                  ))}
                </div>
                <div className="space-y-3 border-t border-white/10 pt-5">
                  {bundle.highlights.map((highlight) => (
                    <a
                      key={`${bundle.title}-${highlight.artist}-${highlight.title}`}
                      href={highlight.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-l-2 border-white/10 pl-4 transition-colors hover:border-[#FF3530]"
                    >
                      <div className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[#FF3530]">
                        {highlight.source}
                      </div>
                      <p className="text-sm font-bold text-white">
                        {highlight.artist} - {highlight.title}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500">{highlight.note}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="signal-lexicon" className="mb-16">
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
            <Sparkles size={16} className="text-[#FF3530]" />
            <h3 className="text-xs font-black uppercase tracking-[0.35em] text-white">Signal Lexicon</h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {signalLexicon.map((signal) => (
              <a
                key={signal.name}
                href={signal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 bg-[#0d0d0d] p-6 transition-all hover:border-[#FF3530]"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h4 className="font-serif-display text-2xl leading-tight text-white group-hover:text-[#FF3530]">
                    {signal.name}
                  </h4>
                  <ArrowUpRight size={16} className="shrink-0 text-white/35 group-hover:text-white" />
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-300">{signal.definition}</p>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{signal.whyNow}</p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {signal.territories.map((territory) => (
                    <span
                      key={`${signal.name}-${territory}`}
                      className="border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-white/55"
                    >
                      {territory}
                    </span>
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#FF3530]">{signal.source}</div>
              </a>
            ))}
          </div>
        </section>

        <section id="countries" className="mb-16">
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

        <section id="archive" className="mb-16">
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

        <section id="briefing" className="mb-16">
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
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF3530]">
                    {item.source}
                  </span>
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

        <section id="compilations">
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
