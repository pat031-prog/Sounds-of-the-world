import {
  CompilationPick,
  CulturalData,
  EditorialBriefingItem,
  EditorialFeatureAccessCard,
  EditorialIssueMapSection,
  EditorialPlaylistBundle,
  EditorialSignalCluster,
  HubChartEntry,
} from '../types';
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

export const hubNavSections = [
  { id: 'essays', label: 'Essays' },
  { id: 'cult-canon', label: 'Cult Canon' },
  { id: 'new-signal', label: 'New Signal' },
  { id: 'playlist-matrix', label: 'Playlist Matrix' },
  { id: 'signal-lexicon', label: 'Signal Lexicon' },
  { id: 'countries', label: 'Countries' },
  { id: 'briefing', label: 'Briefing' },
  { id: 'compilations', label: 'Compilations' },
];

export const editorialIssueMapSections: EditorialIssueMapSection[] = [
  {
    id: 'global-issue',
    label: 'Global Issue',
    target: 'global-issue',
    context: 'hub',
    description: 'Abrir la edicion madre con chapters, canon, radar y accesos globales.',
  },
  {
    id: 'essays',
    label: 'Essays',
    target: 'essays',
    context: 'hub',
    description: 'Ensayos largos con research notes y tono editorial curado.',
  },
  {
    id: 'countries',
    label: 'Countries',
    target: 'countries',
    context: 'hub',
    description: 'Entrar a los dossiers nacionales sin depender del mapa.',
  },
  {
    id: 'cult-canon',
    label: 'Cult Canon',
    target: 'cult-canon',
    context: 'hub',
    description: 'Archivo de discos de culto con tapas reales y lineas editoriales.',
  },
  {
    id: 'new-signal',
    label: 'New Signal',
    target: 'new-signal',
    context: 'hub',
    description: 'Chart editorial de releases 2024-2026 en clave alternativa.',
  },
  {
    id: 'playlist-matrix',
    label: 'Playlists',
    target: 'playlist-matrix',
    context: 'hub',
    description: 'Bundles multi-plataforma para entrar por Spotify, Apple o YouTube.',
  },
  {
    id: 'briefing',
    label: 'Briefing',
    target: 'briefing',
    context: 'hub',
    description: 'Despachos de prensa y notas para seguir el pulso real del presente.',
  },
  {
    id: 'compilations',
    label: 'Compilations',
    target: 'compilations',
    context: 'hub',
    description: 'Compilaciones, listas y recomendaciones externas para ampliar el archivo.',
  },
  {
    id: 'cover',
    label: 'Cover',
    target: 'page-0',
    context: 'global',
    description: 'Volver a la portada global y la lectura principal del numero.',
  },
  {
    id: 'chapters',
    label: 'Chapters',
    target: 'page-1',
    context: 'global',
    description: 'Saltar a los tres capitulos curados del Global Issue.',
  },
  {
    id: 'canon',
    label: 'Cult Canon',
    target: 'page-2',
    context: 'global',
    description: 'Ir al preview expandido del canon global.',
  },
  {
    id: 'radar',
    label: 'Radar',
    target: 'page-3',
    context: 'global',
    description: 'Abrir el radar con new signal, playlists y signals destacados.',
  },
  {
    id: 'essays',
    label: 'Essays',
    target: 'essays',
    context: 'global',
    description: 'Volver al hub y entrar directo al grid de ensayos.',
  },
  {
    id: 'briefing',
    label: 'Briefing',
    target: 'briefing',
    context: 'global',
    description: 'Abrir el research briefing desde el numero global.',
  },
  {
    id: 'global-issue',
    label: 'Global Issue',
    target: 'global-issue',
    context: 'country',
    description: 'Regresar a la edicion madre y sus señales transnacionales.',
  },
  {
    id: 'essays',
    label: 'Essays',
    target: 'essays',
    context: 'country',
    description: 'Abrir los ensayos especiales sin salir del ecosistema editorial.',
  },
  {
    id: 'playlist-matrix',
    label: 'Playlists',
    target: 'playlist-matrix',
    context: 'country',
    description: 'Ir a la matriz global de playlists y bundles editoriales.',
  },
  {
    id: 'compilations',
    label: 'Recommendations',
    target: 'compilations',
    context: 'country',
    description: 'Saltar a compilaciones y recomendaciones externas verificadas.',
  },
  {
    id: 'cult-albums',
    label: 'Cult Albums',
    target: 'page-2',
    context: 'country',
    description: 'Ir al bloque local de discos de culto y mixtape editorial.',
  },
  {
    id: 'forecast',
    label: 'Forecast',
    target: 'page-3',
    context: 'country',
    description: 'Abrir radar local con releases nuevos, artists y future sounds.',
  },
  {
    id: 'curated-reads',
    label: 'Curated Reads',
    target: 'page-3',
    context: 'country',
    description: 'Acceder a lecturas curadas y atajos de research desde el pais.',
  },
];

export const editorialFeatureAccessCards: EditorialFeatureAccessCard[] = [
  {
    id: 'playlist-matrix',
    label: 'Playlist Matrix',
    description: 'Bundles editoriales para entrar por plataforma sin quedar presos del hub.',
    target: 'playlist-matrix',
    context: 'global',
  },
  {
    id: 'signal-lexicon',
    label: 'Signal Lexicon',
    description: 'Taxonomias para leer subgeneros, presiones y mutaciones del momento.',
    target: 'signal-lexicon',
    context: 'global',
  },
  {
    id: 'briefing',
    label: 'Research Briefing',
    description: 'Notas y field reports para seguir el presente con fuentes reales.',
    target: 'briefing',
    context: 'global',
  },
  {
    id: 'compilations',
    label: 'Compilations',
    description: 'Listas externas y recomendaciones para seguir abriendo archivo.',
    target: 'compilations',
    context: 'global',
  },
  {
    id: 'playlist-matrix',
    label: 'Playlist Matrix',
    description: 'La matriz global de playlists para cruzar el dossier local con el pulso general.',
    target: 'playlist-matrix',
    context: 'country',
  },
  {
    id: 'briefing',
    label: 'Research Briefing',
    description: 'Ir al briefing global para contrastar la escena local con el radar editorial.',
    target: 'briefing',
    context: 'country',
  },
  {
    id: 'compilations',
    label: 'Compilations',
    description: 'Abrir compilaciones y recomendaciones que amplian la escucha fuera del mapa.',
    target: 'compilations',
    context: 'country',
  },
  {
    id: 'signal-lexicon',
    label: 'Signal Lexicon',
    description: 'Cruzar este pais con las señales globales que ordenan el issue.',
    target: 'signal-lexicon',
    context: 'country',
  },
];

