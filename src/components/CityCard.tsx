import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface CityCardProps {
  name: string;
  country: string;
  population: number;
}

/**
 * CityCard component displaying city information using Material-UI.
 */
const CityCard: React.FC<CityCardProps> = ({ name, country, population }) => {
  return (
    <Card sx={{ width: 300, margin: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}, {country}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {population.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CityCard;
