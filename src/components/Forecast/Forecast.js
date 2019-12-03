import React, { useEffect } from "react";
import "./Forecast.css";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Forecast({
  notFound,
  setNotFound,
  setCity,
  city,
  facade,
  setSearch,
  weekday,
  hours,
  setHours
}) {
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
      .catch(e => {
        setNotFound(true);
        setCity("");
      });
    facade
      .fetchHourlyTemp(match.params.cityName)
      .then(data => setHours(data))
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      {notFound === true ? (
        <h1>404</h1>
      ) : (
        <div>
          <h1 className="forecast-city-name">{city.cityName}</h1>
          {city !== "" && city !== undefined ? (
            <div>
              <div className="forecast-days-wrapper">
                <div className="sne">
                  <div className="forecast-today">
                    <Link to={match.url + "/" + city.weatherList[0].date}>
                      <div>
                        <h4 className="forecast-desc">
                          {city.weatherList[0].weatherDescription}
                        </h4>
                        <h1 className="forecast-temp">
                          {city.weatherList[0].temp}°
                        </h1>
                        <p className="forecast-day">Today</p>
                        <ul className="forecast-hour-ul">
                          {Object.keys(hours).map((hour, index) => (
                            <li key={index} className="forecast-hour-li">
                              <div className="forecast-li-wrap">
                                {index === 0 ? (
                                  <p>Now</p>
                                ) : (
                                  <p>{hours[index].split(",")[0]}</p>
                                )}
                                <p>{Math.round(hours[index].split(",")[1])}°</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  </div>
                  <ul className="forecast-ul">
                    {city.weatherList.map((w, i) =>
                      i === 0 ? (
                        ""
                      ) : (
                        <Link key={i} to={match.url + "/" + w.date}>
                          <li className="forecast-li">
                            <span>{weekday[new Date(w.date).getDay()]}</span>
                            <span>{w.temp}°</span>
                          </li>
                        </Link>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            "Loading..."
          )}
        </div>
      )}

      <Link to={match.url + "/info"} className="link-style">
        <FontAwesomeIcon
          icon={["fal", "info-circle"]}
          className="forecast-info"
        />
      </Link>
      <Link to="/search" className="link-style">
        <FontAwesomeIcon
          icon={["fal", "search-location"]}
          className="forecast-search"
        />
      </Link>
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
      if (currentHour >= sunrise && currentHour <= sunset)
        return "--cloudy-day";
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
