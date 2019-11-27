import React, { useState, useEffect } from "react";
import CityInfo from "../CityInfo/CityInfo";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch
} from "react-router-dom";
function Forecast({ facade }) {
  const [city, setCity] = useState("");
  const [notFound, setNotFound] = useState(false);
  let match = useRouteMatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await facade.fetchCityInfo(match.params.cityName).catch(e =>
        setNotFound(true)
      );
      setCity(result);
    };
    fetchData();
  }, []);

  const linkStyle = {
    fontSize: "20px",
    color: "#999999"
  };
  return (
    <div>
      <Router>
        <Route path="/cityinfo">
          <CityInfo />
        </Route>
      </Router>

      {notFound === true ? (
        <h1>City was not found :-(</h1>
      ) : (
          JSON.stringify(city)
        )}
      <br />
      <Link to="/search" style={linkStyle}>
        Search
      </Link>
      <br />
      <Link to="/cityinfo" style={linkStyle}>
        City Info
      </Link>
    </div>
  );
}
export default Forecast;
