import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { InfoPanel } from './components/InfoPanel';
import { EssayPanel } from './components/EssayPanel';
import { EditorialHub } from './components/EditorialHub';
import { AtlasSurfaceBoundary } from './components/AtlasSurfaceBoundary';
import { fetchCountryData, fetchGlobalData } from './services/geminiService';
import { AppMode, CulturalData, GeoJsonProperties } from './types';
import { BookOpen, DownloadCloud, Globe2, Mic2 } from 'lucide-react';
import { essays, Essay } from './data/essays';
import {
  advanceEditorialCuratedImages,
  shuffleEditorialCuratedImages,
} from './data/editorialCuratedImages';

const EarthGlobe = lazy(async () => {
  const module = await import('./components/EarthGlobe');
  return { default: module.EarthGlobe };
});

const FlatMap = lazy(async () => {
  const module = await import('./components/FlatMap');
  return { default: module.FlatMap };
});

const AtlasSurfaceLoader: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex h-full w-full items-center justify-center bg-[#050505]">
    <span className="animate-pulse font-serif italic text-gray-500">{label}</span>
  </div>
);

const App: React.FC = () => {
  const getIsDesktopDefault = () =>
    typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [culturalData, setCulturalData] = useState<CulturalData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDesktop, setIsDesktop] = useState(getIsDesktopDefault);
  const [isPanelOpen, setIsPanelOpen] = useState(getIsDesktopDefault);
  const [appMode, setAppMode] = useState<AppMode>('editorial');
  const [isCaching, setIsCaching] = useState(false);
  const [cacheProgress, setCacheProgress] = useState(0);
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);
  const [editorialPanelPage, setEditorialPanelPage] = useState(0);
  const [hubSectionFocus, setHubSectionFocus] = useState<string | null>(null);
  const [editorialImageDeck, setEditorialImageDeck] = useState<string[]>(() =>
    shuffleEditorialCuratedImages(),
  );
  const editorialDeckContextRef = useRef<string | null>(null);

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
        setEditorialPanelPage(0);
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
    const nextContextKey = `${appMode}:${culturalData?.countryName ?? 'none'}`;

    if (editorialDeckContextRef.current === null) {
      editorialDeckContextRef.current = nextContextKey;
      return;
    }

    if (editorialDeckContextRef.current !== nextContextKey) {
      setEditorialImageDeck((currentDeck) => advanceEditorialCuratedImages(currentDeck));
      editorialDeckContextRef.current = nextContextKey;
    }
  }, [appMode, culturalData?.countryName]);

  const switchToAtlas = useCallback(() => {
    setAppMode('atlas');
    setSelectedCountry(null);
    setCulturalData(null);
    setSelectedEssay(null);
    setHubSectionFocus(null);
    setIsPanelOpen(false);
    setIsLoading(false);
  }, []);

  const openEditorialHome = useCallback(() => {
    setAppMode('editorial');
    setSelectedCountry(null);
    setCulturalData(null);
    setSelectedEssay(null);
    setHubSectionFocus(null);
    setEditorialPanelPage(0);
    setIsLoading(false);
    setIsPanelOpen(isDesktop);
  }, [isDesktop]);

  const openGlobalIssue = useCallback(async (initialPage = 0) => {
    setAppMode('editorial');
    setSelectedCountry(null);
    setSelectedEssay(null);
    setHubSectionFocus(null);
    setEditorialPanelPage(initialPage);
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

  const openEditorialHubSection = useCallback(
    (sectionId: string) => {
      setSelectedCountry(null);
      setSelectedEssay(null);
      setCulturalData(null);
      setIsLoading(false);
      setIsPanelOpen(false);
      setEditorialPanelPage(0);
      setHubSectionFocus(sectionId);
      setAppMode(isDesktop ? 'atlas' : 'editorial');
    },
    [isDesktop],
  );

  const handleCountryClick = useCallback(
    async (properties: GeoJsonProperties | string) => {
      const countryName = typeof properties === 'string' ? properties : properties.ADMIN;

      setSelectedCountry(countryName);
      setIsPanelOpen(true);
      setAppMode('editorial');
      setSelectedEssay(null);
      setHubSectionFocus(null);
      setEditorialPanelPage(0);

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
          <AtlasSurfaceBoundary
            key="atlas-globe"
            resetKey={`atlas-globe:${appMode}:${selectedCountry ?? 'none'}`}
            surfaceName="Atlas Globe"
            onOpenGlobalIssue={openGlobalIssue}
            onOpenEditorialHome={openEditorialHome}
          >
            <Suspense fallback={<AtlasSurfaceLoader label="Loading Atlas Globe..." />}>
              <EarthGlobe onCountryClick={(properties) => void handleCountryClick(properties)} />
            </Suspense>
          </AtlasSurfaceBoundary>
        ) : null}
        {showEditorialMap ? (
          <AtlasSurfaceBoundary
            key="editorial-map"
            resetKey={`editorial-map:${appMode}:${selectedCountry ?? 'none'}`}
            surfaceName="Editorial Map"
            onOpenGlobalIssue={openGlobalIssue}
            onOpenEditorialHome={openEditorialHome}
          >
            <Suspense fallback={<AtlasSurfaceLoader label="Loading Editorial Map..." />}>
              <FlatMap
                onCountryClick={(properties) => void handleCountryClick(properties)}
                selectedCountry={selectedCountry}
              />
            </Suspense>
          </AtlasSurfaceBoundary>
        ) : null}
        {showEditorialHub ? (
          <EditorialHub
            isDesktop={isDesktop}
            editorialImageDeck={editorialImageDeck}
            onOpenGlobalIssue={openGlobalIssue}
            initialSectionId={hubSectionFocus}
            onOpenEssay={(essayId) => {
              const essay = essays.find((entry) => entry.id === essayId);
              if (essay) setSelectedEssay(essay);
            }}
            onOpenCountry={(countryName) => void handleCountryClick(countryName)}
          />
        ) : null}
      </div>

      {/* GLOBAL NAV — Full width bar on mobile, floating block on desktop */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-40 w-full transition-all duration-300 md:absolute md:left-8 md:top-8 md:w-auto ${
          isPanelOpen && appMode === 'editorial'
            ? '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100' // Hide via sheer translate on mobile so InfoPanel dictates top area
            : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="pointer-events-auto flex w-full flex-row items-center justify-between border-b border-white/10 bg-[#050505]/90 px-4 py-2 backdrop-blur-md md:flex-col md:items-start md:justify-start md:gap-3 md:border-none md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
          {/* Brand block */}
          <div className="flex shrink-0 items-center gap-3">
            <div
              onClick={openEditorialHome}
              className="cursor-pointer rounded-sm bg-[#FF3530] p-2 text-black shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 md:rounded-none md:p-3"
              title="Volver al inicio editorial"
            >
              <Mic2 size={18} className="md:h-6 md:w-6" />
            </div>
            <div className="flex flex-col border-none bg-transparent px-0 py-0 shadow-none md:border md:border-white/20 md:bg-black md:px-6 md:py-3 md:shadow-xl md:backdrop-blur-md">
              <h1 className="font-cinzel text-sm font-bold tracking-wider text-white md:text-2xl">
                Sounds of the World
              </h1>
              <p className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-[#FF3530] md:mt-1 md:text-xs">
                {appMode === 'atlas'
                  ? selectedCountry
                    ? `Atlas / ${selectedCountry}`
                    : 'Atlas Signal'
                  : selectedCountry
                  ? `Editorial / ${selectedCountry}`
                  : 'Volume 04: The World'}
              </p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex flex-nowrap items-center overflow-hidden rounded-sm border border-white/20 bg-black shadow-none md:rounded-none md:shadow-2xl md:backdrop-blur-md">
            <button
              onClick={switchToAtlas}
              className={`flex items-center justify-center p-2 transition-all md:p-4 ${
                appMode === 'atlas' ? 'bg-[#FF3530] text-black' : 'text-gray-500 hover:bg-white/5 hover:text-white'
              }`}
              title="Atlas — Ver mapa / globo"
            >
              <Globe2 size={16} />
            </button>
            <button
              onClick={openEditorialHome}
              className={`flex items-center justify-center border-l border-white/10 p-2 transition-all md:p-4 ${
                appMode === 'editorial' ? 'bg-[#FF3530] text-black' : 'text-gray-500 hover:bg-white/5 hover:text-white'
              }`}
              title="Editorial Hub"
            >
              <BookOpen size={16} />
            </button>
          </div>
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
        initialEditorialPage={editorialPanelPage}
        onOpenGlobalEditorial={openGlobalIssue}
        onOpenEditorialSection={openEditorialHubSection}
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
