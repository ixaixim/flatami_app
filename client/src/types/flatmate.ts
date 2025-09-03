export type Flatmate = {
  id: string;
  name: string;
  age: number;
  occupation: string;
  avatarUrl?: string;
  budget: number;
  // High-level preferred area (kept for card compatibility)
  preferredArea: string;
  // New detailed location fields for the offer page
  city?: string;
  neighborhoods?: string[];
  bio: string;
  sleepingHabit: string;
  tidiness: string;
  smoking: string;
  pets: string;
  party: string;
  socialStyle: string;
  hobbies: string[];
  moveInDate: string;
  verified: boolean;
  // New fields for detailed profile page
  images?: string[]; // gallery images
  memberSince?: string; // e.g. 'Sep 2025'
  profileCode?: string; // e.g. '#SLP03093'
  // Accommodation preferences
  flatMinSize?: number | null; // m^2
  flatRoomsRange?: string | null; // e.g. '1-1.5 rooms'
  roomMinSize?: number | null; // m^2
  timePeriod?: string; // e.g. 'Unlimited', '3-6 months'
  availableFrom?: string; // e.g. '01/10/2025'
  amenities?: string[]; // desired amenities
  expectations?: string[]; // computed tags (max roomies, gender pref, etc.)
};
