export type Listing = {
  id: string;
  title: string;
  price: number;          // per month
  district: string;
  coverUrl?: string;      // main image for cards
  avatarUrl?: string;     // host profile picture
  sizeSqm?: number;       // property size in m²
  capacity: number;       // total number of occupants allowed
  occupants: { male: number; female: number; other: number };
  rating?: number;        // optional rating out of 5

  // For detail page (ApartmentOfferPage)
  description?: string;   // listing description
  features?: string[];    // list of features/tags
  images: string[];      // image gallery URLs
};
