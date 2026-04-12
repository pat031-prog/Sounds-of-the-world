export interface KPunkEntry {
  id: string;
  title: string;
  originalDate: string;
  originalUrl: string;
  tags: string[];
  content: string[];
}

export const kpunkArchive: KPunkEntry[] = [
  {
    id: 'london-after-the-rave',
    title: 'Londres después de la Rave (Sobre Burial)',
    originalDate: 'Diciembre 2007',
    originalUrl: 'https://k-punk.org/london-after-the-rave/',
    tags: ['Burial', 'Dubstep', 'Hauntology', 'Urbanismo'],
    content: [
      'Si el primer disco de Burial vació el dubstep de todo MC, dejando solo las huellas sónicas del drum & bass y el UK garage resonando en una ciudad abandonada, *Untrue* está obsesionado con la voz humana. Pero no la voz humana como presencia viva. Las voces en *Untrue* son micro-muestras fantasmales de acapellas de R&B, subidas de tono, procesadas, cortadas y vueltas a ensamblar como mensajes crípticos dejados en una contestadora automática del más allá.',
      'Hay una tristeza abrumadora aquí, pero no es una decepción adolescente. Es la tristeza íntima de los viajes nocturnos en el transporte público londinense. Es el sonido de estar rodeado por millones de personas mientras se percibe una soledad oceánica. Esas voces sin cuerpo de *Untrue* operan como entidades hauntológicas: fragmentos de un pasado (el éxtasis de la cultura rave de los 90, la calidez del garage) que se niegan a descansar en paz.',
      'El Londres de Burial no es el centro financiero resplandeciente ni los monumentos turísticos; es el Londres de la periferia, de las luces de sodio bajo la llovizna, del McDonald’s a las 3 de la mañana, de los abrigos húmedos y los auriculares aislando a los pasajeros en el bus nocturno. El genio de Burial es haber capturado cómo el aislamiento tecnológico avanzado —estar físicamente entre extraños pero conectado mentalmente a redes distantes— resuena en las arquitecturas concretas del sur de Londres.',
      'Escuchar a Burial es enfrentarse a la resaca de la euforia colectiva. La fiesta ha terminado irreparablemente, los sistemas de sonido se han roto. Lo que sobrevive es un deseo melancólico de conexiones que quizás nunca existieron, codificado en el crujido del vinilo y el suspiro digital.'
    ]
  },
  {
    id: 'nihilism-cthulhu',
    title: '¿Nihilismo o Cthulhu? El invierno de Joy Division',
    originalDate: 'Enero 2005',
    originalUrl: 'https://k-punk.org/nihilism-or-cthulhu/',
    tags: ['Joy Division', 'Post-Punk', 'Depression', 'Gothic'],
    content: [
      'La música de Joy Division es a menudo clasificada como deprimente o nihilista, pero ambas etiquetas fallan radicalmente en capturar su poder real. El sonido de Joy Division, orquestado magistralmente por la producción espacial y gélida de Martin Hannett, no anula el significado (como haría el nihilismo puro) ni se revuelca en la miseria psíquica personal (como el rock confesional o el grunge de los 90). Más bien, traza una cartografía del desastre objetivo.',
      'Lo que escuchamos en *Unknown Pleasures* es el sonido del sujeto moderno siendo vaciado por fuerzas inmensas, impersonales e inhumanas. No es casualidad que Ian Curtis hablara de "salas que se enfrían", de trasmisiones desde el vacío cósmico. El bajo de Peter Hook no era soporte rítmico, era la voz principal tallando espacio en la roca muerta; la batería de Stephen Morris era militar, maquinal, inescrutable. Eran el sonido de fábricas abandonadas en el norte de Inglaterra mutando hacia algo mucho más vasto.',
      'Las voces de Curtis no parecen provenir de un individuo expresando emociones privadas, sino que suenan como un médium canalizando el trauma neurológico de la modernidad tardía. No es angustia romántica; es horror cósmico. Si algo es comparable a Joy Division, no son sus contemporáneos punks que aún creían que podían gritarle a la bestia para que retrocediera. Joy Division ya sabía que la bestia había ganado, y que nosotros ni siquiera éramos relevantes para ella.',
      'Ese es su vínculo con las lecturas de Lovecraft y Cthulhu en el CCRU y en la teoría oscura. Un reconocimiento sobrio, casi forense, de que el colapso (ya sea económico, psíquico o temporal) está ocurriendo a escalas insoportables para la mente humana. Bailamos, por lo tanto, la danza final de los fantasmas en el hielo.'
    ]
  },
  {
    id: 'slow-cancellation',
    title: 'La Cancelación Lenta del Futuro',
    originalDate: 'Mayo 2011',
    originalUrl: 'https://k-punk.org/the-slow-cancellation-of-the-future/',
    tags: ['Hauntology', 'Jungle', 'CCRU', 'Capitalist Realism'],
    content: [
      'Una de las intuiciones más siniestras de la última década es la creciente sensación de que el futuro ha sido cancelado en silencio. Ya no vivimos bajo la promesa de rupturas radicales, de revoluciones estéticas o sociales. En lugar de una corriente vibrante hacia lo desconocido, la cultura se ha estancado en un pastiche constante, reciclando formas del pasado y presentándolas como novedades a través de filtros de alta definición.',
      'En la década de los 90, géneros como el Jungle y el Drum and Bass sonaban, inequívocamente, a algo que acababa de aterrizar desde el futuro. Los *amen breaks* triturados, acelerados más allá del límite del cuerpo humano y las oscuras pulsaciones de los subgraves representaban un mundo cibernético que emergía frente a nuestros ojos. Hoy en día, escuchar a Goldie o Photek resulta hauntológico no porque hayan envejecido mal, sino porque son los artefactos de un futuro espectacular que esperábamos y que secretamente nos fue robado.',
      'La música contemporánea, en contraste, a menudo adolece de lo que Franco "Bifo" Berardi llama "impotencia". La maquinaria retrospectiva nos tiene paralizados. Incluso la electrónica de vanguardia tiende a mirar por encima del hombro. Para entender el estancamiento, la hauntología se ha vuelto indispensable. No es un culto por lo antiguo, sino un diagnóstico de nuestra incapacidad de imaginar alternativas reales. El futuro nos persigue como un holograma persistente de lo que no sucedió.',
      'El trabajo de artistas verdaderamente contemporáneos es confrontar esta cancelación progresiva. Aquellos que operan bajo este clima deben navegar las ruinas del pop y los fantasmas tecnológicos no para fingir que seguimos avanzando a la misma velocidad de antes, sino para inventariar el daño y, quizás, entre las grietas temporales, encontrar el vector de salida del Realismo Capitalista.'
    ]
  }
];
