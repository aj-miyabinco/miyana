import { Product } from '../types/catalog';

export const products: Product[] = [
  {
    id: 1,
    slug: 'noor-al-miyana',
    name: 'Noor Al Miyana',
    price: 8900,
    size: '75ml',
    fragrancePyramid: {
      top: ['Bergamot', 'Saffron'],
      heart: ['Damask Rose', 'Oud'],
      base: ['Amber', 'Sandalwood']
    },
    mood: 'Regal warmth',
    genderNeutral: true,
    stock: 32,
    imageUrl: '/images/noor.jpg',
    origin: 'Crafted in India',
    story: 'Golden-ratio balanced silage that pairs Japanese restraint with Arabic depth.'
  },
  {
    id: 2,
    slug: 'zen-sutra',
    name: 'Zen Sutra',
    price: 7200,
    size: '50ml',
    fragrancePyramid: {
      top: ['Yuzu', 'Pear Bloom'],
      heart: ['Hinoki', 'Jasmine Tea'],
      base: ['White Musk', 'Cedar']
    },
    mood: 'Serene clarity',
    genderNeutral: true,
    stock: 18,
    imageUrl: '/images/zen.jpg',
    origin: 'Hand bottled in India',
    story: 'A calm gradient anchored on phi-spaced accords for mindful days.'
  },
  {
    id: 3,
    slug: 'raat-rani',
    name: 'Raat Rani',
    price: 6400,
    size: '50ml',
    fragrancePyramid: {
      top: ['Tuberose', 'Pink Pepper'],
      heart: ['Night Blooming Jasmine', 'Iris'],
      base: ['Vanilla', 'Patchouli']
    },
    mood: 'Nocturnal bloom',
    genderNeutral: false,
    stock: 27,
    imageUrl: '/images/raat.jpg',
    origin: 'Proudly Made in India',
    story: 'A moonlit trail built on golden rectangles of florals and resin.'
  }
];
