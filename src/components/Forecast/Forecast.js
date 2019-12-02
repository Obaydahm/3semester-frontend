import React, { useEffect } from "react";
import "./Forecast.css";
import { Link, useRouteMatch } from "react-router-dom";
function Forecast({ notFound, setNotFound, setCity, city, facade, setSearch }) {
  const match = useRouteMatch();
  var bodyStyles = window.getComputedStyle(document.body);
  useEffect(() => {
    facade
      .fetchCityInfo(match.params.cityName)
      .then(data => {
        setNotFound(false);
        setCity(data);
        setSearch(match.params.cityName); // necessary if you type the city manually in the url
        document.body.style =
          "background-image: " +
          bodyStyles.getPropertyValue(getBackground(data));
      })
      .catch(e => setNotFound(true));
  }, []);

  return (
    <div>
      {notFound === true ? (
        <h1>404</h1>
      ) : (
        <div>
          <h1 className="forecast-city-name">{city.cityName}</h1>
          <Link to={match.url + "/info"} className="link-style">
            City Info
          </Link>
          {city !== "" && city !== undefined ? (
            <ul>
              {city.weatherList.map((w, i) => (
                <li key={i}>
                  <Link to={match.url + "/" + w.date}>{w.date}</Link>
                </li>
              ))}
            </ul>
          ) : (
            "Loading..."
          )}
        </div>
      )}
      <br />
      <Link to="/search" className="link-style">
        Search
      </Link>
      <br />
      <br />
    </div>
  );
}
function getBackground(city) {
  let code;
  const today = new Date();
  const currentHour = today.getHours();
  const sunrise = Number(city.weatherList[0].sunrise.substring(0, 2));
  const sunset = Number(city.weatherList[0].sunset.substring(0, 2));

  if (city !== null && city !== undefined && city !== "") {
    code = city.weatherList[0].weatherCode;
  }
  switch (true) {
    case code >= 200 && code < 300:
      if (currentHour >= sunrise && currentHour <= sunset)
        return "--thunderstorm-day";
      return "--thunderstorm-night";
    case code >= 500 && code < 600:
      if (currentHour > sunset) return "--cloudy-day";
      return "--cloudy-night";
    case code >= 600 && code < 700:
      if (currentHour >= sunrise && currentHour <= sunset) return "--snowy-day";
      return "--snowy-night";
    case code >= 700 && code < 800:
      if (currentHour >= sunrise && currentHour <= sunset) return "--foggy-day";
      return "--foggy-night";
    case code > 800:
      if (currentHour >= sunrise && currentHour <= sunset)
        return "--cloudy-day";
      return "--cloudy-night";
    default:
      return "--clear-day";
  }
}

export default Forecast;
