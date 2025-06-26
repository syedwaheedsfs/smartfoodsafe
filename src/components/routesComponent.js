import { Routes, Route } from "react-router-dom";
import Album from "./album";
import FeaturePage from "./featurepage";
import CardDetail from "./carddetail";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Album />} />
      <Route path="/card/:id" element={<CardDetail />} />
      <Route
        path="/card/:cardId/:featureSlug"
        element={<FeaturePage />}
      />
    </Routes>
  );
}
