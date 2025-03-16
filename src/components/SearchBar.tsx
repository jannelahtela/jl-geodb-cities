import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

/**
 * SearchBar component for city search input using Material-UI.
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", my: 2 }}>
      <TextField
        label="Search for a city..."
        variant="outlined"
        value={query}
        onChange={handleChange}
        fullWidth
        sx={{ maxWidth: "600px" }}
      />
    </Box>
  );
};

export default SearchBar;
