import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";
import CityInfo from "./components/CityInfo/CityInfo";
import "./App.css";

function App({ facade }) {
  library.add(fas, fal);
  const [city, setCity] = useState("");
  const [notFound, setNotFound] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search">
            <Search city={city} />
          </Route>
          <Route exact path="/forecast/:cityName/info">
            <CityInfo />
          </Route>
          <Route exact path="/forecast/:cityName">
            <Forecast
              facade={facade}
              notFound={notFound}
              setNotFound={setNotFound}
              city={city}
              setCity={setCity}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
