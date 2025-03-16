import React, { useState, useEffect } from "react";
import { fetchCities } from "../services/api";
import { City } from '../types'
import { Container, Typography, CircularProgress, TextField, Box } from "@mui/material";
import { debounce } from "lodash";
import CityList from "../components/CityList";

/**
 * Home page with a search bar and a table-style city list.
 */
const Home: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedFetchCities = debounce(async (searchQuery: string, setCities, setLoading, setError) => {
    if (searchQuery.length < 2) {
      setCities([]);
      setLoading(false);
      return;
    }
  
    setLoading(true);
    setError(null);
    
    const cityData = await fetchCities(searchQuery, 5);
    
    if (cityData.length === 0) {
      setError("No cities found.");
    }
  
    setCities(cityData);
    setLoading(false);
  }, 500);
  
  useEffect(() => {
    debouncedFetchCities(query, setCities, setLoading, setError);
  }, [query, debouncedFetchCities]);


  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Search for Cities
      </Typography>

      {/* Search Bar */}
      <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
        <TextField
          label="Enter city name..."
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ width: "100%", maxWidth: 400 }}
        />
      </Box>

      {/* Loading Indicator */}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <CityList cities={cities} />
      )}
    </Container>
  );
};

export default Home;
