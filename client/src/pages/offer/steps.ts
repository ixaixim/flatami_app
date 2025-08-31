export const offerSteps = [
  'type',
  'location',
  // Time period step (limited/unlimited + dates)
  'availability',
  'rooms',
  'rent',
  'bills',
  'amenities',
  'photos',
  'description',
  'review',
];

export type OfferStep = (typeof offerSteps)[number];
