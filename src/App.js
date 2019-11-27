import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";
import "./App.css";
function App({ facade }) {
  library.add(fas, fal);
  const fetchCity = city => facade.fetchCityInfo(city);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/:cityName">
            <Forecast fetchCity={fetchCity} search={search} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
