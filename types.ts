
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

// EXPANDED EDITORIAL PROFILE
export interface EditorialProfile {
  magazineStyle: string; 
  sceneDescription: string; 
  
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
  
  cultAlbums: Array<{ 
    albumName: string; 
    artist: string; 
    year: string; 
    label: string; 
    reason: string; 
    youtubeQuery: string; 
    coverArtQuery: string; 
  }>; 
  
  // New Radar / Forecast Section
  forecast: {
     trendName: string;
     period: string; // "2024-2026"
     description: string;
     keyArtists: string[];
     futureSounds: string[];
     curiosities: string[]; // Samples, weird facts, connections
     // NEW: Specific releases for the forecast section
     forecastReleases: Array<{
       artist: string;
       title: string;
       type: string; // "EP", "Single", "Album"
       coverArtQuery: string;
       youtubeQuery: string;
     }>;
  };

  curatedReads: Array<{
    title: string;
    source: string;
    url: string;
  }>;

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
