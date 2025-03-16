import React from "react";
import { City } from '../types'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface CityDialogProps {
  open: boolean;
  handleClose: () => void;
  city: City | null;
}

/**
 * Dialog to display city details when a city is clicked.
 */
const CityDialog: React.FC<CityDialogProps> = ({ open, handleClose, city }) => {
  if (!city) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{city.name}, {city.country}</DialogTitle>
      <DialogContent>
        <Typography variant="body1"><strong>Country Code:</strong> {city.countryCode}</Typography>
        <Typography variant="body1"><strong>Region:</strong> {city.region} ({city.regionCode})</Typography>
        <Typography variant="body1"><strong>Population:</strong> {city.population.toLocaleString()}</Typography>
        <Typography variant="body1"><strong>Coordinates:</strong> {city.latitude}, {city.longitude}</Typography>
        {city.wikiDataId && (
          <Typography variant="body2">
            <a href={`https://www.wikidata.org/wiki/${city.wikiDataId}`} target="_blank" rel="noopener noreferrer">
              View on WikiData
            </a>
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CityDialog;