const RA_CANON_URL = 'https://ra.co/features/4482';
const CTM_URL = 'https://ra.co/events/2346501';
const BANDCAMP_JAN_URL =
  'https://daily.bandcamp.com/best-electronic/the-best-electronic-music-on-bandcamp-january-2026';
const BANDCAMP_FEB_URL =
  'https://daily.bandcamp.com/best-electronic/the-best-electronic-music-on-bandcamp-february-2026';
const BANDCAMP_EXPERIMENTAL_URL =
  'https://daily.bandcamp.com/best-experimental/the-best-experimental-music-on-bandcamp-february-2026';
const BANDCAMP_RADIO_URL =
  'https://mixmag.net/amp/bandcamp-launches-new-weekly-radio-show-electronic-music';
const MIXMAG_AI_URL =
  'https://mixmag.net/read/apple-music-ai-meta-data-information-listeners-music-generated-news';
const MIXMAG_AUTOMIX_URL =
  'https://mixmag.net/read/apple-music-launches-new-automix-feature-that-blends-tracks-together-using-ai-tech';
const PITCHFORK_ELECTRONIC_2025_URL =
  'https://pitchfork.com/features/lists-and-guides/best-electronic-albums-2025/';
const PITCHFORK_BEST_2025_URL =
  'https://pitchfork.com/features/lists-and-guides/best-albums-2025/';
const PITCHFORK_KLAY_URL =
  'https://pitchfork.com/news/warner-music-group-signs-licensing-deal-with-ai-music-company-klay/';

const appleArt = (url: string) =>
  url
    .replace('/100x100bb.jpg', '/600x600bb.jpg')
    .replace('/100x100bb.png', '/600x600bb.png');

export const globalPanoramaDispatch = {
  dateLabel: 'April 9, 2026',
  summary:
    'El cambio mas visible del ciclo no es un genero nuevo sino una nueva relacion con la mediacion. Resident Advisor cerro 2025 reabriendo el canon de 2000-25; Pitchfork paso el ano destacando discos donde la electronica se volvio mas porosa, lenta y corporal; y Bandcamp Daily arranco 2026 trazando un mapa donde el minimalismo para soundsystems, la deconstructed club emotiva y el techno brutalista ya conviven sin pedir un centro unico. Al mismo tiempo, Mixmag reporto que Apple Music empezo a etiquetar usos de IA en la metadata y que Bandcamp respondio reforzando la curaduria humana con un nuevo programa semanal de radio electronica. El presente alternativo ya no persigue pureza ni invisibilidad: prefiere borde, contexto y friccion. El feed sigue corriendo, pero el criterio vuelve a tener cuerpo.',
  researchPulse: ['Canon repair', 'Low-air rhythm', 'Human curation', 'AI transparency'],
  sources: [
    { label: 'Resident Advisor // Canon', url: RA_CANON_URL },
    { label: 'Pitchfork // Electronic 2025', url: PITCHFORK_ELECTRONIC_2025_URL },
    { label: 'Bandcamp Daily // Feb 2026', url: BANDCAMP_FEB_URL },
    { label: 'Mixmag // AI Tags', url: MIXMAG_AI_URL },
    { label: 'Mixmag // Bandcamp Radio', url: BANDCAMP_RADIO_URL },
  ],
};

export const editorialBriefing: EditorialBriefingItem[] = [
  {
    title: 'The Best Electronic Records of 2000-25',
    source: 'Resident Advisor',
    url: RA_CANON_URL,
    blurb:
      'Un archivo util para medir como cambia el presente cuando el canon se escucha como geologia y no como museo.',
    publishedAt: 'Dec 11, 2025',
    tag: 'Canon',
  },
  {
    title: 'CTM x Resident Advisor: Rethinking Music Ecosystems',
    source: 'Resident Advisor / CTM',
    url: CTM_URL,
    blurb:
      'La escena de club deja de mirarse como nightlife y empieza a pensarse como trabajo, cuidado e infraestructura.',
    publishedAt: 'Jan 30, 2026',
    tag: 'Infrastructure',
  },
  {
    title: 'Major Labels Sign Licensing Deals With AI Music Company Klay',
    source: 'Pitchfork',
    url: PITCHFORK_KLAY_URL,
    blurb:
      'La batalla por la legitimidad de la IA musical ya se juega en acuerdos de licencia, no en manifiestos.',
    publishedAt: 'Nov 20, 2025',
    tag: 'AI Labor',
  },
  {
    title: 'Apple Music to inform listeners if music on platform is AI-generated',
    source: 'Mixmag',
    url: MIXMAG_AI_URL,
    blurb:
      'La metadata se vuelve un campo politico: ya no solo describe catalogo, ahora administra sospecha y confianza.',
    publishedAt: 'Mar 9, 2026',
    tag: 'Policy',
  },
  {
    title: 'Bandcamp launches new weekly radio show for electronic music',
    source: 'Mixmag',
    url: BANDCAMP_RADIO_URL,
    blurb:
      'La curaduria humana regresa como servicio esencial justo cuando el feed agota su promesa de descubrimiento.',
    publishedAt: 'Mar 27, 2026',
    tag: 'Radio',
  },
  {
    title: 'The Best Electronic Music on Bandcamp, February 2026',
    source: 'Bandcamp Daily',
    url: BANDCAMP_FEB_URL,
    blurb:
      'Un parte de campo donde Barcelona, Rotterdam, Londres y Philly comparten la misma electricidad torpe y futurista.',
    publishedAt: 'Mar 4, 2026',
    tag: 'Field Notes',
  },
];

