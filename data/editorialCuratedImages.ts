const editorialImageModules = import.meta.glob('../assets/editorial-curated/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const DEFAULT_RECENT_EDITORIAL_IMAGES = 10;

export const editorialCuratedImages = Object.entries(editorialImageModules)
  .sort(([leftPath], [rightPath]) =>
    leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: 'base' }),
  )
  .map(([, source]) => source);

const shuffleImages = (images: string[]): string[] => {
  const shuffledImages = [...images];

  for (let index = shuffledImages.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledImages[index], shuffledImages[randomIndex]] = [
      shuffledImages[randomIndex],
      shuffledImages[index],
    ];
  }

  return shuffledImages;
};

export const shuffleEditorialCuratedImages = (): string[] => shuffleImages(editorialCuratedImages);

const getRecentImageCount = (deckLength: number): number =>
  Math.min(deckLength, DEFAULT_RECENT_EDITORIAL_IMAGES);

export const advanceEditorialCuratedImages = (
  currentDeck: string[],
): string[] => {
  const sourceDeck = currentDeck.length > 0 ? currentDeck : shuffleEditorialCuratedImages();

  if (sourceDeck.length <= 1) {
    return [...sourceDeck];
  }

  const recentImageCount = getRecentImageCount(sourceDeck.length);
  const recentImages = sourceDeck.slice(0, recentImageCount);
  const recentImageSet = new Set(recentImages);

  const unseenImages = editorialCuratedImages.filter((image) => !recentImageSet.has(image));
  const recycledImages = editorialCuratedImages.filter((image) => recentImageSet.has(image));

  return [...shuffleImages(unseenImages), ...shuffleImages(recycledImages)];
};

export const getDeckImage = (deck: string[], index: number): string => {
  const sourceDeck = deck.length > 0 ? deck : editorialCuratedImages;
  return sourceDeck[index % sourceDeck.length];
};
