export type CompanyOffice = {
  label: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
};

export function getOfficeLines(office: CompanyOffice) {
  return [
    office.street,
    `${office.city}, ${office.region}`,
    `${office.postalCode}, ${office.country}`,
  ] as const;
}

export function getOfficeFull(office: CompanyOffice) {
  return `${office.street}, ${office.city}, ${office.region} ${office.postalCode}, ${office.country}`;
}

export function getOfficeMapsUrl(office: CompanyOffice) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getOfficeFull(office))}`;
}

export const HEAD_OFFICE: CompanyOffice = {
  label: "Head Office",
  street: "1 Trish Drive",
  city: "Richmond Hill",
  region: "Ontario",
  postalCode: "L4E 5C5",
  country: "Canada",
};

export const US_OFFICE: CompanyOffice = {
  label: "US Office",
  street: "3119 Magnolia Blossom Ln",
  city: "Richmond",
  region: "TX",
  postalCode: "77469",
  country: "USA",
};

export const COMPANY_OFFICES = [HEAD_OFFICE, US_OFFICE] as const;

export const HEAD_OFFICE_LINES = getOfficeLines(HEAD_OFFICE);
export const HEAD_OFFICE_FULL = getOfficeFull(HEAD_OFFICE);
export const HEAD_OFFICE_MAPS_URL = getOfficeMapsUrl(HEAD_OFFICE);

export const US_OFFICE_LINES = getOfficeLines(US_OFFICE);
export const US_OFFICE_FULL = getOfficeFull(US_OFFICE);
export const US_OFFICE_MAPS_URL = getOfficeMapsUrl(US_OFFICE);

export const CONTACT_EMAIL = "hello@zeecom.com";

export const CONTACT_PHONE = "";

export const SERVICE_INTEREST_OPTIONS = [
  "E-Commerce Automation",
  "YouTube Automation",
  "WhatsApp Agent",
  "Chat Sales Agent",
  "Clone Agent",
  "Market Intel",
  "Voice Clone",
  "Email Scanner",
  "Multiple / Not sure yet",
] as const;
