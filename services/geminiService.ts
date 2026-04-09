import { GoogleGenAI, Type, Schema } from "@google/genai";
import { CulturalData } from "../types";
import preloadedDataRaw from "../data/preloaded.json";

const preloadedData = preloadedDataRaw as Record<string, CulturalData>;

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.API_KEY || '' });

const schema: Schema = {
  type: Type.OBJECT,
  properties: {
    countryName: { type: Type.STRING },
    summary: { type: Type.STRING },
    traditions: { type: Type.ARRAY, items: { type: Type.STRING } },
    musicalStyles: { type: Type.ARRAY, items: { type: Type.STRING } },
    instruments: { type: Type.ARRAY, items: { type: Type.STRING } },
    curiosities: { type: Type.ARRAY, items: { type: Type.STRING } },
    modernInfluentialArtists: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          genre: { type: Type.STRING },
          relevance: { type: Type.STRING }
        },
        required: ["name", "genre", "relevance"]
      }
    },
    sampleOrigins: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          description: { type: Type.STRING },
          famousUsage: { type: Type.STRING }
        },
        required: ["description", "famousUsage"]
      }
    },
    songs: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          artist: { type: Type.STRING },
          genre: { type: Type.STRING },
          description: { type: Type.STRING },
          youtubeQuery: { type: Type.STRING }
        },
        required: ["title", "artist", "genre", "description", "youtubeQuery"]
      }
    },
    topCharts: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          rank: { type: Type.INTEGER },
          title: { type: Type.STRING },
          artist: { type: Type.STRING },
          trend: { type: Type.STRING, enum: ["up", "down", "new"] }
        },
        required: ["rank", "title", "artist", "trend"]
      }
    },
    criticalPick: {
      type: Type.OBJECT,
      properties: {
        albumName: { type: Type.STRING },
        artist: { type: Type.STRING },
        score: { type: Type.STRING },
        reviewSnippet: { type: Type.STRING },
        fullReview: { type: Type.STRING },
        label: { type: Type.STRING },
        isBestNewMusic: { type: Type.BOOLEAN, description: "True if score > 8.0" }
      },
      required: ["albumName", "artist", "score", "reviewSnippet", "fullReview", "label", "isBestNewMusic"]
    },
    editorial: {
      type: Type.OBJECT,
      properties: {
        magazineStyle: { type: Type.STRING },
        sceneDescription: { type: Type.STRING },
        editorialChapters: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING },
                    subtitle: { type: Type.STRING },
                    content: { type: Type.STRING, description: "A long paragraph around 150 words." }
                },
                required: ["title", "subtitle", "content"]
            }
        },
        keyVenues: { type: Type.ARRAY, items: { type: Type.STRING } },
        recordStores: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING },
                    type: { type: Type.STRING },
                    description: { type: Type.STRING }
                },
                required: ["name", "type", "description"]
            }
        },
        experimentalArtist: { 
          type: Type.OBJECT, 
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            similarTo: { type: Type.STRING }
          },
          required: ["name", "description", "similarTo"]
        },
        visualAesthetic: {
           type: Type.OBJECT,
           properties: {
             styleName: { type: Type.STRING },
             description: { type: Type.STRING }
           },
           required: ["styleName", "description"]
        },
        localVerdict: {
           type: Type.OBJECT,
           properties: {
             platformName: { type: Type.STRING },
             score: { type: Type.STRING },
             consensus: { type: Type.STRING }
           },
           required: ["platformName", "score", "consensus"]
        },
        bestLyricsQuote: { type: Type.STRING },
        soundPalette: { type: Type.ARRAY, items: { type: Type.STRING } },
        sonicSignature: {
          type: Type.OBJECT,
          properties: {
            instruments: { type: Type.ARRAY, items: { type: Type.STRING } },
            vocals: { type: Type.ARRAY, items: { type: Type.STRING } },
            production: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["instruments", "vocals", "production"]
        },
        localSlang: {
          type: Type.OBJECT,
          properties: {
            term: { type: Type.STRING },
            definition: { type: Type.STRING }
          },
          required: ["term", "definition"]
        },
        cultAlbums: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              artist: { type: Type.STRING },
              albumName: { type: Type.STRING },
              year: { type: Type.STRING },
              label: { type: Type.STRING },
              reason: { type: Type.STRING, description: "Why is this essential listening?" },
              youtubeQuery: { type: Type.STRING, description: "Search query for the full album" },
              coverArtQuery: { type: Type.STRING, description: "Query to find album cover on google images/youtube" }
            },
            required: ["artist", "albumName", "year", "label", "reason", "youtubeQuery", "coverArtQuery"]
          }
        },
        forecast: {
           type: Type.OBJECT,
           properties: {
              trendName: { type: Type.STRING },
              period: { type: Type.STRING },
              description: { type: Type.STRING },
              keyArtists: { type: Type.ARRAY, items: { type: Type.STRING } },
              futureSounds: { type: Type.ARRAY, items: { type: Type.STRING } },
              curiosities: { type: Type.ARRAY, items: { type: Type.STRING } },
              forecastReleases: {
                  type: Type.ARRAY,
                  items: {
                      type: Type.OBJECT,
                      properties: {
                          artist: { type: Type.STRING },
                          title: { type: Type.STRING },
                          type: { type: Type.STRING, enum: ["Single", "EP", "Album"] },
                          coverArtQuery: { type: Type.STRING },
                          youtubeQuery: { type: Type.STRING }
                      },
                      required: ["artist", "title", "type", "coverArtQuery", "youtubeQuery"]
                  }
              }
           },
           required: ["trendName", "period", "description", "keyArtists", "futureSounds", "curiosities", "forecastReleases"]
        },
        curatedReads: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING },
                    source: { type: Type.STRING },
                    url: { type: Type.STRING }
                },
                required: ["title", "source", "url"]
            }
        },
        editorialPlaylist: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              artist: { type: Type.STRING },
              vibe: { type: Type.STRING },
              youtubeQuery: { type: Type.STRING }
            },
            required: ["title", "artist", "vibe", "youtubeQuery"]
          }
        },
        independentLabel: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            focus: { type: Type.STRING },
            since: { type: Type.STRING }
          },
          required: ["name", "focus", "since"]
        },
        subgenreFocus: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: ["name", "description"]
        }
      },
      required: ["magazineStyle", "sceneDescription", "editorialChapters", "keyVenues", "recordStores", "experimentalArtist", "visualAesthetic", "localVerdict", "bestLyricsQuote", "soundPalette", "sonicSignature", "localSlang", "cultAlbums", "forecast", "curatedReads", "editorialPlaylist", "independentLabel", "subgenreFocus"]
    }
  },
  required: ["countryName", "summary", "traditions", "musicalStyles", "instruments", "curiosities", "modernInfluentialArtists", "sampleOrigins", "songs", "topCharts", "criticalPick", "editorial"]
};

