import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
function Forecast({ notFound, setNotFound, setCity, city, facade, search }) {
  let match = useRouteMatch();
  const linkStyle = {
    fontSize: "20px",
    color: "#999999"
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await facade
        .fetchCityInfo(match.params.cityName)
        .then(setNotFound(false))
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
      <h1>{search}</h1>
      {notFound === true ? <h1>not found</h1> : JSON.stringify(city)}
      <br />
    </div>
  );
}
export default Forecast;
