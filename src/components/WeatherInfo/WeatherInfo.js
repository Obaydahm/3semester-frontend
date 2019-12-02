import React from "react";
import { useRouteMatch } from "react-router-dom";
function WeatherInfo({ city, setCity, facade, notFound, setNotFound }) {
  const match = useRouteMatch();
  let weatherInfo;
  let result = "";
  if (city !== "") {
    result = city.weatherList.find(w => w.date === match.params.date);
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
      <p>Loading info !</p>
    )
  ) : (
    <div>
      <h1 className="forecast-city-name">{city.cityName}</h1>
      <ul>
        <li>Average temperature: {weatherInfo.temp}</li>
        <li>Weather description: {weatherInfo.weatherDescription}</li>
        <li>Cloud coverage: {weatherInfo.clouds}%</li>
        <li>Sunrise: {weatherInfo.sunrise}</li>
        <li>Sunset: {weatherInfo.sunset}</li>
        <li>Rain probability: {weatherInfo.pop}%</li>
        <li>Humidity: {weatherInfo.humidity}</li>
        <li>Windspeed: {Math.round(weatherInfo.windSpeed * 10) / 10} m/s</li>
      </ul>
    </div>
  );
}
export default WeatherInfo;
