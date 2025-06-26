import { BrowserRouter} from "react-router-dom";
import RouteComponent from "./components/routeComponent";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/600.css"; 
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
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
      </ThemeProvider> 
    
  );
}
