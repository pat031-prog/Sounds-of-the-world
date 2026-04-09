import { CulturalData, EditorialChapter, EditorialTrack } from '../types';

const appleArtwork = (url: string) => url.replace('/100x100bb.jpg', '/800x800bb.jpg');

const placeholderCover =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" fill="%23090909"/><rect x="40" y="40" width="720" height="720" fill="none" stroke="%23ffffff" stroke-opacity="0.18" stroke-width="2"/><text x="50%25" y="48%25" fill="%23ffffff" font-size="34" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="4">CURATION</text><text x="50%25" y="54%25" fill="%23FF3530" font-size="20" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="6">IN PROGRESS</text></svg>';

const chapter = (title: string, subtitle: string, content: string): EditorialChapter => ({
  title,
  subtitle,
  content,
});

const album = (
  albumName: string,
  artist: string,
  year: string,
  label: string,
  reason: string,
  youtubeQuery: string,
  coverArt100: string,
  coverSourceUrl: string,
) => ({
  albumName,
  artist,
  year,
  label,
  reason,
  youtubeQuery,
  coverImageUrl: appleArtwork(coverArt100),
  coverSourceUrl,
});

const release = (
  artist: string,
  title: string,
  year: string,
  type: string,
  youtubeQuery: string,
  coverArt100: string,
  coverSourceUrl: string,
) => ({
  artist,
  title,
  year,
  type,
  youtubeQuery,
  coverImageUrl: appleArtwork(coverArt100),
  coverSourceUrl,
});

const read = (title: string, source: string, url: string) => ({ title, source, url });

const track = (title: string, artist: string, vibe: string, youtubeQuery: string): EditorialTrack => ({
  title,
  artist,
  vibe,
  youtubeQuery,
});

type EntryConfig = Omit<CulturalData, 'songs' | 'topCharts' | 'criticalPick'> & {
  criticalPick?: CulturalData['criticalPick'];
};

const createEntry = (config: EntryConfig): CulturalData => {
  const playlistTracks = config.editorial.editorialPlaylist.slice(0, 4);
  const releases = config.editorial.forecast.forecastReleases.slice(0, 4);
  const leadAlbum = config.editorial.cultAlbums[0];

  return {
    ...config,
    songs: playlistTracks.slice(0, 3).map((entry) => ({
      title: entry.title,
      artist: entry.artist,
      genre: entry.vibe,
      description: entry.vibe,
      youtubeQuery: entry.youtubeQuery,
    })),
    topCharts: releases.slice(0, 3).map((entry, index) => ({
      rank: index + 1,
      title: entry.title,
      artist: entry.artist,
      trend: index === 0 ? 'new' : index === 1 ? 'up' : 'new',
    })),
    criticalPick:
      config.criticalPick ??
      {
        albumName: leadAlbum?.albumName ?? 'Editorial Dispatch',
        artist: leadAlbum?.artist ?? 'Editorial Desk',
        score: config.editorial.localVerdict.score,
        reviewSnippet: config.editorial.localVerdict.consensus,
        fullReview: config.summary,
        label: leadAlbum?.label ?? 'TerraMusica',
        isBestNewMusic: true,
      },
  };
};

const createInProgressCountry = (countryName: string, note: string): CulturalData =>
  createEntry({
    countryName,
    summary: `${countryName} sigue visible en el atlas, pero esta edición todavía no tiene la profundidad de archivo, discos y fuentes que exige la revista.`,
    traditions: ['Archivo abierto', 'Curaduría en desarrollo'],
    musicalStyles: ['Editorial holding pattern', 'Scene research pending'],
    instruments: ['Grabadoras de campo', 'Cassettes', 'Notas de producción'],
    curiosities: ['La ficha quedó activa para no fingir una cobertura terminada donde todavía falta trabajo de investigación.'],
    modernInfluentialArtists: [
      { name: 'Editorial Desk', genre: 'Research', relevance: 'La escena queda marcada como pendiente hasta completar fuentes, discos y lecturas verificadas.' },
    ],
    sampleOrigins: [
      {
        description: 'Se prioriza una nota honesta antes que mantener texto heredado débil o inventado.',
        famousUsage: 'La edición redirige hacia el panorama global y los ensayos mientras se completa la curaduría.',
      },
    ],
    editorial: {
      magazineStyle: 'TerraMusica Offline',
      sceneDescription: note,
      editorialStatus: 'in-progress',
      editorialStatusNote: note,
      editorialChapters: [
        chapter('Curación en progreso', 'Trabajo de campo pendiente', note),
      ],
      keyVenues: ['Research queue'],
      recordStores: [{ name: 'Editorial inbox', type: 'Archive', description: 'Aquí se acumulan discos, escenas y fuentes hasta que la ficha esté lista para publicarse.' }],
      experimentalArtist: {
        name: 'Pending research',
        description: 'La prioridad fue no rellenar esta escena con texto débil.',
        similarTo: 'Global Panorama',
      },
      visualAesthetic: {
        styleName: 'Archivo abierto',
        description: 'Tipografía, wireframe y un expediente a medio construir, en lugar de una ficción de completitud.',
      },
      localVerdict: {
        platformName: 'Editorial Desk',
        score: 'Draft',
        consensus: 'Pendiente de curaduría completa',
      },
      bestLyricsQuote: 'The file stays open until the signal deserves a page.',
      soundPalette: ['Pending notes', 'Unfinished margins', 'Open archive'],
      sonicSignature: {
        instruments: ['To be researched'],
        vocals: ['To be researched'],
        production: ['To be researched'],
      },
      localSlang: {
        term: 'Hold',
        definition: 'Estado editorial honesto para escenas todavía no verificadas.',
      },
      cultAlbums: [
        {
          albumName: 'Curation in Progress',
          artist: 'Editorial Desk',
          year: '2026',
          label: 'Offline',
          reason: 'Esta tarjeta existe solo para mantener la estructura tipada mientras la ficha sigue en producción.',
          youtubeQuery: 'Sounds of the World editorial panorama',
          coverImageUrl: placeholderCover,
          coverSourceUrl: 'https://github.com/pat031-prog/Sounds-of-the-world',
        },
      ],
      forecast: {
        trendName: 'Pending fieldwork',
        period: '2026-2027',
        description: note,
        keyArtists: ['Global Panorama', 'Special Essays'],
        futureSounds: ['Research pending'],
        curiosities: ['La app deja visible el país pero evita disfrazar una ficha incompleta como si estuviera lista.'],
        forecastReleases: [
          {
            artist: 'Editorial Desk',
            title: 'Pending field notes',
            year: '2026',
            type: 'Archive',
            coverImageUrl: placeholderCover,
            coverSourceUrl: 'https://github.com/pat031-prog/Sounds-of-the-world',
            youtubeQuery: 'Sounds of the World global panorama',
          },
        ],
      },
      curatedReads: [],
      editorialPlaylist: [
        track('Global Panorama', 'Editorial Desk', 'Contexto global mientras llega la escena completa', 'Sounds of the World global panorama'),
      ],
      independentLabel: {
        name: 'Open dossier',
        focus: 'Curaduría pendiente',
        since: '2026',
      },
      subgenreFocus: {
        name: 'Research mode',
        description: 'La ficha se publica recién cuando hay discos, notas y escena suficientes.',
      },
    },
  });

