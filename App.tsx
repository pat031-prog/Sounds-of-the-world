import React, { useCallback, useEffect, useState } from 'react';
import { EarthGlobe } from './components/EarthGlobe';
import { FlatMap } from './components/FlatMap';
import { InfoPanel } from './components/InfoPanel';
import { EssayPanel } from './components/EssayPanel';
import { EditorialHub } from './components/EditorialHub';
import { fetchCountryData, fetchGlobalData } from './services/geminiService';
import { AppMode, CulturalData, GeoJsonProperties } from './types';
import { BookOpen, DownloadCloud, Globe2, Mic2 } from 'lucide-react';
import { essays, Essay } from './data/essays';
import { shuffleEditorialCuratedImages } from './data/editorialCuratedImages';

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [culturalData, setCulturalData] = useState<CulturalData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
  const [isPanelOpen, setIsPanelOpen] = useState(() => window.innerWidth >= 768);
  const [appMode, setAppMode] = useState<AppMode>('editorial');
  const [isCaching, setIsCaching] = useState(false);
  const [cacheProgress, setCacheProgress] = useState(0);
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);
  const [editorialImageDeck, setEditorialImageDeck] = useState<string[]>(() =>
    shuffleEditorialCuratedImages(),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const loadGlobal = async () => {
      if (
        isDesktop &&
        appMode === 'editorial' &&
        !selectedCountry &&
        !culturalData &&
        !isLoading
      ) {
        setIsLoading(true);
        setIsPanelOpen(true);
        try {
          const data = await fetchGlobalData();
          setCulturalData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadGlobal();
  }, [appMode, culturalData, isDesktop, isLoading, selectedCountry]);

  useEffect(() => {
    setEditorialImageDeck(shuffleEditorialCuratedImages());
  }, [appMode, culturalData?.countryName]);

  const switchToAtlas = useCallback(() => {
    setAppMode('atlas');
    setSelectedCountry(null);
    setCulturalData(null);
    setSelectedEssay(null);
    setIsPanelOpen(false);
    setIsLoading(false);
  }, []);

  const openEditorialHome = useCallback(() => {
    setAppMode('editorial');
    setSelectedCountry(null);
    setCulturalData(null);
    setSelectedEssay(null);
    setIsLoading(false);
    setIsPanelOpen(isDesktop);
  }, [isDesktop]);

  const openGlobalIssue = useCallback(async () => {
    setAppMode('editorial');
    setSelectedCountry(null);
    setSelectedEssay(null);
    setIsPanelOpen(true);
    setIsLoading(true);

    try {
      const data = await fetchGlobalData();
      setCulturalData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCountryClick = useCallback(
    async (properties: GeoJsonProperties | string) => {
      const countryName = typeof properties === 'string' ? properties : properties.ADMIN;

      setSelectedCountry(countryName);
      setIsPanelOpen(true);
      setAppMode('editorial');
      setSelectedEssay(null);

      if (
        selectedCountry !== countryName ||
        !culturalData ||
        culturalData.countryName === 'Global Issue'
      ) {
        setCulturalData(null);
        setIsLoading(true);
        try {
          const data = await fetchCountryData(countryName);
          setCulturalData(data);
        } catch (error) {
          console.error('Error in app flow:', error);
        } finally {
          setIsLoading(false);
        }
      }
    },
    [selectedCountry, culturalData],
  );

  const closePanel = () => setIsPanelOpen(false);

  const handleCacheOffline = async () => {
    const countriesToCache = [
      'United States of America',
      'United Kingdom',
      'China',
      'Spain',
      'Japan',
      'India',
      'Russia',
      'Argentina',
      'Brazil',
      'Australia',
    ];

    setIsCaching(true);
    setCacheProgress(0);

    try {
      await fetchGlobalData();

      let completed = 0;
      for (const country of countriesToCache) {
        await fetchCountryData(country);
        completed += 1;
        setCacheProgress(Math.round((completed / countriesToCache.length) * 100));
      }

      setTimeout(() => {
        setIsCaching(false);
        setCacheProgress(0);
      }, 2000);
    } catch (error) {
      console.error('Error caching offline data:', error);
      setIsCaching(false);
    }
  };

  const showAtlasGlobe = !isDesktop && appMode === 'atlas';
  const showEditorialMap = isDesktop && appMode === 'editorial';
  const showEditorialHub =
    (!isDesktop && appMode === 'editorial') || (isDesktop && appMode === 'atlas');

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505] font-sans transition-colors duration-1000">
      <div className="pointer-events-none fixed inset-0 bg-texture opacity-10 mix-blend-overlay" />

      <div className="absolute inset-0 z-0 transition-opacity duration-700">
        {showAtlasGlobe ? (
          <EarthGlobe onCountryClick={(properties) => void handleCountryClick(properties)} />
        ) : null}
        {showEditorialMap ? (
          <FlatMap
            onCountryClick={(properties) => void handleCountryClick(properties)}
            selectedCountry={selectedCountry}
          />
        ) : null}
        {showEditorialHub ? (
          <EditorialHub
            isDesktop={isDesktop}
            editorialImageDeck={editorialImageDeck}
            onOpenGlobalIssue={openGlobalIssue}
            onOpenEssay={(essayId) => {
              const essay = essays.find((entry) => entry.id === essayId);
              if (essay) setSelectedEssay(essay);
            }}
            onOpenCountry={(countryName) => void handleCountryClick(countryName)}
          />
        ) : null}
      </div>

      <div className="pointer-events-none absolute left-4 top-4 z-20 flex max-w-[calc(100vw-2rem)] flex-col gap-4 md:left-8 md:top-8">
        <div className="pointer-events-auto flex items-start gap-3">
          <div
            onClick={openEditorialHome}
            className="cursor-pointer bg-[#FF3530] p-3 text-black shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <Mic2 size={24} />
          </div>
          <div className="border border-white/20 bg-black px-4 py-3 shadow-xl backdrop-blur-md md:px-6">
            <h1 className="font-cinzel text-xl font-bold tracking-wider text-white md:text-2xl">
              Sounds of the World
            </h1>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#FF3530] md:text-xs">
              {appMode === 'editorial' ? 'Volume 04: The World' : 'Atlas Signal'}
            </p>
          </div>
        </div>

        <div className="pointer-events-auto flex w-fit flex-wrap items-center gap-1 border border-white/20 bg-black p-1.5 shadow-2xl backdrop-blur-md">
          <button
            onClick={switchToAtlas}
            className={`flex items-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-wide transition-all md:px-4 md:text-xs ${
              appMode === 'atlas'
                ? 'bg-[#FF3530] text-black shadow-sm'
                : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Globe2 size={14} />
            <span className="hidden sm:inline">Atlas</span>
          </button>
          <button
            onClick={openEditorialHome}
            className={`flex items-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-wide transition-all md:px-4 md:text-xs ${
              appMode === 'editorial'
                ? 'bg-[#FF3530] text-white shadow-sm'
                : 'text-gray-500 hover:bg-white/5 hover:text-white'
            }`}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Editorial</span>
          </button>
          <button
            onClick={openGlobalIssue}
            className="ml-1 flex items-center gap-2 border-l border-white/10 pl-3 text-xs font-bold uppercase tracking-wide text-gray-400 transition-all hover:text-[#FF3530] md:ml-2 md:px-1"
            title="Open Global Issue"
          >
            <Mic2 size={16} />
          </button>
          <button
            onClick={handleCacheOffline}
            disabled={isCaching}
            className={`ml-1 flex items-center gap-2 border-l border-white/10 pl-3 text-xs font-bold uppercase tracking-wide transition-all ${
              isCaching ? 'text-[#FF3530]' : 'text-gray-400 hover:text-white'
            }`}
            title="Descargar datos principales offline"
          >
            <DownloadCloud size={16} className={isCaching ? 'animate-pulse' : ''} />
            {isCaching ? <span className="text-[10px]">{cacheProgress}%</span> : null}
          </button>
        </div>
      </div>

      <InfoPanel
        isOpen={isPanelOpen}
        onClose={closePanel}
        isLoading={isLoading}
        data={culturalData}
        selectedCountryName={selectedCountry}
        mode={appMode}
        editorialImageDeck={editorialImageDeck}
        onOpenGlobalEditorial={openEditorialHome}
        onOpenEssay={(essayId) => {
          const essay = essays.find((entry) => entry.id === essayId);
          if (essay) setSelectedEssay(essay);
        }}
      />

      <EssayPanel
        essay={selectedEssay}
        isOpen={selectedEssay !== null}
        onClose={() => setSelectedEssay(null)}
        onNavigateToCountry={(countryName) => void handleCountryClick(countryName)}
        editorialImageDeck={editorialImageDeck}
      />
    </div>
  );
};

export default App;
