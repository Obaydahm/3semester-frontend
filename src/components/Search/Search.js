import React, { useState } from "react";
import { Link } from "react-router-dom";
import magnifier from "./icons/magnifying-glass.svg";
import exit from "./icons/exit.svg";
import "./Search.css";
function Search({ searches, setSearches }) {
  const [search, setSearch] = useState();
  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (localStorage.getItem("searches") !== "") {
      searches = localStorage.getItem("searches").split(",");
    }
    searches.unshift(
      search.charAt(0).toUpperCase() + search.substring(1).toLowerCase()
    );
    if (searches.length > 5) {
      searches.pop();
    }
    setSearches(searches);
    setSearch("");
    localStorage.setItem("searches", searches);
  }
  return (
    <div className="search-wrapper">
      <Link to="/">
        <img src={exit} className="search-exit" />
      </Link>
      <h1>Search for a city</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            onChange={handleChange}
            type="text"
            value={search}
            placeholder="Search for a city ..."
          ></input>
          <button onClick={handleSubmit}>
            <img className="search-magnifier" src={magnifier} />
          </button>
        </div>
      </form>
      <h4>Latest searches</h4>
      <ul>
        {localStorage.getItem("searches") !== "" ? (
          localStorage
            .getItem("searches")
            .split(",")
            .map((search, index) => (
              <li key={index}>
                <Link to={search}>{search}</Link>
              </li>
            ))
        ) : (
          <p>Nothing to see here &#128521;</p>
        )}
      </ul>
    </div>
  );
}

export default Search;
