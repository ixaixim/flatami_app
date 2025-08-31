export type Listing = {
  id: string;
  title: string;
  price: number;          // per month
  district: string;       // neighborhood or area (e.g., El Raval)
  city?: string;          // city (e.g., Barcelona)
  coverUrl?: string;      // main image for cards
  avatarUrl?: string;     // host profile picture
  hostName?: string;      // host display name (e.g., 'Viola B.')
  memberSince?: string;   // ISO date or 'Month YYYY'
  sizeSqm?: number;       // property size in m²
  propertyType?: string;  // e.g., 'Flat', 'Room', 'Studio'
  capacity: number;       // total number of occupants allowed
  occupants: { male: number; female: number; other: number };
  rating?: number;        // optional rating out of 5

  // Availability & badges for card overlays
  availability?: {
    label?: string;       // e.g., 'Limited', 'Flexible'
    startDate?: string;   // ISO or display string
    endDate?: string;     // ISO or display string
  };
  badges?: string[];      // e.g., ['Women Only', 'Live since today']
  currency?: 'EUR' | 'USD' | 'GBP';

  // For detail page (ApartmentOfferPage)
  description?: string;   // listing description
  features?: string[];    // list of features/tags
  images: string[];      // image gallery URLs
};
