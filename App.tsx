import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { InfoPanel } from './components/InfoPanel';
import { EssayPanel } from './components/EssayPanel';
import { EditorialHub } from './components/EditorialHub';
import { KPunkPanel } from './components/KPunkPanel';
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
  const [isKPunkOpen, setIsKPunkOpen] = useState(false);
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
            onOpenKPunk={() => setIsKPunkOpen(true)}
            onOpenCountry={(countryName) => void handleCountryClick(countryName)}
          />
        ) : null}
      </div>

      {/* ═══ SINGLE UNIFIED NAV BAR ═══ */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-40 w-full flex justify-center px-3 py-3 md:px-6 md:py-5 transition-all duration-500 ${
          isPanelOpen && appMode === 'editorial'
            ? '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'
            : 'translate-y-0 opacity-100'
        }`}
      >
        <nav className="pointer-events-auto flex w-full max-w-[1400px] items-center gap-1 overflow-x-auto no-scrollbar rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/85 px-2 py-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:rounded-full md:px-3">
          {/* ── Brand Mark ── */}
          <button
            onClick={openEditorialHome}
            className="group flex shrink-0 items-center gap-2.5 rounded-xl px-2.5 py-1.5 transition-all hover:bg-white/[0.06] md:rounded-full md:px-3"
            title="Sounds of the World — Inicio"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF3530] text-black transition-transform duration-300 group-hover:scale-110 group-active:scale-95 md:h-7 md:w-7 md:rounded-full">
              <Mic2 size={14} />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-[11px] font-bold tracking-wider text-white md:text-xs">
                SOTW
              </span>
              <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#FF3530]/80">
                {appMode === 'atlas' ? 'Atlas' : 'Editorial'}
              </span>
            </div>
          </button>

          {/* ── Separator ── */}
          <div className="mx-1 h-5 w-px shrink-0 bg-white/[0.08]" />

          {/* ── Section Links (when Editorial Hub is visible) ── */}
          {showEditorialHub && (
            <>
              <button
                onClick={() => openGlobalIssue(0)}
                className="shrink-0 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF3530] transition-all hover:bg-[#FF3530]/10"
              >
                Global Issue
              </button>
              {[
                { id: 'essays', label: 'Ensayos' },
                { id: 'cult-canon', label: 'Canon' },
                { id: 'new-signal', label: 'Señal' },
                { id: 'playlist-matrix', label: 'Playlists' },
                { id: 'signal-lexicon', label: 'Léxico' },
                { id: 'countries', label: 'Países' },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    const el = document.getElementById(id);
                    const container = document.getElementById('editorial-hub-scroll');
                    if (el && container) {
                      const offsetTop = el.offsetTop - 80;
                      container.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    } else if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="shrink-0 rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 transition-all hover:bg-white/[0.07] hover:text-white"
                >
                  {label}
                </button>
              ))}
              <div className="mx-1 h-5 w-px shrink-0 bg-white/[0.08]" />
            </>
          )}

          {/* ── When NOT on hub, show context label ── */}
          {!showEditorialHub && (
            <>
              <span className="shrink-0 px-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                {selectedCountry
                  ? selectedCountry
                  : appMode === 'editorial'
                  ? 'Volume 04'
                  : 'Atlas Signal'}
              </span>
              <div className="mx-1 h-5 w-px shrink-0 bg-white/[0.08]" />
            </>
          )}

          {/* ── Spacer (push mode switcher to the right) ── */}
          <div className="flex-1" />

          {/* ── Mode Switcher ── */}
          <div className="flex shrink-0 items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.03] p-0.5">
            <button
              onClick={switchToAtlas}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                appMode === 'atlas'
                  ? 'bg-[#FF3530] text-black shadow-lg shadow-[#FF3530]/20'
                  : 'text-white/35 hover:bg-white/[0.06] hover:text-white/70'
              }`}
              title="Atlas — Ver mapa / globo"
            >
              <Globe2 size={12} />
              <span className="hidden md:inline">Atlas</span>
            </button>
            <button
              onClick={openEditorialHome}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                appMode === 'editorial'
                  ? 'bg-[#FF3530] text-black shadow-lg shadow-[#FF3530]/20'
                  : 'text-white/35 hover:bg-white/[0.06] hover:text-white/70'
              }`}
              title="Editorial Hub"
            >
              <BookOpen size={12} />
              <span className="hidden md:inline">Editorial</span>
            </button>
          </div>
        </nav>
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

      {isKPunkOpen && (
        <KPunkPanel onClose={() => setIsKPunkOpen(false)} />
      )}
    </div>
  );
};

export default App;
