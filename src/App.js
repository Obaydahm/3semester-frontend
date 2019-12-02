import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";
import CityInfo from "./components/CityInfo/CityInfo";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Events from "./components/Events/Events";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";

function App({ facade }) {
  library.add(fas, fal, far);
  const [city, setCity] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [search, setSearch] = useState("");
  const [hours, setHours] = useState("");
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search">
            <Search city={city} search={search} setSearch={setSearch} />
          </Route>
          <Route exact path="/forecast/:cityName/info">
            <CityInfo city={city} />
          </Route>
          <Route exact path="/forecast/:cityName">
            <Forecast
              hours={hours}
              setHours={setHours}
              weekday={weekday}
              search={search}
              setSearch={setSearch}
              facade={facade}
              notFound={notFound}
              setNotFound={setNotFound}
              city={city}
              setCity={setCity}
            />
          </Route>
          <Route exact path="/forecast/:cityName/:date">
            <Container>
              <Row>
                <Col md="6" className="d-flex">
                  <WeatherInfo
                    weekday={weekday}
                    city={city}
                    setCity={setCity}
                    facade={facade}
                    setNotFound={setNotFound}
                    notFound={notFound}
                  />
                </Col>
                <Col md="6" className="d-flex">
                  <Events
                    city={city}
                    setCity={setCity}
                    facade={facade}
                    setNotFound={setNotFound}
                    notFound={notFound}
                  />
                </Col>
              </Row>
            </Container>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
