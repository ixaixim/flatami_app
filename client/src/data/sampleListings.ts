import type { Listing } from '../types/listing';

export const sampleListings: Listing[] = [
  {
    id: 'abc123',
    title: 'Zimmer in Prati',
    price: 750,
    district: 'Prati',
    coverUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Marta',
    sizeSqm: 18,
    capacity: 4,
    occupants: { male: 1, female: 2, other: 0 },
    rating: 4.8,
    description:
      'Spacious and sunny room in a friendly flatshare in Prati. Close to metro and local shops.',
    features: ['Balcony', 'Furnished', 'Near Metro'],
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    ]
  },
  {
    id: 'def456',
    title: 'Cozy Loft in Kreuzberg',
    price: 980,
    district: 'Kreuzberg',
    coverUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lukas',
    sizeSqm: 25,
    capacity: 2,
    occupants: { male: 0, female: 1, other: 0 },
    rating: 4.6,
    description:
      'Bright loft in the heart of Kreuzberg with modern furnishings and a great view.',
    features: ['Pet Friendly', 'Washer/Dryer', 'Close to Park'],
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop'
    ]
  }
];
