import React from "react";
import { useRouteMatch } from "react-router-dom";
function WeatherInfo({ city, setCity, facade, notFound, setNotFound }) {
  const match = useRouteMatch();
  let weatherInfo;
  let result = "";
  if (city !== "") {
    result = city.weatherList.find(w => w.date == match.params.date);
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
    <p>{weatherInfo.pop}</p>
  );
}
export default WeatherInfo;