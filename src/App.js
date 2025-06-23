import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./components/album";
import CardDetail from "./components/carddetail"
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/600.css"; 

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    
  },
  palette: {
    primary: { main: "#3f51b5" },
    secondary: { main: "#f50057" },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Album />} />
          <Route path="/card/:id" element={<CardDetail/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
