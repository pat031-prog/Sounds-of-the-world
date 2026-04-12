import { EssaySource } from '../types';

export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  dek?: string;
  author: string;
  content: string[];
  imageUrl: string;
  relatedCountries: string[];
  sources: EssaySource[];
}

const research = {
  raCanon: {
    title: 'The Best Electronic Records of 2000-25',
    source: 'Resident Advisor',
    url: 'https://ra.co/features/4482',
    publishedAt: 'Dec 11, 2025',
  },
  ctm: {
    title: 'CTM x Resident Advisor: Rethinking Music Ecosystems',
    source: 'Resident Advisor / CTM',
    url: 'https://ra.co/events/2346501',
    publishedAt: 'Jan 30, 2026',
  },
  bandcampJan: {
    title: 'The Best Electronic Music on Bandcamp, January 2026',
    source: 'Bandcamp Daily',
    url: 'https://daily.bandcamp.com/best-electronic/the-best-electronic-music-on-bandcamp-january-2026',
    publishedAt: 'Feb 2, 2026',
  },
  bandcampFeb: {
    title: 'The Best Electronic Music on Bandcamp, February 2026',
    source: 'Bandcamp Daily',
    url: 'https://daily.bandcamp.com/best-electronic/the-best-electronic-music-on-bandcamp-february-2026',
    publishedAt: 'Mar 4, 2026',
  },
  bandcampExperimental: {
    title: 'The Best Experimental Music on Bandcamp, February 2026',
    source: 'Bandcamp Daily',
    url: 'https://daily.bandcamp.com/best-experimental/the-best-experimental-music-on-bandcamp-february-2026',
    publishedAt: 'Mar 3, 2026',
  },
  bandcampRadio: {
    title: 'Bandcamp launches new weekly radio show for electronic music',
    source: 'Mixmag',
    url: 'https://mixmag.net/amp/bandcamp-launches-new-weekly-radio-show-electronic-music',
    publishedAt: 'Mar 27, 2026',
  },
  aiLabels: {
    title: 'Apple Music to inform listeners if music on platform is AI-generated',
    source: 'Mixmag',
    url: 'https://mixmag.net/read/apple-music-ai-meta-data-information-listeners-music-generated-news',
    publishedAt: 'Mar 9, 2026',
  },
  autoMix: {
    title: 'Apple Music launches new AutoMix feature that blends tracks together using AI',
    source: 'Mixmag',
    url: 'https://mixmag.net/read/apple-music-launches-new-automix-feature-that-blends-tracks-together-using-ai-tech',
    publishedAt: 'Jun 12, 2025',
  },
  klay: {
    title: 'Major Labels Sign Licensing Deals With AI Music Company Klay',
    source: 'Pitchfork',
    url: 'https://pitchfork.com/news/warner-music-group-signs-licensing-deal-with-ai-music-company-klay/',
    publishedAt: 'Nov 20, 2025',
  },
  nvidia: {
    title: 'Universal and Nvidia Promise New Partnership Is an "Antidote to AI Slop"',
    source: 'Pitchfork',
    url: 'https://pitchfork.com/news/universal-and-nvidia-promise-new-partnership-is-an-antidote-to-ai-slop/',
    publishedAt: 'Jan 9, 2026',
  },
  pitchforkElectronic: {
    title: 'The 30 Best Electronic Albums of 2025',
    source: 'Pitchfork',
    url: 'https://pitchfork.com/features/lists-and-guides/best-electronic-albums-2025/',
    publishedAt: 'Dec 9, 2025',
  },
  pitchforkAlbums: {
    title: 'The 50 Best Albums of 2025',
    source: 'Pitchfork',
    url: 'https://pitchfork.com/features/lists-and-guides/best-albums-2025/',
    publishedAt: 'Dec 2, 2025',
  },
  fisherGhosts: {
    title: 'Ghosts of My Life: Writings on Depression, Hauntology and Lost Futures',
    source: 'k-punk / Repeater Books',
    url: 'https://repeaterbooks.com/product/ghosts-of-my-life/',
    publishedAt: '2014',
  },
  ccruWritings: {
    title: 'CCRU: Writings 1997-2003',
    source: 'Urbanomic',
    url: 'https://www.urbanomic.com/book/ccru-writings-1997-2003/',
    publishedAt: '2017',
  },
};

