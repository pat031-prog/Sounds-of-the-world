import React, { useState, useEffect } from 'react';
import { AppMode, CulturalData } from '../types';
import { Play, ArrowUpRight, Disc, Mic2, X, Music4, Guitar, Quote, Store, CassetteTape, Radio, Shirt, Globe, Star, MessageSquare, AudioWaveform, Sliders, ChevronLeft, ChevronRight, Newspaper, BookOpen, Radar, Zap, Fingerprint, ExternalLink, Globe2 } from 'lucide-react';
import { Loader } from './ui/Loader';
import { essays } from '../data/essays';
import { getDeckImage } from '../data/editorialCuratedImages';
import { EditorialIssueMap } from './EditorialIssueMap';
import {
  cultCanonPreview,
  editorialFeatureAccessCards,
  editorialIssueMapSections,
  highlightedSignals,
  newSignalPreview,
  playlistBundles,
} from '../data/editorialHub';

interface InfoPanelProps {
  data: CulturalData | null;
  isLoading: boolean;
  isOpen: boolean;
  onClose: () => void;
  selectedCountryName: string | null;
  mode: AppMode;
  editorialImageDeck: string[];
  initialEditorialPage?: number;
  onOpenGlobalEditorial?: (initialPage?: number) => void;
  onOpenEditorialSection?: (sectionId: string) => void;
  onOpenEssay?: (essayId: string) => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ 
  data, 
  isLoading, 
  isOpen, 
  onClose,
  selectedCountryName,
  mode,
  editorialImageDeck,
  initialEditorialPage = 0,
  onOpenGlobalEditorial,
  onOpenEditorialSection,
  onOpenEssay
}) => {
  const [editorialPage, setEditorialPage] = useState(0);

  // Reset page when data changes
  useEffect(() => {
    setEditorialPage(initialEditorialPage);
  }, [data, initialEditorialPage]);

  if (!isOpen) return null;

  const isGlobalMode = data?.countryName === "Global Issue";
  const isInProgress = data?.editorial.editorialStatus === 'in-progress';

  const containerClasses = mode === 'editorial' 
    ? 'fixed inset-0 z-50 bg-[#050505] text-[#EDEDED] overflow-y-auto font-serif' 
    : 'fixed inset-y-0 right-0 z-50 w-full md:w-[650px] bg-[#121212] border-l border-white/10 font-sans text-gray-100 shadow-2xl overflow-y-auto transform transition-all duration-500 ease-in-out';

  const headerClasses = mode === 'editorial'
    ? 'fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3 md:py-4 px-6 md:px-12 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 md:gap-0 h-auto md:h-20'
    : 'sticky top-0 z-20 bg-[#121212]/90 backdrop-blur-md border-b border-white/5 px-6 md:px-8 py-4 md:py-5 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 md:gap-0 h-auto md:h-20';

  const totalPages = mode === 'editorial' && isInProgress ? 1 : 4;
  const nextPage = () => setEditorialPage(p => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setEditorialPage(p => Math.max(p - 1, 0));
  const issueMapItems = editorialIssueMapSections.filter((item) =>
    item.context === (isGlobalMode ? 'global' : 'country'),
  );
  const featureCards = editorialFeatureAccessCards.filter((item) =>
    item.context === (isGlobalMode ? 'global' : 'country'),
  );

  const handleIssueMapSelect = (target: string) => {
    if (target === 'global-issue') {
      onOpenGlobalEditorial?.(0);
      return;
    }

    if (target.startsWith('page-')) {
      const pageIndex = Number(target.replace('page-', ''));
      if (!Number.isNaN(pageIndex)) {
        setEditorialPage(pageIndex);
      }
      return;
    }

    onOpenEditorialSection?.(target);
  };

  return (
    <div className={containerClasses}>
      
      {/* HEADER */}
      <div className={headerClasses}>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
             {mode === 'editorial' ? (
               <div className="flex items-center gap-6">
                  <button onClick={onClose} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group">
                      <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                        <ChevronLeft size={16} />
                      </div>
                      <span className="hidden md:inline">Hub</span>
                  </button>
                  <div className="h-8 w-px bg-white/10 hidden md:block"></div>
                  <h2 className="text-xl font-cinzel text-white tracking-widest hidden md:block uppercase">
                      {data?.countryName || 'Loading...'} <span className="text-[#FF3530] text-sm font-sans tracking-normal font-bold">/// {isGlobalMode ? 'Global Issue' : 'Vol. 4'}</span>
                  </h2>
               </div>
             ) : (
               <h2 className="text-3xl font-bold tracking-tight text-white leading-none">
                 {selectedCountryName || 'Explorar'}
               </h2>
             )}
          </div>
          
          {mode === 'atlas' && (
            <button onClick={onClose} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
              <X size={24} />
            </button>
          )}
        </div>

        {/* EDITORIAL TAB BAR — replaces blind prev/next arrows */}
        {mode === 'editorial' && data && (
          <div className="flex w-full items-center gap-1 overflow-x-auto no-scrollbar md:w-auto">
            {(isInProgress
              ? [{ label: 'Cover', page: 0 }]
              : [
                  { label: 'Cover Story', page: 0 },
                  { label: 'Deep Dive', page: 1 },
                  { label: 'Archivo', page: 2 },
                  { label: 'Panorama', page: 3 },
                ]
            ).map(({ label, page }) => (
              <button
                key={page}
                onClick={() => setEditorialPage(page)}
                className={`shrink-0 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${
                  editorialPage === page
                    ? 'border-[#FF3530] text-white'
                    : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-white/30'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CONTENT AREA */}
      <div className={mode === 'editorial' ? 'pt-24 w-full min-h-screen' : 'px-6 md:px-16 pb-24 min-h-screen pt-8'}>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <Loader text={mode === 'editorial' ? 'Imprimiendo edición global...' : 'Analizando atlas...'} />
          </div>
        ) : data ? (
          <div className="animate-in fade-in duration-500">
            
            {/* --- ATLAS LAYOUT --- */}
            {mode === 'atlas' && (
              <div className="space-y-8 font-sans max-w-2xl mx-auto mt-4">
                <div className="bg-[#1E1E1E] p-8 rounded-[2rem] border border-[#FF3530]/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3530] to-white"></div>
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-2 h-2 rounded-full bg-[#FF3530]"></div>
                     <span className="text-xs font-bold uppercase text-[#FF3530] tracking-widest">Contexto Histórico</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg font-light">{data.summary}</p>
                </div>
                {/* ... (Rest of Mainstream Layout - Unchanged) ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#181818] p-6 rounded-3xl border border-white/5 flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="w-10 h-10 bg-[#FF3530]/10 rounded-2xl flex items-center justify-center mb-3 text-[#FF3530]"><Music4 size={20} /></div>
                      <h4 className="text-white font-bold text-lg">Géneros</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.musicalStyles.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-[#222] text-gray-300 rounded-full text-xs font-medium border border-white/10">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#181818] p-6 rounded-3xl border border-white/5 flex flex-col gap-6">
                    <div>
                       <h4 className="text-[#FF3530] font-bold text-sm mb-2 flex items-center gap-2"><Guitar size={14} /> Instrumentos</h4>
                       <p className="text-sm text-gray-400 leading-snug">{data.instruments.join(", ")}</p>
                    </div>
                    <div>
                       <h4 className="text-[#89C2D9] font-bold text-sm mb-2">Tradiciones</h4>
                       <ul className="space-y-1">{data.traditions.slice(0, 2).map((t, i) => <li key={i} className="text-xs text-gray-400">• {t}</li>)}</ul>
                    </div>
                  </div>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-4 mt-2">Hits Esenciales</h3>
                   <div className="grid grid-cols-1 gap-3">
                      {data.songs.map((song, idx) => (
                        <a key={idx} href={`https://www.youtube.com/results?search_query=${encodeURIComponent(song.youtubeQuery)}`} target="_blank" rel="noopener noreferrer" className="group bg-[#1E1E1E] hover:bg-[#252525] transition-colors p-1 rounded-[2rem] border border-white/5 flex items-center pr-6">
                          <div className="w-14 h-14 bg-[#111] group-hover:bg-black rounded-full flex items-center justify-center text-gray-500 group-hover:text-white transition-colors flex-shrink-0 border border-white/5"><Play size={20} fill="currentColor" /></div>
                          <div className="ml-4 flex-1 py-3">
                             <h5 className="font-bold text-gray-200 group-hover:text-white text-sm">{song.title}</h5>
                             <p className="text-xs text-gray-500 group-hover:text-gray-400">{song.artist}</p>
                          </div>
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {/* --- EDITORIAL LAYOUT (MULTI-PAGE) --- */}
            {mode === 'editorial' && (
               <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 min-h-[85vh] flex flex-col">
                  
                  {/* PAGE 1, 2, 3 UNCHANGED (Omitted for brevity to focus on Page 4 changes) ... */}
                  {/* ... But since I must return full content, I will include them ... */}
                  
                  {/* PAGE 1: COVER STORY */}
                  {editorialPage === 0 && (
                     <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex-1">
                        {isInProgress && (
                           <div className="mb-12 border border-[#FF3530]/50 bg-[#111] p-6 md:p-8">
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                 <div className="max-w-3xl">
                                    <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] bg-[#FF3530] text-black mb-4">
                                      Curación en progreso
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-serif-display text-white mb-4">Esta ficha sigue abierta.</h3>
                                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                                      {data.editorial.editorialStatusNote}
                                    </p>
                                 </div>
                                 <div className="flex flex-col gap-3 min-w-[220px]">
                                    {onOpenGlobalEditorial && (
                                      <button
                                        onClick={onOpenGlobalEditorial}
                                        className="px-4 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#FF3530] transition-colors"
                                      >
                                        Ir a Global Panorama
                                      </button>
                                    )}
                                    {onOpenEssay && essays.slice(0, 2).map((essay) => (
                                      <button
                                        key={essay.id}
                                        onClick={() => onOpenEssay(essay.id)}
                                        className="px-4 py-3 border border-white/20 text-left hover:border-[#FF3530] hover:text-white transition-colors"
                                      >
                                        <span className="block text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">Ensayo</span>
                                        <span className="text-sm font-bold">{essay.title}</span>
                                      </button>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        )}
                        {/* HERO */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 pt-8 border-b border-white/10 pb-16">
                            <div className="lg:col-span-8">
                                <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 ${isGlobalMode ? "bg-[#333] text-white" : "bg-[#FF3530] text-black"}`}>
                                    {isGlobalMode ? "World Issue 2026" : isInProgress ? "Editorial Hold" : "Cover Story"}
                                </span>
                                <h1 className="text-6xl md:text-[9rem] font-serif-display text-white leading-[0.85] mb-8 uppercase tracking-tighter break-words">
                                  {data.countryName === "Global Issue" ? "Global Panorama" : data.countryName}
                                </h1>
                                <p className="text-2xl md:text-4xl font-serif text-gray-200 leading-tight italic max-w-3xl">
                                  {isGlobalMode ? data.editorial.forecast.description : data.editorial.sceneDescription}
                                </p>
                            </div>
                            <div className="lg:col-span-4 flex flex-col justify-end">
                                <div className="border border-white/20 p-8 bg-white/5 backdrop-blur-sm">
                                    <div className="flex items-baseline justify-between mb-4">
                                       <h3 className="font-serif-display text-3xl italic text-white">{data.editorial.localVerdict.consensus}</h3>
                                       <span className="text-6xl font-black font-sans text-white">{data.editorial.localVerdict.score}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 font-mono text-right border-t border-white/10 pt-2">
                                       Verified by {data.editorial.localVerdict.platformName}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* INTRO GRID */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                           <div className="border-t border-white/20 pt-4">
                              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#FF3530] mb-3">{isGlobalMode ? "Trending Sounds" : "Sound Palette"}</h4>
                              <p className="text-2xl font-serif-display text-white">{data.editorial.soundPalette.join(" / ")}</p>
                           </div>
                           <div className="border-t border-white/20 pt-4">
                              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#FF3530] mb-3">Aesthetic</h4>
                              <p className="text-lg text-gray-300 font-serif italic">{data.editorial.visualAesthetic.styleName}</p>
                              <p className="text-xs text-gray-500 mt-1">{data.editorial.visualAesthetic.description}</p>
                           </div>
                           <div className="border-t border-white/20 pt-4">
                              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#FF3530] mb-3">{isGlobalMode ? "Featured Label" : "Key Label"}</h4>
                              <p className="text-xl font-bold text-white">{data.editorial.independentLabel.name}</p>
                              <p className="text-xs text-gray-500 mt-1 uppercase">Est. {data.editorial.independentLabel.since} • {data.editorial.independentLabel.focus}</p>
                           </div>
                        </div>

                        <div className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                           {featureCards.map((card) => (
                              <button
                                key={`${card.context}-${card.id}`}
                                onClick={() => handleIssueMapSelect(card.target)}
                                className="border border-white/10 bg-[#0d0d0d] p-5 text-left transition-colors hover:border-[#FF3530]"
                              >
                                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF3530]">
                                  {card.label}
                                </span>
                                <p className="text-sm leading-relaxed text-gray-400">{card.description}</p>
                              </button>
                           ))}
                        </div>

                        {/* SPECIAL ESSAYS SECTION (ONLY IN GLOBAL MODE) */}
                        {isGlobalMode && onOpenEssay && (
                           <div className="mt-16 pt-12 border-t border-white/10">
                              <h4 className="font-sans font-black text-xs uppercase tracking-[0.3em] text-white mb-8 flex items-center gap-3">
                                <Newspaper size={16} className="text-[#FF3530]" /> Ensayos Especiales
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                 {essays.map((essay, i) => (
                                    <div 
                                      key={essay.id}
                                      onClick={() => onOpenEssay(essay.id)}
                                      className="group cursor-pointer bg-[#111] border border-white/10 hover:border-[#FF3530] transition-all overflow-hidden flex flex-col"
                                    >
                                       <div className="aspect-video w-full overflow-hidden relative">
                                          <img src={getDeckImage(editorialImageDeck, i + 9)} alt={essay.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                                       </div>
                                       <div className="p-6 flex-1 flex flex-col">
                                          <span className="text-[10px] uppercase tracking-widest text-[#FF3530] font-bold mb-2 block">Ensayo</span>
                                          <h5 className="text-xl font-serif-display text-white mb-2 leading-tight group-hover:text-[#FF3530] transition-colors">{essay.title}</h5>
                                          <p className="text-xs text-gray-400 font-serif italic line-clamp-2">{essay.subtitle}</p>
                                          <div className="mt-auto pt-4 flex justify-between items-center">
                                             <span className="text-[10px] text-gray-500 uppercase tracking-widest">Leer más</span>
                                             <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                                          </div>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}

                        <div className="text-center mt-auto">
                            <button onClick={nextPage} className="flex items-center gap-2 mx-auto text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors group">
                               <span>Deep Dive</span>
                               <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                     </div>
                  )}

                  {/* PAGE 2: THE ESSAY (CHAPTERS) */}
                  {editorialPage === 1 && (
                     <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-4xl mx-auto pt-8">
                        <div className="mb-12 text-center">
                           <span className="font-mono text-xs text-[#FF3530] mb-2 block">02 / Deep Dive</span>
                           <h2 className="text-4xl md:text-6xl font-serif-display text-white mb-4">
                               {isGlobalMode ? "State of the Music" : "The Cultural Landscape"}
                           </h2>
                           <div className="w-24 h-1 bg-white/20 mx-auto"></div>
                        </div>

                        <div className="space-y-16">
                           {data.editorial.editorialChapters?.map((chapter, i) => (
                              <div key={i} className="prose prose-invert prose-lg max-w-none">
                                 <h3 className="font-sans font-black text-2xl uppercase tracking-tighter text-white mb-2">
                                   <span className="text-[#FF3530] mr-2">0{i+1}.</span>{chapter.title}
                                 </h3>
                                 <h4 className="font-serif italic text-gray-400 text-xl mb-6">{chapter.subtitle}</h4>
                                 <p className="text-gray-300 font-serif leading-loose text-lg text-justify border-l-2 border-white/5 pl-6">
                                    {chapter.content}
                                 </p>
                              </div>
                           ))}
                        </div>

                        <div className="my-20 p-12 border border-white/10 bg-white/5 relative text-center">
                           <Quote size={48} className="text-[#FF3530] opacity-20 absolute top-4 left-4" />
                           <p className="text-3xl md:text-4xl font-serif-display italic text-white leading-tight relative z-10">
                              "{data.editorial.bestLyricsQuote}"
                           </p>
                        </div>
                     </div>
                  )}

                  {/* PAGE 3: COLLECTION */}
                  {editorialPage === 2 && (
                     <div className="animate-in fade-in slide-in-from-right-8 duration-500 pt-8">
                        
                        {/* TOP SECTION: CULT ALBUMS */}
                        <div className="mb-20">
                            <div className="flex items-end justify-between border-b border-white/10 pb-6 mb-12">
                               <div>
                                  <span className="font-mono text-xs text-[#FF3530] mb-1 block">03 / {isGlobalMode ? "Cult Canon Preview" : "Essential Listening"}</span>
                                  <h2 className="text-5xl font-serif-display text-white">{isGlobalMode ? "Cult Canon // 20" : "Cult Classics"}</h2>
                               </div>
                               <Disc size={32} className="text-gray-600" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                               {((isGlobalMode ? cultCanonPreview : data.editorial.cultAlbums) as any[])?.map((album: any, i) => (
                                  <div key={`${album.albumName}-${i}`} className="group relative bg-[#111] border border-white/10 hover:border-[#FF3530] transition-all p-6 flex flex-col h-full hover:-translate-y-2 duration-500">
                                     
                                     {/* REAL COVER ART */}
                                     <a 
                                        href={album.coverSourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-6 relative aspect-square bg-black shadow-2xl group-hover:shadow-[0_20px_40px_-15px_rgba(255,53,48,0.3)] transition-all overflow-hidden"
                                     >
                                        <img 
                                          src={album.coverImageUrl}
                                          alt={album.albumName}
                                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                          loading="lazy"
                                          onError={(e) => {
                                            // Fallback if image fails
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                          }}
                                        />
                                        
                                        {/* Fallback Icon (Hidden by default, shown on error) */}
                                        <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-900">
                                            <Disc size={64} className="text-gray-700 animate-[spin_10s_linear_infinite]" />
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                            <span className="text-[10px] uppercase font-bold text-white tracking-widest border border-white px-2 py-1">
                                                Open Source
                                            </span>
                                        </div>
                                     </a>

                                     <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-1 leading-tight">{album.albumName}</h3>
                                        <p className="text-sm font-serif italic text-gray-400 mb-4">{album.artist} <span className="text-gray-600 not-italic mx-1">/</span> {album.year}</p>
                                        <p className="text-xs text-gray-500 font-sans leading-relaxed border-t border-white/5 pt-3">
                                           {album.reason ?? album.blurb}
                                        </p>
                                        {album.youtubeQuery ? (
                                          <a 
                                             href={`https://www.youtube.com/results?search_query=${encodeURIComponent(album.youtubeQuery)}`}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="inline-flex items-center gap-1 mt-3 text-[10px] font-bold uppercase tracking-widest text-[#FF3530] hover:text-white transition-colors"
                                          >
                                             <Play size={10} fill="currentColor" /> Listen
                                          </a>
                                        ) : (
                                          <a
                                            href={album.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 mt-3 text-[10px] font-bold uppercase tracking-widest text-[#FF3530] hover:text-white transition-colors"
                                          >
                                            <ExternalLink size={10} /> Source
                                          </a>
                                        )}
                                     </div>
                                     <div className="mt-4 pt-3 border-t border-dashed border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
                                         <span>{album.label}</span>
                                         <span>LP</span>
                                     </div>
                                  </div>
                               ))}
                            </div>
                        </div>

                        {/* BOTTOM SECTION: PLAYLIST */}
                        <div className="border-t border-white/10 pt-16">
                           <h3 className="font-sans font-black text-xs uppercase tracking-[0.3em] text-white mb-8 flex items-center gap-3">
                             <CassetteTape size={16} className="text-[#FF3530]" /> {isGlobalMode ? "Global Mix" : "Local Mixtape"}
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {data.editorial.editorialPlaylist.map((track, i) => (
                                 <a 
                                   key={i} 
                                   href={`https://www.youtube.com/results?search_query=${encodeURIComponent(track.youtubeQuery)}`}
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-4 p-3 hover:bg-white/5 group border-b border-white/5 transition-colors"
                                 >
                                    <span className="font-mono text-xs text-gray-600 group-hover:text-[#FF3530]">0{i+1}</span>
                                    <div className="flex-1">
                                       <p className="font-bold text-white text-sm">{track.title}</p>
                                       <p className="text-xs text-gray-500">{track.artist}</p>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-600 group-hover:text-white transition-colors">{track.vibe}</span>
                                 </a>
                              ))}
                           </div>
                        </div>
                     </div>
                  )}

                  {/* PAGE 4: RADAR 2026 (NEW) */}
                  {editorialPage === 3 && (
                     <div className="animate-in fade-in slide-in-from-right-8 duration-500 pt-8">
                        
                        {/* FUTURE HEADER */}
                        <div className="mb-16 text-center relative">
                            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF3530]/50 to-transparent"></div>
                            <div className="relative inline-block bg-[#050505] px-8">
                                <div className="flex items-center gap-3 justify-center text-[#FF3530] mb-2 animate-pulse">
                                    <Radar size={20} />
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest">Underground Forecast</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-sans font-black text-white uppercase italic tracking-tighter">
                                   Radar {data.editorial.forecast.period}
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            
                            {/* ANALYSIS */}
                            <div className="lg:col-span-8">
                                <div className="prose prose-invert prose-xl mb-12">
                                    <h3 className="text-3xl text-white font-bold mb-6 font-serif-display">
                                       The Rise of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3530] to-purple-500">{data.editorial.forecast.trendName}</span>
                                    </h3>
                                    <p className="text-gray-300 font-serif leading-relaxed">
                                       {data.editorial.forecast.description}
                                    </p>
                                </div>
                                
                                {/* FUTURE SOUNDS TAGS */}
                                <div className="flex flex-wrap gap-3 mb-12">
                                    {(isGlobalMode ? highlightedSignals.map((signal) => signal.name) : data.editorial.forecast.futureSounds).map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-[#FF3530] transition-colors cursor-default">
                                           {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* ESSENTIAL FUTURE RELEASES GRID (NEW SECTION) */}
                                {((isGlobalMode ? newSignalPreview : data.editorial.forecast.forecastReleases) as any[])?.length > 0 && (
                                  <div className="mb-12">
                                      <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2 flex items-center gap-2">
                                          <Disc size={16} className="text-[#FF3530]" /> {isGlobalMode ? 'New Signal Top 10' : 'Signal Releases'}
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          {((isGlobalMode ? newSignalPreview : data.editorial.forecast.forecastReleases) as any[]).map((release: any, i) => (
                                              <a 
                                                  key={`${release.artist}-${i}`}
                                                  href={release.coverSourceUrl}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="group flex items-center gap-4 bg-[#111] hover:bg-[#1A1A1A] p-3 border border-white/10 hover:border-[#FF3530] transition-all relative overflow-hidden"
                                              >
                                                  {/* Thumbnail with real cover */}
                                                  <div className="w-16 h-16 flex-shrink-0 bg-gray-800 relative overflow-hidden border border-white/10">
                                                      <img 
                                                          src={release.coverImageUrl} 
                                                          alt={release.title ?? release.albumName}
                                                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                          loading="lazy"
                                                          onError={(e) => {
                                                              (e.target as HTMLImageElement).style.display = 'none';
                                                              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                                          }}
                                                      />
                                                      {/* Fallback */}
                                                      <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-900">
                                                          <Music4 size={20} className="text-gray-600" />
                                                      </div>
                                                  </div>
                                                  
                                                  <div className="flex-1 min-w-0 z-10">
                                                      <h5 className="text-sm font-bold text-white truncate group-hover:text-[#FF3530] transition-colors">{release.title ?? release.albumName}</h5>
                                                      <p className="text-xs text-gray-400 truncate">{release.artist}</p>
                                                      <span className="text-[9px] uppercase tracking-wider text-gray-500 border border-gray-800 px-1 mt-1 inline-block">{release.type ?? release.label} / {release.year}</span>
                                                  </div>
                                                  
                                                  <div className="bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                                                      <Play size={10} fill="currentColor" />
                                                  </div>
                                              </a>
                                          ))}
                                      </div>
                                  </div>
                                )}

                                {/* CURIOSITIES & SAMPLES */}
                                <div className="bg-[#111] border border-white/10 p-8 relative overflow-hidden group">
                                    <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-white/10 transition-colors">
                                        <Fingerprint size={150} />
                                    </div>
                                    <h4 className="flex items-center gap-2 font-bold text-white mb-6 relative z-10">
                                        <Zap size={18} className="text-[#FF3530]" /> Samples & Oddities
                                    </h4>
                                    <ul className="space-y-4 relative z-10">
                                        {data.editorial.forecast.curiosities.map((item, i) => (
                                            <li key={i} className="flex gap-4 text-sm text-gray-400 font-mono border-l-2 border-white/10 pl-4">
                                                <span className="text-[#FF3530]">0{i+1}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* SIDEBAR: KEY ARTISTS & ARCHIVE */}
                            <div className="lg:col-span-4 flex flex-col gap-12">
                                
                                {/* Key Artists / Bundles */}
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2">
                                        {isGlobalMode ? 'Playlist Matrix' : 'Future Icons'}
                                    </h4>
                                    {isGlobalMode ? (
                                      <div className="grid gap-4">
                                        {playlistBundles.map((bundle) => (
                                          <div key={bundle.title} className="border border-white/10 bg-[#111] p-4">
                                            <p className="text-[10px] uppercase tracking-[0.28em] text-[#FF3530] mb-2">{bundle.territory}</p>
                                            <h5 className="text-xl font-serif-display text-white mb-2">{bundle.title}</h5>
                                            <p className="text-sm leading-relaxed text-gray-400 mb-4">{bundle.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                              {bundle.platforms.map((platform) => (
                                                <a
                                                  key={`${bundle.title}-${platform.platform}`}
                                                  href={platform.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="border border-white/10 px-2 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/65 hover:border-[#FF3530] hover:text-white transition-colors"
                                                >
                                                  {platform.platform}
                                                </a>
                                              ))}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <div className="space-y-2">
                                        {data.editorial.forecast.keyArtists.map((artist, i) => (
                                            <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded transition-colors">
                                                <span className="text-lg font-bold text-gray-300 group-hover:text-white">{artist}</span>
                                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[#FF3530] transition-opacity" />
                                            </div>
                                        ))}
                                      </div>
                                    )}
                                </div>

                                {/* FROM THE ARCHIVE / SIGNALS */}
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6 border-b border-white/20 pb-2 flex items-center gap-2">
                                        <BookOpen size={14} /> {isGlobalMode ? 'Signal Lexicon' : 'Essential Reading'}
                                    </h4>
                                    <div className="grid gap-4">
                                        {(isGlobalMode ? highlightedSignals : data.editorial.curatedReads)?.map((article: any, i) => (
                                            <a 
                                            key={i} 
                                            href={isGlobalMode ? article.sourceUrl : article.url}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block group bg-[#161616] p-4 border-l-2 border-white/10 hover:border-[#FF3530] transition-all hover:bg-[#1a1a1a]"
                                            >
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#FF3530]">{isGlobalMode ? article.source : article.source}</span>
                                                    <ExternalLink size={12} className="text-gray-600 group-hover:text-white" />
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-300 group-hover:text-white leading-snug">
                                                    {isGlobalMode ? article.name : article.title}
                                                </h4>
                                                {isGlobalMode ? (
                                                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                                                    {article.definition}
                                                  </p>
                                                ) : null}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                     </div>
                  )}

               </div>
            )}

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center mt-32">
            <div className={`w-24 h-24 bg-[#1E1E1E] border border-white/10 text-gray-600 rounded-full flex items-center justify-center mb-6`}>
               <Music4 size={40} />
            </div>
            <p className="font-medium text-lg text-gray-500 font-sans">
                Selecciona un país para comenzar el viaje.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
