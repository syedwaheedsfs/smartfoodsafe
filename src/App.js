import { BrowserRouter} from "react-router-dom";
import RouteComponent from "./components/routeComponent";

export default function App() {
  return (
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    
  );
}
