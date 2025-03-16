/**
 * Type definition for a city retrieved from the GeoDB Cities API.
 */
export interface City {
    id: string;
    name: string;
    country: string;         // Full country name (e.g., "Finland")
    countryCode: string;     // Two-letter country code (e.g., "FI")
    region: string;          // Region name (e.g., "Uusimaa")
    regionCode: string;      // Region code (e.g., "18")
    regionWdId?: string;     // Wikidata ID for the region (e.g., "Q5711") - Optional
    population: number;      // City population
    latitude: number;        // Latitude coordinate
    longitude: number;       // Longitude coordinate
    type: string;            // Type of place (e.g., "CITY")
    wikiDataId?: string;     // WikiData ID for the city (e.g., "Q3784748") - Optional
  }