export const compilationPicks: CompilationPick[] = [
  {
    title: 'The 30 Best Electronic Albums of 2025',
    curator: 'Pitchfork Staff',
    source: 'Pitchfork',
    url: PITCHFORK_ELECTRONIC_2025_URL,
    note:
      'Un radar para medir que parte del ano sobrevivio al algoritmo y siguio sonando peligrosa meses despues.',
    territory: 'Global',
  },
  {
    title: 'The 50 Best Albums of 2025',
    curator: 'Pitchfork Staff',
    source: 'Pitchfork',
    url: PITCHFORK_BEST_2025_URL,
    note:
      'Sirve para abrir la revista hacia cruces entre avant-pop, ambient, mutacion vocal y cancion deformada.',
    territory: 'Cross-genre',
  },
  {
    title: 'The Best Electronic Music on Bandcamp, January 2026',
    curator: 'Joe Muggs',
    source: 'Bandcamp Daily',
    url: BANDCAMP_JAN_URL,
    note:
      'Ideal para seguir microescenas y sellos pequenos antes de que el consenso les pase por encima.',
    territory: 'Translocal',
  },
  {
    title: 'The Best Experimental Music on Bandcamp, February 2026',
    curator: 'Bandcamp Daily',
    source: 'Bandcamp Daily',
    url: BANDCAMP_EXPERIMENTAL_URL,
    note:
      'Empuja la escucha mas alla del club estricto y encuentra metodo donde la plataforma solo veria rareza.',
    territory: 'Experimental',
  },
];

