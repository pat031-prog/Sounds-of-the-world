import React from 'react';
import { CulturalData } from '../types';
import { TrendingUp, Minus, Star, ArrowUp } from 'lucide-react';

interface MusicHudProps {
  data: CulturalData | null;
  isVisible: boolean;
  mode: 'mainstream' | 'editorial';
}

export const MusicHud: React.FC<MusicHudProps> = ({ data, isVisible, mode }) => {
  if (!data || !isVisible) return null;

  return (
    <div className="pointer-events-none z-30">
      
      {/* 
        IN EDITORIAL MODE: 
        We hide the "Bottom Left" Chart because the editorial panel is heavy.
        We can optionally put something else here later.
        
        IN MAINSTREAM MODE:
        We show the Billboard Style Chart.
      */}

      {mode === 'mainstream' && (
        <div className="absolute bottom-8 left-8 w-72 md:w-80 pointer-events-auto animate-in slide-in-from-left duration-700">
           <div className="bg-[#111]/90 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="bg-[#B4E197] px-4 py-2 flex justify-between items-center">
                 <h3 className="font-black italic text-black tracking-tighter text-lg">TOP HITS</h3>
                 <span className="text-[10px] font-bold uppercase bg-black text-[#B4E197] px-2 py-0.5 rounded">
                   {data.countryName}
                 </span>
              </div>

              {/* List */}
              <div className="p-2">
                 {data.topCharts.map((chart, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors group">
                       {/* Rank */}
                       <div className="flex flex-col items-center justify-center w-8">
                          <span className="text-xl font-black text-white">{chart.rank}</span>
                          {/* Trend Icon */}
                          {chart.trend === 'up' && <ArrowUp size={10} className="text-[#B4E197]" />}
                          {chart.trend === 'new' && <Star size={10} className="text-[#FFD23F]" />}
                          {chart.trend === 'down' && <Minus size={10} className="text-gray-500" />}
                       </div>
                       
                       {/* Art placeholder (simulated) */}
                       <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-black rounded flex-shrink-0 border border-white/10"></div>

                       {/* Info */}
                       <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-white truncate group-hover:text-[#B4E197] transition-colors">
                             {chart.title}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                             {chart.artist}
                          </p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      )}
      
      {/* 
        Pitchfork Style Widget (Top Right)
        We can keep this in MAINSTREAM mode as a teaser, 
        but in EDITORIAL mode, this info is already huge in the main panel, so maybe hide it?
        Let's keep it in Mainstream only to serve as the "Critical Pick" glimpse.
      */}
      {mode === 'mainstream' && (
        <div className="absolute top-24 right-8 w-64 md:w-80 pointer-events-auto animate-in slide-in-from-right duration-700 hidden lg:block">
          <div className="relative bg-[#FDFDFD] text-black p-5 border border-gray-200 font-serif shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#FF3530]"></div>
            
            <div className="flex justify-between items-start mb-3">
               <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF3530]">
                 {data.criticalPick.label || "BEST NEW MUSIC"}
               </span>
               <span className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-wider">
                 CRITICAL PICK
               </span>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                 <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                    <span className="text-2xl font-bold font-sans tracking-tighter">{data.criticalPick.score}</span>
                 </div>
              </div>
              <div>
                 <h3 className="text-xl font-bold leading-none mb-1 line-clamp-1">{data.criticalPick.artist}</h3>
                 <p className="text-sm italic text-gray-600 mb-2 line-clamp-1">{data.criticalPick.albumName}</p>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-100">
               <p className="text-xs font-sans leading-relaxed text-gray-800 line-clamp-3">
                 "{data.criticalPick.reviewSnippet}"
               </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};