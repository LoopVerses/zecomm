export const HEAD_OFFICE = {
  label: "Head Office",
  street: "1 Trish Drive",
  city: "Richmond Hill",
  province: "Ontario",
  postalCode: "L4E 5C5",
  country: "Canada",
} as const;

export const HEAD_OFFICE_LINES = [
  HEAD_OFFICE.street,
  `${HEAD_OFFICE.city}, ${HEAD_OFFICE.province}`,
  HEAD_OFFICE.postalCode,
] as const;

export const HEAD_OFFICE_FULL = `${HEAD_OFFICE.street}, ${HEAD_OFFICE.city}, ${HEAD_OFFICE.province} ${HEAD_OFFICE.postalCode}, ${HEAD_OFFICE.country}`;

export const HEAD_OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HEAD_OFFICE_FULL)}`;
