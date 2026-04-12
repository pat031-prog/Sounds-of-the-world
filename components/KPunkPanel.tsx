import React, { useState } from 'react';
import { kpunkArchive, KPunkEntry } from '../data/kpunkArchive';
import { ArrowLeft, ExternalLink, Calendar, BookOpen } from 'lucide-react';

interface KPunkPanelProps {
  onClose: () => void;
}

export const KPunkPanel: React.FC<KPunkPanelProps> = ({ onClose }) => {
  const [activeEntry, setActiveEntry] = useState<KPunkEntry | null>(null);

  // Scroll to top when opening an entry
  const handleEntryOpen = (entry: KPunkEntry) => {
    setActiveEntry(entry);
    document.getElementById('kpunk-scroll-container')?.scrollTo(0, 0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div 
        id="kpunk-scroll-container"
        className="relative w-full max-w-4xl h-[90vh] rounded-xl overflow-y-auto border border-white/20 shadow-2xl flex flex-col"
        style={{
          // K-punk retro aesthetic styling wrapper
          backgroundColor: '#ebebeb', 
          fontFamily: 'Verdana, sans-serif',
          color: '#333333'
        }}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 bg-[#ebebeb] border-b border-gray-300 p-4 flex items-center justify-between z-10">
          <button 
            onClick={activeEntry ? () => setActiveEntry(null) : onClose}
            className="flex items-center space-x-2 text-blue-800 hover:text-blue-600 font-bold text-sm tracking-wide transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{activeEntry ? 'Volver al Índice' : 'Volver al Hub'}</span>
          </button>
          
          <div className="text-right">
            <h2 className="text-xl font-serif text-black font-bold tracking-tight">k-punk archive</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Mark Fisher translations</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12 pb-24 max-w-3xl mx-auto w-full">
          {!activeEntry ? (
            <div className="space-y-12">
              <div className="mb-10 pb-6 border-b-2 border-gray-400">
                <h1 className="text-4xl font-serif text-black mb-4">El Archivo k-punk</h1>
                <p className="text-sm leading-relaxed text-gray-600">
                  Una selección compilada y traducida de entradas fundamentales del blog de Mark Fisher (k-punk). 
                  Textos sobre la alienación urbana, la cultura dance, el post-punk y la progresiva cancelación del futuro.
                </p>
              </div>

              {kpunkArchive.map((entry) => (
                <article key={entry.id} className="group cursor-pointer" onClick={() => handleEntryOpen(entry)}>
                  <div className="flex items-baseline space-x-3 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <time className="text-xs text-gray-500 font-mono">{entry.originalDate}</time>
                  </div>
                  <h3 className="text-2xl font-serif text-blue-800 group-hover:underline mb-3">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                    {entry.content[0]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider bg-gray-200 text-gray-600 px-2 py-1 rounded-sm border border-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <h1 className="text-4xl font-serif text-black mb-4 leading-tight">{activeEntry.title}</h1>
                
                <div className="flex flex-wrap items-center justify-between border-y border-dashed border-gray-400 py-3 mb-8">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 font-mono">
                    <Calendar className="w-4 h-4" />
                    <span>Post original de Mark Fisher // {activeEntry.originalDate}</span>
                  </div>
                  <a 
                    href={activeEntry.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm text-blue-700 hover:text-blue-500"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Fuente original</span>
                  </a>
                </div>
              </div>

              <div className="space-y-6 text-base leading-relaxed">
                {activeEntry.content.map((paragraph, idx) => (
                  <p key={idx} className="font-serif text-[17px] text-[#111] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-gray-300">
                <h4 className="text-sm font-bold uppercase text-gray-500 mb-3 flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Archived Tags</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeEntry.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-200 text-gray-600 px-2 py-1 border border-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};
