import React, { useState, useCallback, useEffect } from 'react';
import { EarthGlobe } from './components/EarthGlobe';
import { FlatMap } from './components/FlatMap';
import { InfoPanel } from './components/InfoPanel';
import { MusicHud } from './components/MusicHud';
import { EssayPanel } from './components/EssayPanel';
import { fetchCountryData, fetchGlobalData } from './services/geminiService';
import { CulturalData, GeoJsonProperties } from './types';
import { Mic2, Radio, BookOpen, Globe2, DownloadCloud } from 'lucide-react';
import { essays, Essay } from './data/essays';

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [culturalData, setCulturalData] = useState<CulturalData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  // New State for Mode: 'mainstream' (Charts/Pop) vs 'editorial' (Pitchfork/Indie)
  const [appMode, setAppMode] = useState<'mainstream' | 'editorial'>('mainstream');

  const [isCaching, setIsCaching] = useState(false);
  const [cacheProgress, setCacheProgress] = useState(0);

  // Essay State
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  // Load Global Data when switching to Editorial if no country selected
  useEffect(() => {
    const loadGlobal = async () => {
        if (appMode === 'editorial' && !selectedCountry && !culturalData) {
            setIsLoading(true);
            setIsPanelOpen(true);
            try {
                const data = await fetchGlobalData();
                setCulturalData(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }
    };
    loadGlobal();
  }, [appMode, selectedCountry, culturalData]);

  const handleCountryClick = useCallback(async (properties: GeoJsonProperties | string) => {
    const countryName = typeof properties === 'string' ? properties : properties.ADMIN;
    
    setSelectedCountry(countryName);
    setIsPanelOpen(true);
    setAppMode('editorial'); // Force editorial mode when navigating from essay
    
    if (selectedCountry !== countryName || !culturalData || culturalData.countryName === "Global Issue") {
        setCulturalData(null);
        setIsLoading(true);
        try {
            const data = await fetchCountryData(countryName);
            setCulturalData(data);
        } catch (error) {
            console.error("Error in app flow:", error);
        } finally {
            setIsLoading(false);
        }
    }
  }, [selectedCountry, culturalData]);

  const closePanel = () => setIsPanelOpen(false);

  // Function to return to Global Mode manually
  const openGlobalEditorial = async () => {
     setAppMode('editorial');
     setSelectedCountry(null);
     setCulturalData(null);
     setIsPanelOpen(true);
     // Effect hook will trigger loadGlobal
  };

  const handleCacheOffline = async () => {
    const countriesToCache = [
      "United States of America", "United Kingdom", "China", "Spain", "Japan", 
      "India", "Russia", "Argentina", "Brazil", "Australia"
    ];
    
    setIsCaching(true);
    setCacheProgress(0);
    
    try {
      // Cache global first
      await fetchGlobalData();
      
      let completed = 0;
      for (const country of countriesToCache) {
        await fetchCountryData(country);
        completed++;
        setCacheProgress(Math.round((completed / countriesToCache.length) * 100));
      }
      
      // We can't use alert in iframe easily, so we just reset state
      setTimeout(() => {
        setIsCaching(false);
        setCacheProgress(0);
      }, 2000);
    } catch (err) {
      console.error("Error caching offline data:", err);
      setIsCaching(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans transition-colors duration-1000 bg-[#050505]">
      
      {/* Background Texture Div - Always dark but texture changes slightly */}
      <div className="bg-texture opacity-10 fixed inset-0 pointer-events-none mix-blend-overlay"></div>

      {/* MAP LAYERS SWITCHER */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {appMode === 'mainstream' ? (
           <EarthGlobe onCountryClick={handleCountryClick} />
        ) : (
           <FlatMap onCountryClick={handleCountryClick} selectedCountry={selectedCountry} />
        )}
      </div>

      {/* HEADER AREA */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 flex flex-col gap-4 pointer-events-none max-w-[calc(100vw-2rem)]">
         {/* Logo Block */}
         <div className="flex items-start gap-3 pointer-events-auto">
            <div 
              onClick={openGlobalEditorial}
              className={`p-3 rounded-2xl shadow-lg transition-colors duration-500 cursor-pointer hover:scale-105 active:scale-95
              ${appMode === 'editorial' ? 'bg-[#FF3530] text-black rounded-none shadow-none' : 'bg-white text-black rounded-2xl'}`}>
               <Mic2 size={24} />
            </div>
            <div className={`backdrop-blur-md px-4 py-3 md:px-6 border shadow-xl transition-all duration-500
               ${appMode === 'editorial' ? 'bg-black border-white/20 rounded-none shadow-sm' : 'bg-[#111]/80 border-white/10 rounded-2xl'}`}>
               <h1 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors 
                 ${appMode === 'editorial' ? 'text-white font-cinzel tracking-wider' : 'text-white font-sans'}`}>
                 Sounds of the World
               </h1>
               <p className={`text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1 transition-colors
                 ${appMode === 'editorial' ? 'text-[#FF3530]' : 'text-[#B4E197]'}`}>
                 {appMode === 'editorial' ? 'Volume 04: The World' : 'Dark Edition'}
               </p>
            </div>
         </div>

         {/* MODE TOGGLE SWITCH (Pointer Events Auto) */}
         <div className={`backdrop-blur-md p-1.5 border flex flex-wrap items-center gap-1 shadow-2xl pointer-events-auto w-fit transition-all duration-500
             ${appMode === 'editorial' ? 'bg-black border-white/20 rounded-none' : 'bg-black/80 border-white/10 rounded-xl'}`}>
            <button 
              onClick={() => setAppMode('mainstream')}
              className={`px-3 md:px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wide flex items-center gap-2 transition-all
                ${appMode === 'mainstream' 
                  ? 'bg-[#B4E197] text-black shadow-sm rounded-lg' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              <Radio size={14} /> <span className="hidden sm:inline">Mainstream</span>
            </button>
            <button 
              onClick={() => setAppMode('editorial')}
              className={`px-3 md:px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wide flex items-center gap-2 transition-all
                ${appMode === 'editorial' 
                  ? 'bg-[#FF3530] text-white shadow-sm' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
            >
              <BookOpen size={14} /> <span className="hidden sm:inline">Editorial</span>
            </button>
            
            {/* Direct Global Magazine Button */}
             <button 
              onClick={openGlobalEditorial}
              className={`px-2 md:px-3 py-2 text-xs font-bold uppercase tracking-wide flex items-center gap-2 transition-all border-l border-white/10 ml-1 md:ml-2 pl-2 md:pl-3
                text-gray-400 hover:text-[#FF3530]`}
              title="Global Panorama"
            >
              <Globe2 size={16} />
            </button>

            {/* Offline Cache Button */}
            <button 
              onClick={handleCacheOffline}
              disabled={isCaching}
              className={`px-2 md:px-3 py-2 text-xs font-bold uppercase tracking-wide flex items-center gap-2 transition-all border-l border-white/10 ml-1 pl-2 md:pl-3
                ${isCaching ? 'text-[#B4E197]' : 'text-gray-400 hover:text-white'}`}
              title="Descargar datos principales offline"
            >
              <DownloadCloud size={16} className={isCaching ? 'animate-pulse' : ''} />
              {isCaching ? <span className="text-[10px]">{cacheProgress}%</span> : ''}
            </button>
         </div>
      </div>

      {/* Music HUD */}
      <MusicHud 
        data={culturalData} 
        isVisible={!isLoading && culturalData !== null} 
        mode={appMode}
      />

      {/* Info Panel Sidebar */}
      <InfoPanel 
        isOpen={isPanelOpen}
        onClose={closePanel}
        isLoading={isLoading}
        data={culturalData}
        selectedCountryName={selectedCountry}
        mode={appMode}
        onOpenEssay={(essayId) => {
          const essay = essays.find(e => e.id === essayId);
          if (essay) setSelectedEssay(essay);
        }}
      />

      <EssayPanel 
        essay={selectedEssay}
        isOpen={selectedEssay !== null}
        onClose={() => setSelectedEssay(null)}
        onNavigateToCountry={handleCountryClick}
      />

    </div>
  );
};

export default App;