import curated01 from '../assets/editorial-curated/curated-01.png';
import curated02 from '../assets/editorial-curated/curated-02.png';
import curated03 from '../assets/editorial-curated/curated-03.png';
import curated04 from '../assets/editorial-curated/curated-04.png';
import curated05 from '../assets/editorial-curated/curated-05.png';
import curated06 from '../assets/editorial-curated/curated-06.png';
import curated07 from '../assets/editorial-curated/curated-07.png';
import curated08 from '../assets/editorial-curated/curated-08.png';
import curated09 from '../assets/editorial-curated/curated-09.png';
import curated10 from '../assets/editorial-curated/curated-10.png';
import curated11 from '../assets/editorial-curated/curated-11.png';
import curated12 from '../assets/editorial-curated/curated-12.jpg';
import curated13 from '../assets/editorial-curated/curated-13.png';
import curated14 from '../assets/editorial-curated/curated-14.png';
import curated15 from '../assets/editorial-curated/curated-15.png';

export const editorialCuratedImages = [
  curated01,
  curated02,
  curated03,
  curated04,
  curated05,
  curated06,
  curated07,
  curated08,
  curated09,
  curated10,
  curated11,
  curated12,
  curated13,
  curated14,
  curated15,
];

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

export const getDeckImage = (deck: string[], index: number): string => {
  const sourceDeck = deck.length > 0 ? deck : editorialCuratedImages;
  return sourceDeck[index % sourceDeck.length];
};
