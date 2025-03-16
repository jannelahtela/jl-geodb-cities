import axios from "axios";
/**
 * Load the API key, prioritizing `.env.local` over `.env`
 */
const API_KEY = process.env.REACT_APP_GEODB_API_KEY || "Api key missing";
console.log("Loaded API Key:", API_KEY, process.env); // Debugging

/**
 * Base URL for GeoDB Cities API
 */
const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

/**
 * Axios instance with default headers for the GeoDB Cities API.
 */
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Accept": "application/json",
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
});

/**
 * Type definition for a city retrieved from the GeoDB Cities API.
 */
export interface City {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionWdId?: string;
  population: number;
  latitude: number;
  longitude: number;
  type: string;
  wikiDataId?: string;
}

/**
 * Fetches a list of cities based on an optional search query.
 * @param {string} query - The name prefix to search for.
 * @param {number} limit - Number of results to return (default: 10).
 * @param {string} country - (Optional) Two-letter country code to filter results.
 * @returns {Promise<City[]>} - A promise resolving to an array of city objects.
 */
export const fetchCities = async (
  query: string = "",
  limit: number = 50,
  country?: string
): Promise<City[]> => {
  try {
    const response = await apiClient.get("/cities", {
      params: {
        namePrefix: query,
        limit,
        countryIds: country,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};
