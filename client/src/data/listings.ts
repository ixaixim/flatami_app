import type { Listing } from '../components/organisms';

export type ListingWithDetails = Listing & {
  images: string[];
  description: string;
  features: string[];
};

export const mockListings: ListingWithDetails[] = [
  {
    id: '1',
    title: 'Spacious room in sunny apartment',
    price: 800,
    district: 'Trastevere',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Bright and airy room in a charming Trastevere apartment with lots of natural light and a cozy balcony.',
    features: ['Balcony', 'Near Tram', 'Shared Kitchen', 'Wi‑Fi']
  },
  {
    id: '2',
    title: 'Cozy studio near the Colosseum',
    price: 650,
    district: 'Monti',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    images: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Compact yet stylish studio with modern finishes, perfect for a student or young professional.',
    features: ['Air Conditioning', 'Furnished', 'Historic Area']
  },
  {
    id: '3',
    title: 'Shared room in student flat',
    price: 400,
    district: 'San Lorenzo',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Budget-friendly shared room in a lively neighborhood close to universities and nightlife.',
    features: ['Washer', 'Close to Uni', 'Public Transport']
  },
  {
    id: '4',
    title: 'Modern loft with a view',
    price: 1200,
    district: 'Prati',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Stylish open-plan loft offering stunning skyline views and premium amenities.',
    features: ['Elevator', 'City View', 'Dishwasher']
  },
  {
    id: '5',
    title: 'Quiet single room with balcony',
    price: 550,
    district: 'Testaccio',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708d',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Peaceful single room with a private balcony overlooking a leafy courtyard.',
    features: ['Balcony', 'Quiet Area', 'Near Market']
  },
];
