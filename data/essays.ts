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
    subtitle: 'Cuando la recomendación ya no ordena el gusto: lo fabrica, lo fragmenta y después lo disfraza de libertad.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United States of America', 'United Kingdom', 'Japan'],
    content: [
      'El algoritmo dejó de ser una herramienta de descubrimiento para convertirse en una infraestructura estética. Ya no decide solamente qué canción aparece después de otra. Decide qué tipo de intro vale la pena, qué rango dinámico sobrevive al scroll, qué mezcla retiene, qué emoción se vuelve legible dentro de una interfaz pensada para no interrumpir nunca el flujo. En ese régimen, la música no desaparece: se aplana. Pierde fricción a favor de una eficiencia afectiva que convierte incluso la rareza en formato.',
      'La crítica cultural del presente no puede seguir hablando de playlists y plataformas como si fueran escaparates neutrales. Son máquinas de gobierno blando. Organizan tiempo, energía, hábitos de escucha y expectativas de composición. Por eso el retorno de formas difíciles, largas, ruidosas o formalmente inestables no debe leerse como capricho de nicho. Es respuesta material. Cuando todo empuja hacia una escucha sin riesgo, el riesgo vuelve a ser una estética y, al mismo tiempo, una ética.',
      'La mejor música hecha bajo estas condiciones no intenta escapar del sistema fingiendo pureza. Usa el propio entorno como herida audible. Tracks que parecen abrirse y cerrarse como ventanas en un navegador agotado. Voces que suenan demasiado cerca, demasiado secas, demasiado humanas para circular sin conflicto en una economía del fondo permanente. Productores que emplean IA para clasificar archivos o deformar espacio, pero dejan visible la mano que corta, descarta y ensucia. Esa mano es el resto político de la escucha.',
      'El futuro no será un duelo simple entre humanos y modelos. Será una lucha por decidir dónde termina la asistencia y empieza la sustitución. La música más viva de los próximos años no ganará por eficiencia, sino por densidad. Sonará como si el software hubiera aprendido a dudar. Y esa duda, en un ecosistema diseñado para minimizar toda fricción, puede ser la última forma honesta de libertad.',
    ],
  },
  {
    id: 'guerra',
    title: 'La Guerra Escucha Primero',
    subtitle: 'Antes de la noticia llega su traducción sónica: ansiedad logística, subgrave tenso y ciudades que producen música como si fueran radares.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['China', 'United States of America', 'Global Issue'],
    content: [
      'La guerra contemporánea no entra en la música como consigna inmediata. Entra como condición atmosférica. Se filtra en la compresión, en la densidad de las texturas, en el deseo de control acústico, en la obsesión por la señal limpia dentro de un entorno saturado de ruido político. El productor de 2026 trabaja con cadenas de suministro, vigilancia, precariedad energética y ansiedad geopolítica aunque no nombre ninguna de esas cosas. El estudio doméstico ya no es refugio puro. Es también puesto de escucha del desastre.',
      'Eso explica el regreso de una electrónica que suena forense, casi táctica. Beats que avanzan como convoyes, drones que parecen sostener el cielo de una ciudad bajo alerta, voces cortadas con una precisión que recuerda más al montaje de inteligencia que al gesto romántico de la canción. No se trata de militarización literal del arte, sino de un contagio formal. La guerra contemporánea produce sensibilidad antes que discurso, y la música absorbe esa sensibilidad incluso cuando habla de amor, de paisaje o de club.',
      'Al mismo tiempo, la pista de baile responde rearmando comunidad. La fiesta vuelve a pensarse como infraestructura civil: un lugar donde todavía es posible compartir tiempo sin que toda experiencia sea inmediatamente capturada por el feed. Las políticas de no-phones, los sistemas de cuidado, la escala reducida, el sonido trabajado con paciencia no son nostalgia ni esnobismo. Son protocolos contra la dispersión. En un mundo donde todo se documenta, bailar sin archivo se vuelve una forma de intimidad material.',
      'La guerra escucha primero porque el poder necesita oír antes de mostrar. La música, cuando está despierta, invierte ese circuito. Convierte ese oído paranoico en otra cosa: percepción compartida, catarsis, ritmo, atención. No cancela el conflicto. Lo vuelve audible desde abajo. Y en ese giro, incluso el subgrave más oscuro puede funcionar como una forma precaria de defensa civil.',
    ],
  },
  {
    id: 'club',
    title: 'Club Como Infraestructura',
    subtitle: 'La pista ya no sirve solo para escapar: organiza tiempo común, filtra atención y administra vulnerabilidad.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['United Kingdom', 'Brazil', 'Argentina'],
    content: [
      'Durante demasiado tiempo la cultura de club fue vendida como una forma de escapismo sin resto. Una suspensión temporal de la historia. Pero en 2026 esa ficción ya no se sostiene. El club importa porque es uno de los pocos lugares donde todavía puede producirse una sincronía no algorítmica entre cuerpos. Gente distinta entrando en el mismo pulso, bajo la misma presión sonora, expuesta al mismo riesgo de aburrirse, entregarse o irse. Esa condición parece pequeña, pero en una sociedad regida por feeds individualizados se volvió extraordinaria.',
      'Pensar el club como infraestructura significa abandonar la fantasía del hedonismo autosuficiente. Importa quién programa, quién cobra la puerta, quién accede, quién queda afuera, quién puede tocar sin convertirse en decoración de marca. Importa la calidad del sistema de sonido, el nivel de precariedad laboral, la política de cuidados, el horario del transporte, la relación con el barrio. Cada una de esas capas modifica el resultado estético. No hay set inocente en una sala mal organizada. Tampoco hay utopía automática en un line-up correcto si la experiencia material reproduce jerarquías agotadas.',
      'Por eso las escenas más lúcidas del presente no hablan solo de tracks. Hablan de contexto, de escalas sostenibles, de escucha protegida. La fiesta pequeña, el warehouse cuidado, el radio show, la listening session, la feria de sellos, el club sin teléfonos: todo eso pertenece al mismo intento de reconstruir un espacio compartido de atención. La música, en ese marco, deja de ser contenido para volver a ser una práctica situada.',
      'Cuando el club funciona, no cancela el mundo. Lo recomprime. Hace que la precariedad sea respirable durante unas horas y recuerda que todavía existe una política del cuerpo que no entra del todo en las métricas. Ese recordatorio —rítmico, físico, agotador, a veces glorioso— sigue siendo una de las formas más concretas de organización sensible del presente.',
    ],
  },
  {
    id: 'silicio',
    title: 'Silicio, Escasez y Ruina',
    subtitle: 'La música de la década ya no se entiende sin fábricas, minerales, data centers y un paisaje técnico que también se está rompiendo.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['China', 'Japan', 'Global Issue'],
    content: [
      'La fantasía digital prometía inmaterialidad. Sin embargo, cada nueva ola tecnológica terminó revelando más infraestructura: centros de datos, minas, líneas marítimas, chips, obsolescencia programada, basura electrónica, trabajo invisible. La música contemporánea está hecha con esa materia aunque su marketing insista en la nube. Los sintetizadores, las interfaces, los plugins y las plataformas son objetos históricos, no milagros abstractos. Por eso suenan de otra forma cuando el mundo logístico entra en crisis.',
      'Una parte decisiva de la electrónica reciente absorbió esa verdad y empezó a producir con oído de ruina. Ya no busca esconder el origen industrial de sus texturas. Lo intensifica. Ruidos de ventilación, click digital, clipping seco, reverberaciones que parecen pasillos de servidor. No es un simple gusto por lo áspero. Es la intuición de que la belleza contemporánea tiene que incluir aquello que hace posible y a la vez amenaza la producción sonora. El silicio dejó de ser fetiche de futuro limpio para convertirse en evidencia de un presente frágil.',
      'La escasez también reordena el deseo. Equipos más caros, giras más difíciles, tiempos más cortos, públicos más dispersos. Frente a eso, reaparece una ética de la economía expresiva: menos pistas, menos saturación ornamental, más decisión. La reducción no como austeridad estética impuesta desde arriba, sino como precisión compositiva. El sonido que queda después de descartar lo innecesario adquiere una violencia particular. Suena caro de otro modo: caro en atención, caro en cuidado, caro en experiencia.',
      'La ruina técnica no anuncia el fin de la música. Anuncia el fin de ciertas ilusiones sobre ella. Lo que sobreviva lo hará porque aprendió a trabajar con restos: hardware envejecido, circuitos rotos, archivos incompletos, sistemas frágiles. Y quizá ahí, entre residuos materiales y decisiones radicalmente finitas, vuelva a aparecer algo parecido al futuro.',
    ],
  },
  {
    id: 'feed',
    title: 'After the Feed',
    subtitle: 'La nueva escucha aparece cuando la música deja de competir por atención y empieza a construir refugios.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['Argentina', 'India', 'Global Issue'],
    content: [
      'El feed enseñó a escuchar en ráfagas. Un fragmento, un hook, un gesto, una promesa de atmósfera suficiente para seguir de largo. Esa pedagogía de la aceleración no destruyó la música, pero sí reorganizó la paciencia. Durante años pareció que toda obra debía justificar su existencia casi de inmediato. La consecuencia fue una forma de claridad compulsiva: intros cortas, estructuras transparentes, producción que explica demasiado. Después del feed, la música más interesante hace lo contrario. Retarda, reserva, insinúa.',
      'No es casual que el presente esté lleno de discos que se abren despacio, que prefieren clima antes que argumento, que toleran el silencio, la deriva y la suspensión. No es evasión. Es contramedida. Cuando la vida digital vuelve imposible la duración, la duración misma se vuelve un gesto político mínimo. Escuchar un tema que no llega enseguida a ninguna parte implica salir, aunque sea por un rato, de la lógica del rendimiento afectivo.',
      'Esa nueva escucha no siempre ocurre en instituciones nobles. Ocurre en cuartos chicos, grupos de escucha, sellos minúsculos, playlists humanas, radios independientes, discos recomendados por alguien que todavía distingue entre compartir y distribuir. Es una ecología menos espectacular pero más intensa. Menos visibilidad, más confianza. Menos catálogo infinito, más contexto. En ese mundo, el crítico vuelve a importar no como árbitro de prestigio, sino como organizador de atención.',
      'After the feed no significa fuera de internet. Significa después de obedecerlo. La música que viene no necesita negar el entorno digital, solo dejar de servirle de fondo. Cuando eso ocurre, incluso una melodía mínima puede sentirse como una fuga. No una huida total. Apenas la apertura de un margen. A veces eso alcanza.',
    ],
  },
  {
    id: 'hard-reset',
    title: 'Hard Reset del Futuro',
    subtitle: 'No se viene una utopía limpia: se viene una reorganización brutal de escalas, herramientas y expectativas.',
    author: 'Editorial Desk',
    imageUrl: '',
    relatedCountries: ['Global Issue', 'Brazil', 'Japan'],
    content: [
      'El futuro dejó de ser una promesa lineal. Ahora aparece como una serie de reseteos parciales: del club, del formato, del circuito de prensa, del rol del software, de la escala de producción. Cada crisis reciente —económica, climática, logística, psíquica— debilitó un poco más la idea de progreso continuo que sostuvo buena parte de la industria musical. Sin embargo, de esa erosión no surge sólo nostalgia. Surge una voluntad de recomenzar desde otro lugar.',
      'Ese hard reset no implica volver a cero. Implica elegir mejor qué merece seguir. Formatos físicos pequeños pero significativos. Sellos que publican menos y cuidan más. Artistas que usan IA como asistente y no como coartada. Pistas donde el sistema de sonido importa más que la escenografía, y la comunidad más que el alcance. La reducción no aparece aquí como empobrecimiento sino como forma de claridad estratégica. Menos superficie, más densidad.',
      'También cambia la idea de novedad. Durante demasiado tiempo lo nuevo equivalió a lo inédito o lo tecnológicamente superior. El presente empieza a sospechar de esa definición. Lo nuevo puede consistir en revisar una tradición con herramientas distintas, en recuperar una forma comunitaria de escuchar, en volver a un timbre descartado por el mercado porque no monetizaba bien. La innovación deja de ser espectáculo y vuelve a ser método.',
      'Hard reset del futuro significa aceptar que la próxima gran música no nacerá necesariamente del centro, de la plataforma más grande ni del software más caro. Puede nacer de un sello diminuto, de una ciudad secundaria, de un cuarto acondicionado a medias o de un archivo que parecía agotado. Cuando el horizonte se rompe, la invención deja de mirar hacia adelante solamente. Empieza a trabajar en todas las direcciones a la vez. Y en ese movimiento confuso, brutal y fértil, vuelve a aparecer el deseo.',
    ],
  },
];
