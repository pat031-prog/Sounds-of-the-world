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
  { rank: 1, chart: 'Cult Canon // 20', artist: 'Burial', albumName: 'Untrue', year: '2007', label: 'Hyperdub', blurb: 'Dubstep convertido en fantasma urbano, lluvia digital y memoria danada.', whyItMatters: 'Sigue siendo el molde secreto de toda electronica que prefiere cicatriz a pulido.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9d/0f/1c/9d0f1c2b-2fae-d8ac-3920-ce9ec5bc85b5/7982.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/untrue/893175779?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 2, chart: 'Cult Canon // 20', artist: 'The Knife', albumName: 'Silent Shout', year: '2006', label: 'Rabid', blurb: 'Synth-pop glacial, erotico y politicamente torcido.', whyItMatters: 'Su diseno de frio emocional sigue filtrandose en el pop mutante y el club raro.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/dd/21/98/dd2198d3-7d38-f3ee-4801-efecfd25b024/5060236630209_1.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/silent-shout/1489763587?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Sweden' },
  { rank: 3, chart: 'Cult Canon // 20', artist: 'Kode9 & The Spaceape', albumName: 'Memories of the Future', year: '2006', label: 'Hyperdub', blurb: 'Post-dubstep como ciencia ficcion negra y voz de ruina metropolitana.', whyItMatters: 'Anudo teoria, soundsystem y futurismo oscuro antes de que la curaduria fuera un negocio.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f1/3e/2e/f13e2e1f-895f-5d17-26c4-af00c2261e14/7980.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/memories-of-the-future/892605225?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 4, chart: 'Cult Canon // 20', artist: 'Nicolas Jaar', albumName: 'Space Is Only Noise', year: '2011', label: 'Circus Company', blurb: 'Minimalismo sensual con humo de club y arquitectura de camara.', whyItMatters: 'Mostro que la intimidad tambien podia tener peso de soundsystem.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/83/f0/15/83f01563-ae6b-2193-36f4-1e0a68aeeda7/827170120822_CCCDArtwork.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/space-is-only-noise/1745717923?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US / Chile' },
  { rank: 5, chart: 'Cult Canon // 20', artist: 'James Blake', albumName: 'James Blake', year: '2011', label: 'Atlas', blurb: 'Subgrave sentimental y cancion desfigurada por el espacio digital.', whyItMatters: 'Abre la ruta que une soul roto, bass music y vulnerabilidad procesada.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c4/6b/7c/c46b7cd6-8514-2098-7efa-83790c3d4879/00602527614854.rgb.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/james-blake/1440797243?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 6, chart: 'Cult Canon // 20', artist: 'Oneohtrix Point Never', albumName: 'R Plus Seven', year: '2013', label: 'Warp', blurb: 'Render sacro, interfaz y new age partido en miles de ventanas.', whyItMatters: 'Convirtio la estetica de software en un lenguaje emocional completo.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/73/86/a9/7386a990-adbb-4026-ad49-f93b0594a4e9/WARP240_Packshot_1400.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/r-plus-seven/673970570?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US' },
  { rank: 7, chart: 'Cult Canon // 20', artist: 'Autechre', albumName: 'Exai', year: '2013', label: 'Warp', blurb: 'Labirinto ritmico donde cada golpe parece redisenar el suelo.', whyItMatters: 'Sigue siendo una escuela para toda electronica que piensa la forma como problema abierto.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music/v4/3e/ff/bf/3effbfda-5b09-1c77-a029-fb57f577251c/WARPCD234_Packshot_1400.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/exai/596757670?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 8, chart: 'Cult Canon // 20', artist: 'Holly Herndon', albumName: 'Platform', year: '2015', label: '4AD', blurb: 'Voces de red, computacion social y coral digital sin ingenuidad.', whyItMatters: 'Anticipo mejor que nadie la discusion actual sobre cuerpo, IA y trabajo de datos.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/ed/98/eaed9899-da6b-c75d-9307-815b9cfadd21/652637350357.png/100x100bb.png'), coverSourceUrl: 'https://music.apple.com/us/album/platform/972395123?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US / Berlin' },
  { rank: 9, chart: 'Cult Canon // 20', artist: 'Arca', albumName: 'Mutant', year: '2015', label: 'Mute', blurb: 'Corazon melodico y violencia sintetica en la misma herida.', whyItMatters: 'Reescribio la relacion entre pop, dislocacion corporal y diseno extremo de sonido.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/ff/70/0d/ff700d2c-7a0a-453d-0762-d649af6bf771/dj.imqowmqx.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/mutant/1049134484?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Venezuela / Global' },
  { rank: 10, chart: 'Cult Canon // 20', artist: 'SOPHIE', albumName: "OIL OF EVERY PEARL'S UN-INSIDES", year: '2018', label: 'Transgressive', blurb: 'Plastico, extasis y vulnerabilidad llevados al limite del pop.', whyItMatters: 'Partio en dos la idea de artificio y le devolvio al futurismo una carga afectiva brutal.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/86/72/30/86723032-da83-af74-0888-7cb7588130d6/0044003196520_Cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/oil-of-every-pearls-un-insides/1709023350?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 11, chart: 'Cult Canon // 20', artist: 'Against All Logic', albumName: '2012-2017', year: '2018', label: 'Other People', blurb: 'House de sample roto con groove de almacen abierto de madrugada.', whyItMatters: 'Demostro que el collage podia ser popular y cerebral sin bajar la presion.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/1e/18/8d1e1896-902b-3b50-2163-a01e097daece/193436434744_AAL.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/2012-2017/1828456934?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US / Chile' },
  { rank: 12, chart: 'Cult Canon // 20', artist: 'Yves Tumor', albumName: 'Safe in the Hands of Love', year: '2018', label: 'Warp', blurb: 'Noise erotico, cancion rota y glamour de fin de siglo digital.', whyItMatters: 'Abre una ruta donde rock, ambient y club dejan de obedecer categorias estables.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/5f/d9/6e/5fd96ec0-4bc7-6892-3801-82c7c848118d/0801061029333.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/safe-in-the-hands-of-love/1429971639?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US' },
  { rank: 13, chart: 'Cult Canon // 20', artist: 'Tirzah', albumName: 'Devotion', year: '2018', label: 'Domino', blurb: 'R&B desnudo hasta dejar solo piel, espacio y temblor.', whyItMatters: 'Reivindico la cancion minima como forma de intensidad adulta.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/cc/f7/42/ccf742e6-d991-8f8d-7a70-8b5c1e53c1b6/887828039463.png/100x100bb.png'), coverSourceUrl: 'https://music.apple.com/us/album/devotion/1372735578?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 14, chart: 'Cult Canon // 20', artist: 'Kali Malone', albumName: 'The Sacrificial Code', year: '2019', label: 'Ideal Recordings', blurb: 'Drone de organo donde cada nota pesa como arquitectura.', whyItMatters: 'Volvio espiritual a la repeticion sin caer en una sola concesion new age.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/25/49/a5/2549a501-11ad-07fb-8649-834d10e4c3cd/51641.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/the-sacrificial-code/1790513874?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Sweden / US' },
  { rank: 15, chart: 'Cult Canon // 20', artist: 'Skee Mask', albumName: 'Compro', year: '2018', label: 'Ilian Tape', blurb: 'Breakbeat, ambient y bass science con precision de taller.', whyItMatters: 'Sigue siendo uno de los discos mas citados cuando el club quiere volver a pensar.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7e/d5/6d/7ed56dcb-9373-ab2e-525d-1a513e51d135/4044693796792.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/compro/1386727307?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Germany' },
  { rank: 16, chart: 'Cult Canon // 20', artist: 'Machinedrum', albumName: 'Vapor City', year: '2013', label: 'Ninja Tune', blurb: 'Juke emocional, vapor industrial y worldbuilding de ciudad inventada.', whyItMatters: 'Mostro que la narrativa conceptual tambien podia bailar de verdad.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6c/da/ab/6cdaab36-455f-c3b2-5c2e-71af515cad51/5021392841199.png/100x100bb.png'), coverSourceUrl: 'https://music.apple.com/us/album/vapor-city/679609284?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'US' },
  { rank: 17, chart: 'Cult Canon // 20', artist: 'Four Tet', albumName: 'There Is Love in You', year: '2010', label: 'Domino', blurb: 'Microhouse emotivo, luz suave y paciencia rave.', whyItMatters: 'Mantiene vivo un ideal de belleza detallista que todavia empuja a una generacion entera.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b5/09/30/b50930fc-c3e6-93ea-d146-de291b3e101a/3663729136985_cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/there-is-love-in-you-expanded-edition/1537809701?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 18, chart: 'Cult Canon // 20', artist: 'Tim Hecker', albumName: 'Virgins', year: '2013', label: 'Kranky', blurb: 'Camara de reverb rota, organos y ceniza digital.', whyItMatters: 'Demostro que la abstraccion puede sentirse fisica y devastadora a la vez.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Features4/v4/52/31/c3/5231c34d-8566-0e12-73fa-6be28ff4ed7e/dj.qeqrsvxx.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/virgins/699511308?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Canada' },
  { rank: 19, chart: 'Cult Canon // 20', artist: 'Daniel Avery', albumName: 'Drone Logic', year: '2013', label: 'Phantasy', blurb: 'Techno de neblina acida y melancolia neon.', whyItMatters: 'Uno de los discos que mejor explico el regreso del trance emocional al club britanico.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7e/d6/09/7ed609b6-f4dc-6e21-efb9-95f046b75f56/5060281616265.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/drone-logic/1778234590?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'UK' },
  { rank: 20, chart: 'Cult Canon // Extended', artist: 'Kelly Lee Owens', albumName: 'Kelly Lee Owens', year: '2017', label: 'Smalltown Supersound', blurb: 'Techno intimo y pop de niebla con corazon de hardware.', whyItMatters: 'Su equilibrio entre tactilidad y cancion sigue siendo un modelo para la electronica sensible.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/58/e3/0a/58e30adb-148f-6852-6051-e1ef3344bae3/cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/kelly-lee-owens-extended-version/1499173580?uo=4', source: 'Resident Advisor', sourceUrl: RA_CANON_URL, territory: 'Wales' },
  { rank: 21, chart: 'Cult Canon // Extended', artist: 'Gustavo Cerati', albumName: 'Bocanada', year: '1999', label: 'BMG', blurb: 'Sofisticación pop y electrónica de largo aliento trenzadas maravillosamente.', whyItMatters: 'La prueba de que la imaginación electrónica latinoamericana podía dictar estándares estéticos globales.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/23/e8/92/23e892a3-6194-2a6a-93aa-fa9010566824/mzi.aqelopve.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/bocanada/304792998?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 22, chart: 'Cult Canon // Extended', artist: 'Juana Molina', albumName: 'Halo', year: '2017', label: 'Crammed Discs', blurb: 'Miniatura cósmica, repetición esquelética y silencio como lenguaje expansivo.', whyItMatters: 'Convirtió el vacio y el espacio negativo en una identidad contemporánea mundialmente reconocida.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/a9/cd/96/a9cd964b-c2b2-8a4d-b84e-b1155600391f/5410377904026.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/halo/1207480695?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 23, chart: 'Cult Canon // Extended', artist: 'Chancha Vía Circuito', albumName: 'Bienaventuranza', year: '2018', label: 'Wonderwheel', blurb: 'El archivo folclórico y latino operando como sistema profundo de subgraves.', whyItMatters: 'Demostró que el imaginario andino podía sonar misterioso, dub e industrial sin volverse un panfleto.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/04/25/d2/0425d2cc-8640-dcc7-28d5-2215a9f2cf45/192641077753.png/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/bienaventuranza/1645654589?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Argentina' },
  { rank: 24, chart: 'Cult Canon // Extended', artist: 'Jlin', albumName: 'Dark Energy', year: '2015', label: 'Planet Mu', blurb: 'Footwork de Chicago despojado, filoso y ensamblado como arquitectura microscópica.', whyItMatters: 'Reformuló y expandió los límites de qué significaba vanguardia en la escena de baile estadounidense.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a0/34/6e/a0346e57-37bc-a8ca-1059-9816b6d7b406/12225.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/dark-energy/972835488?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'United States of America' },
  { rank: 25, chart: 'Cult Canon // Extended', artist: 'Oneohtrix Point Never', albumName: 'Replica', year: '2011', label: 'Software', blurb: 'Collage de publicidades televisivas olvidadas convertidas en intensa melancolía pop.', whyItMatters: 'El manifiesto central de la era vaporwave mucho antes de que se volviera un cliché de internet.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0a/2e/53/0a2e532a-9179-be31-6456-f773dd1527e0/184923201062.png/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/replica/1714487173?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'United States of America' },
  { rank: 26, chart: 'Cult Canon // Extended', artist: 'Klein', albumName: 'Lifetime', year: '2019', label: 'Hyperdub', blurb: 'Texturas de iglesia fantasma, R&B dislocado y ruidosas grabaciones inmersivas.', whyItMatters: 'Rompió definitivamente la división entre música negra de club y composición de vanguardia radical británica.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/7e/09/21/7e0921ac-6f30-46df-1ab4-b09a914e41b2/5050580721890.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/lifetime/1476070256?uo=4', source: 'Sounds of the World', sourceUrl: RA_CANON_URL, territory: 'United Kingdom' },
  { rank: 27, chart: 'Cult Canon // Extended', artist: 'Overmono', albumName: 'Good Lies', year: '2023', label: 'XL', blurb: 'Herencia UK garage y jungle procesada con afecto y un nervio pop imparable.', whyItMatters: 'Reanimó la cultura rave masiva demostrando que la emoción sigue traduciéndose a cuerpos sudando juntos.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e9/6d/1a/e96d1ab0-0176-685c-1f4d-01e73e91a925/191404901076.png/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/good-lies/1659656223?uo=4', source: 'Sounds of the World', sourceUrl: RA_CANON_URL, territory: 'United Kingdom' },
  { rank: 28, chart: 'Cult Canon // Extended', artist: 'Dualist Inquiry', albumName: 'Doppelganger', year: '2013', label: 'Dualism', blurb: 'Guitarras precisas y capas electrónicas hilvanadas con elegancia rítmica y frescura.', whyItMatters: 'Un punto de inflexión definitivo para la madurez de la música de club completamente independiente en India.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/0d/57/7e0d5740-b383-e031-715e-2e7f6389b6de/00_Cover_Art.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/doppelganger/1839275504?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'India' },
  { rank: 29, chart: 'Cult Canon // Extended', artist: 'Prabh Deep', albumName: 'Tabia', year: '2021', label: 'Azadi', blurb: 'Voces de la calle y sintetizadores que suenan simultáneamente como rezos y callejones.', whyItMatters: 'Elevó el piso lírico y sónico de la industria musical sudasiática conectando trap, drill y memoria profunda.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/be/4a/a7/be4aa797-f0e5-84c7-49a9-fa76d254d511/8445162357456.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/tabia/1556489570?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'India' },
];

export const newSignalChart: HubChartEntry[] = [
  { rank: 1, chart: 'New Signal // 20', artist: 'Purelink', albumName: 'Faith', year: '2025', label: 'Peak Oil', blurb: 'Ambient dub y suspension emocional con tacto de sistema de sonido cansado.', whyItMatters: 'Resume el giro hacia una electronica lenta, porosa y profundamente fisica.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b6/2f/70/b62f7017-9a9c-5479-894a-ee378e45cb98/199350091803.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/faith/1803431838?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'up' },
  { rank: 2, chart: 'New Signal // 20', artist: 'dj haram', albumName: 'Beside Myself', year: '2025', label: 'Hyperdub', blurb: 'Club pressure, rap fracture y duelo tratado como arquitectura ruidosa.', whyItMatters: 'Une politica, cuerpo y collage con una precision que no pide permiso.', coverImageUrl: 'https://f4.bcbits.com/img/a3542957834_5.jpg', coverSourceUrl: 'https://djharam.bandcamp.com/album/beside-myself', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'new' },
  { rank: 3, chart: 'New Signal // 20', artist: 'Anthony Naples', albumName: 'Scanners', year: '2025', label: 'ANS', blurb: 'House mental con aire industrial y detalle de microscopio.', whyItMatters: 'Marca como suena la madurez de club cuando abandona la necesidad de demostrarlo todo.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/13/5a/dc/135adc13-8c7f-408f-5685-942c3f3de80b/4251804198820_3000.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/scanners/1805847786?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'up' },
  { rank: 4, chart: 'New Signal // 20', artist: 'aya', albumName: 'hexed!', year: '2025', label: 'Hyperdub', blurb: 'Cancion mutante, diarismo caustico y rave interior en estado de interferencia.', whyItMatters: 'Es de los discos que mejor entienden como se siente la mente despues del feed.', coverImageUrl: 'https://f4.bcbits.com/img/a2857872500_5.jpg', coverSourceUrl: 'https://aya-yco.bandcamp.com/album/hexed', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'UK', trend: 'new' },
  { rank: 5, chart: 'New Signal // 20', artist: 'Eiko Ishibashi', albumName: 'Antigone', year: '2025', label: 'Drag City', blurb: 'Cancion oblicua, textura politizada y paisaje urbano bajo amenaza.', whyItMatters: 'Convierte la delicadeza en una tecnologia de lectura del desastre.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0a/a9/6a/0aa96ac7-6880-dfdd-bcf8-2e791c75f2a4/781484094425.png/100x100bb.png'), coverSourceUrl: 'https://music.apple.com/us/album/antigone/1786650157?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Japan', trend: 'up' },
  { rank: 6, chart: 'New Signal // 20', artist: 'Ichiko Aoba', albumName: 'Luminescent Creatures', year: '2025', label: 'hermine', blurb: 'Camara folk, oceanografia digital y miniaturas que parecen respirar solas.', whyItMatters: 'Demuestra que la quietud tambien puede sonar futurista.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/87/5b/5b/875b5b86-30f3-d50a-de93-5bb5ad4cb141/49449.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/luminescent-creatures/1777069509?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'Japan', trend: 'steady' },
  { rank: 7, chart: 'New Signal // 20', artist: 'Nick Leon', albumName: 'A Tropical Entropy', year: '2025', label: 'TraTraTrax', blurb: 'Heatwave digital, dembow mutante y caos de ciudad pegado al cuerpo.', whyItMatters: 'Mueve el centro del club hacia un tropico sintetico sin exotismo postal.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/34/ac/38/34ac38f0-4e8d-3948-e350-63b131709235/4062548116038.png/100x100bb.png'), coverSourceUrl: 'https://music.apple.com/us/album/a-tropical-entropy/1807352711?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'US / Colombia', trend: 'up' },
  { rank: 8, chart: 'New Signal // 20', artist: 'FKA twigs', albumName: 'EUSEXUA', year: '2025', label: 'Young', blurb: 'Pop ritual, diseno corporal y deseo producido como interfaz viva.', whyItMatters: 'Lleva la idea de mutacion pop a un terreno mas club, mas esoterico y mas fisico.', coverImageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ae/c8/24/aec824cf-8748-fb40-12c8-b7fb69a5ffe3/075679634382.jpg/600x600bb.jpg', coverSourceUrl: 'https://music.apple.com/us/album/eusexua/1767658574', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'UK', trend: 'new' },
  { rank: 9, chart: 'New Signal // 20', artist: 'James Holden & Waclaw Zimpel', albumName: 'The Universe Will Take Care Of You', year: '2025', label: 'Border Community', blurb: 'Improvisacion cosmica y trance pastoral sin una gota de nostalgia.', whyItMatters: 'Devuelve expansion a la escucha justo cuando la cultura digital la comprime.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4a/e8/15/4ae8153b-e226-5bf2-857d-0ca71f1305cb/5051083216234_cover.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/the-universe-will-take-care-of-you/1807557536?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'UK / Poland', trend: 'steady' },
  { rank: 10, chart: 'New Signal // 20', artist: 'Barker', albumName: 'Stochastic Drift', year: '2025', label: 'Smalltown Supersound', blurb: 'Percusion sin bombo tirano y armonia como niebla activa.', whyItMatters: 'Confirma que el club puede seguir avanzando incluso cuando le quitan el suelo conocido.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7d/6d/49/7d6d4973-5ed9-aa5f-8d7d-58c78f73476b/51827.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/stochastic-drift/1792215329?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'Germany', trend: 'steady' },
  { rank: 11, chart: 'New Signal // 20', artist: 'Shinichi Atobe', albumName: 'Discipline', year: '2025', label: 'DDS', blurb: 'House abstracto con pulso de trance seco y melancolia de pasillo vacio.', whyItMatters: 'Prueba que la reserva puede ser mas intensa que el exceso.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f9/e5/13/f9e513c1-60f5-ac62-927c-a163e2ab25ba/5060165488223.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/discipline/1783624545?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'Japan', trend: 'up' },
  { rank: 12, chart: 'New Signal // 20', artist: 'Lindstrom', albumName: 'Sirius Syntoms', year: '2025', label: 'Feedelity', blurb: 'Cosmic disco con dislexia sintetica y humor de laboratorio.', whyItMatters: 'Recuerda que el futurismo tambien puede tener swing, color y una rareza amable.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ea/fa/b3/eafab365-0660-9bea-aafe-f6180cd735ac/199350011306.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/sirius-syntoms/1801529553?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'Norway', trend: 'steady' },
  { rank: 13, chart: 'New Signal // 20', artist: 'Elmoe', albumName: 'Battle Zone', year: '2025', label: 'Planet Mu', blurb: 'Footwork y pressure music con nervio de arcade roto.', whyItMatters: 'Mantiene vivo el filo de club sin convertirlo en cita historica vacia.', coverImageUrl: 'https://f4.bcbits.com/img/a0183989848_5.jpg', coverSourceUrl: 'https://djelmoe.bandcamp.com/album/battle-zone', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'new' },
  { rank: 14, chart: 'New Signal // 20', artist: 'Jeremy Hyman', albumName: 'Low Air', year: '2025', label: 'NNA Tapes', blurb: 'Rhythm studies de baja presion y espacio tratado como materia vibrante.', whyItMatters: 'Hace audible un tempo mas respirado sin perder tension.', coverImageUrl: 'https://f4.bcbits.com/img/a3730056098_5.jpg', coverSourceUrl: 'https://jeremyhyman.bandcamp.com/album/low-air', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'US', trend: 'up' },
  { rank: 15, chart: 'New Signal // 20', artist: 'feeo', albumName: 'Goodness', year: '2025', label: 'Scenic Route', blurb: 'Avant-pop comprimido hasta quedar en brillo, herida y miniatura.', whyItMatters: 'Muestra como la cancion muta cuando acepta vivir entre interfaz y temblor.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/37/92/8d37929c-de95-1b44-e067-18bed985f5c7/4062548120189.png/100x100bb.png'), coverSourceUrl: 'https://music.apple.com/us/album/goodness/1825867444?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'UK', trend: 'new' },
  { rank: 16, chart: 'New Signal // 20', artist: 'Zora Jones', albumName: 'ANGEL CRISIS', year: '2026', label: 'Independent', blurb: 'Deconstructed club que no sacrifica cuerpo ni emocion a la idea.', whyItMatters: 'Bandcamp la presento como prueba de que la forma extrema todavia puede golpear como cancion.', coverImageUrl: 'https://f4.bcbits.com/img/a2287353560_5.jpg', coverSourceUrl: 'https://zorajones.bandcamp.com/album/angel-crisis', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, territory: 'Barcelona', trend: 'new' },
  { rank: 17, chart: 'New Signal // 20', artist: 'UFO95', albumName: 'A Brutalist Dystopian Society - part 2', year: '2026', label: 'Mord', blurb: 'Dungeon techno con gris industrial y poesia de concreto.', whyItMatters: 'Convierte el cliche sombrio en un sistema de matices y presion real.', coverImageUrl: 'https://f4.bcbits.com/img/a0859831601_5.jpg', coverSourceUrl: 'https://mord.bandcamp.com/album/a-brutalist-dystopian-society-part-2', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, territory: 'Rotterdam', trend: 'up' },
  { rank: 18, chart: 'New Signal // 20', artist: 'GorpoPap', albumName: 'Reach 4 The Stars', year: '2026', label: 'Independent', blurb: 'Electro de fiesta rara con rubber bass y sonrisa torcida.', whyItMatters: 'Prueba que la experimentacion no tiene por que abandonar el impulso fisico.', coverImageUrl: 'https://f4.bcbits.com/img/a0812542889_5.jpg', coverSourceUrl: 'https://gorpopap.bandcamp.com/album/reach-4-the-stars', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, territory: 'Philadelphia', trend: 'new' },
  { rank: 19, chart: 'New Signal // 20', artist: 'KAVARI', albumName: 'PLAGUE MUSIC', year: '2026', label: 'Independent', blurb: 'Rave triturado, junglismo toxico y bajos que deforman la habitacion.', whyItMatters: 'Sirve para entender por donde se endurece el club sin perder su vocacion de fiesta.', coverImageUrl: 'https://f4.bcbits.com/img/a1648329063_5.jpg', coverSourceUrl: 'https://kavarimusic.bandcamp.com/album/plague-music', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, territory: 'Scotland', trend: 'up' },
  { rank: 20, chart: 'New Signal // Extended', artist: 'Soreab', albumName: 'CU', year: '2026', label: 'Independent', blurb: 'Minimalismo radical para soundsystems, geometria y vacio cargado.', whyItMatters: 'Resume una de las obsesiones del momento: menos elementos, mas presencia.', coverImageUrl: 'https://f4.bcbits.com/img/a0841602356_5.jpg', coverSourceUrl: 'https://soreab.bandcamp.com/album/cu', source: 'Bandcamp Daily', sourceUrl: BANDCAMP_FEB_URL, territory: 'London', trend: 'new' },
  { rank: 21, chart: 'New Signal // Extended', artist: 'Juana Rozas', albumName: 'TANYA', year: '2025', label: 'Independent', blurb: 'Pop deforme envuelto en plásticos crujientes y vulnerabilidades teatrales.', whyItMatters: 'Consolida a una de las artistas definiendo la estética pop de club sintética en Argentina.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/81/fe/d5/81fed59e-a882-7a46-782b-950673c95fa4/196873045887.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/tanya/1807399570?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'Argentina', trend: 'new' },
  { rank: 22, chart: 'New Signal // Extended', artist: 'Winona Riders', albumName: 'El Sonido Del Éxtasis', year: '2023', label: 'Indie', blurb: 'Un revival sudado de krautrock y stoner que absorbe la repetición implacable.', whyItMatters: 'Trajeron de vuelta un instinto pogueable, devolviendo la mística grupal a la era del beatmaker solista.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6d/45/0a/6d450afd-33b4-8b50-ffc8-15283f5d4527/197190217377.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/el-sonido-del-%C3%A9xtasis/1712744645?uo=4', source: 'Sounds of the World', sourceUrl: BANDCAMP_FEB_URL, territory: 'Argentina', trend: 'steady' },
  { rank: 23, chart: 'New Signal // Extended', artist: 'Blanco Teta', albumName: 'Rompe Paga', year: '2023', label: 'Bongo Joe', blurb: 'Punk no-wave incisivo con violoncello percusivo y una energía vocal demente.', whyItMatters: 'Desarrollaron el caos controlado demostrando cuán liberadora sigue siendo la disonancia furiosa.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3f/e7/2b/3fe72bfc-9366-b64d-2aab-9ed8bbb6b9ed/4062548063394.png/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/rompe-paga/1676441427?uo=4', source: 'Sounds of the World', sourceUrl: BANDCAMP_FEB_URL, territory: 'Argentina', trend: 'steady' },
  { rank: 24, chart: 'New Signal // Extended', artist: 'Moor Mother', albumName: 'The Great Bailout', year: '2024', label: 'Anti-', blurb: 'Jazz torturado y spoken word en una inmersión sofocante por la memoria colonial.', whyItMatters: 'Imprescindible para entender el dolor histórico con una música decididamente libre y ruidosa.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/88/fb/ad/88fbadea-a4c6-63b7-001f-d38803a1b8f6/0045778798063.png/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/the-great-bailout/1721870535?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'United States of America', trend: 'steady' },
  { rank: 25, chart: 'New Signal // Extended', artist: 'Helado Negro', albumName: 'PHASOR', year: '2024', label: '4AD', blurb: 'Sintetizadores mantecosos, ritmos soleados y una ternura americana brillante.', whyItMatters: 'Un manual de cómo transmitir calidez melódica perfecta desde máquinas retro-futuristas complejas.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/22/da/ab/22daabb2-6d75-58a9-27ab-16cbbb56981d/191400061071.png/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/phasor/1708555076?uo=4', source: 'Pitchfork', sourceUrl: PITCHFORK_BEST_2025_URL, territory: 'United States of America', trend: 'steady' },
  { rank: 26, chart: 'New Signal // Extended', artist: 'Nia Archives', albumName: 'Silence Is Loud', year: '2024', label: 'HIJINX', blurb: 'Junglismo e introspección brutal compitiendo valientemente por espacios en la mezcla.', whyItMatters: 'El renacer masivo de la cultura breaks británica impregnada por vez primera de melancolía neo-soul.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9f/94/46/9f94466b-c979-2401-d5f5-501e19a22925/23UM1IM66051.rgb.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/silence-is-loud/1729389430?uo=4', source: 'Sounds of the World', sourceUrl: BANDCAMP_FEB_URL, territory: 'United Kingdom', trend: 'up' },
  { rank: 27, chart: 'New Signal // Extended', artist: 'Two Shell', albumName: 'IIcons', year: '2025', label: 'Mainframe', blurb: 'Anonimato web, ritmos en pastillas elásticas veloces y vocoders robóticos.', whyItMatters: 'Representan cómo sonar como la frontera absoluta de la red sin sacrificar la serotonina.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fc/45/42/fc4542f4-e5e2-f2cd-a4a8-7a333e648caf/889030043771.png/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/iicons/1823722367?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'United Kingdom', trend: 'new' },
  { rank: 28, chart: 'New Signal // Extended', artist: 'Sijya', albumName: 'Leather & Brass EP', year: '2025', label: 'Independent', blurb: 'Ritmos irregulares y un tratamiento vocal casi biológico flotando finamente.', whyItMatters: 'Define la vanguardia rítmica meditativa exportada desde el circuito electrónico experimental indio.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/83/6d/48/836d4818-e4e7-46d1-7265-1b4e770ab7a9/5016958107871.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/leather-brass-ep/1808763905?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'India', trend: 'new' },
  { rank: 29, chart: 'New Signal // Extended', artist: 'OAFF', albumName: 'Between Flowers', year: '2025', label: 'Independent', blurb: 'Arquitectura electrónica exquisita poblada de ambientes suaves e impolutos.', whyItMatters: 'Plasmó de forma definitiva el techo de diseño de producción que logró la nueva ola hindi banger.', coverImageUrl: appleArt('https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b7/2a/54/b72a542c-f187-8362-4fde-d964f54c0c35/25UMGIM07124.rgb.jpg/100x100bb.jpg'), coverSourceUrl: 'https://music.apple.com/us/album/between-flowers/1792904373?uo=4', source: 'Sounds of the World', sourceUrl: PITCHFORK_ELECTRONIC_2025_URL, territory: 'India', trend: 'steady' },
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