export const cultCanonChart: HubChartEntry[] = [
  { rank: 1, chart: 'Cult Canon // 20', artist: 'Burial', albumName: 'Untrue', year: '2007', label: 'Hyperdub', blurb: 'Dubstep convertido en fantasma urbano, lluvia digital y memoria danada.', whyItMatters: 'Sigue siendo el molde secreto de toda electronica que prefiere cicatriz a pulido.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9d/0f/1c/9d0f1c2b-2fae-d8ac-3920-ce9ec5bc85b5/7982.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AUntrue%20artist%3ABurial', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 2, chart: 'Cult Canon // 20', artist: 'The Knife', albumName: 'Silent Shout', year: '2006', label: 'Rabid', blurb: 'Synth-pop glacial, erotico y politicamente torcido.', whyItMatters: 'Su diseno de frio emocional sigue filtrandose en el pop mutante y el club raro.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/dd/21/98/dd2198d3-7d38-f3ee-4801-efecfd25b024/5060236630209_1.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ASilent%20Shout%20artist%3AThe%20Knife', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Sweden' },
  { rank: 3, chart: 'Cult Canon // 20', artist: 'Kode9 & The Spaceape', albumName: 'Memories of the Future', year: '2006', label: 'Hyperdub', blurb: 'Post-dubstep como ciencia ficcion negra y voz de ruina metropolitana.', whyItMatters: 'Anudo teoria, soundsystem y futurismo oscuro antes de que la curaduria fuera un negocio.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f1/3e/2e/f13e2e1f-895f-5d17-26c4-af00c2261e14/7980.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AMemories%20of%20the%20Future%20artist%3AKode9%20%26%20The%20Spaceape', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 4, chart: 'Cult Canon // 20', artist: 'Nicolas Jaar', albumName: 'Space Is Only Noise', year: '2011', label: 'Circus Company', blurb: 'Minimalismo sensual con humo de club y arquitectura de camara.', whyItMatters: 'Mostro que la intimidad tambien podia tener peso de soundsystem.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/83/f0/15/83f01563-ae6b-2193-36f4-1e0a68aeeda7/827170120822_CCCDArtwork.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ASpace%20Is%20Only%20Noise%20artist%3ANicolas%20Jaar', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US / Chile' },
  { rank: 5, chart: 'Cult Canon // 20', artist: 'James Blake', albumName: 'James Blake', year: '2011', label: 'Atlas', blurb: 'Subgrave sentimental y cancion desfigurada por el espacio digital.', whyItMatters: 'Abre la ruta que une soul roto, bass music y vulnerabilidad procesada.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c4/6b/7c/c46b7cd6-8514-2098-7efa-83790c3d4879/00602527614854.rgb.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AJames%20Blake%20artist%3AJames%20Blake', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 6, chart: 'Cult Canon // 20', artist: 'Oneohtrix Point Never', albumName: 'R Plus Seven', year: '2013', label: 'Warp', blurb: 'Render sacro, interfaz y new age partido en miles de ventanas.', whyItMatters: 'Convirtio la estetica de software en un lenguaje emocional completo.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/73/86/a9/7386a990-adbb-4026-ad49-f93b0594a4e9/WARP240_Packshot_1400.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AR%20Plus%20Seven%20artist%3AOneohtrix%20Point%20Never', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US' },
  { rank: 7, chart: 'Cult Canon // 20', artist: 'Autechre', albumName: 'Exai', year: '2013', label: 'Warp', blurb: 'Labirinto ritmico donde cada golpe parece redisenar el suelo.', whyItMatters: 'Sigue siendo una escuela para toda electronica que piensa la forma como problema abierto.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music/v4/3e/ff/bf/3effbfda-5b09-1c77-a029-fb57f577251c/WARPCD234_Packshot_1400.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AExai%20artist%3AAutechre', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 8, chart: 'Cult Canon // 20', artist: 'Holly Herndon', albumName: 'Platform', year: '2015', label: '4AD', blurb: 'Voces de red, computacion social y coral digital sin ingenuidad.', whyItMatters: 'Anticipo mejor que nadie la discusion actual sobre cuerpo, IA y trabajo de datos.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ed/98/eaed9899-da6b-c75d-9307-815b9cfadd21/652637350357.png/100x100bb.png'), coverSourceUrl: 'https://open.spotify.com/search/album%3APlatform%20artist%3AHolly%20Herndon', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US / Berlin' },
  { rank: 9, chart: 'Cult Canon // 20', artist: 'Arca', albumName: 'Mutant', year: '2015', label: 'Mute', blurb: 'Corazon melodico y violencia sintetica en la misma herida.', whyItMatters: 'Reescribio la relacion entre pop, dislocacion corporal y diseno extremo de sonido.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/ff/70/0d/ff700d2c-7a0a-453d-0762-d649af6bf771/dj.imqowmqx.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AMutant%20artist%3AArca', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Venezuela / Global' },
  { rank: 10, chart: 'Cult Canon // 20', artist: 'SOPHIE', albumName: "OIL OF EVERY PEARL'S UN-INSIDES", year: '2018', label: 'Transgressive', blurb: 'Plastico, extasis y vulnerabilidad llevados al limite del pop.', whyItMatters: 'Partio en dos la idea de artificio y le devolvio al futurismo una carga afectiva brutal.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/86/72/30/86723032-da83-af74-0888-7cb7588130d6/0044003196520_Cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/oil-of-every-pearls-un-insides/1709023350?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 11, chart: 'Cult Canon // 20', artist: 'Against All Logic', albumName: '2012-2017', year: '2018', label: 'Other People', blurb: 'House de sample roto con groove de almacen abierto de madrugada.', whyItMatters: 'Demostro que el collage podia ser popular y cerebral sin bajar la presion.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/1e/18/8d1e1896-902b-3b50-2163-a01e097daece/193436434744_AAL.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3A2012-2017%20artist%3AAgainst%20All%20Logic', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US / Chile' },
  { rank: 12, chart: 'Cult Canon // 20', artist: 'Yves Tumor', albumName: 'Safe in the Hands of Love', year: '2018', label: 'Warp', blurb: 'Noise erotico, cancion rota y glamour de fin de siglo digital.', whyItMatters: 'Abre una ruta donde rock, ambient y club dejan de obedecer categorias estables.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/5f/d9/6e/5fd96ec0-4bc7-6892-3801-82c7c848118d/0801061029333.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ASafe%20in%20the%20Hands%20of%20Love%20artist%3AYves%20Tumor', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US' },
  { rank: 13, chart: 'Cult Canon // 20', artist: 'Tirzah', albumName: 'Devotion', year: '2018', label: 'Domino', blurb: 'R&B desnudo hasta dejar solo piel, espacio y temblor.', whyItMatters: 'Reivindico la cancion minima como forma de intensidad adulta.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cc/f7/42/ccf742e6-d991-8f8d-7a70-8b5c1e53c1b6/887828039463.png/100x100bb.png'), coverSourceUrl: 'https://open.spotify.com/search/album%3ADevotion%20artist%3ATirzah', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 14, chart: 'Cult Canon', artist: 'El Mató a un Policía Motorizado', albumName: 'La Dinastía Scorpio', year: '2012', label: 'Laptra', blurb: 'Guitarras expansivas y melodías rotas que definieron el indie latinoamericano.', whyItMatters: 'Su sonido saturado y coros de estadio crearon el nuevo himno del underground.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/a6/52/b6/a652b6f6-603c-0b73-3b4d-157b8fe06359/886444690355.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ALa%20Dinast%C3%ADa%20Scorpio%20artist%3AEl%20Mat%C3%B3%20a%20un%20Polic%C3%ADa%20Motorizado', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 15, chart: 'Cult Canon', artist: 'Babasónicos', albumName: 'Jessico', year: '2001', label: 'PopArt', blurb: 'Descaro pop, beats digitales y rock mutante en la crisis del 2001.', whyItMatters: 'Salvaron al rock nacional bailando sobre sus ruinas con total elegancia.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/98/51/85/98518582-a603-50c3-6717-8e18dbcca4c2/dj.bukbslhw.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AJessico%20artist%3ABabas%C3%B3nicos', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 16, chart: 'Cult Canon', artist: 'Suárez', albumName: 'Horrible', year: '1995', label: 'Feliz Año Nuevo', blurb: 'Lo-fi furioso y vanguardia cancionera inalcanzable.', whyItMatters: 'Rosario Bléfari inscribió un mapa emocional independiente que miles siguen intentando copiar.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music30/v4/e6/6d/0d/e66d0dc5-b285-2549-4506-e861ffa31dd8/7798120280039.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AHorrible%20artist%3ASu%C3%A1rez', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 17, chart: 'Cult Canon', artist: 'Los Natas', albumName: 'Corsario Negro', year: '2002', label: 'Ouh My God', blurb: 'El stoner riffero de las pampas que fue reverenciado en todo el mundo.', whyItMatters: 'Probó que el rock pesado argentino podía codearse con desiertos ajenos con peso propio.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/03/da/9f03da45-6699-0d13-1f9d-e040851501a8/dj.iepdzqpi.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ACorsario%20Negro%20artist%3ALos%20Natas', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 18, chart: 'Cult Canon', artist: 'Joy Division', albumName: 'Unknown Pleasures', year: '1979', label: 'Factory', blurb: 'Líneas de bajo glaciales y percusiones que suenan en espacios inmensos.', whyItMatters: 'El nacimiento definitivo de la oscuridad gótica y post-punk en la estética musical.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/13/90/c0/1390c072-4249-3739-7b3d-fd73ee4a5698/825646562831.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AUnknown%20Pleasures%20artist%3AJoy%20Division', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK' },
  { rank: 19, chart: 'Cult Canon', artist: 'The Fall', albumName: 'Hex Enduction Hour', year: '1982', label: 'Kamera', blurb: 'Repetición hipnótica, dobles baterías y un frontman escupiendo genialidad obtusa.', whyItMatters: 'Es el test de pureza post-punk en su máxima expresión beligerante.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c3/0f/c6/c30fc6e7-038c-a1ba-212d-dbccc53a2072/196292305537.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AHex%20Enduction%20Hour%20artist%3AThe%20Fall', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK' },
  { rank: 20, chart: 'Cult Canon', artist: 'Dean Blunt', albumName: 'Black Metal', year: '2014', label: 'Rough Trade', blurb: 'Avant-pop fumado, guitarras indie ahogadas en delay y provocación sutil.', whyItMatters: 'Una clase maestra de cómo sonar esquivo y vulnerable en el circuito de arte underground.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/be/81/dc/be81dcd3-1579-2ef5-bccc-9e6eefaa6c5b/883870074218.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ABlack%20Metal%20artist%3ADean%20Blunt', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK' },
  { rank: 21, chart: 'Cult Canon', artist: 'Death Grips', albumName: 'The Money Store', year: '2012', label: 'Epic', blurb: 'Hip-hop abrasivo, samples dislocados y agresión cibernética en máxima potencia.', whyItMatters: 'Convirtió el noise-rap en un culto de internet inamovible y peligroso.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music/d5/2f/9a/mzi.xmqjvgby.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AThe%20Money%20Store%20artist%3ADeath%20Grips', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
  { rank: 22, chart: 'Cult Canon', artist: 'Slint', albumName: 'Spiderland', year: '1991', label: 'Touch and Go', blurb: 'Arpegios matemáticos y tensión post-hardcore que se desvanece en gritos.', whyItMatters: 'El disco fundacional de prácticamente todo el post-rock y math-rock moderno.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2d/62/b7/2d62b77d-9518-b5f1-7212-5542597953c2/cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ASpiderland%20artist%3ASlint', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
  { rank: 23, chart: 'Cult Canon', artist: 'Duster', albumName: 'Stratosphere', year: '1998', label: 'Up Records', blurb: 'Canciones grabadas en 4 tracks, ahogadas en estática, humo cósmico y depresión de cuarto.', whyItMatters: 'Reinventaron el slowcore y se volvieron accidentalmente de culto para las juventudes de TikTok.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/4e/87/0c/4e870c4a-f447-2c91-5b7a-53eabb2eb9a1/cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AStratosphere%20artist%3ADuster', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
  { rank: 24, chart: 'Cult Canon', artist: 'J Dilla', albumName: 'Donuts', year: '2006', label: 'Stones Throw', blurb: 'El testamento definitivo del sampling como instrumento narrativo inigualable.', whyItMatters: 'Marcó irreparablemente a generaciones enteras de productores de lo-fi y hip-hop abstracto.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/63/d3/c5/63d3c537-ac30-86e7-8e69-8a03a5346209/792.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ADonuts%20artist%3AJ%20Dilla', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
];

export const newSignalChart: HubChartEntry[] = [
  { rank: 1, chart: 'New Signal // 20', artist: 'Purelink', albumName: 'Faith', year: '2025', label: 'Peak Oil', blurb: 'Ambient dub y suspension emocional con tacto de sistema de sonido cansado.', whyItMatters: 'Resume el giro hacia una electronica lenta, porosa y profundamente fisica.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b6/2f/70/b62f7017-9a9c-5479-894a-ee378e45cb98/199350091803.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AFaith%20artist%3APurelink', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'up' },
  { rank: 2, chart: 'New Signal // 20', artist: 'dj haram', albumName: 'Beside Myself', year: '2025', label: 'Hyperdub', blurb: 'Club pressure, rap fracture y duelo tratado como arquitectura ruidosa.', whyItMatters: 'Une politica, cuerpo y collage con una precision que no pide permiso.', coverImageUrl: 'https://f4.bcbits.com/img/a3542957834_5.jpg', coverSourceUrl: 'https://open.spotify.com/search/album%3ABeside%20Myself%20artist%3Adj%20haram', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'new' },
  { rank: 3, chart: 'New Signal // 20', artist: 'Anthony Naples', albumName: 'Scanners', year: '2025', label: 'ANS', blurb: 'House mental con aire industrial y detalle de microscopio.', whyItMatters: 'Marca como suena la madurez de club cuando abandona la necesidad de demostrarlo todo.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/13/5a/dc/135adc13-8c7f-408f-5685-942c3f3de80b/4251804198820_3000.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AScanners%20artist%3AAnthony%20Naples', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'up' },
  { rank: 4, chart: 'New Signal // 20', artist: 'aya', albumName: 'hexed!', year: '2025', label: 'Hyperdub', blurb: 'Cancion mutante, diarismo caustico y rave interior en estado de interferencia.', whyItMatters: 'Es de los discos que mejor entienden como se siente la mente despues del feed.', coverImageUrl: 'https://f4.bcbits.com/img/a2857872500_5.jpg', coverSourceUrl: 'https://open.spotify.com/search/album%3Ahexed!%20artist%3Aaya', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'UK', trend: 'new' },
  { rank: 5, chart: 'New Signal // 20', artist: 'Eiko Ishibashi', albumName: 'Antigone', year: '2025', label: 'Drag City', blurb: 'Cancion oblicua, textura politizada y paisaje urbano bajo amenaza.', whyItMatters: 'Convierte la delicadeza en una tecnologia de lectura del desastre.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0a/a9/6a/0aa96ac7-6880-dfdd-bcf8-2e791c75f2a4/781484094425.png/100x100bb.png'), coverSourceUrl: 'https://open.spotify.com/search/album%3AAntigone%20artist%3AEiko%20Ishibashi', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Japan', trend: 'up' },
  { rank: 6, chart: 'New Signal // 20', artist: 'Ichiko Aoba', albumName: 'Luminescent Creatures', year: '2025', label: 'hermine', blurb: 'Camara folk, oceanografia digital y miniaturas que parecen respirar solas.', whyItMatters: 'Demuestra que la quietud tambien puede sonar futurista.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/87/5b/5b/875b5b86-30f3-d50a-de93-5bb5ad4cb141/49449.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ALuminescent%20Creatures%20artist%3AIchiko%20Aoba', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Japan', trend: 'steady' },
  { rank: 7, chart: 'New Signal // 20', artist: 'Nick Leon', albumName: 'A Tropical Entropy', year: '2025', label: 'TraTraTrax', blurb: 'Heatwave digital, dembow mutante y caos de ciudad pegado al cuerpo.', whyItMatters: 'Mueve el centro del club hacia un tropico sintetico sin exotismo postal.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/34/ac/38/34ac38f0-4e8d-3948-e350-63b131709235/4062548116038.png/100x100bb.png'), coverSourceUrl: 'https://open.spotify.com/search/album%3AA%20Tropical%20Entropy%20artist%3ANick%20Leon', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US / Colombia', trend: 'up' },
  { rank: 8, chart: 'New Signal // 20', artist: 'FKA twigs', albumName: 'EUSEXUA', year: '2025', label: 'Young', blurb: 'Pop ritual, diseno corporal y deseo producido como interfaz viva.', whyItMatters: 'Lleva la idea de mutacion pop a un terreno mas club, mas esoterico y mas fisico.', coverImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ae/c8/24/aec824cf-8748-fb40-12c8-b7fb69a5ffe3/075679634382.jpg/600x600bb.jpg', coverSourceUrl: 'https://open.spotify.com/search/album%3AEUSEXUA%20artist%3AFKA%20twigs', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK', trend: 'new' },
  { rank: 9, chart: 'New Signal // 20', artist: 'James Holden & Waclaw Zimpel', albumName: 'The Universe Will Take Care Of You', year: '2025', label: 'Border Community', blurb: 'Improvisacion cosmica y trance pastoral sin una gota de nostalgia.', whyItMatters: 'Devuelve expansion a la escucha justo cuando la cultura digital la comprime.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4a/e8/15/4ae8153b-e226-5bf2-857d-0ca71f1305cb/5051083216234_cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AThe%20Universe%20Will%20Take%20Care%20Of%20You%20artist%3AJames%20Holden%20%26%20Waclaw%20Zimpel', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'UK / Poland', trend: 'steady' },
  { rank: 10, chart: 'New Signal // 20', artist: 'Barker', albumName: 'Stochastic Drift', year: '2025', label: 'Smalltown Supersound', blurb: 'Percusion sin bombo tirano y armonia como niebla activa.', whyItMatters: 'Confirma que el club puede seguir avanzando incluso cuando le quitan el suelo conocido.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7d/6d/49/7d6d4973-5ed9-aa5f-8d7d-58c78f73476b/51827.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AStochastic%20Drift%20artist%3ABarker', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'Germany', trend: 'steady' },
  { rank: 11, chart: 'New Signal // 20', artist: 'Shinichi Atobe', albumName: 'Discipline', year: '2025', label: 'DDS', blurb: 'House abstracto con pulso de trance seco y melancolia de pasillo vacio.', whyItMatters: 'Prueba que la reserva puede ser mas intensa que el exceso.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/e5/13/f9e513c1-60f5-ac62-927c-a163e2ab25ba/5060165488223.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ADiscipline%20artist%3AShinichi%20Atobe', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'Japan', trend: 'up' },
  { rank: 12, chart: 'New Signal // 20', artist: 'Lindstrom', albumName: 'Sirius Syntoms', year: '2025', label: 'Feedelity', blurb: 'Cosmic disco con dislexia sintetica y humor de laboratorio.', whyItMatters: 'Recuerda que el futurismo tambien puede tener swing, color y una rareza amable.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ea/fa/b3/eafab365-0660-9bea-aafe-f6180cd735ac/199350011306.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ASirius%20Syntoms%20artist%3ALindstrom', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'Norway', trend: 'steady' },
  { rank: 13, chart: 'New Signal // 20', artist: 'Elmoe', albumName: 'Battle Zone', year: '2025', label: 'Planet Mu', blurb: 'Footwork y pressure music con nervio de arcade roto.', whyItMatters: 'Mantiene vivo el filo de club sin convertirlo en cita historica vacia.', coverImageUrl: 'https://f4.bcbits.com/img/a0183989848_5.jpg', coverSourceUrl: 'https://open.spotify.com/search/album%3ABattle%20Zone%20artist%3AElmoe', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'new' },
  { rank: 14, chart: 'New Signal', artist: 'Mujer Cebra', albumName: 'Clase B', year: '2023', label: 'BPM', blurb: 'La melancolía generacional chocando de frente contra un pedal de distorsión furioso.', whyItMatters: 'Una lanza post-punk que atraviesa el corazón del indie argentino moderno.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e8/fb/83/e8fb83bf-3535-89d6-8181-079b7e2b64f7/196871497213.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AClase%20B%20artist%3AMujer%20Cebra', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 15, chart: 'New Signal', artist: 'Dum Chica', albumName: 'Dum', year: '2022', label: 'K-Industria', blurb: 'Bajo y bombo tribal seco con actitud pogueable incansable.', whyItMatters: 'Reducieron el rock a su esquema más animal e imparable devolviendo frescura no-wave.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/03/36/f0/0336f04d-d44a-c79e-ea60-dfcf68e769cb/0.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ADum%20artist%3ADum%20Chica', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 16, chart: 'New Signal', artist: 'Buenos Vampiros', albumName: 'Destruya!', year: '2022', label: 'Casa del Puente', blurb: 'Pasión oscura, chorus marcados y sangre fresca de guitarra costera.', whyItMatters: 'Reflejan cómo las juventudes oscuras reviven el post-punk y el dark wave en el Río de la Plata.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/b4/8c/c8/b48cc8e4-7af4-c0d3-bd26-4e947d49e435/0.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ADestruya!%20artist%3ABuenos%20Vampiros', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 17, chart: 'New Signal', artist: 'JPEGMAFIA & Danny Brown', albumName: 'SCARING THE HOES', year: '2023', label: 'AWAL', blurb: 'Colisión caótica de samples demenciales y rimas vociferadas.', whyItMatters: 'La vanguardia de la vanguardia: rap hiper-rítmico sin una gota de compostura.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ca/84/c1/ca84c17b-d242-2d17-91a5-3a055ff006dd/843564757530.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ASCARING%20THE%20HOES%20artist%3AJPEGMAFIA%20%26%20Danny%20Brown', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
  { rank: 18, chart: 'New Signal', artist: 'Armand Hammer', albumName: 'We Buy Diabetic Test Strips', year: '2023', label: 'Fat Possum', blurb: 'Rap abstracto denso con rimas cargadas de realismo sucio y misterio.', whyItMatters: 'El dúo sigue redefiniendo cómo debe sentirse y escribirse el hip hop underground actual.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/55/dc/1f/55dc1fda-c5ec-e5d2-ff3d-51a82e987c6b/767981180148.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AWe%20Buy%20Diabetic%20Test%20Strips%20artist%3AArmand%20Hammer', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
  { rank: 19, chart: 'New Signal', artist: 'Yves Tumor', albumName: 'Praise a Lord Who Chews but Which Does Not Consume...', year: '2023', label: 'Warp', blurb: 'Glam y disonancia post-punk trenzadas en coros adictivos pop.', whyItMatters: 'Consolidó a la figura de rockstar camaleónico definitiva de esta década de crisis.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d3/07/9b/d3079b81-ed31-0cc4-a4cc-1da59dc9f053/5056614703887.png/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3APraise%20a%20Lord%20Who%20Chews%20but%20Which%20Does%20Not%20Consume...%20artist%3AYves%20Tumor', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
  { rank: 20, chart: 'New Signal', artist: 'Wednesday', albumName: 'Rat Saw God', year: '2023', label: 'Dead Oceans', blurb: 'Historias de decadencia rural con shoegaze estridente y lamento country.', whyItMatters: 'Cuentos increíbles de americana trágica envueltos en fuzz demoledor.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/4a/01/cc/4a01cc56-2eab-c371-d8ec-b63e8a4a589e/656605160849.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ARat%20Saw%20God%20artist%3AWednesday', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US' },
  { rank: 21, chart: 'New Signal', artist: 'Black Midi', albumName: 'Hellfire', year: '2022', label: 'Rough Trade', blurb: 'Música teatral, frenética y jazz-punk cabaretera con compases intratables.', whyItMatters: 'Exigieron una devoción casi obsesiva hacia lo virtuoso en la era del minimalismo.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8e/3e/dc/8e3edcdb-2628-97dd-d996-03f47e3077e6/191404128534.png/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AHellfire%20artist%3ABlack%20Midi', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK' },
  { rank: 22, chart: 'New Signal', artist: 'Black Country, New Road', albumName: 'Ants From Up There', year: '2022', label: 'Ninja Tune', blurb: 'Música orquestal post-punk devoradora de ansiedades y baladas eternas.', whyItMatters: 'Marcó a la pata melancólica y cinematográfica más potente de la generación británica.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8f/6a/c6/8f6ac6c6-5bcd-fa25-94f2-fd9922725215/5054429151442.png/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AAnts%20From%20Up%20There%20artist%3ABlack%20Country%2C%20New%20Road', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK' },
  { rank: 23, chart: 'New Signal', artist: 'Squid', albumName: 'O Monolith', year: '2023', label: 'Warp', blurb: 'Krautrock dislocado, bronces ansiosos y narraciones crípticas.', whyItMatters: 'Llevaron el nerviosismo rítmico UK post-brexit todavía un paso más hacia la rareza prog.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9d/b1/d9/9db1d9ac-519e-7fb4-ceab-a1bb762e7bd4/5056614704044.png/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3AO%20Monolith%20artist%3ASquid', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK' },
  { rank: 24, chart: 'New Signal', artist: 'Fontaines D.C.', albumName: 'Romance', year: '2024', label: 'XL', blurb: 'El post-punk dublinense madurando hacia un estadio de cinismo brillante y rosa.', whyItMatters: 'Comprueban que se puede crecer y volverse enormes sin lavar las influencias sombrías.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d4/eb/cc/d4ebcc22-7fa0-1394-1eee-5120724b6d4a/720841216605_Cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://open.spotify.com/search/album%3ARomance%20artist%3AFontaines%20D.C.', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Ireland' },
];

export const playlistBundles: EditorialPlaylistBundle[] = [
  {
    title: 'Club Pressure',
    description: 'Subgrave, metal torcido y lineas de fuga para despues del peak time.',
    thesis:
      'Una ruta para escuchar como el club 2025-2026 se endurece sin caer en formula industrial ni en revival vacio.',
    curator: 'Sounds of the World Editorial',
    territory: 'Global club',
    platforms: [
      { platform: 'spotify', url: 'https://open.spotify.com/search/club%20pressure%20electronic%20alternative' },
      { platform: 'apple', url: 'https://music.apple.com/us/search?term=club%20pressure%20electronic' },
      { platform: 'youtube', url: 'https://www.youtube.com/results?search_query=club+pressure+electronic+mix' },
    ],
    highlights: [
      { artist: 'Zora Jones', title: 'ANGEL CRISIS', note: 'Deconstructed club que todavia deja pasar deseo y melodrama.', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, youtubeQuery: 'Zora Jones ANGEL CRISIS' },
      { artist: 'UFO95', title: 'A Brutalist Dystopian Society - part 2', note: 'Techno gris que vuelve productiva la insistencia del concreto.', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, youtubeQuery: 'UFO95 A Brutalist Dystopian Society part 2' },
      { artist: 'KAVARI', title: 'PLAGUE MUSIC', note: 'Jungle y rave triturados hasta quedar en puro nervio.', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, youtubeQuery: 'KAVARI PLAGUE MUSIC' },
      { artist: 'GorpoPap', title: 'Reach 4 The Stars', note: 'Electro fiestero que mantiene la sonrisa dentro del error.', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, youtubeQuery: 'GorpoPap Reach 4 The Stars' },
      { artist: 'Elmoe', title: 'Battle Zone', note: 'Planet Mu y footwork como recordatorio de que la velocidad sigue pensando.', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, youtubeQuery: 'DJ Elmoe Battle Zone' },
    ],
  },
  {
    title: 'Ambient Systems',
    description: 'Bajo la superficie todavia se oyen infraestructuras, agua y electricidad.',
    thesis:
      'Una escucha para seguir el giro hacia discos que desaceleran sin volverse decorativos y usan el espacio como argumento.',
    curator: 'Sounds of the World Editorial',
    territory: 'Deep listening',
    platforms: [
      { platform: 'spotify', url: 'https://open.spotify.com/search/ambient%20systems%20experimental%20electronic' },
      { platform: 'apple', url: 'https://music.apple.com/us/search?term=ambient%20systems%20electronic' },
      { platform: 'youtube', url: 'https://www.youtube.com/results?search_query=ambient+systems+electronic+playlist' },
    ],
    highlights: [
      { artist: 'Purelink', title: 'Faith', note: 'Dub ambiental y tacto de sala vacia convertido en refugio.', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, youtubeQuery: 'Purelink Faith' },
      { artist: 'Barker', title: 'Stochastic Drift', note: 'Percusion sin tirania del bombo y armonia flotando como clima.', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, youtubeQuery: 'Barker Stochastic Drift' },
      { artist: 'Jeremy Hyman', title: 'Low Air', note: 'Una respiracion mas ancha para una escena cansada de la urgencia.', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, youtubeQuery: 'Jeremy Hyman Low Air' },
      { artist: 'Ichiko Aoba', title: 'Luminescent Creatures', note: 'El detalle minimo como forma de expansion emocional.', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, youtubeQuery: 'Ichiko Aoba Luminescent Creatures' },
      { artist: 'Eiko Ishibashi', title: 'Antigone', note: 'Cancion y paisaje urbano leyendo juntos el mismo desastre.', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, youtubeQuery: 'Eiko Ishibashi Antigone' },
    ],
  },
  {
    title: 'Mutant Songcraft',
    description: 'Voces procesadas, cancion doblada y pop que ya no quiere obedecer.',
    thesis:
      'Una ruta para seguir como la cancion alternativa absorbe club, interfaz y distorsion sin perder filo afectivo.',
    curator: 'Sounds of the World Editorial',
    territory: 'Avant-pop',
    platforms: [
      { platform: 'spotify', url: 'https://open.spotify.com/search/mutant%20songcraft%20avant%20pop' },
      { platform: 'apple', url: 'https://music.apple.com/us/search?term=mutant%20songcraft%20avant%20pop' },
      { platform: 'youtube', url: 'https://www.youtube.com/results?search_query=mutant+songcraft+avant+pop+playlist' },
    ],
    highlights: [
      { artist: 'aya', title: 'hexed!', note: 'La diaristica digital convertida en desfiguracion precisa.', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, youtubeQuery: 'aya hexed' },
      { artist: 'dj haram', title: 'Beside Myself', note: 'Rap, ruido y duelo fundidos en un solo cuerpo sonoro.', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, youtubeQuery: 'dj haram Beside Myself' },
      { artist: 'FKA twigs', title: 'EUSEXUA', note: 'Pop ritual con pulso de interfaz y fisicalidad ceremonial.', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, youtubeQuery: 'FKA twigs EUSEXUA' },
      { artist: 'Nick Leon', title: 'A Tropical Entropy', note: 'El calor urbano se vuelve estructura, no decoracion.', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, youtubeQuery: 'Nick Leon A Tropical Entropy' },
      { artist: 'feeo', title: 'Goodness', note: 'Miniaturas de brillo herido para una escena de atencion quebrada.', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, youtubeQuery: 'feeo Goodness' },
    ],
  },
];

export const signalLexicon: EditorialSignalCluster[] = [
  { name: 'Post-Algorithmic Club', definition: 'Tracks hechos para sobrevivir a la plataforma sin aceptar del todo su flujo pulido.', whyNow: 'AutoMix y la curaduria automatica vuelven mas valiosa cualquier forma de friccion deliberada.', territories: ['London', 'Berlin', 'New York'], source: 'Mixmag', sourceUrl: MIXMAG_AUTOMIX_URL },
  { name: 'Ambient Pressure', definition: 'Musica lenta con masa fisica, subgrave contenido y aire cargado de infraestructura.', whyNow: 'El presente pide discos que desaceleren sin caer en ambient de fondo.', territories: ['Chicago', 'Tokyo', 'Copenhagen'], source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL },
  { name: 'Mutant Songcraft', definition: 'Cancion que absorbe rave, collage vocal y diseno de interfaz sin perder memorabilidad.', whyNow: 'El pop alternativo mas fuerte del ciclo ya no separa hook y experimentacion.', territories: ['London', 'Barcelona', 'Seoul'], source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL },
  { name: 'Brutalist Drift', definition: 'Techno y electro grises donde textura, concreto y espectro industrial pesan tanto como el groove.', whyNow: 'La escena responde a la crisis urbana con mas materia y menos fantasia sleek.', territories: ['Rotterdam', 'Brussels', 'Berlin'], source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL },
  { name: 'Voice as Interface', definition: 'La voz ya no es solo personaje. Funciona como panel de control, error y sistema de lectura.', whyNow: 'La discusion sobre IA y autenticidad devuelve centralidad a la huella vocal humana.', territories: ['Los Angeles', 'London', 'Tokyo'], source: 'Mixmag', sourceUrl: MIXMAG_AI_URL },
  { name: 'Canon Repair', definition: 'Curaduria que no adora el pasado, sino que lo remonta para volver legible el presente.', whyNow: 'El canon de RA 2000-25 confirmo que la memoria electronica necesita nuevos montajes.', territories: ['Global'], source: 'Resident Advisor', sourceUrl: RA_CANON_URL },
  { name: 'Curated Friction', definition: 'La mediacion vuelve a importar cuando el feed se vuelve demasiado liso para sostener escena.', whyNow: 'Bandcamp radio y los dossiers editoriales reactivan el deseo de contexto humano.', territories: ['Global'], source: 'Mixmag', sourceUrl: BANDCAMP_RADIO_URL },
  { name: 'Low-Air Rhythm', definition: 'Percusion de baja presion, tempo respirado y espacio tratado como energia.', whyNow: 'Parte del club actual elige menos velocidad y mas presencia.', territories: ['New York', 'Montreal', 'Manchester'], source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL },
  { name: 'Hardware Tenderness', definition: 'Electronica tactil donde el sintetizador suena a herramienta cercana, no a fetiche retro.', whyNow: 'Frente al brillo sintetico de la IA, vuelve el deseo de oir mano, cable y desgaste.', territories: ['Wales', 'Berlin', 'Stockholm'], source: 'Resident Advisor', sourceUrl: RA_CANON_URL },
];

export const cultCanonPreview = cultCanonChart.slice(0, 10);
export const newSignalPreview = newSignalChart.slice(0, 10);
export const highlightedSignals = signalLexicon.slice(0, 4);
