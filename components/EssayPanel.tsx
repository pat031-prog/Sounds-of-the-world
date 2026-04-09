import React from 'react';
import { essays, Essay } from '../data/essays';
import { X, ChevronLeft, Globe2, ArrowUpRight } from 'lucide-react';
import { getDeckImage } from '../data/editorialCuratedImages';

interface EssayPanelProps {
  essay: Essay | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCountry: (countryName: string) => void;
  editorialImageDeck: string[];
}

export const EssayPanel: React.FC<EssayPanelProps> = ({ essay, isOpen, onClose, onNavigateToCountry, editorialImageDeck }) => {
  if (!isOpen || !essay) return null;

  const essayIndex = Math.max(0, essays.findIndex((entry) => entry.id === essay.id));
  const heroImage = getDeckImage(editorialImageDeck, essayIndex);

  return (
    <div className="fixed inset-0 z-[60] bg-[#050505] text-[#EDEDED] overflow-y-auto font-serif animate-in slide-in-from-bottom-10 duration-500">
      
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-4 px-6 md:px-12 flex justify-between items-center h-20">
        <button onClick={onClose} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group">
            <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <ChevronLeft size={16} />
            </div>
            <span className="hidden md:inline">Volver</span>
        </button>
        <h2 className="text-xl font-cinzel text-white tracking-widest uppercase">
            Ensayo <span className="text-[#FF3530] text-sm font-sans tracking-normal font-bold">/// Especial</span>
        </h2>
        <button onClick={onClose} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all">
          <X size={24} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-[920px] px-6 pb-32 pt-12 lg:px-12">
        
        <div className="mb-14 text-center">
           <span className="font-mono text-xs text-[#FF3530] mb-4 block uppercase tracking-[0.3em]">Por {essay.author}</span>
           <h1 className="mb-6 font-serif-display text-5xl leading-[0.9] text-white md:text-7xl">
               {essay.title}
           </h1>
           <p className="mx-auto max-w-3xl font-serif text-xl italic leading-relaxed text-gray-400 md:text-3xl">
               {essay.subtitle}
           </p>
        </div>

        <div className="group relative mb-20 aspect-video w-full overflow-hidden border border-white/10 bg-[#111] shadow-2xl">
           <img src={heroImage} alt={essay.title} className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 scale-105 group-hover:scale-100" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="max-w-none space-y-10 prose prose-invert prose-lg md:space-y-12 md:prose-xl">
           {essay.content.map((paragraph, idx) => (
             <p
               key={idx}
               className={`font-serif text-[1.05rem] leading-[1.95] text-gray-300 text-pretty md:text-[1.12rem] ${idx === 0 ? 'drop-cap' : ''}`}
             >
                {paragraph}
             </p>
           ))}
        </div>

        {/* RELATED COUNTRIES */}
        <div className="mt-24 pt-12 border-t border-white/10">
           <h3 className="font-sans font-black text-xs uppercase tracking-[0.3em] text-white mb-8 flex items-center gap-3">
             <Globe2 size={16} className="text-[#FF3530]" /> Explorar Escenas Relacionadas
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {essay.relatedCountries.map((country, i) => (
                 <button 
                   key={i}
                   onClick={() => {
                     onClose();
                     onNavigateToCountry(country);
                   }}
                   className="flex items-center justify-between group bg-[#111] hover:bg-[#1A1A1A] p-6 border border-white/10 hover:border-[#FF3530] transition-all text-left"
                 >
                    <span className="text-xl font-bold font-serif-display text-gray-300 group-hover:text-white">{country}</span>
                    <ArrowUpRight size={20} className="text-gray-600 group-hover:text-[#FF3530] transition-colors" />
                 </button>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