export const essays: Essay[] = [
  {
    id: 'algoritmo',
    title: 'El Sonido del Algoritmo',
    subtitle: 'La plataforma ya no ordena solo el gusto. Ordena el tiempo interno del track.',
    dek:
      'La recomendacion automatica paso de filtro a forma historica. El beat contemporaneo nace bajo una economia de continuidad, y la musica mas viva responde introduciendo tartamudeo, opacidad y mano humana alli donde el software promete fluidez perfecta.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United States of America', 'United Kingdom', 'Japan'],
    sources: [research.autoMix, research.aiLabels, research.klay, research.nvidia],
    content: [
      'El algoritmo ya no se limita a decidir que aparece despues. Decide cuanto tarda en empezar un tema, cuanta informacion puede sostener un arreglo antes de ser interpretado como friccion, cuanto silencio puede tolerar un oyente entrenado por el salto infinito. La plataforma parece neutral porque habla en lenguaje de servicio, pero su verdadera tarea es disciplinar el tiempo. En esa administracion del tiempo se juega buena parte de la estetica contemporanea. El loop corto gana porque circula mejor. La transicion suave gana porque retiene. La mezcla brillante gana porque necesita explicar todo de inmediato. No se trata de censura tradicional. Se trata de una forma mas eficaz de gobierno: volver deseable lo que mejor alimenta la interfaz.',
      'Durante 2025 y 2026 esa mutacion se volvio visible. Apple Music lanzo AutoMix en junio de 2025 y presento la mezcla automatica entre canciones como una mejora obvia de la escucha. En marzo de 2026 la misma plataforma anuncio que empezaria a indicar cuando un track fue generado con IA. Dos gestos que se explican entre si. Por un lado, automatizar el flujo para que nada raspe. Por el otro, etiquetar la sospecha para administrar la ansiedad del usuario frente a la proliferacion de musica sintetica. El software ya no distribuye solamente repertorio. Administra confianza, continuidad y credibilidad.',
      'Eso explica por que la musica realmente viva del periodo no responde refugiandose en una pureza analogica de museo. Responde creando friccion dentro del entorno digital. Bombos que no entran del todo limpios en la cuadricula. Voces demasiado secas o demasiado cerca, como si el cuerpo quisiera arruinar la perfeccion del preset. Mezclas que conservan grano. Discos que se abren de a poco y se niegan a comportarse como trailers de si mismos. La resistencia no consiste en negar la herramienta, sino en impedir que la herramienta vuelva invisible la decision humana. El criterio, hoy, es la huella que queda despues de recortar todas las opciones que la maquina considera razonables.',
      'La oposicion simple entre humanidad y tecnologia ya no alcanza. El estudio real de 2026 es hibrido hasta la medula. Separadores de stems, motores semanticos para navegar librerias, asistentes de mezcla, recomendaciones de master, sistemas que organizan archivos mejor que cualquier memoria fatigada. El problema no es si existe asistencia. El problema es cuando la asistencia se convierte en sustitucion del juicio. Pitchfork lo dejo claro al cubrir los acuerdos de Klay con Warner, Universal y Sony en noviembre de 2025, y otra vez cuando describio en enero de 2026 la alianza entre Universal y Nvidia como un supuesto antidoto contra el AI slop. La industria no discute si habra IA. Discute quien controla su legitimidad.',
      'A nivel de escucha, esa mutacion produce una paradoja hermosa. Cuanto mas perfecto se vuelve el flujo, mas valiosa se vuelve la interrupcion. La dificultad deja de ser una mueca de prestigio y vuelve a ser defensa. Un album que tarda en abrirse, una voz que no se entrega del todo, un final que no resuelve, una mezcla que permite oir el borde de sus costuras: todos esos gestos recuperan potencia politica porque sabotean el mandato de continuidad. La musica vuelve a recordar que la atencion no es un recurso a explotar, sino una forma de vida que aun puede decidir sus propios ritmos.',
      'El sonido del algoritmo no es un genero. Es la atmosfera base de una epoca que quiere volver comparable toda experiencia. La mejor musica de los proximos anos no triunfara por sonar mas eficiente que la maquina. Triunfara cuando logre introducir duda en el sistema disenado para borrarla. Sonara como un software obligado a respirar. Sonara como una interfaz que, por un momento, pierde su sonrisa de servicio y deja escuchar el ruido del cuerpo atrapado detras de la pantalla.',
    ],
  },
  {
    id: 'guerra',
    title: 'La Guerra Escucha Primero',
    subtitle: 'Antes del comunicado llega la atmosfera. Antes del frente, la logistica.',
    dek:
      'La guerra contemporanea no entra en la musica solo como protesta o consigna. Entra como precision, vigilancia, cadena de suministro, ansiedad energetica y tactica de la supervivencia. El estudio domestico ya funciona como cabina civil dentro de un paisaje logistico en crisis.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['China', 'United States of America', 'Global Issue'],
    sources: [research.ctm, research.nvidia, research.klay, research.bandcampFeb],
    content: [
      'La guerra actual rara vez entra en la musica como himno. Entra como condicion del aire. Se filtra en la obsesion por el control, en el deseo de una senal limpia dentro de un mundo saturado de ruina informativa, en la precision casi forense con la que muchos productores organizan el espacio sonoro. El estudio domestico ya no es la fantasia de refugio total que podia vender la cultura del bedroom producer. Es una cabina conectada a redes electricas inestables, a chips caros, a cables submarinos, a plataformas que viven de monetizar la ansiedad. Aunque no nombre ningun conflicto, la musica compone desde adentro de ese clima.',
      'Por eso buena parte de la electronica reciente suena tactica. Bombos que avanzan como convoyes. Graves que ocupan el aire con la autoridad de una sirena industrial. Ambientes tensos, como si la mezcla entera estuviera monitoreando una amenaza que no termina de hacerse visible. No es propaganda. Es contagio formal. El poder militar y el poder logistico comparten una sensibilidad: ambos necesitan anticipar, mapear, interceptar. La musica absorbe esa sensibilidad incluso cuando habla de intimidad. En 2026 hasta el susurro mas privado esta ecualizado por una infraestructura de vigilancia.',
      'La clave material esta en la cadena. Cada track depende de una red de extraccion, transporte, calculo y almacenamiento. Chips, centros de datos, energia, minerales, mano de obra invisibilizada, rutas maritimas tensionadas. La guerra no es el afuera del archivo. Es una de sus condiciones de posibilidad. Cuando Pitchfork cubrio la alianza entre Universal y Nvidia a comienzos de 2026, el articulo parecia una nota sobre IA y derechos. En realidad tambien era una nota sobre infraestructura. Toda promesa de creatividad asistida descansa sobre una arquitectura industrial y geopolitica de una escala brutal.',
      'En ese panorama el club recupera una funcion civil. No como escapismo de brochure, sino como protocolo minimo de reagrupamiento. La insistencia en salas chicas, politicas de cuidado, no-phone dancefloors y temporalidades menos extractivas no es nostalgia. Es respuesta sensible a una sociedad donde toda experiencia tiende a quedar indexada, vigilada y revendida. La jornada de CTM y Resident Advisor en enero de 2026 sobre ecosistemas musicales no fue un debate de oficina. Fue una admision historica: la musica necesita pensar de nuevo sus propias infraestructuras si no quiere sonar como mera banda sonora de la disgregacion.',
      'La pista, entonces, ya no es solo una valvula de escape. Es un ensayo de coordinacion entre desconocidos. Un dispositivo para recordar que todavia existe sincronizacion sin algoritmo central. Ese recuerdo importa mas cuando la logica del conflicto vuelve sospechosa toda aglomeracion y todo cuerpo no rastreado. Bailar sin archivo no cura nada, pero produce un intervalo de soberania. Un pequeno corte en la maquinaria que quiere convertir cada movimiento en metadato. La escucha comun se vuelve una forma tenue pero real de defensa civil.',
      'La guerra escucha primero porque el poder necesita oir antes de actuar. La musica lucida invierte la direccion del circuito. Convierte el oido paranoico en escucha compartida, el pulso tactico en respiracion comun, la presion en forma. No disuelve el conflicto. Lo reorganiza a nivel humano. Y a veces, cuando el subgrave logra reunir lo que la epoca dispersa, incluso la noche mas dura se parece a una asamblea sin discurso: pura coordinacion del sistema nervioso bajo la amenaza de un mundo que se rompe.',
    ],
  },
  {
    id: 'club',
    title: 'Club Como Infraestructura',
    subtitle: 'La pista ya no alcanza como metafora de fuga. Hoy funciona como tejido material.',
    dek:
      'El club importa menos como fantasia nocturna y mas como red de cuidados, economia minima, sistema de sonido y laboratorio social. Pensarlo como infraestructura obliga a unir programacion, puerta, transporte, seguridad, renta y escucha en una misma ecuacion.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United Kingdom', 'Brazil', 'Argentina'],
    sources: [research.ctm, research.bandcampRadio, research.bandcampJan],
    content: [
      'Durante demasiado tiempo la cultura de club fue vendida como pausa del mundo. Una noche fuera de la historia, una burbuja donde la politica quedaba suspendida bajo la promesa de hedonismo. En 2026 esa ficcion ya no resiste una sola inspeccion seria. El club importa porque es uno de los pocos lugares donde todavia puede producirse una sincronizacion no algoritmica entre cuerpos distintos. Gente que no comparte timeline ni dashboard entrando en el mismo pulso, en la misma presion sonora, en el mismo riesgo de aburrirse o entregarse. Esa coincidencia parece pequena, pero dentro de una cultura gobernada por interfaces individuales se vuelve enorme.',
      'Pensar el club como infraestructura obliga a dejar atras la romantizacion del line up. Importa quien alquila la sala, quien paga el sonido, quien asume el costo del cuidado, quien vuelve a casa a las cinco de la manana, quien queda afuera por precio, por miedo o por desgaste. El sistema de sonido y el sistema de cuidados pertenecen a la misma pregunta. No hay set inocente en un espacio mal sostenido. Tampoco hay utopia automatica en un cartel politicamente correcto si la experiencia material repite las jerarquias de siempre. La infraestructura es el verdadero genero oculto de la noche.',
      'De ahi que la conversacion abierta por CTM y Resident Advisor en Berlin a fines de enero de 2026 haya importado tanto. Cuando el debate pasa de booking a ecosistema, la escena esta admitiendo que el problema ya no es solo estetico. Es logistico, laboral y urbano. La cultura de club depende de alquileres, permisos, trabajo invisible, transporte nocturno, salud mental y energia. Cada uno de esos frentes condiciona como suena la musica. Cuando una escena se precariza hasta el hueso, la pista no solo se vacia: cambia el tipo de tension que la musica puede sostener.',
      'Por eso las escenas mas inteligentes del presente ya no se piensan solo en el pico del set. Importan la radio barrial, la feria de sellos, la tienda que de noche muta en sala, el espacio hibrido donde se ensaya una comunidad antes de que llegue la marca. El club se expande mas alla de su puerta. Se vuelve una ecologia de atencion. Mixmag entendio algo de eso al cubrir el nuevo programa semanal de radio electronica de Bandcamp en marzo de 2026. No era simplemente una noticia sobre contenido. Era una senal de que la curaduria humana vuelve a ser infraestructura cuando el feed ya no alcanza para sostener pertenencia.',
      'Tambien cambia la escala del deseo. La sala pequena deja de verse como carencia y empieza a sentirse como metodo. Menos gigantismo, mas forma. Menos pantalla, mas presion acustica. Menos branding, mas memoria comun. La precariedad no se romantiza, pero tampoco se acepta como condena. Se administra con precision. Una cabina sin espectacularidad puede producir mas futuro que un festival entero si ahi todavia existe la libertad de tensar el tiempo sin obedecerle a la retencion.',
      'Cuando el club funciona, no ofrece una salida limpia del presente. Lo recompone durante unas horas. Vuelve respirable la densidad del momento y recuerda que todavia existe una politica del cuerpo que no entra del todo en las metricas. Ese recordatorio no es accesorio. Es una de las ultimas arquitecturas sensibles que le quedan a la ciudad. Si desaparece, no solo perdemos fiestas. Perdemos una tecnologia social donde el sonido todavia puede organizar vida comun sin pasar primero por la aprobacion de una plataforma.',
    ],
  },
  {
    id: 'silicio',
    title: 'Silicio, Escasez y Ruina',
    subtitle: 'Toda nube termina pesando. Toda interfaz tiene un subsuelo mineral.',
    dek:
      'La musica de esta decada ya no puede narrarse como fenomeno inmaterial. Cada plugin, cada computadora y cada plataforma se apoyan en una geologia de chips, puertos, mineria y desgaste. De esa materialidad nace una nueva sensibilidad sonora: mas rota, mas economica, mas precisa.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['China', 'Japan', 'Global Issue'],
    sources: [research.raCanon, research.nvidia, research.pitchforkElectronic],
    content: [
      'La fantasia digital prometio ligereza. Todo parecia nube, acceso y velocidad. Sin embargo, cada nueva ola tecnica termino revelando mas infraestructura: centros de datos, puertos, minas, fabricas, cables, electricidad, residuos. La musica contemporanea esta hecha con esa materia aunque el marketing siga hablando como si los archivos brotaran del aire. Un sintetizador no es una idea. Un plugin no es una metafora. Una plataforma no es un destino natural. Son objetos historicos sostenidos por cadenas materiales que hoy muestran fatiga. El futuro dejo de parecer liviano. Ahora pesa y hace ruido al moverse.',
      'Ese peso cambia la escucha. Buena parte de la electronica mas interesante de los ultimos anos trabaja con una sensibilidad de ruina tecnica. Ventilacion de servidor, clipping seco, graves que recuerdan motores fatigados, agudos que iluminan como tubos industriales. No es gusto por lo aspero en abstracto. Es una estetica que admite el costo material del brillo digital. El silicio ya no aparece como promesa de pureza futurista. Aparece como la prueba de que toda claridad tecnica descansa sobre una geologia violenta. La belleza, entonces, deja de ser transparencia y empieza a incluir desgaste.',
      'La escasez tambien reorganiza el deseo del estudio. Equipos mas caros, giras menos sostenibles, repuestos inciertos, alquileres imposibles, software por suscripcion, tiempo mental fragmentado. Frente a ese cuadro reaparece una etica de la seleccion. Menos capas, mas corte. Menos decoracion, mas presion de forma. La reduccion no funciona solo como austeridad impuesta. Tambien funciona como acto critico. Cada sonido que sobrevive a la poda importa mas. Cada decision gana peso porque se toma contra un horizonte de saturacion tecnica.',
      'En diciembre de 2025 Resident Advisor publico su canon de discos electronicos de 2000 a 2025. El valor del articulo no estuvo solamente en la lista. Estuvo en revelar que la era digital ya puede escucharse como arqueologia. Muchos de esos albums hoy suenan menos como monumentos al progreso que como restos activos de distintos regimens tecnicos: el laptop underground, el dubstep pre plataforma, el maximalismo de estudio, el after rave contemplativo, la voz tratada como interfaz. Escucharlos en 2026 es recorrer capas de hardware y software que todavia no terminan de morir.',
      'Ese paisaje de fatiga vuelve digna a la falla. Maquinas envejecidas, laptops cansadas, interfaces que sobreviven gracias a un cable torcido, discos duros dudosos, librerias heredadas, backups incompletos. La perfeccion pierde prestigio cuando el sistema entero muestra desgaste. Gana valor lo que respira pese a la grieta. De ahi el regreso de texturas rotas, de flujos incompletos, de sets que no esconden del todo la costura. La falla deja de ser accidente. Se vuelve sintaxis. Una nueva manera de decir la verdad sobre las condiciones materiales del presente.',
      'La ruina tecnica no anuncia el fin de la musica. Anuncia el fin de una fantasia sobre ella. Lo que sobreviva lo hara porque aprenda a trabajar con restos: chips caros, estudios chicos, maquinas heredadas, energia nerviosa, decisiones radicalmente finitas. Tal vez por eso el futuro mas convincente ya no suena como expansion infinita. Suena como inteligencia bajo restriccion. Como una luz tenue adentro de un rack viejo. Como una cancion que sabe de donde sale la electricidad antes de pedirnos que creamos en la magia.',
    ],
  },
  {
    id: 'feed',
    title: 'After the Feed',
    subtitle: 'La escucha mas viva aparece cuando deja de competir por inmediatez.',
    dek:
      'Despues del feed no llega un regreso romantico al offline. Llega una curaduria mas lenta, una politica de la duracion y un deseo nuevo de contexto. La abundancia ya no produce libertad. Produce fatiga, y por eso la mediacion humana vuelve a importar.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['Argentina', 'India', 'Global Issue'],
    sources: [research.bandcampRadio, research.bandcampJan, research.bandcampExperimental],
    content: [
      'El feed entreno una escucha de rafaga. Un hook, una textura, un gesto suficiente para decidir si algo merecia mas de quince segundos de vida. Durante anos parecio inevitable que toda musica debiera justificarse de inmediato. Las intros se acortaron, la produccion se volvio explicativa, la estructura se acelero. Despues del feed, la musica que importa hace otra cosa. Retarda. Reserva. Deja pliegues. Recupera la opacidad no como prestigio vacio, sino como hospitalidad para una atencion exhausta. La gran novedad de este momento es que la demora vuelve a sentirse radical.',
      'En ese contexto la curaduria humana recupera una dignidad que parecia perdida. No porque el algoritmo haya dejado de ser util, sino porque su utilidad no alcanza para construir escena. En marzo de 2026 Mixmag informo el lanzamiento de un programa semanal de radio electronica en Bandcamp. El hecho importa menos como movimiento de marca y mas como sintoma. Cuando una plataforma decide reforzar la voz curatorial, esta admitiendo que la abundancia automatizada produce ruido antes que sentido. El problema ya no es encontrar musica. El problema es encontrar una relacion legible entre la musica, el territorio y el tiempo que la produce.',
      'Las selecciones mensuales de Bandcamp Daily para electronica y experimental cumplen justamente esa funcion. No ordenan un centro. Cartografian periferias. Y esa diferencia es enorme. El feed aplana todo sobre la misma superficie de atencion cuantificable. La curaduria seria devuelve escala, parentesco, metodo, genealogia. Vuelve visible que un disco de Rotterdam, una miniatura pop mutante de Londres y un artefacto ambient de Tokio no comparten solamente genero, sino condiciones de escucha y de trabajo. Nombrar esas diferencias vuelve a ser una tarea critica de primer orden.',
      'Escuchar despues del feed no significa salir de internet. Significa dejar de obedecerle. La nueva escucha nace en discos que toleran demora, en tracks que no se entregan por completo al primer contacto, en obras que prefieren construir un clima antes que una confirmacion. Eso no equivale a elitismo. Equivale a recuperar el derecho a una experiencia que no se agota en su primera utilidad. La duracion vuelve a ser una politica minima. Quien logra sostenerla ya no compite por visibilidad. Construye refugio.',
      'Tambien cambia la economia afectiva del oyente. Menos ansiedad por estar al dia. Mas deseo de construir archivo. Menos catalogo infinito. Mas relacion concreta con sellos, radios, compilados, textos, programadores y escenas que todavia suenan firmadas por alguien. El critico reaparece entonces no como arbitro de estatus, sino como organizador de atencion. Su tarea no es cerrar el sentido, sino abrir un margen para que la escucha vuelva a respirar sin someterse a la metrificacion permanente.',
      'After the feed nombra ese margen. No es una utopia limpia ni una retirada heroica. Es una zona de resistencia tenue donde la musica deja de funcionar como fondo obediente y vuelve a instalar una pregunta. A veces basta un disco que tarda en abrirse, una voz que se reserva algo, un set que se toma su tiempo para torcer la noche. Cuando eso ocurre, el algoritmo sigue ahi. Pero durante unos minutos deja de mandar. Y ese pequeno intervalo ya se parece mucho a la libertad.',
    ],
  },
  {
    id: 'hard-reset',
    title: 'Hard Reset del Futuro',
    subtitle: 'No viene una utopia brillante. Viene una recomposicion dura y selectiva.',
    dek:
      'El futuro ya no se presenta como progreso lineal. Se presenta como reset parcial de escalas, herramientas, canones y expectativas. Menos gigantismo, mas criterio. Menos novedad de marketing, mas metodo, archivo y recombinacion con nervio.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['Global Issue', 'Brazil', 'Japan'],
    sources: [research.raCanon, research.pitchforkElectronic, research.pitchforkAlbums],
    content: [
      'El futuro dejo de comportarse como promesa lineal. Ahora aparece en reseteos parciales: del club, del formato, de la prensa, del estudio, de la interfaz. Cada crisis reciente, economica, climatica, logistica, psiquica, corroyo un poco mas la idea de progreso continuo que sostenia a buena parte de la industria. Pero de esa erosion no sale solo nostalgia. Sale una voluntad de recomenzar con herramientas mas concretas y expectativas menos ingenuas. El hard reset no es un gesto de tabula rasa. Es una practica de seleccion feroz.',
      'Esa seleccion se escucha en todos lados. Menos lanzamientos pero mas editados. Menos hype y mas contexto. Menos gigantismo como valor automatico. Sellos que publican menos y mejor. Artistas que usan IA como asistente de taller y no como coartada para licuar criterio. Clubes que no necesitan simular un festival para sentir escala. La reduccion deja de parecer derrota cuando se entiende como estrategia de claridad. Una escena agotada por el exceso descubre que la poda tambien puede producir intensidad.',
      'Tambien cambia la definicion de novedad. Durante anos lo nuevo equivalio a lo tecnologicamente superior o a lo visualmente impactante. El presente sospecha de esa ecuacion porque ya vio demasiado futuro vendido como interfaz vacia. Lo nuevo puede consistir en un uso distinto del archivo, en una tradicion que vuelve bajo otra presion historica, en una tecnica vieja liberada del mandato de productividad. La innovacion deja de ser showreel y recupera densidad de metodo. Lo realmente nuevo ya no siempre brilla. A veces insiste.',
      'Las listas de 2025 dejaron esa tension expuesta. El gran canon ya no puede fingir estabilidad. Resident Advisor miro hacia atras y encontro una genealogia hecha de saltos, no de lineas rectas. Pitchfork reviso el ano y encontro un paisaje donde ambient tactil, pop mutante, techno quebrado, collage vocal y experimentacion formal convivian sin querer convertirse en tendencia total. Esa dispersion no es debilidad. Es la forma real que adopta el presente cuando deja de maquillarse como consenso.',
      'El reset tambien es geografico. La proxima musica decisiva no tiene obligacion de nacer en el centro historico de la industria ni en la plataforma dominante. Puede aparecer en una ciudad secundaria, en una radio pequena, en un sello sin departamento de marketing, en una tienda que de noche se vuelve sala, en un cuarto mal acondicionado donde todavia importa el tiempo invertido en escuchar. Cuando el horizonte comun se rompe, la invencion se distribuye. Ya no avanza como linea maestra. Se propaga por fisuras.',
      'Hard reset del futuro significa aceptar una verdad menos comoda pero mas fertil. El deseo no va a volver como gran solucion tecnica. Va a volver como recomposicion parcial, tosca, intensa, a veces diminuta. Un disco imposible de resumir, un club bien cuidado, una herramienta usada contra la logica para la que fue disenada, una escena pequena que se niega a sonar como demo para inversores. Ahi empieza otra vez la musica. No donde el sistema promete orden perfecto, sino donde algo insiste en desobedecer.',
    ],
  },
  {
    id: 'archivo',
    title: 'Archivo Contra Plataforma',
    subtitle: 'Guardar ya no es nostalgia. Guardar es defensa de una memoria no optimizada.',
    dek:
      'La plataforma quiere presente continuo. El archivo quiere espesor, diferencia y demora. Entre ambos se libra una disputa silenciosa sobre que merece ser recordado, que tipo de historia musical puede circular y quien tiene derecho a construir genealogia.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['Argentina', 'China', 'Global Issue'],
    sources: [research.raCanon, research.bandcampJan, research.bandcampRadio, research.aiLabels],
    content: [
      'La plataforma vive del presente continuo. Su gran promesa es que todo este disponible ahora y que el usuario nunca tenga que detenerse demasiado en nada. El archivo opera al reves. Introduce espesor, demora, capas, restos, rutas indirectas. Por eso hoy archivar no es un gesto conservador. Es un acto de resistencia contra una economia cultural que prefiere volver intercambiable cualquier obra antes que permitirle adquirir sedimentacion. En un ecosistema dominado por recomendaciones efimeras, el archivo devuelve profundidad historica y tambien devuelve conflicto. No todos los sonidos quieren sonar contemporaneos. Algunos quieren recordar de que ruina vienen.',
      'La disputa no es abstracta. Pasa por metadatos, por disponibilidad territorial, por cambios de derechos, por la desaparicion de blogs, por algoritmos que desindexan rarezas, por sellos que no pueden sostener catalogo en todas las plataformas, por escenas enteras cuya memoria circula mejor en radio, zip, cdr o Bandcamp que en las vitrinas pulidas del streaming. Cuando Apple anuncia en 2026 que informara si una musica fue generada con IA, tambien esta admitiendo algo mas profundo: el archivo del presente ya esta en disputa. La pregunta no es solo que se produce. La pregunta es bajo que etiqueta sera recordado.',
      'El gran canon de Resident Advisor sobre 2000 a 2025 tuvo valor precisamente por eso. No fue una lista para decorar una efemeride. Fue un gesto de archivo en un momento en que la memoria musical se vuelve cada vez mas dependiente de plataformas cuyo interes principal no es historico. Recuperar Burial, Kode9, SOPHIE, Kali Malone o Skee Mask dentro de una misma lectura no es solo ordenar gustos. Es construir una genealogia material del presente. Decir: esto tambien pertenece a la historia, aunque la interfaz actual prefiera otra superficie de consumo.',
      'Bandcamp sigue siendo clave porque entiende algo elemental: el archivo no es solo almacenamiento. Es contexto. Las selecciones mensuales, las notas editoriales, la nueva radio semanal lanzada en 2026, todo eso refuerza una idea de mediacion que la plataforma generalista abandono. No alcanza con alojar audio. Hace falta producir un ecosistema de lectura que permita enlazar sellos, escenas, ciudades y estaticas sin reducirlo todo a una fila de sugerencias. El archivo serio no es deposito. Es montaje.',
      'Por eso la curaduria vuelve a ser una forma de poder, pero tambien de responsabilidad. Quien archiva decide que entra en la narracion y bajo que luz. El problema no es tener canon. El problema es dejar que el canon sea producido unicamente por infraestructuras disenadas para maximizar permanencia y conversion. La plataforma administra el presente como si fuera un supermercado de sensaciones. El archivo, cuando funciona, recompone tiempo historico. Devuelve relaciones. Permite oir lo que una escena hereda, lo que traiciona, lo que transforma y lo que pierde.',
      'Archivo contra plataforma no significa negarle valor al acceso. Significa recordar que la memoria no puede quedar en manos exclusivas de una logica de servicio. Si la musica del futuro quiere seguir diciendo algo distinto a la publicidad de si misma, necesitara mas archivos vivos, mas radios, mas sellos con criterio, mas tiendas, mas textos, mas personas dispuestas a conectar restos. Donde la plataforma ve inventario, el archivo todavia puede ver destino. Y a veces esa diferencia alcanza para salvar una escena entera del olvido elegante.',
    ],
  },
  {
    id: 'canon-roto',
    title: 'Canon Roto, Futuro Inestable',
    subtitle: 'El canon ya no puede fingir unidad. Esa fractura es tambien una oportunidad.',
    dek:
      'La curaduria contemporanea vive entre dos peligros: la lista convertida en branding y la dispersion total del feed. Entre ambos extremos aparece otra tarea posible, mas exigente: construir canones provisionales, abiertos, materiales, capaces de sostener diferencia sin volverla decoracion.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United Kingdom', 'Brazil', 'Global Issue'],
    sources: [research.raCanon, research.pitchforkElectronic, research.pitchforkAlbums, research.bandcampExperimental],
    content: [
      'Hablar de canon en 2026 provoca dos reacciones opuestas y igual de pobres. La primera lo celebra como sello de prestigio, como si toda lista fuera automaticamente garantia de autoridad. La segunda lo rechaza en nombre de una supuesta horizontalidad infinita, como si el feed fuera un paisaje democratico por naturaleza. Ninguna de las dos posiciones alcanza. El canon sigue importando porque organiza atencion, transmite genealogia y define que parte del ruido merece escucharse de nuevo. Pero ya no puede presentarse como bloque estable. Hoy solo existen canones rotos, parciales, provisorios, sostenidos por fricciones reales entre escenas, territorios y modos de escucha.',
      'Esa rotura no es un defecto accidental. Es la forma historica que adopta una cultura musical atravesada por plataformas, sobreproduccion, micro escenas y crisis de infraestructura. Cuando Pitchfork y Resident Advisor publicaron sus balances de 2025, lo que mostraron no fue un centro solido, sino un campo de tensiones. Ambient tactil junto a club mutante. Pop procesado junto a minimalismo de soundsystem. Cantautoria torcida junto a tectonica subgrave. El canon contemporaneo ya no avanza por escuelas compactas. Avanza por conexiones electricas entre zonas que a simple vista parecen incompatibles.',
      'Eso obliga a revisar la tarea critica. Curar ya no puede significar solo enumerar favoritos. Hace falta explicar por que ciertos discos importan ahora, bajo que condiciones materiales fueron posibles, que responden de la epoca y que vuelven escuchable dentro de ella. Un canon sin causalidad es marketing de gusto. Un canon con espesor material puede convertirse en herramienta. No para congelar el presente, sino para hacerlo discutible. La mejor critica no clausura el conflicto. Lo concentra.',
      'Bandcamp Daily lo entiende cuando cruza sus selecciones electronicas y experimentales con geografias improbables, sellos pequenos y relatos de trabajo concreto. La dispersion que para el feed parece caos, alli se vuelve cartografia. Ese movimiento importa porque demuestra que el futuro no tiene una sola direccion. Tiene climas, tacticas, presiones, niveles de riesgo y politicas de forma. El canon roto es mas verdadero justamente porque ya no puede ocultar la heterogeneidad de aquello que pretende representar.',
      'Tambien hay una dimension emocional en juego. Durante anos el canon funciono como promesa de orden frente al exceso. Hoy ni siquiera esa promesa parece creible. Por eso las listas valiosas son las que admiten su propia fragilidad. Las que no dicen esto es todo, sino esto es una lectura posible del momento. Esa modestia no le quita fuerza. Se la da. Un canon consciente de su inestabilidad puede volverse mucho mas generoso que uno fabricado para blindar jerarquias.',
      'Canon roto, futuro inestable no es una lamentacion. Es una invitacion a curar mejor. A aceptar que la escena ya no cabe en una sola sintaxis, y que justamente por eso necesita mas trabajo critico, no menos. Cuando el centro se rompe, la responsabilidad de montar relaciones se vuelve mayor. Y en esa tarea, a veces, una lista bien escrita puede hacer algo que ningun algoritmo consigue: abrir una puerta entre restos dispersos y hacer que, por un segundo, el desorden revele forma.',
    ],
  },
  {
    id: 'hauntology',
    title: 'Fantasmas del Futuro: Fisher, el CCRU y la Jungla',
    subtitle: 'El jungle de los 90 no fue solo velocidad. Fue la promesa de un futuro que nunca llegó.',
    dek:
      'Mark Fisher, el CCRU de Warwick y la escena jungle británica compartieron una obsesión: el futuro como fuerza activa, no como destino. Cuando ese futuro se canceló, la música pasó de profecía a hauntología. Este ensayo recorre esa línea que va del amen break a la teoría aceleracionista.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United Kingdom', 'Global Issue'],
    sources: [research.fisherGhosts, research.ccruWritings, research.raCanon, research.pitchforkElectronic],
    content: [
      'En 1995, mientras Goldie publicaba Timeless y los pirate radios de Londres escupían amen breaks acelerados a 170 bpm, un grupo de académicos en la Universidad de Warwick pensaba que la jungla era la música más importante del planeta. No la más popular, no la más bonita: la más importante. El CCRU (Cybernetic Culture Research Unit), liderado informalmente por Sadie Plant y despues por Nick Land, veía en el drum & bass algo que la crítica musical convencional no podía ver: una máquina de producir futuro. Un sonido que no representaba el mañana sino que lo forzaba a existir en el presente.',
      'Mark Fisher, entonces estudiante de doctorado y miembro del CCRU, absorbió esa intuición y la convirtió en el eje de toda su obra posterior. Para Fisher, la música nunca fue simplemente entretenimiento ni objeto estético. Era un sistema de detección temporal: una tecnología capaz de registrar qué tipo de futuro era aún pensable en cada momento histórico. El jungle de mediados de los 90 registraba un futuro vernáculo, negro, urbano, veloz, hecho con restos de soul y reggae triturados hasta volverse irreconocibles. Era popular y a la vez alienígena. Venía de abajo y sonaba como si viniera de otro planeta.',
      'Photek llevó esa lógica al extremo con Modus Operandi en 1997. Cada break era diseccionado con precisión forense, cada silencio pesaba como una amenaza. Fisher lo citaba como ejemplo de lo que llamaba "futurismo popular": una sofisticación formal que no necesitaba académicos para validarse porque su público era la pista de baile, no la galería. Roni Size ganó el Mercury Prize ese mismo año con New Forms, y por un momento pareció que el futuro realmente había llegado: música negra británica con la complejidad de un cuarteto de jazz y la potencia de un sistema de sonido de Brixton.',
      'Pero el futuro se canceló. Fisher dedicaría buena parte de su carrera a explicar cómo y por qué. En Ghosts of My Life (2014), su libro central, describe una cultura que ya no es capaz de producir shock genuino, atrapada en un loop de recombinaciones estériles. La música dejó de anticipar futuros y empezó a reciclar pasados. El término que usó, tomado de Derrida, fue hauntología: la presencia espectral de futuros que fueron prometidos pero nunca se materializaron. Burial, cuyo Untrue (2007) suena como un fantasma de la jungla pirata de los 90 filtrado por lluvia digital y soledad suburbana, era para Fisher el artefacto hauntológico perfecto.',
      'El CCRU había ido más lejos, o más raro, antes de disolverse a fines de los 90. Sus textos, reunidos en CCRU: Writings 1997-2003, mezclan filosofía continental, teoría de sistemas, ficción ocultista y análisis de drum & bass en un cóctel que todavía resulta inclasificable. El concepto de hiperstición —ficciones que se vuelven reales por la fuerza de su circulación— nació ahí, y se aplica hoy con perturbadora exactitud a la era de la desinformación y la IA generativa. El jungle no era solo el soundtrack del CCRU. Era su modelo operativo: algo que avanzaba tan rápido que obligaba a la teoría a correr detrás.',
      'Hoy la jungla regresa como referencia en productores como KAVARI, en el revival de breakbeats acelerados, en la estética de sellos como Metalheadz y Good Looking que vuelven a circular con reverencia renovada. Pero el punto de Fisher sigue vigente, quizás más que nunca: el problema no es si la jungla suena bien en 2026. El problema es si en 2026 somos capaces de producir algo que suene tan genuinamente futuro como aquello sonaba en 1995. La hauntología no es nostalgia. Es la pregunta más incómoda que se le puede hacer al presente: ¿por qué el futuro ya no suena como antes?',
    ],
  },
  {
    id: 'london-after-the-rave',
    title: 'Londres después de la Rave (Sobre Burial)',
    subtitle: 'Extracto del archivo de k-punk (Mark Fisher, 2007)',
    dek: 'El genio de Burial es haber capturado cómo el aislamiento tecnológico avanzado resuena en las arquitecturas concretas del sur de Londres.',
    author: 'Mark Fisher (Trad. Editorial SOTW)',
    imageUrl: '',
    relatedCountries: ['United Kingdom'],
    sources: [research.fisherGhosts],
    content: [
      'Si el primer disco de Burial vació el dubstep de todo MC, dejando solo las huellas sónicas del drum & bass y el UK garage resonando en una ciudad abandonada, *Untrue* está obsesionado con la voz humana. Pero no la voz humana como presencia viva. Las voces en *Untrue* son micro-muestras fantasmales de acapellas de R&B, subidas de tono, procesadas, cortadas y vueltas a ensamblar como mensajes crípticos dejados en una contestadora automática del más allá.',
      'Hay una tristeza abrumadora aquí, pero no es una decepción adolescente. Es la tristeza íntima de los viajes nocturnos en el transporte público londinense. Es el sonido de estar rodeado por millones de personas mientras se percibe una soledad oceánica. Esas voces sin cuerpo de *Untrue* operan como entidades hauntológicas: fragmentos de un pasado (el éxtasis de la cultura rave de los 90, la calidez del garage) que se niegan a descansar en paz.',
      'El Londres de Burial no es el centro financiero resplandeciente ni los monumentos turísticos; es el Londres de la periferia, de las luces de sodio bajo la llovizna, del McDonald’s a las 3 de la mañana, de los abrigos húmedos y los auriculares aislando a los pasajeros en el bus nocturno. El genio de Burial es haber capturado cómo el aislamiento tecnológico avanzado —estar físicamente entre extraños pero conectado mentalmente a redes distantes— resuena en las arquitecturas concretas del sur de Londres.',
      'Escuchar a Burial es enfrentarse a la resaca de la euforia colectiva. La fiesta ha terminado irreparablemente, los sistemas de sonido se han roto. Lo que sobrevive es un deseo melancólico de conexiones que quizás nunca existieron, codificado en el crujido del vinilo y el suspiro digital.'
    ],
  },
  {
    id: 'nihilism-cthulhu',
    title: '¿Nihilismo o Cthulhu? El invierno de Joy Division',
    subtitle: 'Extracto del archivo de k-punk (Mark Fisher, 2005)',
    dek: 'Lo que escuchamos en Joy Division es el sonido del sujeto moderno siendo vaciado por fuerzas inmensas, impersonales e inhumanas.',
    author: 'Mark Fisher (Trad. Editorial SOTW)',
    imageUrl: '',
    relatedCountries: ['United Kingdom'],
    sources: [research.fisherGhosts],
    content: [
      'La música de Joy Division es a menudo clasificada como deprimente o nihilista, pero ambas etiquetas fallan radicalmente en capturar su poder real. El sonido de Joy Division, orquestado magistralmente por la producción espacial y gélida de Martin Hannett, no anula el significado (como haría el nihilismo puro) ni se revuelca en la miseria psíquica personal (como el rock confesional o el grunge de los 90). Más bien, traza una cartografía del desastre objetivo.',
      'Lo que escuchamos en *Unknown Pleasures* es el sonido del sujeto moderno siendo vaciado por fuerzas inmensas, impersonales e inhumanas. No es casualidad que Ian Curtis hablara de "salas que se enfrían", de trasmisiones desde el vacío cósmico. El bajo de Peter Hook no era soporte rítmico, era la voz principal tallando espacio en la roca muerta; la batería de Stephen Morris era militar, maquinal, inescrutable. Eran el sonido de fábricas abandonadas en el norte de Inglaterra mutando hacia algo mucho más vasto.',
      'Las voces de Curtis no parecen provenir de un individuo expresando emociones privadas, sino que suenan como un médium canalizando el trauma neurológico de la modernidad tardía. No es angustia romántica; es horror cósmico. Si algo es comparable a Joy Division, no son sus contemporáneos punks que aún creían que podían gritarle a la bestia para que retrocediera. Joy Division ya sabía que la bestia había ganado, y que nosotros ni siquiera éramos relevantes para ella.',
      'Ese es su vínculo con las lecturas de Lovecraft y Cthulhu en el CCRU y en la teoría oscura. Un reconocimiento sobrio, casi forense, de que el colapso (ya sea económico, psíquico o temporal) está ocurriendo a escalas insoportables para la mente humana. Bailamos, por lo tanto, la danza final de los fantasmas en el hielo.'
    ],
  },
  {
    id: 'slow-cancellation',
    title: 'La Cancelación Lenta del Futuro',
    subtitle: 'Extracto del archivo de k-punk (Mark Fisher, 2011)',
    dek: 'El jungle representaba un mundo cibernético que emergía frente a nuestros ojos. Hoy resulta hauntológico porque es el artefacto de un futuro espectacular que nos fue robado.',
    author: 'Mark Fisher (Trad. Editorial SOTW)',
    imageUrl: '',
    relatedCountries: ['United Kingdom'],
    sources: [research.fisherGhosts, research.ccruWritings],
    content: [
      'Una de las intuiciones más siniestras de la última década es la creciente sensación de que el futuro ha sido cancelado en silencio. Ya no vivimos bajo la promesa de rupturas radicales, de revoluciones estéticas o sociales. En lugar de una corriente vibrante hacia lo desconocido, la cultura se ha estancado en un pastiche constante, reciclando formas del pasado y presentándolas como novedades a través de filtros de alta definición.',
      'En la década de los 90, géneros como el Jungle y el Drum and Bass sonaban, inequívocamente, a algo que acababa de aterrizar desde el futuro. Los *amen breaks* triturados, acelerados más allá del límite del cuerpo humano y las oscuras pulsaciones de los subgraves representaban un mundo cibernético que emergía frente a nuestros ojos. Hoy en día, escuchar a Goldie o Photek resulta hauntológico no porque hayan envejecido mal, sino porque son los artefactos de un futuro espectacular que esperábamos y que secretamente nos fue robado.',
      'La música contemporánea, en contraste, a menudo adolece de lo que Franco "Bifo" Berardi llama "impotencia". La maquinaria retrospectiva nos tiene paralizados. Incluso la electrónica de vanguardia tiende a mirar por encima del hombro. Para entender el estancamiento, la hauntología se ha vuelto indispensable. No es un culto por lo antiguo, sino un diagnóstico de nuestra incapacidad de imaginar alternativas reales. El futuro nos persigue como un holograma persistente de lo que no sucedió.',
      'El trabajo de artistas verdaderamente contemporáneos es confrontar esta cancelación progresiva. Aquellos que operan bajo este clima deben navegar las ruinas del pop y los fantasmas tecnológicos no para fingir que seguimos avanzando a la misma velocidad de antes, sino para inventariar el daño y, quizás, entre las grietas temporales, encontrar el vector de salida del Realismo Capitalista.'
    ],
  }
];
