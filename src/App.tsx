import React from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./theme"; 
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetails"; 

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:id" element={<CityDetails />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
