import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Album from "./components/album";
import FeaturePage from "./components/featurepage"
import CardDetail from "./components/carddetail"
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/600.css"; 
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
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
        <Switch>
          <Route
            exact
            path="/"
            component={Album}
          />
          <Route
            exact
            path="/card/:id"
            component={CardDetail}
          />
          <Route
            exact
            path="/card/:cardId/:featureSlug"
            component={FeaturePage}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