// HELPER FOR PROMPTS
const getBasePrompt = (target: string) => `
Analiza profundamente la cultura musical de: "${target}".
ADOPTA UNA PERSONALIDAD EDITORIAL (Pitchfork, The Wire, Resident Advisor).
CONTEXTO TEMPORAL ACTUAL: FEBRERO 2026.
GENERA UN JSON (Español) válido.
`;

const CACHE_PREFIX = 'terramusica_cache_';

const getCachedData = (key: string): CulturalData | null => {
  if (typeof window === 'undefined') return null;
  try {
    const cached = localStorage.getItem(CACHE_PREFIX + key);
    if (cached) {
      console.log(`Loaded ${key} from cache.`);
      return JSON.parse(cached) as CulturalData;
    }
  } catch (e) {
    console.error("Cache read error:", e);
  }
  return null;
};

const setCachedData = (key: string, data: CulturalData) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data));
  } catch (e) {
    console.error("Cache write error:", e);
  }
};

export const fetchCountryData = async (countryName: string): Promise<CulturalData | null> => {
  if (preloadedData[countryName]) {
    console.log(`Loaded ${countryName} from preloaded data.`);
    return preloadedData[countryName];
  }

  const cached = getCachedData(countryName);
  if (cached) return cached;

  try {
    const prompt = `
      ${getBasePrompt(countryName)}
      
      Estructura requerida:
      1. MAINSTREAM: Datos generales.
      2. EDITORIAL: 
         - 'editorialChapters': 3 CAPÍTULOS DISTINTOS (Pasado, Presente, Futuro 2026).
         - 'cultAlbums': 3 Álbumes de culto HISTÓRICOS o RECIENTES (2020s) que definen la escena.
           * coverArtQuery: Query EXACTA para buscar imagen (ej: "cover art album [Nombre] [Artista]")
         - 'forecast': Sección "Radar 2026-2027".
           * trendName: Tendencia underground local.
           * description: Análisis detallado de lo que está sonando AHORA en 2026 y hacia dónde va.
           * forecastReleases: 4 lanzamientos (EPs, Singles, Álbumes) ESPECÍFICOS de 2025/2026 que representen esta tendencia.
              * coverArtQuery: "cover art [Artist] [Title]"
           * futureSounds: Tags sonoros.
         - 'curatedReads': 4 Artículos para profundizar.
           * url: Solo el dominio.
      
      Responde en JSON válido.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text) as CulturalData;
      setCachedData(countryName, data);
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
};

export const fetchGlobalData = async (): Promise<CulturalData | null> => {
  if (preloadedData['Global Issue']) {
    console.log(`Loaded Global Issue from preloaded data.`);
    return preloadedData['Global Issue'];
  }

  const cached = getCachedData('Global Issue');
  if (cached) return cached;

  try {
    const prompt = `
      ${getBasePrompt("PANORAMA GLOBAL FEBRERO 2026")}

      IMPORTANTE:
      - 'countryName' debe ser "Global Issue".
      - 'summary': Resumen del estado de la música mundial hoy en 2026.
      - 'cultAlbums': Selecciona 3 álbumes INTERNACIONALES aclamados por la crítica en 2025/2026.
      - 'forecast': Tendencia global masiva underground 2026 (ej: "Post-AI Folk", "Neuro-Funk").
        * forecastReleases: 4 discos globales clave de 2026 que definen el sonido mundial actual.
      - 'editorialChapters':
         1. "State of the Union 2026": Análisis geopolítico-musical.
         2. "The Algo-Rhythm 2.0": Análisis de industria post-streaming.
         3. "Forecast 2027": Hacia dónde va el sonido global.
      
      Responde en JSON válido.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text) as CulturalData;
      setCachedData('Global Issue', data);
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
};
