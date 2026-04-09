import { CompilationPick, CulturalData, EditorialBriefingItem } from '../types';
import { preloadedData } from './preloaded';

const allEntries = Object.values(preloadedData);

export const globalLead = preloadedData['Global Issue'];

export const curatedHubCountries: CulturalData[] = allEntries.filter(
  (entry) =>
    entry.countryName !== 'Global Issue' &&
    entry.editorial.editorialStatus === 'curated',
);

export const inProgressHubCountries: CulturalData[] = allEntries.filter(
  (entry) =>
    entry.countryName !== 'Global Issue' &&
    entry.editorial.editorialStatus === 'in-progress',
);

export const editorialBriefing: EditorialBriefingItem[] = [
  {
    title: 'The Best Electronic Records of 2000-25',
    source: 'Resident Advisor',
    url: 'https://ra.co/features/4482',
    blurb:
      'Un canon util para medir de donde sigue viniendo la energia de club cuando la escena actual se fragmenta en microcircuitos.',
    publishedAt: 'Dec 11, 2025',
    tag: 'Canon',
  },
  {
    title: 'CTM x Resident Advisor: Rethinking Music Ecosystems',
    source: 'Resident Advisor / CTM',
    url: 'https://ra.co/events/2346501',
    blurb:
      'Una pieza clave para pensar club, sostenibilidad y trabajo cultural como infraestructura, no solo como nightlife.',
    publishedAt: 'Jan 30, 2026',
    tag: 'Infrastructure',
  },
  {
    title: 'The Best Electronic Music on Bandcamp, February 2026',
    source: 'Bandcamp Daily',
    url: 'https://daily.bandcamp.com/best-electronic/the-best-electronic-music-on-bandcamp-february-2026',
    blurb:
      'Mapa mensual de mutaciones entre techno, deconstructed club, electro raro y hardware hecho con nervio.',
    publishedAt: 'Mar 4, 2026',
    tag: 'Field Notes',
  },
  {
    title: 'Bandcamp launches new weekly radio show for electronic music',
    source: 'Mixmag',
    url: 'https://mixmag.net/amp/bandcamp-launches-new-weekly-radio-show-electronic-music',
    blurb:
      'Sirve como termometro de una curaduria humana que vuelve a importar cuando el feed ya no alcanza para ordenar escena.',
    publishedAt: 'Mar 27, 2026',
    tag: 'Radio',
  },
  {
    title: 'Apple Music to inform listeners if music on platform is AI-generated',
    source: 'Mixmag',
    url: 'https://mixmag.net/read/apple-music-ai-meta-data-information-listeners-music-generated-news',
    blurb:
      'Una señal concreta de como la industria empieza a traducir la ansiedad por IA en metadata, etiquetas y politicas de visibilidad.',
    publishedAt: 'Mar 9, 2026',
    tag: 'AI Policy',
  },
  {
    title: 'Apple Music launches new "AutoMix" feature that blends tracks together using AI',
    source: 'Mixmag',
    url: 'https://mixmag.net/read/apple-music-launches-new-automix-feature-that-blends-tracks-together-using-ai-tech',
    blurb:
      'Otro frente del mismo problema: automatizar la transicion y venderla como fluidez, justo cuando la escucha pide mas friccion.',
    publishedAt: 'Jun 12, 2025',
    tag: 'Platform Shift',
  },
];

export const compilationPicks: CompilationPick[] = [
  {
    title: 'The 30 Best Electronic Albums of 2025',
    curator: 'Philip Sherburne',
    source: 'Pitchfork',
    url: 'https://pitchfork.com/features/lists-and-guides/best-electronic-albums-2025/',
    note:
      'Lista util para cruzar el canon de fin de ano con lo que hoy sigue sonando futurista y no solo nostalgico.',
    territory: 'Global',
  },
  {
    title: 'The Best Electronic Music on Bandcamp, January 2026',
    curator: 'Joe Muggs',
    source: 'Bandcamp Daily',
    url: 'https://daily.bandcamp.com/best-electronic/the-best-electronic-music-on-bandcamp-january-2026',
    note:
      'Seleccion mensual para rastrear escenas pequenas antes de que las absorba la narrativa mas obvia del algoritmo.',
    territory: 'Global',
  },
  {
    title: 'The Best Electronic Music on Bandcamp, February 2026',
    curator: 'Joe Muggs',
    source: 'Bandcamp Daily',
    url: 'https://daily.bandcamp.com/best-electronic/the-best-electronic-music-on-bandcamp-february-2026',
    note:
      'Ideal para seguir Barcelona, Rotterdam, Seattle y otros nodos donde la electronica todavia se siente de taller.',
    territory: 'Translocal',
  },
  {
    title: 'The Best Experimental Music on Bandcamp, February 2026',
    curator: 'Bandcamp Daily',
    source: 'Bandcamp Daily',
    url: 'https://daily.bandcamp.com/best-experimental/the-best-experimental-music-on-bandcamp-february-2026',
    note:
      'Sirve para abrir el radar fuera del club estricto y escuchar donde el riesgo formal sigue vivo.',
    territory: 'Experimental',
  },
];
