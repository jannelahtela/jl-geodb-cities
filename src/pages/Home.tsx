import React, { useState, useEffect, useCallback, useRef } from "react";
import { fetchCities } from "../services/api";
import { City } from "../types";
import { Container, Typography, CircularProgress, TextField, Box } from "@mui/material";
import CityList from "../components/CityList";
import { useDebounce } from "../hooks/useDebounce";

/**
 * Home page with a search bar and a table-style city list.
 */
const Home: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 1000);

  const lastFetchedQuery = useRef<string | null>(null);

  const fetchCitiesData = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2 || searchQuery === lastFetchedQuery.current) return;

    setLoading(true);
    setError(null);
    lastFetchedQuery.current = searchQuery;

    try {
      const cityData = await fetchCities(searchQuery, 5);
      setCities(cityData);
      if (cityData.length === 0) {
        setError("No cities found.");
      }
    } catch (err) {
      setError("Failed to fetch cities.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (debouncedQuery && debouncedQuery !== lastFetchedQuery.current) {
      fetchCitiesData(debouncedQuery);
    }
  }, [debouncedQuery, fetchCitiesData]);

  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Search for Cities
      </Typography>

      {/* Search Bar */}
      <Box sx={{ mb: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <TextField
          label="Enter city name..."
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ width: "100%", maxWidth: 400 }}
        />
        <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
          The API limits responses to 50 items, so I limited items to five just for fun.
        </Typography>
      </Box>

      {/* Loading Indicator */}
      {loading && <CircularProgress />}
      {!loading && error && <Typography color="error">{error}</Typography>}
      {!loading && !error && <CityList cities={cities} />}
    </Container>
  );
};

export default Home;