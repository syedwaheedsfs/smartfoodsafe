import RoutesComponent from "./components/routesComponent.js";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}