const globalIssue = createEntry({
  countryName: 'Global Issue',
  summary:
    'Abril de 2026 ya no se escucha como una sola escena sino como una red rota y fértil de micromundos. La música electrónica, el pop mutante y las guitarras desprogramadas ya no responden a capitales culturales fijas: responden a crisis logísticas, a software opaco y a la necesidad de recuperar cuerpo después de años de consumo sin fricción.',
  traditions: ['Club culture', 'DIY networked scenes', 'Post-streaming curation'],
  musicalStyles: ['Post-algorithmic club', 'Ambient pressure systems', 'Mutant pop', 'Tactile electronics'],
  instruments: ['Modular racks', 'Field recorders', 'Damaged laptops', 'Cheap mixers'],
  curiosities: [
    'La mejor música de 2026 no compite por volumen sino por densidad simbólica.',
    'Los sets más memorables vuelven a dejar errores, respiración y fricción en la mezcla final.',
  ],
  modernInfluentialArtists: [
    { name: 'Purelink', genre: 'Ambient dub', relevance: 'Su minimalismo húmedo se volvió el idioma de una generación cansada del exceso de información.' },
    { name: 'Eiko Ishibashi', genre: 'Avant-pop / soundtrack logic', relevance: 'Condensa intimidad, composición y ansiedad sistémica sin renunciar a la forma canción.' },
    { name: 'Gooooose', genre: 'Fractured club music', relevance: 'La mutación del diseño sonoro asiático se volvió referencia global para la pista y el estudio.' },
  ],
  sampleOrigins: [
    {
      description: 'Infraestructura digital agotada convertida en textura: ventiladores, teclados mecánicos, ruido de data centers, cintas desgastadas.',
      famousUsage: 'La nueva electrónica trata la cadena logística y el sistema nervioso como si fueran el mismo instrumento.',
    },
  ],
  editorial: {
    magazineStyle: 'The Wire meets Resident Advisor with a damaged modem',
    sceneDescription:
      'La edición global ya no busca un centro. Sigue las grietas: escenas que reaparecen cuando el feed deja de ordenar la experiencia y los artistas recuperan la fricción de tocar, mezclar, editar y fallar en tiempo real.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Edición curada offline a partir de archivo, prensa alternativa y selección verificable de discos.',
    editorialChapters: [
      chapter(
        'State of the Union 2026',
        'El planeta dejó de sonar sincronizado',
        `El mapa musical de abril de 2026 se parece menos a una industria y más a una constelación de enclaves precarios. La vieja promesa del streaming —acceso total, circulación total, descubrimiento infinito— derivó en una fragmentación gobernada por sistemas de recomendación que atomizan el gusto al mismo tiempo que uniforman la interfaz. La consecuencia no es silencio, sino un ruido administrado: escenas enteras conviven sin tocarse, productores que comparten herramientas pero no públicos, oyentes que creen habitar un universo abierto mientras el algoritmo les repite el mismo pasillo una y otra vez. Frente a eso, la música más intensa del presente dejó de perseguir la neutralidad. Reaparecieron los bordes, los timbres cortantes, la mezcla que no intenta agradar. El retorno del cassette, del vinilo pequeño, del sellito digital minúsculo y del club de aforo reducido no expresa nostalgia; expresa desconfianza. Después de una década de abundancia sintética, la escasez elegida se convirtió en un método de resistencia.`,
      ),
      chapter(
        'The Club After the Feed',
        'Infraestructura, guerra y cuerpo',
        `La pista de baile del presente no puede fingir inocencia. Cada cadena de sintetizadores depende de minerales, rutas marítimas, servidores, fábricas y regímenes laborales que ya forman parte del relato. La guerra escucha primero: antes de que llegue la noticia, llega su traducción sónica en forma de ansiedad rítmica, subgrave tenso y una obsesión nueva por el control del espacio. Por eso el club vuelve a pensarse como infraestructura y no como escapismo. En Chicago y Tbilisi, en São Paulo y Tokio, en Londres y Shanghái, los espacios que importan reducen teléfonos, cuidan el sonido, rearman comunidad. El set ya no vale por la novedad de su library sino por la forma en que administra energía, riesgo y pertenencia. La política no entra como slogan sino como arquitectura: quién puede quedarse, quién puede pagar, quién puede hacer ruido sin volverse contenido. La cultura electrónica más viva entendió que la euforia ya no es negación del desastre. Es una manera de atravesarlo sin ceder toda la sensibilidad a la máquina.`,
      ),
      chapter(
        'Forecast 2027',
        'Táctil sintético y futuros parciales',
        `Lo que viene no es un rechazo simple de la inteligencia artificial sino una redistribución de su función. La IA deja de ser fetiche de reemplazo y empieza a operar como material subordinado: clasifica archivos, expande bocetos, modela reverberaciones imposibles, simula acústicas, propone combinatorias. El gesto humano vuelve a decidir cuándo una textura merece permanecer. De ahí emerge la tendencia dominante de la próxima etapa: un táctil sintético donde el software asiste pero no borra la huella del cuerpo. A la vez, la escasez de tiempo, atención y dinero empuja a las escenas a construir circuitos más cortos y soberanos. Sellos minúsculos, plataformas propias, fiestas situadas, comunidades que documentan mejor de lo que escalan. El futuro inmediato no huele a utopía limpia. Huele a cable recalentado, humidificador de estudio, ropa después del club, un disco duro que cruje pero todavía entrega. La música global avanza así: no hacia un horizonte unificado, sino hacia muchos refugios eléctricos conectados por una necesidad común de volver a sentir materia dentro del flujo.`,
      ),
    ],
    keyVenues: ['Small clubs with no-phone policies', 'Independent listening rooms', 'Hybrid community radio spaces'],
    recordStores: [
      { name: 'Bandcamp Daily', type: 'Editorial archive', description: 'Sigue funcionando como radar de escenas que el circuito de prensa masiva no puede leer con precisión.' },
      { name: 'Local independent shops', type: 'Physical nodes', description: 'Las tiendas vuelven a ser infraestructura de socialización y filtro humano en un ecosistema saturado.' },
    ],
    experimentalArtist: {
      name: 'Purelink',
      description: 'Convierte dub, vacío y ansiedad urbana en una música que suena como si el silencio hubiera aprendido a comprimir datos.',
      similarTo: 'DJ Python, Huerco S., Terekke',
    },
    visualAesthetic: {
      styleName: 'Post-network brutalism',
      description: 'Pantallas gastadas, wireframes, publicidad rota y una nostalgia industrial que no añora el pasado sino su textura.',
    },
    localVerdict: {
      platformName: 'TerraMusica Index',
      score: '9.1',
      consensus: 'La imaginación vuelve a ganar cuando el algoritmo deja de parecer inevitable.',
    },
    bestLyricsQuote: 'The feed kept moving, but the kick drum learned how to stay.',
    soundPalette: ['Subgrave húmedo', 'Pads corroídos', 'Percusión granular', 'Ruido logístico'],
    sonicSignature: {
      instruments: ['Modulars compactos', 'Cajas de ritmo heridas', 'Grabadoras portátiles'],
      vocals: ['Susurro procesado', 'Habla espectral', 'Melodía seca'],
      production: ['Espacio negativo', 'Golpe táctil', 'Alta resolución emocional'],
    },
    localSlang: {
      term: 'Táctil sintético',
      definition: 'Producción donde la máquina expande posibilidades, pero la decisión final la toma el error humano.',
    },
    cultAlbums: [
      album('Faith', 'Purelink', '2025', 'Peak Oil', 'Un manifiesto de bajo voltaje y humedad digital: la música como refugio después de la sobreexposición.', 'Purelink Faith full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b6/2f/70/b62f7017-9a9c-5479-894a-ee378e45cb98/199350091803.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/faith/1803431838?uo=4'),
      album('Antigone', 'Eiko Ishibashi', '2025', 'Drag City', 'Canciones y texturas que convierten el colapso íntimo en arquitectura cinematográfica.', 'Eiko Ishibashi Antigone full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0a/a9/6a/0aa96ac7-6880-dfdd-bcf8-2e791c75f2a4/781484094425.png/100x100bb.jpg', 'https://music.apple.com/us/album/antigone/1786650157?uo=4'),
      album('Luminescent Creatures', 'Ichiko Aoba', '2025', 'hermine', 'Una delicadeza radical: folk, ambient y miniatura ecológica convertidos en lenguaje mundial.', 'Ichiko Aoba Luminescent Creatures full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/87/5b/5b/875b5b86-30f3-d50a-de93-5bb5ad4cb141/49449.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/luminescent-creatures/1777069509?uo=4'),
    ],
    forecast: {
      trendName: 'Táctil sintético',
      period: '2026-2027',
      description:
        'La mutación decisiva del presente consiste en devolverle resistencia al sonido. Los discos que importan ya no persiguen transparencia; incorporan borde, grano, aire, fricción. En vez de esconder el procesamiento, lo dejan respirar. La IA se usa para abrir posibilidades, no para limpiar la experiencia. El resultado es una música global que vuelve a sentirse construida, situada y mortal.',
      keyArtists: ['Purelink', 'DJ Python', 'Gooooose', 'Sijya'],
      futureSounds: ['Dub mínimo', 'Percusión quebrada', 'Folk procesado', 'Ambient con pulso'],
      curiosities: [
        'En 2026 el gesto más futurista ya no es sonar limpio, sino conservar huellas de edición, fricción y desgaste.',
        'La escucha vuelve al cuarto pequeño, al sistema doméstico y al club de sonido cuidado como reacción a la saturación del feed.',
      ],
      forecastReleases: [
        release('DJ Python', 'i was put on this earth', '2025', 'EP', 'DJ Python i was put on this earth EP', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/c6/b9/02c6b952-7d46-e5f6-dbf6-3c335d7938c1/191404150771.png/100x100bb.jpg', 'https://music.apple.com/us/album/i-was-put-on-this-earth-ep/1792265352?uo=4'),
        release('Sijya', 'Leather & Brass', '2025', 'EP', 'Sijya Leather and Brass EP', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/83/6d/48/836d4818-e4e7-46d1-7265-1b4e770ab7a9/5016958107871.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/leather-brass-ep/1808763905?uo=4'),
        release('Gooooose', 'Wriggle', '2026', 'Album', 'Gooooose Wriggle full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/9b/8e/539b8e2b-351f-4d2f-aaff-31839417dc9f/16080.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/wriggle/1870624598?uo=4'),
        release('Lone', 'Hyperphantasia', '2026', 'Album', 'Lone Hyperphantasia full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/f3/01/02f30125-42c6-5682-6797-8b8c063481e3/cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/hyperphantasia/1856659191?uo=4'),
      ],
    },
    curatedReads: [
      read('It’s Time for Electronic Music to Turn Its Dreams Into Reality', 'Pitchfork', 'https://pitchfork.com/features/electronic-music-column/its-time-for-electronic-music-to-turn-its-dreams-into-reality/'),
      read('The Best Electronic Music of 2024', 'Pitchfork', 'https://pitchfork.com/features/lists-and-guides/the-best-electronic-music-of-2024/'),
      read('The Best Electronic Music of 2025', 'Bandcamp Daily', 'https://daily.bandcamp.com/best-of-2025/the-best-electronic-music-of-2025'),
      read('The Top 25 Producers Who Defined the Year 2024', 'Mixmag', 'https://mixmag.net/feature/the-top-25-producers-who-defined-the-year-2024'),
    ],
    editorialPlaylist: [
      track('Faith', 'Purelink', 'Ambient dub with arterial pressure', 'Purelink Faith full album'),
      track('i was put on this earth', 'DJ Python', 'Dem bow as existential weather', 'DJ Python i was put on this earth EP'),
      track('Wriggle', 'Gooooose', 'Fractured propulsion', 'Gooooose Wriggle full album'),
      track('Antigone', 'Eiko Ishibashi', 'Song form under voltage', 'Eiko Ishibashi Antigone full album'),
    ],
    independentLabel: {
      name: 'PAN',
      focus: 'Mutation, fracture and post-digital art-pop',
      since: '2008',
    },
    subgenreFocus: {
      name: 'Post-algorithmic club',
      description: 'Música hecha para sobrevivir al feed sin perder complejidad física ni densidad conceptual.',
    },
  },
});

const argentina = createEntry({
  countryName: 'Argentina',
  summary:
    'Buenos Aires ya no vive únicamente del mito del rock nacional. En 2026 la ciudad opera como un laboratorio donde post-punk, ambient latino, psicodelia mutante y pop deforme conviven con una economía cultural siempre inestable y por eso mismo ferozmente inventiva.',
  traditions: ['Rock nacional', 'Mutación electrónica rioplatense', 'Circuito DIY porteño', 'Club culture queer'],
  musicalStyles: ['Neo-psicodelia rioplatense', 'Noise pop', 'Ambient mestizo', 'Post-punk mutante'],
  instruments: ['Guitarras filosas', 'Drum machines austeras', 'Sintetizadores analógicos', 'Grabaciones de campo urbanas'],
  curiosities: [
    'La escena porteña volvió a mirar el papel: fanzines, casetes y gráficas de bajo costo reaparecen como forma de distribución y comunidad.',
    'El archivo electrónico latino ya no funciona como exotismo, sino como material para construir presente.',
  ],
  modernInfluentialArtists: [
    { name: 'Juana Molina', genre: 'Folktrónica / avant-pop', relevance: 'Sigue siendo la brújula de una sensibilidad argentina que prefiere el desvío antes que la obviedad.' },
    { name: 'Winona Riders', genre: 'Psychedelic rock', relevance: 'La urgencia barrial reaparece en forma de guitarras expansivas y teatralidad física.' },
    { name: 'Juana Rozas', genre: 'Mutant pop', relevance: 'Empuja el pop local hacia una zona más artificial, performática y extrañamente tierna.' },
  ],
  sampleOrigins: [
    {
      description: 'Bandoneón, cumbia digital, ruido de subte, zumbido eléctrico de departamento y archivo rockero porteño.',
      famousUsage: 'La escena actual trata la ciudad como si fuera una consola defectuosa: cada interferencia vale como ritmo.',
    },
  ],
  editorial: {
    magazineStyle: 'Buenos Aires after midnight, annotated like a zine',
    sceneDescription:
      'La capital argentina dejó de dividir con rigidez entre rock y electrónica. La nueva revista de la ciudad se escribe en esa costura: canciones que entran como himno y terminan como sabotaje, beats de cuarto chico con ambición de avenida, guitarras que aprendieron a convivir con el sampler.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Curada a partir del archivo aportado, prensa alternativa y discos verificables.',
    editorialChapters: [
      chapter(
        'El archivo no pide permiso',
        'Del rock de crisis a la ciudad como interfaz',
        `Argentina siempre produjo música desde una economía quebrada pero altamente simbólica. En Buenos Aires, cada caída del mercado generó una mutación estética: del rock post-dictadura a la electrónica mestiza de la década de 2000, del revisionismo folk a la era de los sellos diminutos y la pista queer. Lo importante en 2026 no es la pureza del linaje, sino la velocidad con que los archivos se vuelven herramientas. Bocanada ya no funciona solo como canon, sino como una licencia abierta para mezclar canción, diseño sonoro y arquitectura emocional. Juana Molina sigue siendo el ejemplo más preciso: una artista que convirtió el espacio negativo en gramática local. Esa herencia convive con la intuición de ZZK, Hiedrah y toda una generación que entendió que la identidad rioplatense puede sonar tropical, industrial, punk o ambient sin perder espesor. La tradición acá no es una vitrina; es una máquina de deformación.`,
      ),
      chapter(
        'Presente de saturación y deseo',
        'Guitarras que aceptan al sampler',
        `La escena argentina de abril de 2026 suena a convivencia tensa entre banda y software. Por un lado, el retorno de guitarras urgentes, psicodelia de patio interno y post-punk arrabalero responde al cansancio frente a la música plástica. Por otro, nadie quiere volver a una pureza analógica inexistente. Dum Chica, Winona Riders, Blanco Teta o Juana Rozas habitan un terreno donde la canción puede romperse sin dejar de ser inmediata. El beat ya no es sinónimo de club; es un método de montaje. Las producciones adoptan texturas secas, voces cerca del micrófono, baterías que parecen grabadas en el borde de la saturación, y aun así conservan una sensibilidad pop. Buenos Aires atraviesa un momento raro y fértil: menos preocupada por exportar una marca nacional que por construir una gramática compartida entre la sala de ensayo, el dormitorio y la pista. Esa mezcla devuelve algo que el algoritmo no sabe premiar: carácter.`,
      ),
      chapter(
        'Radar 2026-2027',
        'Neosicodelia rioplatense y futurismo de barrio',
        `La tendencia dominante ya asoma: una neosicodelia rioplatense que recupera estructuras progresivas, pero les inyecta una tensión punk y una disciplina de estudio tomada de la electrónica. No se trata de revival. Se trata de densidad. Las nuevas bandas trabajan la repetición como trance y la distorsión como atmósfera, mientras artistas de pop mutante desarman la forma canción con lógica de collage digital. El próximo ciclo argentino no va hacia el hi-fi perfecto ni hacia la nostalgia garage; avanza hacia una producción deliberadamente viva, donde la respiración, el accidente y la deriva vuelven a ser recursos expresivos. Los fanzines de papel, los flyers impresos de nuevo y la circulación por sellos mínimos son síntomas del mismo impulso: recuperar escala humana sin perder imaginación técnica. La ciudad ya entendió algo decisivo. El futuro local no necesita parecer internacional para existir. Solo necesita sonar como un cuarto en ebullición con la ventana abierta al ruido de la avenida.`,
      ),
    ],
    keyVenues: ['Hiedrah Club de Baile', 'Niceto en modo lateral', 'Espacios DIY de Almagro y Chacarita'],
    recordStores: [
      { name: 'La Paragráfica', type: 'Physical / archive', description: 'Discos, edición pequeña y cultura gráfica funcionando como punto de encuentro para escenas cruzadas.' },
      { name: 'Mercado de sellos y ferias', type: 'Distributed', description: 'El circuito de ferias temporales volvió a operar como herramienta de descubrimiento humano.' },
    ],
    experimentalArtist: {
      name: 'Juana Rozas',
      description: 'Pop deforme, teatralidad sintética y una intuición para convertir vulnerabilidad en escenografía sonora.',
      similarTo: 'Sega Bodega, Rosalía en modo low-lit, Mabe Fratti por temperamento',
    },
    visualAesthetic: {
      styleName: 'Fotocopia futurista',
      description: 'Tipografía de volante, rojo gastado, negro de recital y diseño editorial de urgencia.',
    },
    localVerdict: {
      platformName: 'TerraMusica Desk',
      score: '8.8',
      consensus: 'La escena dejó de pedir validación externa y volvió a sonar imprescindible.',
    },
    bestLyricsQuote: 'La ciudad tiembla en 4/4, pero la reverberación todavía encuentra sangre.',
    soundPalette: ['Reverb seca', 'Bajo nervioso', 'Textura de cinta', 'Guitarra expandida'],
    sonicSignature: {
      instruments: ['Guitarras procesadas', 'Cajas de ritmo austeras', 'Sintetizadores de cuarto'],
      vocals: ['Cercanas', 'Quebradas', 'Teatrales'],
      production: ['Saturación controlada', 'Profundidad urbana', 'Montaje nervioso'],
    },
    localSlang: {
      term: 'Data',
      definition: 'La recomendación que circula de mano en mano antes de que la absorba la plataforma.',
    },
    cultAlbums: [
      album('Bocanada', 'Gustavo Cerati', '1999', 'BMG', 'La prueba de que en Argentina la sofisticación pop podía convivir con una imaginación electrónica de largo aliento.', 'Gustavo Cerati Bocanada full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/23/e8/92/23e892a3-6194-2a6a-93aa-fa9010566824/mzi.aqelopve.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/bocanada/304792998?uo=4'),
      album('Halo', 'Juana Molina', '2017', 'Crammed Discs', 'Una miniatura cósmica que convirtió repetición, timbre y silencio en identidad contemporánea.', 'Juana Molina Halo full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/a9/cd/96/a9cd964b-c2b2-8a4d-b84e-b1155600391f/5410377904026.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/halo/1207480695?uo=4'),
      album('Bienaventuranza', 'Chancha Vía Circuito', '2018', 'Wonderwheel', 'El archivo latino deja de funcionar como postal y pasa a operar como sistema vivo de graves, paisaje y trance.', 'Chancha Via Circuito Bienaventuranza full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/04/25/d2/0425d2cc-8640-dcc7-28d5-2215a9f2cf45/192641077753.png/100x100bb.jpg', 'https://music.apple.com/us/album/bienaventuranza/1645654589?uo=4'),
    ],
    forecast: {
      trendName: 'Neosicodelia rioplatense',
      period: '2026-2027',
      description:
        'El próximo ciclo argentino no enfrenta guitarra contra computadora. Las funde. La banda vuelve, sí, pero vuelve con edición, textura, loops, montaje y un interés renovado por la espacialidad. La respuesta a la música plástica no es el purismo. Es la respiración. Es dejar que la mezcla tiemble.',
      keyArtists: ['Winona Riders', 'Dum Chica', 'Juana Rozas', 'Marilina Bertoldi'],
      futureSounds: ['Psych de asfalto', 'Punk sintético', 'Noise pop sentimental', 'Canción expandida'],
      curiosities: [
        'El resurgimiento del volante, el afiche y el fanzine acompaña un deseo concreto de volver a circular fuera del feed.',
        'La ciudad reutiliza rock, ambient latino y electrónica club como si fueran materiales del mismo taller.',
      ],
      forecastReleases: [
        release('Juana Rozas', 'TANYA', '2025', 'Album', 'Juana Rozas TANYA full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/81/fe/d5/81fed59e-a882-7a46-782b-950673c95fa4/196873045887.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/tanya/1807399570?uo=4'),
        release('Winona Riders', 'El Sonido Del Éxtasis', '2023', 'Album', 'Winona Riders El Sonido del Extasis full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6d/45/0a/6d450afd-33b4-8b50-ffc8-15283f5d4527/197190217377.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/el-sonido-del-%C3%A9xtasis/1712744645?uo=4'),
        release('Blanco Teta', 'Rompe Paga', '2023', 'Album', 'Blanco Teta Rompe Paga full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3f/e7/2b/3fe72bfc-9366-b64d-2aab-9ed8bbb6b9ed/4062548063394.png/100x100bb.jpg', 'https://music.apple.com/us/album/rompe-paga/1676441427?uo=4'),
        release('Marilina Bertoldi', 'PARA QUIEN TRABAJAS Vol. I', '2025', 'Album', 'Marilina Bertoldi PARA QUIEN TRABAJAS Vol I', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e6/34/5d/e6345dd1-95ac-4889-22a3-4433b7251b0b/196873120072.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/para-quien-trabajas-vol-i/1814459709?uo=4'),
      ],
    },
    curatedReads: [
      read('How Latin American Electronic Artists Are Using Field Recordings to Reconnect With Nature', 'Pitchfork', 'https://pitchfork.com/features/lists-and-guides/how-latin-american-electronic-artists-are-using-field-recordings-to-reconnect-with-nature/'),
      read('Hiedrah Club de Baile Label Profile', 'Bandcamp Daily', 'https://daily.bandcamp.com/label-profile/hiedrah-club-de-baile-label-profile'),
      read("From Patagonia to the Enchanted Valley: Mapping Argentina's Rock Multiverse", 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/from-patagonia-to-the-enchanted-valley-mapping-argentinas-rock-multiverse'),
      read('Juana Molina: Halo', 'Pitchfork', 'https://pitchfork.com/reviews/albums/23124-halo/'),
    ],
    editorialPlaylist: [
      track('TANYA LOCA', 'Juana Rozas', 'Mutant pop with stage-light nerves', 'Juana Rozas TANYA'),
      track('Conexión total', 'Winona Riders', 'Psych-punk pressure', 'Winona Riders El Sonido del Extasis'),
      track('Merci Bocu', 'Blanco Teta', 'Noise body music', 'Blanco Teta Rompe Paga'),
      track('Monstruos', 'Juana Molina', 'Measured disorientation', 'Juana Molina Halo'),
    ],
    independentLabel: {
      name: 'Hiedrah',
      focus: 'Periphery-first club music and queer electronic circulation',
      since: '2018',
    },
    subgenreFocus: {
      name: 'Neo-psicodelia rioplatense',
      description: 'Guitarras expansivas, edición digital y nervio punk trabajando en el mismo plano.',
    },
  },
});

const unitedStates = createEntry({
  countryName: 'United States of America',
  summary:
    'Estados Unidos sigue siendo una fábrica de escenas parciales antes que un relato nacional coherente. En 2026 la música más relevante del país aparece donde la fragmentación algorítmica encuentra resistencia: footwork renovado, ambient dub quebrado, spoken word industrial y una pista que vuelve a prohibir teléfonos para recordar que el cuerpo existe.',
  traditions: ['Blues industrializado', 'Hip-hop as archive', 'Chicago club lineage', 'DIY avant-pop'],
  musicalStyles: ['Bio-gothic ambient', 'Footwork mutation', 'Spoken-word rap', 'Hardware techno'],
  instruments: ['808s secas', 'Modulars compactos', 'Samplers viejos', 'Saxos procesados'],
  curiosities: [
    'La microescena más influyente del momento no necesariamente tiene hits: tiene vocabulario.',
    'El retorno a lo táctil aparece como respuesta directa al encierro de la escucha personalizada.',
  ],
  modernInfluentialArtists: [
    { name: 'Jlin', genre: 'Rhythmic architecture', relevance: 'Demostró que el club norteamericano podía sonar futurista sin simplificarse para exportación fácil.' },
    { name: 'Moor Mother', genre: 'Noise rap / spoken word', relevance: 'Convirtió historia, violencia sistémica y collage sonoro en un lenguaje central del presente.' },
    { name: 'Purelink', genre: 'Ambient dub', relevance: 'Su estética de baja tensión reordena la relación entre intimidad, tecnología y espacio.' },
  ],
  sampleOrigins: [
    {
      description: 'Footwork de Chicago, cintas de archivo, radio rota, spoken word, ruido industrial y gospel fantasma.',
      famousUsage: 'La música estadounidense contemporánea trabaja con ruinas más que con géneros cerrados.',
    },
  ],
  editorial: {
    magazineStyle: 'Midwest basement theory with studio-grade sub',
    sceneDescription:
      'La escena estadounidense del presente no se organiza alrededor del hit. Se organiza alrededor de pequeñas comunidades que producen sintaxis nuevas para sobrevivir al aislamiento algorítmico.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Integrada a partir del texto de archivo y actualización offline.',
    editorialChapters: [
      chapter(
        'El eco de las ruinas',
        'Del blues al bit',
        `La historia musical de Estados Unidos nunca fue lineal. Cada forma nueva surgió de un desplazamiento forzado: trabajo, raza, ciudad, tecnología, capital. El blues, el jazz y el hip-hop no son solo géneros; son mecanismos de traducción del conflicto material. En 2026 esa genealogía vuelve a sentirse urgente porque el país ya no puede sostener el mito de la innovación limpia. La nueva electrónica y el nuevo rap suenan como infraestructuras fatigadas: bajos huecos, voces secas, fraseo casi hablado, loops que no prometen salida. Oneohtrix Point Never y Jlin funcionan aquí como dos polos de un mismo problema: cómo hacer que el exceso de información se convierta en forma y no en ruido pasivo. La pregunta no es qué tan avanzada es la herramienta. La pregunta es qué resto humano deja al usarla.`,
      ),
      chapter(
        'La fractura digital',
        'Presente 2026',
        `A inicios de 2026 el concepto de hit nacional está roto. Lo que circula en Chicago no se parece a lo que domina Los Ángeles, y Brooklyn convive con miles de escenas invisibles para el usuario promedio. Sin embargo, la fragmentación no destruyó la vitalidad; la radicalizó. Los clubes que importan reducen teléfonos, apuestan por hardware, vuelven a pensar la escucha como un evento y no como un scroll. El rap se densificó: menos estribillo diseñado para playlist, más fraseo espectral y arquitectura verbal. La electrónica dejó de actuar como banda sonora del lifestyle. Ahora funciona como medio de presión, como si cada track quisiera demostrar que debajo de la interfaz todavía hay cable, cuerpo y fatiga. La resistencia estadounidense contemporánea no se grita: se mezcla.`,
      ),
      chapter(
        'Bio-gótico',
        'El futuro próximo',
        `La tendencia más fértil para 2026-2027 es un bio-gótico norteamericano que cruza grabaciones de entorno, electrónica de precisión y sensibilidad post-industrial. Después de años de saturación digital, muchos productores regresan a bosques, desiertos, depósitos, ríos artificiales y arquitectura abandonada para extraer timbres que luego desfiguran con software de alta resolución. El gesto no es pastoral. Es casi forense. La naturaleza aparece ya atravesada por el sistema. De ahí surge una música que no busca escapar de la máquina sino mostrar sus residuos dentro del paisaje. El futuro estadounidense más interesante no va hacia el espectáculo sino hacia el ecosistema roto: sonidos vivos, pero marcados por infraestructura, deuda, vigilancia y clima extremo. El pop, cuando llegue, va a llegar herido.`,
      ),
    ],
    keyVenues: ['Chicago no-phone club nights', 'DIY spaces in Brooklyn and Queens', 'Listening rooms on the West Coast'],
    recordStores: [
      { name: 'The Lot Radio orbit', type: 'Distributed scene', description: 'Radio, club y archivo; menos lugar fijo que punto de condensación cultural.' },
      { name: 'Local record fairs', type: 'Physical network', description: 'El formato físico funciona como filtro humano frente al exceso de catálogo.' },
    ],
    experimentalArtist: {
      name: 'Purelink',
      description: 'Subgraves húmedos, espacio negativo y una idea de ambiente que nunca pierde pulso emocional.',
      similarTo: 'DJ Python, Huerco S., Jabu',
    },
    visualAesthetic: {
      styleName: 'Rust-belt minimalism',
      description: 'Acero gastado, tipografía funcional, wireframes y romanticismo post-industrial.',
    },
    localVerdict: {
      platformName: 'TerraMusica Desk',
      score: '8.9',
      consensus: 'La mejor música del país dejó de sonar imperial y volvió a sonar situada.',
    },
    bestLyricsQuote: 'The satellite dish is the new cross on the hill.',
    soundPalette: ['Subgrave pesado', 'Hi-hat cortado', 'Ruido metálico', 'Vacío reverberante'],
    sonicSignature: {
      instruments: ['Samplers', 'Modular pequeño', '808', 'Saxo y guitarra procesados'],
      vocals: ['Habla seca', 'Falsete cansado', 'Coro espectral'],
      production: ['Espacio negativo', 'Golpe táctil', 'Distorsión medida'],
    },
    localSlang: {
      term: 'No-phone set',
      definition: 'Evento donde el derecho a la opacidad vuelve a ser parte central de la cultura de club.',
    },
    cultAlbums: [
      album('Dark Energy', 'Jlin', '2015', 'Planet Mu', 'Un disco que reformuló el footwork como arquitectura rítmica del futuro.', 'Jlin Dark Energy full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a0/34/6e/a0346e57-37bc-a8ca-1059-9816b6d7b406/12225.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/dark-energy/972835488?uo=4'),
      album('Replica', 'Oneohtrix Point Never', '2011', 'Software', 'Collage de memoria digital y fantasmagoría publicitaria; todavía suena como un sistema operativo roto pero profético.', 'Oneohtrix Point Never Replica full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0a/2e/53/0a2e532a-9179-be31-6456-f773dd1527e0/184923201062.png/100x100bb.jpg', 'https://music.apple.com/us/album/replica/1714487173?uo=4'),
      album('Phoenix: Flames Are Dew Upon My Skin', 'Eartheater', '2020', 'PAN', 'Una síntesis feroz de body horror, canto y diseño sonoro post-humano.', 'Eartheater Phoenix Flames Are Dew Upon My Skin full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/11/b3/8b/11b38b48-4570-ef9e-961b-89dfdced19ad/723849813081.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/phoenix-flames-are-dew-upon-my-skin/1524723121?uo=4'),
    ],
    forecast: {
      trendName: 'Bio-gothic acoustics',
      period: '2026-2027',
      description:
        'El país más saturado por interfaces vuelve a perseguir materia. Se graban habitaciones, ventilaciones, madera, agua artificial y metal fatigado. La tecnología no desaparece: se vuelve un método para volver visible la herida del entorno.',
      keyArtists: ['Purelink', 'DJ Python', 'Moor Mother', 'Helado Negro'],
      futureSounds: ['Dub privado', 'Rap espectral', 'Footwork expandido', 'Paisaje dañado'],
      curiosities: [
        'La pregunta dominante ya no es cómo escalar una escena sino cómo protegerla de la extracción de contenido.',
        'La pista vuelve a funcionar como pacto temporal de atención compartida.',
      ],
      forecastReleases: [
        release('Purelink', 'Faith', '2025', 'Album', 'Purelink Faith full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b6/2f/70/b62f7017-9a9c-5479-894a-ee378e45cb98/199350091803.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/faith/1803431838?uo=4'),
        release('DJ Python', 'i was put on this earth', '2025', 'EP', 'DJ Python i was put on this earth EP', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/c6/b9/02c6b952-7d46-e5f6-dbf6-3c335d7938c1/191404150771.png/100x100bb.jpg', 'https://music.apple.com/us/album/i-was-put-on-this-earth-ep/1792265352?uo=4'),
        release('Moor Mother', 'The Great Bailout', '2024', 'Album', 'Moor Mother The Great Bailout full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/88/fb/ad/88fbadea-a4c6-63b7-001f-d38803a1b8f6/0045778798063.png/100x100bb.jpg', 'https://music.apple.com/us/album/the-great-bailout/1721870535?uo=4'),
        release('Helado Negro', 'PHASOR', '2024', 'Album', 'Helado Negro PHASOR full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/22/da/ab/22daabb2-6d75-58a9-27ab-16cbbb56981d/191400061071.png/100x100bb.jpg', 'https://music.apple.com/us/album/phasor/1708555076?uo=4'),
      ],
    },
    curatedReads: [
      read('Jersey Club Keeps on Moving', 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/jersey-club-keeps-on-moving'),
      read("Footwork's New Wave", 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/footworks-new-wave'),
      read('Jlin: Akoma', 'Pitchfork', 'https://pitchfork.com/reviews/albums/jlin-akoma/'),
      read('Moor Mother: The Great Bailout', 'Pitchfork', 'https://pitchfork.com/reviews/albums/moor-mother-the-great-bailout/'),
    ],
    editorialPlaylist: [
      track('The Precision of Infinity', 'Jlin', 'Rhythmic geometry', 'Jlin Akoma'),
      track('Faith', 'Purelink', 'Private pressure system', 'Purelink Faith'),
      track('the 4th wall', 'DJ Python', 'Dem bow drifting into mist', 'DJ Python i was put on this earth'),
      track('All the Money', 'Moor Mother', 'History as rupture', 'Moor Mother The Great Bailout'),
    ],
    independentLabel: {
      name: 'Peak Oil',
      focus: 'Ambient pressure, dub mutation and intimate systems music',
      since: '2013',
    },
    subgenreFocus: {
      name: 'Bio-gothic acoustics',
      description: 'Música que registra paisaje, infraestructura y cuerpo como si fueran el mismo órgano roto.',
    },
  },
});

const unitedKingdom = createEntry({
  countryName: 'United Kingdom',
  summary:
    'El Reino Unido sigue dictando gramáticas nocturnas, pero su fuerza ya no está en imponer un centro sino en remezclar su propio archivo. Jungle, garage, ambient y post-punk reaparecen como tecnologías emocionales para una isla exhausta, hiperconectada y todavía obsesionada con la pista.',
  traditions: ['Rave lineage', 'Post-punk alienation', 'Pirate radio memory', 'Jungle continuum'],
  musicalStyles: ['Atmospheric rave', 'Neo-garage', 'Algorithmic folk', 'Mutant pop'],
  instruments: ['Drum computers', 'Granular synths', 'Bass pressure systems', 'Acoustic strings'],
  curiosities: [
    'Lo más británico del presente no es la nostalgia, sino su capacidad para reinyectar archivo en sonido nuevo.',
    'La escena club volvió a reclamar espacios industriales precarios frente a la estandarización festivalera.',
  ],
  modernInfluentialArtists: [
    { name: 'Overmono', genre: 'Rave / garage', relevance: 'Traducen herencia UK a un presente táctil y melancólico sin caer en simple homenaje.' },
    { name: 'Nia Archives', genre: 'Jungle', relevance: 'Devolvió visceralidad pop al continuum sin esterilizarlo.' },
    { name: 'Klein', genre: 'Avant-pop / collage', relevance: 'Empuja la voz británica hacia una zona litúrgica, rota y radicalmente contemporánea.' },
  ],
  sampleOrigins: [
    {
      description: 'Amen break, radio pirata, spoken word suburbano, folk de islas y diseño de bajos para warehouse.',
      famousUsage: 'El Reino Unido sigue produciendo futuro desde sus ruinas mejor ecualizadas.',
    },
  ],
  editorial: {
    magazineStyle: 'Warehouse melancholy annotated by cultural theory',
    sceneDescription:
      'La isla ya no promete novedad absoluta; ofrece otra cosa más útil: la capacidad de convertir memoria rave, duelo social y textura urbana en una música todavía abierta al porvenir.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Actualizada en clave editorial-first y offline.',
    editorialChapters: [
      chapter(
        'La resaca del post-punk',
        'De la urgencia política al sedimento',
        `A comienzos de la década el post-punk británico funcionó como una válvula de protesta. Para 2026, esa energía ya no entra por la misma puerta. Las guitarras siguen, pero procesadas, erosionadas, casi siempre subordinadas a una lógica de textura. La política dejó de aparecer como consigna frontal y pasó a filtrarse como cansancio social, realismo capitalista y paisaje afectivo. De ahí la persistencia de Mark Fisher como sombra teórica involuntaria: no porque la escena cite teoría, sino porque habita una sensibilidad donde la depresión estructural ya forma parte del timbre.`,
      ),
      chapter(
        'Rave atmosférico',
        'El presente liminal de la isla',
        `La cultura club británica del presente no renuncia al golpe, pero se niega a sonar plana. Overmono, Joy Orbison, Blawan, Nia Archives o Two Shell trabajan sobre la idea de que el rave puede volver a ser un espacio de ambigüedad emocional. El garage se humedece, el jungle reaparece con nueva nitidez, el trance deja de ser un revival kitsch y vuelve como herramienta para construir espacios liminales. El warehouse ya no es una reliquia estética: es una necesidad acústica frente al diseño de entretenimiento sin riesgo. En esa tensión entre euforia y desgaste está el corazón del Reino Unido sonoro de 2026.`,
      ),
      chapter(
        'Folk algorítmico',
        'Humanidad en el código',
        `La proyección más interesante de la escena británica no consiste en sumar más plugins, sino en devolverle densidad humana al cálculo. Empieza a emerger un folk algorítmico donde melodías de tradición isleña, cuerdas, flautas y voces sin maquillaje se organizan mediante estructuras generativas. La IA no reemplaza; reorganiza. El resultado suena extrañamente familiar, como si Delia Derbyshire, Burial y el fantasma de una balada rural compartieran servidor. El Reino Unido vuelve a hacerlo a su manera: convertir archivo y ansiedad en una forma de futuro.`,
      ),
    ],
    keyVenues: ['Illegal warehouse parties', 'Listening bars in London', 'Manchester and Leeds fringe clubs'],
    recordStores: [
      { name: 'Rough Trade orbit', type: 'Retail / scene barometer', description: 'Sigue funcionando como termómetro del cruce entre archivo, hype y supervivencia independiente.' },
      { name: 'Bandcamp labels circuit', type: 'Distributed', description: 'Los sellos pequeños del continuum jungle-garage siguen operando como radar más fino que la prensa masiva.' },
    ],
    experimentalArtist: {
      name: 'Klein',
      description: 'Voz como ruina, sample como plegaria, pop como exorcismo.',
      similarTo: 'Dean Blunt, Tirzah, Mica Levi',
    },
    visualAesthetic: {
      styleName: 'Warehouse pastoral',
      description: 'Acero, neblina, serif gastada y residuos de flyer rave conviviendo con un imaginario rural espectral.',
    },
    localVerdict: {
      platformName: 'TerraMusica Desk',
      score: '8.7',
      consensus: 'La isla sigue produciendo sistema nervioso para la pista y para el duelo.',
    },
    bestLyricsQuote: 'The concrete grows where the heart used to be, but the signal still finds a way to the sea.',
    soundPalette: ['Breaks veloces', 'Bajo envolvente', 'Niebla de pads', 'Textura granular'],
    sonicSignature: {
      instruments: ['Breakbeats', 'Bajos subsónicos', 'Cuerdas crudas', 'Granular FX'],
      vocals: ['Fragmentadas', 'Intimistas', 'Haunted'],
      production: ['Liminal', 'Móvil', 'Emocionalmente cargada'],
    },
    localSlang: {
      term: 'Continuum',
      definition: 'La genealogía rave británica entendida como lenguaje vivo y no como museo.',
    },
    cultAlbums: [
      album('Untrue', 'Burial', '2007', 'Hyperdub', 'La biblia melancólica del dubstep fantasma y de toda una sensibilidad urbana posterior.', 'Burial Untrue full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9d/0f/1c/9d0f1c2b-2fae-d8ac-3920-ce9ec5bc85b5/7982.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/untrue/893175779?uo=4'),
      album('Lifetime', 'Klein', '2019', 'Parkwuud / Hyperdub orbit', 'Pop de ultratumba, collage emocional y ruptura estructural como gramática británica.', 'Klein Lifetime full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/7e/09/21/7e0921ac-6f30-46df-1ab4-b09a914e41b2/5050580721890.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/lifetime/1476070256?uo=4'),
      album('Good Lies', 'Overmono', '2023', 'XL', 'La prueba de que el continuum todavía puede expandirse sin perder pegada ni emoción.', 'Overmono Good Lies full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e9/6d/1a/e96d1ab0-0176-685c-1f4d-01e73e91a925/191404901076.png/100x100bb.jpg', 'https://music.apple.com/us/album/good-lies/1659656223?uo=4'),
    ],
    forecast: {
      trendName: 'Atmospheric rave',
      period: '2026-2027',
      description:
        'La pista británica se rehúsa a elegir entre golpe y atmósfera. El rave vuelve a ser un espacio emocionalmente complejo, donde jungle, garage, ambient y pop deformado trabajan juntos para producir presencia y no solo velocidad.',
      keyArtists: ['Blawan', 'Lone', 'Nia Archives', 'Two Shell'],
      futureSounds: ['Jungle de alta definición', 'Garage nebuloso', 'Trance seco', 'Pads pastorales'],
      curiosities: [
        'La conversación estética más viva del Reino Unido sigue ocurriendo en sellos y fiestas pequeñas antes que en instituciones.',
        'El archivo rave volvió a ser combustible, no solamente branding.',
      ],
      forecastReleases: [
        release('Blawan', 'BouQ', '2024', 'EP', 'Blawan BouQ EP', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4c/19/89/4c19895e-a675-4e4b-3278-893c12184d2d/191404149874.png/100x100bb.jpg', 'https://music.apple.com/us/album/bouq-ep/1775965524?uo=4'),
        release('Lone', 'Hyperphantasia', '2026', 'Album', 'Lone Hyperphantasia full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/02/f3/01/02f30125-42c6-5682-6797-8b8c063481e3/cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/hyperphantasia/1856659191?uo=4'),
        release('Nia Archives', 'Silence Is Loud', '2024', 'Album', 'Nia Archives Silence Is Loud full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9f/94/46/9f94466b-c979-2401-d5f5-501e19a22925/23UM1IM66051.rgb.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/silence-is-loud/1729389430?uo=4'),
        release('Two Shell', 'IIcons', '2025', 'Album', 'Two Shell IIcons', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fc/45/42/fc4542f4-e5e2-f2cd-a4a8-7a333e648caf/889030043771.png/100x100bb.jpg', 'https://music.apple.com/us/album/iicons/1823722367?uo=4'),
      ],
    },
    curatedReads: [
      read('The Best New Jungle Labels on Bandcamp', 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/the-best-new-jungle-labels-on-bandcamp'),
      read("Movietone, Flying Saucer Attack, and Bristol's Quiet Psych Scene", 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/movietone-flying-saucer-attack-and-bristols-quiet-psych-scene'),
      read('Overmono: Good Lies', 'Pitchfork', 'https://pitchfork.com/reviews/albums/overmono-good-lies/'),
      read('Nia Archives: Silence Is Loud', 'Pitchfork', 'https://pitchfork.com/reviews/albums/nia-archives-silence-is-loud/'),
    ],
    editorialPlaylist: [
      track('Good Lies', 'Overmono', 'Warehouse euphoria with bruised edges', 'Overmono Good Lies'),
      track('Silence Is Loud', 'Nia Archives', 'Jungle with open nerve endings', 'Nia Archives Silence Is Loud'),
      track('BouQ', 'Blawan', 'Pressure-tested hardware menace', 'Blawan BouQ EP'),
      track('Hyperphantasia', 'Lone', 'Rave remembered as color field', 'Lone Hyperphantasia'),
    ],
    independentLabel: {
      name: 'Hyperdub',
      focus: 'Continuum mutation, bass pressure and haunted futurism',
      since: '2004',
    },
    subgenreFocus: {
      name: 'Atmospheric rave',
      description: 'Euforia, melancolía y diseño espacial trabajando dentro de la misma pista.',
    },
  },
});

const india = createEntry({
  countryName: 'India',
  summary:
    'India dejó atrás la idea de que lo experimental debía pedir permiso a Bombay o a Occidente. En 2026 la escena opera desde una convergencia feroz entre raga, club music, hip-hop, ambient y una cultura de producción cada vez más descentralizada.',
  traditions: ['Raga as system', 'Playback legacy', 'DIY digital music', 'Festival laboratories'],
  musicalStyles: ['Indo-futurism', 'Modular raga', 'South Asian bass', 'Math-drill hybrids'],
  instruments: ['Tabla procesada', 'Modular synths', 'Sarangi extended', 'Percusión carnática'],
  curiosities: [
    'Las ciudades de segundo nivel empiezan a producir parte de la escena más arriesgada del país.',
    'La microtonalidad dejó de ser cita identitaria y se volvió infraestructura de composición.',
  ],
  modernInfluentialArtists: [
    { name: 'Prabh Deep', genre: 'Hip-hop / experimental rap', relevance: 'Usa la ciudad, la memoria y la espiritualidad como materia rítmica antes que como adorno.' },
    { name: 'Sijya', genre: 'Avant-electronic', relevance: 'Su trabajo hace sonar la producción digital como un organismo ritual y táctil.' },
    { name: 'Tarun Balani', genre: 'Improvised futurism', relevance: 'Conecta improvisación, tradición y diseño contemporáneo sin fijar frontera entre jazz, ambient y música de raíz.' },
  ],
  sampleOrigins: [
    {
      description: 'Ragas, métricas impares, percusión clásica y diseño sonoro digital tratados como un continuo.',
      famousUsage: 'La India contemporánea ya no exporta exotismo; exporta complejidad.',
    },
  ],
  editorial: {
    magazineStyle: 'Magnetic Fields with sharper political ears',
    sceneDescription:
      'El país más interesante del presente no intenta traducirse para gustar afuera. Trabaja sobre su propio sistema tonal, su propia temporalidad y su propia tensión entre industria masiva y autonomía digital.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Integrada a partir del archivo de análisis y nueva verificación editorial.',
    editorialChapters: [
      chapter(
        'Ruptura indie',
        'Después del monopolio del playback',
        `Durante décadas Bollywood dictó el gusto nacional y absorbió casi toda la visibilidad cultural. La década de 2020 abrió otra cosa: una infraestructura accesible de producción y distribución que permitió que escenas de Bangalore, Delhi, Chennai o Chandigarh dejaran de pensarse como apéndices del cine. En 2026 ese quiebre ya es irreversible. Lo independiente no es una categoría decorativa: es un régimen de producción con su propio orgullo, su propia economía y su propia estética.`,
      ),
      chapter(
        'Ragas y modulares',
        'Presente 2026',
        `La India contemporánea no busca sonar globalizada en el sentido más perezoso del término. Está haciendo algo más incisivo: usar tecnología de punta para expandir lógicas musicales locales. El modular deja de ser objeto occidental aspiracional y pasa a funcionar como extensión del sarangi, de la voz o de la métrica carnática. Los productores jóvenes mezclan drill, ambient, hip-hop y raga sin sentir que traicionan nada. El resultado confunde a los algoritmos porque no entra dócilmente en sus categorías.`,
      ),
      chapter(
        'Indo-futurismo total',
        '2026-2027',
        `La proyección más fuerte apunta hacia un indo-futurismo radicalmente descentralizado. Ciudades fuera del circuito obvio empiezan a producir sonidos menos ansiosos por validar su contemporaneidad. Al mismo tiempo, herramientas de IA se usan como gurú digital, sugiriendo variaciones, afinaciones y rutas rítmicas sin sustituir la intuición humana. Lo que se ve venir no es una escena “fusionada”. Es una escena que entiende que tradición y software pueden habitar el mismo pulso sin cancelarse.`,
      ),
    ],
    keyVenues: ['Magnetic Fields', 'Micro-scenes in Bangalore and Delhi', 'Independent art spaces in Chennai'],
    recordStores: [
      { name: 'Festival circuits', type: 'Temporary hub', description: 'Los festivales boutique se volvieron laboratorios de descubrimiento, colaboración y prueba estética.' },
      { name: 'Digital independent catalogs', type: 'Distributed', description: 'La escena respira mejor en plataformas y catálogos propios que en el embudo industrial del cine.' },
    ],
    experimentalArtist: {
      name: 'Sijya',
      description: 'La electrónica como ritual cambiante, sensual y técnicamente extraña.',
      similarTo: 'Jlin por disciplina, Arooj Aftab por atmósfera, aya por desvío',
    },
    visualAesthetic: {
      styleName: 'Modular devotional',
      description: 'Tipografía precisa, color mineral y una mezcla de intimidad textil con tecnología de laboratorio.',
    },
    localVerdict: {
      platformName: 'TerraMusica Desk',
      score: '8.8',
      consensus: 'Una de las escenas más complejas y menos simplificables del presente.',
    },
    bestLyricsQuote: 'En el eco del sintetizador, el sitar del abuelo no desaparece: cambia de voltaje.',
    soundPalette: ['Microtonalidad', 'Percusión quebrada', 'Pad ritual', 'Bajo terroso'],
    sonicSignature: {
      instruments: ['Tabla procesada', 'Modular', 'Drones de cuerda', 'Voz cercana'],
      vocals: ['Aéreas', 'Meditativas', 'Percusivas'],
      production: ['Alta definición', 'Espacial', 'Rítmicamente asimétrica'],
    },
    localSlang: {
      term: 'Guru digital',
      definition: 'Herramienta computacional usada como compañera de improvisación y no como reemplazo del músico.',
    },
    cultAlbums: [
      album('Doppelganger', 'Dualist Inquiry', '2013', 'Dualism', 'Un punto de inflexión para la electrónica india independiente, elegante pero decididamente propia.', 'Dualist Inquiry Doppelganger full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/0d/57/7e0d5740-b383-e031-715e-2e7f6389b6de/00_Cover_Art.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/doppelganger/1839275504?uo=4'),
      album('Jaago', 'Lifafa', '2019', 'Panache', 'Canción, psicodelia y textura urbana en una obra que capturó la ansiedad luminosa de una nueva clase creativa.', 'Lifafa Jaago full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a5/67/52/a5675288-d271-5947-0560-0ac19addb5f6/5060545638835.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/jaago/1448478213?uo=4'),
      album('Tabia', 'Prabh Deep', '2021', 'Azadi', 'Hip-hop, niebla espiritual y ciudad como memoria estratificada.', 'Prabh Deep Tabia full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/be/4a/a7/be4aa797-f0e5-84c7-49a9-fa76d254d511/8445162357456.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/tabia/1556489570?uo=4'),
    ],
    forecast: {
      trendName: 'Indo-futurismo modular',
      period: '2026-2027',
      description:
        'La próxima ola india hace convivir rigor rítmico, microtonalidad y diseño digital con una naturalidad que ya no necesita etiqueta de fusión. Es música intensamente local y legible en cualquier latitud precisamente porque no pide traducción.',
      keyArtists: ['Sijya', 'OAFF', 'Tarun Balani', 'Kayan'],
      futureSounds: ['Raga procesada', 'Bass detallado', 'Métrica impar', 'Ambient de especia metálica'],
      curiosities: [
        'La IA aparece como herramienta de improvisación y no como narrativa de sustitución.',
        'El nuevo centro de gravedad de la escena no pertenece solo a Mumbai o Delhi.',
      ],
      forecastReleases: [
        release('Sijya', 'Leather & Brass', '2025', 'EP', 'Sijya Leather and Brass EP', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/83/6d/48/836d4818-e4e7-46d1-7265-1b4e770ab7a9/5016958107871.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/leather-brass-ep/1808763905?uo=4'),
        release('OAFF', 'Between Flowers', '2025', 'Album', 'OAFF Between Flowers full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b7/2a/54/b72a542c-f187-8362-4fde-d964f54c0c35/25UMGIM07124.rgb.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/between-flowers/1792904373?uo=4'),
        release('Tarun Balani', 'Kadahin Milandaasin', '2025', 'Album', 'Tarun Balani Kadahin Milandaasin full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/de/57/1b/de571b70-bc53-81b9-7525-467aa8716fe6/20004.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/%DA%AA%DA%8F%D9%87%D9%86-%D9%85%D9%84%D9%86%D8%AF%D8%A7%D8%B3%D9%8A%D9%86-kadahin-milandaasin/1802608969?uo=4'),
        release('Kayan', 'Is Love Enough?', '2025', 'EP', 'Kayan Is Love Enough EP', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4f/41/e5/4f41e5e5-2207-5bea-69bf-ce5749d19c85/25UMGIM80500.rgb.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/is-love-enough-ep/1818793015?uo=4'),
      ],
    },
    curatedReads: [
      read('Baalti and the New Old Sound of the South Asian Diaspora', 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/baalti-and-the-new-old-sound-of-the-south-asian-diaspora'),
      read('Prabh Deep: Tabia', 'Pitchfork', 'https://pitchfork.com/reviews/albums/prabh-deep-tabia/'),
      read("Magnetic Fields Is India's Glorious Boutique Festival", 'Mixmag', 'https://mixmag.net/feature/magnetic-fields-india-festival-review'),
      read('Magnetic Fields India Bids Farewell With Nomads in 2026', 'Mixmag Asia', 'https://mixmag.asia/feature/magnetic-fields-india-bids-farewell-with-nomads-in-2026'),
    ],
    editorialPlaylist: [
      track('Leja Re', 'Sijya', 'Ritual electronics with skin in the transients', 'Sijya Leather and Brass'),
      track('Between Flowers', 'OAFF', 'Lush and mathematically soft', 'OAFF Between Flowers'),
      track('Nadiona', 'Prabh Deep', 'City prayer in slow burn', 'Prabh Deep Tabia'),
      track('Is Love Enough?', 'Kayan', 'Club-pop under emotional magnification', 'Kayan Is Love Enough'),
    ],
    independentLabel: {
      name: 'Azadi Records',
      focus: 'Independent South Asian rap and cross-genre electronic futures',
      since: '2017',
    },
    subgenreFocus: {
      name: 'Indo-futurismo modular',
      description: 'Una música que convierte microtonalidad, software y tradición en un mismo sistema de decisión.',
    },
  },
});

const china = createEntry({
  countryName: 'China',
  summary:
    'China ya no ocupa un lugar periférico en la música experimental global. En 2026 produce parte del diseño sonoro más incisivo del planeta: club fracturado, pop espectral, tradición modelada por software y una ética DIY que aprendió a sobrevivir a la hipercomercialización.',
  traditions: ['Yaogun memory', 'Urban hyper-density', 'Traditional timbral studies', 'Shanghai club design'],
  musicalStyles: ['SVBKVLT fracture', 'Experimental bass', 'Quantum traditionalism', 'Industrial dream-pop'],
  instruments: ['Erhu modelado', 'Granular engines', 'Sub-bass design', 'Voice as synthetic texture'],
  curiosities: [
    'La escena ya no se explica como curiosidad regional: funciona como estándar de referencia para el diseño sonoro global.',
    'Parte de la experimentación más viva usa tradición no como cita patrimonial sino como software actualizable.',
  ],
  modernInfluentialArtists: [
    { name: '33EMYBW', genre: 'Club mutation', relevance: 'Su trabajo convirtió el ritmo en criatura viva y deformable.' },
    { name: 'Howie Lee', genre: 'Synthetic folklore', relevance: 'Demostró que la identidad china contemporánea podía sonar íntima, digital y expansiva a la vez.' },
    { name: 'Gooooose', genre: 'Fractured electronics', relevance: 'Condensa la velocidad urbana y la precisión de estudio en una gramática singular.' },
  ],
  sampleOrigins: [
    {
      description: 'Fábricas, megalópolis, instrumentos tradicionales reimaginados y una relación compleja entre archivo y futuro.',
      famousUsage: 'La nueva música china ya no usa “lo tradicional” como superficie decorativa, sino como motor estructural.',
    },
  ],
  editorial: {
    magazineStyle: 'Shanghai basements, theory margins and microchip humidity',
    sceneDescription:
      'El sonido chino contemporáneo no pide traducción. Avanza como si la ciudad, el código, la historia y la ansiedad logística respiraran dentro del mismo sistema de producción.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Recurado con foco en electrónica, pop mutante y archivo vivo.',
    editorialChapters: [
      chapter(
        'El rugido del Yaogun',
        'De la resistencia al mito operativo',
        `El rock chino de los ochenta abrió una grieta simbólica cuya energía no desapareció con la domesticación mediática. En 2026 ese impulso ya no se manifiesta principalmente en guitarras, sino en una ética de independencia emocional frente al mercado, la estandarización y la saturación visual. El legado del Yaogun persiste como nervio subterráneo.`,
      ),
      chapter(
        'La pulsación de la periferia',
        'Shanghái como fábrica de diseño sonoro',
        `Si el siglo XX explicó la electrónica desde Londres, Detroit o Berlín, el presente ya no puede hacerlo sin Shanghái. SVBKVLT dejó de ser curiosidad local y pasó a marcar estándares de cómo diseñar ritmo, textura y colisión estética. La música que emerge de esa constelación suena biológica y sintética a la vez: como si la vida urbana hubiera aprendido a modularse en tiempo real.`,
      ),
      chapter(
        'Algoritmo ancestral',
        '2026-2027',
        `La proyección más intensa de la escena china apunta a una resonancia cuántica tradicional. No se trata de añadir un instrumento dinástico sobre un beat genérico. Se trata de modelar físicamente comportamientos acústicos, sistemas de afinación y gestos temporales para construir un futuro donde la tradición funcione como software vivo. El resultado promete una música meditativa y veloz, hecha de bits, seda y presión urbana.`,
      ),
    ],
    keyVenues: ['Shanghai underground clubs', 'Hybrid art spaces in Beijing', 'Independent festivals orbiting experimental labels'],
    recordStores: [
      { name: 'SVBKVLT orbit', type: 'Label ecosystem', description: 'Más que sello: una plataforma que reordenó la percepción global sobre el club chino.' },
      { name: 'Local cassette and boutique labels', type: 'Micro-distribution', description: 'La escena sigue confiando en formatos pequeños y redes específicas para circular con precisión.' },
    ],
    experimentalArtist: {
      name: 'Gooooose',
      description: 'Diseño sonoro minucioso, arquitectura rítmica torcida y un sentido físico del espacio urbano.',
      similarTo: 'Lee Gamble, 33EMYBW, Hyph11E',
    },
    visualAesthetic: {
      styleName: 'Silicon calligraphy',
      description: 'Pantalla fría, tipografía elegante, glitch húmedo y restos de tinta tradicional dentro de la interfaz.',
    },
    localVerdict: {
      platformName: 'TerraMusica Desk',
      score: '8.9',
      consensus: 'Parte del sonido global del presente se fabrica aquí, con más densidad que discurso promocional.',
    },
    bestLyricsQuote: 'En el flujo del silicio, mi sombra de tinta no encuentra orilla.',
    soundPalette: ['Glitch líquido', 'Bajo industrial', 'Campana procesada', 'Niebla digital'],
    sonicSignature: {
      instruments: ['Modelado físico', 'Subgrave fracturado', 'Instrumentos tradicionales reimaginados'],
      vocals: ['Procesadas', 'Espectrales', 'Andróginas'],
      production: ['Precisa', 'Biológica', 'No lineal'],
    },
    localSlang: {
      term: 'Quantum traditionalism',
      definition: 'Uso de tecnología avanzada para tratar la tradición como sistema vivo y no como ornamento.',
    },
    cultAlbums: [
      album('浮躁', 'Faye Wong', '1996', 'Cinepoly', 'Un dream-pop adelantado a su tiempo que sigue explicando cómo el pop chino puede ser alienado, elegante y ferozmente moderno.', 'Faye Wong Fuzao full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/f6/31/d6/f631d6d6-1fd0-272a-3feb-de30b4e69ace/00602517665095.rgb.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/%E6%B5%AE%E8%BA%81/1443287350?uo=4'),
      album('Arthropods', '33EMYBW', '2019', 'SVBKVLT', 'El cuerpo muta, el ritmo también. Un disco que hizo del club una biología extraña.', '33EMYBW Arthropods full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8f/cb/e3/8fcbe312-513d-7f3d-efb4-2f461d5c97a2/5056321604163.png/100x100bb.jpg', 'https://music.apple.com/us/album/arthropods/1481056271?uo=4'),
      album('Birdy Island', 'Howie Lee', '2021', 'Mais Um', 'Tradición, ambient y city electronics en un disco que suena íntimo y expansivo a la vez.', 'Howie Lee Birdy Island full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/32/8a/31/328a31ac-9ae4-daa7-154f-e7fe7fe8961e/4062548024425.png/100x100bb.jpg', 'https://music.apple.com/us/album/birdy-island/1683465140?uo=4'),
    ],
    forecast: {
      trendName: 'Quantum traditionalism',
      period: '2026-2027',
      description:
        'La escena no abandona el club, pero lo vuelve más permeable a sistemas de afinación, timbre y temporalidad tomados de archivos mucho más largos que la pista. La tradición deja de ilustrar; empieza a calcular.',
      keyArtists: ['Gooooose', 'xiexie', 'Scintii', 'Hyph11E'],
      futureSounds: ['Club no lineal', 'Timbres dinásticos modelados', 'Glitch orgánico', 'Pop espectral'],
      curiosities: [
        'La conexión entre pop experimental y club music es más porosa que en casi cualquier otra escena del presente.',
        'El sonido urbano chino actual trabaja con densidad, no con maximalismo vacío.',
      ],
      forecastReleases: [
        release('Gooooose', 'Wriggle', '2026', 'Album', 'Gooooose Wriggle full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/53/9b/8e/539b8e2b-351f-4d2f-aaff-31839417dc9f/16080.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/wriggle/1870624598?uo=4'),
        release('xiexie', 'wellwell', '2024', 'Album', 'xiexie wellwell full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/16/3b/63/163b63a5-0e27-aaaa-1630-a7d99368a643/PCD-25392.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/wellwell/1740732960?uo=4'),
        release('Scintii', 'wetlands, harbours... and stations in between', '2024', 'EP', 'Scintii wetlands harbours and stations in between', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c8/59/58/c85958b9-cb5a-bfdd-cf40-dd4bcb12c8b2/cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/wetlands-harbours-and-stations-in-between-ep/1784317456?uo=4'),
        release('Hyph11E', 'Aperture', '2020', 'Album', 'Hyph11E Aperture full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/38/9f/59/389f591c-8d18-04f5-ddb3-f86a5e18ce0c/5056321614278.png/100x100bb.jpg', 'https://music.apple.com/us/album/aperture/1531296738?uo=4'),
      ],
    },
    curatedReads: [
      read('The Sound of Experimental Bass and Club Music in Beijing', 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/the-sound-of-experimental-bass-and-club-music-in-beijing'),
      read('A Local Culture Created: How the Pandemic Connected China’s Club Scene', 'Mixmag', 'https://mixmag.net/feature/a-local-culture-created-how-the-pandemic-connected-chinas-club-scene'),
      read('Faye Wong: Fuzhao / Sky', 'Pitchfork', 'https://pitchfork.com/reviews/albums/1541-fuzao-sky/'),
      read('Yu Su to Launch Shanghai-Based Music Festival OUHE', 'Mixmag', 'https://mixmag.net/read/yu-su-to-launch-shanghai-based-music-festival-ouhe-news'),
    ],
    editorialPlaylist: [
      track('Wriggle', 'Gooooose', 'Urban fracture with surgical motion', 'Gooooose Wriggle'),
      track('Prism', '33EMYBW', 'Club mutation as organism', '33EMYBW Arthropods'),
      track('wellwell', 'xiexie', 'Pop abstraction in soft focus', 'xiexie wellwell'),
      track('Paperbags', 'Scintii', 'Synthetic intimacy under pressure', 'Scintii wetlands harbours and stations in between'),
    ],
    independentLabel: {
      name: 'SVBKVLT',
      focus: 'Radical club mutation, future pop fracture and design-forward sonic risk',
      since: '2016',
    },
    subgenreFocus: {
      name: 'Quantum traditionalism',
      description: 'Tecnología avanzada usada para hacer que la tradición vuelva a respirar en tiempo presente.',
    },
  },
});

const brazil = createEntry({
  countryName: 'Brazil',
  summary:
    'Brasil vuelve a demostrar que la modernidad no consiste en copiar un centro sino en devorarlo. En 2026 el país suena a funk de periferia, sofisticación armónica, herencia tropicalista y una nueva expansión del archivo indígena y afro-diaspórico hacia el club y el pop.',
  traditions: ['Tropicalismo', 'MPB', 'Baile funk', 'Afro-Brazilian rhythm systems'],
  musicalStyles: ['Funk de mandelão', 'Peripheral electronics', 'Neo-MPB', 'Indigenismo futurista'],
  instruments: ['Percusión polirrítmica', 'Subgrave distorsionado', 'Guitarra armónica', 'Voces diáspora'],
  curiosities: [
    'La innovación brasileña contemporánea no sale solo de Río o São Paulo; cada vez más proviene de circuitos periféricos y escenas descentralizadas.',
    'El funk dejó de ser excepción marginal y pasó a ser arquitectura del presente.',
  ],
  modernInfluentialArtists: [
    { name: 'Ana Frango Elétrico', genre: 'Sophisticated pop', relevance: 'Hace sonar lo clásico como si acabara de ser descubierto por una ciudad sudorosa y elegante.' },
    { name: 'VHOOR', genre: 'Peripheral electronics', relevance: 'Convirtió el baile funk y sus mutaciones en un lenguaje listo para circular globalmente sin perder barrio.' },
    { name: 'Luedji Luna', genre: 'Afro-Brazilian songcraft', relevance: 'Devuelve densidad espiritual y política a la canción brasileña contemporánea.' },
  ],
  sampleOrigins: [
    {
      description: 'Samba, tropicalismo, cantos afro-diaspóricos, bombos de favela y armonía expansiva brasileña.',
      famousUsage: 'Brasil sigue siendo una usina de síntesis: todo entra, nada sale igual.',
    },
  ],
  editorial: {
    magazineStyle: 'Peripheral luxury with tropical entropy',
    sceneDescription:
      'La escena brasileña de 2026 no decide entre refinamiento y calle. Los mezcla hasta que la distinción deja de servir. Funk, canción sofisticada, experimentación y archivo territorial vuelven a encontrarse.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Recurada offline con foco en club, MPB mutante y nuevos archivos.',
    editorialChapters: [
      chapter('De la samba al tropicalismo', 'La modernidad como digestión', `La historia brasileña enseña algo que pocas escenas entendieron con tanta claridad: modernizar no significa abandonar la raíz, sino deformarla hasta que vuelva a producir presente. De João Gilberto al tropicalismo, Brasil aprendió a absorber rock, pop, jazz o electrónica sin perder densidad local. Esa lección sigue vigente en 2026.`),
      chapter('Electrónica de periferia', 'El triunfo del batidão', `El baile funk ya no es un pie de página. Es la arquitectura del presente. Productores como VHOOR y toda una constelación periférica entendieron que la calidad ya no depende del estudio caro sino de la invención sobre material comprimido, distorsionado y ferozmente utilitario. El pop brasileño actual se escribe sobre esa infraestructura rítmica.`),
      chapter('Indigenismo futurista', 'La frontera sonora que viene', `El futuro más interesante del país no aparece en la superficie turística de la marca Brasil. Aparece en artistas que vuelven a la tierra, a lenguas originarias, a cantos y memorias territoriales para reinyectarlos en el presente digital. El próximo ciclo brasileño promete desplazar el centro: de la postal urbana a la selva, del lifestyle a la cosmología.`),
    ],
    keyVenues: ['Baile funk circuits', 'Independent art clubs in São Paulo', 'Hybrid festival ecosystems'],
    recordStores: [
      { name: 'Peripheral DJ networks', type: 'Living archive', description: 'Los archivos de pista circulan de mano en mano con una rapidez que la prensa apenas alcanza a documentar.' },
      { name: 'Independent Brazilian labels', type: 'Distributed', description: 'Sellos pequeños siguen cuidando el cruce entre sofisticación compositiva y presión física de la pista.' },
    ],
    experimentalArtist: {
      name: 'VHOOR',
      description: 'El funk como arquitectura móvil, con producción detallista y conciencia plena de la presión física del bajo.',
      similarTo: 'DJ Anderson do Paraíso, BADSISTA, Sango cuando mira al sur',
    },
    visualAesthetic: {
      styleName: 'Tropical pressure',
      description: 'Color cálido, tipografía modernista y energía de periferia convertida en sistema visual.',
    },
    localVerdict: {
      platformName: 'TerraMusica Desk',
      score: '8.8',
      consensus: 'Brasil sigue siendo un laboratorio de síntesis donde la pista y la canción todavía dialogan.',
    },
    bestLyricsQuote: 'La selva no pide permiso al sintetizador; le enseña a respirar.',
    soundPalette: ['Subgrave distorsionado', 'Armonía luminosa', 'Percusión dura', 'Aire tropical nocturno'],
    sonicSignature: {
      instruments: ['Percusión brasileña', 'Bombo de baile', 'Guitarras armónicas', 'Voz frontal'],
      vocals: ['Íntimas', 'Magnéticas', 'Colectivas'],
      production: ['Brillante', 'Percusiva', 'Espacial'],
    },
    localSlang: {
      term: 'Fluxo',
      definition: 'La calle y la pista entendidas como infraestructura compartida, no solo como fiesta.',
    },
    cultAlbums: [
      album('Clube da Esquina', 'Milton Nascimento & Lô Borges', '1972', 'EMI Odeon', 'La piedra armónica de un país que siempre supo volver compleja la canción.', 'Milton Nascimento Lo Borges Clube da Esquina full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/16/fe/be/16febeb7-b081-c66c-a26b-1f7cd097bd45/19UMGIM66061.rgb.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/clube-da-esquina/1473446573?uo=4'),
      album("Bom Mesmo É Estar Debaixo D'Água", 'Luedji Luna', '2020', 'YB Music', 'Espiritualidad, diáspora y una sofisticación emocional que expande la MPB hacia el presente.', "Luedji Luna Bom Mesmo É Estar Debaixo D'Água full album", 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d0/96/f5/d096f5c3-4ce3-d42d-bf59-eb1ef8f475f1/8445162214216.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/bom-mesmo-%C3%A9-estar-debaixo-d%C3%A1gua/1533038475?uo=4'),
      album('Me Chama De Gato Que Eu Sou Sua', 'Ana Frango Elétrico', '2023', 'RISCO', 'Pop sofisticado, crónica afectiva y una inteligencia armónica que hace parecer casual lo dificilísimo.', 'Ana Frango Eletrico Me Chama De Gato Que Eu Sou Sua full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/68/49/e1/6849e120-68fc-99ca-e7ba-0e41347966b7/cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/me-chama-de-gato-que-eu-sou-sua/1700639465?uo=4'),
    ],
    forecast: {
      trendName: 'Peripheral futurism',
      period: '2026-2027',
      description:
        'El futuro brasileño no quiere limpiar la calle para exportarla. Quiere aumentar su resolución. El funk se vuelve más detallista, la canción más rítmica, y la investigación territorial reaparece como método de invención.',
      keyArtists: ['VHOOR', 'Marina Sena', 'Nina Maia', 'DJ Ramon Sucesso'],
      futureSounds: ['Mandelão refinado', 'Neo-MPB de club', 'Percusión densa', 'Archivo territorial'],
      curiosities: [
        'Brasil sigue exportando tendencia, pero su fuerza real está en cómo reordena internamente sus propias periferias.',
        'La sofisticación ya no pertenece a una élite sonora: circula también en la pista popular.',
      ],
      forecastReleases: [
        release('VHOOR', 'De Keke!', '2026', 'Album', 'VHOOR De Keke full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/63/a8/ea/63a8ea04-4ad7-248e-df99-c9ffbab86af6/840200577502_cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/de-keke/1886045981?uo=4'),
        release('Marina Sena', 'Coisas Naturais', '2025', 'Album', 'Marina Sena Coisas Naturais full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d9/44/9d/d9449d4c-46ea-d73d-015c-6437f281bbaa/196872989106.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/coisas-naturais/1803241760?uo=4'),
        release('Nina Maia', 'INTEIRA (Deluxe Edition)', '2025', 'Album', 'Nina Maia INTEIRA full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/65/bc/ee/65bcee03-ef24-e2ef-e85b-fd9a5c6e5788/cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/inteira-deluxe-edition/1815498380?uo=4'),
        release('Dj Ramon Sucesso', 'Sexta dos Crias, Vol. 1', '2025', 'Album', 'DJ Ramon Sucesso Sexta dos Crias Vol 1', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c7/df/fa/c7dffa12-1c75-1bf9-8af5-bb48d3262ccb/cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/sexta-dos-crias-vol-1/1792001925?uo=4'),
      ],
    },
    curatedReads: [
      read('The Endlessly Evolving World of Brazilian Funk', 'Bandcamp Daily', 'https://daily.bandcamp.com/lists/the-endlessly-evolving-world-of-brazilian-funk'),
      read('DJ Anderson do Paraíso: Queridão', 'Pitchfork', 'https://pitchfork.com/reviews/albums/dj-anderson-do-paraiso-queridao/'),
      read('The Mix 011: DJ Anderson do Paraíso', 'Mixmag', 'https://mixmag.net/read/the-mix-011-dj-anderson-do-paraiso-music'),
      read('It’s Time for Electronic Music to Turn Its Dreams Into Reality', 'Pitchfork', 'https://pitchfork.com/features/electronic-music-column/its-time-for-electronic-music-to-turn-its-dreams-into-reality/'),
    ],
    editorialPlaylist: [
      track('De Keke!', 'VHOOR', 'Peripheral electronics with full-body low end', 'VHOOR De Keke'),
      track('Partiu', 'Ana Frango Elétrico', 'Sophisticated heat', 'Ana Frango Eletrico Me Chama De Gato Que Eu Sou Sua'),
      track('Aniversário', 'Marina Sena', 'Neo-MPB under club pressure', 'Marina Sena Coisas Naturais'),
      track("Bom Mesmo É Estar Debaixo D'Água", 'Luedji Luna', 'Spiritual tide', "Luedji Luna Bom Mesmo É Estar Debaixo D'Água"),
    ],
    independentLabel: {
      name: 'RISCO',
      focus: 'Contemporary Brazilian songcraft with adventurous edges',
      since: '2018',
    },
    subgenreFocus: {
      name: 'Peripheral futurism',
      description: 'La periferia como motor de innovación técnica, rítmica y simbólica.',
    },
  },
});

const japan = createEntry({
  countryName: 'Japan',
  summary:
    'Japón entra en 2026 con una rareza que el resto del planeta empieza a mirar de nuevo: su capacidad para combinar miniatura, precisión técnica, sensibilidad pop y un culto al vacío que vuelve futurista incluso a su archivo más antiguo.',
  traditions: ['YMO lineage', 'Shibuya-kei intelligence', 'Ambient minimalism', 'Beat scene cross-pollination'],
  musicalStyles: ['Ambient biomorphic', 'Hyper-connected pop', 'Juke crossovers', 'Neo-city-pop spectral'],
  instruments: ['Drum machines precisas', 'Sintetizadores de diseño fino', 'Instrumentos tradicionales procesados', 'Field recordings delicados'],
  curiosities: [
    'Parte del futuro japonés parece una reacción contra el exceso de estímulo: menos volumen, más transformación del espacio.',
    'El beat scene y el pop de autor dialogan con una naturalidad que otras escenas todavía envidian.',
  ],
  modernInfluentialArtists: [
    { name: 'Ichiko Aoba', genre: 'Folk / ambient', relevance: 'Volvió global una sensibilidad japonesa basada en el detalle, el vacío y la miniatura ecológica.' },
    { name: 'Eiko Ishibashi', genre: 'Avant-pop / composition', relevance: 'Hace de la canción un dispositivo para pensar historia, paisaje y ansiedad contemporánea.' },
    { name: 'Meitei', genre: 'Ambient / folklore abstraction', relevance: 'Reimagina la memoria sonora japonesa como una presencia vaporosa pero material.' },
  ],
  sampleOrigins: [
    {
      description: 'City pop, ambient, programación minuciosa, paisaje natural y una relación casi arquitectónica con el silencio.',
      famousUsage: 'En la escena japonesa el espacio no es fondo: es parte del instrumento.',
    },
  ],
  editorial: {
    magazineStyle: 'Hi-resolution silence under neon weather',
    sceneDescription:
      'La escena japonesa del presente se mueve entre dos extremos que aquí no se contradicen: hiperconectividad sensorial y búsqueda radical de calma. El resultado es una música que transforma el espacio antes de pedir atención.',
    editorialStatus: 'curated',
    editorialStatusNote: 'Curada offline con énfasis en sensibilidad japonesa contemporánea y archivo vivo.',
    editorialChapters: [
      chapter('El eco de Haruomi', 'El mañana de ayer', `La sombra de Haruomi Hosono, Ryuichi Sakamoto y la Yellow Magic Orchestra sigue siendo larga porque no pertenece solo al pasado. En 2026 su influencia aparece sobre todo como filosofía de producción: precisión, humor sutil, atención al detalle y una intuición para hacer que lo artificial respire con naturalidad.`),
      chapter('Shibuya 2.6', 'La realidad aumentada del ritmo', `La escena actual de Tokio opera bajo hiperconectividad, pero su mejor música no se deja aplastar por la saturación. Pop amorfo, beat scene, ambient y electrónica de diseño fino conviven en una metrópolis donde una canción puede girar en segundos del jazz al breakbeat sin perder identidad. El caos se administra con elegancia milimétrica.`),
      chapter('Silencio sónico', 'Hacia una ecología del sonido', `Lo que viene no es más ruido. Es una ecología auditiva. El ambient biomórfico, las composiciones que parecen diseñadas para transformar habitaciones enteras y una nueva sensibilidad hacia frecuencias sutiles marcan el rumbo. La música japonesa futura no necesita gritar para ser radical; le alcanza con reorganizar el aire.`),
    ],
    keyVenues: ['Tokyo listening spaces', 'Beat scene rooms', 'Intermedia arts venues'],
    recordStores: [
      { name: 'Disc Union orbit', type: 'Archive / retail', description: 'El archivo físico sigue siendo una parte material de cómo el público japonés aprende a escuchar.' },
      { name: 'Independent beat labels', type: 'Distributed', description: 'La escena beat y de club se mantiene viva en catálogos pequeños y una circulación extremadamente curada.' },
    ],
    experimentalArtist: {
      name: 'Eiko Ishibashi',
      description: 'Canción, composición y paisaje mental en una forma que nunca se resuelve del todo.',
      similarTo: 'Ryuichi Sakamoto, David Sylvian, Laurel Halo por textura',
    },
    visualAesthetic: {
      styleName: 'Neon minimal ecology',
      description: 'Pantalla limpia, color contenido, dibujos técnicos y una relación táctil con el vacío.',
    },
    localVerdict: {
      platformName: 'TerraMusica Desk',
      score: '8.9',
      consensus: 'Japón sigue haciendo que la precisión suene emocional y que el silencio cargue futuro.',
    },
    bestLyricsQuote: 'The room is small, but the frequencies keep inventing weather.',
    soundPalette: ['Aire brillante', 'Pulso diminuto', 'Reverberación clara', 'Detalle orgánico'],
    sonicSignature: {
      instruments: ['Synths de precisión', 'Percusión seca', 'Acústicos procesados', 'Grabaciones delicadas'],
      vocals: ['Íntimas', 'Luminosas', 'Discretamente extrañas'],
      production: ['Clara', 'Microscópica', 'Espacial'],
    },
    localSlang: {
      term: 'Ambient biomórfico',
      definition: 'Música diseñada para reorganizar el espacio sensible más que para dominarlo con volumen.',
    },
    cultAlbums: [
      album('PACIFIC', 'Haruomi Hosono, Shigeru Suzuki & Tatsuro Yamashita', '1978', 'CBS/Sony', 'Un documento donde lo tropical, lo sintético y lo japonés dejaron de sonar incompatibles.', 'Haruomi Hosono Pacific full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/71/26/d8/7126d88b-7cf5-5ba5-7043-f1d26a8dd87f/jacket_MHXX00766B00Z_550.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/pacific/1538790131?uo=4'),
      album('Long Season', 'Fishmans', '1996', 'Polydor', 'Una obra total que convirtió el tiempo extendido en trance emocional y urbano.', 'Fishmans Long Season full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/16/e3/2d/16e32ddd-32b0-f0a0-91aa-c847a1094df5/00602567908678.rgb.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/long-season/1416925635?uo=4'),
      album('Fantasma (Remastered)', 'Cornelius', '1998', 'Trattoria / Matador', 'Shibuya-kei llevado al extremo: collage pop, estudio como juguete infinito y oído absolutamente singular.', 'Cornelius Fantasma full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/20/5e/d0/205ed0cf-8af1-385a-8dce-ee2400632d9a/859721636049_cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/fantasma-remastered/1254006696?uo=4'),
    ],
    forecast: {
      trendName: 'Ambient biomorphic',
      period: '2026-2027',
      description:
        'La escena japonesa futura parece menos interesada en gritar novedad que en alterar de manera precisa la relación entre cuerpo, habitación y frecuencia. El pop muta, sí, pero el cambio decisivo ocurre en cómo la música ocupa el aire.',
      keyArtists: ['Ichiko Aoba', 'Eiko Ishibashi', 'Risa Taniguchi', 'Kaho Nakamura'],
      futureSounds: ['Miniatura luminosa', 'Beat contenido', 'Folk espectral', 'Ambient espacial'],
      curiosities: [
        'El detalle sigue siendo una forma de radicalidad en una era que premia la sobreseñalización.',
        'Tokio mantiene una de las relaciones más sofisticadas entre visualidad, frecuencia y arquitectura de club.',
      ],
      forecastReleases: [
        release('Ichiko Aoba', 'Luminescent Creatures', '2025', 'Album', 'Ichiko Aoba Luminescent Creatures full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/87/5b/5b/875b5b86-30f3-d50a-de93-5bb5ad4cb141/49449.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/luminescent-creatures/1777069509?uo=4'),
        release('Eiko Ishibashi', 'Antigone', '2025', 'Album', 'Eiko Ishibashi Antigone full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0a/a9/6a/0aa96ac7-6880-dfdd-bcf8-2e791c75f2a4/781484094425.png/100x100bb.jpg', 'https://music.apple.com/us/album/antigone/1786650157?uo=4'),
        release('Risa Taniguchi', 'Break It', '2025', 'Single', 'Risa Taniguchi Break It single', 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/05/ef/3b/05ef3b10-6f90-73f4-8ac1-b076ecebfdfe/cover.jpg/100x100bb.jpg', 'https://music.apple.com/us/album/break-it-single/1828092659?uo=4'),
        release('Kaho Nakamura', 'NIA', '2022', 'Album', 'Kaho Nakamura NIA full album', 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/dc/8b/fc/dc8bfc57-9e7b-2322-2545-151db58618d8/4543034051724.png/100x100bb.jpg', 'https://music.apple.com/us/album/nia/1611115294?uo=4'),
      ],
    },
    curatedReads: [
      read("Submerse's Guide to the Japanese Beat Scene", 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/submerses-guide-to-the-japanese-beat-scene'),
      read("The Inventive World of Japan's Juke and Footwork Scene", 'Bandcamp Daily', 'https://daily.bandcamp.com/scene-report/the-inventive-world-of-japans-juke-and-footwork-scene'),
      read('Ichiko Aoba: Luminescent Creatures', 'Pitchfork', 'https://pitchfork.com/reviews/albums/ichiko-aoba-luminescent-creatures/'),
      read('Cornelius: Fantasma', 'Pitchfork', 'https://pitchfork.com/reviews/albums/cornelius-fantasma/'),
    ],
    editorialPlaylist: [
      track('Luciférine', 'Ichiko Aoba', 'Biomorphic tenderness', 'Ichiko Aoba Luminescent Creatures'),
      track('Antigone', 'Eiko Ishibashi', 'Composition under pressure', 'Eiko Ishibashi Antigone'),
      track('Break It', 'Risa Taniguchi', 'Peak-time precision', 'Risa Taniguchi Break It'),
      track('NIA', 'Kaho Nakamura', 'Pop changing shape mid-flight', 'Kaho Nakamura NIA'),
    ],
    independentLabel: {
      name: 'Mule Musiq',
      focus: 'Japanese electronic depth with global ears',
      since: '2004',
    },
    subgenreFocus: {
      name: 'Ambient biomorphic',
      description: 'Frecuencia, espacio y organismo pensados como un mismo entorno compositivo.',
    },
  },
});

export const preloadedData: Record<string, CulturalData> = {
  'Global Issue': globalIssue,
  Argentina: argentina,
  'United States of America': unitedStates,
  'United Kingdom': unitedKingdom,
  India: india,
  China: china,
  Brazil: brazil,
  Japan: japan,
  Mexico: createInProgressCountry('Mexico', 'La escena mexicana queda visible, pero esta edición todavía no integra una investigación a la altura del resto del dossier editorial.'),
  France: createInProgressCountry('France', 'Francia permanece en el atlas, pero la revista todavía no consolidó una versión offline con archivo y lecturas suficientes.'),
  Russia: createInProgressCountry('Russia', 'La ficha rusa se mantiene abierta como archivo pendiente en lugar de reciclar texto superficial o desactualizado.'),
  Australia: createInProgressCountry('Australia', 'Australia sigue accesible en el mapa mientras se completa una curaduría más precisa de escenas, discos y líneas editoriales.'),
  'South Africa': createInProgressCountry('South Africa', 'Sudáfrica queda marcada como próxima entrega; preferimos una nota honesta antes que sostener un perfil incompleto.'),
};
