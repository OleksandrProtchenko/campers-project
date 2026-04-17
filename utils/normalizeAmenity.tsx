const AMENITY_MAP: Record<string, string> = {
  ac: "AC",
  tv: "TV",
};

const capitalizeAmenity = (word: string) =>
  word ? word[0].toUpperCase() + word.slice(1) : word;

export default function normalizeAmenity(amenity: string): string {
  const normalized = amenity.trim().toLowerCase();

  if (AMENITY_MAP[normalized]) {
    return AMENITY_MAP[normalized];
  }

  return normalized
    .split(/[_\-\s]+/)
    .map(capitalizeAmenity)
    .join(" ");
}
