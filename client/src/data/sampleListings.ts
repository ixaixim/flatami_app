import type { Listing } from '../types/listing';

export const sampleListings: Listing[] = [
  {
    id: 'abc123',
    title: 'Sunny flat near El Raval',
    price: 672,
    city: 'Barcelona',
    district: 'El Raval',
    coverUrl: 'https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=1600&auto=format&fit=crop',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Viola',
    hostName: 'Viola B.',
    memberSince: '2025-05-01',
    sizeSqm: 55,
    propertyType: 'Flat',
    capacity: 3,
    occupants: { male: 0, female: 2, other: 0 },
    rating: 4.8,
    availability: {
      label: 'Limited',
      startDate: '2025-10-01',
      endDate: '2026-01-27',
    },
    badges: ['Women Only', 'Live since today'],
    currency: 'EUR',
    description:
      'Light‑filled flat in El Raval with cozy common area and friendly roommates. Close to metro and local shops.',
    features: ['Balcony', 'Furnished', 'Near Metro'],
    images: [
      'https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    ]
  },
  {
    id: 'def456',
    title: 'Cozy Loft in Kreuzberg',
    price: 980,
    city: 'Berlin',
    district: 'Kreuzberg',
    coverUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
    avatarUrl: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lukas',
    hostName: 'Lukas R.',
    memberSince: '2024-11-01',
    sizeSqm: 25,
    propertyType: 'Studio',
    capacity: 2,
    occupants: { male: 0, female: 1, other: 0 },
    rating: 4.6,
    availability: {
      label: 'Flexible',
      startDate: '2025-09-15',
    },
    badges: ['New'],
    currency: 'EUR',
    description:
      'Bright loft in the heart of Kreuzberg with modern furnishings and a great view.',
    features: ['Pet Friendly', 'Washer/Dryer', 'Close to Park'],
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop'
    ]
  }
];
