export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  content: string[];
  imageUrl: string;
  relatedCountries: string[];
}

export const essays: Essay[] = [
  {
    id: 'algoritmo',
    title: 'El Sonido del Algoritmo',
    subtitle:
      'La recomendación ya no organiza solamente el gusto: moldea duración, mezcla, curva emocional y umbral de tolerancia.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United States of America', 'United Kingdom', 'Japan'],
    content: [
      'El algoritmo dejó de ser una herramienta de descubrimiento para convertirse en una infraestructura estética. No solo decide qué llega después. Decide qué tipo de intro merece existir, qué densidad sobrevive al scroll, qué golpe de caja no espanta a la plataforma, qué silencio dura demasiado para una economía de atención entrenada por el salto continuo. En ese régimen, la música no muere: se repliega. Se vuelve funcional, lisa, correctamente intercambiable. La rareza sigue ahí, pero administrada como decoración. El conflicto entra domesticado, con su propia miniatura lista para circular.',
      'Durante 2025 y 2026 esa mutación dejó de ser intuición y se volvió política visible de plataforma. En junio de 2025 Apple Music lanzó AutoMix y vendió la mezcla automática entre tracks como experiencia inteligente, casi invisible. En marzo de 2026 la misma plataforma anunció que empezaría a informar al oyente cuándo una pista fue generada con IA. Dos movimientos del mismo sistema: automatizar la continuidad por un lado, etiquetar la sospecha por el otro. El problema no es únicamente técnico. Es ideológico. El software ya no solo distribuye música: administra confianza, fricción y credibilidad.',
      'Por eso la mejor electrónica del presente no responde fingiendo pureza analógica. Responde dejando huellas de fricción dentro del propio entorno digital. Bombos que no entran del todo limpios en la grilla. Voces secas, demasiado próximas, como si la respiración insistiera en escapar del preset. Mezclas que conservan un margen de opacidad. Productores que usan modelos para ordenar archivos, separar stems o generar variaciones tímbricas, pero mantienen visible la mano que corta, descarta y vuelve a ensuciar. Esa mano es más que oficio. Es el último resto político del criterio.',
      'La crítica fácil opone humanidad y máquina como si todavía estuviéramos ante una frontera clara. La situación real es menos cinematográfica y más incómoda. El estudio contemporáneo ya es híbrido. Plugins que anticipan decisiones, sistemas de masterización automática, sugerencias de armonía, detección de estructura, motores de búsqueda semántica para librerías enteras. La cuestión no es si hay asistencia. La cuestión es dónde termina la asistencia y empieza la sustitución del juicio. En esa línea delgada se juega una nueva ética de producción.',
      'También cambia la forma de escuchar. Cuando una plataforma promete continuidad perfecta, la discontinuidad vuelve a volverse deseable. De ahí el regreso de discos que respiran raro, de tracks que parecen abrir ventanas y no simplemente encadenarse, de álbumes que usan la duración como un arma contra la obediencia del feed. La dificultad ya no funciona como signo de prestigio vacío. Funciona como defensa. Como modo de recordar que la atención puede ser otra cosa que una variable a optimizar.',
      'El sonido del algoritmo no es un género. Es el ruido de fondo de una época que quiere volver toda experiencia comparable, medible y reemplazable. La música más viva de los próximos años no triunfará por sonar más eficiente que las máquinas. Triunfará cuando logre introducir duda dentro del sistema que fue diseñado para borrarla. Sonará como si el software hubiera aprendido a tartamudear. Y en ese tartamudeo, por fin, volverá a entrar el alma.',
    ],
  },
  {
    id: 'guerra',
    title: 'La Guerra Escucha Primero',
    subtitle:
      'Antes de la noticia llega su traducción sónica: ansiedad logística, aire táctico, subgrave en estado de alerta.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['China', 'United States of America', 'Global Issue'],
    content: [
      'La guerra contemporánea no entra en la música como consigna inmediata. Entra como clima operativo. Se filtra en la compresión, en la necesidad de control, en la obsesión por la señal limpia dentro de un mundo saturado de ruinas informativas. El productor de 2026 trabaja rodeado por cadenas de suministro inestables, energía cara, noticias de vigilancia permanente y un imaginario técnico poblado por drones, satélites y mapas térmicos. Aunque no lo nombre, compone dentro de ese aire. El estudio doméstico ya no es refugio puro. Es una cabina de escucha del desastre.',
      'Por eso una parte decisiva de la electrónica reciente suena forense. No militar en sentido literal, pero sí tácticamente precisa. Bombos que avanzan como convoyes. Ambientes que sostienen una presión atmosférica casi de sala de control. Voces editadas con una frialdad que recuerda más al montaje de inteligencia que al romanticismo residual de la canción. No se trata de propaganda. Se trata de contagio formal. El presente bélico produce sensibilidad antes que discurso, y la música absorbe esa sensibilidad incluso cuando aparenta hablar de intimidad, paisaje o pista.',
      'La situación se vuelve más compleja cuando la infraestructura digital que sostiene la escucha participa del mismo escenario geopolítico. Chips, centros de datos, rutas marítimas, minería, cables submarinos, plataformas estadounidenses y fábricas asiáticas: la guerra ya no es un afuera que luego se comenta en un track. Es la condición material de posibilidad del track. Cada beat está atravesado por una cadena logística. Cada archivo parece limpio solo porque oculta una historia opaca de extracción, transporte, cálculo y desgaste.',
      'Frente a eso, la pista de baile recobra una función civil. No como escapismo sentimental, sino como protocolo mínimo de reagrupamiento. La insistencia en no-phones, salas chicas, sistemas de cuidado y atención sostenida no responde solo a nostalgia clubber. Responde a una sociedad donde toda experiencia tiende a quedar inmediatamente indexada, monetizada y vigilada. Bailar sin archivo no es romanticismo. Es una forma precaria de soberanía temporal. Un pequeño apagón voluntario dentro del régimen de exposición total.',
      'Que CTM y Resident Advisor hayan dedicado el 30 de enero de 2026 una jornada entera en Berlín a repensar ecosistemas musicales no fue un gesto administrativo. Fue una admisión histórica. Ya no alcanza con programar artistas y repetir la ficción del club como burbuja. La pregunta por infraestructura, sostenibilidad y comunidad se volvió estética antes que burocrática. Lo que está en juego no es solo cómo sobrevivirá la cultura. También cómo sonará bajo presión prolongada.',
      'La guerra escucha primero porque el poder necesita oír antes de mostrar. La música lúcida invierte ese circuito: convierte ese oído paranoico en escucha compartida, catarsis, cuerpo sincronizado, defensa sensible. No cancela el conflicto. Lo reorganiza a ras del suelo. Y a veces, en esa reorganización, incluso el subgrave más oscuro se vuelve una forma modesta pero real de protección civil.',
    ],
  },
  {
    id: 'club',
    title: 'Club Como Infraestructura',
    subtitle:
      'La pista ya no alcanza como metáfora de fuga: hoy funciona como sistema de cuidados, filtro de atención y laboratorio social.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United Kingdom', 'Brazil', 'Argentina'],
    content: [
      'Durante demasiado tiempo la cultura de club fue narrada como suspensión temporal de la historia: una noche fuera del mundo, una cápsula donde el contexto quedaba congelado bajo la promesa de hedonismo. En 2026 esa ficción ya no se sostiene. El club importa porque es uno de los pocos lugares donde todavía puede fabricarse una sincronía no algorítmica entre cuerpos. Personas distintas entrando en el mismo pulso, en la misma presión sonora, bajo el mismo riesgo de aburrirse, rendirse o entregarse. Esa coincidencia parece simple. Hoy es extraordinaria.',
      'Pensar el club como infraestructura obliga a abandonar la fantasía romántica del line-up como solución total. Importa quién alquila la sala, quién paga el sonido, quién programa, quién cuida la puerta, quién tiene acceso al transporte de vuelta, quién queda afuera por precio, por violencia o por fatiga. El sistema de sonido y el sistema de cuidados pertenecen a la misma discusión. No existe set inocente en un espacio mal organizado. Tampoco existe utopía automática en un cartel correcto si la experiencia material repite jerarquías viejas.',
      'El 30 de enero de 2026, CTM y Resident Advisor pusieron esa pregunta en primer plano con Rethinking Music Ecosystems en Berlín. El gesto fue importante no por institucional, sino por sintomático. Cuando una de las plataformas más influyentes del circuito club decide discutir sostenibilidad, comunidad y formas de supervivencia, lo que está admitiendo es que la pista ya no puede pensarse solo como consumo nocturno. Debe pensarse como tejido. Como una tecnología social más frágil y más vital de lo que la industria quiso admitir.',
      'Por eso las escenas más lúcidas del presente ya no dependen únicamente del pico de la noche. Importan la listening session, la radio local, la feria de sellos, el espacio híbrido que funciona de día como tienda y de noche como sala, la comunidad que aprende a sostener un circuito sin transformarlo en marca. El club se extiende más allá del club. Se vuelve una ecología de atención. Lo que se defiende no es solo el baile. Es la posibilidad de que la escucha vuelva a ser situada, conflictiva y compartida.',
      'En ese contexto, la escala pequeña dejó de ser carencia y pasó a leerse como decisión. Salas donde el error todavía se oye, donde la reverberación no está comprimida para redes, donde el DJ puede tensar el tiempo sin pánico a perder retención. La precariedad no se romantiza; se administra con inteligencia. Menos espectacularidad, más forma. Menos pantalla, más presión acústica. Menos branding, más memoria común. La fiesta se vuelve menos infinita, pero más necesaria.',
      'Cuando el club funciona, no ofrece una salida limpia del presente. Lo recompone durante unas horas. Hace respirable la densidad de la época y recuerda que todavía existe una política del cuerpo que no entra del todo en las métricas. Ese recordatorio, físico y rítmico, agotador y a veces luminoso, sigue siendo una de las arquitecturas sensibles más importantes que le quedan a la vida urbana.',
    ],
  },
  {
    id: 'silicio',
    title: 'Silicio, Escasez y Ruina',
    subtitle:
      'La música de esta década ya no se entiende sin data centers, minerales, hardware fatigado y una imaginación técnica en estado de grieta.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['China', 'Japan', 'Global Issue'],
    content: [
      'La fantasía digital prometió inmaterialidad. Sin embargo, cada nueva ola tecnológica terminó revelando más infraestructura: centros de datos, minas, puertos, fábricas, semiconductores, trabajo invisible, basura electrónica. La música contemporánea está hecha con esa materia aunque el marketing insista en la nube. Los sintetizadores, las interfaces, los plugins y las plataformas no son milagros abstractos. Son objetos históricos. Por eso suenan distinto cuando el mundo logístico entra en crisis. El futuro dejó de parecer liviano. Ahora pesa.',
      'Una parte crucial de la electrónica reciente absorbió esa verdad y empezó a producir con oído de ruina. Ventilación de servidor, clipping seco, graves que parecen motores fatigados, frecuencias altas como luz industrial. No es gusto por lo áspero en abstracto. Es una manera de aceptar que la belleza contemporánea debe cargar con aquello que la hace posible y al mismo tiempo la amenaza. El silicio dejó de ser promesa de pureza futurista. Se volvió la prueba material de que toda claridad técnica tiene un costo geológico, energético y político.',
      'La escasez también reorganiza el deseo. Equipos más caros, giras menos sostenibles, repuestos inciertos, envíos lentos, alquileres imposibles, estudios comprimidos a habitaciones precarias. Frente a eso reaparece una ética de la decisión compositiva. Menos capas, más corte. Menos acumulación ornamental, más presión de forma. La reducción no como austeridad triste impuesta desde arriba, sino como táctica para que cada sonido vuelva a importar. Lo que queda después de descartar se vuelve más violento, más exacto, más caro en atención.',
      'El canon retrospectivo de Resident Advisor sobre los mejores discos electrónicos de 2000 a 2025 funcionó en diciembre de 2025 como algo más que balance. Mostró hasta qué punto la era digital ya puede leerse también como arqueología material. Muchos de esos discos suenan hoy menos como monumentos que como restos activos de distintas fases del hardware, del club y de la web. Escucharlos en 2026 ya no es recorrer una línea de progreso. Es caminar por capas de ruina todavía caliente.',
      'La obsolescencia programada produce además una nueva sensibilidad del estudio. Máquinas envejecidas, laptops cansadas, interfaces que sobreviven a fuerza de parches, archivos incompletos, backups dudosos. La perfección pierde prestigio cuando el sistema entero exhibe desgaste. Gana valor lo que todavía respira dentro de una cadena técnica quebrada. De ahí el regreso de texturas rotas, de flujos incompletos, de sets que no esconden del todo la costura. La falla deja de ser accidente. Pasa a ser sintaxis.',
      'La ruina técnica no anuncia el fin de la música. Anuncia el fin de ciertas fantasías sobre ella. Lo que sobreviva lo hará porque aprendió a trabajar con restos: hardware cansado, chips caros, sistemas frágiles, archivos heredados, decisiones radicalmente finitas. Y quizá justamente ahí, en la fricción entre lo que colapsa y lo que todavía insiste, vuelva a aparecer algo parecido al futuro.',
    ],
  },
  {
    id: 'feed',
    title: 'After the Feed',
    subtitle:
      'La nueva escucha aparece cuando la música deja de competir por atención inmediata y empieza a construir refugios de duración.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['Argentina', 'India', 'Global Issue'],
    content: [
      'El feed enseñó a escuchar en ráfagas. Un hook, una textura, un gesto suficiente para seguir de largo. Durante años pareció que toda obra debía justificar su existencia casi de inmediato. La consecuencia fue una claridad compulsiva: intros ultrarrápidas, estructuras transparentes, producción que explica demasiado. Después del feed, la música más interesante hace lo contrario. Retarda. Reserva. Deja pliegues. Recupera la opacidad como forma de hospitalidad para una atención exhausta.',
      'No es casual que en 2026 gane peso una curaduría más lenta y más humana. En marzo, Mixmag informó el lanzamiento de un nuevo programa semanal de radio electrónica por parte de Bandcamp. El dato importa menos como novedad de marca que como síntoma. La escena necesita mediaciones que no funcionen como pura optimización. La radio, la selección comentada, la lista hecha por criterio y no por aprendizaje automático regresan porque la abundancia ya no produce libertad. Produce fatiga. El problema dejó de ser encontrar música. Ahora es encontrar contexto.',
      'Las rondas mensuales de Bandcamp Daily para electrónica y experimental cumplen justamente esa función: no ordenar un centro, sino mapear periferias. Esa diferencia es decisiva. El feed aplana toda música sobre el mismo continuo de atención cuantificable. La curaduría seria, en cambio, devuelve escala, historia, método, parentesco. Hace visible que una pista de Rotterdam no trabaja el mismo tiempo interno que un collage de São Paulo o una miniatura folk procesada desde Tokio. Nombrar esas diferencias vuelve a ser un trabajo crítico central.',
      'Escuchar después del feed no significa salir de internet. Significa dejar de obedecerle. La nueva escucha nace en discos que toleran demora, en tracks que no se entregan por completo al primer contacto, en obras que prefieren construir un clima antes que una confirmación. Eso no equivale a prestigio elitista. Equivale a recuperar el derecho a una experiencia que no se agota en la primera utilidad. La duración vuelve a ser una política mínima.',
      'También cambia la economía afectiva del oyente. Menos ansiedad por estar al día, más deseo de construir archivo. Menos catálogo infinito, más relación concreta con pequeñas escenas, radios, sellos y recomendaciones que todavía suenan firmadas por alguien. El crítico reaparece entonces no como árbitro de estatus, sino como organizador de atención. No para cerrar el sentido, sino para abrir un margen donde la escucha vuelva a respirar sin someterse a la lógica de la metrificación permanente.',
      'After the feed nombra ese margen. No es una utopía offline ni una huida limpia del presente. Es una zona de resistencia tenue donde la música deja de funcionar como fondo obediente y vuelve a instalar una pregunta. A veces basta un disco que tarda en abrirse, una voz que no se explica del todo, un set que se toma su tiempo para recordar que todavía existe otra velocidad. Cuando eso ocurre, el algoritmo sigue ahí. Pero por un momento deja de mandar.',
    ],
  },
  {
    id: 'hard-reset',
    title: 'Hard Reset del Futuro',
    subtitle:
      'No se viene una utopía limpia: se viene una reorganización brutal de escalas, herramientas, cánones y expectativas.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['Global Issue', 'Brazil', 'Japan'],
    content: [
      'El futuro dejó de comportarse como una promesa lineal. Ahora aparece en reseteos parciales: del club, del formato, de la prensa, de la interfaz, del rol del software dentro del estudio. Cada crisis reciente —económica, climática, logística, psíquica— erosionó un poco más la idea de progreso continuo que sostuvo a buena parte de la industria musical. Sin embargo, de esa erosión no sale solo nostalgia. Sale una voluntad de recomenzar con herramientas más concretas y expectativas menos ingenuas.',
      'Ese hard reset no equivale a volver a cero. Equivale a elegir mejor qué merece permanecer. Menos lanzamientos, más edición. Menos hype, más contexto. Menos gigantismo, más escenas que puedan sostenerse sin suicidarse financieramente. Sellos que publican menos pero con más convicción. Clubes que no necesitan fingir festival para importar. Artistas que usan IA como asistente de taller y no como coartada para licuar criterio. La reducción deja de parecer derrota cuando se la entiende como estrategia de claridad.',
      'También cambia la idea de novedad. Durante demasiado tiempo lo nuevo equivalió a lo tecnológicamente superior o a lo visualmente espectacular. El presente sospecha de esa definición porque ya vio demasiado futuro vendido como interfaz vacía. Lo nuevo puede consistir en un uso distinto del archivo, en una tradición que reaparece con otra presión política, en una técnica vieja liberada del mandato de productividad. La innovación abandona el marketing de evento y recupera densidad de método.',
      'Las listas de fin de año de 2025, desde Resident Advisor hasta Pitchfork, mostraron algo incómodo y fértil al mismo tiempo: el canon ya no puede fingir estabilidad. Los mejores discos del ciclo reciente no forman un bloque coherente. Dibujan, más bien, un campo de tensiones entre ambient táctil, pop mutante, techno quebrado, collage vocal y formas híbridas que no quieren resolver su propia contradicción. Eso no es debilidad. Es la forma real que tiene el presente cuando deja de maquillarse como tendencia total.',
      'El reset también es geográfico. La próxima música decisiva no tiene obligación de nacer en el centro histórico de la industria ni en la plataforma dominante. Puede aparecer en una ciudad secundaria, en una radio pequeña, en un festival lateral, en una tienda que también es sala, en un cuarto mal acondicionado donde todavía importa el tiempo invertido en escuchar. Cuando el horizonte común se rompe, la invención se distribuye. Ya no avanza en línea recta: se propaga por fisuras.',
      'Hard reset del futuro significa aceptar una verdad menos cómoda pero más fértil: el deseo no va a volver en forma de gran solución. Va a volver como recomposición parcial, tosca, intensa, a veces diminuta. Un sello chico, un club bien cuidado, un disco imposible de resumir, una herramienta usada contra la lógica para la que fue diseñada. Allí empieza otra vez la música. No donde el sistema promete orden perfecto, sino donde por fin algo insiste en desobedecer.',
    ],
  },
];
