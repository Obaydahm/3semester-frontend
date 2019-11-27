import React, { useState, useEffect } from "react";
import CityInfo from "../CityInfo/CityInfo";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch
} from "react-router-dom";
function Forecast({ fetchCity }) {
  const [city, setCity] = useState("");
  let match = useRouteMatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCity(match.params.cityName);
      setCity(result);
    };
    fetchData();
  }, []);
  console.log(city);

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
      {localStorage.getItem("searches")}
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
