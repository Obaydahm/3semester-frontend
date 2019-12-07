import React from "react";
import { useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WeatherInfo.css";
import Loading from "../Loading";
function WeatherInfo({
  weekday,
  city,
  setCity,
  facade,
  notFound,
  setNotFound
}) {
  const match = useRouteMatch();
  let weatherInfo;
  let result = "";
  if (city !== "") {
    result = city.forecast.find(w => w.date === match.params.date);
    weatherInfo = result;
  } else {
    facade
      .fetchCityInfo(match.params.cityName)
      .then(data => {
        setCity(data);
      })
      .catch(e => setNotFound(true));
  }

  return weatherInfo === undefined ? (
    notFound === true ? (
      <p>404 - city could not be found !</p>
    ) : result === undefined ? (
      <p>invalid date !</p>
    ) : (
          <Loading />
        )
  ) : (
      <div className="wi-wrapper">
        <h1 className="forecast-city-name">
          {weekday[new Date(match.params.date).getDay()]}
        </h1>

        <div className="wii">
          <div className="wi-details-wrapper">
            <div className="wi-detail-box">
              <span className="wi-detail-icon">
                <FontAwesomeIcon icon={["fal", "sunrise"]} size="1x" />
              </span>
              <span className="wi-detail-text">Sunrise</span>
              <span>{weatherInfo.sunrise}</span>
            </div>
            <div className="wi-detail-box">
              <span className="wi-detail-icon">
                <FontAwesomeIcon icon={["fal", "sunset"]} size="1x" />
              </span>
              <span className="wi-detail-text">Sunset</span>
              <span>{weatherInfo.sunset}</span>
            </div>
            <div className="wi-detail-box">
              <span className="wi-detail-icon">
                <FontAwesomeIcon icon={["fal", "clouds"]} size="1x" />
              </span>
              <span className="wi-detail-text">Cloudiness</span>
              <span>{weatherInfo.clouds}%</span>
            </div>
          </div>

          <div className="wi-details-wrapper">
            <div className="wi-detail-box">
              <span className="wi-detail-icon">
                <FontAwesomeIcon icon={["fal", "raindrops"]} size="1x" />
              </span>
              <span className="wi-detail-text">Rain</span>
              <span>{weatherInfo.pop}%</span>
            </div>
            <div className="wi-detail-box">
              <span className="wi-detail-icon">
                <FontAwesomeIcon icon={["fal", "humidity"]} size="1x" />
              </span>
              <span className="wi-detail-text">Humidity</span>
              <span>{weatherInfo.humidity}</span>
            </div>
            <div className="wi-detail-box">
              <span className="wi-detail-icon">
                <FontAwesomeIcon icon={["fal", "wind"]} size="1x" />
              </span>
              <span className="wi-detail-text">Wind</span>
              <span>{Math.round(weatherInfo.windSpeed * 10) / 10} m/s</span>
            </div>
          </div>
        </div>
      </div>
    );
}
export default WeatherInfo;
