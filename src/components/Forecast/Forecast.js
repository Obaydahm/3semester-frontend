import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
function Forecast({
  notFound,
  setNotFound,
  setCity,
  city,
  facade,
  search,
  setSearch
}) {
  const match = useRouteMatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await facade
        .fetchCityInfo(match.params.cityName)
        .then(setNotFound(false))
        .catch(e => setNotFound(true));
      setCity(result);
      setSearch(match.params.cityName); // necessary if you type the city manually in the url
      localStorage.setItem("search", match.params.cityName);
    };
    fetchData();
  }, []);

  return (
    <div>
      {notFound === true ? (
        <h1>404</h1>
      ) : (
        <div>
          <h1>{search}</h1>
          <Link to={match.url + "/info"} className="link-style">
            City Info
          </Link>
          {city !== "" && city !== undefined
            ? city.weatherList.map((w, i) => (
                <Link key={i} to={match.url + "/" + w.date}>
                  {w.date}
                </Link>
              ))
            : "Loading..."}
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
export default Forecast;
