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
    id: 'algoritmos',
    title: 'El Sonido del Algoritmo',
    subtitle: 'Cómo la IA y las playlists automatizadas están reescribiendo la historia de la música.',
    author: 'Editor in Chief',
    content: [
      'En la era del streaming, el algoritmo es el nuevo A&R. No busca talento, busca retención. La música se ha convertido en un flujo continuo diseñado para evitar que presiones "skip". Las plataformas no solo distribuyen música; moldean activamente cómo suena.',
      '¿Qué significa esto para la creatividad? Las intros largas han desaparecido. Los coros llegan antes de los 30 segundos. La "música de fondo" o "lo-fi beats to study to" domina porque no exige atención, solo presencia. El diseño sonoro se optimiza para altavoces de teléfonos y auriculares Bluetooth, priorizando frecuencias que cortan a través del ruido urbano.',
      'Sin embargo, en los márgenes, surge una resistencia. Artistas que deliberadamente rompen las reglas de la optimización, creando obras inmensas, ruidosas y complejas que desafían la categorización algorítmica. El ruido, el silencio extremo y las estructuras no lineales se convierten en actos de rebelión contra la homogeneización del gusto.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000&auto=format&fit=crop&grayscale=1',
    relatedCountries: ['Japan', 'United States of America', 'South Korea']
  },
  {
    id: 'postcapitalismo',
    title: 'Postcapitalismo Sonoro',
    subtitle: 'La música como refugio y resistencia en el colapso del hiperconsumo.',
    author: 'Cultural Critic',
    content: [
      'Vivimos en las ruinas del hiperconsumo. La música comercial refleja una ansiedad perpetua, una necesidad de vender estilos de vida inalcanzables en un planeta con recursos finitos. El pop mainstream a menudo suena como la banda sonora de una fiesta en la cubierta del Titanic.',
      'Pero en el subsuelo, el "postcapitalismo sonoro" está tomando forma. Es música hecha con herramientas recicladas, software libre y distribución peer-to-peer. Es el rechazo a la monetización de cada segundo de atención. Colectivos enteros están abandonando las plataformas principales para crear sus propios ecosistemas de intercambio.',
      'Escenas en el sur global están liderando este movimiento, mezclando ritmos ancestrales con ruido digital, creando bandas sonoras para un mundo que necesita imaginar un futuro diferente. La pista de baile vuelve a ser un espacio político, no solo un lugar de escape.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1592503254549-270440516a51?q=80&w=1000&auto=format&fit=crop&grayscale=1',
    relatedCountries: ['Brazil', 'Argentina', 'United Kingdom', 'South Africa']
  },
  {
    id: 'fin-del-mundo',
    title: 'Bailando en el Fin del Mundo',
    subtitle: 'La euforia apocalíptica de las pistas de baile en 2026.',
    author: 'Nightlife Correspondent',
    content: [
      'Si el mundo se va a acabar, que nos encuentre bailando. Esa parece ser la consigna de la cultura de club en 2026. Los BPMs han subido, las texturas son más abrasivas, y la euforia tiene un tinte desesperado. Ya no se trata de hedonismo despreocupado, sino de catarsis colectiva.',
      'El "Doom-Techno" y el "Hyper-Trance" no son solo géneros, son respuestas somáticas a la crisis climática y la inestabilidad global. La pista de baile se convierte en un búnker temporal, un espacio donde la ansiedad se transmuta en movimiento cinético.',
      'En ciudades donde el futuro parece cancelado, la música electrónica ofrece una trascendencia inmediata. No hay mañana, solo el siguiente drop. Y en ese instante de liberación, encontramos la fuerza para enfrentar las ruinas del día siguiente.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1620283085439-3f6811d40fce?q=80&w=1000&auto=format&fit=crop&grayscale=1',
    relatedCountries: ['Germany', 'Russia', 'China', 'Colombia']
  }
];
