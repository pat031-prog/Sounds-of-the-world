
export interface Song {
  title: string;
  artist: string;
  genre: string;
  description: string;
  youtubeQuery: string;
}

export interface Artist {
  name: string;
  genre: string;
  relevance: string;
}

export interface SampleInfo {
  description: string;
  famousUsage: string;
}

export interface ChartEntry {
  rank: number;
  title: string;
  artist: string;
  trend: 'up' | 'down' | 'new';
}

export interface CriticalAlbum {
  albumName: string;
  artist: string;
  score: string;
  reviewSnippet: string; 
  fullReview: string;   
  label: string;
  isBestNewMusic: boolean; 
}

export interface EditorialTrack {
  title: string;
  artist: string;
  vibe: string;
  youtubeQuery: string;
}

export interface CulturalSpot {
  name: string;
  type: string; 
  description: string;
}

export interface EditorialChapter {
  title: string;
  subtitle: string;
  content: string;
}

export interface CultAlbum {
  albumName: string;
  artist: string;
  year: string;
  label: string;
  reason: string;
  youtubeQuery: string;
  coverImageUrl: string;
  coverSourceUrl: string;
}

export interface ForecastRelease {
  artist: string;
  title: string;
  year: string;
  type: string;
  coverImageUrl: string;
  coverSourceUrl: string;
  youtubeQuery: string;
}

export interface CuratedRead {
  title: string;
  source: string;
  url: string;
}

export interface EditorialBriefingItem {
  title: string;
  source: string;
  url: string;
  blurb: string;
  publishedAt: string;
  tag: string;
}

export interface CompilationPick {
  title: string;
  curator: string;
  source: string;
  url: string;
  note: string;
  territory?: string;
}

export interface EssaySource {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
}

export interface HubChartEntry {
  rank: number;
  chart: string;
  artist: string;
  albumName: string;
  year: string;
  label: string;
  blurb: string;
  whyItMatters: string;
  coverImageUrl: string;
  coverSourceUrl: string;
  source: string;
  sourceUrl: string;
  territory?: string;
  trend?: 'new' | 'up' | 'steady';
}

export interface PlaylistPlatformLink {
  platform: 'spotify' | 'apple' | 'youtube';
  url: string;
}

export interface PlaylistHighlight {
  artist: string;
  title: string;
  note: string;
  source: string;
  sourceUrl: string;
  youtubeQuery: string;
}

export interface EditorialPlaylistBundle {
  title: string;
  description: string;
  thesis: string;
  curator: string;
  territory?: string;
  platforms: PlaylistPlatformLink[];
  highlights: PlaylistHighlight[];
}

export interface EditorialSignalCluster {
  name: string;
  definition: string;
  whyNow: string;
  territories: string[];
  source: string;
  sourceUrl: string;
}

export type AppMode = 'atlas' | 'editorial';

// EXPANDED EDITORIAL PROFILE
export interface EditorialProfile {
  magazineStyle: string; 
  sceneDescription: string; 
  editorialStatus: 'curated' | 'in-progress';
  editorialStatusNote: string;
  
  // Multi-page content
  editorialChapters: EditorialChapter[];
  
  keyVenues: string[];
  recordStores: CulturalSpot[];
  
  experimentalArtist: {
    name: string;
    description: string;
    similarTo: string; 
  };
  
  visualAesthetic: {
    styleName: string; 
    description: string; 
  };
  
  localVerdict: {
    platformName: string; 
    score: string;
    consensus: string; 
  };

  bestLyricsQuote: string;
  soundPalette: string[]; 
  
  sonicSignature: {
    instruments: string[];
    vocals: string[];
    production: string[];
  };

  localSlang: { term: string; definition: string }; 
  
  cultAlbums: CultAlbum[]; 
  
  // New Radar / Forecast Section
  forecast: {
     trendName: string;
     period: string; // "2024-2026"
     description: string;
     keyArtists: string[];
     futureSounds: string[];
     curiosities: string[]; // Samples, weird facts, connections
     forecastReleases: ForecastRelease[];
  };

  curatedReads: CuratedRead[];

  editorialPlaylist: EditorialTrack[]; 
  independentLabel: { name: string; focus: string; since: string }; 
  subgenreFocus: { name: string; description: string }; 
}

export interface CulturalData {
  countryName: string;
  summary: string;
  traditions: string[];
  musicalStyles: string[];
  instruments: string[];
  curiosities: string[];
  modernInfluentialArtists: Artist[];
  sampleOrigins: SampleInfo[]; 
  songs: Song[];
  topCharts: ChartEntry[]; 
  criticalPick: CriticalAlbum;
  editorial: EditorialProfile; 
}

export interface GeoJsonProperties {
  ADMIN: string;
  ISO_A3: string;
}
