import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
function Forecast({ notFound, setNotFound, setCity, city, facade }) {
  let match = useRouteMatch();
  const linkStyle = {
    fontSize: "20px",
    color: "#999999"
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await facade
        .fetchCityInfo(match.params.cityName)
        .catch(e => setNotFound(true));
      setCity(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {notFound === true ? (
        ""
      ) : (
          <Link to={match.url + "/info"} style={linkStyle}>
            City Info
          </Link>
        )}
      <br />
      <Link to="/search" style={linkStyle}>
        Search
      </Link>
      <br />

      {notFound === true ? (
        <h1>City was not found :-(</h1>
      ) : (
          <p>{city.cityName}</p>
        )}
      <br />
    </div>
  );
}
export default Forecast;
