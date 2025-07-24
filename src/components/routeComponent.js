
import { Switch, Route } from "react-router-dom";
import Album from "./album";
import FeaturePage from "./featurePage";
import CardDetail from "./cardDetail";
export default function RouteComponent() {
  return (
    <Switch>
      <Route exact path="/" component={Album} />
      <Route exact path="/card/:id" component={CardDetail} />
      <Route exact path="/card/:cardId/:featureSlug" component={FeaturePage} />
    </Switch>
  );
}
