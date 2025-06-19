import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FF7A00" }, // FoodReady orange
    secondary: { main: "#333" },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
