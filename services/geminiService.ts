import { preloadedData } from '../data/preloaded';
import { CulturalData } from '../types';

const CACHE_PREFIX = 'terramusica_cache_';

const getCachedData = (key: string): CulturalData | null => {
  if (typeof window === 'undefined') return null;

  try {
    const cached = localStorage.getItem(CACHE_PREFIX + key);
    return cached ? (JSON.parse(cached) as CulturalData) : null;
  } catch (error) {
    console.error('Cache read error:', error);
    return null;
  }
};

const setCachedData = (key: string, data: CulturalData) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data));
  } catch (error) {
    console.error('Cache write error:', error);
  }
};

const resolveData = (key: string): CulturalData | null => {
  const offlineData = preloadedData[key];
  if (!offlineData) return null;

  const cached = getCachedData(key);
  if (cached) {
    return cached;
  }

  setCachedData(key, offlineData);
  return offlineData;
};

export const fetchCountryData = async (countryName: string): Promise<CulturalData | null> => {
  return resolveData(countryName);
};

export const fetchGlobalData = async (): Promise<CulturalData | null> => {
  return resolveData('Global Issue');
};
