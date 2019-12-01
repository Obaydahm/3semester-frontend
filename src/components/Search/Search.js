import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import exit from "./icons/exit.svg";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search({ city, search, setSearch }) {
  document.body.style = "background: #34303b;";
  const [searches, setSearches] = useState([]);
  function handleHref(event) {
    setSearch(event.target.innerHTML.toLowerCase());
  }
  const iconCloudStyle = {
    fontSize: "60px",
    color: "#f2f8ff"
  };
  const iconSunStyle = {
    fontSize: "30px",
    color: "yellow",
    marginTop: "27px",
    marginLeft: "-5px"
  };
  const spanStyle = {
    padding: "45px 0px"
  };

  const history = useHistory();

  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const capitalizedSearch =
      search.charAt(0).toUpperCase() + search.substring(1).toLowerCase();
    const loadedSearches = localStorage.getItem("searches");
    let _searches = [];
    if (loadedSearches !== null) {
      _searches = loadedSearches.split(",");
      _searches = _searches.filter(
        s => s.toLowerCase() !== search.toLowerCase()
      );
    }
    _searches.unshift(capitalizedSearch);
    if (_searches.length > 5) _searches.pop();
    localStorage.setItem("searches", _searches);
    setSearches(_searches);
    history.push("/forecast/" + search);
    setSearch("");
  }

  return (
    <div className="search-wrapper">
      {city === undefined || city === "" ? (
        ""
      ) : (
        <Link to={"/forecast/" + search}>
          <img alt="exit-icon" src={exit} className="search-exit" />
        </Link>
      )}

      <span className="fa-layers fa-fw" style={spanStyle}>
        <FontAwesomeIcon icon="circle" style={iconSunStyle} />
        <FontAwesomeIcon icon="cloud" style={iconCloudStyle} />
      </span>

      <h1>Search for a city</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            onFocus={element => (element.target.value = "")}
            id="search-input"
            onChange={handleChange}
            type="text"
            value={search}
            placeholder="Search for a city ..."
          ></input>
          <button onClick={handleSubmit}>
            <FontAwesomeIcon
              icon={["fal", "search-location"]}
              className="search-magnifier"
            />
          </button>
        </div>
      </form>
      <h4>Latest searches</h4>
      <ul>
        {localStorage.getItem("searches") !== null ? (
          localStorage
            .getItem("searches")
            .split(",")
            .map((search, index) => (
              <li key={index}>
                <Link
                  onClick={handleHref}
                  to={"/forecast/" + search.toLowerCase()}
                >
                  {search}
                </Link>
              </li>
            ))
        ) : (
          <p>
            Nothing to see here{" "}
            <span role="img" aria-label="wink-smiley">
              &#128521;
            </span>
          </p>
        )}
      </ul>
    </div>
  );
}

export default Search;
