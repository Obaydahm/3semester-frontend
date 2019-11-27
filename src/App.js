import React, { useState, useEffect } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import Search from "./components/Search/Search";
import CityInfo from "./components/CityInfo/CityInfo";
import "./App.css";
function App({ facade }) {
  library.add(fas, fal);
  const [searches, setSearches] = useState([]);
  const [search, setSearch] = useState("");
  const fetchCity = city => facade.fetchCityInfo(city);
  let city = {};

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home fetchCity={fetchCity} search={search} />
        </Route>
        <Route path="/search">
          <Search
            searches={searches}
            setSearches={setSearches}
            search={search}
            setSearch={setSearch}
          />
        </Route>
        <Route path="/cityinfo">
          <CityInfo facade={facade} />
        </Route>
      </Router>
    </div>
  );
}
function Home({ fetchCity, search }) {
  let cityInfo = {};
  const linkStyle = {
    fontSize: "20px",
    color: "#999999"
  };
  return (
    <div>
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
export default App;
