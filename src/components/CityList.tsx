import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { City } from '../types'
import CityDialog from "./CityDialog";

interface CityListProps {
  cities: City[];
}

/**
 * Displays a list of cities in a table format.
 * Clicking a city name opens a dialog with more details.
 */
const CityList: React.FC<CityListProps> = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (city: City) => {
    setSelectedCity(city);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCity(null);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="subtitle1" fontWeight="bold">City</Typography></TableCell>
              <TableCell><Typography variant="subtitle1" fontWeight="bold">Country</Typography></TableCell>
              <TableCell align="right"><Typography variant="subtitle1" fontWeight="bold">Population</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No cities found.
                </TableCell>
              </TableRow>
            ) : (
              cities.map((city) => (
                <TableRow key={city.id}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                      onClick={() => handleOpenDialog(city)}
                    >
                      {city.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{city.country}</TableCell>
                  <TableCell align="right">{city.population.toLocaleString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* City Details Dialog */}
      <CityDialog open={dialogOpen} handleClose={handleCloseDialog} city={selectedCity} />
    </>
  );
};

export default CityList;
