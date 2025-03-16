import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Container } from "@mui/material";

/**
 * CityDetails page for displaying more information about a selected city.
 */
const CityDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4">City Details</Typography>
      <Typography variant="body1">City ID: {id}</Typography>
      <Typography variant="body2" color="text.secondary">
        More information about the selected city will be displayed here.
      </Typography>
    </Container>
  );
};

export default CityDetails;
