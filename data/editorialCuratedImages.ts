const editorialImageModules = import.meta.glob('../assets/editorial-curated/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const DEFAULT_VISIBLE_EDITORIAL_IMAGES = 10;

export const editorialCuratedImages = Object.entries(editorialImageModules)
  .sort(([leftPath], [rightPath]) =>
    leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: 'base' }),
  )
  .map(([, source]) => source);

export const shuffleEditorialCuratedImages = (): string[] => {
  const shuffledImages = [...editorialCuratedImages];

  for (let index = shuffledImages.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledImages[index], shuffledImages[randomIndex]] = [
      shuffledImages[randomIndex],
      shuffledImages[index],
    ];
  }

  return shuffledImages;
};

const getEditorialAdvanceStep = (deckLength: number): number => {
  if (deckLength <= 1) {
    return 1;
  }

  return Math.min(
    deckLength - 1,
    Math.max(DEFAULT_VISIBLE_EDITORIAL_IMAGES, Math.floor(deckLength / 2)),
  );
};

export const advanceEditorialCuratedImages = (
  currentDeck: string[],
  requestedStep?: number,
): string[] => {
  const sourceDeck = currentDeck.length > 0 ? currentDeck : shuffleEditorialCuratedImages();

  if (sourceDeck.length <= 1) {
    return [...sourceDeck];
  }

  const rawStep = requestedStep && requestedStep > 0
    ? requestedStep
    : getEditorialAdvanceStep(sourceDeck.length);
  const normalizedStep = rawStep % sourceDeck.length;

  if (normalizedStep === 0) {
    return [...sourceDeck];
  }

  return [...sourceDeck.slice(normalizedStep), ...sourceDeck.slice(0, normalizedStep)];
};

export const getDeckImage = (deck: string[], index: number): string => {
  const sourceDeck = deck.length > 0 ? deck : editorialCuratedImages;
  return sourceDeck[index % sourceDeck.length];
};
